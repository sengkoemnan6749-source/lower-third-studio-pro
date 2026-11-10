// ========================================================
// LOWERTHIRD STUDIO PRO - INTERNATIONALIZATION (i18n) ENGINE
// Supports: English (en) & ភាសាខ្មែរ Khmer (km)
// ========================================================

(function () {
  'use strict';

  const STORAGE_KEY = 'lowerthird_ui_lang';

  const translations = {
    en: {
      // Header
      'header.tag': 'Studio Pro',
      'header.length': 'Length:',
      'header.dur_5': '5s (Quick)',
      'header.dur_10': '10s (Standard)',
      'header.dur_15': '15s (Reel)',
      'header.dur_20': '20s (Movie Sponsor)',
      'header.dur_30': '30s (Long Loop)',
      'header.dur_60': '60s (Live)',
      'header.dur_custom': 'Custom...',
      'header.snapshot_png': 'Snapshot PNG (Sharp Badge)',
      'header.export_webm': 'Export Video (WebM)',
      'header.green_video': 'Green Screen Video',
      'header.obs_link': 'OBS Link',

      // Tabs
      'tabs.templates': 'Templates',
      'tabs.studio': 'Canvas Studio',
      'tabs.motion': 'Motion',

      // Tab 1: Templates
      'templates.my_templates': 'My Templates',
      'templates.create_new': 'Create New',
      'templates.popular_starters': 'POPULAR STARTER TEMPLATES',
      'templates.popular_starters_sub': 'Curated high-performance lower-third styles ready for Facebook, YouTube & TV.',
      'templates.styles_count': '4 Styles',
      'templates.btn_use': 'Use (Open)',
      'templates.no_custom_saved': 'No Custom Saved Templates Yet',
      'templates.no_custom_saved_desc': 'Create your own design in Canvas Studio, click "Save Design", and it will appear right here!',
      'templates.open_studio': '➕ Open Canvas Studio',

      // Presets
      'preset.fb_movie.name': '🎬 Movie Offer Ribbon (Khmer Ticker)',
      'preset.fb_movie.desc': 'Yellow Offer Ribbon, Red Brand Badge & 2-Tier Running Headline & Hotline',
      'preset.fb_product.name': '🛍️ 3D Product Popout Card',
      'preset.fb_product.desc': 'Clean White Card, 3D Green Podium, 3D Product Pop-Out & Khmer Headline',
      'preset.broadcast.name': '🔴 Breaking News Alert (Marquee)',
      'preset.broadcast.desc': 'High-Impact Red Breaking News Ticker with Red Alert Badge & Continuous Running News',
      'preset.minimal.name': '💎 Modern Glass Lower Third',
      'preset.minimal.desc': 'Clean Glassmorphism badge with vibrant accent bar & speaker typography',

      // Tab 2: Canvas Studio
      'studio.title': 'Canvas Drag & Drop Studio',
      'studio.subtitle': 'Click & drag any element on the preview',
      'studio.btn_save': 'Save Design',
      'studio.starter_designs': '1-Click Starter Designs',
      'studio.starter_movie': 'Movie Sponsor Ribbon',
      'studio.starter_product': '3D Product Pop-Out',
      'studio.starter_card': 'Product Card Pro',
      'studio.starter_cyber': 'Cyberpunk HUD',
      'studio.starter_luxury': 'Luxury Pill',
      'studio.starter_blank': 'Blank Canvas',

      'studio.add_elements': '+ ADD ELEMENTS TO CANVAS',
      'studio.add_text': '+ Text',
      'studio.add_box': '+ Box / Card',
      'studio.add_photo': '+ Photo',
      'studio.add_cta': '+ CTA Button',
      'studio.add_badge': '+ Badge',
      'studio.add_stars': '+ 5 Stars',

      'studio.draw_shapes': 'DRAW SHAPES (CANVA)',
      'studio.draw_mode': 'Draw Mode',
      'shape.round': 'Round',
      'shape.box': 'Box',
      'shape.circle': 'Circle',
      'shape.pill': 'Pill',
      'shape.star': 'Star',
      'shape.triangle': 'Triangle',
      'shape.diamond': 'Diamond',
      'shape.hexagon': 'Hexagon',
      'shape.arrow': 'Arrow',
      'shape.line': 'Line',

      // Inspector
      'inspector.pos_size': 'POSITION & SIZE',
      'inspector.pos_x': 'POS X',
      'inspector.pos_y': 'POS Y',
      'inspector.width': 'WIDTH',
      'inspector.height': 'HEIGHT',
      'inspector.rotation': 'Rotation',
      'inspector.align': 'Alignment',
      'inspector.align_left': 'Left',
      'inspector.align_center_h': 'Center H',
      'inspector.align_center_v': 'Center V',
      'inspector.align_right': 'Right',

      'inspector.fill_color': 'FILL COLOR & STYLE',
      'inspector.fill_solid': 'Solid',
      'inspector.fill_gradient': 'Gradient',
      'inspector.opacity': 'Opacity',

      'inspector.border_style': 'BORDER & OUTLINE',
      'inspector.border_none': 'None',
      'inspector.border_solid': 'Solid',
      'inspector.border_dashed': 'Dashed',
      'inspector.corner_radius': 'Corner Radius',
      'inspector.glow': 'Glow & Shadow',

      'inspector.text_props': 'TEXT PROPERTIES',
      'inspector.text_content': 'Text Content',
      'inspector.font_family': 'Font Family',
      'inspector.font_size': 'Font Size',
      'inspector.font_weight': 'Font Weight',
      'inspector.text_color': 'Text Color',

      'inspector.anim_mode': 'TEXT ANIMATION (MARQUEE / RUN)',
      'inspector.anim_static': 'Static (Still)',
      'inspector.anim_marquee': 'Marquee (Running Text)',
      'inspector.anim_typewriter': 'Typewriter',
      'inspector.anim_pulse': 'Pulse',
      'inspector.marquee_dir': 'Running Direction',
      'inspector.dir_rtl': '⬅️ Right to Left (ស្តាំ ទៅ ឆ្វេង)',
      'inspector.dir_ltr': '➡️ Left to Right (ឆ្វេង ទៅ ស្តាំ)',
      'inspector.marquee_speed': 'Speed',

      'inspector.layers': 'LAYERS & REORDER',
      'inspector.bring_front': 'Bring to Front',
      'inspector.send_back': 'Send to Back',
      'inspector.duplicate': 'Duplicate',
      'inspector.delete': 'Delete Element',

      // Tab 3: Motion
      'motion.entrance_title': 'Entrance Animation (10 Motions)',
      'motion.quick_entrance': 'Quick Select Entrance:',
      'motion.exit_title': 'Exit Transition (8 Motions)',
      'motion.easing_title': 'Animation Easing Curve',
      'motion.quick_dur': 'Quick Video Length',
      'motion.custom_dur': 'Custom Duration:',
      'motion.btn_replay': 'Replay Animation',

      // Stage Controls
      'stage.res': 'RES:',
      'stage.zoom': 'Zoom:',
      'stage.zoom_fit': 'Fit View',
      'stage.select_all': 'Select All',
      'stage.delete': 'Delete',
      'stage.upload_photo': '+ Upload Photo',
      'stage.bg_label': 'Stage BG:',
      'stage.bg_alpha': 'Alpha',
      'stage.bg_green': 'Green',
      'stage.bg_dark': 'Dark',
      'stage.bg_light': 'Light',
      'stage.bg_sample': 'Sample',

      // Floating Toolbar
      'float.change_photo': 'Change Photo',
      'float.edit_text': '✏️ Edit Text',
      'float.run_text': '🏃 Run Text',
      'float.stop_run': '⏹️ Stop Run',
      'float.full_width': '↔️ Full Width',
      'float.copy': 'Copy',
      'float.paste': 'Paste',
      'float.duplicate': 'Duplicate',
      'float.select_all': 'Select All',

      // Inline Canvas Text Editor
      'editor.title': 'Edit Text On Canvas',
      'editor.done': '✕ Done',
      'editor.placeholder': 'Type Khmer or English text here...',
      'editor.khmer_font': '🇰🇭 Khmer Font:',
      'editor.size': 'Size:',
      'editor.color': 'Color',

      // Timeline Bar
      'timeline.play': 'Play Preview',
      'timeline.pause': 'Pause',
      'timeline.restart': 'Restart Animation',
      'timeline.fps': 'Real-Time 60 FPS',

      // Export Modal
      'export.rendering_title': 'Rendering Video...',
      'export.rendering_desc': 'Encoding 60fps video with alpha channel.',
      'export.cancel': 'Cancel'
    },

    km: {
      // Header
      'header.tag': 'ស្ទូឌីយោ Pro',
      'header.length': 'ថិរវេលា:',
      'header.dur_5': '5 វិនាទី (រហ័ស)',
      'header.dur_10': '10 វិនាទី (ធម្មតា)',
      'header.dur_15': '15 វិនាទី (Reels/TikTok)',
      'header.dur_20': '20 វិនាទី (ស្ពុនស័ររឿង)',
      'header.dur_30': '30 វិនាទី (រង្វិលជុំវែង)',
      'header.dur_60': '60 វិនាទី (ផ្សាយផ្ទាល់)',
      'header.dur_custom': 'កំណត់ផ្ទាល់ខ្លួន...',
      'header.snapshot_png': 'ថតរូប PNG (កាត់ផ្ទៃស្រាប់)',
      'header.export_webm': 'ទាញយកវីដេអូ (WebM ថ្លា)',
      'header.green_video': 'វីដេអូផ្ទាំងបៃតង (Chroma)',
      'header.obs_link': 'តំណភ្ជាប់ OBS',

      // Tabs
      'tabs.templates': 'ពុម្ពគំរូ (Templates)',
      'tabs.studio': 'ស្ទូឌីយោ Canvas',
      'tabs.motion': 'ចលនា (Motion)',

      // Tab 1: Templates
      'templates.my_templates': 'ពុម្ពគំរូរបស់ខ្ញុំ (My Templates)',
      'templates.create_new': 'បង្កើតថ្មី',
      'templates.popular_starters': 'ពុម្ពគំរូពេញនិយម (STARTER TEMPLATES)',
      'templates.popular_starters_sub': 'ពុម្ពគំរូកម្រិតខ្ពស់សម្រាប់ Facebook, YouTube & TV',
      'templates.styles_count': '៤ ម៉ូដ',
      'templates.btn_use': 'ប្រើ (បើក)',
      'templates.no_custom_saved': 'មិនទាន់មានពុម្ពគំរូដែលបានរក្សាទុកនៅឡើយទេ',
      'templates.no_custom_saved_desc': 'រចនាម៉ូដផ្ទាល់ខ្លួនក្នុង Canvas Studio រួចចុច "រក្សាទុកពុម្ពគំរូ" វានឹងបង្ហាញនៅទីនេះភ្លាម!',
      'templates.open_studio': '➕ បើក Canvas Studio',

      // Presets
      'preset.fb_movie.name': '🎬 ខ្សែបូស្ពុនស័ររឿង (Movie Ribbon)',
      'preset.fb_movie.desc': 'ខ្សែបូពណ៌លឿង ស្លាកម៉ាកពណ៌ក្រហម និងអក្សររត់ ២ ជាន់ មានលេខទូរស័ព្ទ',
      'preset.fb_product.name': '🛍️ កាតផលិតផល 3D Popout Card',
      'preset.fb_product.desc': 'កាតពណ៌ស ជើងទម្រ 3D ពណ៌បៃតង រូបភាពលេចធ្លោ & ចំណងជើងខ្មែរ',
      'preset.broadcast.name': '🔴 ព័ត៌មានទាន់ហេតុការណ៍ (Breaking News)',
      'preset.broadcast.desc': 'បន្ទះព័ត៌មានបន្ទាន់ពណ៌ក្រហម មានស្លាក Alert & អក្សររត់ជាប្រចាំ',
      'preset.minimal.name': '💎 ស្លាកកញ្ចក់ទំនើប (Modern Glass)',
      'preset.minimal.desc': 'រចនាបថកញ្ចក់ថ្លា Glassmorphism ឆ្នូតពណ៌រស់រវើក និងឈ្មោះវាគ្មិន',

      // Tab 2: Canvas Studio
      'studio.title': 'ស្ទូឌីយោកែសម្រួល Canvas (Drag & Drop)',
      'studio.subtitle': 'ចុចអូសពង្រីក/បង្រួមធាតុលើអេក្រង់ដោយសេរី',
      'studio.btn_save': '💾 រក្សាទុកពុម្ពគំរូ',
      'studio.starter_designs': 'ម៉ូដគំរូរហ័ស (1-Click Designs)',
      'studio.starter_movie': '🎬 ខ្សែបូស្ពុនស័ររឿង',
      'studio.starter_product': '📱 កាតផលិតផល 3D',
      'studio.starter_card': '🛍️ កាតផលិតផល Pro',
      'studio.starter_cyber': '⚡ បែបបច្ចេកវិទ្យា Cyber',
      'studio.starter_luxury': '💎 រាងគ្រាប់ថ្នាំប្រណិត',
      'studio.starter_blank': '⬜ ផ្ទាំងទទេ (បង្កើតថ្មី)',

      'studio.add_elements': '+ បន្ថែមធាតុលើ CANVAS',
      'studio.add_text': '+ អក្សរ (Text)',
      'studio.add_box': '+ ប្រអប់ / កាត',
      'studio.add_photo': '+ រូបភាព (Photo)',
      'studio.add_cta': '+ ប៊ូតុងបញ្ជា (Button)',
      'studio.add_badge': '+ ស្លាក (Badge)',
      'studio.add_stars': '+ ផ្កាយ ៥',

      'studio.draw_shapes': 'គូសរាងធរណីមាត្រ (SHAPES)',
      'studio.draw_mode': 'ម៉ូដគូស',
      'shape.round': 'ជ្រុងមូល',
      'shape.box': 'ការ៉េ',
      'shape.circle': 'រង្វង់',
      'shape.pill': 'គ្រាប់ថ្នាំ',
      'shape.star': 'ផ្កាយ',
      'shape.triangle': 'ត្រីកោណ',
      'shape.diamond': 'ពេជ្រ',
      'shape.hexagon': 'ឆកោន',
      'shape.arrow': 'ព្រួញ',
      'shape.line': 'បន្ទាត់',

      // Inspector
      'inspector.pos_size': 'ទីតាំង & ទំហំ (POSITION & SIZE)',
      'inspector.pos_x': 'ទីតាំង X',
      'inspector.pos_y': 'ទីតាំង Y',
      'inspector.width': 'ទទឹង W',
      'inspector.height': 'កម្ពស់ H',
      'inspector.rotation': 'បង្វិល (មុំ)',
      'inspector.align': 'តម្រឹមទីតាំង (Alignment)',
      'inspector.align_left': 'ឆ្វេង',
      'inspector.align_center_h': 'កណ្តាលផ្តេក',
      'inspector.align_center_v': 'កណ្តាលបញ្ឈរ',
      'inspector.align_right': 'ស្តាំ',

      'inspector.fill_color': 'ពណ៌ផ្ទៃ & រចនាបថ (COLOR & STYLE)',
      'inspector.fill_solid': 'ពណ៌រាប',
      'inspector.fill_gradient': 'ពណ៌ដេញ',
      'inspector.opacity': 'កម្រិតថ្លា (Opacity)',

      'inspector.border_style': 'បន្ទាត់គែម (BORDER & OUTLINE)',
      'inspector.border_none': 'គ្មាន',
      'inspector.border_solid': 'បន្ទាត់ពេញ',
      'inspector.border_dashed': 'បន្ទាត់ដាច់ៗ',
      'inspector.corner_radius': 'កោងជ្រុង',
      'inspector.glow': 'ស្រមោល & ពន្លឺ (Glow)',

      'inspector.text_props': 'លក្ខណៈអត្ថបទ (TEXT PROPERTIES)',
      'inspector.text_content': 'ខ្លឹមសារអត្ថបទ',
      'inspector.font_family': 'ប្រភេទពុម្ពអក្សរ (Font)',
      'inspector.font_size': 'ទំហំអក្សរ',
      'inspector.font_weight': 'កម្រាស់អក្សរ',
      'inspector.text_color': 'ពណ៌អក្សរ',

      'inspector.anim_mode': 'ចលនាអក្សរ (TEXT ANIMATION)',
      'inspector.anim_static': 'នៅស្ងៀម (Static)',
      'inspector.anim_marquee': 'អក្សររត់ (Marquee Running)',
      'inspector.anim_typewriter': 'វាយអក្សរបន្តិចម្តងៗ (Typewriter)',
      'inspector.anim_pulse': 'លោតញាក់ (Pulse)',
      'inspector.marquee_dir': 'ទិសដៅរត់ (Direction)',
      'inspector.dir_rtl': '⬅️ ពីស្តាំ ទៅ ឆ្វេង (RTL)',
      'inspector.dir_ltr': '➡️ ពីឆ្វេង ទៅ ស្តាំ (LTR)',
      'inspector.marquee_speed': 'ល្បឿនរត់',

      'inspector.layers': 'ជាន់ស្រទាប់ & រៀបលំដាប់ (LAYERS)',
      'inspector.bring_front': 'មកមុខគេបង្អស់',
      'inspector.send_back': 'ទៅក្រោយគេបង្អស់',
      'inspector.duplicate': 'ចម្លងទ្វេដង',
      'inspector.delete': 'លុបធាតុនេះចោល',

      // Tab 3: Motion
      'motion.entrance_title': 'ចលនាបើកបង្ហាញ (១០ ម៉ូដ)',
      'motion.quick_entrance': 'ជ្រើសរើសចលនារហ័ស:',
      'motion.exit_title': 'ចលនាបិទបញ្ចប់ (៨ ម៉ូដ)',
      'motion.easing_title': 'ភាពរលូននៃចលនា (Easing Curve)',
      'motion.quick_dur': 'រយៈពេលវីដេអូរហ័ស',
      'motion.custom_dur': 'កំណត់រយៈពេលដោយខ្លួនឯង:',
      'motion.btn_replay': 'ចាក់សាកល្បងឡើងវិញ',

      // Stage Controls
      'stage.res': 'ទំហំ:',
      'stage.zoom': 'ពង្រីក:',
      'stage.zoom_fit': 'សមល្មមអេក្រង់',
      'stage.select_all': 'ជ្រើសទាំងអស់',
      'stage.delete': 'លុប',
      'stage.upload_photo': '+ បញ្ចូលរូបភាព',
      'stage.bg_label': 'ផ្ទៃខាងក្រោយ:',
      'stage.bg_alpha': 'ថ្លា (Alpha)',
      'stage.bg_green': 'បៃតង (Green)',
      'stage.bg_dark': 'ងងឹត (Dark)',
      'stage.bg_light': 'ភ្លឺ (Light)',
      'stage.bg_sample': 'វីដេអូគំរូ (Sample)',

      // Floating Toolbar
      'float.change_photo': 'ប្តូររូបភាព',
      'float.edit_text': '✏️ កែអក្សរ',
      'float.run_text': '🏃 អក្សររត់',
      'float.stop_run': '⏹️ បញ្ឈប់រត់',
      'float.full_width': '↔️ ទទឹងពេញ',
      'float.copy': 'ចម្លង',
      'float.paste': 'បិទភ្ជាប់',
      'float.duplicate': 'ថតចម្លង',
      'float.select_all': 'ជ្រើសទាំងអស់',

      // Inline Canvas Text Editor
      'editor.title': 'កែអក្សរផ្ទាល់លើអេក្រង់ (On-Canvas Editor)',
      'editor.done': '✕ រួចរាល់',
      'editor.placeholder': 'វាយអក្សរខ្មែរ ឬ អង់គ្លេសនៅទីនេះ...',
      'editor.khmer_font': '🇰🇭 ពុម្ពអក្សរខ្មែរ:',
      'editor.size': 'ទំហំ:',
      'editor.color': 'ពណ៌',

      // Timeline Bar
      'timeline.play': 'ចាក់មើល (Play)',
      'timeline.pause': 'ផ្អាក (Pause)',
      'timeline.restart': 'ចាក់ឡើងវិញពីដើម',
      'timeline.fps': 'កម្រិតរលូន 60 FPS',

      // Export Modal
      'export.rendering_title': 'កំពុងផលិតវីដេអូ...',
      'export.rendering_desc': 'ដំណើរការកូដវីដេអូ 60fps មានផ្ទៃថ្លា (Alpha Channel)...',
      'export.cancel': 'បោះបង់'
    }
  };

  let currentLang = localStorage.getItem(STORAGE_KEY) || 'km'; // Default to Khmer as requested

  function t(key, fallback = '') {
    const langDict = translations[currentLang] || translations.en;
    if (langDict[key] !== undefined) return langDict[key];
    const enDict = translations.en;
    if (enDict[key] !== undefined) return enDict[key];
    return fallback || key;
  }

  function getLanguage() {
    return currentLang;
  }

  function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'km') lang = 'km';
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.documentElement.lang = lang;
    if (lang === 'km') {
      document.body.classList.add('lang-km');
    } else {
      document.body.classList.remove('lang-km');
    }

    // Update Language Toggle Button UI in Header
    const btnEn = document.getElementById('btn-lang-en');
    const btnKm = document.getElementById('btn-lang-km');
    if (btnEn && btnKm) {
      if (lang === 'km') {
        btnKm.className = 'px-2 py-1 rounded text-xs transition flex items-center gap-1 bg-indigo-600 text-white font-bold shadow';
        btnEn.className = 'px-2 py-1 rounded text-xs transition flex items-center gap-1 text-gray-400 hover:text-white font-medium';
      } else {
        btnEn.className = 'px-2 py-1 rounded text-xs transition flex items-center gap-1 bg-indigo-600 text-white font-bold shadow';
        btnKm.className = 'px-2 py-1 rounded text-xs transition flex items-center gap-1 text-gray-400 hover:text-white font-medium';
      }
    }

    // Apply translations to all DOM elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) el.textContent = val;
    });

    // Apply translations to data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = t(key);
      if (val) el.innerHTML = val;
    });

    // Apply translations to data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      const val = t(key);
      if (val) el.setAttribute('title', val);
    });

    // Apply translations to data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = t(key);
      if (val) el.setAttribute('placeholder', val);
    });

    // Dispatch event so app.js can re-render dynamic parts
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  // Export globally
  window.i18n = {
    t,
    getLanguage,
    setLanguage,
    translations
  };

  // Auto-init on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    // Attach header switcher buttons if present
    const btnEn = document.getElementById('btn-lang-en');
    const btnKm = document.getElementById('btn-lang-km');
    if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
    if (btnKm) btnKm.addEventListener('click', () => setLanguage('km'));

    // Apply initial language
    setLanguage(currentLang);
  });
})();

