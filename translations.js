// =====================================================================
//  TRANSLATIONS MANAGER — loads from single translations.json
//  Format: each key has all languages inline (table-style)
// =====================================================================

let LANGUAGES = [];
const TRANSLATIONS = {};
let currentLanguage = 'en';
const FALLBACK_LANGUAGE = 'en';

// --- Load & transpose ---------------------------------------------------
async function loadTranslations() {
  try {
    const r = await fetch('translations.json');
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const data = await r.json();
    
    if (data.languages) LANGUAGES = data.languages;
    
    // Transpose: { key: {en:"...",it:"..."} } → { en: {key:"..."}, it: {key:"..."} }
    if (data.strings) {
      for (const [key, langs] of Object.entries(data.strings)) {
        for (const [lang, str] of Object.entries(langs)) {
          if (!TRANSLATIONS[lang]) TRANSLATIONS[lang] = {};
          TRANSLATIONS[lang][key] = str;
        }
      }
    }
    
    console.log(`Translations: ${Object.keys(TRANSLATIONS).length} langs, ${Object.keys(data.strings || {}).length} keys`);
  } catch (e) {
    console.error('Failed to load translations:', e);
    LANGUAGES = [{ code: 'en', name: 'English', flag: '🇬🇧' }];
    TRANSLATIONS['en'] = { 'status.ready': 'Ready', 'loading.text': 'Loading...' };
  }
}

// --- Translation functions -----------------------------------------------
function t(key, params) {
  let s = TRANSLATIONS[currentLanguage]?.[key] 
       || TRANSLATIONS[FALLBACK_LANGUAGE]?.[key] 
       || key;
  
  if (!params) return s;
  
  // One-pass replacement to avoid cascading substitutions
  return s.replace(/\{(\w+)\}/g, (match, k) => 
    Object.prototype.hasOwnProperty.call(params, k) 
      ? String(params[k]) 
      : match
  );
}

function tc(code) {
  return TRANSLATIONS[currentLanguage]?.['country.' + code]
      || TRANSLATIONS[FALLBACK_LANGUAGE]?.['country.' + code]
      || code.toUpperCase();
}

function hasTranslation(key) {
  return !!(TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS[FALLBACK_LANGUAGE]?.[key]);
}

// --- Safe HTML for data-i18n-html ----------------------------------------
const ALLOWED_TAGS = ['b', 'i', 'br', 'span', 'strong', 'em'];
function safeHtml(str) {
  // Allow only safe tags, strip everything else
  const tagPattern = new RegExp(`<(?!/?(?:${ALLOWED_TAGS.join('|')})(?:\\s[^>]*)?>)[^>]*>`, 'gi');
  return str.replace(tagPattern, '');
}

// --- DOM binding ---------------------------------------------------------
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (k) el.textContent = t(k);
  });
  
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (k) el.innerHTML = safeHtml(t(k));
  });
  
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (k) el.placeholder = t(k);
  });
  
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const k = el.getAttribute('data-i18n-title');
    if (k) el.title = t(k);
  });
  
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const k = el.getAttribute('data-i18n-aria');
    if (k) el.setAttribute('aria-label', t(k));
  });
}

// --- Language management -------------------------------------------------
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = FALLBACK_LANGUAGE;
  currentLanguage = lang;
  
  try { 
    localStorage.setItem('histboard-lang', lang); 
  } catch (e) {}
  
  document.documentElement.lang = lang;
  document.documentElement.dir = getLanguageDirection(lang);
  
  const sel = document.getElementById('lang-sel');
  if (sel) sel.value = lang;
  
  applyI18n();
  
  // Call UI rebuild without reloading data
  if (typeof rebuildStaticUI === 'function') {
    rebuildStaticUI();
  } else if (typeof rebuildAllUI === 'function') {
    rebuildAllUI();
  }
}

function getLanguage() { 
  return currentLanguage; 
}

function getAvailableLanguages() { 
  return LANGUAGES.filter(l => TRANSLATIONS[l.code]); 
}

function initLanguage() {
  let preferred = FALLBACK_LANGUAGE;
  
  // Try to load from localStorage
  try { 
    const saved = localStorage.getItem('histboard-lang'); 
    if (saved) preferred = saved;
  } catch (e) {}
  
  // Fallback to browser language if nothing saved
  if (preferred === FALLBACK_LANGUAGE) {
    const browserLang = navigator.language?.slice(0, 2).toLowerCase();
    if (browserLang) preferred = browserLang;
  }
  
  // Validate against available translations
  currentLanguage = TRANSLATIONS[preferred] ? preferred : FALLBACK_LANGUAGE;
  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = getLanguageDirection(currentLanguage);
}

// --- Utilities -----------------------------------------------------------
function formatNumber(num) { 
  try { 
    return num.toLocaleString(currentLanguage); 
  } catch (e) { 
    return '' + num; 
  } 
}

function getLanguageDirection(lang) { 
  return ['ar', 'he', 'fa', 'ur'].includes(lang || currentLanguage) ? 'rtl' : 'ltr'; 
}

function populateLanguageSelector(sel) {
  const el = typeof sel === 'string' ? document.querySelector(sel) : sel;
  if (el) {
    el.innerHTML = LANGUAGES
      .filter(l => TRANSLATIONS[l.code])
      .map(l => `<option value="${l.code}" ${l.code === currentLanguage ? 'selected' : ''}>${l.flag} ${l.name}</option>`)
      .join('');
  }
}

// --- Debug (development only) --------------------------------------------
function findMissingTranslations() {
  const allKeys = new Set();
  Object.values(TRANSLATIONS).forEach(langObj => 
    Object.keys(langObj).forEach(k => allKeys.add(k))
  );
  
  const missing = {};
  LANGUAGES.forEach(l => {
    if (!TRANSLATIONS[l.code]) {
      missing[l.code] = ['(language not loaded)'];
      return;
    }
    const missingKeys = [];
    allKeys.forEach(k => {
      if (!TRANSLATIONS[l.code][k]) missingKeys.push(k);
    });
    if (missingKeys.length) missing[l.code] = missingKeys;
  });
  
  return missing;
}

// Expose debug function only in development
if (typeof window !== 'undefined' && 
    (location.hostname === 'localhost' || location.search.includes('debug'))) {
  window.findMissingTranslations = findMissingTranslations;
}