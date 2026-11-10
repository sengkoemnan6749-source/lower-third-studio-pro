# LowerThird Studio Pro 🎬

A modern, high-production-value Motion Graphic Lower Third generator with live preview and **true alpha channel transparency**.

---

## ⚡ Quick Start

### Option A: One-Click Launch (Windows)
Double-click [`start.bat`](start.bat) in this folder. It starts the local server and automatically opens the studio in your browser.

### Option B: Terminal Command
```bash
python server.py
```
Then navigate to:
👉 **`http://localhost:8080`**

---

## 🌟 Key Features

1. **Native 1920×1080 (Full HD) 60 FPS Vector Motion Engine**:
   - Crisp rendering on HTML5 Canvas with buttery smooth 60fps animations.
2. **📸 Multi-Image Support (Upload up to 3 Custom Photos)**:
   - **Slot 1 (Hero / Front Product / Avatar)**
   - **Slot 2 (Angle 2 / Detail / After / Logo)**
   - **Slot 3 (Action / QR Code / Badge)**
3. **19 Production-Ready Design Templates (Zero Text-Only)**:
   - **🛍️ Dual Product Angles (2 Images)**: Side-by-side Hero shot + Detail angle, 5-star rating, price tag, and *BUY NOW ➔* button.
   - **⚡ Before & After (2 Images)**: Side-by-side transformation with Before/After badge overlays, animated divider arrow, and transformation results.
   - **📸 Triple Photo Gallery (3 Images)**: 3 staggered photo thumbnails sliding in with portfolio specs and brand badge.
   - **📲 Product + QR Code (2 Images)**: Hero product photo + scannable QR code box with glowing brackets and *SCAN TO BUY* banner.
   - **🛒 Product Card & Stars**: E-Commerce showcase with photo thumbnail, 5 gold rating stars (5.0), price tag, and *SHOP NOW ➔* pill button.
   - **🔥 Flash Sale & Promo Code**: High-urgency sale banner with dashed discount code coupon box (e.g. *CODE: DEAL40*), discount title, and free-shipping ticker.
   - **💎 Luxury Tech Showcase**: Apple/Keynote aesthetic with ultra-sleek pill, delicate feature line, and minimalist *From $899* order pill.
   - **Modern Glass**: Clean glassmorphism badge with animated multi-color brand accent bar.
   - **Broadcast News**: Alert banner (e.g. *BREAKING NEWS* or *LIVE*), bold uppercase headline, and contrast ticker subtitle.
   - **Social Creator**: Avatar/photo badge, verified checkmark, username `@handle`, and follower count.
   - **Cyberpunk HUD**: Futuristic angled cyber-brackets, glowing neon borders, tech micro-dots, and monospace subtitles.
   - **Cinematic Serif**: Elegant luxury serif design with animated gold/silver divider lines.
   - **Vibrant Ribbon**: Fluid multi-stop gradient ribbon with soft drop shadow and slide entrance.
   - **Sports ESPN**: Slanted athletic parallelograms with team/jersey badge, bold athletic font, and dynamic speed stripe.
   - **Documentary Minimal**: High-end cinematic vertical accent needle line with subtle rightward gradient fade.
   - **Studio Podcast**: Rounded dual host/guest pill with **live animated audio waveform visualizer**.
   - **Neon Synthwave**: 80s retro arcade double neon tube glow with pulsing micro-dots.
   - **Swiss Split Block**: High-contrast Bauhaus geometric split blocks with dual-tone layout.
   - **YouTube Subscribe**: Creator lower third with avatar, Subscribe button, and **animated ringing notification bell**.
4. **True Transparent Alpha Video Export (WebM VP9)**:
   - One-click export of transparent video files (`.webm` with 8-bit RGBA alpha).
   - **Zero green screen keying required!** Drag and drop directly onto timelines in **Premiere Pro**, **DaVinci Resolve**, **Final Cut Pro**, or **CapCut**.
5. **Snapshot PNG**:
   - Instant 1920×1080 transparent PNG export at the peak hold moment.
6. **OBS Studio & vMix Live Browser Source**:
   - Includes a clean overlay mode (`http://localhost:8080?obs=1`) for live streamers and broadcasters.
7. **Background Footage Simulator**:
   - Preview with a transparent alpha checkerboard, solid dark/light backgrounds, sample footage, or **upload your own video/photo** to test how the lower third looks on your footage before exporting.
8. **Full Customization**:
   - Title, subtitle, badge tag.
   - 12 Curated Fonts with 1-click Quick Font Chips right in the Content tab.
   - Brand primary color, accent glow, card background color & opacity, text color.
   - Timing controls: Intro duration, Hold time, Outro duration.
   - Screen placement presets (Bottom-Left, Bottom-Center, Bottom-Right) with margin adjusters.

---

## 🛠 File Structure

```
e:\lower_third\
├── index.html       # Studio web application UI
├── css/
│   ├── style.css    # Custom styles & alpha checkerboard pattern
│   └── tailwind.min.css # Standalone local Tailwind CSS
├── js/
│   ├── engine.js    # Canvas vector motion graphics engine (1920x1080, 19 templates)
│   ├── recorder.js  # Transparent WebM (VP9 alpha) & PNG export engine
│   ├── app.js       # UI state controller, 19 presets, and timeline loop
│   └── lucide.min.js# Local vector icons
├── server.py        # Local Python HTTP server with auto-browser launch
├── start.bat        # Windows 1-click launcher
└── README.md        # Documentation
```
