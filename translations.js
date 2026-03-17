// =====================================================================
//  TRANSLATIONS MANAGER
//  Main file - loads individual language files dynamically
// =====================================================================

/**
 * Available languages - each needs a corresponding lang-XX.js file
 */
const LANGUAGES = [
  { code: 'it', name: 'Italiano',  flag: '🇮🇹' },
  { code: 'en', name: 'English',   flag: '🇬🇧' },
  { code: 'fr', name: 'Français',  flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch',   flag: '🇩🇪' },
  { code: 'es', name: 'Español',   flag: '🇪🇸' },
  { code: 'zh', name: '中文',      flag: '🇨🇳' },
  { code: 'ru', name: 'Русский',   flag: '🇷🇺' },
  { code: 'ar', name: 'العربية',   flag: '🇸🇦' }  
];

/**
 * Translations storage - populated by lang-XX.js files
 */
const TRANSLATIONS = {};

/**
 * Current active language code
 */
let currentLanguage = 'en';

/**
 * Fallback language if key not found in current
 */
const FALLBACK_LANGUAGE = 'en';

// =====================================================================
//  TRANSLATION FUNCTIONS
// =====================================================================

/**
 * Get translated string by key
 * @param {string} key - Translation key (e.g., 'panel.year')
 * @param {Object} params - Optional parameters for interpolation
 * @returns {string} Translated string
 * 
 * @example
 * t('status.loaded', { year: '1938', count: 42 })
 * // Returns: "1938: 42 territories ✓"
 */
function t(key, params) {
  let str = TRANSLATIONS[currentLanguage]?.[key]
         || TRANSLATIONS[FALLBACK_LANGUAGE]?.[key]
         || key;
  
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    });
  }
  
  return str;
}

/**
 * Get translated country name by code
 * @param {string} code - Country code (e.g., 'it', 'us')
 * @returns {string} Translated country name
 * 
 * @example
 * tc('it') // Returns: "Italia" (in Italian), "Italy" (in English)
 */
function tc(code) {
  return TRANSLATIONS[currentLanguage]?.['country.' + code]
      || TRANSLATIONS[FALLBACK_LANGUAGE]?.['country.' + code]
      || code.toUpperCase();
}

/**
 * Check if a translation key exists
 * @param {string} key - Translation key
 * @returns {boolean}
 */
function hasTranslation(key) {
  return !!(TRANSLATIONS[currentLanguage]?.[key] || TRANSLATIONS[FALLBACK_LANGUAGE]?.[key]);
}

// =====================================================================
//  DOM BINDING
// =====================================================================

/**
 * Apply translations to all elements with data-i18n attributes
 * 
 * Supported attributes:
 *   data-i18n="key"              → sets textContent
 *   data-i18n-html="key"         → sets innerHTML (for embedded tags)
 *   data-i18n-placeholder="key"  → sets placeholder attribute
 *   data-i18n-title="key"        → sets title attribute
 *   data-i18n-aria="key"         → sets aria-label attribute
 */
function applyI18n() {
  // Text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) el.textContent = t(key);
  });
  
  // HTML content (allows <b>, <span>, etc.)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (key) el.innerHTML = t(key);
  });
  
  // Placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) el.placeholder = t(key);
  });
  
  // Title (tooltip)
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (key) el.title = t(key);
  });
  
  // Aria label (accessibility)
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (key) el.setAttribute('aria-label', t(key));
  });
}

// =====================================================================
//  LANGUAGE MANAGEMENT
// =====================================================================

/**
 * Set the active language and refresh UI
 * @param {string} lang - Language code (e.g., 'en', 'it', 'fr')
 */
function setLanguage(lang) {
  // Validate language exists
  if (!TRANSLATIONS[lang]) {
    console.warn(`Language '${lang}' not loaded, falling back to '${FALLBACK_LANGUAGE}'`);
    lang = FALLBACK_LANGUAGE;
  }
  
  currentLanguage = lang;
  
  // Persist choice
  try {
    localStorage.setItem('mapmaker-lang', lang);
  } catch (e) {
    // localStorage may be unavailable
  }
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  // Update language selector if exists
  const sel = document.getElementById('lang-sel');
  if (sel) sel.value = lang;
  
  // Apply static translations
  applyI18n();
  
  // Rebuild dynamic UI components (defined in main app)
  if (typeof rebuildAllUI === 'function') {
    rebuildAllUI();
  }
}

/**
 * Get the current active language code
 * @returns {string}
 */
function getLanguage() {
  return currentLanguage;
}

