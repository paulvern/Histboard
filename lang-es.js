// =====================================================================
//  SPANISH LANGUAGE PACK
// =====================================================================

registerLanguage('es', {

// =============================================================================
//  HEADER
// =============================================================================
'header.title': 'Creador de Mapas <b>Juegos de Mesa</b> Históricos',
'header.subtitle': 'Creador de mapas históricos para juegos de mesa',

// =============================================================================
//  LANGUAGE
// =============================================================================
'lang.label': 'Idioma',

// =============================================================================
//  PANELS
// =============================================================================
'panel.year': '📅 Año Histórico',
'panel.style': '🎨 Estilo de Mapa y Fronteras',
'panel.colors': '🏳️ Colores de Naciones',
'panel.tools': '🛠️ Herramientas',
'panel.annotations': '📋 Anotaciones',
'panel.import': '📂 Importar GeoJSON',
'panel.export': '💾 Exportar',

// =============================================================================
//  ERAS
// =============================================================================
'era.prehistory': 'Prehistoria',
'era.antiquity': 'Antigüedad',
'era.firstmill': 'I Milenio',
'era.medieval': 'Edad Media',
'era.earlymodern': 'Edad Moderna',
'era.nineteenth': 'Siglo XIX',
'era.twentieth': 'Siglo XX',
'era.twentyfirst': 'Siglo XXI',

// =============================================================================
//  YEAR FORMATTING
// =============================================================================
'year.bc': 'a.C.',
'year.ad': 'd.C.',

// =============================================================================
//  BASEMAP
// =============================================================================
'basemap.label': 'Mapa base',
'basemap.physical': '🌍 Físico',
'basemap.relief': '🏔️ Relieve sombreado',
'basemap.natgeo': '🗺️ National Geographic',
'basemap.topo': '📊 Topográfico',
'basemap.satellite': '🛰️ Satélite',
'basemap.dark': '🌑 Oscuro',
'basemap.watercolor': '🎨 Acuarela',
'basemap.none': '⬜ Ninguno',

// =============================================================================
//  BORDER STYLES
// =============================================================================
'border.style.label': 'Estilo de fronteras',
'border.solid': '── Sólido',
'border.dashed': '- - - Discontinuo',
'border.dotted': '· · · Punteado',
'border.dashdot': '-·-·- Raya-punto',
'border.longdash': '— — Raya larga',
'border.double': '═══ Doble línea',
'border.sketch': '∿∿∿ Boceto',
'border.railroad': '┼┼┼ Ferrocarril',

'border.desc.solid': 'Línea continua',
'border.desc.dashed': 'Rayas regulares',
'border.desc.dotted': 'Puntos equidistantes',
'border.desc.dashdot': 'Alternancia raya-punto',
'border.desc.longdash': 'Rayas largas',
'border.desc.double': 'Doble línea',
'border.desc.sketch': 'Estilo boceto',
'border.desc.railroad': 'Estilo ferrocarril',

'border.width': 'Grosor de fronteras',
'border.color': 'Color de fronteras',
'border.px': 'px',

// =============================================================================
//  FILL
// =============================================================================
'fill.opacity': 'Opacidad de relleno',

// =============================================================================
//  NATION COLORS / SELECTION
// =============================================================================
'colors.selected': 'Naciones seleccionadas',
'colors.hint': 'Clic = seleccionar · Ctrl/⌘+Clic = agregar · Mayús+Clic = rango',
'colors.empty': 'Haga clic en las naciones del mapa',
'colors.all': '✅ Todas',
'colors.invert': '🔄 Invertir',
'colors.none': '✖ Ninguna',
'colors.apply.label': 'Aplicar color:',
'colors.custom.label': 'Personalizado:',
'colors.apply': 'Aplicar',
'colors.reset': '↺ Restablecer',

// =============================================================================
//  TOOLS
// =============================================================================
'tool.navigate': '🖱️ Navegar',
'tool.text': '✏️ Texto',
'tool.flag': '🏴 Bandera',

// =============================================================================
//  TEXT TOOL
// =============================================================================
'text.label': 'Texto',
'text.placeholder': 'Escribe aquí...',
'text.size': 'Tamaño',
'text.color': 'Color',
'text.bold': 'Negrita',
'text.outline': 'Contorno',
'text.rotation': 'Rotación',

// =============================================================================
//  FLAG TOOL
// =============================================================================
'flag.shape': 'Forma de bandera',
'flag.circle': '🔵 Redonda',
'flag.rect': '🟦 Rectangular',
'flag.search': 'Buscar',
'flag.search.placeholder': 'ej.: Italia, Alemania...',
'flag.size': 'Tamaño',
'flag.upload.title': 'Subir bandera personalizada',
'flag.upload.desc': 'PNG, SVG, JPG — clic o arrastrar',
'flag.name.placeholder': 'Nombre...',
'flag.add': '➕ Agregar',
'flag.builtin': 'Banderas predefinidas',
'flag.custom.section': '📁 Banderas personalizadas',
'flag.select.hint': '👆 Seleccione, luego haga clic en el mapa',
'flag.selected': '✅ {name} — clic en el mapa',

// =============================================================================
//  ANNOTATIONS
// =============================================================================
'ann.empty': 'Sin anotaciones.',
'ann.removeall': '🗑️ Eliminar todas',

// =============================================================================
//  IMPORT
// =============================================================================
'import.hint': 'Cargar fronteras GeoJSON personalizadas.',

// =============================================================================
//  EXPORT
// =============================================================================
'export.format': 'Formato',
'export.png': 'PNG (imagen rasterizada)',
'export.pdf': 'PDF (documento imprimible)',
'export.svg': 'SVG (gráfico vectorial)',
'export.width': 'Ancho',
'export.height': 'Alto',
'export.page': 'Tamaño de página',
'export.custom.mm': 'Personalizado (mm)',
'export.orientation': 'Orientación',
'export.landscape': '🖼️ Horizontal',
'export.portrait': '📄 Vertical',
'export.dpi': 'DPI',
'export.view.info': '📐 <b>Exporta el área visible del mapa.</b><br>Amplíe y posicione antes de exportar.',
'export.world': '🌍 Vista mundial',
'export.fit': '📐 Ajustar a datos',
'export.button': '💾 Exportar Vista Actual',

// =============================================================================
//  EXPORT MODAL
// =============================================================================
'export.modal.title': '⏳ Exportando',
'export.preparing': 'Preparando...',
'export.rendering.tiles': 'Renderizando mosaicos base...',
'export.rendering.poly': 'Renderizando polígonos...',
'export.generating': 'Generando archivo...',
'export.done': '✅ ¡Completado!',

// =============================================================================
//  STATUS MESSAGES
// =============================================================================
'status.ready': 'Listo',
'status.loading': 'Cargando {year}...',
'status.loaded': '{year}: {count} territorios ✓',
'status.cached': '{year}: {count} territorios (caché)',
'status.error': '❌ {year}: {msg}',
'status.nation.selected': '{count} nación seleccionada',
'status.nations.selected': '{count} naciones seleccionadas',
'status.all.selected': 'Todas las {count} naciones seleccionadas',
'status.inverted': '{count} naciones seleccionadas (invertidas)',
'status.deselected': 'Selección cancelada',
'status.color.applied': 'Color {color} aplicado a {count} nación/naciones',
'status.colors.reset': 'Colores restablecidos',
'status.select.nation.first': '⚠️ ¡Seleccione al menos una nación primero!',
'status.text.placed': 'Texto «{text}» colocado',
'status.flag.placed': '{name} colocada',
'status.flag.select.first': '⚠️ ¡Seleccione una bandera primero!',
'status.custom.added': 'Bandera «{name}» agregada',
'status.custom.removed': 'Bandera personalizada eliminada',
'status.ann.removed': 'Eliminada',
'status.ann.cleared': 'Todas eliminadas',
'status.imported': 'Importados: {count} territorios',
'status.format.unsupported': 'Formato no soportado.',

// =============================================================================
//  BANNER MESSAGES
// =============================================================================
'banner.text': '✏️ Haga clic en el mapa para colocar texto',
'banner.flag.select': '🏴 Seleccione una bandera',
'banner.flag.place': '🏴 Clic para colocar: {name}',
'banner.custom.place': '📁 Clic para colocar: {name}',
'banner.cancel': '✕ Cancelar',

// =============================================================================
//  LOADING
// =============================================================================
'loading.text': 'Cargando...',

// =============================================================================
//  COUNTRIES
// =============================================================================
'country.us': 'Estados Unidos',
'country.gb': 'Reino Unido',
'country.fr': 'Francia',
'country.de': 'Alemania',
'country.it': 'Italia',
'country.jp': 'Japón',
'country.ru': 'Rusia / URSS',
'country.cn': 'China',
'country.ca': 'Canadá',
'country.au': 'Australia',
'country.br': 'Brasil',
'country.in': 'India',
'country.es': 'España',
'country.pt': 'Portugal',
'country.nl': 'Países Bajos',
'country.be': 'Bélgica',
'country.pl': 'Polonia',
'country.tr': 'Turquía',
'country.mx': 'México',
'country.ar': 'Argentina',
'country.se': 'Suecia',
'country.no': 'Noruega',
'country.fi': 'Finlandia',
'country.dk': 'Dinamarca',
'country.gr': 'Grecia',
'country.at': 'Austria',
'country.hu': 'Hungría',
'country.ro': 'Rumanía',
'country.bg': 'Bulgaria',
'country.rs': 'Serbia',
'country.hr': 'Croacia',
'country.ch': 'Suiza',
'country.ie': 'Irlanda',
'country.za': 'Sudáfrica',
'country.eg': 'Egipto',
'country.sa': 'Arabia Saudita',
'country.ir': 'Irán',
'country.iq': 'Irak',
'country.th': 'Tailandia',
'country.kr': 'Corea del Sur',
'country.nz': 'Nueva Zelanda',
'country.ua': 'Ucrania',
'country.cu': 'Cuba',
'country.et': 'Etiopía',
'country.ng': 'Nigeria',
'country.pk': 'Pakistán',
'country.af': 'Afganistán',
'country.cl': 'Chile',
'country.co': 'Colombia',
'country.pe': 'Perú',
'country.ve': 'Venezuela',
'country.dz': 'Argelia',
'country.ma': 'Marruecos',
'country.ly': 'Libia',
'country.sd': 'Sudán',
'country.tn': 'Túnez',
'country.sy': 'Siria',
'country.jo': 'Jordania',
'country.lb': 'Líbano',
'country.il': 'Israel',
'country.mm': 'Myanmar',
'country.vn': 'Vietnam',
'country.ph': 'Filipinas',
'country.id': 'Indonesia',
'country.my': 'Malasia',
'country.bd': 'Bangladés',
'country.lk': 'Sri Lanka',
'country.ke': 'Kenia'

});