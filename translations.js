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
  let s = TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS[FALLBACK_LANGUAGE]?.[key] || key;
  if (params) for (const [k, v] of Object.entries(params)) s = s.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
  return s;
}

function tc(code) {
  return TRANSLATIONS[currentLanguage]?.['country.' + code]
      || TRANSLATIONS[FALLBACK_LANGUAGE]?.['country.' + code]
      || code.toUpperCase();
}

function hasTranslation(key) {
  return !!(TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS[FALLBACK_LANGUAGE]?.[key]);
}

// --- DOM binding ---------------------------------------------------------
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.getAttribute('data-i18n'); if (k) el.textContent = t(k); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { const k = el.getAttribute('data-i18n-html'); if (k) el.innerHTML = t(k); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { const k = el.getAttribute('data-i18n-placeholder'); if (k) el.placeholder = t(k); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { const k = el.getAttribute('data-i18n-title'); if (k) el.title = t(k); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { const k = el.getAttribute('data-i18n-aria'); if (k) el.setAttribute('aria-label', t(k)); });
}

// --- Language management -------------------------------------------------
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = FALLBACK_LANGUAGE;
  currentLanguage = lang;
  try { localStorage.setItem('mapmaker-lang', lang); } catch (e) {}
  document.documentElement.lang = lang;
  const sel = document.getElementById('lang-sel');
  if (sel) sel.value = lang;
  applyI18n();
  if (typeof rebuildAllUI === 'function') rebuildAllUI();
}

function getLanguage() { return currentLanguage; }
function getAvailableLanguages() { return LANGUAGES.filter(l => TRANSLATIONS[l.code]); }

function initLanguage() {
  let lang = FALLBACK_LANGUAGE;
  try { const s = localStorage.getItem('mapmaker-lang'); if (s && TRANSLATIONS[s]) lang = s; } catch (e) {}
  if (lang === FALLBACK_LANGUAGE) {
    const b = navigator.language?.slice(0, 2).toLowerCase();
    if (b && TRANSLATIONS[b]) lang = b;
  }
  currentLanguage = lang;
  document.documentElement.lang = lang;
}

// --- Utilities -----------------------------------------------------------
function formatNumber(num) { try { return num.toLocaleString(currentLanguage); } catch (e) { return '' + num; } }
function getLanguageDirection(lang) { return ['ar','he','fa','ur'].includes(lang || currentLanguage) ? 'rtl' : 'ltr'; }

function populateLanguageSelector(sel) {
  const el = typeof sel === 'string' ? document.querySelector(sel) : sel;
  if (el) el.innerHTML = LANGUAGES.filter(l => TRANSLATIONS[l.code]).map(l => `<option value="${l.code}" ${l.code === currentLanguage ? 'selected' : ''}>${l.flag} ${l.name}</option>`).join('');
}

// --- Debug ---------------------------------------------------------------
function findMissingTranslations() {
  const all = new Set(); Object.values(TRANSLATIONS).forEach(l => Object.keys(l).forEach(k => all.add(k)));
  const m = {};
  LANGUAGES.forEach(l => { if (!TRANSLATIONS[l.code]) { m[l.code] = ['(not loaded)']; return; }
    const missing = []; all.forEach(k => { if (!TRANSLATIONS[l.code][k]) missing.push(k); });
    if (missing.length) m[l.code] = missing;
  });
  return m;
}