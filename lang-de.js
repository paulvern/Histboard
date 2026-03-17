// =====================================================================
//  GERMAN LANGUAGE PACK
// =====================================================================

registerLanguage('de', {

// =============================================================================
//  HEADER
// =============================================================================
'header.title': 'Historischer <b>Brettspiel</b>-Kartenmacher',
'header.subtitle': 'Ersteller für historische Brettspielkarten',

// =============================================================================
//  LANGUAGE
// =============================================================================
'lang.label': 'Sprache',

// =============================================================================
//  PANELS
// =============================================================================
'panel.year': '📅 Historisches Jahr',
'panel.style': '🎨 Kartenstil & Grenzen',
'panel.colors': '🏳️ Länderfarben',
'panel.tools': '🛠️ Werkzeuge',
'panel.annotations': '📋 Anmerkungen',
'panel.import': '📂 GeoJSON importieren',
'panel.export': '💾 Exportieren',

// =============================================================================
//  ERAS
// =============================================================================
'era.prehistory': 'Urgeschichte',
'era.antiquity': 'Antike',
'era.firstmill': '1. Jahrtausend',
'era.medieval': 'Mittelalter',
'era.earlymodern': 'Frühe Neuzeit',
'era.nineteenth': '19. Jahrhundert',
'era.twentieth': '20. Jahrhundert',
'era.twentyfirst': '21. Jahrhundert',

// =============================================================================
//  YEAR FORMATTING
// =============================================================================
'year.bc': 'v. Chr.',
'year.ad': 'n. Chr.',

// =============================================================================
//  BASEMAP
// =============================================================================
'basemap.label': 'Basiskarte',
'basemap.physical': '🌍 Physisch',
'basemap.relief': '🏔️ Schummerung',
'basemap.natgeo': '🗺️ National Geographic',
'basemap.topo': '📊 Topografisch',
'basemap.satellite': '🛰️ Satellit',
'basemap.dark': '🌑 Dunkel',
'basemap.watercolor': '🎨 Aquarell',
'basemap.none': '⬜ Keine',

// =============================================================================
//  BORDER STYLES
// =============================================================================
'border.style.label': 'Grenzstil',
'border.solid': '── Durchgezogen',
'border.dashed': '- - - Gestrichelt',
'border.dotted': '· · · Gepunktet',
'border.dashdot': '-·-·- Strich-Punkt',
'border.longdash': '— — Langer Strich',
'border.double': '═══ Doppellinie',
'border.sketch': '∿∿∿ Skizze',
'border.railroad': '┼┼┼ Eisenbahn',

'border.desc.solid': 'Durchgehende Linie',
'border.desc.dashed': 'Regelmäßig gestrichelt',
'border.desc.dotted': 'Gleichmäßige Punkte',
'border.desc.dashdot': 'Strich-Punkt-Wechsel',
'border.desc.longdash': 'Lange Striche',
'border.desc.double': 'Doppellinie',
'border.desc.sketch': 'Skizzenstil',
'border.desc.railroad': 'Eisenbahnstil',

'border.width': 'Grenzbreite',
'border.color': 'Grenzfarbe',
'border.px': 'px',

// =============================================================================
//  FILL
// =============================================================================
'fill.opacity': 'Füllopazität',

// =============================================================================
//  NATION COLORS / SELECTION
// =============================================================================
'colors.selected': 'Ausgewählte Länder',
'colors.hint': 'Klick = auswählen · Strg/⌘+Klick = hinzufügen · Umschalt+Klick = Bereich',
'colors.empty': 'Klicken Sie auf Länder in der Karte',
'colors.all': '✅ Alle',
'colors.invert': '🔄 Umkehren',
'colors.none': '✖ Keine',
'colors.apply.label': 'Farbe anwenden:',
'colors.custom.label': 'Benutzerdefiniert:',
'colors.apply': 'Anwenden',
'colors.reset': '↺ Zurücksetzen',

// =============================================================================
//  TOOLS
// =============================================================================
'tool.navigate': '🖱️ Navigieren',
'tool.text': '✏️ Text',
'tool.flag': '🏴 Flagge',

// =============================================================================
//  TEXT TOOL
// =============================================================================
'text.label': 'Text',
'text.placeholder': 'Hier eingeben...',
'text.size': 'Größe',
'text.color': 'Farbe',
'text.bold': 'Fett',
'text.outline': 'Umriss',
'text.rotation': 'Drehung',

// =============================================================================
//  FLAG TOOL
// =============================================================================
'flag.shape': 'Flaggenform',
'flag.circle': '🔵 Rund',
'flag.rect': '🟦 Rechteckig',
'flag.search': 'Suche',
'flag.search.placeholder': 'z.B.: Italien, Deutschland...',
'flag.size': 'Größe',
'flag.upload.title': 'Eigene Flagge hochladen',
'flag.upload.desc': 'PNG, SVG, JPG — klicken oder ziehen',
'flag.name.placeholder': 'Name...',
'flag.add': '➕ Hinzufügen',
'flag.builtin': 'Vorhandene Flaggen',
'flag.custom.section': '📁 Eigene Flaggen',
'flag.select.hint': '👆 Auswählen, dann auf Karte klicken',
'flag.selected': '✅ {name} — auf Karte klicken',

// =============================================================================
//  ANNOTATIONS
// =============================================================================
'ann.empty': 'Keine Anmerkungen.',
'ann.removeall': '🗑️ Alle entfernen',

// =============================================================================
//  IMPORT
// =============================================================================
'import.hint': 'Eigene GeoJSON-Grenzen laden.',

// =============================================================================
//  EXPORT
// =============================================================================
'export.format': 'Format',
'export.png': 'PNG (Rasterbild)',
'export.pdf': 'PDF (druckbares Dokument)',
'export.svg': 'SVG (Vektorgrafik)',
'export.width': 'Breite',
'export.height': 'Höhe',
'export.page': 'Seitengröße',
'export.custom.mm': 'Benutzerdefiniert (mm)',
'export.orientation': 'Ausrichtung',
'export.landscape': '🖼️ Querformat',
'export.portrait': '📄 Hochformat',
'export.dpi': 'DPI',
'export.view.info': '📐 <b>Exportiert den sichtbaren Kartenbereich.</b><br>Zoomen und positionieren Sie vor dem Export.',
'export.world': '🌍 Weltansicht',
'export.fit': '📐 An Daten anpassen',
'export.button': '💾 Aktuelle Ansicht exportieren',

// =============================================================================
//  EXPORT MODAL
// =============================================================================
'export.modal.title': '⏳ Export läuft',
'export.preparing': 'Vorbereitung...',
'export.rendering.tiles': 'Basis-Tiles werden gerendert...',
'export.rendering.poly': 'Polygone werden gerendert...',
'export.generating': 'Datei wird erstellt...',
'export.done': '✅ Fertig!',

// =============================================================================
//  STATUS MESSAGES
// =============================================================================
'status.ready': 'Bereit',
'status.loading': '{year} wird geladen...',
'status.loaded': '{year}: {count} Gebiete ✓',
'status.cached': '{year}: {count} Gebiete (zwischengespeichert)',
'status.error': '❌ {year}: {msg}',
'status.nation.selected': '{count} Land ausgewählt',
'status.nations.selected': '{count} Länder ausgewählt',
'status.all.selected': 'Alle {count} Länder ausgewählt',
'status.inverted': '{count} Länder ausgewählt (umgekehrt)',
'status.deselected': 'Auswahl aufgehoben',
'status.color.applied': 'Farbe {color} auf {count} Land/Länder angewendet',
'status.colors.reset': 'Farben zurückgesetzt',
'status.select.nation.first': '⚠️ Wählen Sie zuerst mindestens ein Land aus!',
'status.text.placed': 'Text „{text}" platziert',
'status.flag.placed': '{name} platziert',
'status.flag.select.first': '⚠️ Wählen Sie zuerst eine Flagge aus!',
'status.custom.added': 'Flagge „{name}" hinzugefügt',
'status.custom.removed': 'Eigene Flagge entfernt',
'status.ann.removed': 'Entfernt',
'status.ann.cleared': 'Alle entfernt',
'status.imported': 'Importiert: {count} Gebiete',
'status.format.unsupported': 'Nicht unterstütztes Format.',

// =============================================================================
//  BANNER MESSAGES
// =============================================================================
'banner.text': '✏️ Auf die Karte klicken, um Text zu platzieren',
'banner.flag.select': '🏴 Eine Flagge auswählen',
'banner.flag.place': '🏴 Zum Platzieren klicken: {name}',
'banner.custom.place': '📁 Zum Platzieren klicken: {name}',
'banner.cancel': '✕ Abbrechen',

// =============================================================================
//  LOADING
// =============================================================================
'loading.text': 'Wird geladen...',

// =============================================================================
//  COUNTRIES
// =============================================================================
'country.us': 'Vereinigte Staaten',
'country.gb': 'Vereinigtes Königreich',
'country.fr': 'Frankreich',
'country.de': 'Deutschland',
'country.it': 'Italien',
'country.jp': 'Japan',
'country.ru': 'Russland / UdSSR',
'country.cn': 'China',
'country.ca': 'Kanada',
'country.au': 'Australien',
'country.br': 'Brasilien',
'country.in': 'Indien',
'country.es': 'Spanien',
'country.pt': 'Portugal',
'country.nl': 'Niederlande',
'country.be': 'Belgien',
'country.pl': 'Polen',
'country.tr': 'Türkei',
'country.mx': 'Mexiko',
'country.ar': 'Argentinien',
'country.se': 'Schweden',
'country.no': 'Norwegen',
'country.fi': 'Finnland',
'country.dk': 'Dänemark',
'country.gr': 'Griechenland',
'country.at': 'Österreich',
'country.hu': 'Ungarn',
'country.ro': 'Rumänien',
'country.bg': 'Bulgarien',
'country.rs': 'Serbien',
'country.hr': 'Kroatien',
'country.ch': 'Schweiz',
'country.ie': 'Irland',
'country.za': 'Südafrika',
'country.eg': 'Ägypten',
'country.sa': 'Saudi-Arabien',
'country.ir': 'Iran',
'country.iq': 'Irak',
'country.th': 'Thailand',
'country.kr': 'Südkorea',
'country.nz': 'Neuseeland',
'country.ua': 'Ukraine',
'country.cu': 'Kuba',
'country.et': 'Äthiopien',
'country.ng': 'Nigeria',
'country.pk': 'Pakistan',
'country.af': 'Afghanistan',
'country.cl': 'Chile',
'country.co': 'Kolumbien',
'country.pe': 'Peru',
'country.ve': 'Venezuela',
'country.dz': 'Algerien',
'country.ma': 'Marokko',
'country.ly': 'Libyen',
'country.sd': 'Sudan',
'country.tn': 'Tunesien',
'country.sy': 'Syrien',
'country.jo': 'Jordanien',
'country.lb': 'Libanon',
'country.il': 'Israel',
'country.mm': 'Myanmar',
'country.vn': 'Vietnam',
'country.ph': 'Philippinen',
'country.id': 'Indonesien',
'country.my': 'Malaysia',
'country.bd': 'Bangladesch',
'country.lk': 'Sri Lanka',
'country.ke': 'Kenia'

});