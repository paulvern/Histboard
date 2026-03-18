# 🗺️ Histboard — Historical Board Game Map Maker

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.1.0-green.svg)
![Languages](https://img.shields.io/badge/languages-8-orange.svg)

**Histboard** is a browser-based interactive tool for creating beautiful historical maps. Explore world borders from **123,000 BC to 2010**, customize nation colors, draw custom regions, place flags and text annotations, and export high-resolution maps for board games, presentations, education, or personal projects.

## 🌐 Live Demo

👉 **[Try Histboard now!](https://paulvern.free.nf/Histboard/)** — No installation required.

<p align="center">
  <img src="https://img.shields.io/badge/Leaflet.js-199900?style=for-the-badge&logo=leaflet&logoColor=white" alt="Leaflet"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
</p>

---

## 🆕 What's New in v1.1.0

### 🖊️ Draw Tool — Custom Regions
- **Draw custom regions** directly on the map with point-by-point polygon creation
- **Land/Sea modes**: land borders are auto-clipped to coastlines, sea borders stay on water
- **World Mode**: switch between "Existing World" (with historical borders) and "Empty World" (blank canvas with coastline only)
- **Smart clipping**: new regions are automatically clipped against existing ones to prevent overlap
- **Coastline snapping**: vertices snap to the nearest coastline when placed on invalid terrain
- **Region editing**: click a region to enter edit mode — drag vertices, double-click to delete, click midpoints to add new vertices
- **GeoJSON export**: export all polygons (loaded historical data + custom drawn regions) as a `.geojson` file

### ✏️ Text Shape System
- **4 text shapes**: None, Rectangle, Circle, Pill — wrap your text labels in styled containers
- **Shape styling**: customizable background color, border color, border width, and padding
- **5 relief effects**: Flat, Raised, Inset, Emboss, Glow — add depth to your labels
- **Live preview** of text appearance in the sidebar before placing

### 📦 Translation System Refactored
- All 8 language files (`lang-*.js`) consolidated into a **single `translations.json`** file
- **Table-style format**: each translation key has all languages on the same line — much easier to add new strings
- `translations.js` now loads the JSON asynchronously and transposes it at startup
- Adding a new string = **one line** across all languages

### ⌨️ New Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `4` | Draw tool |
| `Enter` | Save region edit |

---

## ✨ Features

### 🕰️ Historical Timeline
- **50+ historical snapshots** spanning from prehistory (123,000 BC) to modern day (2010)
- Organized into 8 eras: Prehistory, Antiquity, First Millennium, Medieval, Early Modern, 19th Century, 20th Century, 21st Century
- Powered by GeoJSON data from [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps)

### 🎨 Map Styling
- **7 base map layers**: Physical, Relief, National Geographic, Topographic, Satellite, Dark, Watercolor — or no base map at all
- **8 border styles**: Solid, Dashed, Dotted, Dash-Dot, Long Dash, Double, Sketch, Railroad
- Adjustable border width, color, and fill opacity
- Live border preview

### 🏳️ Nation Colors
- Click to select nations directly on the map
- **Multi-select** with `Ctrl+Click` and range select with `Shift+Click`
- Select All / Invert / Clear selection
- 16-color preset palette + custom color picker
- Reset all colors to defaults

### 🛠️ Annotation Tools
- **Text Tool**: Place custom text labels with adjustable font, size, color, bold, outline, and rotation (-90° to 90°)
  - **Text shapes**: Rectangle, Circle, Pill with customizable background, border, padding, and relief effects
- **Flag Tool**: Place country flags on the map in circle or rectangle shape
  - 68+ built-in country flags
  - Search flags by name or country code
  - Upload custom flag images (PNG, SVG, JPG, WebP, GIF)
  - Adjustable flag size (20–120px)
- **Draw Tool**: Create custom regions with polygon drawing
  - Land/Sea border modes with automatic coastline clipping
  - Existing World / Empty World modes
  - Smart overlap prevention between regions
  - Full vertex editing (drag, add, delete)
- All annotations are **draggable** after placement
- Annotation list with individual or bulk removal

### 📂 Import & Export
- **Import** custom GeoJSON border files
- **Export** the current map view as:
  - **PNG** (up to 4K resolution)
  - **PDF** (A0–A4 formats, 150/300 DPI, landscape/portrait)
  - **SVG**
- **Export GeoJSON** — save all polygons (historical + custom) as a `.geojson` file
- Customizable export dimensions
- Quick presets: "World View" and "Fit to Data"

### 🌐 Multi-Language Support
8 languages supported out of the box:

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

### ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `1` | Navigate tool |
| `2` | Text tool |
| `3` | Flag tool |
| `4` | Draw tool |
| `Esc` | Cancel drawing / exit edit / back to Navigate |
| `Enter` | Save region edit |
| `Ctrl+A` | Select all nations |

---

## 🚀 Getting Started

### Option 1: Use the Live Demo
Visit **[https://paulvern.free.nf/Histboard/](https://paulvern.free.nf/Histboard/)** and start creating maps right away.

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

> **Note:** In v1.0.0, translations were split across 8 separate `lang-*.js` files. Since v1.1.0, everything is consolidated into a single `translations.json` for easier management.

---

## 🔧 Dependencies

All dependencies are loaded via CDN — **no npm install needed**:

| Library | Version | Purpose |
|---------|---------|---------|
| [Leaflet.js](https://leafletjs.com/) | 1.9.4 | Interactive map rendering |
| [Turf.js](https://turfjs.org/) | 6.x | Geospatial operations (clipping, intersection, snapping) |
| [jsPDF](https://github.com/parallax/jsPDF) | 2.5.1 | PDF export |
| [html2canvas](https://html2canvas.hertzen.com/) | 1.4.1 | Map-to-canvas rendering |

Historical border data is fetched at runtime from:
- [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps)

Coastline data for clipping:
- [Natural Earth](https://www.naturalearthdata.com/) — `ne_110m_land.geojson` via [nvkelso/natural-earth-vector](https://github.com/nvkelso/natural-earth-vector)

Flag assets are sourced from:
- [hatscripts/circle-flags](https://github.com/HatScripts/circle-flags) (circle shape)
- [lipis/flag-icons](https://github.com/lipis/flag-icons) (rectangular shape)

---

## 🖼️ How to Use

1. **Choose a year** from the sidebar timeline (e.g., 1938, 1945, 1492…)
2. **Pick a base map** style (Physical, Satellite, Dark, etc.)
3. **Customize borders** — change style, width, color, and fill opacity
4. **Color nations** — click on countries, then apply colors from the palette
5. **Add text** — switch to the Text tool, configure shape/style, and click on the map
6. **Place flags** — switch to the Flag tool, select a flag, and click on the map
7. **Draw regions** — switch to the Draw tool, choose land/sea mode, and draw polygons
8. **Edit regions** — click on a drawn region to enter edit mode (drag vertices, add/remove points)
9. **Export** — choose PNG/PDF/SVG/GeoJSON format and resolution, then hit Export

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
4. That's it — no additional files or script tags needed!

> **Tip:** Each string has all languages on the same line, so adding a new key across all languages is just one line of JSON.

---

## 📄 License

This project is released under the [MIT License](LICENSE).

---

## 🙏 Credits & Acknowledgments

- Historical GeoJSON data: [André Ourednik – historical-basemaps](https://github.com/aourednik/historical-basemaps)
- Coastline data: [Natural Earth](https://www.naturalearthdata.com/) via [nvkelso/natural-earth-vector](https://github.com/nvkelso/natural-earth-vector)
- Geospatial engine: [Turf.js](https://turfjs.org/)
- Circle flags: [HatScripts/circle-flags](https://github.com/HatScripts/circle-flags)
- Rectangular flags: [lipis/flag-icons](https://github.com/lipis/flag-icons)
- Map tiles: [Esri](https://www.esri.com/), [CartoDB](https://carto.com/), [Stadia Maps](https://stadiamaps.com/)
- Map engine: [Leaflet.js](https://leafletjs.com/)

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<p align="center">
  Made with ❤️ for history enthusiasts, board game designers, and map lovers.
</p>
