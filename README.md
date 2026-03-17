# 🗺️ Histboard — Historical Board Game Map Maker

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![Languages](https://img.shields.io/badge/languages-8-orange.svg)

**Histboard** is a browser-based interactive tool for creating beautiful historical maps. Explore world borders from **123,000 BC to 2010**, customize nation colors, place flags and text annotations, and export high-resolution maps for board games, presentations, education, or personal projects.

<p align="center">
  <img src="https://img.shields.io/badge/Leaflet.js-199900?style=for-the-badge&logo=leaflet&logoColor=white" alt="Leaflet"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
</p>

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
- **Text Tool**: Place custom text labels with adjustable font size, color, bold, outline, and rotation (-90° to 90°)
- **Flag Tool**: Place country flags on the map in circle or rectangle shape
  - 68+ built-in country flags
  - Search flags by name or country code
  - Upload custom flag images (PNG, SVG, JPG, WebP, GIF)
  - Adjustable flag size (20–120px)
- All annotations are **draggable** after placement
- Annotation list with individual or bulk removal

### 📂 Import & Export
- **Import** custom GeoJSON border files
- **Export** the current map view as:
  - **PNG** (up to 4K resolution)
  - **PDF** (A0–A4 formats, 150/300 DPI, landscape/portrait)
  - **SVG**
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
| `Esc` | Back to Navigate |
| `Ctrl+A` | Select all nations |

---

## 🚀 Getting Started

### Option 1: Open Directly
Simply open `index.html` in any modern browser. No build step required.

```bash
git clone https://github.com/YOUR_USERNAME/histboard.git
cd histboard
```

Then open `index.html` in your browser.

### Option 2: Serve Locally
For best results (avoiding CORS issues with tile loading), use a local server:

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
├── translations.js     # i18n engine & language management
├── lang-en.js          # English translations
├── lang-it.js          # Italian translations
├── lang-fr.js          # French translations
├── lang-de.js          # German translations
├── lang-es.js          # Spanish translations
├── lang-ru.js          # Russian translations
├── lang-zh.js          # Chinese translations
├── lang-ar.js          # Arabic translations
└── README.md
```

---

## 🔧 Dependencies

All dependencies are loaded via CDN — **no npm install needed**:

| Library | Version | Purpose |
|---------|---------|---------|
| [Leaflet.js](https://leafletjs.com/) | 1.9.4 | Interactive map rendering |
| [jsPDF](https://github.com/parallax/jsPDF) | 2.5.1 | PDF export |
| [html2canvas](https://html2canvas.hertzen.com/) | 1.4.1 | Map-to-canvas rendering |

Historical border data is fetched at runtime from:
- [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps)

Flag assets are sourced from:
- [hatscripts/circle-flags](https://github.com/HatScripts/circle-flags) (circle shape)
- [lipis/flag-icons](https://github.com/lipis/flag-icons) (rectangular shape)

---

## 🖼️ How to Use

1. **Choose a year** from the sidebar timeline (e.g., 1938, 1945, 1492…)
2. **Pick a base map** style (Physical, Satellite, Dark, etc.)
3. **Customize borders** — change style, width, color, and fill opacity
4. **Color nations** — click on countries, then apply colors from the palette
5. **Add annotations** — switch to the Text or Flag tool and click on the map
6. **Export** — choose PNG/PDF/SVG format and resolution, then hit Export

---

## 🌍 Adding a New Language

1. Create a new file `lang-xx.js` (where `xx` is the language code)
2. Follow the structure of any existing language file (e.g., `lang-en.js`)
3. Register the language in `translations.js`
4. Add the `<script>` tag in `index.html`

---

## 📄 License

This project is released under the [MIT License](LICENSE).

---

## 🙏 Credits & Acknowledgments

- Historical GeoJSON data: [André Ourednik – historical-basemaps](https://github.com/aourednik/historical-basemaps)
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
