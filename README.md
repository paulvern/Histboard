# 🗺️ Histboard — Historical Board Game Map Maker

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![Version](https://img.shields.io/badge/version-1.2.0-green.svg) ![Languages](https://img.shields.io/badge/languages-8-orange.svg)

**Histboard** is a browser-based interactive tool for creating beautiful historical maps. Explore world borders from 123,000 BC to 2010, customize nation colors, draw custom regions, place flags and text annotations, generate procedural maps, and export high-resolution maps for board games, presentations, education, or personal projects.

## 🌐 Live Demo
👉 [**Try Histboard now!**](https://paulvern.free.nf/Histboard/) — No installation required.

![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-green.svg) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg) ![HTML5](https://img.shields.io/badge/HTML5-orange.svg) ![CSS3](https://img.shields.io/badge/CSS3-blue.svg)

---

## 🆕 What's New in v1.2.0

### ↶↷ Undo/Redo System
- **50-state history stack** — every action is automatically tracked
- **Keyboard shortcuts**: `Ctrl+Z` (Undo) / `Ctrl+Shift+Z` (Redo) / `Ctrl+Y` (Redo)
- **Toolbar buttons** — quick access to undo/redo in the main toolbar
- **Edit menu** — full Undo/Redo/Select All/Clear Selection options
- **Smart state capture** — automatically saves after color changes, annotations, region edits, year changes
- **Visual feedback** — buttons disable when undo/redo unavailable

### 💾 Project Save/Load System
- **Auto-save** — project automatically saved to localStorage every 30 seconds
- **Manual save** — `Ctrl+S` or File → Save Project
- **Project export** — download complete projects as `.histboard` files (JSON format)
- **Project import** — `Ctrl+O` or File → Open Project to load `.histboard` files
- **New project** — `Ctrl+N` or File → New Project to start fresh
- **Complete state preservation**:
  - All nation colors
  - Selected nations
  - Custom drawn regions (with vertices, colors, land/sea mode)
  - Text and flag annotations (with full configuration)
  - Custom uploaded flags
  - Current year
  - Map position and zoom level
  - Style settings (base map, borders, opacity)
- **Portable projects** — `.histboard` files can be shared and opened on any device

### 🎲 Random Map Generator
- **Voronoi algorithm** — generates natural-looking territories with organic boundaries
- **Procedural naming** — automatic generation of unique territory names
  - Combinations of prefixes (Nord, Sud, Neu, Gran...), bases (land, ia, burg, mark...), and suffixes (berg, stein, dorf, ton...)
  - Examples: *Nordland*, *Altonia*, *Neuburg*, *Granpolis*, *Westdorf*
- **5-200 territories** — adjustable slider for map complexity
- **Terrain filtering**:
  - 🏔️ **Only Land** — territories generated only on landmass (coastlines respected)
  - 🌊 **Only Sea** — territories generated only in oceans
  - 🌐 **Both Land & Sea** — no filtering, territories anywhere
- **Area selection**:
  - **Current View** — generate only in visible map area (zoom to Europe, generate 30 European nations)
  - **Whole World** — generate across entire world map
- **Output modes**:
  - **Custom Regions** (default) — add as editable custom regions (overlay on historical maps)
  - **Replace Map** — replace current map data with generated nations
- **Coastline clipping** — when using land/sea filters, territories are precisely clipped to coastlines using Turf.js
- **Smart point distribution** — prevents infinite loops when filtering by terrain (max 10×N attempts)
- **Integration** — fully integrated with undo/redo, save/load, and export systems

---

## ✨ Features

### 🕰️ Historical Timeline
- **50+ historical snapshots** spanning from prehistory (123,000 BC) to modern day (2010)
- **Organized into 8 eras**: Prehistory, Antiquity, First Millennium, Medieval, Early Modern, 19th Century, 20th Century, 21st Century
- Powered by GeoJSON data from [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps)

### 🎨 Map Styling
- **7 base map layers**: Physical, Relief, National Geographic, Topographic, Satellite, Dark, Watercolor — or no base map at all
- **8 border styles**: Solid, Dashed, Dotted, Dash-Dot, Long Dash, Double, Sketch, Railroad
- **Adjustable border width, color, and fill opacity**
- **Live border preview**

### 🏳️ Nation Colors
- **Click to select nations** directly on the map
- **Multi-select** with `Ctrl+Click` and **range select** with `Shift+Click`
- **Select All / Invert / Clear** selection
- **16-color preset palette** + custom color picker
- **Reset all colors** to defaults

### 🛠️ Annotation Tools

#### ✏️ Text Tool
- Place custom text labels with adjustable **font, size, color, bold, outline, and rotation** (-90° to 90°)
- **Text shapes**: None, Rectangle, Circle, Pill with customizable background, border, padding
- **5 relief effects**: Flat, Raised, Inset, Emboss, Glow — add depth to your labels
- **Fixed or zoom-scaled** text size
- **Live preview** of text appearance before placing

#### 🏴 Flag Tool
- Place country flags on the map in **circle or rectangle** shape
- **68+ built-in country flags**
- **Search flags** by name or country code
- **Upload custom flag images** (PNG, SVG, JPG, WebP, GIF)
- **Adjustable flag size** (20–120px)

#### 🖊️ Draw Tool
- **Create custom regions** with point-by-point polygon drawing
- **Land/Sea border modes**:
  - 🏔️ **Land mode** — borders auto-clipped to coastlines
  - 🌊 **Sea mode** — borders stay on water only
- **World Modes**:
  - **Existing World** — draw on top of historical borders
  - **Empty World** — blank canvas with coastline only
- **Smart clipping** — new regions automatically clipped against existing ones to prevent overlap
- **Coastline snapping** — vertices snap to nearest coastline when placed on invalid terrain
- **Full editing** — click any region to enter edit mode:
  - **Drag vertices** to reshape
  - **Double-click vertices** to delete
  - **Click midpoints** to add new vertices
  - Press `Enter` to save or `Esc` to cancel

#### 🎲 Random Generator
- **Voronoi-based territories** — natural-looking borders
- **Procedural naming system** — unique territory names
- **Terrain filtering** — land-only, sea-only, or both
- **5-200 territories** with adjustable size variation
- **Current view or whole world** generation
- **Editable output** — generated regions can be modified like hand-drawn ones

### 📂 Import & Export

#### Import
- **Import custom GeoJSON** border files (`Ctrl+O` for GeoJSON)
- **Import `.histboard` projects** — restore complete saved projects

#### Export
- **Export the current map view** as:
  - **PNG** (up to 4K resolution)
  - **PDF** (A0–A4 formats, 150/300 DPI, landscape/portrait)
  - **SVG** (vector format)
  - **GeoTIFF** + World File (georeferenced raster)
  - **GeoJSON** — save all polygons (historical + custom) as `.geojson`
- **Export `.histboard` projects** — save complete projects for sharing
- **Customizable export dimensions**
- **Quick presets**: "World View" and "Fit to Data"

### 🌐 Multi-Language Support
**8 languages** supported out of the box:

| Flag | Language |
|------|----------|
| 🇬🇧 | English |
| 🇮🇹 | Italiano |
| 🇫🇷 | Français |
| 🇩🇪 | Deutsch |
| 🇪🇸 | Español |
| 🇷🇺 | Русский |
| 🇨🇳 | 中文 |
| 🇸🇦 | العربية (RTL supported) |

---

## ⌨️ Keyboard Shortcuts

### Tools
| Key | Action |
|-----|--------|
| `1` | Navigate tool |
| `2` | Text tool |
| `3` | Flag tool |
| `4` | Draw tool |
| `Esc` | Cancel drawing / exit edit / back to Navigate |
| `Enter` | Save region edit |

### Edit
| Key | Action |
|-----|--------|
| `Ctrl+Z` | Undo |
| `Ctrl+Shift+Z` | Redo |
| `Ctrl+Y` | Redo (alternative) |
| `Ctrl+A` | Select all nations |

### File
| Key | Action |
|-----|--------|
| `Ctrl+N` | New project |
| `Ctrl+S` | Save project |
| `Ctrl+O` | Open project |

---

## 🚀 Getting Started

### Option 1: Use the Live Demo
Visit [https://paulvern.free.nf/Histboard/](https://paulvern.free.nf/Histboard/) and start creating maps right away.

### Option 2: Open Locally
Simply open `index.html` in any modern browser. No build step required.

```bash
git clone https://github.com/YOUR_USERNAME/histboard.git
cd histboard
```

Then open `index.html` in your browser.

### Option 3: Serve Locally
For best results (the app needs to fetch `translations.json` and tile data), use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

---

## 📁 Project Structure

```
histboard/
├── index.html          # Main application (HTML + CSS + JS)
├── translations.js     # i18n engine (loads translations.json)
├── translations.json   # All translations in table-style format (8 languages)
└── README.md
```

**Note**: In v1.0.0, translations were split across 8 separate `lang-*.js` files. Since v1.1.0, everything is consolidated into a single `translations.json` for easier management.

---

## 🔧 Dependencies

All dependencies are loaded via CDN — **no `npm install` needed**:

| Library | Version | Purpose |
|---------|---------|---------|
| [Leaflet.js](https://leafletjs.com/) | 1.9.4 | Interactive map rendering |
| [Turf.js](https://turfjs.org/) | 6.x | Geospatial operations (clipping, intersection, snapping, Voronoi) |
| [jsPDF](https://github.com/parallax/jsPDF) | 2.5.1 | PDF export |
| [html2canvas](https://html2canvas.hertzen.com/) | 1.4.1 | Map-to-canvas rendering |

**Historical border data** is fetched at runtime from:
- [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps)

**Coastline data** for clipping:
- [Natural Earth](https://www.naturalearthdata.com/) — `ne_110m_land.geojson` via [nvkelso/natural-earth-vector](https://github.com/nvkelso/natural-earth-vector)

**Flag assets** are sourced from:
- [hatscripts/circle-flags](https://github.com/HatScripts/circle-flags) (circle shape)
- [lipis/flag-icons](https://github.com/lipis/flag-icons) (rectangular shape)

---

## 🖼️ How to Use

### Basic Workflow
1. **Choose a year** from the sidebar timeline (e.g., 1938, 1945, 1492…)
2. **Pick a base map** style (Physical, Satellite, Dark, etc.)
3. **Customize borders** — change style, width, color, and fill opacity
4. **Color nations** — click on countries, then apply colors from the palette
5. **Add text** — switch to the Text tool, configure shape/style, and click on the map
6. **Place flags** — switch to the Flag tool, select a flag, and click on the map
7. **Draw regions** — switch to the Draw tool, choose land/sea mode, and draw polygons
8. **Edit regions** — click on a drawn region to enter edit mode (drag vertices, add/remove points)
9. **Export** — choose PNG/PDF/SVG/GeoJSON format and resolution, then hit Export

### Advanced Workflow: Random Map Generation
1. **Open Random Panel** — Click 🎲 in toolbar or Menu → Map → Random Map Generator
2. **Configure settings**:
   - **Territories**: 5-200 (slider)
   - **Current View**: ✓ for visible area only, ✗ for whole world
   - **Terrain Type**: Land-only / Sea-only / Both
   - **Output Mode**: Custom Regions (editable) or Replace Map
3. **Generate** — Click "Generate Map" button
4. **Customize** — Edit names, colors, boundaries as needed
5. **Save** — `Ctrl+S` to save project or export as PNG/PDF

### Project Management
- **Auto-save**: Project automatically saves to browser localStorage every 30 seconds
- **Manual save**: `Ctrl+S` or File → Save Project
- **Export project**: File → Export Project downloads a `.histboard` file
- **Open project**: `Ctrl+O` or File → Open Project loads a `.histboard` file
- **New project**: `Ctrl+N` or File → New Project (clears everything with confirmation)
- **Undo/Redo**: Use `Ctrl+Z` and `Ctrl+Shift+Z` to navigate through changes

---

## 🌍 Adding a New Language

1. Open `translations.json`
2. Add your language to the `"languages"` array:
   ```json
   {"code":"ja","name":"日本語","flag":"🇯🇵"}
   ```
3. Add your language code to every entry in `"strings"`:
   ```json
   "panel.year":{"en":"📅 Historical Year","it":"📅 Anno Storico", ... ,"ja":"📅 歴史的な年"},
   ```

That's it — no additional files or script tags needed!

**Tip**: Each string has all languages on the same line, so adding a new key across all languages is just one line of JSON.

---

## 📄 License

This project is released under the **MIT License**.

---

## 🙏 Credits & Acknowledgments

- **Historical GeoJSON data**: [André Ourednik](https://github.com/aourednik) – [historical-basemaps](https://github.com/aourednik/historical-basemaps)
- **Coastline data**: [Natural Earth](https://www.naturalearthdata.com/) via [nvkelso/natural-earth-vector](https://github.com/nvkelso/natural-earth-vector)
- **Geospatial engine**: [Turf.js](https://turfjs.org/)
- **Circle flags**: [HatScripts/circle-flags](https://github.com/HatScripts/circle-flags)
- **Rectangular flags**: [lipis/flag-icons](https://github.com/lipis/flag-icons)
- **Map tiles**: Esri, CartoDB, Stadia Maps
- **Map engine**: [Leaflet.js](https://leafletjs.com/)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

---

## 📊 Version History

### v1.2.0 (Current)
- ✅ Undo/Redo system (50-state stack, keyboard shortcuts, toolbar buttons)
- ✅ Project Save/Load (.histboard format, auto-save, localStorage)
- ✅ Random Map Generator (Voronoi algorithm, land/sea filtering, procedural names)

### v1.1.0
- ✅ Draw Tool with custom regions
- ✅ Text Shape System (Rectangle, Circle, Pill)
- ✅ Translation system refactored (single JSON file)
- ✅ Keyboard shortcuts expanded

### v1.0.0
- ✅ Initial release
- ✅ Historical timeline (50+ years)
- ✅ Map styling (7 base maps, 8 border styles)
- ✅ Nation coloring
- ✅ Text and flag annotations
- ✅ Export (PNG, PDF, SVG, GeoJSON)
- ✅ 8 languages supported

---

**Made with ❤️ for history enthusiasts, board game designers, and map lovers everywhere.**
