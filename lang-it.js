// =====================================================================
//  ITALIAN LANGUAGE PACK
// =====================================================================

registerLanguage('it', {

// =============================================================================
//  HEADER
// =============================================================================
'header.title': 'Creatore Mappe <b>Giochi da Tavolo</b> Storici',
'header.subtitle': 'Creatore di mappe storiche per giochi da tavolo',

// =============================================================================
//  LANGUAGE
// =============================================================================
'lang.label': 'Lingua',

// =============================================================================
//  PANELS
// =============================================================================
'panel.year': '📅 Anno Storico',
'panel.style': '🎨 Stile Mappa e Confini',
'panel.colors': '🏳️ Colori Nazioni',
'panel.tools': '🛠️ Strumenti',
'panel.annotations': '📋 Annotazioni',
'panel.import': '📂 Importa GeoJSON',
'panel.export': '💾 Esporta',

// =============================================================================
//  ERAS
// =============================================================================
'era.prehistory': 'Preistoria',
'era.antiquity': 'Antichità',
'era.firstmill': 'I Millennio',
'era.medieval': 'Medioevo',
'era.earlymodern': 'Età Moderna',
'era.nineteenth': 'Ottocento',
'era.twentieth': 'Novecento',
'era.twentyfirst': 'Duemila',

// =============================================================================
//  YEAR FORMATTING
// =============================================================================
'year.bc': 'a.C.',
'year.ad': 'd.C.',

// =============================================================================
//  BASEMAP
// =============================================================================
'basemap.label': 'Mappa di base',
'basemap.physical': '🌍 Fisica',
'basemap.relief': '🏔️ Rilievo ombreggiato',
'basemap.natgeo': '🗺️ National Geographic',
'basemap.topo': '📊 Topografica',
'basemap.satellite': '🛰️ Satellite',
'basemap.dark': '🌑 Scura',
'basemap.watercolor': '🎨 Acquerello',
'basemap.none': '⬜ Nessuna',

// =============================================================================
//  BORDER STYLES
// =============================================================================
'border.style.label': 'Finitura confini',
'border.solid': '── Solido',
'border.dashed': '- - - Tratteggiato',
'border.dotted': '· · · Puntinato',
'border.dashdot': '-·-·- Tratto-punto',
'border.longdash': '— — Tratto lungo',
'border.double': '═══ Doppia linea',
'border.sketch': '∿∿∿ Bozzetto',
'border.railroad': '┼┼┼ Ferrovia',

'border.desc.solid': 'Linea continua',
'border.desc.dashed': 'Tratteggio regolare',
'border.desc.dotted': 'Punti equidistanti',
'border.desc.dashdot': 'Alternanza tratto-punto',
'border.desc.longdash': 'Tratti lunghi',
'border.desc.double': 'Doppia linea',
'border.desc.sketch': 'Stile bozzetto',
'border.desc.railroad': 'Stile ferrovia',

'border.width': 'Spessore confini',
'border.color': 'Colore confini',
'border.px': 'px',

// =============================================================================
//  FILL
// =============================================================================
'fill.opacity': 'Opacità riempimento',

// =============================================================================
//  NATION COLORS / SELECTION
// =============================================================================
'colors.selected': 'Nazioni selezionate',
'colors.hint': 'Click = seleziona · Ctrl/⌘+Click = aggiungi · Shift+Click = intervallo',
'colors.empty': 'Clicca sulle nazioni nella mappa',
'colors.all': '✅ Tutte',
'colors.invert': '🔄 Inverti',
'colors.none': '✖ Nessuna',
'colors.apply.label': 'Applica colore:',
'colors.custom.label': 'Personalizzato:',
'colors.apply': 'Applica',
'colors.reset': '↺ Reset',

// =============================================================================
//  TOOLS
// =============================================================================
'tool.navigate': '🖱️ Naviga',
'tool.text': '✏️ Testo',
'tool.flag': '🏴 Bandiera',

// =============================================================================
//  TEXT TOOL
// =============================================================================
'text.label': 'Testo',
'text.placeholder': 'Scrivi qui...',
'text.size': 'Dimensione',
'text.color': 'Colore',
'text.bold': 'Grassetto',
'text.outline': 'Contorno',
'text.rotation': 'Rotazione',

// =============================================================================
//  FLAG TOOL
// =============================================================================
'flag.shape': 'Forma bandiera',
'flag.circle': '🔵 Tonda',
'flag.rect': '🟦 Rettangolare',
'flag.search': 'Cerca',
'flag.search.placeholder': 'es: Italia, Germania...',
'flag.size': 'Dimensione',
'flag.upload.title': 'Carica bandiera personalizzata',
'flag.upload.desc': 'PNG, SVG, JPG — clicca o trascina',
'flag.name.placeholder': 'Nome...',
'flag.add': '➕ Aggiungi',
'flag.builtin': 'Bandiere predefinite',
'flag.custom.section': '📁 Bandiere personalizzate',
'flag.select.hint': '👆 Seleziona, poi clicca sulla mappa',
'flag.selected': '✅ {name} — clicca sulla mappa',

// =============================================================================
//  ANNOTATIONS
// =============================================================================
'ann.empty': 'Nessuna annotazione.',
'ann.removeall': '🗑️ Rimuovi tutte',

// =============================================================================
//  IMPORT
// =============================================================================
'import.hint': 'Carica confini personalizzati in formato GeoJSON.',

// =============================================================================
//  EXPORT
// =============================================================================
'export.format': 'Formato',
'export.png': 'PNG (immagine raster)',
'export.pdf': 'PDF (documento stampabile)',
'export.svg': 'SVG (vettoriale)',
'export.width': 'Larghezza',
'export.height': 'Altezza',
'export.page': 'Formato pagina',
'export.custom.mm': 'Personalizzato (mm)',
'export.orientation': 'Orientamento',
'export.landscape': '🖼️ Orizzontale',
'export.portrait': '📄 Verticale',
'export.dpi': 'DPI',
'export.view.info': '📐 <b>Esporta l\'area visibile sulla mappa.</b><br>Zoom e posiziona prima di esportare.',
'export.world': '🌍 Vista mondo',
'export.fit': '📐 Adatta ai dati',
'export.button': '💾 Esporta Vista Corrente',

// =============================================================================
//  EXPORT MODAL
// =============================================================================
'export.modal.title': '⏳ Esportazione in corso',
'export.preparing': 'Preparazione...',
'export.rendering.tiles': 'Rendering livelli base...',
'export.rendering.poly': 'Rendering poligoni...',
'export.generating': 'Generazione file...',
'export.done': '✅ Completato!',

// =============================================================================
//  STATUS MESSAGES
// =============================================================================
'status.ready': 'Pronto',
'status.loading': 'Caricamento {year}...',
'status.loaded': '{year}: {count} territori ✓',
'status.cached': '{year}: {count} territori (cache)',
'status.error': '❌ {year}: {msg}',
'status.nation.selected': '{count} nazione selezionata',
'status.nations.selected': '{count} nazioni selezionate',
'status.all.selected': 'Tutte le {count} nazioni selezionate',
'status.inverted': '{count} nazioni selezionate (invertite)',
'status.deselected': 'Selezione annullata',
'status.color.applied': 'Colore {color} applicato a {count} nazione/i',
'status.colors.reset': 'Colori reimpostati',
'status.select.nation.first': '⚠️ Seleziona almeno una nazione!',
'status.text.placed': 'Testo "{text}" posizionato',
'status.flag.placed': '{name} posizionata',
'status.flag.select.first': '⚠️ Seleziona prima una bandiera!',
'status.custom.added': 'Bandiera "{name}" aggiunta',
'status.custom.removed': 'Bandiera personalizzata rimossa',
'status.ann.removed': 'Rimossa',
'status.ann.cleared': 'Tutte rimosse',
'status.imported': 'Importati: {count} territori',
'status.format.unsupported': 'Formato non supportato.',

// =============================================================================
//  BANNER MESSAGES
// =============================================================================
'banner.text': '✏️ Clicca sulla mappa per posizionare il testo',
'banner.flag.select': '🏴 Seleziona una bandiera',
'banner.flag.place': '🏴 Clicca per posizionare: {name}',
'banner.custom.place': '📁 Clicca per posizionare: {name}',
'banner.cancel': '✕ Annulla',

// =============================================================================
//  LOADING
// =============================================================================
'loading.text': 'Caricamento...',

// =============================================================================
//  COUNTRIES
// =============================================================================
'country.us': 'Stati Uniti',
'country.gb': 'Regno Unito',
'country.fr': 'Francia',
'country.de': 'Germania',
'country.it': 'Italia',
'country.jp': 'Giappone',
'country.ru': 'Russia / URSS',
'country.cn': 'Cina',
'country.ca': 'Canada',
'country.au': 'Australia',
'country.br': 'Brasile',
'country.in': 'India',
'country.es': 'Spagna',
'country.pt': 'Portogallo',
'country.nl': 'Paesi Bassi',
'country.be': 'Belgio',
'country.pl': 'Polonia',
'country.tr': 'Turchia',
'country.mx': 'Messico',
'country.ar': 'Argentina',
'country.se': 'Svezia',
'country.no': 'Norvegia',
'country.fi': 'Finlandia',
'country.dk': 'Danimarca',
'country.gr': 'Grecia',
'country.at': 'Austria',
'country.hu': 'Ungheria',
'country.ro': 'Romania',
'country.bg': 'Bulgaria',
'country.rs': 'Serbia',
'country.hr': 'Croazia',
'country.ch': 'Svizzera',
'country.ie': 'Irlanda',
'country.za': 'Sudafrica',
'country.eg': 'Egitto',
'country.sa': 'Arabia Saudita',
'country.ir': 'Iran',
'country.iq': 'Iraq',
'country.th': 'Thailandia',
'country.kr': 'Corea del Sud',
'country.nz': 'Nuova Zelanda',
'country.ua': 'Ucraina',
'country.cu': 'Cuba',
'country.et': 'Etiopia',
'country.ng': 'Nigeria',
'country.pk': 'Pakistan',
'country.af': 'Afghanistan',
'country.cl': 'Cile',
'country.co': 'Colombia',
'country.pe': 'Perù',
'country.ve': 'Venezuela',
'country.dz': 'Algeria',
'country.ma': 'Marocco',
'country.ly': 'Libia',
'country.sd': 'Sudan',
'country.tn': 'Tunisia',
'country.sy': 'Siria',
'country.jo': 'Giordania',
'country.lb': 'Libano',
'country.il': 'Israele',
'country.mm': 'Myanmar',
'country.vn': 'Vietnam',
'country.ph': 'Filippine',
'country.id': 'Indonesia',
'country.my': 'Malesia',
'country.bd': 'Bangladesh',
'country.lk': 'Sri Lanka',
'country.ke': 'Kenya'

});