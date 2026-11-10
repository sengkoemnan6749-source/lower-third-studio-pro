/**
 * LowerThird Studio Pro - Main Application Controller
 */

document.addEventListener('DOMContentLoaded', () => {

  const canvas = document.getElementById('renderCanvas');
  const ctx = canvas.getContext('2d');

  // Starter Layout Compositions for Canva/CapCut Studio
  const starterLayouts = {
    fb_movie: [
      {
        id: 'el_movie_yellow_banner',
        name: 'Yellow Offer Ribbon',
        type: 'shape',
        shape: 'rounded',
        x: 60,
        y: 860,
        width: 820,
        height: 60,
        fillColor: '#facc15',
        fillOpacity: 1.0,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1.5,
        cornerRadius: 8,
        glow: 0,
        visible: true
      },
      {
        id: 'el_movie_brand_pill',
        name: 'Red Brand Badge',
        type: 'shape',
        shape: 'rounded',
        x: 60,
        y: 860,
        width: 170,
        height: 60,
        fillColor: '#dc2626',
        fillOpacity: 1.0,
        borderStyle: 'none',
        borderColor: 'transparent',
        borderWidth: 0,
        cornerRadius: 8,
        glow: 0,
        visible: true
      },
      {
        id: 'el_movie_brand_text',
        name: 'Brand Logo Text',
        type: 'text',
        text: 'FRESHY',
        fontSize: 26,
        fontWeight: '900',
        fontFamily: 'Montserrat',
        color: '#ffffff',
        x: 75,
        y: 866,
        width: 140,
        height: 28,
        align: 'center',
        visible: true
      },
      {
        id: 'el_movie_brand_tag',
        name: 'Brand Tagline',
        type: 'text',
        text: '100% Natural juice',
        fontSize: 10,
        fontWeight: '700',
        fontFamily: 'Inter',
        color: '#fef08a',
        x: 75,
        y: 898,
        width: 140,
        height: 16,
        align: 'center',
        visible: true
      },
      {
        id: 'el_movie_khmer_headline',
        name: 'Khmer Offer Headline (Running Ticker)',
        type: 'text',
        text: 'ទឹកផ្លែឈើ ហ្វ្រេសស៊ី ពីផ្លែឈើពិត ១០០% • រសជាតិឆ្ងាញ់ធម្មជាតិ • ទំនាក់ទំនងទិញ ៖ 077 57 98 68 / 010 86 86 62',
        fontSize: 24,
        fontWeight: '800',
        fontFamily: 'Inter',
        color: '#dc2626',
        strokeColor: '#ffffff',
        strokeWidth: 3,
        animation: 'marquee',
        animSpeed: 90,
        animDir: 'left',
        marqueeGap: 80,
        x: 245,
        y: 874,
        width: 620,
        height: 32,
        align: 'left',
        visible: true
      },
      {
        id: 'el_movie_hotline',
        name: 'Hotline Contact (Running Ticker)',
        type: 'text',
        text: '📞 ទំនាក់ទំនងទិញ ៖ 077 57 98 68 / 010 86 86 62 • Telegram: @FreshyJuice • ដឹកជញ្ជូន ២៥ ខេត្តក្រុង',
        fontSize: 19,
        fontWeight: '800',
        fontFamily: 'Inter',
        color: '#ffffff',
        strokeColor: '#dc2626',
        strokeWidth: 3,
        animation: 'marquee',
        animSpeed: 80,
        animDir: 'left',
        marqueeGap: 70,
        x: 245,
        y: 934,
        width: 620,
        height: 28,
        align: 'left',
        visible: true
      }
    ],

    fb_product: [
      {
        id: 'el_fb_white_card',
        name: 'Clean White Card',
        type: 'shape',
        shape: 'rounded',
        x: 80,
        y: 860,
        width: 860,
        height: 110,
        fillColor: '#ffffff',
        fillOpacity: 0.98,
        borderStyle: 'solid',
        borderColor: '#86efac',
        borderWidth: 2,
        cornerRadius: 22,
        glow: 10,
        visible: true
      },
      {
        id: 'el_fb_green_podium',
        name: '3D Green Podium Base',
        type: 'shape',
        shape: 'pill',
        x: 95,
        y: 915,
        width: 175,
        height: 55,
        fillColor: '#15803d',
        fillOpacity: 1.0,
        borderStyle: 'solid',
        borderColor: '#4ade80',
        borderWidth: 2,
        cornerRadius: 28,
        glow: 8,
        visible: true
      },
      {
        id: 'el_fb_product_popout',
        name: '3D Product Pop-Out',
        type: 'image',
        srcKey: 'img1',
        clipShape: 'none',
        fitMode: 'contain',
        x: 105,
        y: 775,
        width: 155,
        height: 155,
        borderColor: 'transparent',
        borderWidth: 0,
        cornerRadius: 0,
        visible: true
      },
      {
        id: 'el_fb_check_badge',
        name: 'Verified Check Badge',
        type: 'badge',
        text: '✓ សម្រាប់ទូរស័ព្ទ iPhone',
        badgeColor: 'emerald',
        icon: 'check',
        x: 290,
        y: 878,
        width: 180,
        height: 26,
        cornerRadius: 6,
        visible: true
      },
      {
        id: 'el_fb_khmer_headline',
        name: 'Khmer Benefit Headline (Running Ticker)',
        type: 'text',
        text: 'ទូរស័ព្ទយកទៅប្រើប្រាស់បានធម្មតា • ធានា ១ ឆ្នាំពេញ • តម្លៃពិសេសត្រឹមតែ $199 ប៉ុណ្ណោះ • Call: 012 345 678',
        fontSize: 25,
        fontWeight: '800',
        fontFamily: 'Inter',
        color: '#15803d',
        strokeColor: '#ffffff',
        strokeWidth: 2,
        animation: 'marquee',
        animSpeed: 85,
        animDir: 'left',
        marqueeGap: 75,
        x: 290,
        y: 916,
        width: 600,
        height: 36,
        align: 'left',
        visible: true
      },
      {
        id: 'el_fb_watermark',
        name: 'Watermark Credits',
        type: 'text',
        text: 'កម្មសិទ្ធិសម្លេង LXShort',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Inter',
        color: '#94a3b8',
        x: 350,
        y: 980,
        width: 300,
        height: 20,
        align: 'center',
        visible: true
      }
    ],

    broadcast: [
      {
        id: 'el_news_bar',
        name: 'Dark News Ticker Bar',
        type: 'shape',
        shape: 'rounded',
        x: 80,
        y: 890,
        width: 1760,
        height: 60,
        fillColor: '#0b0f19',
        fillOpacity: 0.98,
        borderStyle: 'solid',
        borderColor: '#dc2626',
        borderWidth: 2,
        cornerRadius: 10,
        glow: 8,
        visible: true
      },
      {
        id: 'el_news_badge',
        name: 'Breaking News Alert Pill',
        type: 'shape',
        shape: 'rounded',
        x: 80,
        y: 890,
        width: 250,
        height: 60,
        fillColor: '#dc2626',
        fillOpacity: 1.0,
        borderStyle: 'none',
        borderColor: 'transparent',
        borderWidth: 0,
        cornerRadius: 10,
        glow: 12,
        visible: true
      },
      {
        id: 'el_news_badge_text',
        name: 'Alert Badge Text',
        type: 'text',
        text: '🔴 ព័ត៌មានទាន់ហេតុការណ៍',
        fontSize: 16,
        fontWeight: '700',
        fontFamily: 'Moul',
        color: '#ffffff',
        x: 85,
        y: 908,
        width: 240,
        height: 24,
        align: 'center',
        visible: true
      },
      {
        id: 'el_news_ticker_text',
        name: 'Running News Ticker',
        type: 'text',
        text: 'ព័ត៌មានថ្មីៗប្រចាំថ្ងៃ • សម្តេចធិបតី ហ៊ុន ម៉ាណែត អញ្ជើញជាអធិបតីក្នុងពិធីសម្ពោធសមិទ្ធផលថ្មី • ផ្សាយផ្ទាល់ ២៤ម៉ោង • Lower Third Studio Pro',
        fontSize: 22,
        fontWeight: '700',
        fontFamily: 'Kantumruy Pro',
        color: '#ffffff',
        animation: 'marquee',
        animSpeed: 95,
        animDir: 'left',
        marqueeGap: 90,
        x: 350,
        y: 905,
        width: 1470,
        height: 30,
        align: 'left',
        visible: true
      }
    ],

    minimal: [
      {
        id: 'el_min_glass_card',
        name: 'Glassmorphism Card',
        type: 'shape',
        shape: 'rounded',
        x: 100,
        y: 860,
        width: 680,
        height: 90,
        fillColor: '#0f172a',
        fillOpacity: 0.92,
        borderStyle: 'solid',
        borderColor: '#6366f1',
        borderWidth: 2,
        cornerRadius: 16,
        glow: 10,
        visible: true
      },
      {
        id: 'el_min_accent_bar',
        name: 'Accent Color Bar',
        type: 'shape',
        shape: 'rounded',
        x: 100,
        y: 860,
        width: 10,
        height: 90,
        fillColor: '#ec4899',
        fillOpacity: 1.0,
        borderStyle: 'none',
        borderColor: 'transparent',
        borderWidth: 0,
        cornerRadius: 16,
        glow: 6,
        visible: true
      },
      {
        id: 'el_min_title',
        name: 'Speaker Name',
        type: 'text',
        text: 'ឯកឧត្តម ទេសរដ្ឋមន្ត្រី',
        fontSize: 26,
        fontWeight: '700',
        fontFamily: 'Moul',
        color: '#ffffff',
        x: 130,
        y: 875,
        width: 520,
        height: 32,
        align: 'left',
        visible: true
      },
      {
        id: 'el_min_subtitle',
        name: 'Title / Subtitle',
        type: 'text',
        text: 'រដ្ឋមន្ត្រីក្រសួងព័ត៌មាន និងទំនាក់ទំនងសាធារណៈ',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Kantumruy Pro',
        color: '#94a3b8',
        x: 130,
        y: 912,
        width: 520,
        height: 24,
        align: 'left',
        visible: true
      }
    ],

    product: [
      {
        id: 'el_bg_card',
        name: 'Main Card Box',
        type: 'shape',
        shape: 'rounded',
        x: 80,
        y: 860,
        width: 840,
        height: 140,
        fillColor: '#0b0f19',
        fillOpacity: 0.95,
        borderStyle: 'solid',
        borderColor: '#6366f1',
        borderWidth: 2,
        cornerRadius: 16,
        glow: 0,
        visible: true
      },
      {
        id: 'el_stripe',
        name: 'Accent Left Stripe',
        type: 'shape',
        shape: 'sharp',
        x: 80,
        y: 860,
        width: 6,
        height: 140,
        fillColor: '#6366f1',
        fillOpacity: 1,
        borderStyle: 'none',
        borderColor: 'transparent',
        borderWidth: 0,
        cornerRadius: 0,
        glow: 0,
        visible: true
      },
      {
        id: 'el_photo',
        name: 'Product Photo',
        type: 'image',
        srcKey: 'img1',
        clipShape: 'rounded',
        x: 104,
        y: 880,
        width: 100,
        height: 100,
        borderColor: '#6366f1',
        borderWidth: 2,
        cornerRadius: 14,
        visible: true
      },
      {
        id: 'el_badge',
        name: 'Deal Badge',
        type: 'badge',
        text: '🔥 BEST SELLER',
        badgeColor: 'accent',
        icon: 'fire',
        x: 224,
        y: 876,
        width: 120,
        height: 24,
        cornerRadius: 6,
        visible: true
      },
      {
        id: 'el_title',
        name: 'Headline Title',
        type: 'text',
        text: 'WIRELESS ANC HEADPHONES PRO',
        fontSize: 24,
        fontWeight: '800',
        fontFamily: 'Inter',
        color: '#ffffff',
        x: 224,
        y: 910,
        width: 430,
        height: 30,
        align: 'left',
        visible: true
      },
      {
        id: 'el_subtitle',
        name: 'Subtitle Specs',
        type: 'text',
        text: 'Spatial Audio • 40Hr Battery • Hybrid Noise Cancelling',
        fontSize: 13,
        fontWeight: '500',
        fontFamily: 'Inter',
        color: '#94a3b8',
        x: 224,
        y: 944,
        width: 430,
        height: 20,
        align: 'left',
        visible: true
      },
      {
        id: 'el_stars',
        name: '5-Star Rating',
        type: 'stars',
        ratingText: '4.9 ★★★★★ (2.4k reviews)',
        starColor: '#f59e0b',
        textColor: '#e2e8f0',
        fontSize: 13,
        x: 224,
        y: 970,
        width: 210,
        height: 18,
        visible: true
      },
      {
        id: 'el_cta_btn',
        name: 'CTA Shop Button',
        type: 'button',
        text: 'BUY NOW ➔',
        btnStyle: 'gradient',
        bgColor: '#6366f1',
        textColor: '#ffffff',
        cornerRadius: 8,
        x: 670,
        y: 925,
        width: 150,
        height: 44,
        visible: true
      }
    ],

    cyber: [
      {
        id: 'el_cyber_card',
        name: 'Cyber HUD Box',
        type: 'shape',
        shape: 'cyber',
        x: 80,
        y: 850,
        width: 820,
        height: 150,
        fillColor: '#040711',
        fillOpacity: 0.96,
        borderStyle: 'neon',
        borderColor: '#06b6d4',
        borderWidth: 2,
        cornerRadius: 12,
        glow: 22,
        visible: true
      },
      {
        id: 'el_cyber_photo',
        name: 'Cyber Avatar',
        type: 'image',
        srcKey: 'img1',
        clipShape: 'cyber',
        x: 108,
        y: 875,
        width: 100,
        height: 100,
        borderColor: '#06b6d4',
        borderWidth: 2,
        cornerRadius: 10,
        visible: true
      },
      {
        id: 'el_cyber_badge',
        name: 'Status Pill',
        type: 'badge',
        text: 'SYS_ONLINE',
        badgeColor: 'primary',
        icon: 'shield',
        x: 230,
        y: 874,
        width: 110,
        height: 22,
        cornerRadius: 4,
        visible: true
      },
      {
        id: 'el_cyber_title',
        name: 'Cyber Title',
        type: 'text',
        text: 'QUANTUM CHRONO X-9',
        fontSize: 26,
        fontWeight: '800',
        fontFamily: 'Orbitron',
        color: '#f8fafc',
        x: 230,
        y: 908,
        width: 430,
        height: 32,
        align: 'left',
        visible: true
      },
      {
        id: 'el_cyber_sub',
        name: 'Cyber Subtitle',
        type: 'text',
        text: 'Holographic HUD • Titanium Case • Quantum Battery',
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'Orbitron',
        color: '#06b6d4',
        x: 230,
        y: 944,
        width: 430,
        height: 20,
        align: 'left',
        visible: true
      },
      {
        id: 'el_cyber_stars',
        name: 'Tech Rating',
        type: 'stars',
        ratingText: '5.0 ★★★★★ (CYBER APPROVED)',
        starColor: '#06b6d4',
        textColor: '#06b6d4',
        fontSize: 12,
        x: 230,
        y: 970,
        width: 220,
        height: 18,
        visible: true
      },
      {
        id: 'el_cyber_btn',
        name: 'Deploy CTA',
        type: 'button',
        text: 'DEPLOY NOW ➔',
        btnStyle: 'neon',
        bgColor: '#f43f5e',
        textColor: '#ffffff',
        cornerRadius: 6,
        x: 670,
        y: 920,
        width: 160,
        height: 44,
        visible: true
      }
    ],

    luxury: [
      {
        id: 'el_lux_card',
        name: 'Luxury Oval Pill',
        type: 'shape',
        shape: 'pill',
        x: 80,
        y: 865,
        width: 800,
        height: 130,
        fillColor: '#0a0a0c',
        fillOpacity: 0.92,
        borderStyle: 'gradient',
        borderColor: '#eab308',
        borderWidth: 2,
        cornerRadius: 32,
        glow: 14,
        visible: true
      },
      {
        id: 'el_lux_photo',
        name: 'Jewel Photo',
        type: 'image',
        srcKey: 'img1',
        clipShape: 'circle',
        x: 110,
        y: 882,
        width: 96,
        height: 96,
        borderColor: '#eab308',
        borderWidth: 2,
        cornerRadius: 48,
        visible: true
      },
      {
        id: 'el_lux_badge',
        name: 'Verified Badge',
        type: 'badge',
        text: 'VERIFIED AUTHENTIC',
        badgeColor: 'gold',
        icon: 'sparkles',
        x: 226,
        y: 882,
        width: 130,
        height: 22,
        cornerRadius: 10,
        visible: true
      },
      {
        id: 'el_lux_title',
        name: 'Serif Title',
        type: 'text',
        text: 'AURORA RESERVE COLLECTION',
        fontSize: 24,
        fontWeight: '700',
        fontFamily: 'Playfair Display',
        color: '#fef08a',
        x: 226,
        y: 914,
        width: 420,
        height: 30,
        align: 'left',
        visible: true
      },
      {
        id: 'el_lux_sub',
        name: 'Serif Specs',
        type: 'text',
        text: 'Handcrafted Platinum & Diamonds • Certificate Included',
        fontSize: 13,
        fontWeight: '500',
        fontFamily: 'Playfair Display',
        color: '#d4d4d8',
        x: 226,
        y: 948,
        width: 420,
        height: 20,
        align: 'left',
        visible: true
      },
      {
        id: 'el_lux_stars',
        name: 'Luxury Rating',
        type: 'stars',
        ratingText: '4.95 ★★★★★ (VIP Exclusive)',
        starColor: '#eab308',
        textColor: '#fef08a',
        fontSize: 12,
        x: 226,
        y: 972,
        width: 190,
        height: 18,
        visible: true
      },
      {
        id: 'el_lux_btn',
        name: 'Reserve CTA',
        type: 'button',
        text: 'RESERVE NOW',
        btnStyle: 'solid',
        bgColor: '#eab308',
        textColor: '#0a0a0c',
        cornerRadius: 20,
        x: 660,
        y: 915,
        width: 150,
        height: 40,
        visible: true
      }
    ],

    blank: []
  };

  // Application State
  const state = {
    template: 'minimal',
    title: 'ALEX RIVERA',
    subtitle: 'Executive Creative Director | Visionary Labs',
    badge: 'EXCLUSIVE',
    colors: {
      primary: '#6366f1',
      accent: '#ec4899',
      bg: '#0f172a',
      bgOpacity: 0.92,
      text: '#ffffff'
    },
    font: 'Inter',
    titleSize: 28,
    subSize: 16,
    position: 'bottom-left',
    marginX: 80,
    marginY: 80,
    durIn: 0.8,
    durHold: 3.5,
    durOut: 0.7,
    avatarImg: null,
    images: {
      img1: null,
      img2: null,
      img3: null
    },
    dimensions: { x: 80, y: 880 },
    builder: {
      shape: 'rounded',
      cornerRadius: 14,
      cardHeight: 116,
      cardWidthMode: 'auto',
      cardWidth: 720,
      border: 'neon',
      borderWidth: 2.0,
      glowIntensity: 18,
      stripeStyle: 'left-bar',
      imageMode: '1',
      photoShape: 'rounded',
      photoSize: 88,
      layoutAlign: 'left',
      showBadge: true,
      badgeText: 'EXCLUSIVE',
      badgeIcon: 'sparkles',
      badgeColor: 'primary',
      badgePlacement: 'above-title',
      showPrice: true,
      priceText: '$199.99',
      oldPriceText: '$299.99',
      discountTag: '-35% OFF',
      showCta: true,
      ctaText: 'SHOP NOW ➔',
      ctaStyle: 'gradient',
      showRating: true,
      ratingText: '4.9 (1.2k+)',
      starColor: '#f59e0b',
      showUrgency: false,
      urgencyText: '⚡ SPECIAL PROMO • LIMITED TIME ONLY',
      showQr: false,
      qrLabel: 'SCAN TO BUY'
    },
    motionIn: 'slide-left',
    motionOut: 'slide-down',
    motionEase: 'cubic',
    resolution: '1080p',
    enableLightSweep: true,
    autoResponsiveWidth: true,
    canvasElements: JSON.parse(JSON.stringify(starterLayouts.product)),
    selectedElementId: 'el_bg_card',
    isExporting: false,
    activeTab: 'tab-presets',
    selectedDrawShape: 'rounded',
    isDrawMode: false,
    drawingActive: false,
    drawingRect: null
  };
  window.state = state;

  // Playback State
  let isPlaying = true;
  let isLooping = true;
  let playbackStartTime = performance.now();
  let pausedAtTime = 0;
  let activeExportSession = null;
  let zoomMode = 'fit';

  // Preset Configurations (Curated High-Value Production Templates)
  const presets = [
    {
      id: 'fb_movie',
      name: '🎬 Movie Offer Ribbon (Khmer Ticker)',
      desc: 'Yellow Offer Ribbon, Red Brand Badge & 2-Tier Running Headline & Hotline',
      badge: 'PROMO',
      colors: { primary: '#facc15', accent: '#dc2626', bg: '#0b0f19', bgOpacity: 1.0, text: '#ffffff' },
      font: 'Kantumruy Pro'
    },
    {
      id: 'fb_product',
      name: '🛍️ 3D Product Popout Card',
      desc: 'Clean White Card, 3D Green Podium, 3D Product Pop-Out & Khmer Headline',
      badge: 'VERIFIED',
      colors: { primary: '#22c55e', accent: '#15803d', bg: '#ffffff', bgOpacity: 0.98, text: '#111827' },
      font: 'Kantumruy Pro'
    },
    {
      id: 'broadcast',
      name: '🔴 Breaking News Alert (Marquee)',
      desc: 'High-Impact Red Breaking News Ticker with Red Alert Badge & Continuous Running News',
      badge: 'BREAKING',
      colors: { primary: '#dc2626', accent: '#f59e0b', bg: '#090d16', bgOpacity: 0.98, text: '#ffffff' },
      font: 'Moul'
    },
    {
      id: 'minimal',
      name: '💎 Modern Glass Lower Third',
      desc: 'Clean Glassmorphism badge with vibrant accent bar & speaker typography',
      badge: '',
      colors: { primary: '#6366f1', accent: '#ec4899', bg: '#0f172a', bgOpacity: 0.92, text: '#ffffff' },
      font: 'Kantumruy Pro'
    }
  ];

  // Calculate coordinates based on placement presets
  function updateDimensions() {
    const marginX = parseInt(state.marginX, 10);
    const marginY = parseInt(state.marginY, 10);
    const canvasW = 1920;  // 1080p base coordinate system (scaled by 2x in 4K)
    const canvasH = 1080;

    if (state.position === 'bottom-left') {
      state.dimensions.x = marginX;
      state.dimensions.y = canvasH - marginY - 120;
    } else if (state.position === 'bottom-center') {
      state.dimensions.x = canvasW / 2 - 250;
      state.dimensions.y = canvasH - marginY - 120;
    } else if (state.position === 'bottom-right') {
      state.dimensions.x = canvasW - marginX - 520;
      state.dimensions.y = canvasH - marginY - 120;
    }
  }

  // Populate Presets Grid
  function renderPresetCards() {
    const presetsGrid = document.getElementById('presets-grid');
    if (!presetsGrid) return;
    presetsGrid.innerHTML = '';
    presets.forEach(p => {
      const card = document.createElement('div');
      card.className = `preset-card ${state.template === p.id ? 'active' : ''} p-2.5 rounded-xl bg-dark-800 border border-gray-700 hover:border-indigo-500/60 transition cursor-pointer`;
      card.dataset.id = p.id;
      const pName = window.i18n ? window.i18n.t(`preset.${p.id}.name`, p.name) : p.name;
      const pDesc = window.i18n ? window.i18n.t(`preset.${p.id}.desc`, p.desc) : p.desc;
      card.innerHTML = `
        <div class="flex items-center justify-between mb-1">
          <strong class="text-xs font-semibold text-white truncate">${pName}</strong>
          <div class="flex gap-1 shrink-0">
            <span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${p.colors.primary}"></span>
            <span class="w-2.5 h-2.5 rounded-full inline-block" style="background:${p.colors.accent}"></span>
          </div>
        </div>
        <p class="text-[10.5px] text-gray-400 line-clamp-2 leading-tight">${pDesc}</p>
      `;
      card.addEventListener('click', () => {
        document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        if (starterLayouts[p.id]) {
          pushHistory(`Load ${pName}`);
          state.canvasElements = JSON.parse(JSON.stringify(starterLayouts[p.id]));
          state.selectedElementId = state.canvasElements[0]?.id || null;
          state.isAllSelected = false;
          state.template = 'custom_builder';
          if (p.id === 'fb_movie') setTotalDuration(20);
          else if (p.id === 'fb_product') setTotalDuration(15);
          else setTotalDuration(10);

          // Auto-switch to Canvas Studio
          const bTab = document.querySelector('.tab-btn[data-tab="tab-builder"]');
          if (bTab) bTab.click();

          syncInspectorUI();
          renderLayersList();
          updateFloatingToolbar();
          updateSelectAllButtonUI();
          triggerReplay();
          showToast(`Loaded "${pName}" into Canvas Studio!`);
        } else {
          state.template = p.id;
          if (p.title) state.title = p.title;
          if (p.subtitle) state.subtitle = p.subtitle;
          if (p.badge !== undefined) state.badge = p.badge;
          state.colors = { ...p.colors };
          state.font = p.font;

          syncStateToUI();
          triggerReplay();
        }
      });
      presetsGrid.appendChild(card);
    });
  }
  renderPresetCards();

  // Populate Icon Picker
  const presetIcons = [
    { name: 'user', icon: 'user' },
    { name: 'video', icon: 'video' },
    { name: 'tv', icon: 'tv' },
    { name: 'radio', icon: 'radio' },
    { name: 'mic', icon: 'mic' },
    { name: 'sparkles', icon: 'sparkles' },
    { name: 'shield', icon: 'shield-alert' },
    { name: 'heart', icon: 'heart' },
    { name: 'award', icon: 'award' },
    { name: 'globe', icon: 'globe' },
    { name: 'share', icon: 'share-2' },
    { name: 'camera', icon: 'camera' }
  ];

  const iconPicker = document.getElementById('icon-picker');
  presetIcons.forEach(ic => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'p-2 rounded-lg bg-dark-800 hover:bg-indigo-600/20 border border-gray-700 text-gray-400 hover:text-indigo-300 transition flex items-center justify-center';
    btn.title = ic.name;
    btn.innerHTML = `<i data-lucide="${ic.icon}" class="w-4 h-4"></i>`;
    btn.addEventListener('click', () => {
      generatePresetAvatarIcon(ic.icon);
    });
    iconPicker.appendChild(btn);
  });

  // Generate an avatar image from canvas gradient
  function generatePresetAvatarIcon(iconName) {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 120;
    tempCanvas.height = 120;
    const tCtx = tempCanvas.getContext('2d');

    const grad = tCtx.createLinearGradient(0, 0, 120, 120);
    grad.addColorStop(0, state.colors.primary);
    grad.addColorStop(1, state.colors.accent);
    tCtx.fillStyle = grad;
    tCtx.fillRect(0, 0, 120, 120);

    const img = new Image();
    img.src = tempCanvas.toDataURL();
    img.onload = () => {
      state.avatarImg = img;
      state.images.img1 = img;
      const slot1Img = document.getElementById('slot-1-img');
      const slot1Ph = document.getElementById('slot-1-placeholder');
      const btnRem1 = document.getElementById('btn-remove-slot-1');
      if (slot1Img) {
        slot1Img.src = img.src;
        slot1Img.classList.remove('hidden');
      }
      if (slot1Ph) slot1Ph.classList.add('hidden');
      if (btnRem1) btnRem1.classList.remove('hidden');
    };
  }

  // Font Management & Quick Chips (Comprehensive 🇰🇭 Khmer & English)
  const fontList = [
    { name: 'Kantumruy Pro', label: '🇰🇭 Kantumruy' },
    { name: 'Moul', label: '🇰🇭 Moul (មូល)' },
    { name: 'Battambang', label: '🇰🇭 Battambang' },
    { name: 'Koulen', label: '🇰🇭 Koulen' },
    { name: 'Siemreap', label: '🇰🇭 Siemreap' },
    { name: 'Bayon', label: '🇰🇭 Bayon' },
    { name: 'Dangrek', label: '🇰🇭 Dangrek' },
    { name: 'Preahvihear', label: '🇰🇭 Preahvihear' },
    { name: 'Inter', label: 'Inter' },
    { name: 'Montserrat', label: 'Montserrat' },
    { name: 'Poppins', label: 'Poppins' },
    { name: 'Bebas Neue', label: 'Bebas' },
    { name: 'Anton', label: 'Anton' },
    { name: 'Oswald', label: 'Oswald' },
    { name: 'Playfair Display', label: 'Playfair' }
  ];

  const fontChipsContainer = document.getElementById('font-chips-container');
  if (fontChipsContainer) {
    fontList.forEach(f => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `font-chip px-1.5 py-1 rounded text-[11px] font-medium border border-gray-700 bg-dark-800 text-gray-300 hover:text-white hover:border-indigo-500/50 transition truncate text-center ${state.font === f.name ? 'border-indigo-500 bg-indigo-900/40 text-indigo-300' : ''}`;
      chip.title = f.name;
      chip.textContent = f.label;
      chip.style.fontFamily = `'${f.name}', sans-serif`;
      chip.addEventListener('click', () => {
        setFont(f.name);
      });
      fontChipsContainer.appendChild(chip);
    });
  }

  function setFont(fontName) {
    state.font = fontName;
    const selectContent = document.getElementById('select-font-content');
    const selectStyle = document.getElementById('select-font-family');
    const labelActive = document.getElementById('label-active-font');

    if (selectContent) selectContent.value = fontName;
    if (selectStyle) selectStyle.value = fontName;
    if (labelActive) labelActive.textContent = fontName;

    // Also update selected canvas text element if one is selected!
    if (state.selectedElementId) {
      const el = state.canvasElements.find(e => e.id === state.selectedElementId);
      if (el && el.type === 'text') {
        el.fontFamily = fontName;
        const inspFont = document.getElementById('insp-text-font');
        if (inspFont) inspFont.value = fontName;
        const floatFont = document.getElementById('float-select-font');
        if (floatFont) floatFont.value = fontName;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      }
    }

    // Update chip active states
    document.querySelectorAll('.font-chip').forEach(btn => {
      if (btn.title === fontName) {
        btn.className = 'font-chip px-1.5 py-1 rounded text-[11px] font-medium border border-indigo-500 bg-indigo-900/40 text-indigo-300 transition truncate text-center';
      } else {
        btn.className = 'font-chip px-1.5 py-1 rounded text-[11px] font-medium border border-gray-700 bg-dark-800 text-gray-300 hover:text-white hover:border-indigo-500/50 transition truncate text-center';
      }
    });
  }

  const selectFontContent = document.getElementById('select-font-content');
  if (selectFontContent) {
    selectFontContent.addEventListener('change', e => {
      setFont(e.target.value);
    });
  }

  const selectFontStyle = document.getElementById('select-font-family');
  if (selectFontStyle) {
    selectFontStyle.addEventListener('change', e => {
      setFont(e.target.value);
    });
  }

  // Refresh icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Sync state values to DOM input fields
  function syncStateToUI() {
    document.getElementById('input-title').value = state.title;
    document.getElementById('input-subtitle').value = state.subtitle;
    document.getElementById('input-badge').value = state.badge;

    document.getElementById('input-color-primary').value = state.colors.primary;
    document.getElementById('text-color-primary').value = state.colors.primary;
    document.getElementById('input-color-accent').value = state.colors.accent;
    document.getElementById('text-color-accent').value = state.colors.accent;
    document.getElementById('input-color-bg').value = state.colors.bg;
    document.getElementById('text-color-bg').value = state.colors.bg;
    document.getElementById('input-color-text').value = state.colors.text;
    document.getElementById('text-color-text').value = state.colors.text;

    document.getElementById('input-bg-opacity').value = Math.round(state.colors.bgOpacity * 100);
    document.getElementById('label-bg-opacity').textContent = `${Math.round(state.colors.bgOpacity * 100)}%`;

    if (document.getElementById('input-dur-in')) {
      document.getElementById('input-dur-in').value = state.durIn;
      document.getElementById('label-dur-in').textContent = `${state.durIn.toFixed(1)} s`;
    }
    if (document.getElementById('input-dur-hold')) {
      document.getElementById('input-dur-hold').value = state.durHold;
      document.getElementById('label-dur-hold').textContent = `${state.durHold.toFixed(1)} s`;
    }
    if (document.getElementById('input-dur-out')) {
      document.getElementById('input-dur-out').value = state.durOut;
      document.getElementById('label-dur-out').textContent = `${state.durOut.toFixed(1)} s`;
    }

    setFont(state.font);
    updatePhaseMarkers();
    updateDimensions();
  }

  // Update phase markers on timeline
  function updatePhaseMarkers() {
    const total = state.durIn + state.durHold + state.durOut;
    document.getElementById('time-total').textContent = `${total.toFixed(2)}s`;
    document.getElementById('label-total-dur').textContent = `${total.toFixed(1)}s (${Math.round(total * 60)} frames @ 60fps)`;

    const m1 = (state.durIn / total) * 100;
    const m2 = ((state.durIn + state.durHold) / total) * 100;

    document.getElementById('marker-intro-end').style.left = `${m1}%`;
    document.getElementById('marker-hold-end').style.left = `${m2}%`;
  }

  // Tab Switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
        b.classList.add('text-gray-400');
      });
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));

      btn.classList.add('active');
      btn.classList.remove('text-gray-400');
      document.getElementById(btn.dataset.tab).classList.remove('hidden');

      state.activeTab = btn.dataset.tab;
      const floatingHint = document.getElementById('canvas-floating-hint');
      if (btn.dataset.tab === 'tab-builder') {
        state.template = 'custom_builder';
        document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));
        if (floatingHint) floatingHint.classList.remove('hidden');
        syncInspectorUI();
        renderLayersList();
        triggerReplay();
      } else {
        if (floatingHint) floatingHint.classList.add('hidden');
      }
    });
  });

  // Inputs: Content
  document.getElementById('input-title').addEventListener('input', e => {
    state.title = e.target.value;
    if (state.autoResponsiveWidth && state.builder) {
      ctx.save();
      ctx.font = `700 ${state.titleSize || 28}px '${state.font}', sans-serif`;
      const tW = ctx.measureText(state.title).width;
      ctx.restore();
      if (tW + 300 > state.builder.cardWidth) {
        state.builder.cardWidth = Math.min(1800, Math.round(tW + 320));
      }
    }
  });
  document.getElementById('input-subtitle').addEventListener('input', e => {
    state.subtitle = e.target.value;
    if (state.autoResponsiveWidth && state.builder) {
      ctx.save();
      ctx.font = `400 ${state.subSize || 16}px '${state.font}', sans-serif`;
      const sW = ctx.measureText(state.subtitle).width;
      ctx.restore();
      if (sW + 300 > state.builder.cardWidth) {
        state.builder.cardWidth = Math.min(1800, Math.round(sW + 320));
      }
    }
  });
  document.getElementById('input-badge').addEventListener('input', e => {
    state.badge = e.target.value;
  });

  // Multi-Image Upload Manager (3 Slots)
  function setupImageSlot(slotNum) {
    const fileInput = document.getElementById(`input-file-slot-${slotNum}`);
    const imgEl = document.getElementById(`slot-${slotNum}-img`);
    const placeholder = document.getElementById(`slot-${slotNum}-placeholder`);
    const btnRemove = document.getElementById(`btn-remove-slot-${slotNum}`);

    if (!fileInput || !imgEl) return;

    fileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = evt => {
          const img = new Image();
          img.src = evt.target.result;
          img.onload = () => {
            const key = `img${slotNum}`;
            state.images[key] = img;
            if (slotNum === 1) state.avatarImg = img;
            imgEl.src = evt.target.result;
            imgEl.classList.remove('hidden');
            if (placeholder) placeholder.classList.add('hidden');
            if (btnRemove) btnRemove.classList.remove('hidden');
          };
        };
        reader.readAsDataURL(file);
      }
    });

    if (btnRemove) {
      btnRemove.addEventListener('click', () => {
        const key = `img${slotNum}`;
        state.images[key] = null;
        if (slotNum === 1) state.avatarImg = null;
        imgEl.src = '';
        imgEl.classList.add('hidden');
        if (placeholder) placeholder.classList.remove('hidden');
        btnRemove.classList.add('hidden');
        fileInput.value = '';
      });
    }
  }

  setupImageSlot(1);
  setupImageSlot(2);
  setupImageSlot(3);

  // -------------------------------------------------------------
  // Unlimited & 1-Click Direct Image Upload System (Canva-Style)
  // -------------------------------------------------------------
  let activeReplacingElementId = null;

  function elementHasImage(el) {
    if (!el) return false;
    if (el.imageObj && el.imageObj.complete && el.imageObj.naturalWidth > 0) return true;
    if (el.imgSrc) return true;
    if (state.images && el.srcKey && state.images[el.srcKey]) return true;
    if (state.avatarImg) return true;
    return false;
  }

  function openImageFilePickerForElement(el) {
    if (!el) return;
    activeReplacingElementId = el.id;
    const replacer = document.getElementById('input-replace-element-image');
    if (replacer) {
      replacer.value = '';
      replacer.click();
    }
  }

  function addImagesToCanvas(files, targetPos = { x: 140, y: 840 }) {
    if (!files || files.length === 0) return;
    const fileList = Array.from(files).filter(f => f.type.startsWith('image/'));
    if (fileList.length === 0) {
      showToast('⚠️ Please select valid image files (PNG, JPG, WebP)');
      return;
    }

    let loadedCount = 0;
    const totalFiles = fileList.length;

    fileList.forEach((file, idx) => {
      const reader = new FileReader();
      reader.onload = evt => {
        const dataUrl = evt.target.result;
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => {
          const aspect = (img.naturalWidth && img.naturalHeight) ? (img.naturalWidth / img.naturalHeight) : 1;
          let w = 150;
          let h = Math.round(w / aspect);
          if (h > 180) {
            h = 180;
            w = Math.round(h * aspect);
          }
          if (w > 260) {
            w = 260;
            h = Math.round(w / aspect);
          }

          const stagger = idx * 28;
          const newEl = {
            id: 'el_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
            name: file.name ? ('Photo: ' + file.name.substring(0, 18)) : `Photo #${state.canvasElements.length + 1}`,
            type: 'image',
            imgSrc: dataUrl,
            imageObj: img,
            x: Math.min(1700, Math.max(30, Math.round(targetPos.x + stagger))),
            y: Math.min(960, Math.max(30, Math.round(targetPos.y + stagger))),
            width: Math.max(40, w),
            height: Math.max(40, h),
            clipShape: 'rounded',
            fitMode: 'contain',
            cornerRadius: 14,
            borderColor: '#6366f1',
            borderWidth: 0,
            visible: true
          };

          state.canvasElements.push(newEl);
          state.selectedElementId = newEl.id;
          state.isAllSelected = false;
          state.template = 'custom_builder';

          loadedCount++;
          if (loadedCount === totalFiles) {
            pushHistory(`Add ${totalFiles} Photo(s)`);
            const bTab = document.querySelector('[data-tab="tab-builder"]');
            if (bTab) bTab.click();
            syncInspectorUI();
            renderLayersList();
            updateFloatingToolbar();
            updateSelectAllButtonUI();
            if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
            showToast(`✅ Added ${totalFiles} photo(s) to canvas!`);
          }
        };
      };
      reader.readAsDataURL(file);
    });
  }

  // Connect Input: Direct Multi-Image Upload
  const inputDirectUpload = document.getElementById('input-direct-image-upload');
  if (inputDirectUpload) {
    inputDirectUpload.addEventListener('change', e => {
      const files = e.target.files;
      if (files && files.length > 0) {
        addImagesToCanvas(files, { x: 180, y: 840 });
        inputDirectUpload.value = '';
      }
    });
  }

  // Connect Input: Replace Image for specific element
  const inputReplaceElement = document.getElementById('input-replace-element-image');
  if (inputReplaceElement) {
    inputReplaceElement.addEventListener('change', e => {
      const file = e.target.files && e.target.files[0];
      if (!file || !activeReplacingElementId) return;
      const el = state.canvasElements.find(item => item.id === activeReplacingElementId);
      if (!el) return;

      const reader = new FileReader();
      reader.onload = evt => {
        const dataUrl = evt.target.result;
        const img = new Image();
        img.src = dataUrl;
        img.onload = () => {
          el.imgSrc = dataUrl;
          el.imageObj = img;
          el.name = 'Photo: ' + file.name.substring(0, 18);
          pushHistory('Change Photo: ' + file.name);
          syncInspectorUI();
          renderLayersList();
          updateFloatingToolbar();
          if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
          showToast(`✅ Photo updated!`);
        };
      };
      reader.readAsDataURL(file);
      inputReplaceElement.value = '';
    });
  }

  // Connect Stage Top Toolbar Button
  const btnStageUploadImg = document.getElementById('btn-stage-upload-img');
  if (btnStageUploadImg) {
    btnStageUploadImg.addEventListener('click', () => {
      if (inputDirectUpload) inputDirectUpload.click();
    });
  }

  // Connect Sidebar Content Tab Upload Button
  const btnSidebarUploadAny = document.getElementById('btn-sidebar-upload-any');
  if (btnSidebarUploadAny) {
    btnSidebarUploadAny.addEventListener('click', () => {
      if (inputDirectUpload) inputDirectUpload.click();
    });
  }

  // Connect Floating Toolbar "Change Photo" Button
  const floatBtnReplaceImg = document.getElementById('float-btn-replace-img');
  if (floatBtnReplaceImg) {
    floatBtnReplaceImg.addEventListener('click', () => {
      if (state.selectedElementId) {
        const el = state.canvasElements.find(e => e.id === state.selectedElementId);
        if (el && el.type === 'image') {
          openImageFilePickerForElement(el);
        }
      }
    });
  }

  // Connect Floating Toolbar "Run Text" Quick Button
  const floatBtnToggleRun = document.getElementById('float-btn-toggle-run');
  if (floatBtnToggleRun) {
    floatBtnToggleRun.addEventListener('click', () => {
      if (!state.selectedElementId) return;
      const el = state.canvasElements.find(e => e.id === state.selectedElementId);
      if (!el || el.type !== 'text') return;

      if (el.animation === 'marquee') {
        el.animation = 'none';
        showToast('Text set to static');
      } else {
        el.animation = 'marquee';
        if (!el.animSpeed) el.animSpeed = 90;
        if (!el.marqueeGap) el.marqueeGap = 75;
        showToast('🏃 Running Text enabled! Auto-playing...');
        if (!isPlaying) triggerReplay();
      }
      syncInspectorUI();
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
  }

  // Floating Toolbar: Switch Run Direction (Left ↔ Right / ពីណាទៅណា)
  const floatBtnToggleDir = document.getElementById('float-btn-toggle-dir');
  if (floatBtnToggleDir) {
    floatBtnToggleDir.addEventListener('click', () => {
      if (!state.selectedElementId) return;
      const el = state.canvasElements.find(e => e.id === state.selectedElementId);
      if (!el || el.type !== 'text') return;
      el.animDir = el.animDir === 'right' ? 'left' : 'right';
      showToast(el.animDir === 'right' ? '➡️ Running Left to Right (ពីឆ្វេងទៅស្តាំ)' : '⬅️ Running Right to Left (ពីស្តាំទៅឆ្វេង)');
      pushHistory('Switch Marquee Direction');
      syncInspectorUI();
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
  }

  // Floating Toolbar: Stretch Run Track (Full Width / Ribbon)
  const floatBtnFullTrack = document.getElementById('float-btn-full-track');
  if (floatBtnFullTrack) {
    floatBtnFullTrack.addEventListener('click', () => {
      if (!state.selectedElementId) return;
      const el = state.canvasElements.find(e => e.id === state.selectedElementId);
      if (!el || el.type !== 'text') return;
      if (el.width >= 1600) {
        // Fit ribbon / normal box
        el.x = 240;
        el.width = 680;
        showToast('↔️ Run track fitted inside Ribbon (680px)');
      } else {
        // Stretch full screen
        el.x = 40;
        el.width = 1840;
        showToast('📺 Run track stretched across 100% Full Screen (1840px)');
      }
      pushHistory('Resize Run Track');
      syncInspectorUI();
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
  }

  // Drag and Drop Images directly onto Canvas Container
  const canvasContainerEl = document.getElementById('canvas-container');
  const dropOverlay = document.getElementById('canvas-drop-overlay');
  if (canvasContainerEl) {
    canvasContainerEl.addEventListener('dragover', e => {
      e.preventDefault();
      if (dropOverlay) dropOverlay.classList.remove('hidden');
    });
    canvasContainerEl.addEventListener('dragleave', e => {
      if (e.target === canvasContainerEl || !canvasContainerEl.contains(e.relatedTarget)) {
        if (dropOverlay) dropOverlay.classList.add('hidden');
      }
    });
    canvasContainerEl.addEventListener('drop', e => {
      e.preventDefault();
      if (dropOverlay) dropOverlay.classList.add('hidden');
      const files = Array.from(e.dataTransfer.files || []).filter(f => f.type.startsWith('image/'));
      if (files.length > 0) {
        const coords = getCanvasCoords(e);
        addImagesToCanvas(files, coords);
      }
    });
  }

  // Clipboard Paste (Ctrl+V) Images onto Canvas
  window.addEventListener('paste', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const items = e.clipboardData && e.clipboardData.items;
    if (!items) return;
    const imgFiles = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile();
        if (file) imgFiles.push(file);
      }
    }
    if (imgFiles.length > 0) {
      e.preventDefault();
      addImagesToCanvas(imgFiles, { x: 220, y: 840 });
    }
  });

  // Colors
  function setupColorPair(pickerId, textId, stateKey) {
    const picker = document.getElementById(pickerId);
    const text = document.getElementById(textId);
    picker.addEventListener('input', e => {
      state.colors[stateKey] = e.target.value;
      text.value = e.target.value;
    });
    text.addEventListener('input', e => {
      state.colors[stateKey] = e.target.value;
      picker.value = e.target.value;
    });
  }
  setupColorPair('input-color-primary', 'text-color-primary', 'primary');
  setupColorPair('input-color-accent', 'text-color-accent', 'accent');
  setupColorPair('input-color-bg', 'text-color-bg', 'bg');
  setupColorPair('input-color-text', 'text-color-text', 'text');

  document.getElementById('input-bg-opacity').addEventListener('input', e => {
    state.colors.bgOpacity = parseInt(e.target.value, 10) / 100;
    document.getElementById('label-bg-opacity').textContent = `${e.target.value}%`;
  });

  // Font & Scales
  document.getElementById('select-font-family').addEventListener('change', e => {
    setFont(e.target.value);
  });

  document.getElementById('input-title-size').addEventListener('input', e => {
    const scale = parseInt(e.target.value, 10) / 100;
    state.titleSize = Math.round(28 * scale);
    document.getElementById('label-title-size').textContent = `${e.target.value}%`;
  });

  document.getElementById('input-sub-size').addEventListener('input', e => {
    const scale = parseInt(e.target.value, 10) / 100;
    state.subSize = Math.round(16 * scale);
    document.getElementById('label-sub-size').textContent = `${e.target.value}%`;
  });

  // Position & Margins
  document.querySelectorAll('.pos-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pos-preset-btn').forEach(b => {
        b.classList.remove('bg-indigo-900/40', 'text-indigo-300', 'border-indigo-500/50');
        b.classList.add('bg-dark-800', 'text-gray-400', 'border-gray-700');
      });
      btn.classList.remove('bg-dark-800', 'text-gray-400', 'border-gray-700');
      btn.classList.add('bg-indigo-900/40', 'text-indigo-300', 'border-indigo-500/50');

      state.position = btn.dataset.pos;
      updateDimensions();
    });
  });

  document.getElementById('input-margin-x').addEventListener('input', e => {
    state.marginX = parseInt(e.target.value, 10);
    document.getElementById('label-margin-x').textContent = `${e.target.value}px`;
    updateDimensions();
  });

  document.getElementById('input-margin-y').addEventListener('input', e => {
    state.marginY = parseInt(e.target.value, 10);
    document.getElementById('label-margin-y').textContent = `${e.target.value}px`;
    updateDimensions();
  });

  // Central Duration Setter (Allows 20s or any custom duration by user)
  function setTotalDuration(targetSeconds) {
    targetSeconds = Math.max(1, Math.min(180, parseFloat(targetSeconds) || 5));
    const durIn = state.durIn || 0.8;
    const durOut = state.durOut !== undefined ? state.durOut : 0.7;
    const hold = Math.max(0.2, targetSeconds - durIn - durOut);
    state.durHold = hold;

    // Sync hold slider and label
    const inputHold = document.getElementById('input-dur-hold');
    if (inputHold) {
      inputHold.value = hold;
      document.getElementById('label-dur-hold').textContent = `${hold.toFixed(1)} s`;
    }

    // Sync custom total inputs
    const inputCustomTotal = document.getElementById('input-custom-total-dur');
    if (inputCustomTotal) inputCustomTotal.value = Math.round(targetSeconds);

    const headerCustomDurInput = document.getElementById('header-custom-dur-input');
    if (headerCustomDurInput) headerCustomDurInput.value = Math.round(targetSeconds);

    // Sync header dropdown
    const headerSel = document.getElementById('header-select-duration');
    const headerCustomWrap = document.getElementById('header-custom-dur-wrap');
    if (headerSel) {
      const matchOpt = Array.from(headerSel.options).find(o => parseFloat(o.value) === Math.round(targetSeconds));
      if (matchOpt) {
        headerSel.value = matchOpt.value;
        if (headerCustomWrap) {
          headerCustomWrap.classList.add('hidden');
          headerCustomWrap.classList.remove('flex');
        }
      } else {
        headerSel.value = 'custom';
        if (headerCustomWrap) {
          headerCustomWrap.classList.remove('hidden');
          headerCustomWrap.classList.add('flex');
        }
      }
    }

    // Update active highlight on quick duration buttons
    document.querySelectorAll('.btn-quick-dur').forEach(b => {
      const bDur = parseFloat(b.dataset.dur);
      if (Math.round(bDur) === Math.round(targetSeconds)) {
        b.className = 'btn-quick-dur py-1 rounded bg-indigo-900/70 hover:bg-indigo-800 text-indigo-300 border border-indigo-500/50 transition font-mono font-bold';
      } else {
        b.className = 'btn-quick-dur py-1 rounded bg-dark-800 hover:bg-gray-700 text-gray-300 border border-gray-700 transition font-mono';
      }
    });

    updatePhaseMarkers();
  }
  window.setTotalDuration = setTotalDuration;

  // Header Duration Dropdown
  document.getElementById('header-select-duration')?.addEventListener('change', e => {
    const val = e.target.value;
    const headerCustomWrap = document.getElementById('header-custom-dur-wrap');
    if (val === 'custom') {
      if (headerCustomWrap) {
        headerCustomWrap.classList.remove('hidden');
        headerCustomWrap.classList.add('flex');
      }
      const customInput = document.getElementById('header-custom-dur-input');
      if (customInput) customInput.focus();
    } else {
      if (headerCustomWrap) {
        headerCustomWrap.classList.add('hidden');
        headerCustomWrap.classList.remove('flex');
      }
      setTotalDuration(parseFloat(val));
      showToast(`⏱️ Video Duration set to ${val}s (Full Export)`);
    }
  });

  // Header Custom Duration Number Input
  document.getElementById('header-custom-dur-input')?.addEventListener('input', e => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val > 0) {
      setTotalDuration(val);
    }
  });

  // Motion Tab Quick Preset Buttons
  document.querySelectorAll('.btn-quick-dur').forEach(b => {
    b.addEventListener('click', () => {
      const dur = parseFloat(b.dataset.dur);
      setTotalDuration(dur);
      showToast(`⏱️ Video Duration set to ${dur}s`);
    });
  });

  // Motion Tab Custom Total Duration Input
  document.getElementById('input-custom-total-dur')?.addEventListener('input', e => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val) && val > 0) {
      setTotalDuration(val);
    }
  });

  // Individual Durations Sliders
  document.getElementById('input-dur-in')?.addEventListener('input', e => {
    state.durIn = parseFloat(e.target.value);
    document.getElementById('label-dur-in').textContent = `${state.durIn.toFixed(1)} s`;
    updatePhaseMarkers();
  });
  document.getElementById('input-dur-hold')?.addEventListener('input', e => {
    state.durHold = parseFloat(e.target.value);
    document.getElementById('label-dur-hold').textContent = `${state.durHold.toFixed(1)} s`;
    const total = state.durIn + state.durHold + state.durOut;
    const inputCustomTotal = document.getElementById('input-custom-total-dur');
    if (inputCustomTotal) inputCustomTotal.value = Math.round(total);
    updatePhaseMarkers();
  });
  document.getElementById('input-dur-out')?.addEventListener('input', e => {
    state.durOut = parseFloat(e.target.value);
    document.getElementById('label-dur-out').textContent = `${state.durOut.toFixed(1)} s`;
    const total = state.durIn + state.durHold + state.durOut;
    const inputCustomTotal = document.getElementById('input-custom-total-dur');
    if (inputCustomTotal) inputCustomTotal.value = Math.round(total);
    updatePhaseMarkers();
  });

  // ==========================================
  // CANVA / CAPCUT ON-CANVAS STUDIO CONTROLLER
  // ==========================================

  let isDragging = false;
  let dragAction = null; // 'move' or 'resize_nw', 'resize_se', etc.
  let dragStart = { x: 0, y: 0, elX: 0, elY: 0, elW: 0, elH: 0 };
  let clipboardElement = null;
  let lastRightClickPos = { x: 960, y: 540 };

  // Toast feedback bubble
  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById('canvas-toast');
    const msgEl = document.getElementById('canvas-toast-msg');
    if (!toast || !msgEl) return;
    msgEl.textContent = msg;
    toast.classList.remove('hidden');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 1600);
  }

  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = 1920 / rect.width;
    const scaleY = 1080 / rect.height;
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  }

  function rotatePoint(px, py, cx, cy, deg) {
    if (!deg) return { x: px, y: py };
    const rad = (deg * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const dx = px - cx;
    const dy = py - cy;
    return {
      x: cx + dx * cos - dy * sin,
      y: cy + dx * sin + dy * cos
    };
  }

  function isPointInsideElement(el, px, py) {
    const cx = el.x + el.width / 2;
    const cy = el.y + el.height / 2;
    const unrotated = rotatePoint(px, py, cx, cy, -(el.rotation || 0));
    return (
      unrotated.x >= el.x &&
      unrotated.x <= el.x + el.width &&
      unrotated.y >= el.y &&
      unrotated.y <= el.y + el.height
    );
  }

  function getElementHandles(el) {
    const cx = el.x + el.width / 2;
    const cy = el.y + el.height / 2;
    const deg = el.rotation || 0;

    const rawHandles = [
      { name: 'rot', x: cx, y: el.y - 28 }, // Rotation handle
      { name: 'nw',  x: el.x, y: el.y },
      { name: 'n',   x: cx, y: el.y },
      { name: 'ne',  x: el.x + el.width, y: el.y },
      { name: 'e',   x: el.x + el.width, y: cy },
      { name: 'se',  x: el.x + el.width, y: el.y + el.height },
      { name: 's',   x: cx, y: el.y + el.height },
      { name: 'sw',  x: el.x, y: el.y + el.height },
      { name: 'w',   x: el.x, y: cy }
    ];

    return rawHandles.map(h => {
      const pt = rotatePoint(h.x, h.y, cx, cy, deg);
      return { name: h.name, x: pt.x, y: pt.y };
    });
  }

  function hitTestHandle(el, mouseX, mouseY) {
    const handles = getElementHandles(el);
    for (const h of handles) {
      const hitRadius = h.name === 'rot' ? 22 : 18;
      if (Math.abs(mouseX - h.x) <= hitRadius && Math.abs(mouseY - h.y) <= hitRadius) {
        return h.name;
      }
    }
    return null;
  }

  // Floating Canva Toolbar positioning
  function updateFloatingToolbar() {
    const toolbar = document.getElementById('canvas-floating-toolbar');
    if (!toolbar) return;
    if ((!state.selectedElementId && !state.isAllSelected) || state.template !== 'custom_builder') {
      toolbar.classList.add('hidden');
      return;
    }

    let targetBox = null;
    if (state.isAllSelected && state.canvasElements && state.canvasElements.length > 0) {
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      for (const e of state.canvasElements) {
        if (e.visible === false) continue;
        minX = Math.min(minX, e.x);
        minY = Math.min(minY, e.y);
        maxX = Math.max(maxX, e.x + e.width);
        maxY = Math.max(maxY, e.y + e.height);
      }
      if (minX !== Infinity) {
        targetBox = { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
      }
    } else if (state.selectedElementId) {
      const el = state.canvasElements.find(e => e.id === state.selectedElementId);
      if (el && el.visible !== false) {
        targetBox = el;
      }
    }

    if (!targetBox) {
      toolbar.classList.add('hidden');
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const containerRect = canvasContainer.getBoundingClientRect();
    const scaleX = rect.width / 1920;
    const scaleY = rect.height / 1080;

    const screenX = (rect.left - containerRect.left) + (targetBox.x + targetBox.width / 2) * scaleX;
    let screenY = (rect.top - containerRect.top) + (targetBox.y * scaleY) - 46;

    if (screenY < 10) {
      screenY = (rect.top - containerRect.top) + (targetBox.y + targetBox.height) * scaleY + 12;
    }

    const floatBtnReplaceImg = document.getElementById('float-btn-replace-img');
    if (floatBtnReplaceImg) {
      const selectedEl = state.selectedElementId ? state.canvasElements.find(e => e.id === state.selectedElementId) : null;
      if (selectedEl && selectedEl.type === 'image' && !state.isAllSelected) {
        floatBtnReplaceImg.classList.remove('hidden');
      } else {
        floatBtnReplaceImg.classList.add('hidden');
      }
    }

    const floatBtnToggleRun = document.getElementById('float-btn-toggle-run');
    const floatBtnToggleDir = document.getElementById('float-btn-toggle-dir');
    const floatBtnFullTrack = document.getElementById('float-btn-full-track');

    if (floatBtnToggleRun) {
      const selectedEl = state.selectedElementId ? state.canvasElements.find(e => e.id === state.selectedElementId) : null;
      if (selectedEl && selectedEl.type === 'text' && !state.isAllSelected) {
        floatBtnToggleRun.classList.remove('hidden');
        const lbl = document.getElementById('float-text-run-label');
        if (lbl) {
          const isStop = selectedEl.animation === 'marquee';
          lbl.textContent = isStop 
            ? (window.i18n ? window.i18n.t('float.stop_run', '⏸️ Stop Run') : '⏸️ Stop Run')
            : (window.i18n ? window.i18n.t('float.run_text', '🏃 Run Text') : '🏃 Run Text');
        }

        // Show Direction Switcher & Stretch Track when Marquee is active
        if (selectedEl.animation === 'marquee') {
          if (floatBtnToggleDir) {
            floatBtnToggleDir.classList.remove('hidden');
            const dirLbl = document.getElementById('float-text-dir-label');
            if (dirLbl) {
              dirLbl.textContent = selectedEl.animDir === 'right' ? '➡️ ពីឆ្វេងទៅស្តាំ' : '⬅️ ពីស្តាំទៅឆ្វេង';
            }
          }
          if (floatBtnFullTrack) {
            floatBtnFullTrack.classList.remove('hidden');
          }
        } else {
          if (floatBtnToggleDir) floatBtnToggleDir.classList.add('hidden');
          if (floatBtnFullTrack) floatBtnFullTrack.classList.add('hidden');
        }
      } else {
        floatBtnToggleRun.classList.add('hidden');
        if (floatBtnToggleDir) floatBtnToggleDir.classList.add('hidden');
        if (floatBtnFullTrack) floatBtnFullTrack.classList.add('hidden');
      }
    }

    toolbar.style.left = `${Math.round(screenX)}px`;
    toolbar.style.top = `${Math.round(screenY)}px`;
    toolbar.style.transform = 'translateX(-50%)';
    toolbar.classList.remove('hidden');
  }

  // ==========================================
  // DIRECT ON-CANVAS INLINE TEXT EDITOR
  // ==========================================
  function openOnCanvasTextEditor(el) {
    if (!el || el.type !== 'text') return;
    const editor = document.getElementById('canvas-inline-text-editor');
    if (!editor) return;

    editor.dataset.targetId = el.id;

    // Populate data
    const inputArea = document.getElementById('input-inline-canvas-text');
    if (inputArea) inputArea.value = el.text || '';

    const selFont = document.getElementById('select-inline-font');
    if (selFont) selFont.value = el.fontFamily || 'Kantumruy Pro';

    const lblFont = document.getElementById('label-inline-active-font');
    if (lblFont) lblFont.textContent = el.fontFamily || 'Kantumruy Pro';

    const sizeInput = document.getElementById('input-inline-size');
    if (sizeInput) sizeInput.value = el.fontSize || 24;

    const lblSize = document.getElementById('label-inline-size');
    if (lblSize) lblSize.textContent = `${el.fontSize || 24}px`;

    const colorInput = document.getElementById('input-inline-color');
    if (colorInput) colorInput.value = el.color || '#ffffff';

    const lblColor = document.getElementById('label-inline-color');
    if (lblColor) lblColor.textContent = el.color || '#ffffff';

    // Position above/below the text element on canvas
    const rect = canvas.getBoundingClientRect();
    const container = canvas.parentElement;
    const containerRect = container.getBoundingClientRect();
    const scaleX = rect.width / 1920;
    const scaleY = rect.height / 1080;

    const centerX = (rect.left - containerRect.left) + (el.x + el.width / 2) * scaleX;
    let editorX = centerX - 190;
    let editorY = (rect.top - containerRect.top) + el.y * scaleY - 225;

    if (editorX < 10) editorX = 10;
    if (editorX + 390 > containerRect.width) editorX = containerRect.width - 390;

    if (editorY < 10) {
      editorY = (rect.top - containerRect.top) + (el.y + el.height) * scaleY + 15;
    }
    if (editorY + 240 > containerRect.height) {
      editorY = containerRect.height - 245;
    }

    editor.style.left = `${Math.round(editorX)}px`;
    editor.style.top = `${Math.round(editorY)}px`;
    editor.classList.remove('hidden');

    // Hide floating toolbar while editing inline
    const toolbar = document.getElementById('canvas-floating-toolbar');
    if (toolbar) toolbar.classList.add('hidden');

    if (inputArea) {
      setTimeout(() => {
        inputArea.focus();
        inputArea.select();
      }, 50);
    }
  }

  function closeOnCanvasTextEditor() {
    const editor = document.getElementById('canvas-inline-text-editor');
    if (!editor || editor.classList.contains('hidden')) return;
    editor.classList.add('hidden');
    delete editor.dataset.targetId;
    updateFloatingToolbar();
  }

  // Undo / Redo History Stack (Max 40 steps)
  const history = {
    undoStack: [],
    redoStack: [],
    max: 40
  };
  let preDragSnapshot = null;

  function pushHistory(action = 'Edit') {
    const snapshot = JSON.stringify({
      elements: state.canvasElements || [],
      selectedId: state.selectedElementId
    });
    if (history.undoStack.length > 0 && history.undoStack[history.undoStack.length - 1].data === snapshot) {
      return;
    }
    history.undoStack.push({ action, data: snapshot });
    if (history.undoStack.length > history.max) history.undoStack.shift();
    history.redoStack.length = 0;
    updateUndoRedoUI();
  }

  function undo() {
    if (history.undoStack.length === 0) {
      showToast('Nothing to undo');
      return;
    }
    const current = JSON.stringify({
      elements: state.canvasElements || [],
      selectedId: state.selectedElementId
    });
    history.redoStack.push({ action: 'Undo', data: current });

    const entry = history.undoStack.pop();
    const restored = JSON.parse(entry.data);
    state.canvasElements = Array.isArray(restored) ? restored : (restored.elements || []);
    state.selectedElementId = restored.selectedId || null;
    state.isAllSelected = false;
    state.template = 'custom_builder';

    if (state.selectedElementId && !state.canvasElements.some(e => e.id === state.selectedElementId)) {
      state.selectedElementId = state.canvasElements.length > 0 ? state.canvasElements[0].id : null;
    }

    syncInspectorUI();
    updateFloatingToolbar();
    renderLayersList();
    updateUndoRedoUI();
    updateSelectAllButtonUI();
    if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    showToast(`Undo: ${entry.action}`);
  }

  function redo() {
    if (history.redoStack.length === 0) {
      showToast('Nothing to redo');
      return;
    }
    const current = JSON.stringify({
      elements: state.canvasElements || [],
      selectedId: state.selectedElementId
    });
    const entry = history.redoStack.pop();
    history.undoStack.push({ action: 'Redo', data: current });

    const restored = JSON.parse(entry.data);
    state.canvasElements = Array.isArray(restored) ? restored : (restored.elements || []);
    state.selectedElementId = restored.selectedId || null;
    state.isAllSelected = false;
    state.template = 'custom_builder';

    syncInspectorUI();
    updateFloatingToolbar();
    renderLayersList();
    updateUndoRedoUI();
    updateSelectAllButtonUI();
    if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    showToast(`Redo: ${entry.action}`);
  }

  function updateUndoRedoUI() {
    const btnUndo = document.getElementById('btn-stage-undo');
    const btnRedo = document.getElementById('btn-stage-redo');
    if (btnUndo) btnUndo.disabled = history.undoStack.length === 0;
    if (btnRedo) btnRedo.disabled = history.redoStack.length === 0;
  }

  function updateSelectAllButtonUI() {
    const btnSelectAll = document.getElementById('btn-stage-select-all');
    const btnDelete = document.getElementById('btn-stage-delete');
    if (btnSelectAll) {
      if (state.isAllSelected && state.canvasElements && state.canvasElements.length > 0) {
        btnSelectAll.className = 'px-2 py-0.5 rounded bg-indigo-600 text-white border border-indigo-400 font-semibold shadow-md shadow-indigo-500/30 text-[11px] transition flex items-center gap-1';
        btnSelectAll.innerHTML = `<i data-lucide="check-square" class="w-3.5 h-3.5 text-white"></i><span>All (${state.canvasElements.length})</span>`;
      } else {
        btnSelectAll.className = 'px-2 py-0.5 rounded hover:bg-indigo-950/60 hover:border-indigo-500/40 border border-transparent text-gray-300 hover:text-white text-[11px] font-medium transition flex items-center gap-1';
        btnSelectAll.innerHTML = `<i data-lucide="check-square" class="w-3.5 h-3.5 text-indigo-400"></i><span>Select All</span>`;
      }
    }
    if (btnDelete) {
      if (state.isAllSelected && state.canvasElements && state.canvasElements.length > 0) {
        btnDelete.className = 'px-2 py-0.5 rounded bg-red-600 hover:bg-red-500 text-white border border-red-400 font-semibold shadow-md shadow-red-500/30 text-[11px] transition flex items-center gap-1';
        btnDelete.innerHTML = `<i data-lucide="trash-2" class="w-3.5 h-3.5 text-white"></i><span>Delete All (${state.canvasElements.length})</span>`;
      } else if (state.selectedElementId) {
        btnDelete.className = 'px-2 py-0.5 rounded hover:bg-red-950/60 hover:border-red-500/40 border border-transparent text-red-400 hover:text-red-300 text-[11px] font-medium transition flex items-center gap-1';
        btnDelete.innerHTML = `<i data-lucide="trash-2" class="w-3.5 h-3.5 text-red-400"></i><span>Delete</span>`;
      } else {
        btnDelete.className = 'px-2 py-0.5 rounded hover:bg-red-950/60 hover:border-red-500/40 border border-transparent text-gray-400 hover:text-red-300 text-[11px] font-medium transition flex items-center gap-1';
        btnDelete.innerHTML = `<i data-lucide="trash-2" class="w-3.5 h-3.5 text-red-400"></i><span>Delete</span>`;
      }
    }
    if (window.lucide) lucide.createIcons();
  }

  function selectAllElements() {
    // 1. Ensure custom builder mode is active
    state.template = 'custom_builder';
    document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));

    // 2. Ensure Canvas Studio tab is active in the left sidebar
    const bTab = document.querySelector('[data-tab="tab-builder"]');
    if (bTab && !bTab.classList.contains('active')) {
      document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active', 'text-white');
        b.classList.add('text-gray-400');
      });
      bTab.classList.add('active', 'text-white');
      bTab.classList.remove('text-gray-400');
      document.querySelectorAll('.tab-content').forEach(c => c.classList.add('hidden'));
      const targetTab = document.getElementById('tab-builder');
      if (targetTab) targetTab.classList.remove('hidden');
    }

    if (!state.canvasElements || state.canvasElements.length === 0) {
      showToast('Canvas is empty. Click + Add Elements to create designs!');
      return;
    }

    state.isAllSelected = true;
    state.selectedElementId = state.canvasElements[0]?.id || null;

    syncInspectorUI();
    updateFloatingToolbar();
    renderLayersList();
    updateSelectAllButtonUI();
    if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    showToast(`✓ Selected all (${state.canvasElements.length}) elements • Press Delete to remove`);
  }

  function deleteSelected() {
    if (state.isAllSelected) {
      deleteAllElements();
      return;
    }
    if (state.selectedElementId) {
      deleteElement(state.selectedElementId);
    } else if (state.canvasElements && state.canvasElements.length > 0) {
      deleteElement(state.canvasElements[state.canvasElements.length - 1].id);
    } else {
      showToast('No element selected to delete');
    }
  }

  function deleteAllElements() {
    if (!state.canvasElements || state.canvasElements.length === 0) {
      showToast('Canvas is already empty');
      return;
    }
    pushHistory('Delete All');
    const count = state.canvasElements.length;
    state.canvasElements = [];
    state.selectedElementId = null;
    state.isAllSelected = false;
    state.template = 'custom_builder';
    syncInspectorUI();
    updateFloatingToolbar();
    renderLayersList();
    updateSelectAllButtonUI();
    if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    showToast(`Deleted all (${count}) elements • Press Ctrl+Z to Undo`);
  }

  window.selectAllElements = selectAllElements;
  window.deleteAllElements = deleteAllElements;
  window.deleteSelected = deleteSelected;
  window.undo = undo;
  window.redo = redo;
  window.syncInspectorUI = syncInspectorUI;
  window.updateFloatingToolbar = updateFloatingToolbar;
  window.openOnCanvasTextEditor = openOnCanvasTextEditor;
  window.closeOnCanvasTextEditor = closeOnCanvasTextEditor;
  window.renderSavedCanvasDesigns = renderSavedCanvasDesigns;
  window.__debug_state = state;

  // Copy, Paste, Duplicate & Layer Order Actions
  function copyElement(id) {
    const el = state.canvasElements.find(item => item.id === id);
    if (!el) return;
    clipboardElement = JSON.parse(JSON.stringify(el));
    showToast(`Copied "${el.name}" (Ctrl+C)`);
  }

  function pasteElement(targetX = null, targetY = null) {
    if (!clipboardElement) {
      showToast('Nothing copied yet! Select an element and press Copy.');
      return;
    }
    pushHistory('Paste Element');
    const pasted = JSON.parse(JSON.stringify(clipboardElement));
    pasted.id = 'el_' + Date.now();
    pasted.name = `${pasted.name} (Copy)`;

    if (targetX !== null && targetY !== null) {
      pasted.x = Math.max(20, Math.min(1920 - pasted.width - 20, Math.round(targetX - pasted.width / 2)));
      pasted.y = Math.max(20, Math.min(1080 - pasted.height - 20, Math.round(targetY - pasted.height / 2)));
    } else {
      pasted.x = Math.min(1920 - pasted.width - 20, pasted.x + 24);
      pasted.y = Math.min(1080 - pasted.height - 20, pasted.y + 24);
    }

    state.canvasElements.push(pasted);
    state.selectedElementId = pasted.id;
    state.isAllSelected = false;
    state.template = 'custom_builder';
    syncInspectorUI();
    renderLayersList();
    updateFloatingToolbar();
    if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    showToast(`Pasted "${pasted.name}"`);
  }

  function duplicateElement(id) {
    const el = state.canvasElements.find(item => item.id === id);
    if (!el) return;
    pushHistory('Duplicate Element');
    const dup = JSON.parse(JSON.stringify(el));
    dup.id = 'el_' + Date.now();
    dup.name = `${el.name} (Copy)`;
    dup.x = Math.min(1920 - dup.width - 20, dup.x + 24);
    dup.y = Math.min(1080 - dup.height - 20, dup.y + 24);
    state.canvasElements.push(dup);
    state.selectedElementId = dup.id;
    state.isAllSelected = false;
    state.template = 'custom_builder';
    syncInspectorUI();
    renderLayersList();
    updateFloatingToolbar();
    if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    showToast(`Duplicated "${dup.name}"`);
  }

  function deleteElement(id) {
    pushHistory('Delete Element');
    state.canvasElements = state.canvasElements.filter(el => el.id !== id);
    state.isAllSelected = false;
    if (state.selectedElementId === id) {
      state.selectedElementId = state.canvasElements[state.canvasElements.length - 1]?.id || null;
    }
    syncInspectorUI();
    renderLayersList();
    updateFloatingToolbar();
    if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    showToast('Element deleted (Ctrl+Z to Undo)');
  }

  function bringForward(id) {
    const idx = state.canvasElements.findIndex(e => e.id === id);
    if (idx === -1 || idx === state.canvasElements.length - 1) return;
    pushHistory('Bring Forward');
    const temp = state.canvasElements[idx];
    state.canvasElements[idx] = state.canvasElements[idx + 1];
    state.canvasElements[idx + 1] = temp;
    renderLayersList();
    if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    showToast('Moved forward');
  }

  function sendBackward(id) {
    const idx = state.canvasElements.findIndex(e => e.id === id);
    if (idx <= 0) return;
    pushHistory('Send Backward');
    const temp = state.canvasElements[idx];
    state.canvasElements[idx] = state.canvasElements[idx - 1];
    state.canvasElements[idx - 1] = temp;
    renderLayersList();
    if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    showToast('Moved backward');
  }

  function bringToFront(id) {
    const idx = state.canvasElements.findIndex(e => e.id === id);
    if (idx === -1 || idx === state.canvasElements.length - 1) return;
    pushHistory('Bring to Front');
    const [el] = state.canvasElements.splice(idx, 1);
    state.canvasElements.push(el);
    renderLayersList();
    if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    showToast('Brought to front');
  }

  function sendToBack(id) {
    const idx = state.canvasElements.findIndex(e => e.id === id);
    if (idx <= 0) return;
    pushHistory('Send to Back');
    const [el] = state.canvasElements.splice(idx, 1);
    state.canvasElements.unshift(el);
    renderLayersList();
    if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    showToast('Sent to back');
  }

  // Draw Shape Mode UI Toggle
  function updateDrawModeUI() {
    const btn = document.getElementById('btn-toggle-draw-mode');
    const lbl = document.getElementById('btn-draw-mode-label');
    const hint = document.getElementById('canvas-floating-hint');

    if (btn && lbl) {
      if (state.isDrawMode) {
        btn.className = 'px-2 py-0.5 rounded text-[11px] font-semibold border border-indigo-400 bg-indigo-600 text-white shadow-md shadow-indigo-600/40 transition flex items-center gap-1 animate-pulse';
        lbl.textContent = 'Draw Active';
        canvas.style.cursor = 'crosshair';
        if (hint) {
          hint.innerHTML = `<span class="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span><span><strong>Draw Shape Mode:</strong> Click &amp; drag on the preview canvas to draw your ${state.selectedDrawShape.toUpperCase()} shape!</span>`;
          hint.classList.remove('hidden');
        }
      } else {
        btn.className = 'px-2 py-0.5 rounded text-[11px] font-semibold border border-indigo-500/50 bg-dark-800 hover:bg-indigo-900/40 text-indigo-300 transition flex items-center gap-1';
        lbl.textContent = 'Draw Mode';
        canvas.style.cursor = 'default';
        if (hint) {
          hint.innerHTML = `<span class="w-2 h-2 rounded-full bg-indigo-500 animate-ping"></span><span><strong>Canvas Studio:</strong> Click &amp; drag elements • Pull corner handles to resize • Right-click for options</span>`;
        }
      }
    }
  }

  const btnToggleDraw = document.getElementById('btn-toggle-draw-mode');
  if (btnToggleDraw) {
    btnToggleDraw.addEventListener('click', () => {
      state.isDrawMode = !state.isDrawMode;
      updateDrawModeUI();
    });
  }

  // Canva Shape Palette Buttons: 1-Click insert or select for drawing
  document.querySelectorAll('.shape-palette-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const shapeType = btn.dataset.shape;
      state.selectedDrawShape = shapeType;

      document.querySelectorAll('.shape-palette-btn').forEach(b => {
        b.classList.remove('border-indigo-500', 'bg-indigo-950/70', 'text-white');
      });
      btn.classList.add('border-indigo-500', 'bg-indigo-950/70', 'text-white');

      if (state.isDrawMode) {
        showToast(`Draw Mode: Drag on canvas to draw a ${shapeType.toUpperCase()}`);
        updateDrawModeUI();
      } else {
        // Immediate 1-click Canva shape insertion
        const shapeNames = {
          rounded: 'Rounded Box',
          sharp: 'Rectangle Box',
          circle: 'Circle Shape',
          pill: 'Pill Capsule',
          star: '5-Star Shape',
          triangle: 'Triangle',
          diamond: 'Diamond Shape',
          hexagon: 'Hexagon Shape',
          arrow: 'Pointer Arrow',
          line: 'Divider Line'
        };

        const defaultW = shapeType === 'line' ? 360 : (shapeType === 'circle' ? 120 : (shapeType === 'arrow' ? 220 : 200));
        const defaultH = shapeType === 'line' ? 4 : (shapeType === 'circle' ? 120 : (shapeType === 'pill' ? 60 : 120));

        const newShape = {
          id: 'el_' + Date.now(),
          name: shapeNames[shapeType] || 'Custom Shape',
          type: 'shape',
          shape: shapeType,
          x: 240,
          y: 860,
          width: defaultW,
          height: defaultH,
          fillColor: shapeType === 'line' ? '#6366f1' : '#0b0f19',
          fillOpacity: 0.95,
          borderStyle: shapeType === 'line' ? 'none' : 'solid',
          borderColor: '#6366f1',
          borderWidth: shapeType === 'line' ? 0 : 2,
          cornerRadius: shapeType === 'pill' ? 30 : 14,
          glow: 0,
          visible: true
        };

        state.canvasElements.push(newShape);
        state.selectedElementId = newShape.id;
        state.template = 'custom_builder';
        syncInspectorUI();
        renderLayersList();
        updateFloatingToolbar();
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
        showToast(`Added ${newShape.name}`);
      }
    });
  });

  // Canvas Mouse Down: Select element, start drag/resize, or start drawing shape
  canvas.addEventListener('mousedown', e => {
    const { x, y } = getCanvasCoords(e);

    // If on a preset template and clicked avatar area, trigger slot 1 photo picker!
    if (state.template !== 'custom_builder') {
      const avX = state.dimensions ? state.dimensions.x : 100;
      const avY = state.dimensions ? state.dimensions.y : 860;
      if (x >= avX - 15 && x <= avX + 150 && y >= avY - 15 && y <= avY + 150) {
        const slot1Input = document.getElementById('input-file-slot-1');
        if (slot1Input) {
          slot1Input.click();
          showToast('Choose photo for lower-third avatar...');
          return;
        }
      }
      state.template = 'custom_builder';
      const bTab = document.querySelector('[data-tab="tab-builder"]');
      if (bTab) bTab.click();
    }

    // Context menu dismiss
    const ctxMenu = document.getElementById('canvas-context-menu');
    if (ctxMenu) ctxMenu.classList.add('hidden');

    // 0. If in Draw Shape mode, start drawing new shape
    if (state.isDrawMode) {
      state.drawingActive = true;
      dragStart = { x, y };
      state.drawingRect = { x, y, width: 0, height: 0 };
      return;
    }

    // 1. If currently in All Selected mode, check if click hits ANY element
    if (state.isAllSelected && state.canvasElements && state.canvasElements.length > 0) {
      let hitAny = false;
      for (let i = state.canvasElements.length - 1; i >= 0; i--) {
        const el = state.canvasElements[i];
        if (el.visible === false) continue;
        if (isPointInsideElement(el, x, y)) {
          hitAny = true;
          break;
        }
      }

      if (hitAny) {
        preDragSnapshot = JSON.stringify({
          elements: state.canvasElements || [],
          selectedId: state.selectedElementId
        });
        isDragging = true;
        dragAction = 'move_group';
        dragStart = {
          x, y,
          allPositions: state.canvasElements.map(e => ({ id: e.id, x: e.x, y: e.y }))
        };
        return;
      }
    }

    // 2. Check if clicking on an 8-point resize handle or top rotation handle
    if (state.selectedElementId && !state.isAllSelected) {
      const selectedEl = state.canvasElements.find(el => el.id === state.selectedElementId);
      if (selectedEl && selectedEl.visible !== false) {
        const handle = hitTestHandle(selectedEl, x, y);
        if (handle) {
          preDragSnapshot = JSON.stringify({
            elements: state.canvasElements || [],
            selectedId: state.selectedElementId
          });
          isDragging = true;
          if (handle === 'rot') {
            dragAction = 'rotate';
            dragStart = {
              x, y,
              cx: selectedEl.x + selectedEl.width / 2,
              cy: selectedEl.y + selectedEl.height / 2,
              startRot: selectedEl.rotation || 0
            };
          } else {
            dragAction = 'resize_' + handle;
            dragStart = {
              x, y,
              elX: selectedEl.x,
              elY: selectedEl.y,
              elW: selectedEl.width,
              elH: selectedEl.height
            };
          }
          return;
        }
      }
    }

    // 3. Check if clicking on an element (from top layer to bottom, rotation-aware)
    let hitEl = null;
    for (let i = state.canvasElements.length - 1; i >= 0; i--) {
      const el = state.canvasElements[i];
      if (el.visible === false) continue;
      if (isPointInsideElement(el, x, y)) {
        hitEl = el;
        break;
      }
    }

    if (hitEl) {
      preDragSnapshot = JSON.stringify({
        elements: state.canvasElements || [],
        selectedId: state.selectedElementId
      });

      // 1-Click Upload: If clicking on an empty image element placeholder, immediately trigger file picker!
      if (hitEl.type === 'image' && !elementHasImage(hitEl)) {
        state.selectedElementId = hitEl.id;
        state.isAllSelected = false;
        syncInspectorUI();
        renderLayersList();
        updateFloatingToolbar();
        updateSelectAllButtonUI();
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
        openImageFilePickerForElement(hitEl);
        return;
      }

      // Canva / Figma Alt+Drag Instant Duplicate!
      if (e.altKey) {
        pushHistory('Alt+Drag Duplicate');
        const dup = JSON.parse(JSON.stringify(hitEl));
        dup.id = 'el_' + Date.now();
        dup.name = `${hitEl.name} (Copy)`;
        state.canvasElements.push(dup);
        state.selectedElementId = dup.id;
        state.isAllSelected = false;
        hitEl = dup;
        showToast(`Duplicated & Dragging "${dup.name}"`);
      } else {
        state.selectedElementId = hitEl.id;
        state.isAllSelected = false;
      }

      isDragging = true;
      dragAction = 'move';
      dragStart = {
        x, y,
        elX: hitEl.x,
        elY: hitEl.y,
        elW: hitEl.width,
        elH: hitEl.height
      };
      syncInspectorUI();
      renderLayersList();
      updateFloatingToolbar();
      updateSelectAllButtonUI();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    } else {
      // Clicked on empty space: deselect
      state.selectedElementId = null;
      state.isAllSelected = false;
      syncInspectorUI();
      renderLayersList();
      updateFloatingToolbar();
      updateSelectAllButtonUI();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    }
  });

  // Canvas Mouse Move: Drag move, handle resize, draw preview, and cursor updates
  window.addEventListener('mousemove', e => {
    if (state.template !== 'custom_builder') return;
    const { x, y } = getCanvasCoords(e);

    // Live shape drawing
    if (state.isDrawMode && state.drawingActive) {
      const rx = Math.min(dragStart.x, x);
      const ry = Math.min(dragStart.y, y);
      const rw = Math.abs(x - dragStart.x);
      const rh = Math.abs(y - dragStart.y);
      state.drawingRect = { x: rx, y: ry, width: rw, height: rh };
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      return;
    }

    if (isDragging && dragAction === 'move_group' && dragStart.allPositions) {
      const dx = Math.round(x - dragStart.x);
      const dy = Math.round(y - dragStart.y);
      for (const item of dragStart.allPositions) {
        const el = state.canvasElements.find(e => e.id === item.id);
        if (el) {
          el.x = item.x + dx;
          el.y = item.y + dy;
        }
      }
      syncInspectorUI();
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      return;
    }

    if (isDragging && state.selectedElementId) {
      const el = state.canvasElements.find(item => item.id === state.selectedElementId);
      if (!el) return;

      const dx = x - dragStart.x;
      const dy = y - dragStart.y;

      if (dragAction === 'rotate') {
        const cx = dragStart.cx;
        const cy = dragStart.cy;
        let angle = (Math.atan2(y - cy, x - cx) * 180 / Math.PI) + 90;
        while (angle > 180) angle -= 360;
        while (angle <= -180) angle += 360;

        if (e.shiftKey) {
          angle = Math.round(angle / 15) * 15;
        } else {
          for (const snap of [0, 45, 90, 135, 180, -45, -90, -135]) {
            if (Math.abs(angle - snap) <= 2) {
              angle = snap;
              break;
            }
          }
          angle = Math.round(angle);
        }

        el.rotation = angle;
        const rotSlider = document.getElementById('prop-rotation');
        const rotNum = document.getElementById('prop-rot-num');
        if (rotSlider) rotSlider.value = angle;
        if (rotNum) rotNum.value = angle;

        updateFloatingToolbar();
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
        return;
      } else if (dragAction === 'move') {
        el.x = Math.round(dragStart.elX + dx);
        el.y = Math.round(dragStart.elY + dy);
      } else if (dragAction === 'resize_se') {
        el.width = Math.max(20, Math.round(dragStart.elW + dx));
        el.height = Math.max(16, Math.round(dragStart.elH + dy));
      } else if (dragAction === 'resize_sw') {
        const newW = Math.max(20, Math.round(dragStart.elW - dx));
        el.x = Math.round(dragStart.elX + (dragStart.elW - newW));
        el.width = newW;
        el.height = Math.max(16, Math.round(dragStart.elH + dy));
      } else if (dragAction === 'resize_ne') {
        el.width = Math.max(20, Math.round(dragStart.elW + dx));
        const newH = Math.max(16, Math.round(dragStart.elH - dy));
        el.y = Math.round(dragStart.elY + (dragStart.elH - newH));
        el.height = newH;
      } else if (dragAction === 'resize_nw') {
        const newW = Math.max(20, Math.round(dragStart.elW - dx));
        const newH = Math.max(16, Math.round(dragStart.elH - dy));
        el.x = Math.round(dragStart.elX + (dragStart.elW - newW));
        el.y = Math.round(dragStart.elY + (dragStart.elH - newH));
        el.width = newW;
        el.height = newH;
      } else if (dragAction === 'resize_e') {
        el.width = Math.max(20, Math.round(dragStart.elW + dx));
      } else if (dragAction === 'resize_s') {
        el.height = Math.max(16, Math.round(dragStart.elH + dy));
      } else if (dragAction === 'resize_w') {
        const newW = Math.max(20, Math.round(dragStart.elW - dx));
        el.x = Math.round(dragStart.elX + (dragStart.elW - newW));
        el.width = newW;
      } else if (dragAction === 'resize_n') {
        const newH = Math.max(16, Math.round(dragStart.elH - dy));
        el.y = Math.round(dragStart.elY + (dragStart.elH - newH));
        el.height = newH;
      }

      // Update numerical fields in inspector
      const px = document.getElementById('prop-pos-x');
      const py = document.getElementById('prop-pos-y');
      const pw = document.getElementById('prop-width');
      const ph = document.getElementById('prop-height');
      if (px) px.value = el.x;
      if (py) py.value = el.y;
      if (pw) pw.value = el.width;
      if (ph) ph.value = el.height;

      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    } else {
      if (state.isDrawMode) {
        canvas.style.cursor = 'crosshair';
        return;
      }

      // Dynamic cursor logic
      if (state.selectedElementId) {
        const selectedEl = state.canvasElements.find(item => item.id === state.selectedElementId);
        if (selectedEl && selectedEl.visible !== false) {
          const handle = hitTestHandle(selectedEl, x, y);
          if (handle) {
            if (handle === 'rot') {
              canvas.style.cursor = 'grab';
              return;
            }
            const cursorMap = {
              nw: 'nwse-resize', se: 'nwse-resize',
              ne: 'nesw-resize', sw: 'nesw-resize',
              n: 'ns-resize', s: 'ns-resize',
              e: 'ew-resize', w: 'ew-resize'
            };
            canvas.style.cursor = cursorMap[handle] || 'pointer';
            return;
          }
          if (isPointInsideElement(selectedEl, x, y)) {
            canvas.style.cursor = 'move';
            return;
          }
        }
      }

      let hovering = false;
      for (let i = state.canvasElements.length - 1; i >= 0; i--) {
        const el = state.canvasElements[i];
        if (el.visible === false) continue;
        if (isPointInsideElement(el, x, y)) {
          hovering = true;
          break;
        }
      }
      canvas.style.cursor = hovering ? 'pointer' : 'default';
    }
  });

  // Canvas Mouse Up: Complete drag or finish drawing shape
  window.addEventListener('mouseup', () => {
    if (state.isDrawMode && state.drawingActive) {
      state.drawingActive = false;
      if (state.drawingRect) {
        let { x: rx, y: ry, width: rw, height: rh } = state.drawingRect;

        // If clicked without dragging, assign friendly default dimensions
        if (rw < 15 && rh < 15) {
          const s = state.selectedDrawShape;
          rw = s === 'line' ? 360 : (s === 'circle' ? 120 : (s === 'arrow' ? 220 : 200));
          rh = s === 'line' ? 4 : (s === 'circle' ? 120 : (s === 'pill' ? 60 : 120));
          rx = Math.max(20, Math.round(dragStart.x - rw / 2));
          ry = Math.max(20, Math.round(dragStart.y - rh / 2));
        }

        const shapeNames = {
          rounded: 'Rounded Box',
          sharp: 'Rectangle Box',
          circle: 'Circle Shape',
          pill: 'Pill Capsule',
          star: '5-Star Shape',
          triangle: 'Triangle',
          diamond: 'Diamond Shape',
          hexagon: 'Hexagon Shape',
          arrow: 'Pointer Arrow',
          line: 'Divider Line'
        };

        const shapeType = state.selectedDrawShape || 'rounded';
        const newShape = {
          id: 'el_' + Date.now(),
          name: shapeNames[shapeType] || 'Drawn Shape',
          type: 'shape',
          shape: shapeType,
          x: Math.round(rx),
          y: Math.round(ry),
          width: Math.max(20, Math.round(rw)),
          height: Math.max(10, Math.round(rh)),
          fillColor: shapeType === 'line' ? '#6366f1' : '#0b0f19',
          fillOpacity: 0.95,
          borderStyle: shapeType === 'line' ? 'none' : 'solid',
          borderColor: '#6366f1',
          borderWidth: shapeType === 'line' ? 0 : 2,
          cornerRadius: shapeType === 'pill' ? 30 : 14,
          glow: 0,
          visible: true
        };

        pushHistory(`Draw ${newShape.name}`);
        state.canvasElements.push(newShape);
        state.selectedElementId = newShape.id;
        state.isAllSelected = false;
        state.drawingRect = null;
        state.isDrawMode = false;
        updateDrawModeUI();
        syncInspectorUI();
        renderLayersList();
        updateFloatingToolbar();
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
        showToast(`Drawn ${newShape.name}!`);
      }
      return;
    }

    if (isDragging) {
      const wasRotate = dragAction === 'rotate';
      isDragging = false;
      dragAction = null;
      renderLayersList();
      updateFloatingToolbar();
      const currentSnap = JSON.stringify({
        elements: state.canvasElements || [],
        selectedId: state.selectedElementId
      });
      if (preDragSnapshot && currentSnap !== preDragSnapshot) {
        history.undoStack.push({ action: wasRotate ? 'Rotate Element' : 'Move / Resize', data: preDragSnapshot });
        if (history.undoStack.length > history.max) history.undoStack.shift();
        history.redoStack.length = 0;
        updateUndoRedoUI();
      }
      preDragSnapshot = null;
    }
  });

  // Canvas Double-Click: 1-Click Replace/Upload Image for clicked image element
  canvas.addEventListener('dblclick', e => {
    const { x, y } = getCanvasCoords(e);
    for (let i = state.canvasElements.length - 1; i >= 0; i--) {
      const el = state.canvasElements[i];
      if (el.visible === false) continue;
      if (x >= el.x && x <= el.x + el.width && y >= el.y && y <= el.y + el.height) {
        if (el.type === 'image') {
          openImageFilePickerForElement(el);
          return;
        }
        break;
      }
    }
  });

  // Right-Click Context Menu (Canva Style)
  canvas.addEventListener('contextmenu', e => {
    if (state.template !== 'custom_builder') return;
    e.preventDefault();

    const { x, y } = getCanvasCoords(e);
    lastRightClickPos = { x, y };

    let hitEl = null;
    for (let i = state.canvasElements.length - 1; i >= 0; i--) {
      const el = state.canvasElements[i];
      if (el.visible === false) continue;
      if (x >= el.x && x <= el.x + el.width && y >= el.y && y <= el.y + el.height) {
        hitEl = el;
        break;
      }
    }

    if (hitEl) {
      state.selectedElementId = hitEl.id;
      syncInspectorUI();
      renderLayersList();
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    }

    const ctxMenu = document.getElementById('canvas-context-menu');
    if (!ctxMenu) return;

    ctxMenu.style.left = `${e.clientX + 2}px`;
    ctxMenu.style.top = `${e.clientY + 2}px`;
    ctxMenu.classList.remove('hidden');

    // Update enable/disable states in context menu
    const hasSelection = !!state.selectedElementId;
    const hasClipboard = !!clipboardElement;
    document.getElementById('ctx-btn-copy').disabled = !hasSelection;
    document.getElementById('ctx-btn-dup').disabled = !hasSelection;
    document.getElementById('ctx-btn-del').disabled = !hasSelection;
    document.getElementById('ctx-btn-front').disabled = !hasSelection;
    document.getElementById('ctx-btn-forward').disabled = !hasSelection;
    document.getElementById('ctx-btn-backward').disabled = !hasSelection;
    document.getElementById('ctx-btn-back').disabled = !hasSelection;
    document.getElementById('ctx-btn-paste').disabled = !hasClipboard;
  });

  window.addEventListener('click', e => {
    const ctxMenu = document.getElementById('canvas-context-menu');
    if (ctxMenu && !ctxMenu.contains(e.target)) {
      ctxMenu.classList.add('hidden');
    }
  });

  // Stage Top Toolbar History & Selection Buttons
  document.getElementById('btn-stage-undo')?.addEventListener('click', undo);
  document.getElementById('btn-stage-redo')?.addEventListener('click', redo);
  document.getElementById('btn-stage-select-all')?.addEventListener('click', selectAllElements);
  document.getElementById('btn-stage-delete')?.addEventListener('click', deleteSelected);

  // Context Menu Button Event Listeners
  document.getElementById('ctx-btn-undo')?.addEventListener('click', () => {
    document.getElementById('canvas-context-menu').classList.add('hidden');
    undo();
  });
  document.getElementById('ctx-btn-redo')?.addEventListener('click', () => {
    document.getElementById('canvas-context-menu').classList.add('hidden');
    redo();
  });
  document.getElementById('ctx-btn-select-all')?.addEventListener('click', () => {
    document.getElementById('canvas-context-menu').classList.add('hidden');
    selectAllElements();
  });
  document.getElementById('ctx-btn-copy')?.addEventListener('click', () => {
    if (state.selectedElementId) copyElement(state.selectedElementId);
    document.getElementById('canvas-context-menu').classList.add('hidden');
  });
  document.getElementById('ctx-btn-paste')?.addEventListener('click', () => {
    pasteElement(lastRightClickPos.x, lastRightClickPos.y);
    document.getElementById('canvas-context-menu').classList.add('hidden');
  });
  document.getElementById('ctx-btn-dup')?.addEventListener('click', () => {
    if (state.selectedElementId) duplicateElement(state.selectedElementId);
    document.getElementById('canvas-context-menu').classList.add('hidden');
  });
  document.getElementById('ctx-btn-forward')?.addEventListener('click', () => {
    if (state.selectedElementId) bringForward(state.selectedElementId);
    document.getElementById('canvas-context-menu').classList.add('hidden');
  });
  document.getElementById('ctx-btn-backward')?.addEventListener('click', () => {
    if (state.selectedElementId) sendBackward(state.selectedElementId);
    document.getElementById('canvas-context-menu').classList.add('hidden');
  });
  document.getElementById('ctx-btn-front')?.addEventListener('click', () => {
    if (state.selectedElementId) bringToFront(state.selectedElementId);
    document.getElementById('canvas-context-menu').classList.add('hidden');
  });
  document.getElementById('ctx-btn-back')?.addEventListener('click', () => {
    if (state.selectedElementId) sendToBack(state.selectedElementId);
    document.getElementById('canvas-context-menu').classList.add('hidden');
  });
  document.getElementById('ctx-btn-del')?.addEventListener('click', () => {
    deleteSelected();
    document.getElementById('canvas-context-menu').classList.add('hidden');
  });
  document.getElementById('ctx-btn-del-all')?.addEventListener('click', () => {
    deleteAllElements();
    document.getElementById('canvas-context-menu').classList.add('hidden');
  });

  // Floating Toolbar Buttons
  document.getElementById('float-btn-copy')?.addEventListener('click', () => {
    if (state.selectedElementId) copyElement(state.selectedElementId);
  });
  document.getElementById('float-btn-paste')?.addEventListener('click', () => {
    pasteElement();
  });
  document.getElementById('float-btn-dup')?.addEventListener('click', () => {
    if (state.selectedElementId) duplicateElement(state.selectedElementId);
  });
  document.getElementById('float-btn-select-all')?.addEventListener('click', () => {
    selectAllElements();
  });
  document.getElementById('float-btn-up')?.addEventListener('click', () => {
    if (state.selectedElementId) bringForward(state.selectedElementId);
  });
  document.getElementById('float-btn-down')?.addEventListener('click', () => {
    if (state.selectedElementId) sendBackward(state.selectedElementId);
  });
  document.getElementById('float-btn-del')?.addEventListener('click', () => {
    deleteSelected();
  });

  // Inspector Header Buttons
  document.getElementById('btn-inspector-copy')?.addEventListener('click', () => {
    if (state.selectedElementId) copyElement(state.selectedElementId);
  });
  document.getElementById('btn-inspector-paste')?.addEventListener('click', () => {
    pasteElement();
  });
  document.getElementById('btn-inspector-dup')?.addEventListener('click', () => {
    if (state.selectedElementId) duplicateElement(state.selectedElementId);
  });
  document.getElementById('btn-inspector-del')?.addEventListener('click', () => {
    deleteSelected();
  });

  // Keyboard Shortcuts (Undo Ctrl+Z, Redo Ctrl+Y, Select All Ctrl+A, Copy Ctrl+C, Paste Ctrl+V, Duplicate Ctrl+D, Delete, Layer Brackets)
  window.addEventListener('keydown', e => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;

    const isCtrl = e.ctrlKey || e.metaKey;

    // Global Undo / Redo
    if (isCtrl && e.key.toLowerCase() === 'z') {
      e.preventDefault();
      if (e.shiftKey) {
        redo();
      } else {
        undo();
      }
      return;
    }
    if (isCtrl && e.key.toLowerCase() === 'y') {
      e.preventDefault();
      redo();
      return;
    }

    // Global Select All (Ctrl+A / Cmd+A)
    if (isCtrl && e.key.toLowerCase() === 'a') {
      e.preventDefault();
      selectAllElements();
      return;
    }

    // Global Paste (Ctrl+V)
    if (isCtrl && e.key.toLowerCase() === 'v') {
      e.preventDefault();
      pasteElement();
      return;
    }

    // Delete / Backspace (Works for All Selected or Single Selected)
    if (e.key === 'Delete' || e.key === 'Backspace') {
      if (state.isAllSelected || state.selectedElementId) {
        e.preventDefault();
        deleteSelected();
        return;
      }
    }

    // Custom Builder shortcuts
    if (state.template !== 'custom_builder') return;

    if (isCtrl && e.key.toLowerCase() === 'c') {
      if (state.selectedElementId) {
        e.preventDefault();
        copyElement(state.selectedElementId);
      }
    } else if (isCtrl && e.key.toLowerCase() === 'd') {
      if (state.selectedElementId) {
        e.preventDefault();
        duplicateElement(state.selectedElementId);
      }
    } else if (isCtrl && e.key === ']') {
      if (state.selectedElementId) {
        e.preventDefault();
        bringForward(state.selectedElementId);
      }
    } else if (isCtrl && e.key === '[') {
      if (state.selectedElementId) {
        e.preventDefault();
        sendBackward(state.selectedElementId);
      }
    } else if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      if (state.isAllSelected && state.canvasElements) {
        e.preventDefault();
        const step = e.shiftKey ? 10 : 2;
        const dx = e.key === 'ArrowLeft' ? -step : (e.key === 'ArrowRight' ? step : 0);
        const dy = e.key === 'ArrowUp' ? -step : (e.key === 'ArrowDown' ? step : 0);
        state.canvasElements.forEach(el => {
          el.x += dx;
          el.y += dy;
        });
        syncInspectorUI();
        updateFloatingToolbar();
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      } else if (state.selectedElementId) {
        const el = state.canvasElements.find(item => item.id === state.selectedElementId);
        if (!el) return;
        e.preventDefault();
        const step = e.shiftKey ? 10 : 2;
        if (e.key === 'ArrowUp') el.y -= step;
        if (e.key === 'ArrowDown') el.y += step;
        if (e.key === 'ArrowLeft') el.x -= step;
        if (e.key === 'ArrowRight') el.x += step;
        syncInspectorUI();
        updateFloatingToolbar();
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      }
    }
  });

  // Selected Element Inspector Two-Way Data Binding
  function syncInspectorUI() {
    const titleEl = document.getElementById('inspector-element-title');
    const posX = document.getElementById('prop-pos-x');
    const posY = document.getElementById('prop-pos-y');
    const posW = document.getElementById('prop-width');
    const posH = document.getElementById('prop-height');
    const rotSlider = document.getElementById('prop-rotation');
    const rotNum = document.getElementById('prop-rot-num');
    const dynContainer = document.getElementById('inspector-dynamic-props');
    const btnCopy = document.getElementById('btn-inspector-copy');
    const btnPaste = document.getElementById('btn-inspector-paste');
    const btnDup = document.getElementById('btn-inspector-dup');
    const btnDel = document.getElementById('btn-inspector-del');

    if (btnPaste) btnPaste.disabled = !clipboardElement;

    if (state.isAllSelected && state.canvasElements && state.canvasElements.length > 0) {
      const count = state.canvasElements.length;
      if (titleEl) titleEl.innerHTML = `<span class="text-indigo-400 font-semibold">All Elements Selected (${count})</span>`;
      if (btnCopy) btnCopy.disabled = true;
      if (btnDup) btnDup.disabled = false;
      if (btnDel) btnDel.disabled = false;

      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      for (const e of state.canvasElements) {
        if (e.visible === false) continue;
        minX = Math.min(minX, e.x);
        minY = Math.min(minY, e.y);
        maxX = Math.max(maxX, e.x + e.width);
        maxY = Math.max(maxY, e.y + e.height);
      }
      if (posX) { posX.disabled = false; posX.value = minX === Infinity ? 0 : Math.round(minX); }
      if (posY) { posY.disabled = false; posY.value = minY === Infinity ? 0 : Math.round(minY); }
      if (posW) { posW.disabled = false; posW.value = maxX === -Infinity ? 0 : Math.round(maxX - minX); }
      if (posH) { posH.disabled = false; posH.value = maxY === -Infinity ? 0 : Math.round(maxY - minY); }
      if (rotSlider) { rotSlider.disabled = true; rotSlider.value = 0; }
      if (rotNum) { rotNum.disabled = true; rotNum.value = 0; }

      if (dynContainer) {
        dynContainer.innerHTML = `
          <div class="space-y-3 p-1">
            <div class="p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-lg">
              <div class="flex items-center gap-2 mb-1.5">
                <i data-lucide="layers" class="w-4 h-4 text-indigo-400"></i>
                <span class="text-xs font-semibold text-white">Group Selection (${count} items)</span>
              </div>
              <p class="text-[11px] text-gray-400 leading-relaxed">
                All elements on canvas are selected. You can drag on canvas to move them together, or delete all at once.
              </p>
            </div>
            <div class="flex flex-col gap-2 pt-1">
              <button id="btn-insp-del-all" class="w-full py-2 px-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-md shadow-red-500/20 transition">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                <span>Delete All (${count}) Elements</span>
              </button>
              <button id="btn-insp-deselect" class="w-full py-1.5 px-3 rounded-lg bg-dark-800 hover:bg-gray-800 border border-gray-700 text-gray-300 hover:text-white font-medium text-xs flex items-center justify-center gap-1.5 transition">
                <i data-lucide="x" class="w-3.5 h-3.5"></i>
                <span>Deselect All</span>
              </button>
            </div>
          </div>
        `;
        document.getElementById('btn-insp-del-all')?.addEventListener('click', deleteAllElements);
        document.getElementById('btn-insp-deselect')?.addEventListener('click', () => {
          state.isAllSelected = false;
          state.selectedElementId = null;
          syncInspectorUI();
          renderLayersList();
          updateFloatingToolbar();
          updateSelectAllButtonUI();
          if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
        });
        if (window.lucide) lucide.createIcons();
      }
      return;
    }

    if (!state.selectedElementId) {
      const isKm = window.i18n && window.i18n.getLanguage() === 'km';
      if (titleEl) titleEl.textContent = isKm ? 'មិនមានការជ្រើសរើសធាតុណាមួយទេ' : 'No Element Selected';
      if (posX) { posX.value = ''; posX.disabled = true; }
      if (posY) { posY.value = ''; posY.disabled = true; }
      if (posW) { posW.value = ''; posW.disabled = true; }
      if (posH) { posH.value = ''; posH.disabled = true; }
      if (rotSlider) { rotSlider.value = 0; rotSlider.disabled = true; }
      if (rotNum) { rotNum.value = 0; rotNum.disabled = true; }
      if (btnCopy) btnCopy.disabled = true;
      if (btnDup) btnDup.disabled = true;
      if (btnDel) btnDel.disabled = true;
      if (dynContainer) dynContainer.innerHTML = `<p class="text-[11px] text-gray-500 italic p-2 text-center">${isKm ? 'ចុចលើធាតុណាមួយនៅលើផ្ទាំង Preview ដើម្បីកែប្រែ, ចម្លង, ឬប្តូរទំហំ។' : 'Click any element on the preview canvas to inspect, copy, duplicate, or resize.'}</p>`;
      return;
    }

    const el = state.canvasElements.find(item => item.id === state.selectedElementId);
    if (!el) {
      state.selectedElementId = null;
      syncInspectorUI();
      return;
    }

    if (btnCopy) btnCopy.disabled = false;
    if (btnDup) btnDup.disabled = false;
    if (btnDel) btnDel.disabled = false;
    if (posX) { posX.disabled = false; posX.value = Math.round(el.x); }
    if (posY) { posY.disabled = false; posY.value = Math.round(el.y); }
    if (posW) { posW.disabled = false; posW.value = Math.round(el.width); }
    if (posH) { posH.disabled = false; posH.value = Math.round(el.height); }
    if (rotSlider) { rotSlider.disabled = false; rotSlider.value = el.rotation || 0; }
    if (rotNum) { rotNum.disabled = false; rotNum.value = el.rotation || 0; }

    if (titleEl) {
      titleEl.innerHTML = `<span class="text-white">${el.name}</span> <span class="text-[9px] px-1 py-0.5 rounded bg-indigo-900/60 text-indigo-300 uppercase">${el.type}</span>`;
    }

    if (!dynContainer) return;
    dynContainer.innerHTML = '';

    // Specialized inspector panels per element type
    if (el.type === 'shape') {
      dynContainer.innerHTML = `
        <div class="space-y-2 text-xs">
          <div>
            <label class="block text-[11px] text-gray-400 mb-1">Shape Style (12 Shapes)</label>
            <select id="insp-shape-type" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white">
              <option value="rounded" ${el.shape === 'rounded' ? 'selected' : ''}>Rounded Box</option>
              <option value="sharp" ${el.shape === 'sharp' ? 'selected' : ''}>Sharp Rectangle</option>
              <option value="circle" ${el.shape === 'circle' ? 'selected' : ''}>Circle / Ellipse</option>
              <option value="pill" ${el.shape === 'pill' ? 'selected' : ''}>Pill Oval</option>
              <option value="star" ${el.shape === 'star' ? 'selected' : ''}>5-Point Star</option>
              <option value="triangle" ${el.shape === 'triangle' ? 'selected' : ''}>Triangle Pointer</option>
              <option value="diamond" ${el.shape === 'diamond' ? 'selected' : ''}>Diamond / Rhombus</option>
              <option value="hexagon" ${el.shape === 'hexagon' ? 'selected' : ''}>Hexagon Chamfer</option>
              <option value="arrow" ${el.shape === 'arrow' ? 'selected' : ''}>Pointer Arrow</option>
              <option value="line" ${el.shape === 'line' ? 'selected' : ''}>Line Divider</option>
              <option value="parallelogram" ${el.shape === 'parallelogram' ? 'selected' : ''}>Slanted Parallelogram</option>
              <option value="cyber" ${el.shape === 'cyber' ? 'selected' : ''}>Cyber Cut Brackets</option>
            </select>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Fill Color</label>
              <div class="flex items-center gap-1.5 bg-dark-800 border border-gray-700 rounded p-1">
                <input type="color" id="insp-shape-fill" value="${el.fillColor || '#0b0f19'}" class="w-6 h-6 rounded cursor-pointer bg-transparent border-0">
                <span class="text-[10px] text-gray-300 font-mono">${el.fillColor || '#0b0f19'}</span>
              </div>
            </div>
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Corner Radius</label>
              <input type="range" id="insp-shape-radius" min="0" max="60" value="${el.cornerRadius !== undefined ? el.cornerRadius : 14}" class="w-full accent-indigo-500">
            </div>
          </div>
          <div>
            <label class="block text-[11px] text-gray-400 mb-1">Border &amp; Outline Style</label>
            <select id="insp-shape-border" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white">
              <option value="solid" ${el.borderStyle === 'solid' || !el.borderStyle ? 'selected' : ''}>Clean Solid Line (No Light / Clean)</option>
              <option value="none" ${el.borderStyle === 'none' ? 'selected' : ''}>No Border (Flat Shape)</option>
              <option value="neon" ${el.borderStyle === 'neon' ? 'selected' : ''}>Glowing Light Halo (Neon)</option>
              <option value="gradient" ${el.borderStyle === 'gradient' ? 'selected' : ''}>Dual Gradient Border</option>
              <option value="dashed" ${el.borderStyle === 'dashed' ? 'selected' : ''}>Dashed Coupon Border</option>
            </select>
          </div>
          <div id="insp-shape-glow-box" class="${el.borderStyle === 'neon' ? '' : 'hidden'}">
            <div class="flex justify-between text-[11px] text-gray-400 mb-1">
              <span>Light Glow (Halo) Blur</span>
              <span id="label-shape-glow" class="font-mono text-indigo-400">${el.glow !== undefined ? el.glow : 14}px</span>
            </div>
            <input type="range" id="insp-shape-glow" min="0" max="32" value="${el.glow !== undefined ? el.glow : 14}" class="w-full accent-indigo-500">
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Border Color</label>
              <div class="flex items-center gap-1.5 bg-dark-800 border border-gray-700 rounded p-1">
                <input type="color" id="insp-shape-bcolor" value="${el.borderColor || '#6366f1'}" class="w-6 h-6 rounded cursor-pointer bg-transparent border-0">
                <span class="text-[10px] text-gray-300 font-mono">${el.borderColor || '#6366f1'}</span>
              </div>
            </div>
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Border Width</label>
              <input type="range" id="insp-shape-bwidth" min="0" max="8" step="0.5" value="${el.borderWidth !== undefined ? el.borderWidth : 2}" class="w-full accent-indigo-500">
            </div>
          </div>
        </div>
      `;

      document.getElementById('insp-shape-type').addEventListener('change', e => {
        el.shape = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-shape-fill').addEventListener('input', e => {
        el.fillColor = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-shape-radius').addEventListener('input', e => {
        el.cornerRadius = parseInt(e.target.value, 10);
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-shape-border').addEventListener('change', e => {
        el.borderStyle = e.target.value;
        const glowBox = document.getElementById('insp-shape-glow-box');
        if (e.target.value === 'neon') {
          if (!el.glow || el.glow <= 0) el.glow = 14;
          if (glowBox) glowBox.classList.remove('hidden');
        } else {
          el.glow = 0;
          if (glowBox) glowBox.classList.add('hidden');
        }
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      const glowSlider = document.getElementById('insp-shape-glow');
      if (glowSlider) {
        glowSlider.addEventListener('input', e => {
          el.glow = parseFloat(e.target.value);
          const lbl = document.getElementById('label-shape-glow');
          if (lbl) lbl.textContent = `${e.target.value}px`;
          if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
        });
      }
      document.getElementById('insp-shape-bcolor').addEventListener('input', e => {
        el.borderColor = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-shape-bwidth').addEventListener('input', e => {
        el.borderWidth = parseFloat(e.target.value);
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

    } else if (el.type === 'text') {
      const activeAnim = el.animation || 'none';
      dynContainer.innerHTML = `
        <div class="space-y-2.5 text-xs">
          <div>
            <label class="block text-[11px] text-gray-400 mb-1">Text Content</label>
            <input type="text" id="insp-text-content" value="${(el.text || '').replace(/"/g, '&quot;')}" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-indigo-500 focus:outline-none">
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Font Family</label>
              <select id="insp-text-font" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-indigo-500 focus:outline-none cursor-pointer">
                <optgroup label="🇰🇭 Khmer Unicode Fonts (ពុម្ពអក្សរខ្មែរ)">
                  <option value="Kantumruy Pro" ${el.fontFamily === 'Kantumruy Pro' ? 'selected' : ''}>🇰🇭 Kantumruy Pro (Modern Clean)</option>
                  <option value="Moul" ${el.fontFamily === 'Moul' ? 'selected' : ''}>🇰🇭 Moul (មូឡ - អក្សរមូល Headline)</option>
                  <option value="Battambang" ${el.fontFamily === 'Battambang' ? 'selected' : ''}>🇰🇭 Battambang (បាត់ដំបង - Classic)</option>
                  <option value="Koulen" ${el.fontFamily === 'Koulen' ? 'selected' : ''}>🇰🇭 Koulen (គូលែន - Tall Bold Header)</option>
                  <option value="Bayon" ${el.fontFamily === 'Bayon' ? 'selected' : ''}>🇰🇭 Bayon (បាយ័ន - Heavy Title)</option>
                  <option value="Dangrek" ${el.fontFamily === 'Dangrek' ? 'selected' : ''}>🇰🇭 Dangrek (ដងរែក - Display)</option>
                  <option value="Siemreap" ${el.fontFamily === 'Siemreap' ? 'selected' : ''}>🇰🇭 Siemreap (សៀមរាប - Clean Body)</option>
                  <option value="Preahvihear" ${el.fontFamily === 'Preahvihear' ? 'selected' : ''}>🇰🇭 Preahvihear (ព្រះវិហារ)</option>
                  <option value="Bokor" ${el.fontFamily === 'Bokor' ? 'selected' : ''}>🇰🇭 Bokor (បូកគោ)</option>
                  <option value="Nokora" ${el.fontFamily === 'Nokora' ? 'selected' : ''}>🇰🇭 Nokora (នគរា)</option>
                </optgroup>
                <optgroup label="🅰️ Modern English Fonts">
                  <option value="Inter" ${el.fontFamily === 'Inter' ? 'selected' : ''}>Inter (Modern Sans)</option>
                  <option value="Montserrat" ${el.fontFamily === 'Montserrat' ? 'selected' : ''}>Montserrat (Bold)</option>
                  <option value="Poppins" ${el.fontFamily === 'Poppins' ? 'selected' : ''}>Poppins (Clean)</option>
                  <option value="Anton" ${el.fontFamily === 'Anton' ? 'selected' : ''}>Anton (Heavy)</option>
                  <option value="Bebas Neue" ${el.fontFamily === 'Bebas Neue' ? 'selected' : ''}>Bebas Neue (Punch)</option>
                  <option value="Oswald" ${el.fontFamily === 'Oswald' ? 'selected' : ''}>Oswald (Compact)</option>
                  <option value="Playfair Display" ${el.fontFamily === 'Playfair Display' ? 'selected' : ''}>Playfair (Serif)</option>
                  <option value="Cinzel" ${el.fontFamily === 'Cinzel' ? 'selected' : ''}>Cinzel (Luxury)</option>
                  <option value="Orbitron" ${el.fontFamily === 'Orbitron' ? 'selected' : ''}>Orbitron (Cyber)</option>
                </optgroup>
              </select>
            </div>
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Font Weight</label>
              <select id="insp-text-weight" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white">
                <option value="400" ${el.fontWeight === '400' ? 'selected' : ''}>400 Regular</option>
                <option value="500" ${el.fontWeight === '500' ? 'selected' : ''}>500 Medium</option>
                <option value="600" ${el.fontWeight === '600' ? 'selected' : ''}>600 Semi-Bold</option>
                <option value="700" ${el.fontWeight === '700' ? 'selected' : ''}>700 Bold</option>
                <option value="800" ${el.fontWeight === '800' ? 'selected' : ''}>800 Extra-Bold</option>
                <option value="900" ${el.fontWeight === '900' ? 'selected' : ''}>900 Black</option>
              </select>
            </div>
          </div>

          <!-- Quick Khmer Font Buttons -->
          <div class="space-y-1">
            <span class="text-[10px] text-gray-400">Quick Khmer Fonts (ប្តូរពុម្ពអក្សរខ្មែរភ្លាមៗ):</span>
            <div class="grid grid-cols-5 gap-1 text-[10px]">
              <button type="button" class="btn-quick-khmer-font py-1 px-1 rounded bg-dark-900 hover:bg-indigo-900 border border-indigo-500/40 text-indigo-300 font-medium truncate" data-font="Kantumruy Pro" style="font-family: 'Kantumruy Pro', sans-serif">កន្តុំរុយ</button>
              <button type="button" class="btn-quick-khmer-font py-1 px-1 rounded bg-dark-900 hover:bg-amber-900 border border-amber-500/40 text-amber-300 font-medium truncate" data-font="Moul" style="font-family: 'Moul', cursive">អក្សរមូល</button>
              <button type="button" class="btn-quick-khmer-font py-1 px-1 rounded bg-dark-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-medium truncate" data-font="Battambang" style="font-family: 'Battambang', sans-serif">បាត់ដំបង</button>
              <button type="button" class="btn-quick-khmer-font py-1 px-1 rounded bg-dark-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-medium truncate" data-font="Koulen" style="font-family: 'Koulen', sans-serif">គូលែន</button>
              <button type="button" class="btn-quick-khmer-font py-1 px-1 rounded bg-dark-900 hover:bg-gray-800 border border-gray-700 text-gray-300 font-medium truncate" data-font="Siemreap" style="font-family: 'Siemreap', sans-serif">សៀមរាប</button>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Font Size: <span id="insp-text-size-lbl">${el.fontSize || 24}px</span></label>
              <input type="range" id="insp-text-size" min="10" max="72" value="${el.fontSize || 24}" class="w-full accent-indigo-500">
            </div>
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Text Color</label>
              <div class="flex items-center gap-1.5 bg-dark-800 border border-gray-700 rounded p-1">
                <input type="color" id="insp-text-color" value="${el.color || '#ffffff'}" class="w-6 h-6 rounded cursor-pointer bg-transparent border-0">
                <span class="text-[10px] text-gray-300 font-mono">${el.color || '#ffffff'}</span>
              </div>
            </div>
          </div>

          <!-- Text Outline / Stroke (For Broadcast High Contrast) -->
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Outline / Stroke Color</label>
              <div class="flex items-center gap-1.5 bg-dark-800 border border-gray-700 rounded p-1">
                <input type="color" id="insp-text-stroke-color" value="${el.strokeColor || '#ffffff'}" class="w-6 h-6 rounded cursor-pointer bg-transparent border-0">
                <span class="text-[10px] text-gray-300 font-mono">${el.strokeColor || 'none'}</span>
              </div>
            </div>
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Outline Width: <span id="label-text-stroke-w">${el.strokeWidth || 0}px</span></label>
              <input type="range" id="insp-text-stroke-width" min="0" max="8" step="0.5" value="${el.strokeWidth || 0}" class="w-full accent-indigo-500">
            </div>
          </div>

          <!-- Text Animation & Running Text (Marquee) Panel -->
          <div class="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/40 space-y-2 mt-2">
            <div class="flex items-center justify-between">
              <label class="block text-[11px] font-semibold text-indigo-300 flex items-center gap-1.5">
                <i data-lucide="play" class="w-3.5 h-3.5 text-indigo-400"></i>
                <span>Text Motion &amp; Running Text</span>
              </label>
              <span class="text-[9px] px-1.5 py-0.5 rounded bg-indigo-900 text-indigo-300 font-mono uppercase">${activeAnim}</span>
            </div>

            <div>
              <select id="insp-text-anim" class="w-full bg-dark-900 border border-indigo-500/50 rounded p-1.5 text-xs text-white focus:outline-none">
                <option value="none" ${activeAnim === 'none' ? 'selected' : ''}>Static (No Motion)</option>
                <option value="marquee" ${activeAnim === 'marquee' ? 'selected' : ''}>🏃 Running Text (News Ticker / Loop)</option>
                <option value="typewriter" ${activeAnim === 'typewriter' ? 'selected' : ''}>⌨️ Typewriter (Letter by Letter + Cursor)</option>
                <option value="slide_left" ${activeAnim === 'slide_left' ? 'selected' : ''}>➡️ Slide In (From Right to Left)</option>
                <option value="slide_up" ${activeAnim === 'slide_up' ? 'selected' : ''}>⬆️ Slide Up (From Bottom to Position)</option>
                <option value="fade_in" ${activeAnim === 'fade_in' ? 'selected' : ''}>🌫️ Fade In (Smooth Entrance)</option>
                <option value="bounce_in" ${activeAnim === 'bounce_in' ? 'selected' : ''}>🏀 Bounce In (Pop-in Elastic)</option>
                <option value="wave" ${activeAnim === 'wave' ? 'selected' : ''}>🌊 Wave Bounce (Letter Wave)</option>
                <option value="shimmer" ${activeAnim === 'shimmer' ? 'selected' : ''}>✨ Shimmer (Metallic Gold Gleam)</option>
                <option value="pulse" ${activeAnim === 'pulse' ? 'selected' : ''}>💓 Pulse (Breathing Heartbeat)</option>
              </select>
            </div>

            <!-- Start Delay (Allows each text to animate separately / ដាច់ដោយឡែកពីគ្នា) -->
            <div class="pt-1">
              <div class="flex items-center justify-between text-[11px] text-gray-400 mb-0.5">
                <span>Start Delay (ចាប់ផ្តើម ដាច់ដោយឡែក)</span>
                <span id="label-text-anim-delay" class="font-mono text-indigo-400">${el.animDelay || 0}s</span>
              </div>
              <input type="range" id="insp-text-anim-delay" min="0" max="3" step="0.2" value="${el.animDelay || 0}" class="w-full accent-indigo-500 cursor-pointer">
              <p class="text-[9.5px] text-gray-400 italic">Adjust delay so each text layer appears one after another!</p>
            </div>

            <!-- Marquee (Running Text) Options -->
            <div id="insp-text-marquee-opts" class="${activeAnim === 'marquee' ? '' : 'hidden'} space-y-2 pt-1 border-t border-indigo-900/60">
              <div class="flex items-center justify-between text-[11px] text-gray-400">
                <span>Running Speed</span>
                <span id="label-text-anim-speed" class="font-mono text-indigo-400">${el.animSpeed || 90} px/s</span>
              </div>
              <input type="range" id="insp-text-anim-speed" min="30" max="360" step="5" value="${el.animSpeed || 90}" class="w-full accent-indigo-500 cursor-pointer">

              <div class="grid grid-cols-4 gap-1 text-[10px]">
                <button class="btn-marquee-preset-speed py-1 rounded bg-dark-900 hover:bg-gray-800 text-gray-300 border border-gray-700 transition" data-spd="50">Slow</button>
                <button class="btn-marquee-preset-speed py-1 rounded bg-dark-900 hover:bg-gray-800 text-gray-300 border border-gray-700 transition" data-spd="90">Normal</button>
                <button class="btn-marquee-preset-speed py-1 rounded bg-dark-900 hover:bg-gray-800 text-gray-300 border border-gray-700 transition" data-spd="160">Fast</button>
                <button class="btn-marquee-preset-speed py-1 rounded bg-dark-900 hover:bg-gray-800 text-indigo-300 border border-indigo-500/40 transition" data-spd="280">Turbo</button>
              </div>

              <div class="grid grid-cols-2 gap-2 pt-1">
                <div>
                  <label class="block text-[10px] text-gray-400 mb-0.5">Direction (ពីណាទៅណា)</label>
                  <select id="insp-text-anim-dir" class="w-full bg-dark-900 border border-gray-700 rounded p-1 text-[11px] text-white">
                    <option value="left" ${(!el.animDir || el.animDir === 'left') ? 'selected' : ''}>⬅️ ពីស្តាំទៅឆ្វេង (R to L)</option>
                    <option value="right" ${el.animDir === 'right' ? 'selected' : ''}>➡️ ពីឆ្វេងទៅស្តាំ (L to R)</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[10px] text-gray-400 mb-0.5">Loop Gap: <span id="label-text-gap">${el.marqueeGap !== undefined ? el.marqueeGap : 60}px</span></label>
                  <input type="range" id="insp-text-anim-gap" min="20" max="240" step="10" value="${el.marqueeGap !== undefined ? el.marqueeGap : 60}" class="w-full accent-indigo-500">
                </div>
              </div>

              <!-- Run Track Bounds (ពីណាទៅណា) Quick Presets -->
              <div class="space-y-1 pt-1 border-t border-indigo-950">
                <label class="block text-[10px] text-gray-400">Run Track Zone (ចន្លោះរត់ ពីណាទៅណា)</label>
                <div class="grid grid-cols-2 gap-1.5 text-[11px]">
                  <button id="btn-marquee-fit-ribbon" type="button" class="py-1 px-1.5 rounded bg-dark-900 hover:bg-indigo-900/60 border border-indigo-500/40 text-indigo-300 font-medium transition flex items-center justify-center gap-1">
                    <span>↔️ Fit Ribbon Box</span>
                  </button>
                  <button id="btn-marquee-full-canvas" type="button" class="py-1 px-1.5 rounded bg-dark-900 hover:bg-purple-900/60 border border-purple-500/40 text-purple-300 font-medium transition flex items-center justify-center gap-1">
                    <span>📺 100% Full Canvas</span>
                  </button>
                </div>
                <p class="text-[9.5px] text-indigo-300/80 italic">Tip: Drag left & right box handles on canvas to set custom start and end points!</p>
              </div>
            </div>

            <!-- Typewriter Options -->
            <div id="insp-text-typewriter-opts" class="${activeAnim === 'typewriter' ? '' : 'hidden'} space-y-1.5 pt-1 border-t border-indigo-900/60">
              <div class="flex items-center justify-between text-[11px] text-gray-400">
                <span>Typing Speed</span>
                <span id="label-type-speed" class="font-mono text-indigo-400">${el.animSpeed || 14} chars/s</span>
              </div>
              <input type="range" id="insp-text-type-speed" min="4" max="32" value="${el.animSpeed || 14}" class="w-full accent-indigo-500">
            </div>
          </div>
        </div>
      `;

      document.getElementById('insp-text-content').addEventListener('input', e => {
        el.text = e.target.value;
        if (state.autoResponsiveWidth) {
          ctx.save();
          ctx.font = `${el.fontWeight || '700'} ${el.fontSize || 24}px '${el.fontFamily || 'Inter'}', sans-serif`;
          const measuredW = Math.round(ctx.measureText(el.text).width + 24);
          ctx.restore();
          el.width = Math.max(120, measuredW);
          const card = state.canvasElements.find(item => item.id === 'el_bg_card' || item.name?.toLowerCase().includes('card') || item.name?.toLowerCase().includes('box'));
          if (card) {
            const minWNeeded = Math.round((el.x - card.x) + el.width + 48);
            if (minWNeeded > card.width) {
              card.width = Math.min(1800, minWNeeded);
            }
          }
          const pw = document.getElementById('prop-width');
          if (pw) pw.value = el.width;
          updateFloatingToolbar();
        }
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-text-font').addEventListener('change', e => {
        el.fontFamily = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-text-weight').addEventListener('change', e => {
        el.fontWeight = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-text-size').addEventListener('input', e => {
        el.fontSize = parseInt(e.target.value, 10);
        document.getElementById('insp-text-size-lbl').textContent = `${e.target.value}px`;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-text-color').addEventListener('input', e => {
        el.color = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

      document.getElementById('insp-text-stroke-color')?.addEventListener('input', e => {
        el.strokeColor = e.target.value;
        if (!el.strokeWidth || el.strokeWidth <= 0) el.strokeWidth = 2.5;
        const sw = document.getElementById('insp-text-stroke-width');
        if (sw) sw.value = el.strokeWidth;
        const lbl = document.getElementById('label-text-stroke-w');
        if (lbl) lbl.textContent = `${el.strokeWidth}px`;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

      document.getElementById('insp-text-stroke-width')?.addEventListener('input', e => {
        el.strokeWidth = parseFloat(e.target.value);
        const lbl = document.getElementById('label-text-stroke-w');
        if (lbl) lbl.textContent = `${e.target.value}px`;
        if (el.strokeWidth > 0 && !el.strokeColor) el.strokeColor = '#ffffff';
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

      // Text Animation Selector
      document.getElementById('insp-text-anim').addEventListener('change', e => {
        const val = e.target.value;
        el.animation = val;
        el.anim = val; // alias for compatibility
        if (val === 'marquee' && !el.animSpeed) el.animSpeed = 90;
        if (val === 'typewriter' && !el.animSpeed) el.animSpeed = 14;

        const marqBox = document.getElementById('insp-text-marquee-opts');
        const typeBox = document.getElementById('insp-text-typewriter-opts');
        if (marqBox) marqBox.classList.toggle('hidden', val !== 'marquee');
        if (typeBox) typeBox.classList.toggle('hidden', val !== 'typewriter');

        pushHistory(`Text Anim: ${val}`);
        if (val !== 'none' && !isPlaying) {
          playPreview();
        } else if (!isPlaying) {
          Engine.renderFrame(ctx, state, pausedAtTime);
        }
      });

      // Marquee speed slider
      const spdSlider = document.getElementById('insp-text-anim-speed');
      if (spdSlider) {
        spdSlider.addEventListener('input', e => {
          el.animSpeed = parseFloat(e.target.value);
          const lbl = document.getElementById('label-text-anim-speed');
          if (lbl) lbl.textContent = `${e.target.value} px/s`;
          if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
        });
      }

      // Marquee speed preset buttons
      document.querySelectorAll('.btn-marquee-preset-speed').forEach(b => {
        b.addEventListener('click', () => {
          const spd = parseFloat(b.dataset.spd);
          el.animSpeed = spd;
          if (spdSlider) spdSlider.value = spd;
          const lbl = document.getElementById('label-text-anim-speed');
          if (lbl) lbl.textContent = `${spd} px/s`;
          if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
        });
      });

      // Marquee direction
      document.getElementById('insp-text-anim-dir')?.addEventListener('change', e => {
        el.animDir = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

      // Marquee gap
      document.getElementById('insp-text-anim-gap')?.addEventListener('input', e => {
        el.marqueeGap = parseFloat(e.target.value);
        const lbl = document.getElementById('label-text-gap');
        if (lbl) lbl.textContent = `${e.target.value}px`;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

      // Typewriter speed
      document.getElementById('insp-text-type-speed')?.addEventListener('input', e => {
        el.animSpeed = parseFloat(e.target.value);
        const lbl = document.getElementById('label-type-speed');
        if (lbl) lbl.textContent = `${e.target.value} chars/s`;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

      // Start Delay slider (allows each text layer to start separately)
      document.getElementById('insp-text-anim-delay')?.addEventListener('input', e => {
        el.animDelay = parseFloat(e.target.value);
        const lbl = document.getElementById('label-text-anim-delay');
        if (lbl) lbl.textContent = `${e.target.value}s`;
        pushHistory('Text Anim Delay');
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

      // Fit Marquee Run Track into Ribbon Box
      document.getElementById('btn-marquee-fit-ribbon')?.addEventListener('click', () => {
        const ribbon = state.canvasElements.find(item => item.id === 'el_bg_card' || item.name?.toLowerCase().includes('ribbon') || item.name?.toLowerCase().includes('box') || item.name?.toLowerCase().includes('card'));
        if (ribbon) {
          el.x = Math.round(ribbon.x + 30);
          el.width = Math.round(ribbon.width - 60);
        } else {
          el.x = 240;
          el.width = 680;
        }
        pushHistory('Fit Marquee to Ribbon');
        const pw = document.getElementById('prop-width');
        const px = document.getElementById('prop-x');
        if (pw) pw.value = el.width;
        if (px) px.value = el.x;
        updateFloatingToolbar();
        showToast('↔️ Run track fitted inside ribbon boundary');
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

      // Stretch Marquee Run Track across 100% Full Canvas
      document.getElementById('btn-marquee-full-canvas')?.addEventListener('click', () => {
        el.x = 40;
        el.width = 1840;
        pushHistory('Expand Marquee Full Screen');
        const pw = document.getElementById('prop-width');
        const px = document.getElementById('prop-x');
        if (pw) pw.value = el.width;
        if (px) px.value = el.x;
        updateFloatingToolbar();
        showToast('📺 Run track stretched across 100% full screen');
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

      if (window.lucide) lucide.createIcons();

    } else if (el.type === 'image') {
      const hasPic = elementHasImage(el);
      const thumbSrc = el.imgSrc || (el.imageObj ? el.imageObj.src : (state.images && el.srcKey && state.images[el.srcKey] ? state.images[el.srcKey].src : (state.avatarImg ? state.avatarImg.src : '')));

      dynContainer.innerHTML = `
        <div class="space-y-2.5 text-xs">
          <!-- 1-Click Upload / Replace Button Card -->
          <div class="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/50 space-y-2">
            <div class="flex items-center gap-2.5">
              <div class="w-12 h-12 rounded-lg bg-dark-900 border border-indigo-500/40 flex items-center justify-center overflow-hidden shrink-0 cursor-pointer hover:border-indigo-400 transition" id="insp-thumb-box" title="Click to change photo">
                ${hasPic && thumbSrc ? `<img src="${thumbSrc}" class="w-full h-full object-cover">` : `<span class="text-xl">📷</span>`}
              </div>
              <div class="flex-1 min-w-0">
                <button id="btn-insp-upload-img" class="w-full py-1.5 px-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow transition cursor-pointer">
                  <i data-lucide="image-plus" class="w-3.5 h-3.5"></i>
                  <span>${hasPic ? 'Change Photo' : '+ Upload Photo'}</span>
                </button>
                ${hasPic ? `<button id="btn-insp-remove-img" class="text-[10px] text-red-400 hover:text-red-300 mt-1 block">✕ Clear Photo</button>` : `<span class="text-[10px] text-gray-400 block mt-0.5">Click button to pick image</span>`}
              </div>
            </div>
            ${hasPic ? `
            <button id="btn-insp-autofit-img" class="w-full py-1 px-2 rounded bg-dark-800 hover:bg-gray-700 text-indigo-300 text-[11px] border border-gray-700 flex items-center justify-center gap-1 transition">
              <i data-lucide="maximize" class="w-3 h-3"></i> Auto-Fit Aspect Ratio
            </button>` : ''}
          </div>

          <div>
            <label class="block text-[11px] text-gray-400 mb-1">Mask / Clip Shape</label>
            <select id="insp-img-clip" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white">
              <option value="none" ${el.clipShape === 'none' ? 'selected' : ''}>Full Image (No Crop / 100% Full View)</option>
              <option value="rounded" ${el.clipShape === 'rounded' ? 'selected' : ''}>Rounded Rectangle</option>
              <option value="sharp" ${el.clipShape === 'sharp' ? 'selected' : ''}>Sharp Rectangle</option>
              <option value="circle" ${el.clipShape === 'circle' ? 'selected' : ''}>Circle / Avatar</option>
              <option value="ellipse" ${el.clipShape === 'ellipse' ? 'selected' : ''}>Full Ellipse Oval</option>
              <option value="hexagon" ${el.clipShape === 'hexagon' ? 'selected' : ''}>Hexagon Chamfer</option>
              <option value="cyber" ${el.clipShape === 'cyber' ? 'selected' : ''}>Cyber Cut Brackets</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] text-gray-400 mb-1">Product Fit (Crop Mode)</label>
            <select id="insp-img-fit" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white">
              <option value="contain" ${el.fitMode === 'contain' || !el.fitMode ? 'selected' : ''}>Contain (Show 100% Full Product, No Cutoff)</option>
              <option value="cover" ${el.fitMode === 'cover' ? 'selected' : ''}>Cover (Fill & Crop Center)</option>
            </select>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Border Color</label>
              <div class="flex items-center gap-1.5 bg-dark-800 border border-gray-700 rounded p-1">
                <input type="color" id="insp-img-bcolor" value="${el.borderColor || '#6366f1'}" class="w-6 h-6 rounded cursor-pointer bg-transparent border-0">
                <span class="text-[10px] text-gray-300 font-mono">${el.borderColor || '#6366f1'}</span>
              </div>
            </div>
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Border Width</label>
              <input type="range" id="insp-img-bwidth" min="0" max="6" step="0.5" value="${el.borderWidth !== undefined ? el.borderWidth : 2}" class="w-full accent-indigo-500">
            </div>
          </div>
          <div class="pt-1">
            <details class="text-[10px] text-gray-500 cursor-pointer">
              <summary class="hover:text-gray-400">Advanced: Preset Slot Binding</summary>
              <div class="mt-1.5">
                <select id="insp-img-slot" class="w-full bg-dark-800 border border-gray-700 rounded p-1 text-xs text-gray-300">
                  <option value="custom" ${!el.srcKey || el.srcKey === 'custom' ? 'selected' : ''}>Independent Custom Image</option>
                  <option value="img1" ${el.srcKey === 'img1' ? 'selected' : ''}>Slot 1 (Hero Product Image)</option>
                  <option value="img2" ${el.srcKey === 'img2' ? 'selected' : ''}>Slot 2 (Secondary Angle / Detail)</option>
                  <option value="img3" ${el.srcKey === 'img3' ? 'selected' : ''}>Slot 3 (Gallery Photo)</option>
                  <option value="qr" ${el.srcKey === 'qr' ? 'selected' : ''}>QR Code Box (Scan to Buy)</option>
                </select>
              </div>
            </details>
          </div>
        </div>
      `;

      const btnInspUpload = document.getElementById('btn-insp-upload-img');
      if (btnInspUpload) {
        btnInspUpload.addEventListener('click', () => openImageFilePickerForElement(el));
      }
      const thumbBox = document.getElementById('insp-thumb-box');
      if (thumbBox) {
        thumbBox.addEventListener('click', () => openImageFilePickerForElement(el));
      }
      const btnInspRemove = document.getElementById('btn-insp-remove-img');
      if (btnInspRemove) {
        btnInspRemove.addEventListener('click', () => {
          pushHistory('Remove Image from Element');
          el.imgSrc = null;
          el.imageObj = null;
          syncInspectorUI();
          renderLayersList();
          if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
          showToast('Image removed from element');
        });
      }
      const btnInspAutofit = document.getElementById('btn-insp-autofit-img');
      if (btnInspAutofit) {
        btnInspAutofit.addEventListener('click', () => {
          const img = el.imageObj;
          if (img && img.naturalWidth > 0) {
            pushHistory('Auto-Fit Aspect Ratio');
            const aspect = img.naturalWidth / img.naturalHeight;
            el.height = Math.round(el.width / aspect);
            syncInspectorUI();
            if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
            showToast('Auto-fitted to photo aspect ratio!');
          }
        });
      }
      document.getElementById('insp-img-slot')?.addEventListener('change', e => {
        el.srcKey = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-img-clip')?.addEventListener('change', e => {
        el.clipShape = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-img-fit')?.addEventListener('change', e => {
        el.fitMode = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-img-bcolor')?.addEventListener('input', e => {
        el.borderColor = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-img-bwidth')?.addEventListener('input', e => {
        el.borderWidth = parseFloat(e.target.value);
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

    } else if (el.type === 'button') {
      dynContainer.innerHTML = `
        <div class="space-y-2 text-xs">
          <div>
            <label class="block text-[11px] text-gray-400 mb-1">Button CTA Text</label>
            <input type="text" id="insp-btn-text" value="${(el.text || '').replace(/"/g, '&quot;')}" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-indigo-500 focus:outline-none">
          </div>
          <div>
            <label class="block text-[11px] text-gray-400 mb-1">Button Style</label>
            <select id="insp-btn-style" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white">
              <option value="gradient" ${el.btnStyle === 'gradient' ? 'selected' : ''}>Vibrant Gradient</option>
              <option value="neon" ${el.btnStyle === 'neon' ? 'selected' : ''}>Neon Glow Pill</option>
              <option value="solid" ${el.btnStyle === 'solid' ? 'selected' : ''}>Solid Accent</option>
              <option value="outline" ${el.btnStyle === 'outline' ? 'selected' : ''}>Clean Outline</option>
            </select>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Button Color</label>
              <div class="flex items-center gap-1.5 bg-dark-800 border border-gray-700 rounded p-1">
                <input type="color" id="insp-btn-color" value="${el.bgColor || '#6366f1'}" class="w-6 h-6 rounded cursor-pointer bg-transparent border-0">
                <span class="text-[10px] text-gray-300 font-mono">${el.bgColor || '#6366f1'}</span>
              </div>
            </div>
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Corner Radius</label>
              <input type="range" id="insp-btn-radius" min="0" max="30" value="${el.cornerRadius !== undefined ? el.cornerRadius : 8}" class="w-full accent-indigo-500">
            </div>
          </div>
        </div>
      `;

      document.getElementById('insp-btn-text').addEventListener('input', e => {
        el.text = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-btn-style').addEventListener('change', e => {
        el.btnStyle = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-btn-color').addEventListener('input', e => {
        el.bgColor = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-btn-radius').addEventListener('input', e => {
        el.cornerRadius = parseInt(e.target.value, 10);
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

    } else if (el.type === 'badge') {
      dynContainer.innerHTML = `
        <div class="space-y-2 text-xs">
          <div>
            <label class="block text-[11px] text-gray-400 mb-1">Badge Text</label>
            <input type="text" id="insp-badge-text" value="${(el.text || '').replace(/"/g, '&quot;')}" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-indigo-500 focus:outline-none">
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Color Preset</label>
              <select id="insp-badge-color" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white">
                <option value="accent" ${el.badgeColor === 'accent' ? 'selected' : ''}>Hot Deal (Pink/Red)</option>
                <option value="primary" ${el.badgeColor === 'primary' ? 'selected' : ''}>Primary (Indigo/Cyan)</option>
                <option value="gold" ${el.badgeColor === 'gold' ? 'selected' : ''}>Gold (VIP/Luxury)</option>
                <option value="emerald" ${el.badgeColor === 'emerald' ? 'selected' : ''}>Emerald (Verified)</option>
              </select>
            </div>
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Vector Icon</label>
              <select id="insp-badge-icon" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white">
                <option value="fire" ${el.icon === 'fire' ? 'selected' : ''}>🔥 Fire / Hot</option>
                <option value="sparkles" ${el.icon === 'sparkles' ? 'selected' : ''}>✨ Sparkles</option>
                <option value="star" ${el.icon === 'star' ? 'selected' : ''}>★ Star</option>
                <option value="check" ${el.icon === 'check' ? 'selected' : ''}>✓ Checkmark</option>
                <option value="shield" ${el.icon === 'shield' ? 'selected' : ''}>🛡️ Shield</option>
                <option value="none" ${el.icon === 'none' ? 'selected' : ''}>None (Text Only)</option>
              </select>
            </div>
          </div>
        </div>
      `;

      document.getElementById('insp-badge-text').addEventListener('input', e => {
        el.text = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-badge-color').addEventListener('change', e => {
        el.badgeColor = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-badge-icon').addEventListener('change', e => {
        el.icon = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

    } else if (el.type === 'stars') {
      dynContainer.innerHTML = `
        <div class="space-y-2 text-xs">
          <div>
            <label class="block text-[11px] text-gray-400 mb-1">Rating & Reviews Text</label>
            <input type="text" id="insp-stars-text" value="${(el.ratingText || '').replace(/"/g, '&quot;')}" class="w-full bg-dark-800 border border-gray-700 rounded p-1.5 text-xs text-white focus:border-indigo-500 focus:outline-none">
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Star Color</label>
              <div class="flex items-center gap-1.5 bg-dark-800 border border-gray-700 rounded p-1">
                <input type="color" id="insp-stars-color" value="${el.starColor || '#f59e0b'}" class="w-6 h-6 rounded cursor-pointer bg-transparent border-0">
                <span class="text-[10px] text-gray-300 font-mono">${el.starColor || '#f59e0b'}</span>
              </div>
            </div>
            <div>
              <label class="block text-[11px] text-gray-400 mb-1">Text Color</label>
              <div class="flex items-center gap-1.5 bg-dark-800 border border-gray-700 rounded p-1">
                <input type="color" id="insp-stars-tcolor" value="${el.textColor || '#ffffff'}" class="w-6 h-6 rounded cursor-pointer bg-transparent border-0">
                <span class="text-[10px] text-gray-300 font-mono">${el.textColor || '#ffffff'}</span>
              </div>
            </div>
          </div>
        </div>
      `;

      document.getElementById('insp-stars-text').addEventListener('input', e => {
        el.ratingText = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-stars-color').addEventListener('input', e => {
        el.starColor = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
      document.getElementById('insp-stars-tcolor').addEventListener('input', e => {
        el.textColor = e.target.value;
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });
    }
  }

  // Inspector Alignment Buttons
  const btnAlLeft = document.getElementById('btn-align-left');
  if (btnAlLeft) {
    btnAlLeft.addEventListener('click', () => {
      const el = state.canvasElements.find(item => item.id === state.selectedElementId);
      if (!el) return;
      el.x = 80;
      syncInspectorUI();
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
  }
  const btnAlCx = document.getElementById('btn-align-center-x');
  if (btnAlCx) {
    btnAlCx.addEventListener('click', () => {
      const el = state.canvasElements.find(item => item.id === state.selectedElementId);
      if (!el) return;
      el.x = Math.round((1920 - el.width) / 2);
      syncInspectorUI();
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
  }
  const btnAlCy = document.getElementById('btn-align-center-y');
  if (btnAlCy) {
    btnAlCy.addEventListener('click', () => {
      const el = state.canvasElements.find(item => item.id === state.selectedElementId);
      if (!el) return;
      el.y = Math.round((1080 - el.height) / 2);
      syncInspectorUI();
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
  }
  const btnAlRight = document.getElementById('btn-align-right');
  if (btnAlRight) {
    btnAlRight.addEventListener('click', () => {
      const el = state.canvasElements.find(item => item.id === state.selectedElementId);
      if (!el) return;
      el.x = 1920 - el.width - 80;
      syncInspectorUI();
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
  }

  // Inspector Numerical Fields (X, Y, Width, Height)
  ['prop-pos-x', 'prop-pos-y', 'prop-width', 'prop-height'].forEach(id => {
    const inp = document.getElementById(id);
    if (!inp) return;
    inp.addEventListener('input', e => {
      const el = state.canvasElements.find(item => item.id === state.selectedElementId);
      if (!el) return;
      const val = parseInt(e.target.value, 10) || 0;
      if (id === 'prop-pos-x') el.x = val;
      if (id === 'prop-pos-y') el.y = val;
      if (id === 'prop-width') el.width = Math.max(20, val);
      if (id === 'prop-height') el.height = Math.max(16, val);
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
  });

  // Inspector Rotation Controls (Slider, Number Input, & Quick Presets)
  const propRot = document.getElementById('prop-rotation');
  const propRotNum = document.getElementById('prop-rot-num');

  if (propRot) {
    propRot.addEventListener('input', e => {
      const el = state.canvasElements.find(item => item.id === state.selectedElementId);
      if (!el) return;
      const val = parseInt(e.target.value, 10) || 0;
      el.rotation = val;
      if (propRotNum) propRotNum.value = val;
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
    propRot.addEventListener('change', () => pushHistory('Change Rotation'));
  }

  if (propRotNum) {
    propRotNum.addEventListener('input', e => {
      const el = state.canvasElements.find(item => item.id === state.selectedElementId);
      if (!el) return;
      let val = parseInt(e.target.value, 10);
      if (isNaN(val)) val = 0;
      while (val > 180) val -= 360;
      while (val <= -180) val += 360;
      el.rotation = val;
      if (propRot) propRot.value = val;
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
    propRotNum.addEventListener('change', () => pushHistory('Change Rotation'));
  }

  document.querySelectorAll('.btn-quick-rot').forEach(btn => {
    btn.addEventListener('click', () => {
      const el = state.canvasElements.find(item => item.id === state.selectedElementId);
      if (!el) return;
      const val = parseInt(btn.dataset.rot, 10);
      pushHistory('Rotate to ' + val + '°');
      el.rotation = val;
      if (propRot) propRot.value = val;
      if (propRotNum) propRotNum.value = val;
      updateFloatingToolbar();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      showToast(`Rotated to ${val}°`);
    });
  });

  // Layers List Rendering (CapCut style layer stack)
  function renderLayersList() {
    const listEl = document.getElementById('canvas-layers-list');
    const countEl = document.getElementById('label-layer-count');
    if (!listEl) return;

    if (countEl) {
      if (state.isAllSelected && state.canvasElements.length > 0) {
        countEl.innerHTML = `<span class="text-indigo-400 font-semibold">${state.canvasElements.length} elements (All Selected)</span>`;
      } else {
        countEl.textContent = `${state.canvasElements.length} elements`;
      }
    }
    listEl.innerHTML = '';

    if (state.canvasElements.length === 0) {
      listEl.innerHTML = '<p class="text-[11px] text-gray-500 italic p-2 text-center">No layers. Click + Add Elements above!</p>';
      return;
    }

    // Iterate in reverse order so topmost visual element is on top of list
    for (let i = state.canvasElements.length - 1; i >= 0; i--) {
      const el = state.canvasElements[i];
      const isSelected = state.isAllSelected || el.id === state.selectedElementId;
      const row = document.createElement('div');
      row.className = `flex items-center justify-between px-2 py-1.5 rounded-lg text-xs cursor-pointer transition select-none ${
        isSelected
          ? 'bg-indigo-950/80 border border-indigo-500/70 text-white font-medium shadow-sm'
          : 'bg-dark-800/80 hover:bg-gray-800 border border-transparent text-gray-300'
      }`;

      const typeIconMap = {
        shape: 'square',
        text: 'type',
        image: 'image',
        button: 'mouse-pointer',
        badge: 'award',
        stars: 'star'
      };
      const iconName = typeIconMap[el.type] || 'layers';

      row.innerHTML = `
        <div class="flex items-center gap-2 min-w-0 flex-1 pr-1">
          <i data-lucide="${iconName}" class="w-3.5 h-3.5 ${isSelected ? 'text-indigo-400' : 'text-gray-500'} shrink-0"></i>
          <span class="truncate text-[11px]">${el.name || el.type}</span>
        </div>
        <div class="flex items-center gap-1 shrink-0">
          <button class="layer-vis-btn p-1 rounded text-gray-400 hover:text-white hover:bg-gray-700 transition" title="Toggle Visibility">
            <i data-lucide="${el.visible !== false ? 'eye' : 'eye-off'}" class="w-3 h-3"></i>
          </button>
          <button class="layer-del-btn p-1 rounded text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition" title="Delete Layer">
            <i data-lucide="trash-2" class="w-3 h-3"></i>
          </button>
        </div>
      `;

      row.addEventListener('click', e => {
        if (e.target.closest('.layer-vis-btn') || e.target.closest('.layer-del-btn')) return;
        state.isAllSelected = false;
        state.selectedElementId = el.id;
        syncInspectorUI();
        renderLayersList();
        updateFloatingToolbar();
        updateSelectAllButtonUI();
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

      row.querySelector('.layer-vis-btn').addEventListener('click', e => {
        e.stopPropagation();
        el.visible = el.visible === false ? true : false;
        renderLayersList();
        updateFloatingToolbar();
        if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      });

      row.querySelector('.layer-del-btn').addEventListener('click', e => {
        e.stopPropagation();
        deleteElement(el.id);
      });

      listEl.appendChild(row);
    }

    if (window.lucide) lucide.createIcons();
  }

  // + Add Elements Buttons Palette
  const btnAddTxt = document.getElementById('btn-add-text');
  if (btnAddTxt) {
    btnAddTxt.addEventListener('click', () => {
      pushHistory('Add Text');
      const newEl = {
        id: 'el_' + Date.now(),
        name: 'Custom Text',
        type: 'text',
        text: 'NEW HEADLINE TEXT',
        fontSize: 26,
        fontWeight: '800',
        fontFamily: 'Inter',
        color: '#ffffff',
        x: 220,
        y: 890,
        width: 440,
        height: 36,
        align: 'left',
        visible: true
      };
      state.canvasElements.push(newEl);
      state.selectedElementId = newEl.id;
      state.isAllSelected = false;
      state.template = 'custom_builder';
      syncInspectorUI();
      renderLayersList();
      updateFloatingToolbar();
      updateSelectAllButtonUI();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      showToast('Added Text element');
    });
  }

  const btnAddCard = document.getElementById('btn-add-card');
  if (btnAddCard) {
    btnAddCard.addEventListener('click', () => {
      pushHistory('Add Card Box');
      const newEl = {
        id: 'el_' + Date.now(),
        name: 'Card Container Box',
        type: 'shape',
        shape: 'rounded',
        x: 80,
        y: 860,
        width: 760,
        height: 140,
        fillColor: '#0b0f19',
        fillOpacity: 0.95,
        borderStyle: 'solid',
        borderColor: '#6366f1',
        borderWidth: 2,
        cornerRadius: 16,
        glow: 0,
        visible: true
      };
      state.canvasElements.unshift(newEl);
      state.selectedElementId = newEl.id;
      state.isAllSelected = false;
      state.template = 'custom_builder';
      syncInspectorUI();
      renderLayersList();
      updateFloatingToolbar();
      updateSelectAllButtonUI();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      showToast('Added Card Box');
    });
  }

  const btnAddPhoto = document.getElementById('btn-add-photo');
  if (btnAddPhoto) {
    btnAddPhoto.addEventListener('click', () => {
      // 1-Click: Open system file picker directly so user can pick any photo!
      const directUpload = document.getElementById('input-direct-image-upload');
      if (directUpload) {
        directUpload.click();
      }
    });
  }

  const btnAddBtn = document.getElementById('btn-add-button');
  if (btnAddBtn) {
    btnAddBtn.addEventListener('click', () => {
      pushHistory('Add CTA Button');
      const newEl = {
        id: 'el_' + Date.now(),
        name: 'Action Button',
        type: 'button',
        text: 'SHOP NOW ➔',
        btnStyle: 'gradient',
        bgColor: '#6366f1',
        textColor: '#ffffff',
        cornerRadius: 8,
        x: 660,
        y: 915,
        width: 150,
        height: 44,
        visible: true
      };
      state.canvasElements.push(newEl);
      state.selectedElementId = newEl.id;
      state.isAllSelected = false;
      state.template = 'custom_builder';
      syncInspectorUI();
      renderLayersList();
      updateFloatingToolbar();
      updateSelectAllButtonUI();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      showToast('Added CTA Button');
    });
  }

  const btnAddBadge = document.getElementById('btn-add-badge');
  if (btnAddBadge) {
    btnAddBadge.addEventListener('click', () => {
      pushHistory('Add Promo Badge');
      const newEl = {
        id: 'el_' + Date.now(),
        name: 'Promo Badge',
        type: 'badge',
        text: '🔥 BEST DEAL',
        badgeColor: 'accent',
        icon: 'fire',
        x: 220,
        y: 875,
        width: 120,
        height: 24,
        cornerRadius: 6,
        visible: true
      };
      state.canvasElements.push(newEl);
      state.selectedElementId = newEl.id;
      state.isAllSelected = false;
      state.template = 'custom_builder';
      syncInspectorUI();
      renderLayersList();
      updateFloatingToolbar();
      updateSelectAllButtonUI();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      showToast('Added Promo Badge');
    });
  }

  const btnAddStars = document.getElementById('btn-add-stars');
  if (btnAddStars) {
    btnAddStars.addEventListener('click', () => {
      pushHistory('Add 5-Star Rating');
      const newEl = {
        id: 'el_' + Date.now(),
        name: '5-Star Rating',
        type: 'stars',
        ratingText: '4.9 ★★★★★ (2.1k reviews)',
        starColor: '#f59e0b',
        textColor: '#ffffff',
        fontSize: 16,
        x: 220,
        y: 955,
        width: 260,
        height: 28,
        visible: true
      };
      state.canvasElements.push(newEl);
      state.selectedElementId = newEl.id;
      state.isAllSelected = false;
      state.template = 'custom_builder';
      syncInspectorUI();
      renderLayersList();
      updateFloatingToolbar();
      updateSelectAllButtonUI();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
      showToast('Added 5 Stars Rating');
    });
  }

  // 1-Click Starter Compositions
  document.querySelectorAll('.starter-layout-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.starter;
      if (!starterLayouts[type]) return;

      pushHistory(`Load ${btn.innerText.trim()}`);
      state.canvasElements = JSON.parse(JSON.stringify(starterLayouts[type]));
      state.selectedElementId = state.canvasElements[0]?.id || null;
      state.isAllSelected = false;
      state.template = 'custom_builder';
      document.querySelectorAll('.preset-card').forEach(c => c.classList.remove('active'));

      syncInspectorUI();
      renderLayersList();
      updateFloatingToolbar();
      updateSelectAllButtonUI();
      if (type === 'fb_movie') {
        setTotalDuration(20);
      } else if (type === 'fb_product') {
        setTotalDuration(15);
      }
      triggerReplay();
      showToast(`Loaded ${btn.innerText.trim()} layout`);
    });
  });

  // LocalStorage Saved Canvas Designs
  const CANVAS_STORAGE_KEY = 'lowerthird_canvas_designs';

  function getSavedCanvasDesigns() {
    try {
      const raw = localStorage.getItem(CANVAS_STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return [];
  }

  function renderSavedCanvasDesigns() {
    const list = getSavedCanvasDesigns();

    // 1. Render inside Templates Tab: #presets-saved-templates-list
    const presetsContainer = document.getElementById('presets-saved-templates-list');
    if (presetsContainer) {
      presetsContainer.innerHTML = '';
      if (list.length === 0) {
        const noTitle = window.i18n ? window.i18n.t('templates.no_custom_saved', 'No Custom Saved Templates Yet') : 'No Custom Saved Templates Yet';
        const noDesc = window.i18n ? window.i18n.t('templates.no_custom_saved_desc', 'Create your own design in Canvas Studio, click "Save Design", and it will appear right here!') : 'Create your own design in Canvas Studio, click "Save Design", and it will appear right here!';
        const openBtn = window.i18n ? window.i18n.t('templates.open_studio', '➕ Open Canvas Studio') : '➕ Open Canvas Studio';
        presetsContainer.innerHTML = `
          <div class="col-span-2 p-3 rounded-xl bg-dark-800/80 border border-dashed border-gray-700 text-center space-y-2">
            <div class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 mx-auto flex items-center justify-center font-bold text-sm">⭐</div>
            <div>
              <p class="text-xs text-gray-200 font-semibold">${noTitle}</p>
              <p class="text-[10.5px] text-gray-400 mt-0.5 leading-tight">${noDesc}</p>
            </div>
            <button type="button" class="btn-create-studio-shortcut px-3 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow transition">
              ${openBtn}
            </button>
          </div>
        `;
        presetsContainer.querySelector('.btn-create-studio-shortcut')?.addEventListener('click', () => {
          const bTab = document.querySelector('.tab-btn[data-tab="tab-builder"]');
          if (bTab) bTab.click();
        });
      } else {
        const useBtnText = window.i18n ? window.i18n.t('templates.btn_use', 'Use (បើក)') : 'Use (បើក)';
        list.forEach(item => {
          const card = document.createElement('div');
          card.className = 'p-2.5 rounded-xl bg-dark-800 border border-indigo-500/40 hover:border-indigo-400 transition flex flex-col justify-between shadow-md relative group';

          const hasMarquee = (item.elements || []).some(e => e.animation === 'marquee' || e.anim === 'marquee');
          const hasImage = (item.elements || []).some(e => e.type === 'image');
          const textEl = (item.elements || []).find(e => e.type === 'text');
          const fontUsed = textEl?.fontFamily || 'Inter';

          card.innerHTML = `
            <div>
              <div class="flex items-start justify-between gap-1 mb-1">
                <div class="flex items-center gap-1.5 min-w-0 flex-1">
                  <span class="w-5 h-5 rounded-md bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0">⭐</span>
                  <strong class="text-white text-xs font-semibold truncate block" title="${item.name}">${item.name}</strong>
                </div>
                <button class="btn-del-saved-template p-1 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded transition shrink-0" title="Delete Template">
                  <i data-lucide="trash-2" class="w-3 h-3"></i>
                </button>
              </div>

              <div class="text-[10px] text-gray-400 mb-1.5 truncate">
                ${item.elements.length} layers • ${item.date || 'Saved'}
              </div>

              <div class="flex flex-wrap gap-1 text-[9px] mb-2.5">
                <span class="px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-500/30 truncate max-w-[85px]">${fontUsed}</span>
                ${hasMarquee ? '<span class="px-1 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30">🏃 Run</span>' : ''}
                ${hasImage ? '<span class="px-1 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">🖼️ Pic</span>' : ''}
              </div>
            </div>

            <button class="btn-load-saved-template w-full py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-[11px] flex items-center justify-center gap-1 shadow transition mt-auto">
              <i data-lucide="play" class="w-3 h-3 fill-current"></i>
              <span>${useBtnText}</span>
            </button>
          `;

          // Load handler
          card.querySelector('.btn-load-saved-template').addEventListener('click', () => {
            pushHistory(`Load Saved Template ${item.name}`);
            state.canvasElements = JSON.parse(JSON.stringify(item.elements));
            state.selectedElementId = state.canvasElements[0]?.id || null;
            state.isAllSelected = false;
            state.template = 'custom_builder';

            // Auto-switch to Canvas Studio
            const bTab = document.querySelector('.tab-btn[data-tab="tab-builder"]');
            if (bTab) bTab.click();

            syncInspectorUI();
            renderLayersList();
            updateFloatingToolbar();
            updateSelectAllButtonUI();
            triggerReplay();
            showToast(`⭐ Loaded "${item.name}" into Canvas Studio!`);
          });

          // Delete handler
          card.querySelector('.btn-del-saved-template').addEventListener('click', e => {
            e.stopPropagation();
            if (confirm(`Delete saved template "${item.name}"?`)) {
              let cur = getSavedCanvasDesigns();
              cur = cur.filter(d => d.id !== item.id);
              localStorage.setItem(CANVAS_STORAGE_KEY, JSON.stringify(cur));
              renderSavedCanvasDesigns();
              showToast(`Deleted "${item.name}"`);
            }
          });

          presetsContainer.appendChild(card);
        });
      }
    }

    // 2. Also Render inside Canvas Studio bottom panel (canvas-saved-designs-list)
    const studioContainer = document.getElementById('canvas-saved-designs-list');
    if (studioContainer) {
      studioContainer.innerHTML = '';
      if (list.length === 0) {
        studioContainer.innerHTML = '<p class="text-[11px] text-gray-500 italic p-1">No custom saved designs yet. Click "Save Design" above!</p>';
      } else {
        list.forEach(item => {
          const div = document.createElement('div');
          div.className = 'flex items-center justify-between p-2 rounded-lg bg-dark-800 border border-gray-700 hover:border-indigo-500/50 transition cursor-pointer group';
          div.innerHTML = `
            <div class="flex-1 min-w-0 pr-2">
              <strong class="text-white text-xs font-semibold block truncate">${item.name}</strong>
              <span class="text-[10px] text-gray-400">${item.elements.length} elements • ${item.date}</span>
            </div>
            <div class="flex items-center gap-1">
              <button class="btn-load-design px-2 py-1 rounded bg-indigo-600/30 text-indigo-300 hover:bg-indigo-600 hover:text-white text-[10px] font-semibold transition">Load</button>
              <button class="btn-del-design p-1 rounded text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition" title="Delete">
                <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          `;

          div.querySelector('.btn-load-design').addEventListener('click', e => {
            e.stopPropagation();
            state.canvasElements = JSON.parse(JSON.stringify(item.elements));
            state.selectedElementId = state.canvasElements[0]?.id || null;
            state.template = 'custom_builder';
            syncInspectorUI();
            renderLayersList();
            updateFloatingToolbar();
            triggerReplay();
            showToast(`Loaded "${item.name}"`);
          });

          div.querySelector('.btn-del-design').addEventListener('click', e => {
            e.stopPropagation();
            if (confirm(`Delete design "${item.name}"?`)) {
              let cur = getSavedCanvasDesigns();
              cur = cur.filter(d => d.id !== item.id);
              localStorage.setItem(CANVAS_STORAGE_KEY, JSON.stringify(cur));
              renderSavedCanvasDesigns();
              showToast(`Deleted "${item.name}"`);
            }
          });

          studioContainer.appendChild(div);
        });
      }
    }

    if (window.lucide) lucide.createIcons();
  }

  // Create New Template button in Templates page
  const btnCreateNewTemplate = document.getElementById('btn-create-new-template');
  if (btnCreateNewTemplate) {
    btnCreateNewTemplate.addEventListener('click', () => {
      pushHistory('Create New Template');
      state.canvasElements = [
        {
          id: 'el_bar_' + Date.now(),
          name: 'Banner Card',
          type: 'shape',
          shape: 'rounded',
          x: 100,
          y: 870,
          width: 840,
          height: 80,
          fillColor: '#0b0f19',
          fillOpacity: 0.95,
          borderStyle: 'solid',
          borderColor: '#6366f1',
          borderWidth: 2,
          cornerRadius: 14,
          glow: 8,
          visible: true
        },
        {
          id: 'el_text_' + (Date.now() + 1),
          name: 'Main Khmer Headline',
          type: 'text',
          text: 'ព័ត៌មានទាន់ហេតុការណ៍ • ផ្សាយផ្ទាល់ ២៤ម៉ោងលើបណ្តាញសង្គម',
          fontSize: 26,
          fontWeight: '700',
          fontFamily: 'Kantumruy Pro',
          color: '#ffffff',
          x: 130,
          y: 892,
          width: 780,
          height: 36,
          align: 'left',
          animation: 'marquee',
          animSpeed: 90,
          animDir: 'left',
          marqueeGap: 80,
          visible: true
        }
      ];
      state.selectedElementId = state.canvasElements[1].id;
      state.isAllSelected = false;
      state.template = 'custom_builder';
      const bTab = document.querySelector('.tab-btn[data-tab="tab-builder"]');
      if (bTab) bTab.click();
      syncInspectorUI();
      renderLayersList();
      updateFloatingToolbar();
      updateSelectAllButtonUI();
      triggerReplay();
      showToast('Created new template in Canvas Studio!');
    });
  }

  // Save Canvas Template Button
  const btnSaveCanvasDesign = document.getElementById('btn-save-canvas-template');
  if (btnSaveCanvasDesign) {
    btnSaveCanvasDesign.addEventListener('click', () => {
      const name = prompt('Enter a name for your custom design (ដាក់ឈ្មោះពុម្ពគំរូរបស់អ្នក):', `My Custom Lower Third #${getSavedCanvasDesigns().length + 1}`);
      if (!name || !name.trim()) return;

      const newDesign = {
        id: 'design_' + Date.now(),
        name: name.trim(),
        date: new Date().toLocaleDateString(),
        elements: JSON.parse(JSON.stringify(state.canvasElements))
      };
      const list = getSavedCanvasDesigns();
      list.unshift(newDesign);
      try {
        localStorage.setItem(CANVAS_STORAGE_KEY, JSON.stringify(list));
      } catch (e) {}
      renderSavedCanvasDesigns();
      showToast(`⭐ Saved "${newDesign.name}" to Templates page!`);
    });
  }

  renderSavedCanvasDesigns();

  // Language Change Listener for Full Dynamic Re-rendering
  window.addEventListener('languageChanged', () => {
    if (typeof renderPresetCards === 'function') renderPresetCards();
    if (typeof renderSavedCanvasDesigns === 'function') renderSavedCanvasDesigns();
    if (typeof syncInspectorUI === 'function') syncInspectorUI();
    if (typeof renderLayersList === 'function') renderLayersList();
    if (typeof updateFloatingToolbar === 'function') updateFloatingToolbar();
    if (window.lucide) lucide.createIcons();
  });



  // ==========================================
  // ENHANCED MOTION TAB CONTROLS (10+8 MOTIONS)
  // ==========================================

  const motionInList = [
    { id: 'slide-left', label: 'Slide Left' },
    { id: 'slide-right', label: 'Slide Right' },
    { id: 'slide-up', label: 'Slide Up' },
    { id: 'slide-down', label: 'Slide Down' },
    { id: 'elastic-pop', label: 'Elastic Pop' },
    { id: 'zoom-fade', label: 'Zoom In' },
    { id: 'mask-wipe', label: 'Mask Wipe' },
    { id: 'flip-3d', label: '3D Flip' },
    { id: 'cyber-glitch', label: 'Cyber Glitch' },
    { id: 'smooth-fade', label: 'Smooth Fade' }
  ];

  const motionInChips = document.getElementById('motion-in-chips');
  if (motionInChips) {
    motionInList.forEach(m => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = `motion-chip px-1.5 py-1 rounded text-[11px] font-medium border border-gray-700 bg-dark-800 text-gray-300 hover:text-white hover:border-indigo-500/50 transition truncate text-center ${state.motionIn === m.id ? 'border-indigo-500 bg-indigo-900/40 text-indigo-300' : ''}`;
      chip.textContent = m.label;
      chip.dataset.id = m.id;
      chip.addEventListener('click', () => {
        setMotionIn(m.id);
        triggerReplay();
      });
      motionInChips.appendChild(chip);
    });
  }

  function setMotionIn(mId) {
    state.motionIn = mId;
    const selectIn = document.getElementById('select-motion-in');
    if (selectIn) selectIn.value = mId;

    document.querySelectorAll('.motion-chip').forEach(c => {
      if (c.dataset.id === mId) {
        c.className = 'motion-chip px-1.5 py-1 rounded text-[11px] font-medium border border-indigo-500 bg-indigo-900/40 text-indigo-300 transition truncate text-center';
      } else {
        c.className = 'motion-chip px-1.5 py-1 rounded text-[11px] font-medium border border-gray-700 bg-dark-800 text-gray-300 hover:text-white hover:border-indigo-500/50 transition truncate text-center';
      }
    });
  }

  const selectMotionIn = document.getElementById('select-motion-in');
  if (selectMotionIn) {
    selectMotionIn.addEventListener('change', e => {
      setMotionIn(e.target.value);
      triggerReplay();
    });
  }

  const selectMotionOut = document.getElementById('select-motion-out');
  if (selectMotionOut) {
    selectMotionOut.addEventListener('change', e => {
      state.motionOut = e.target.value;
      triggerReplay();
    });
  }

  const selectMotionEase = document.getElementById('select-motion-ease');
  if (selectMotionEase) {
    selectMotionEase.addEventListener('change', e => {
      state.motionEase = e.target.value;
      triggerReplay();
    });
  }

  const btnReplayMotion = document.getElementById('btn-replay-motion');
  if (btnReplayMotion) {
    btnReplayMotion.addEventListener('click', () => {
      triggerReplay();
    });
  }

  // Stage Background Selector
  const stageBgVideo = document.getElementById('stage-bg-video');
  const stageBgImage = document.getElementById('stage-bg-image');
  const canvasContainer = document.getElementById('canvas-container');

  function applyStageBackground(bg) {
    if (!canvasContainer || !canvas) return;
    stageBgVideo.classList.add('hidden');
    stageBgImage.classList.add('hidden');
    stageBgVideo.pause();

    // Reset direct background styles
    canvasContainer.style.backgroundColor = '';
    canvas.style.backgroundColor = '';

    if (bg === 'checkerboard' || bg === 'alpha') {
      canvasContainer.className = 'flex-1 min-h-0 min-w-0 p-4 flex items-center justify-center overflow-hidden relative checkerboard-pattern';
      canvas.style.backgroundColor = 'transparent';
    } else if (bg === 'green') {
      canvasContainer.className = 'flex-1 min-h-0 min-w-0 p-4 flex items-center justify-center overflow-hidden relative';
      canvasContainer.style.backgroundColor = '#08090d';
      canvas.style.backgroundColor = '#00ff00';
    } else if (bg === 'dark') {
      canvasContainer.className = 'flex-1 min-h-0 min-w-0 p-4 flex items-center justify-center overflow-hidden relative';
      canvasContainer.style.backgroundColor = '#08090d';
      canvas.style.backgroundColor = '#000000';
    } else if (bg === 'light') {
      canvasContainer.className = 'flex-1 min-h-0 min-w-0 p-4 flex items-center justify-center overflow-hidden relative';
      canvasContainer.style.backgroundColor = '#e2e8f0';
      canvas.style.backgroundColor = '#ffffff';
    } else if (bg === 'sample-video') {
      canvasContainer.className = 'flex-1 min-h-0 min-w-0 p-4 flex items-center justify-center overflow-hidden relative';
      canvasContainer.style.backgroundColor = '#000000';
      canvas.style.backgroundColor = 'transparent';
      stageBgImage.src = 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1920&q=80';
      stageBgImage.classList.remove('hidden');
    }
  }

  document.querySelectorAll('.stage-bg-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.stage-bg-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyStageBackground(btn.dataset.bg);
    });
  });

  // Custom User Video/Image Upload for Background Testing
  document.getElementById('input-custom-bg').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    canvasContainer.className = 'flex-1 min-h-0 min-w-0 p-4 flex items-center justify-center overflow-hidden relative';
    canvasContainer.style.backgroundColor = '#000000';
    canvas.style.backgroundColor = 'transparent';

    document.querySelectorAll('.stage-bg-btn').forEach(b => b.classList.remove('active'));

    if (file.type.startsWith('video/')) {
      stageBgImage.classList.add('hidden');
      stageBgVideo.src = url;
      stageBgVideo.classList.remove('hidden');
      stageBgVideo.play();
    } else {
      stageBgVideo.classList.add('hidden');
      stageBgVideo.pause();
      stageBgImage.src = url;
      stageBgImage.classList.remove('hidden');
    }
    fitCanvas();
  });

  // Dynamic Responsive Canvas Fitting
  function fitCanvas() {
    if (!canvasContainer || !canvas) return;

    const pad = 32;
    const availW = canvasContainer.clientWidth - pad;
    const availH = canvasContainer.clientHeight - pad;
    if (availW <= 50 || availH <= 50) return;

    const targetRatio = 1920 / 1080;
    const currentRatio = availW / availH;

    let displayW, displayH;
    if (zoomMode === 'fit') {
      if (currentRatio > targetRatio) {
        displayH = availH;
        displayW = availH * targetRatio;
      } else {
        displayW = availW;
        displayH = availW / targetRatio;
      }
    } else {
      const scale = parseFloat(zoomMode);
      displayW = 1920 * scale * 0.55;
      displayH = 1080 * scale * 0.55;
    }

    const roundW = Math.round(displayW);
    const roundH = Math.round(displayH);

    canvas.style.width = `${roundW}px`;
    canvas.style.height = `${roundH}px`;

    if (stageBgVideo) {
      stageBgVideo.style.width = `${roundW}px`;
      stageBgVideo.style.height = `${roundH}px`;
    }
    if (stageBgImage) {
      stageBgImage.style.width = `${roundW}px`;
      stageBgImage.style.height = `${roundH}px`;
    }
  }

  window.addEventListener('resize', fitCanvas);

  const selectZoom = document.getElementById('select-zoom');
  if (selectZoom) {
    selectZoom.addEventListener('change', e => {
      zoomMode = e.target.value;
      fitCanvas();
    });
  }

  // 4K Ultra HD vs 1080p Resolution Switcher
  const selectRes = document.getElementById('select-resolution');
  if (selectRes) {
    selectRes.addEventListener('change', e => {
      const mode = e.target.value;
      state.resolution = mode;
      if (mode === '4k') {
        canvas.width = 3840;
        canvas.height = 2160;
        showToast('💎 4K Ultra HD (3840 × 2160) Enabled • 60fps Broadcast Mode');
      } else {
        canvas.width = 1920;
        canvas.height = 1080;
        showToast('📺 1080p Full HD (1920 × 1080) Enabled');
      }
      fitCanvas();
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
  }

  // Dynamic FX & Shimmer Toggles
  const toggleLightSweep = document.getElementById('toggle-light-sweep');
  if (toggleLightSweep) {
    toggleLightSweep.addEventListener('change', e => {
      state.enableLightSweep = e.target.checked;
      showToast(e.target.checked ? '✨ Dynamic Light Sweep Enabled' : 'Light Sweep Disabled');
      if (!isPlaying) Engine.renderFrame(ctx, state, pausedAtTime);
    });
  }

  const toggleAutoWidth = document.getElementById('toggle-auto-width');
  if (toggleAutoWidth) {
    toggleAutoWidth.addEventListener('change', e => {
      state.autoResponsiveWidth = e.target.checked;
      showToast(e.target.checked ? '📐 Auto-Responsive Width Enabled' : 'Fixed Width Mode');
    });
  }

  // Playback Loop & Transport
  const scrubber = document.getElementById('timeline-scrubber');
  const timeCurrentEl = document.getElementById('time-current');
  const btnPlayPause = document.getElementById('btn-play-pause');
  const textPlayPause = document.getElementById('text-play-pause');
  const iconPlayPause = document.getElementById('icon-play-pause');
  const btnReplay = document.getElementById('btn-replay');
  const btnLoopToggle = document.getElementById('btn-loop-toggle');

  function triggerReplay() {
    playbackStartTime = performance.now();
    isPlaying = true;
    updatePlayPauseUI();
  }

  function updatePlayPauseUI() {
    if (isPlaying) {
      textPlayPause.textContent = window.i18n ? window.i18n.t('timeline.pause', 'Pause') : 'Pause';
      iconPlayPause.setAttribute('data-lucide', 'pause');
    } else {
      textPlayPause.textContent = window.i18n ? window.i18n.t('timeline.play', 'Play Preview') : 'Play Preview';
      iconPlayPause.setAttribute('data-lucide', 'play');
    }
    if (window.lucide) lucide.createIcons();
  }

  btnPlayPause.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      const totalDur = state.durIn + state.durHold + state.durOut;
      playbackStartTime = performance.now() - (pausedAtTime * 1000);
    }
    updatePlayPauseUI();
  });

  btnReplay.addEventListener('click', triggerReplay);

  btnLoopToggle.addEventListener('click', () => {
    isLooping = !isLooping;
    btnLoopToggle.classList.toggle('text-indigo-400', isLooping);
    btnLoopToggle.classList.toggle('text-gray-400', !isLooping);
  });

  scrubber.addEventListener('input', e => {
    const totalDur = state.durIn + state.durHold + state.durOut;
    const seekTime = (parseFloat(e.target.value) / 1000) * totalDur;
    pausedAtTime = seekTime;
    isPlaying = false;
    updatePlayPauseUI();
    Engine.renderFrame(ctx, state, seekTime);
    timeCurrentEl.textContent = `${seekTime.toFixed(2)}s`;
  });

  // Main Animation Loop
  function animationLoop(timestamp) {
    if (!activeExportSession) {
      const totalDur = state.durIn + state.durHold + state.durOut;

      if (isPlaying) {
        let elapsed = (timestamp - playbackStartTime) / 1000;

        if (elapsed > totalDur) {
          if (isLooping) {
            playbackStartTime = timestamp;
            elapsed = 0;
          } else {
            elapsed = totalDur;
            isPlaying = false;
            updatePlayPauseUI();
          }
        }

        pausedAtTime = elapsed;
        scrubber.value = Math.round((elapsed / totalDur) * 1000);
        timeCurrentEl.textContent = `${elapsed.toFixed(2)}s`;

        Engine.renderFrame(ctx, state, elapsed);
      }
    }

    requestAnimationFrame(animationLoop);
  }

  // Export Snapshot PNG
  document.getElementById('btn-export-png').addEventListener('click', () => {
    state.isExporting = true;
    const peakTime = state.durIn + (state.durHold / 2);
    Engine.renderFrame(ctx, state, peakTime);
    Exporter.exportSnapshotPNG(canvas, `lower_third_${state.template}_snapshot.png`);
    state.isExporting = false;
    Engine.renderFrame(ctx, state, peakTime);
  });

  // Export Transparent WebM Video Modal Handlers
  const exportModal = document.getElementById('export-modal');
  const exportProgressBar = document.getElementById('export-progress-bar');
  const exportFrameCount = document.getElementById('export-frame-count');
  const exportPercent = document.getElementById('export-percent');
  const exportModalSpinner = document.getElementById('export-modal-spinner');
  const exportModalCheck = document.getElementById('export-modal-check');
  const exportModalTitle = document.getElementById('export-modal-title');
  const exportModalDesc = document.getElementById('export-modal-desc');
  const btnCancelExport = document.getElementById('btn-cancel-export');

  document.getElementById('btn-export-webm').addEventListener('click', async () => {
    isPlaying = false;
    state.isExporting = true;
    updatePlayPauseUI();

    exportModal.classList.remove('hidden');
    exportModalSpinner.classList.remove('hidden');
    exportModalCheck.classList.add('hidden');
    exportModalTitle.textContent = 'Rendering Alpha Video...';
    exportModalDesc.textContent = 'Encoding transparent 60fps WebM video with VP9 alpha channel.';
    exportProgressBar.style.width = '0%';
    exportPercent.textContent = '0%';

    activeExportSession = await Exporter.exportTransparentVideo(
      canvas,
      state,
      (currentFrame, totalFrames, percent) => {
        exportProgressBar.style.width = `${percent}%`;
        exportPercent.textContent = `${percent}%`;
        exportFrameCount.textContent = `Frame ${currentFrame} / ${totalFrames}`;
      },
      () => {
        state.isExporting = false;
        exportModalSpinner.classList.add('hidden');
        exportModalCheck.classList.remove('hidden');
        exportModalTitle.textContent = 'Export Complete!';
        exportModalDesc.textContent = 'Transparent WebM video has been downloaded directly to your computer.';
        setTimeout(() => {
          exportModal.classList.add('hidden');
          activeExportSession = null;
          triggerReplay();
        }, 1800);
      },
      err => {
        state.isExporting = false;
        alert(err);
        exportModal.classList.add('hidden');
        activeExportSession = null;
      }
    );
  });

  // Green Screen Video Export for CapCut Mobile Chroma Key
  const btnExportGreen = document.getElementById('btn-export-green-video');
  if (btnExportGreen) {
    btnExportGreen.addEventListener('click', async () => {
      isPlaying = false;
      state.isExporting = true;
      state.greenScreenExport = true;
      updatePlayPauseUI();

      exportModal.classList.remove('hidden');
      exportModalSpinner.classList.remove('hidden');
      exportModalCheck.classList.add('hidden');
      exportModalTitle.textContent = 'Rendering Green Screen Video...';
      exportModalDesc.textContent = 'Encoding 60fps video with pure #00ff00 Green Screen background for CapCut Chroma Key.';
      exportProgressBar.style.width = '0%';
      exportPercent.textContent = '0%';

      activeExportSession = await Exporter.exportTransparentVideo(
        canvas,
        state,
        (currentFrame, totalFrames, percent) => {
          exportProgressBar.style.width = `${percent}%`;
          exportPercent.textContent = `${percent}%`;
          exportFrameCount.textContent = `Frame ${currentFrame} / ${totalFrames}`;
        },
        () => {
          state.isExporting = false;
          state.greenScreenExport = false;
          exportModalSpinner.classList.add('hidden');
          exportModalCheck.classList.remove('hidden');
          exportModalTitle.textContent = 'Export Complete!';
          exportModalDesc.textContent = 'Green Screen video downloaded! Use "Remove BG -> Chroma Key" in CapCut on your phone.';
          setTimeout(() => {
            exportModal.classList.add('hidden');
            activeExportSession = null;
            triggerReplay();
          }, 2000);
        },
        err => {
          state.isExporting = false;
          state.greenScreenExport = false;
          alert(err);
          exportModal.classList.add('hidden');
          activeExportSession = null;
        }
      );
    });
  }

  btnCancelExport.addEventListener('click', () => {
    state.isExporting = false;
    state.greenScreenExport = false;
    if (activeExportSession) {
      activeExportSession.cancel();
      activeExportSession = null;
    }
    exportModal.classList.add('hidden');
    triggerReplay();
  });

  // OBS Mode Modal
  const obsModal = document.getElementById('obs-modal');
  const obsUrlInput = document.getElementById('obs-url-input');
  document.getElementById('btn-obs-mode').addEventListener('click', () => {
    obsUrlInput.value = `${window.location.origin}${window.location.pathname}?obs=1&template=${state.template}`;
    obsModal.classList.remove('hidden');
  });
  document.getElementById('btn-close-obs').addEventListener('click', () => {
    obsModal.classList.add('hidden');
  });
  document.getElementById('btn-copy-obs-url').addEventListener('click', () => {
    obsUrlInput.select();
    navigator.clipboard.writeText(obsUrlInput.value);
    document.getElementById('btn-copy-obs-url').innerHTML = `<i data-lucide="check" class="w-3.5 h-3.5"></i> Copied!`;
    if (window.lucide) lucide.createIcons();
    setTimeout(() => {
      document.getElementById('btn-copy-obs-url').innerHTML = `<i data-lucide="copy" class="w-3.5 h-3.5"></i> Copy`;
      if (window.lucide) lucide.createIcons();
    }, 2000);
  });

  // Check if loaded with ?obs=1 parameter (Direct Clean Browser Source Mode)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('obs') === '1') {
    document.querySelector('header').style.display = 'none';
    document.querySelector('aside').style.display = 'none';
    document.querySelector('.h-11').style.display = 'none';
    document.querySelector('.h-20').style.display = 'none';
    canvasContainer.className = 'w-screen h-screen flex items-center justify-center p-0 m-0 bg-transparent';
    canvas.className = 'w-full h-full object-contain';
    if (urlParams.get('template')) {
      state.template = urlParams.get('template');
    }
  }

  // Initial Sync and Start
  updateDimensions();
  syncStateToUI();
  syncInspectorUI();
  renderLayersList();
  updatePhaseMarkers();
  fitCanvas();
  setTimeout(fitCanvas, 50);
  requestAnimationFrame(animationLoop);

});
