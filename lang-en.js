// =====================================================================
//  ENGLISH LANGUAGE PACK
// =====================================================================

registerLanguage('en', {

// =============================================================================
//  HEADER
// =============================================================================
'header.title': 'Historical <b>Board Game</b> Map Maker',
'header.subtitle': 'Historical board game map creator',

// =============================================================================
//  LANGUAGE
// =============================================================================
'lang.label': 'Language',

// =============================================================================
//  PANELS
// =============================================================================
'panel.year': '📅 Historical Year',
'panel.style': '🎨 Map Style & Borders',
'panel.colors': '🏳️ Nation Colors',
'panel.tools': '🛠️ Tools',
'panel.annotations': '📋 Annotations',
'panel.import': '📂 Import GeoJSON',
'panel.export': '💾 Export',

// =============================================================================
//  ERAS
// =============================================================================
'era.prehistory': 'Prehistory',
'era.antiquity': 'Antiquity',
'era.firstmill': '1st Millennium',
'era.medieval': 'Middle Ages',
'era.earlymodern': 'Early Modern',
'era.nineteenth': '19th Century',
'era.twentieth': '20th Century',
'era.twentyfirst': '2000s',

// =============================================================================
//  YEAR FORMATTING
// =============================================================================
'year.bc': 'BC',
'year.ad': 'AD',

// =============================================================================
//  BASEMAP
// =============================================================================
'basemap.label': 'Base map',
'basemap.physical': '🌍 Physical',
'basemap.relief': '🏔️ Shaded Relief',
'basemap.natgeo': '🗺️ National Geographic',
'basemap.topo': '📊 Topographic',
'basemap.satellite': '🛰️ Satellite',
'basemap.dark': '🌑 Dark',
'basemap.watercolor': '🎨 Watercolor',
'basemap.none': '⬜ None',

// =============================================================================
//  BORDER STYLES
// =============================================================================
'border.style.label': 'Border style',
'border.solid': '── Solid',
'border.dashed': '- - - Dashed',
'border.dotted': '· · · Dotted',
'border.dashdot': '-·-·- Dash-Dot',
'border.longdash': '— — Long Dash',
'border.double': '═══ Double Line',
'border.sketch': '∿∿∿ Sketch',
'border.railroad': '┼┼┼ Railroad',

'border.desc.solid': 'Continuous line',
'border.desc.dashed': 'Regular dashes',
'border.desc.dotted': 'Evenly spaced dots',
'border.desc.dashdot': 'Dash-dot alternation',
'border.desc.longdash': 'Long dashes',
'border.desc.double': 'Double line',
'border.desc.sketch': 'Sketch style',
'border.desc.railroad': 'Railroad style',

'border.width': 'Border width',
'border.color': 'Border color',
'border.px': 'px',

// =============================================================================
//  FILL
// =============================================================================
'fill.opacity': 'Fill opacity',

// =============================================================================
//  NATION COLORS / SELECTION
// =============================================================================
'colors.selected': 'Selected nations',
'colors.hint': 'Click = select · Ctrl/⌘+Click = add · Shift+Click = range',
'colors.empty': 'Click on nations on the map',
'colors.all': '✅ All',
'colors.invert': '🔄 Invert',
'colors.none': '✖ None',
'colors.apply.label': 'Apply color:',
'colors.custom.label': 'Custom:',
'colors.apply': 'Apply',
'colors.reset': '↺ Reset',

// =============================================================================
//  TOOLS
// =============================================================================
'tool.navigate': '🖱️ Navigate',
'tool.text': '✏️ Text',
'tool.flag': '🏴 Flag',

// =============================================================================
//  TEXT TOOL
// =============================================================================
'text.label': 'Text',
'text.placeholder': 'Type here...',
'text.size': 'Size',
'text.color': 'Color',
'text.bold': 'Bold',
'text.outline': 'Outline',
'text.rotation': 'Rotation',

// =============================================================================
//  FLAG TOOL
// =============================================================================
'flag.shape': 'Flag shape',
'flag.circle': '🔵 Round',
'flag.rect': '🟦 Rectangular',
'flag.search': 'Search',
'flag.search.placeholder': 'e.g.: Italy, Germany...',
'flag.size': 'Size',
'flag.upload.title': 'Upload custom flag',
'flag.upload.desc': 'PNG, SVG, JPG — click or drag',
'flag.name.placeholder': 'Name...',
'flag.add': '➕ Add',
'flag.builtin': 'Built-in flags',
'flag.custom.section': '📁 Custom flags',
'flag.select.hint': '👆 Select, then click on the map',
'flag.selected': '✅ {name} — click on map',

// =============================================================================
//  ANNOTATIONS
// =============================================================================
'ann.empty': 'No annotations.',
'ann.removeall': '🗑️ Remove all',

// =============================================================================
//  IMPORT
// =============================================================================
'import.hint': 'Load custom GeoJSON borders.',

// =============================================================================
//  EXPORT
// =============================================================================
'export.format': 'Format',
'export.png': 'PNG (raster image)',
'export.pdf': 'PDF (printable document)',
'export.svg': 'SVG (vector)',
'export.width': 'Width',
'export.height': 'Height',
'export.page': 'Page size',
'export.custom.mm': 'Custom (mm)',
'export.orientation': 'Orientation',
'export.landscape': '🖼️ Landscape',
'export.portrait': '📄 Portrait',
'export.dpi': 'DPI',
'export.view.info': '📐 <b>Exports the visible map area.</b><br>Zoom and position before exporting.',
'export.world': '🌍 World view',
'export.fit': '📐 Fit to data',
'export.button': '💾 Export Current View',

// =============================================================================
//  EXPORT MODAL
// =============================================================================
'export.modal.title': '⏳ Exporting',
'export.preparing': 'Preparing...',
'export.rendering.tiles': 'Rendering base tiles...',
'export.rendering.poly': 'Rendering polygons...',
'export.generating': 'Generating file...',
'export.done': '✅ Done!',

// =============================================================================
//  STATUS MESSAGES
// =============================================================================
'status.ready': 'Ready',
'status.loading': 'Loading {year}...',
'status.loaded': '{year}: {count} territories ✓',
'status.cached': '{year}: {count} territories (cached)',
'status.error': '❌ {year}: {msg}',
'status.nation.selected': '{count} nation selected',
'status.nations.selected': '{count} nations selected',
'status.all.selected': 'All {count} nations selected',
'status.inverted': '{count} nations selected (inverted)',
'status.deselected': 'Selection cleared',
'status.color.applied': 'Color {color} applied to {count} nation(s)',
'status.colors.reset': 'Colors reset',
'status.select.nation.first': '⚠️ Select at least one nation first!',
'status.text.placed': 'Text "{text}" placed',
'status.flag.placed': '{name} placed',
'status.flag.select.first': '⚠️ Select a flag first!',
'status.custom.added': 'Flag "{name}" added',
'status.custom.removed': 'Custom flag removed',
'status.ann.removed': 'Removed',
'status.ann.cleared': 'All removed',
'status.imported': 'Imported: {count} territories',
'status.format.unsupported': 'Unsupported format.',

// =============================================================================
//  BANNER MESSAGES
// =============================================================================
'banner.text': '✏️ Click on the map to place text',
'banner.flag.select': '🏴 Select a flag',
'banner.flag.place': '🏴 Click to place: {name}',
'banner.custom.place': '📁 Click to place: {name}',
'banner.cancel': '✕ Cancel',

// =============================================================================
//  LOADING
// =============================================================================
'loading.text': 'Loading...',

// =============================================================================
//  COUNTRIES
// =============================================================================
'country.us': 'United States',
'country.gb': 'United Kingdom',
'country.fr': 'France',
'country.de': 'Germany',
'country.it': 'Italy',
'country.jp': 'Japan',
'country.ru': 'Russia / USSR',
'country.cn': 'China',
'country.ca': 'Canada',
'country.au': 'Australia',
'country.br': 'Brazil',
'country.in': 'India',
'country.es': 'Spain',
'country.pt': 'Portugal',
'country.nl': 'Netherlands',
'country.be': 'Belgium',
'country.pl': 'Poland',
'country.tr': 'Turkey',
'country.mx': 'Mexico',
'country.ar': 'Argentina',
'country.se': 'Sweden',
'country.no': 'Norway',
'country.fi': 'Finland',
'country.dk': 'Denmark',
'country.gr': 'Greece',
'country.at': 'Austria',
'country.hu': 'Hungary',
'country.ro': 'Romania',
'country.bg': 'Bulgaria',
'country.rs': 'Serbia',
'country.hr': 'Croatia',
'country.ch': 'Switzerland',
'country.ie': 'Ireland',
'country.za': 'South Africa',
'country.eg': 'Egypt',
'country.sa': 'Saudi Arabia',
'country.ir': 'Iran',
'country.iq': 'Iraq',
'country.th': 'Thailand',
'country.kr': 'South Korea',
'country.nz': 'New Zealand',
'country.ua': 'Ukraine',
'country.cu': 'Cuba',
'country.et': 'Ethiopia',
'country.ng': 'Nigeria',
'country.pk': 'Pakistan',
'country.af': 'Afghanistan',
'country.cl': 'Chile',
'country.co': 'Colombia',
'country.pe': 'Peru',
'country.ve': 'Venezuela',
'country.dz': 'Algeria',
'country.ma': 'Morocco',
'country.ly': 'Libya',
'country.sd': 'Sudan',
'country.tn': 'Tunisia',
'country.sy': 'Syria',
'country.jo': 'Jordan',
'country.lb': 'Lebanon',
'country.il': 'Israel',
'country.mm': 'Myanmar',
'country.vn': 'Vietnam',
'country.ph': 'Philippines',
'country.id': 'Indonesia',
'country.my': 'Malaysia',
'country.bd': 'Bangladesh',
'country.lk': 'Sri Lanka',
'country.ke': 'Kenya'

});