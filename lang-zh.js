// =====================================================================
//  CHINESE (SIMPLIFIED) LANGUAGE PACK
// =====================================================================

registerLanguage('zh', {

// =============================================================================
//  HEADER
// =============================================================================
'header.title': '历史<b>桌游</b>地图制作器',
'header.subtitle': '历史桌面游戏地图创建工具',

// =============================================================================
//  LANGUAGE
// =============================================================================
'lang.label': '语言',

// =============================================================================
//  PANELS
// =============================================================================
'panel.year': '📅 历史年份',
'panel.style': '🎨 地图样式与边界',
'panel.colors': '🏳️ 国家颜色',
'panel.tools': '🛠️ 工具',
'panel.annotations': '📋 标注',
'panel.import': '📂 导入 GeoJSON',
'panel.export': '💾 导出',

// =============================================================================
//  ERAS
// =============================================================================
'era.prehistory': '史前时代',
'era.antiquity': '古代',
'era.firstmill': '第一千年',
'era.medieval': '中世纪',
'era.earlymodern': '近代早期',
'era.nineteenth': '19世纪',
'era.twentieth': '20世纪',
'era.twentyfirst': '21世纪',

// =============================================================================
//  YEAR FORMATTING
// =============================================================================
'year.bc': '公元前',
'year.ad': '公元',

// =============================================================================
//  BASEMAP
// =============================================================================
'basemap.label': '底图',
'basemap.physical': '🌍 自然地形',
'basemap.relief': '🏔️ 阴影地形',
'basemap.natgeo': '🗺️ 国家地理',
'basemap.topo': '📊 地形图',
'basemap.satellite': '🛰️ 卫星图',
'basemap.dark': '🌑 深色',
'basemap.watercolor': '🎨 水彩',
'basemap.none': '⬜ 无',

// =============================================================================
//  BORDER STYLES
// =============================================================================
'border.style.label': '边界样式',
'border.solid': '── 实线',
'border.dashed': '- - - 虚线',
'border.dotted': '· · · 点线',
'border.dashdot': '-·-·- 点划线',
'border.longdash': '— — 长虚线',
'border.double': '═══ 双线',
'border.sketch': '∿∿∿ 手绘风格',
'border.railroad': '┼┼┼ 铁路线',

'border.desc.solid': '连续实线',
'border.desc.dashed': '规则虚线',
'border.desc.dotted': '等距点线',
'border.desc.dashdot': '点划交替',
'border.desc.longdash': '长虚线',
'border.desc.double': '双线',
'border.desc.sketch': '手绘风格',
'border.desc.railroad': '铁路风格',

'border.width': '边界宽度',
'border.color': '边界颜色',
'border.px': '像素',

// =============================================================================
//  FILL
// =============================================================================
'fill.opacity': '填充不透明度',

// =============================================================================
//  NATION COLORS / SELECTION
// =============================================================================
'colors.selected': '已选国家',
'colors.hint': '点击 = 选择 · Ctrl/⌘+点击 = 添加 · Shift+点击 = 范围选择',
'colors.empty': '在地图上点击国家',
'colors.all': '✅ 全选',
'colors.invert': '🔄 反选',
'colors.none': '✖ 取消选择',
'colors.apply.label': '应用颜色：',
'colors.custom.label': '自定义：',
'colors.apply': '应用',
'colors.reset': '↺ 重置',

// =============================================================================
//  TOOLS
// =============================================================================
'tool.navigate': '🖱️ 导航',
'tool.text': '✏️ 文字',
'tool.flag': '🏴 旗帜',

// =============================================================================
//  TEXT TOOL
// =============================================================================
'text.label': '文字',
'text.placeholder': '在此输入...',
'text.size': '大小',
'text.color': '颜色',
'text.bold': '粗体',
'text.outline': '轮廓',
'text.rotation': '旋转',

// =============================================================================
//  FLAG TOOL
// =============================================================================
'flag.shape': '旗帜形状',
'flag.circle': '🔵 圆形',
'flag.rect': '🟦 矩形',
'flag.search': '搜索',
'flag.search.placeholder': '例如：意大利、德国...',
'flag.size': '大小',
'flag.upload.title': '上传自定义旗帜',
'flag.upload.desc': 'PNG、SVG、JPG — 点击或拖放',
'flag.name.placeholder': '名称...',
'flag.add': '➕ 添加',
'flag.builtin': '内置旗帜',
'flag.custom.section': '📁 自定义旗帜',
'flag.select.hint': '👆 选择旗帜，然后点击地图',
'flag.selected': '✅ {name} — 点击地图放置',

// =============================================================================
//  ANNOTATIONS
// =============================================================================
'ann.empty': '暂无标注。',
'ann.removeall': '🗑️ 全部删除',

// =============================================================================
//  IMPORT
// =============================================================================
'import.hint': '加载自定义 GeoJSON 边界文件。',

// =============================================================================
//  EXPORT
// =============================================================================
'export.format': '格式',
'export.png': 'PNG（光栅图像）',
'export.pdf': 'PDF（可打印文档）',
'export.svg': 'SVG（矢量图）',
'export.width': '宽度',
'export.height': '高度',
'export.page': '页面大小',
'export.custom.mm': '自定义（毫米）',
'export.orientation': '方向',
'export.landscape': '🖼️ 横向',
'export.portrait': '📄 纵向',
'export.dpi': 'DPI',
'export.view.info': '📐 <b>导出地图上的可见区域。</b><br>导出前请调整缩放和位置。',
'export.world': '🌍 世界视图',
'export.fit': '📐 适应数据',
'export.button': '💾 导出当前视图',

// =============================================================================
//  EXPORT MODAL
// =============================================================================
'export.modal.title': '⏳ 正在导出',
'export.preparing': '准备中...',
'export.rendering.tiles': '渲染底图图层...',
'export.rendering.poly': '渲染多边形...',
'export.generating': '生成文件...',
'export.done': '✅ 完成！',

// =============================================================================
//  STATUS MESSAGES
// =============================================================================
'status.ready': '就绪',
'status.loading': '正在加载 {year}...',
'status.loaded': '{year}：{count} 个领土 ✓',
'status.cached': '{year}：{count} 个领土（已缓存）',
'status.error': '❌ {year}：{msg}',
'status.nation.selected': '已选择 {count} 个国家',
'status.nations.selected': '已选择 {count} 个国家',
'status.all.selected': '已选择全部 {count} 个国家',
'status.inverted': '已选择 {count} 个国家（反选）',
'status.deselected': '已取消选择',
'status.color.applied': '颜色 {color} 已应用于 {count} 个国家',
'status.colors.reset': '颜色已重置',
'status.select.nation.first': '⚠️ 请先选择至少一个国家！',
'status.text.placed': '文字「{text}」已放置',
'status.flag.placed': '{name} 已放置',
'status.flag.select.first': '⚠️ 请先选择一面旗帜！',
'status.custom.added': '旗帜「{name}」已添加',
'status.custom.removed': '自定义旗帜已删除',
'status.ann.removed': '已删除',
'status.ann.cleared': '全部已删除',
'status.imported': '已导入：{count} 个领土',
'status.format.unsupported': '不支持的格式。',

// =============================================================================
//  BANNER MESSAGES
// =============================================================================
'banner.text': '✏️ 点击地图放置文字',
'banner.flag.select': '🏴 选择一面旗帜',
'banner.flag.place': '🏴 点击放置：{name}',
'banner.custom.place': '📁 点击放置：{name}',
'banner.cancel': '✕ 取消',

// =============================================================================
//  LOADING
// =============================================================================
'loading.text': '加载中...',

// =============================================================================
//  COUNTRIES
// =============================================================================
'country.us': '美国',
'country.gb': '英国',
'country.fr': '法国',
'country.de': '德国',
'country.it': '意大利',
'country.jp': '日本',
'country.ru': '俄罗斯 / 苏联',
'country.cn': '中国',
'country.ca': '加拿大',
'country.au': '澳大利亚',
'country.br': '巴西',
'country.in': '印度',
'country.es': '西班牙',
'country.pt': '葡萄牙',
'country.nl': '荷兰',
'country.be': '比利时',
'country.pl': '波兰',
'country.tr': '土耳其',
'country.mx': '墨西哥',
'country.ar': '阿根廷',
'country.se': '瑞典',
'country.no': '挪威',
'country.fi': '芬兰',
'country.dk': '丹麦',
'country.gr': '希腊',
'country.at': '奥地利',
'country.hu': '匈牙利',
'country.ro': '罗马尼亚',
'country.bg': '保加利亚',
'country.rs': '塞尔维亚',
'country.hr': '克罗地亚',
'country.ch': '瑞士',
'country.ie': '爱尔兰',
'country.za': '南非',
'country.eg': '埃及',
'country.sa': '沙特阿拉伯',
'country.ir': '伊朗',
'country.iq': '伊拉克',
'country.th': '泰国',
'country.kr': '韩国',
'country.nz': '新西兰',
'country.ua': '乌克兰',
'country.cu': '古巴',
'country.et': '埃塞俄比亚',
'country.ng': '尼日利亚',
'country.pk': '巴基斯坦',
'country.af': '阿富汗',
'country.cl': '智利',
'country.co': '哥伦比亚',
'country.pe': '秘鲁',
'country.ve': '委内瑞拉',
'country.dz': '阿尔及利亚',
'country.ma': '摩洛哥',
'country.ly': '利比亚',
'country.sd': '苏丹',
'country.tn': '突尼斯',
'country.sy': '叙利亚',
'country.jo': '约旦',
'country.lb': '黎巴嫩',
'country.il': '以色列',
'country.mm': '缅甸',
'country.vn': '越南',
'country.ph': '菲律宾',
'country.id': '印度尼西亚',
'country.my': '马来西亚',
'country.bd': '孟加拉国',
'country.lk': '斯里兰卡',
'country.ke': '肯尼亚'

});