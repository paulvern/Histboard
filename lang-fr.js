// =====================================================================
//  FRENCH LANGUAGE PACK
// =====================================================================

registerLanguage('fr', {

// =============================================================================
//  HEADER
// =============================================================================
'header.title': 'Créateur de Cartes <b>Jeux de Plateau</b> Historiques',
'header.subtitle': 'Créateur de cartes historiques pour jeux de plateau',

// =============================================================================
//  LANGUAGE
// =============================================================================
'lang.label': 'Langue',

// =============================================================================
//  PANELS
// =============================================================================
'panel.year': '📅 Année Historique',
'panel.style': '🎨 Style de Carte et Frontières',
'panel.colors': '🏳️ Couleurs des Nations',
'panel.tools': '🛠️ Outils',
'panel.annotations': '📋 Annotations',
'panel.import': '📂 Importer GeoJSON',
'panel.export': '💾 Exporter',

// =============================================================================
//  ERAS
// =============================================================================
'era.prehistory': 'Préhistoire',
'era.antiquity': 'Antiquité',
'era.firstmill': 'Ier Millénaire',
'era.medieval': 'Moyen Âge',
'era.earlymodern': 'Époque Moderne',
'era.nineteenth': 'XIXe Siècle',
'era.twentieth': 'XXe Siècle',
'era.twentyfirst': 'Années 2000',

// =============================================================================
//  YEAR FORMATTING
// =============================================================================
'year.bc': 'av. J.-C.',
'year.ad': 'ap. J.-C.',

// =============================================================================
//  BASEMAP
// =============================================================================
'basemap.label': 'Fond de carte',
'basemap.physical': '🌍 Physique',
'basemap.relief': '🏔️ Relief ombré',
'basemap.natgeo': '🗺️ National Geographic',
'basemap.topo': '📊 Topographique',
'basemap.satellite': '🛰️ Satellite',
'basemap.dark': '🌑 Sombre',
'basemap.watercolor': '🎨 Aquarelle',
'basemap.none': '⬜ Aucun',

// =============================================================================
//  BORDER STYLES
// =============================================================================
'border.style.label': 'Style des frontières',
'border.solid': '── Continu',
'border.dashed': '- - - Tirets',
'border.dotted': '· · · Pointillé',
'border.dashdot': '-·-·- Tiret-point',
'border.longdash': '— — Tirets longs',
'border.double': '═══ Double ligne',
'border.sketch': '∿∿∿ Croquis',
'border.railroad': '┼┼┼ Chemin de fer',

'border.desc.solid': 'Ligne continue',
'border.desc.dashed': 'Tirets réguliers',
'border.desc.dotted': 'Points équidistants',
'border.desc.dashdot': 'Alternance tiret-point',
'border.desc.longdash': 'Tirets longs',
'border.desc.double': 'Double ligne',
'border.desc.sketch': 'Style croquis',
'border.desc.railroad': 'Style chemin de fer',

'border.width': 'Épaisseur des frontières',
'border.color': 'Couleur des frontières',
'border.px': 'px',

// =============================================================================
//  FILL
// =============================================================================
'fill.opacity': 'Opacité du remplissage',

// =============================================================================
//  NATION COLORS / SELECTION
// =============================================================================
'colors.selected': 'Nations sélectionnées',
'colors.hint': 'Clic = sélectionner · Ctrl/⌘+Clic = ajouter · Maj+Clic = plage',
'colors.empty': 'Cliquez sur les nations sur la carte',
'colors.all': '✅ Toutes',
'colors.invert': '🔄 Inverser',
'colors.none': '✖ Aucune',
'colors.apply.label': 'Appliquer la couleur :',
'colors.custom.label': 'Personnalisée :',
'colors.apply': 'Appliquer',
'colors.reset': '↺ Réinitialiser',

// =============================================================================
//  TOOLS
// =============================================================================
'tool.navigate': '🖱️ Naviguer',
'tool.text': '✏️ Texte',
'tool.flag': '🏴 Drapeau',

// =============================================================================
//  TEXT TOOL
// =============================================================================
'text.label': 'Texte',
'text.placeholder': 'Tapez ici...',
'text.size': 'Taille',
'text.color': 'Couleur',
'text.bold': 'Gras',
'text.outline': 'Contour',
'text.rotation': 'Rotation',

// =============================================================================
//  FLAG TOOL
// =============================================================================
'flag.shape': 'Forme du drapeau',
'flag.circle': '🔵 Rond',
'flag.rect': '🟦 Rectangulaire',
'flag.search': 'Rechercher',
'flag.search.placeholder': 'ex : Italie, Allemagne...',
'flag.size': 'Taille',
'flag.upload.title': 'Télécharger un drapeau personnalisé',
'flag.upload.desc': 'PNG, SVG, JPG — cliquez ou glissez',
'flag.name.placeholder': 'Nom...',
'flag.add': '➕ Ajouter',
'flag.builtin': 'Drapeaux prédéfinis',
'flag.custom.section': '📁 Drapeaux personnalisés',
'flag.select.hint': '👆 Sélectionnez, puis cliquez sur la carte',
'flag.selected': '✅ {name} — cliquez sur la carte',

// =============================================================================
//  ANNOTATIONS
// =============================================================================
'ann.empty': 'Aucune annotation.',
'ann.removeall': '🗑️ Tout supprimer',

// =============================================================================
//  IMPORT
// =============================================================================
'import.hint': 'Charger des frontières personnalisées au format GeoJSON.',

// =============================================================================
//  EXPORT
// =============================================================================
'export.format': 'Format',
'export.png': 'PNG (image raster)',
'export.pdf': 'PDF (document imprimable)',
'export.svg': 'SVG (vectoriel)',
'export.width': 'Largeur',
'export.height': 'Hauteur',
'export.page': 'Format de page',
'export.custom.mm': 'Personnalisé (mm)',
'export.orientation': 'Orientation',
'export.landscape': '🖼️ Paysage',
'export.portrait': '📄 Portrait',
'export.dpi': 'DPI',
'export.view.info': '📐 <b>Exporte la zone visible de la carte.</b><br>Zoomez et positionnez avant d\'exporter.',
'export.world': '🌍 Vue mondiale',
'export.fit': '📐 Ajuster aux données',
'export.button': '💾 Exporter la Vue Actuelle',

// =============================================================================
//  EXPORT MODAL
// =============================================================================
'export.modal.title': '⏳ Exportation en cours',
'export.preparing': 'Préparation...',
'export.rendering.tiles': 'Rendu des tuiles de base...',
'export.rendering.poly': 'Rendu des polygones...',
'export.generating': 'Génération du fichier...',
'export.done': '✅ Terminé !',

// =============================================================================
//  STATUS MESSAGES
// =============================================================================
'status.ready': 'Prêt',
'status.loading': 'Chargement de {year}...',
'status.loaded': '{year} : {count} territoires ✓',
'status.cached': '{year} : {count} territoires (cache)',
'status.error': '❌ {year} : {msg}',
'status.nation.selected': '{count} nation sélectionnée',
'status.nations.selected': '{count} nations sélectionnées',
'status.all.selected': 'Toutes les {count} nations sélectionnées',
'status.inverted': '{count} nations sélectionnées (inversées)',
'status.deselected': 'Sélection effacée',
'status.color.applied': 'Couleur {color} appliquée à {count} nation(s)',
'status.colors.reset': 'Couleurs réinitialisées',
'status.select.nation.first': '⚠️ Sélectionnez au moins une nation !',
'status.text.placed': 'Texte « {text} » placé',
'status.flag.placed': '{name} placé',
'status.flag.select.first': '⚠️ Sélectionnez d\'abord un drapeau !',
'status.custom.added': 'Drapeau « {name} » ajouté',
'status.custom.removed': 'Drapeau personnalisé supprimé',
'status.ann.removed': 'Supprimé',
'status.ann.cleared': 'Tout supprimé',
'status.imported': 'Importés : {count} territoires',
'status.format.unsupported': 'Format non pris en charge.',

// =============================================================================
//  BANNER MESSAGES
// =============================================================================
'banner.text': '✏️ Cliquez sur la carte pour placer le texte',
'banner.flag.select': '🏴 Sélectionnez un drapeau',
'banner.flag.place': '🏴 Cliquez pour placer : {name}',
'banner.custom.place': '📁 Cliquez pour placer : {name}',
'banner.cancel': '✕ Annuler',

// =============================================================================
//  LOADING
// =============================================================================
'loading.text': 'Chargement...',

// =============================================================================
//  COUNTRIES
// =============================================================================
'country.us': 'États-Unis',
'country.gb': 'Royaume-Uni',
'country.fr': 'France',
'country.de': 'Allemagne',
'country.it': 'Italie',
'country.jp': 'Japon',
'country.ru': 'Russie / URSS',
'country.cn': 'Chine',
'country.ca': 'Canada',
'country.au': 'Australie',
'country.br': 'Brésil',
'country.in': 'Inde',
'country.es': 'Espagne',
'country.pt': 'Portugal',
'country.nl': 'Pays-Bas',
'country.be': 'Belgique',
'country.pl': 'Pologne',
'country.tr': 'Turquie',
'country.mx': 'Mexique',
'country.ar': 'Argentine',
'country.se': 'Suède',
'country.no': 'Norvège',
'country.fi': 'Finlande',
'country.dk': 'Danemark',
'country.gr': 'Grèce',
'country.at': 'Autriche',
'country.hu': 'Hongrie',
'country.ro': 'Roumanie',
'country.bg': 'Bulgarie',
'country.rs': 'Serbie',
'country.hr': 'Croatie',
'country.ch': 'Suisse',
'country.ie': 'Irlande',
'country.za': 'Afrique du Sud',
'country.eg': 'Égypte',
'country.sa': 'Arabie Saoudite',
'country.ir': 'Iran',
'country.iq': 'Irak',
'country.th': 'Thaïlande',
'country.kr': 'Corée du Sud',
'country.nz': 'Nouvelle-Zélande',
'country.ua': 'Ukraine',
'country.cu': 'Cuba',
'country.et': 'Éthiopie',
'country.ng': 'Nigéria',
'country.pk': 'Pakistan',
'country.af': 'Afghanistan',
'country.cl': 'Chili',
'country.co': 'Colombie',
'country.pe': 'Pérou',
'country.ve': 'Venezuela',
'country.dz': 'Algérie',
'country.ma': 'Maroc',
'country.ly': 'Libye',
'country.sd': 'Soudan',
'country.tn': 'Tunisie',
'country.sy': 'Syrie',
'country.jo': 'Jordanie',
'country.lb': 'Liban',
'country.il': 'Israël',
'country.mm': 'Myanmar',
'country.vn': 'Viêt Nam',
'country.ph': 'Philippines',
'country.id': 'Indonésie',
'country.my': 'Malaisie',
'country.bd': 'Bangladesh',
'country.lk': 'Sri Lanka',
'country.ke': 'Kenya'

});