/**
 * Get list of available languages
 * @returns {Array<{code: string, name: string, flag: string}>}
 */
function getAvailableLanguages() {
  return LANGUAGES.filter(l => TRANSLATIONS[l.code]);
}

/**
 * Initialize language from stored preference or browser setting
 * Should be called after all lang-XX.js files are loaded
 */
function initLanguage() {
  let lang = FALLBACK_LANGUAGE;
  
  // Try localStorage first
  try {
    const saved = localStorage.getItem('mapmaker-lang');
    if (saved && TRANSLATIONS[saved]) {
      lang = saved;
    }
  } catch (e) {
    // localStorage unavailable
  }
  
  // If not saved, try browser language
  if (lang === FALLBACK_LANGUAGE) {
    const browserLang = navigator.language?.slice(0, 2).toLowerCase();
    if (browserLang && TRANSLATIONS[browserLang]) {
      lang = browserLang;
    }
  }
  
  currentLanguage = lang;
  document.documentElement.lang = lang;
}

// =====================================================================
//  LANGUAGE FILE REGISTRATION
// =====================================================================

/**
 * Register a language pack
 * Called by individual lang-XX.js files
 * 
 * @param {string} code - Language code
 * @param {Object} translations - Key-value translation pairs
 * 
 * @example
 * // In lang-fr.js:
 * registerLanguage('fr', {
 *   'panel.year': '📅 Année Historique',
 *   // ...
 * });
 */
function registerLanguage(code, translations) {
  TRANSLATIONS[code] = translations;
  console.log(`Language registered: ${code} (${Object.keys(translations).length} keys)`);
}

/**
 * Extend an existing language pack (for modular loading)
 * @param {string} code - Language code
 * @param {Object} translations - Additional translations to merge
 */
function extendLanguage(code, translations) {
  if (!TRANSLATIONS[code]) {
    TRANSLATIONS[code] = {};
  }
  Object.assign(TRANSLATIONS[code], translations);
}

// =====================================================================
//  UTILITY FUNCTIONS
// =====================================================================

/**
 * Format a number according to current language locale
 * @param {number} num 
 * @returns {string}
 */
function formatNumber(num) {
  try {
    return num.toLocaleString(currentLanguage);
  } catch (e) {
    return num.toString();
  }
}

/**
 * Get language direction (ltr or rtl)
 * @param {string} lang - Language code (optional, defaults to current)
 * @returns {'ltr'|'rtl'}
 */
function getLanguageDirection(lang) {
  lang = lang || currentLanguage;
  const rtlLanguages = ['ar', 'he', 'fa', 'ur'];
  return rtlLanguages.includes(lang) ? 'rtl' : 'ltr';
}

/**
 * Populate a language selector dropdown
 * @param {string|HTMLElement} selector - CSS selector or element
 */
function populateLanguageSelector(selector) {
  const el = typeof selector === 'string' 
    ? document.querySelector(selector) 
    : selector;
  
  if (!el) return;
  
  el.innerHTML = LANGUAGES
    .filter(l => TRANSLATIONS[l.code])
    .map(l => `<option value="${l.code}" ${l.code === currentLanguage ? 'selected' : ''}>${l.flag} ${l.name}</option>`)
    .join('');
}

// =====================================================================
//  DEBUG HELPERS
// =====================================================================

/**
 * Find missing translation keys across languages
 * @returns {Object} Missing keys per language
 */
function findMissingTranslations() {
  const allKeys = new Set();
  Object.values(TRANSLATIONS).forEach(lang => {
    Object.keys(lang).forEach(key => allKeys.add(key));
  });
  
  const missing = {};
  LANGUAGES.forEach(l => {
    if (!TRANSLATIONS[l.code]) {
      missing[l.code] = ['(language not loaded)'];
      return;
    }
    const langMissing = [];
    allKeys.forEach(key => {
      if (!TRANSLATIONS[l.code][key]) {
        langMissing.push(key);
      }
    });
    if (langMissing.length) {
      missing[l.code] = langMissing;
    }
  });
  
  return missing;
}

/**
 * Export all translations to JSON (for debugging/backup)
 * @returns {string} JSON string
 */
function exportTranslationsJSON() {
  return JSON.stringify(TRANSLATIONS, null, 2);
}

// =====================================================================
//  AUTO-INITIALIZATION
// =====================================================================

// Initialize when DOM is ready (if not manually initialized)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure all lang files are loaded
    setTimeout(initLanguage, 10);
  });
} else {
  setTimeout(initLanguage, 10);
}