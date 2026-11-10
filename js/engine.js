/**
 * LowerThird Studio - Canvas Motion Graphic Rendering Engine
 * Native 1920x1080 Full HD 60fps Vector Renderer
 * Includes 12 Diverse Production-Ready Motion Graphic Templates
 */

const Engine = (function () {

  // Easing utilities
  const Easing = {
    linear: t => t,
    easeOutQuad: t => t * (2 - t),
    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    easeOutBack: (t, s = 1.70158) => {
      t = t - 1;
      return (t * t * ((s + 1) * t + s) + 1);
    },
    easeInQuad: t => t * t,
    easeInCubic: t => t * t * t,
    easeInBack: (t, s = 1.70158) => t * t * ((s + 1) * t - s),
    easeOutElastic: t => {
      if (t === 0) return 0;
      if (t === 1) return 1;
      const p = 0.3;
      return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
    },
    easeOutFluid: t => {
      // Apple-style fluid overshoot & spring settle
      if (t >= 1) return 1;
      return 1 - Math.pow(1 - t, 3.5) * Math.cos(t * Math.PI * 0.5);
    }
  };

  // Helper to draw rounded rectangle
  function roundRect(ctx, x, y, width, height, radius) {
    if (ctx.roundRect) {
      ctx.beginPath();
      ctx.roundRect(x, y, width, height, radius);
      ctx.closePath();
      return;
    }
    if (width < 2 * radius) radius = width / 2;
    if (height < 2 * radius) radius = height / 2;
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  }

  // Helper to draw angled tech polygon
  function techBox(ctx, x, y, width, height, cut = 14) {
    ctx.beginPath();
    ctx.moveTo(x + cut, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y + height - cut);
    ctx.lineTo(x + width - cut, y + height);
    ctx.lineTo(x, y + height);
    ctx.lineTo(x, y + cut);
    ctx.closePath();
  }

  // Helper to draw slanted athletic parallelogram
  function drawParallelogram(ctx, x, y, width, height, skew = 22) {
    ctx.beginPath();
    ctx.moveTo(x + skew, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width - skew, y + height);
    ctx.lineTo(x, y + height);
    ctx.closePath();
  }

  // Helper to draw any card shape for the custom template builder
  function drawCardPath(ctx, x, y, width, height, shape = 'rounded', radius = 14) {
    if (shape === 'pill') {
      roundRect(ctx, x, y, width, height, Math.min(width, height) / 2);
    } else if (shape === 'sharp' || shape === 'rect') {
      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.closePath();
    } else if (shape === 'circle' || shape === 'ellipse') {
      ctx.beginPath();
      ctx.ellipse(x + width / 2, y + height / 2, Math.max(1, width / 2), Math.max(1, height / 2), 0, 0, Math.PI * 2);
      ctx.closePath();
    } else if (shape === 'triangle') {
      ctx.beginPath();
      ctx.moveTo(x + width / 2, y);
      ctx.lineTo(x + width, y + height);
      ctx.lineTo(x, y + height);
      ctx.closePath();
    } else if (shape === 'diamond') {
      ctx.beginPath();
      ctx.moveTo(x + width / 2, y);
      ctx.lineTo(x + width, y + height / 2);
      ctx.lineTo(x + width / 2, y + height);
      ctx.lineTo(x, y + height / 2);
      ctx.closePath();
    } else if (shape === 'star') {
      const cx = x + width / 2;
      const cy = y + height / 2;
      const outerR = Math.min(width, height) / 2;
      const innerR = outerR * 0.42;
      ctx.beginPath();
      for (let i = 0; i < 10; i++) {
        const r = i % 2 === 0 ? outerR : innerR;
        const a = (i * Math.PI) / 5 - Math.PI / 2;
        const px = cx + r * Math.cos(a);
        const py = cy + r * Math.sin(a);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    } else if (shape === 'arrow') {
      const headW = Math.min(width * 0.4, height);
      const stemH = height * 0.45;
      const stemY = y + (height - stemH) / 2;
      ctx.beginPath();
      ctx.moveTo(x, stemY);
      ctx.lineTo(x + width - headW, stemY);
      ctx.lineTo(x + width - headW, y);
      ctx.lineTo(x + width, y + height / 2);
      ctx.lineTo(x + width - headW, y + height);
      ctx.lineTo(x + width - headW, stemY + stemH);
      ctx.lineTo(x, stemY + stemH);
      ctx.closePath();
    } else if (shape === 'line' || shape === 'divider') {
      roundRect(ctx, x, y, width, Math.max(3, height), Math.min(height / 2, 4));
    } else if (shape === 'parallelogram') {
      drawParallelogram(ctx, x, y, width, height, 22);
    } else if (shape === 'cyber') {
      techBox(ctx, x, y, width, height, 16);
    } else if (shape === 'hexagon') {
      const cut = Math.min(width, height) * 0.25;
      ctx.beginPath();
      ctx.moveTo(x + cut, y);
      ctx.lineTo(x + width - cut, y);
      ctx.lineTo(x + width, y + height / 2);
      ctx.lineTo(x + width - cut, y + height);
      ctx.lineTo(x + cut, y + height);
      ctx.lineTo(x, y + height / 2);
      ctx.closePath();
    } else {
      roundRect(ctx, x, y, width, height, Math.max(0, radius));
    }
  }

  // Helper to draw photo masks in custom shapes (supports rectangular and square)
  function drawPhotoShape(ctx, px, py, wOrSize, hOrShape, shapeOrRadius, radius) {
    let width, height, shape, rad;
    if (typeof hOrShape === 'number') {
      width = wOrSize;
      height = hOrShape;
      shape = shapeOrRadius || 'rounded';
      rad = radius !== undefined ? radius : 10;
    } else {
      width = wOrSize;
      height = wOrSize;
      shape = hOrShape || 'rounded';
      rad = shapeOrRadius !== undefined ? shapeOrRadius : 10;
    }

    if (shape === 'none') {
      ctx.beginPath();
      ctx.rect(px, py, width, height);
      ctx.closePath();
    } else if (shape === 'circle') {
      const r = Math.min(width, height) / 2;
      ctx.beginPath();
      ctx.arc(px + width / 2, py + height / 2, r, 0, Math.PI * 2);
      ctx.closePath();
    } else if (shape === 'ellipse') {
      ctx.beginPath();
      ctx.ellipse(px + width / 2, py + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
      ctx.closePath();
    } else if (shape === 'sharp') {
      ctx.beginPath();
      ctx.rect(px, py, width, height);
      ctx.closePath();
    } else if (shape === 'hexagon') {
      const cut = Math.min(width, height) * 0.22;
      ctx.beginPath();
      ctx.moveTo(px + cut, py);
      ctx.lineTo(px + width - cut, py);
      ctx.lineTo(px + width, py + cut);
      ctx.lineTo(px + width, py + height - cut);
      ctx.lineTo(px + width - cut, py + height);
      ctx.lineTo(px + cut, py + height);
      ctx.lineTo(px, py + height - cut);
      ctx.lineTo(px, py + cut);
      ctx.closePath();
    } else if (shape === 'cyber') {
      techBox(ctx, px, py, width, height, 12);
    } else {
      roundRect(ctx, px, py, width, height, Math.max(0, rad));
    }
  }

  // Helper to draw badge vector icons
  function drawBadgeIcon(ctx, iconName, x, y, size, color) {
    ctx.save();
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.5;

    if (iconName === 'sparkles') {
      ctx.beginPath();
      ctx.moveTo(x + size / 2, y);
      ctx.quadraticCurveTo(x + size / 2, y + size / 2, x + size, y + size / 2);
      ctx.quadraticCurveTo(x + size / 2, y + size / 2, x + size / 2, y + size);
      ctx.quadraticCurveTo(x + size / 2, y + size / 2, x, y + size / 2);
      ctx.quadraticCurveTo(x + size / 2, y + size / 2, x + size / 2, y);
      ctx.fill();
    } else if (iconName === 'star') {
      drawStar(ctx, x + size / 2, y + size / 2, 5, size / 2, size / 4, color);
    } else if (iconName === 'fire') {
      ctx.beginPath();
      ctx.moveTo(x + size * 0.5, y);
      ctx.bezierCurveTo(x + size * 0.9, y + size * 0.4, x + size * 0.8, y + size, x + size * 0.5, y + size);
      ctx.bezierCurveTo(x + size * 0.2, y + size, x + size * 0.1, y + size * 0.4, x + size * 0.5, y);
      ctx.fill();
    } else if (iconName === 'check') {
      ctx.beginPath();
      ctx.moveTo(x + 2, y + size * 0.55);
      ctx.lineTo(x + size * 0.42, y + size * 0.85);
      ctx.lineTo(x + size - 2, y + size * 0.18);
      ctx.stroke();
    } else if (iconName === 'shield') {
      ctx.beginPath();
      ctx.moveTo(x + 2, y + 2);
      ctx.lineTo(x + size - 2, y + 2);
      ctx.lineTo(x + size - 2, y + size * 0.55);
      ctx.quadraticCurveTo(x + size * 0.5, y + size, x + size * 0.5, y + size);
      ctx.quadraticCurveTo(x + 2, y + size * 0.55, x + 2, y + size * 0.55);
      ctx.closePath();
      ctx.fill();
    } else if (iconName === 'tag') {
      ctx.beginPath();
      ctx.moveTo(x + 2, y + size * 0.4);
      ctx.lineTo(x + size * 0.4, y + 2);
      ctx.lineTo(x + size - 2, y + 2);
      ctx.lineTo(x + size - 2, y + size - 2);
      ctx.lineTo(x + 2, y + size - 2);
      ctx.closePath();
      ctx.stroke();
    }
    ctx.restore();
  }

  // Helper to draw animated mini audio visualizer waveform
  function drawWaveform(ctx, x, y, time, color) {
    const barCount = 5;
    const barWidth = 3;
    const gap = 3;
    for (let i = 0; i < barCount; i++) {
      const h = 5 + Math.abs(Math.sin(time * 9 + i * 1.3)) * 14;
      ctx.fillStyle = color;
      roundRect(ctx, x + i * (barWidth + gap), y + (22 - h) / 2, barWidth, h, 1.5);
      ctx.fill();
    }
  }

  // Helper to draw notification bell
  function drawBell(ctx, x, y, size, ringAngle, color) {
    ctx.save();
    ctx.translate(x + size / 2, y + 2);
    ctx.rotate(ringAngle);
    ctx.translate(-size / 2, -2);
    ctx.fillStyle = color;

    // Bell dome
    ctx.beginPath();
    ctx.arc(size / 2, size * 0.45, size * 0.36, Math.PI, 0);
    ctx.lineTo(size * 0.88, size * 0.72);
    ctx.lineTo(size * 0.12, size * 0.72);
    ctx.closePath();
    ctx.fill();

    // Bell lip
    roundRect(ctx, size * 0.08, size * 0.70, size * 0.84, 4, 2);
    ctx.fill();

    // Clapper
    ctx.beginPath();
    ctx.arc(size / 2, size * 0.84, size * 0.14, 0, Math.PI);
    ctx.fill();

    ctx.restore();
  }

  // Helper to draw golden rating star
  function drawStar(ctx, cx, cy, outerRadius, innerRadius, color) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / 5;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < 5; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  // Helper to draw clean vector QR code placeholder
  function drawQRPlaceholder(ctx, x, y, size, color) {
    ctx.save();
    ctx.fillStyle = '#ffffff';
    roundRect(ctx, x, y, size, size, 8);
    ctx.fill();

    function drawFinder(fx, fy, fsize) {
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 3;
      ctx.strokeRect(fx, fy, fsize, fsize);
      ctx.fillStyle = '#000000';
      ctx.fillRect(fx + 3, fy + 3, fsize - 6, fsize - 6);
    }
    const fsize = size * 0.28;
    drawFinder(x + 5, y + 5, fsize);
    drawFinder(x + size - fsize - 5, y + 5, fsize);
    drawFinder(x + 5, y + size - fsize - 5, fsize);

    ctx.fillStyle = '#000000';
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if ((i * 3 + j * 2) % 3 === 0) {
          ctx.fillRect(x + size * 0.40 + i * 4, y + size * 0.38 + j * 4, 3, 3);
        }
      }
    }
    ctx.restore();
  }

  // Convert hex color to rgba
  function hexToRgba(hex, alpha = 1) {
    if (!hex) return `rgba(255,255,255,${alpha})`;
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map(c => c + c).join('');
    }
    const num = parseInt(hex, 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  /**
   * CANVA / CAPCUT ON-CANVAS STUDIO ENGINE
   * Renders freeform interactive elements (Shapes, Text, Photos, Buttons, Badges, Stars)
   */

  function renderShapeElement(ctx, el, state, t) {
    const shape = el.shape || 'rounded';
    const radius = el.cornerRadius !== undefined ? parseInt(el.cornerRadius, 10) : 14;
    const borderStyle = el.borderStyle || 'solid';
    const borderWidth = el.borderWidth !== undefined ? parseFloat(el.borderWidth) : 2;
    const glow = el.glow !== undefined ? parseFloat(el.glow) : (borderStyle === 'neon' ? 14 : 0);
    const borderColor = el.borderColor || state.colors.primary;

    // Fill (In Green Screen mode, enforce 100% solid opacity so green background NEVER bleeds through the card)
    const fillAlpha = state.greenScreenExport ? 1.0 : (el.fillOpacity !== undefined ? parseFloat(el.fillOpacity) : 0.95);
    ctx.fillStyle = hexToRgba(el.fillColor || state.colors.bg, fillAlpha);
    drawCardPath(ctx, el.x, el.y, el.width, el.height, shape, radius);
    ctx.fill();

    // Border & Glow
    if (borderWidth > 0 && borderStyle !== 'none') {
      if (borderStyle === 'neon' && glow > 0) {
        ctx.save();
        ctx.shadowColor = borderColor;
        ctx.shadowBlur = glow;
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        drawCardPath(ctx, el.x, el.y, el.width, el.height, shape, radius);
        ctx.stroke();
        ctx.restore();
      } else if (borderStyle === 'gradient') {
        const bGrad = ctx.createLinearGradient(el.x, el.y, el.x + el.width, el.y + el.height);
        bGrad.addColorStop(0, borderColor);
        bGrad.addColorStop(1, state.colors.accent);
        ctx.strokeStyle = bGrad;
        ctx.lineWidth = borderWidth;
        drawCardPath(ctx, el.x, el.y, el.width, el.height, shape, radius);
        ctx.stroke();
      } else if (borderStyle === 'dashed') {
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.setLineDash([8, 5]);
        drawCardPath(ctx, el.x, el.y, el.width, el.height, shape, radius);
        ctx.stroke();
        ctx.setLineDash([]);
      } else {
        // solid
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        drawCardPath(ctx, el.x, el.y, el.width, el.height, shape, radius);
        ctx.stroke();
      }
    }
  }

  function renderImageElement(ctx, el, state, t) {
    const clip = el.clipShape || 'none';
    const radius = el.cornerRadius !== undefined ? parseInt(el.cornerRadius, 10) : 12;
    const fitMode = el.fitMode || (clip === 'circle' ? 'cover' : 'contain');

    if (el.srcKey === 'qr') {
      roundRect(ctx, el.x, el.y, el.width, el.height, radius);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      drawQRPlaceholder(ctx, el.x + 4, el.y + 4, Math.min(el.width, el.height) - 8, state.colors.primary);
      if (el.borderWidth > 0) {
        roundRect(ctx, el.x, el.y, el.width, el.height, radius);
        ctx.strokeStyle = el.borderColor || state.colors.accent;
        ctx.lineWidth = el.borderWidth || 2;
        ctx.stroke();
      }
      return;
    }

    let img = null;
    if (el.imageObj && el.imageObj.complete && el.imageObj.naturalWidth > 0) {
      img = el.imageObj;
    } else if (el.imgSrc) {
      if (!el.imageObj) {
        el.imageObj = new Image();
        el.imageObj.src = el.imgSrc;
      }
      if (el.imageObj.complete && el.imageObj.naturalWidth > 0) {
        img = el.imageObj;
      }
    } else if (state.images && state.images[el.srcKey]) {
      img = state.images[el.srcKey];
    } else if (state.avatarImg) {
      img = state.avatarImg;
    }

    drawPhotoShape(ctx, el.x, el.y, el.width, el.height, clip, radius);
    ctx.save();
    ctx.clip();

    if (img && img.complete && img.naturalWidth > 0) {
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const boxAspect = el.width / el.height;

      if (fitMode === 'cover') {
        let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
        if (imgAspect > boxAspect) {
          sw = img.naturalHeight * boxAspect;
          sx = (img.naturalWidth - sw) / 2;
        } else {
          sh = img.naturalWidth / boxAspect;
          sy = (img.naturalHeight - sh) / 2;
        }
        ctx.drawImage(img, sx, sy, sw, sh, el.x, el.y, el.width, el.height);
      } else {
        // 'contain': show 100% full product image without any cutoff
        let drawW = el.width;
        let drawH = el.height;
        let drawX = el.x;
        let drawY = el.y;
        if (imgAspect > boxAspect) {
          drawH = el.width / imgAspect;
          drawY = el.y + (el.height - drawH) / 2;
        } else {
          drawW = el.height * imgAspect;
          drawX = el.x + (el.width - drawW) / 2;
        }
        ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, drawX, drawY, drawW, drawH);
      }
    } else {
      if (!state.isExporting) {
        // Modern Canva-style placeholder with dark glassmorphism & clear "+ Click to Upload"
        ctx.fillStyle = 'rgba(15, 23, 42, 0.88)';
        ctx.fillRect(el.x, el.y, el.width, el.height);

        // Dashed outline
        ctx.save();
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.8)';
        ctx.lineWidth = 2;
        ctx.setLineDash([6, 4]);
        drawPhotoShape(ctx, el.x + 2, el.y + 2, el.width - 4, el.height - 4, clip, Math.max(0, radius - 2));
        ctx.stroke();
        ctx.restore();

        // Icon & text
        const minDim = Math.min(el.width, el.height);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        if (minDim >= 80) {
          ctx.font = '26px sans-serif';
          ctx.fillText('📷', el.x + el.width / 2, el.y + el.height / 2 - 14);

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 12px sans-serif';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
          ctx.shadowBlur = 4;
          ctx.fillText('+ Click to Upload', el.x + el.width / 2, el.y + el.height / 2 + 18);
          ctx.shadowBlur = 0;
        } else {
          ctx.font = '20px sans-serif';
          ctx.fillText('📷', el.x + el.width / 2, el.y + el.height / 2);
        }
      }
    }
    ctx.restore();

    if (el.borderWidth > 0) {
      drawPhotoShape(ctx, el.x, el.y, el.width, el.height, clip, radius);
      ctx.strokeStyle = el.borderColor || state.colors.primary;
      ctx.lineWidth = el.borderWidth || 2;
      ctx.stroke();
    }
  }

  function renderTextElement(ctx, el, state, t) {
    const rawText = el.text || '';
    if (!rawText) return;

    const anim = el.animation || el.anim || 'none';
    const font = `${el.fontWeight || '700'} ${el.fontSize || 24}px '${el.fontFamily || state.font}', sans-serif`;
    ctx.font = font;

    const delay = el.animDelay !== undefined ? parseFloat(el.animDelay) : 0;

    // If an entrance-type animation is set and time has not reached the delay, hide element
    const isEntranceAnim = ['typewriter', 'slide_left', 'slide_up', 'fade_in', 'bounce_in'].includes(anim);
    if (isEntranceAnim && t < delay) {
      return;
    }

    const animT = Math.max(0, t - delay);

    // 1. RUNNING TEXT (MARQUEE NEWS TICKER)
    // ពីណាទៅណា: Runs strictly within el.x and el.x + el.width bounding box!
    if (anim === 'marquee') {
      if (t < delay) return;
      ctx.save();
      // Clip strictly to element boundary [from el.x to el.x + el.width]
      ctx.beginPath();
      ctx.rect(el.x, el.y - 6, el.width, el.height + 12);
      ctx.clip();

      ctx.fillStyle = el.color || '#ffffff';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';

      const textW = ctx.measureText(rawText).width;
      const speed = el.animSpeed ? parseFloat(el.animSpeed) : 90; // pixels per sec
      const dir = el.animDir || 'left'; // 'left' = Right to Left (ពីស្តាំទៅឆ្វេង); 'right' = Left to Right (ពីឆ្វេងទៅស្តាំ)
      const gap = el.marqueeGap !== undefined ? parseFloat(el.marqueeGap) : 60;
      const loopWidth = Math.max(40, textW + gap);

      // Distance traveled by time animT
      const travel = (animT * speed) % loopWidth;
      const cy = el.y + el.height / 2;

      let startX = dir === 'left' ? (el.x + el.width - travel) : (el.x - loopWidth + travel);

      // Draw repeating copies to guarantee an unbroken marquee runner
      while (startX > el.x - loopWidth) {
        startX -= loopWidth;
      }
      while (startX < el.x + el.width) {
        if (el.strokeColor && el.strokeWidth) {
          ctx.strokeStyle = el.strokeColor;
          ctx.lineWidth = el.strokeWidth;
          ctx.lineJoin = 'round';
          ctx.miterLimit = 2;
          ctx.strokeText(rawText, startX, cy);
        }
        ctx.fillStyle = el.color || '#ffffff';
        ctx.fillText(rawText, startX, cy);
        startX += loopWidth;
      }

      ctx.restore();
      return;
    }

    // 2. SLIDE IN (FROM RIGHT TO POSITION)
    if (anim === 'slide_left') {
      const dur = el.animDuration ? parseFloat(el.animDuration) : 0.6;
      const p = Math.min(1, animT / dur);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - p, 3);
      const offsetX = (1 - ease) * 160;

      ctx.save();
      ctx.globalAlpha = (ctx.globalAlpha || 1) * Math.min(1, ease * 1.3);

      let tx = el.x + offsetX;
      if (el.align === 'center') tx = el.x + el.width / 2 + offsetX;
      else if (el.align === 'right') tx = el.x + el.width + offsetX;

      ctx.textBaseline = 'top';
      ctx.textAlign = el.align || 'left';
      if (el.strokeColor && el.strokeWidth) {
        ctx.strokeStyle = el.strokeColor;
        ctx.lineWidth = el.strokeWidth;
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;
        ctx.strokeText(rawText, tx, el.y);
      }
      ctx.fillStyle = el.color || '#ffffff';
      ctx.fillText(rawText, tx, el.y);
      ctx.restore();
      return;
    }

    // 3. SLIDE UP (FROM BOTTOM TO POSITION)
    if (anim === 'slide_up') {
      const dur = el.animDuration ? parseFloat(el.animDuration) : 0.55;
      const p = Math.min(1, animT / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      const offsetY = (1 - ease) * 45;

      ctx.save();
      ctx.globalAlpha = (ctx.globalAlpha || 1) * Math.min(1, ease * 1.3);

      let tx = el.x;
      if (el.align === 'center') tx = el.x + el.width / 2;
      else if (el.align === 'right') tx = el.x + el.width;

      ctx.textBaseline = 'top';
      ctx.textAlign = el.align || 'left';
      if (el.strokeColor && el.strokeWidth) {
        ctx.strokeStyle = el.strokeColor;
        ctx.lineWidth = el.strokeWidth;
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;
        ctx.strokeText(rawText, tx, el.y + offsetY);
      }
      ctx.fillStyle = el.color || '#ffffff';
      ctx.fillText(rawText, tx, el.y + offsetY);
      ctx.restore();
      return;
    }

    // 4. FADE IN (SMOOTH OPACITY)
    if (anim === 'fade_in') {
      const dur = el.animDuration ? parseFloat(el.animDuration) : 0.6;
      const p = Math.min(1, animT / dur);

      ctx.save();
      ctx.globalAlpha = (ctx.globalAlpha || 1) * p;

      let tx = el.x;
      if (el.align === 'center') tx = el.x + el.width / 2;
      else if (el.align === 'right') tx = el.x + el.width;

      ctx.textBaseline = 'top';
      ctx.textAlign = el.align || 'left';
      if (el.strokeColor && el.strokeWidth) {
        ctx.strokeStyle = el.strokeColor;
        ctx.lineWidth = el.strokeWidth;
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;
        ctx.strokeText(rawText, tx, el.y);
      }
      ctx.fillStyle = el.color || '#ffffff';
      ctx.fillText(rawText, tx, el.y);
      ctx.restore();
      return;
    }

    // 5. BOUNCE IN (ELASTIC POP-IN)
    if (anim === 'bounce_in') {
      const dur = el.animDuration ? parseFloat(el.animDuration) : 0.65;
      const p = Math.min(1, animT / dur);
      const c4 = (2 * Math.PI) / 3;
      const scale = p === 0 ? 0 : p === 1 ? 1 : Math.pow(2, -10 * p) * Math.sin((p * 10 - 0.75) * c4) + 1;

      ctx.save();
      const cx = el.x + el.width / 2;
      const cy = el.y + el.height / 2;
      ctx.translate(cx, cy);
      ctx.scale(Math.max(0, scale), Math.max(0, scale));
      ctx.translate(-cx, -cy);

      let tx = el.x;
      if (el.align === 'center') tx = el.x + el.width / 2;
      else if (el.align === 'right') tx = el.x + el.width;

      ctx.textBaseline = 'top';
      ctx.textAlign = el.align || 'left';
      if (el.strokeColor && el.strokeWidth) {
        ctx.strokeStyle = el.strokeColor;
        ctx.lineWidth = el.strokeWidth;
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;
        ctx.strokeText(rawText, tx, el.y);
      }
      ctx.fillStyle = el.color || '#ffffff';
      ctx.fillText(rawText, tx, el.y);
      ctx.restore();
      return;
    }

    // 6. TYPEWRITER EFFECT
    if (anim === 'typewriter') {
      const typeSpeed = el.animSpeed ? parseFloat(el.animSpeed) : 14; // chars per second
      const activeT = animT;
      const charsToShow = Math.min(rawText.length, Math.floor(activeT * typeSpeed));
      let displayed = rawText.substring(0, charsToShow);

      // Blinking cursor if still typing
      if (charsToShow < rawText.length && Math.floor(t * 4) % 2 === 0) {
        displayed += '❙';
      }

      ctx.fillStyle = el.color || '#ffffff';
      ctx.textBaseline = 'top';
      ctx.textAlign = el.align || 'left';
      let tx = el.x;
      if (el.align === 'center') tx = el.x + el.width / 2;
      else if (el.align === 'right') tx = el.x + el.width;

      if (el.strokeColor && el.strokeWidth) {
        ctx.strokeStyle = el.strokeColor;
        ctx.lineWidth = el.strokeWidth;
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;
        ctx.strokeText(displayed, tx, el.y);
      }
      ctx.fillText(displayed, tx, el.y);
      return;
    }

    // 7. WAVE LETTER BOUNCE
    if (anim === 'wave') {
      ctx.fillStyle = el.color || '#ffffff';
      ctx.textBaseline = 'top';
      const bounceAmp = 6;
      const bounceFreq = 4.5;
      let curX = el.x;
      if (el.align === 'center') {
        const totalW = ctx.measureText(rawText).width;
        curX = el.x + (el.width - totalW) / 2;
      } else if (el.align === 'right') {
        const totalW = ctx.measureText(rawText).width;
        curX = el.x + el.width - totalW;
      }
      ctx.textAlign = 'left';

      for (let i = 0; i < rawText.length; i++) {
        const ch = rawText[i];
        const chW = ctx.measureText(ch).width;
        const chY = el.y + Math.sin(animT * bounceFreq + i * 0.45) * bounceAmp;
        if (el.strokeColor && el.strokeWidth) {
          ctx.strokeStyle = el.strokeColor;
          ctx.lineWidth = el.strokeWidth;
          ctx.lineJoin = 'round';
          ctx.miterLimit = 2;
          ctx.strokeText(ch, curX, chY);
        }
        ctx.fillText(ch, curX, chY);
        curX += chW;
      }
      return;
    }

    // 8. SHIMMER GLOW SWEEP
    if (anim === 'shimmer') {
      let tx = el.x;
      if (el.align === 'center') tx = el.x + el.width / 2;
      else if (el.align === 'right') tx = el.x + el.width;
      ctx.textAlign = el.align || 'left';
      ctx.textBaseline = 'top';

      const totalW = ctx.measureText(rawText).width;
      const cycle = 2.4;
      const p = (animT % cycle) / cycle;
      const shimmerPos = el.x - 60 + (totalW + 120) * p;

      const grad = ctx.createLinearGradient(shimmerPos - 50, el.y, shimmerPos + 50, el.y);
      grad.addColorStop(0, el.color || '#ffffff');
      grad.addColorStop(0.5, '#fef08a'); // gold gleam
      grad.addColorStop(1, el.color || '#ffffff');

      if (el.strokeColor && el.strokeWidth) {
        ctx.strokeStyle = el.strokeColor;
        ctx.lineWidth = el.strokeWidth;
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;
        ctx.strokeText(rawText, tx, el.y);
      }

      ctx.fillStyle = grad;
      ctx.fillText(rawText, tx, el.y);
      return;
    }

    // 9. PULSE BREATHING
    if (anim === 'pulse') {
      const scale = 1 + Math.sin(animT * 3.5) * 0.05;
      const cx = el.x + el.width / 2;
      const cy = el.y + el.height / 2;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(scale, scale);
      ctx.translate(-cx, -cy);

      ctx.fillStyle = el.color || '#ffffff';
      ctx.textBaseline = 'top';
      ctx.textAlign = el.align || 'left';
      let tx = el.x;
      if (el.align === 'center') tx = el.x + el.width / 2;
      else if (el.align === 'right') tx = el.x + el.width;

      if (el.strokeColor && el.strokeWidth) {
        ctx.strokeStyle = el.strokeColor;
        ctx.lineWidth = el.strokeWidth;
        ctx.lineJoin = 'round';
        ctx.miterLimit = 2;
        ctx.strokeText(rawText, tx, el.y);
      }
      ctx.fillText(rawText, tx, el.y);
      ctx.restore();
      return;
    }

    // DEFAULT STATIC TEXT
    let tx = el.x;
    if (el.align === 'center') tx = el.x + el.width / 2;
    else if (el.align === 'right') tx = el.x + el.width;

    ctx.textBaseline = 'top';
    ctx.textAlign = el.align || 'left';

    if (el.strokeColor && el.strokeWidth) {
      ctx.strokeStyle = el.strokeColor;
      ctx.lineWidth = el.strokeWidth;
      ctx.lineJoin = 'round';
      ctx.miterLimit = 2;
      ctx.strokeText(rawText, tx, el.y);
    }

    ctx.fillStyle = el.color || '#ffffff';
    ctx.fillText(rawText, tx, el.y);
  }

  function renderButtonElement(ctx, el, state, t) {
    const style = el.btnStyle || 'gradient';
    const radius = el.cornerRadius !== undefined ? parseInt(el.cornerRadius, 10) : 8;
    const centerY = el.y + el.height / 2;

    if (style === 'neon') {
      ctx.save();
      ctx.shadowColor = el.bgColor || state.colors.accent;
      ctx.shadowBlur = 14;
      ctx.fillStyle = hexToRgba(el.bgColor || state.colors.accent, 0.25);
      roundRect(ctx, el.x, el.y, el.width, el.height, radius);
      ctx.fill();
      ctx.strokeStyle = el.bgColor || state.colors.accent;
      ctx.lineWidth = 1.8;
      ctx.stroke();
      ctx.restore();
    } else if (style === 'solid') {
      ctx.fillStyle = el.bgColor || state.colors.primary;
      roundRect(ctx, el.x, el.y, el.width, el.height, radius);
      ctx.fill();
    } else if (style === 'outline') {
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      roundRect(ctx, el.x, el.y, el.width, el.height, radius);
      ctx.fill();
      ctx.strokeStyle = el.bgColor || state.colors.primary;
      ctx.lineWidth = 1.8;
      ctx.stroke();
    } else {
      const grad = ctx.createLinearGradient(el.x, el.y, el.x + el.width, el.y);
      grad.addColorStop(0, el.bgColor || state.colors.primary);
      grad.addColorStop(1, state.colors.accent);
      ctx.fillStyle = grad;
      roundRect(ctx, el.x, el.y, el.width, el.height, radius);
      ctx.fill();
    }

    ctx.fillStyle = el.textColor || '#ffffff';
    ctx.font = `800 ${Math.max(10, Math.min(16, el.height * 0.36))}px '${state.font}', sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(el.text || 'BUTTON', el.x + el.width / 2, centerY);
  }

  function renderBadgeElement(ctx, el, state, t) {
    const bColorType = el.badgeColor || 'accent';
    let bBg = state.colors.accent;
    let bTextCol = '#ffffff';
    if (bColorType === 'primary') bBg = state.colors.primary;
    else if (bColorType === 'gold') bBg = '#f59e0b';
    else if (bColorType === 'emerald') bBg = '#10b981';

    roundRect(ctx, el.x, el.y, el.width, el.height, el.cornerRadius || 6);
    ctx.fillStyle = bBg;
    ctx.fill();

    const icon = el.icon || 'sparkles';
    let textX = el.x + 8;
    const centerY = el.y + el.height / 2;

    if (icon && icon !== 'none') {
      const iconSize = Math.min(14, el.height - 6);
      drawBadgeIcon(ctx, icon, el.x + 6, centerY - iconSize / 2, iconSize, bTextCol);
      textX = el.x + iconSize + 12;
    }

    ctx.fillStyle = bTextCol;
    ctx.font = `800 ${Math.max(9, Math.min(13, el.height * 0.48))}px sans-serif`;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'left';
    ctx.fillText(el.text || 'BADGE', textX, centerY);
  }

  function renderStarsElement(ctx, el, state, t) {
    const starCount = el.starCount || 5;
    const starColor = el.starColor || '#f59e0b';
    const starSize = Math.max(10, Math.min(20, el.height * 0.8));
    const starSpacing = starSize + 4;
    const centerY = el.y + el.height / 2;

    for (let i = 0; i < starCount; i++) {
      const sx = el.x + i * starSpacing + starSize / 2;
      drawStar(ctx, sx, centerY, 5, starSize / 2, starSize / 4, starColor);
    }

    if (el.ratingText) {
      const textX = el.x + starCount * starSpacing + 8;
      ctx.font = `700 ${el.fontSize || 13}px '${state.font}', sans-serif`;
      ctx.fillStyle = el.textColor || '#ffffff';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'left';
      ctx.fillText(el.ratingText, textX, centerY);
    }
  }

  /**
   * Dynamic Light Sweep (Luxury Shimmer Sheen FX)
   * Sweeps a high-end reflective light gradient across lower third cards
   */
  function renderDynamicLightSweep(ctx, x, y, width, height, radius = 16, t = 0) {
    if (state.enableLightSweep === false) return;

    // Sweep cycle every 3.2s, sweep duration 1.0s
    const cycle = 3.2;
    const sweepDuration = 1.0;
    const progressInCycle = t % cycle;
    if (progressInCycle > sweepDuration) return;

    const p = progressInCycle / sweepDuration;
    const easedP = Easing.easeInOutCubic(p);

    ctx.save();
    // Clip to rounded card boundary
    ctx.beginPath();
    roundRect(ctx, x, y, width, height, radius);
    ctx.clip();

    // 22-degree tilted beam
    const beamWidth = Math.max(140, width * 0.35);
    const startX = x - beamWidth;
    const endX = x + width + beamWidth;
    const currentX = startX + (endX - startX) * easedP;

    const grad = ctx.createLinearGradient(currentX - beamWidth / 2, y, currentX + beamWidth / 2, y + height);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
    grad.addColorStop(0.35, 'rgba(255, 255, 255, 0.04)');
    grad.addColorStop(0.5, 'rgba(255, 255, 255, 0.40)'); // brilliant sheen
    grad.addColorStop(0.65, 'rgba(255, 255, 255, 0.04)');
    grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.fillStyle = grad;
    ctx.fillRect(x, y, width, height);
    ctx.restore();
  }

  function drawCanvasStudioElements(ctx, state, t) {
    if (!state.canvasElements || state.canvasElements.length === 0) return;

    for (const el of state.canvasElements) {
      if (el.visible === false) continue;
      ctx.save();

      // Freeform Element Rotation
      if (el.rotation) {
        const cx = el.x + el.width / 2;
        const cy = el.y + el.height / 2;
        ctx.translate(cx, cy);
        ctx.rotate((el.rotation * Math.PI) / 180);
        ctx.translate(-cx, -cy);
      }

      if (el.type === 'shape') {
        renderShapeElement(ctx, el, state, t);
        if (state.enableLightSweep !== false && (el.id === 'el_bg_card' || el.name?.toLowerCase().includes('card') || el.name?.toLowerCase().includes('box') || el.width >= 320)) {
          renderDynamicLightSweep(ctx, el.x, el.y, el.width, el.height, el.cornerRadius || 16, t);
        }
      } else if (el.type === 'image') {
        renderImageElement(ctx, el, state, t);
      } else if (el.type === 'text') {
        renderTextElement(ctx, el, state, t);
      } else if (el.type === 'button') {
        renderButtonElement(ctx, el, state, t);
      } else if (el.type === 'badge') {
        renderBadgeElement(ctx, el, state, t);
      } else if (el.type === 'stars') {
        renderStarsElement(ctx, el, state, t);
      }

      ctx.restore();
    }

    // Live interactive drawing preview if user is currently dragging to draw a shape
    if (state.drawingActive && state.drawingRect && !state.isExporting) {
      ctx.save();
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([8, 6]);
      drawCardPath(ctx, state.drawingRect.x, state.drawingRect.y, state.drawingRect.width, state.drawingRect.height, state.selectedDrawShape || 'rounded', 14);
      ctx.stroke();
      ctx.fillStyle = 'rgba(99, 102, 241, 0.22)';
      ctx.fill();
      ctx.restore();
    }
  }

  function drawSelectionGizmo(ctx, state) {
    if (state.isExporting) return;

    // Draw multi-select / select all bounding boxes with prominent top indicator
    if (state.isAllSelected && state.canvasElements && state.canvasElements.length > 0) {
      ctx.save();

      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      let count = 0;

      for (const el of state.canvasElements) {
        if (el.visible === false) continue;
        count++;
        minX = Math.min(minX, el.x);
        minY = Math.min(minY, el.y);
        maxX = Math.max(maxX, el.x + el.width);
        maxY = Math.max(maxY, el.y + el.height);

        // 1. Soft indigo fill tint over each selected element
        ctx.fillStyle = 'rgba(99, 102, 241, 0.12)';
        ctx.fillRect(el.x, el.y, el.width, el.height);

        // 2. High-visibility dashed outline around each element
        ctx.strokeStyle = '#818cf8';
        ctx.lineWidth = 3;
        ctx.setLineDash([8, 6]);
        ctx.strokeRect(el.x, el.y, el.width, el.height);
      }
      ctx.setLineDash([]);

      // 3. Draw outer union bounding box if multiple elements exist
      if (minX !== Infinity && count > 0) {
        const pad = 8;
        const boxX = minX - pad;
        const boxY = minY - pad;
        const boxW = (maxX - minX) + pad * 2;
        const boxH = (maxY - minY) + pad * 2;

        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2.5;
        ctx.strokeRect(boxX, boxY, boxW, boxH);

        // 4 corner anchor handles
        const handles = [
          { x: boxX, y: boxY },
          { x: boxX + boxW, y: boxY },
          { x: boxX, y: boxY + boxH },
          { x: boxX + boxW, y: boxY + boxH }
        ];
        ctx.fillStyle = '#ffffff';
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 2;
        for (const h of handles) {
          ctx.fillRect(h.x - 6, h.y - 6, 12, 12);
          ctx.strokeRect(h.x - 6, h.y - 6, 12, 12);
        }
      }

      // 4. Large, crystal-clear Top Notification Banner (Hi-res 20px font for 1920x1080 stage)
      const text = `✓ ALL SELECTED (${count} elements) • Press [Delete] to Delete All • [Ctrl+Z] to Undo`;
      ctx.font = '700 20px Inter, sans-serif';
      const textW = ctx.measureText(text).width + 36;
      const pillH = 46;
      const pillX = Math.round((ctx.canvas.width - textW) / 2);
      const pillY = 32;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.94)';
      ctx.shadowColor = 'rgba(99, 102, 241, 0.6)';
      ctx.shadowBlur = 16;
      roundRect(ctx, pillX, pillY, textW, pillH, 10);
      ctx.fill();
      ctx.strokeStyle = '#818cf8';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.shadowBlur = 0;
      ctx.fillStyle = '#e0e7ff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, pillX + textW / 2, pillY + pillH / 2);

      ctx.restore();
      return;
    }

    if (!state.selectedElementId) return;
    const el = (state.canvasElements || []).find(e => e.id === state.selectedElementId);
    if (!el || el.visible === false) return;

    ctx.save();
    const cx = el.x + el.width / 2;
    const cy = el.y + el.height / 2;
    if (el.rotation) {
      ctx.translate(cx, cy);
      ctx.rotate((el.rotation * Math.PI) / 180);
      ctx.translate(-cx, -cy);
    }

    // 1. Dashed Bounding Box with subtle glow
    ctx.shadowColor = 'rgba(59, 130, 246, 0.5)';
    ctx.shadowBlur = 6;
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.setLineDash([6, 4]);
    ctx.strokeRect(el.x, el.y, el.width, el.height);
    ctx.setLineDash([]);
    ctx.shadowBlur = 0;

    // 2. Canva-Style Rotation Stem Line & Circular Handle
    const rotHandleY = el.y - 28;
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(cx, el.y);
    ctx.lineTo(cx, rotHandleY);
    ctx.stroke();

    // Rotation circular handle
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(cx, rotHandleY, 7, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#2563eb';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#2563eb';
    ctx.beginPath();
    ctx.arc(cx, rotHandleY, 2.5, 0, Math.PI * 2);
    ctx.fill();

    // 3. Dimension & Rotation Tooltip (e.g., "820 × 140 • 45°")
    const rotBadge = el.rotation ? ` • ${Math.round(el.rotation)}°` : '';
    const dimText = `${Math.round(el.width)} × ${Math.round(el.height)}${rotBadge}`;
    ctx.font = '700 11px Inter, sans-serif';
    const dimW = ctx.measureText(dimText).width + 16;
    const pillH = 20;
    const pillX = Math.max(10, el.x + (el.width - dimW) / 2);
    const pillY = Math.max(10, rotHandleY - pillH - 8);

    ctx.fillStyle = '#0f172a';
    roundRect(ctx, pillX, pillY, dimW, pillH, 4);
    ctx.fill();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 1;
    ctx.stroke();

    ctx.fillStyle = '#93c5fd';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(dimText, pillX + dimW / 2, pillY + pillH / 2);

    // 3. 8 Resize Handles (NW, N, NE, E, SE, S, SW, W)
    const handles = [
      { name: 'nw', x: el.x, y: el.y },
      { name: 'n',  x: el.x + el.width / 2, y: el.y },
      { name: 'ne', x: el.x + el.width, y: el.y },
      { name: 'e',  x: el.x + el.width, y: el.y + el.height / 2 },
      { name: 'se', x: el.x + el.width, y: el.y + el.height },
      { name: 's',  x: el.x + el.width / 2, y: el.y + el.height },
      { name: 'sw', x: el.x, y: el.y + el.height },
      { name: 'w',  x: el.x, y: el.y + el.height / 2 }
    ];

    const hSize = 10;
    for (const h of handles) {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(h.x - hSize / 2, h.y - hSize / 2, hSize, hSize);
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 1.8;
      ctx.strokeRect(h.x - hSize / 2, h.y - hSize / 2, hSize, hSize);
    }

    ctx.restore();
  }

  // 12 Template Definitions & Renderers
  const Templates = {

    /**
     * TEMPLATE 1: Modern Minimalist Glass
     */
    minimal: function (ctx, state, pIn, pOut) {
      const { title, subtitle, colors, font, dimensions, avatarImg } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slideX = (1 - pIn) * -120 + (1 - pOut) * 80;
      ctx.translate(x + slideX, y);

      ctx.font = `700 ${state.titleSize}px '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title).width;
      ctx.font = `500 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle).width;

      const hasAvatar = !!avatarImg;
      const avatarSize = 64;
      const padX = 24;
      const padY = 18;
      const contentWidth = Math.max(titleWidth, subWidth) + (hasAvatar ? avatarSize + 16 : 0);
      const boxWidth = Math.max(contentWidth + padX * 2, 380);
      const boxHeight = 92;

      ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 10;

      roundRect(ctx, 0, 0, boxWidth, boxHeight, 14);
      ctx.fillStyle = hexToRgba(colors.bg, colors.bgOpacity);
      ctx.fill();

      ctx.shadowColor = 'transparent';
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = hexToRgba(colors.primary, 0.4);
      ctx.stroke();

      const barWidth = 6;
      roundRect(ctx, 0, 0, barWidth, boxHeight, 3);
      const barGrad = ctx.createLinearGradient(0, 0, 0, boxHeight);
      barGrad.addColorStop(0, colors.primary);
      barGrad.addColorStop(1, colors.accent);
      ctx.fillStyle = barGrad;
      ctx.fill();

      let textStartX = padX + (hasAvatar ? avatarSize + 16 : 6);

      if (hasAvatar) {
        ctx.save();
        const avX = padX + 8;
        const avY = (boxHeight - avatarSize) / 2;
        ctx.beginPath();
        ctx.arc(avX + avatarSize / 2, avY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(avatarImg, avX, avY, avatarSize, avatarSize);
        ctx.restore();

        ctx.beginPath();
        ctx.arc(avX + avatarSize / 2, avY + avatarSize / 2, avatarSize / 2, 0, Math.PI * 2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = colors.primary;
        ctx.stroke();
      }

      ctx.fillStyle = colors.text;
      ctx.font = `700 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title, textStartX, padY + 4);

      ctx.fillStyle = hexToRgba(colors.text, 0.75);
      ctx.font = `400 ${state.subSize}px '${font}', sans-serif`;
      ctx.fillText(subtitle, textStartX, padY + state.titleSize + 10);

      ctx.restore();
    },

    /**
     * TEMPLATE 2: Broadcast / Breaking News Ticker
     */
    broadcast: function (ctx, state, pIn, pOut) {
      const { title, subtitle, badge, colors, font, dimensions } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const wipeProgress = Easing.easeOutCubic(pIn);
      const outSlide = (1 - pOut) * 100;
      ctx.translate(x, y + outSlide);

      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title.toUpperCase()).width;
      ctx.font = `600 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle).width;

      const totalWidth = Math.max(titleWidth + 60, subWidth + 60, 460);

      ctx.beginPath();
      ctx.rect(0, 0, totalWidth * wipeProgress, 140);
      ctx.clip();

      if (badge) {
        ctx.font = `800 14px '${font}', sans-serif`;
        const badgeWidth = ctx.measureText(badge.toUpperCase()).width + 24;
        ctx.fillStyle = colors.accent;
        ctx.fillRect(0, 0, badgeWidth, 26);
        ctx.fillStyle = '#ffffff';
        ctx.textBaseline = 'middle';
        ctx.fillText(badge.toUpperCase(), 12, 13);
      }

      const titleY = badge ? 26 : 0;
      const titleHeight = state.titleSize + 22;
      ctx.fillStyle = colors.primary;
      ctx.fillRect(0, titleY, totalWidth, titleHeight);

      ctx.fillStyle = '#ffffff';
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillText(title.toUpperCase(), 18, titleY + titleHeight / 2);

      const subY = titleY + titleHeight;
      const subHeight = state.subSize + 18;
      ctx.fillStyle = hexToRgba(colors.bg, 0.95);
      ctx.fillRect(0, subY, totalWidth, subHeight);

      ctx.fillStyle = colors.accent;
      ctx.fillRect(0, subY + subHeight - 3, totalWidth, 3);

      ctx.fillStyle = '#f1f5f9';
      ctx.font = `600 ${state.subSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillText(subtitle, 18, subY + subHeight / 2);

      ctx.restore();
    },

    /**
     * TEMPLATE 3: Social Media / Creator Handle
     */
    social: function (ctx, state, pIn, pOut) {
      const { title, subtitle, colors, font, dimensions, avatarImg } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const scale = 0.85 + (pIn * 0.15) * pOut;
      const slideX = (1 - pIn) * -80;
      ctx.translate(x + slideX, y);
      ctx.scale(scale, scale);

      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title).width;
      ctx.font = `500 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle).width;

      const avatarRadius = 38;
      const padX = 24;
      const boxHeight = 84;
      const boxWidth = Math.max(titleWidth, subWidth) + (avatarRadius * 2) + padX * 2 + 16;

      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 20;
      roundRect(ctx, avatarRadius, (boxHeight - 74) / 2, boxWidth - avatarRadius, 74, 37);
      ctx.fillStyle = hexToRgba(colors.bg, colors.bgOpacity);
      ctx.fill();

      ctx.shadowColor = 'transparent';
      const borderGrad = ctx.createLinearGradient(0, 0, boxWidth, 0);
      borderGrad.addColorStop(0, colors.primary);
      borderGrad.addColorStop(1, colors.accent);
      ctx.lineWidth = 2;
      ctx.strokeStyle = borderGrad;
      ctx.stroke();

      const avCenterX = avatarRadius;
      const avCenterY = boxHeight / 2;

      ctx.save();
      ctx.beginPath();
      ctx.arc(avCenterX, avCenterY, avatarRadius, 0, Math.PI * 2);
      ctx.clip();

      if (avatarImg) {
        ctx.drawImage(avatarImg, avCenterX - avatarRadius, avCenterY - avatarRadius, avatarRadius * 2, avatarRadius * 2);
      } else {
        const avGrad = ctx.createLinearGradient(0, 0, avatarRadius * 2, avatarRadius * 2);
        avGrad.addColorStop(0, colors.primary);
        avGrad.addColorStop(1, colors.accent);
        ctx.fillStyle = avGrad;
        ctx.fillRect(0, 0, avatarRadius * 2, boxHeight);
      }
      ctx.restore();

      ctx.beginPath();
      ctx.arc(avCenterX, avCenterY, avatarRadius, 0, Math.PI * 2);
      ctx.lineWidth = 3;
      ctx.strokeStyle = colors.primary;
      ctx.stroke();

      const badgeX = avCenterX + avatarRadius * 0.65;
      const badgeY = avCenterY + avatarRadius * 0.65;
      ctx.beginPath();
      ctx.arc(badgeX, badgeY, 11, 0, Math.PI * 2);
      ctx.fillStyle = colors.primary;
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(badgeX - 4, badgeY);
      ctx.lineTo(badgeX - 1, badgeY + 3);
      ctx.lineTo(badgeX + 5, badgeY - 3);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();

      const textX = avCenterX + avatarRadius + 18;
      ctx.fillStyle = colors.text;
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title, textX, 18);

      ctx.fillStyle = colors.accent;
      ctx.font = `600 ${state.subSize}px '${font}', sans-serif`;
      ctx.fillText(subtitle, textX, 18 + state.titleSize + 4);

      ctx.restore();
    },

    /**
     * TEMPLATE 4: Cyberpunk / Gaming Tech HUD
     */
    cyber: function (ctx, state, pIn, pOut) {
      const { title, subtitle, colors, font, dimensions } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slide = (1 - pIn) * -150;
      ctx.translate(x + slide, y);

      ctx.font = `900 ${state.titleSize}px 'Orbitron', '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title.toUpperCase()).width;
      ctx.font = `600 ${state.subSize}px 'Orbitron', monospace`;
      const subWidth = ctx.measureText(subtitle.toUpperCase()).width;

      const boxWidth = Math.max(titleWidth, subWidth) + 80;
      const boxHeight = 90;

      ctx.shadowColor = colors.primary;
      ctx.shadowBlur = 18;

      techBox(ctx, 0, 0, boxWidth, boxHeight, 18);
      ctx.fillStyle = hexToRgba(colors.bg, 0.92);
      ctx.fill();

      ctx.lineWidth = 2;
      ctx.strokeStyle = colors.primary;
      ctx.stroke();

      ctx.shadowColor = 'transparent';
      ctx.fillStyle = colors.accent;
      ctx.fillRect(0, 0, 24, 4);
      ctx.fillRect(0, 0, 4, 24);

      ctx.fillRect(boxWidth - 24, boxHeight - 4, 24, 4);
      ctx.fillRect(boxWidth - 4, boxHeight - 24, 4, 24);

      ctx.strokeStyle = hexToRgba(colors.accent, 0.3);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(boxWidth - 70, 16);
      ctx.lineTo(boxWidth - 20, 16);
      ctx.moveTo(boxWidth - 55, 22);
      ctx.lineTo(boxWidth - 20, 22);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(28, 30, 4, 0, Math.PI * 2);
      ctx.fillStyle = colors.accent;
      ctx.fill();

      ctx.fillStyle = colors.text;
      ctx.font = `900 ${state.titleSize}px 'Orbitron', '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title.toUpperCase(), 42, 18);

      ctx.fillStyle = colors.primary;
      ctx.font = `700 ${state.subSize}px 'Orbitron', monospace`;
      ctx.fillText(`// ${subtitle.toUpperCase()}`, 42, 22 + state.titleSize + 4);

      ctx.restore();
    },

    /**
     * TEMPLATE 5: Executive / Cinematic Luxury Serif
     */
    executive: function (ctx, state, pIn, pOut) {
      const { title, subtitle, colors, font, dimensions } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slideY = (1 - pIn) * 40 + (1 - pOut) * 30;
      ctx.translate(x, y + slideY);

      const serifFont = `'Playfair Display', serif`;
      ctx.font = `700 ${state.titleSize + 2}px ${serifFont}`;
      const titleWidth = ctx.measureText(title).width;
      ctx.font = `500 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle.toUpperCase()).width;

      const totalWidth = Math.max(titleWidth, subWidth) + 60;
      const lineProgress = Easing.easeOutCubic(pIn);

      roundRect(ctx, 0, 0, totalWidth, 90, 8);
      ctx.fillStyle = hexToRgba(colors.bg, 0.7);
      ctx.fill();

      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(10, 8);
      ctx.lineTo(10 + (totalWidth - 20) * lineProgress, 8);
      ctx.stroke();

      ctx.fillStyle = colors.text;
      ctx.font = `700 ${state.titleSize + 2}px ${serifFont}`;
      ctx.textBaseline = 'top';
      ctx.fillText(title, 20, 20);

      ctx.fillStyle = colors.primary;
      ctx.font = `600 ${state.subSize}px '${font}', sans-serif`;
      ctx.letterSpacing = '2px';
      ctx.fillText(subtitle.toUpperCase(), 20, 24 + state.titleSize + 6);
      ctx.letterSpacing = '0px';

      ctx.restore();
    },

    /**
     * TEMPLATE 6: Vibrant Modern Gradient Ribbon
     */
    gradient: function (ctx, state, pIn, pOut) {
      const { title, subtitle, colors, font, dimensions } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slideX = (1 - pIn) * -120;
      ctx.translate(x + slideX, y);

      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title).width;
      ctx.font = `600 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle).width;

      const boxWidth = Math.max(titleWidth, subWidth) + 60;
      const boxHeight = 84;

      ctx.shadowColor = hexToRgba(colors.primary, 0.45);
      ctx.shadowBlur = 25;
      ctx.shadowOffsetY = 10;

      const grad = ctx.createLinearGradient(0, 0, boxWidth, boxHeight);
      grad.addColorStop(0, colors.primary);
      grad.addColorStop(1, colors.accent);

      roundRect(ctx, 0, 0, boxWidth, boxHeight, 16);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.shadowColor = 'transparent';
      ctx.save();
      roundRect(ctx, 0, 0, boxWidth, boxHeight, 16);
      ctx.clip();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.fillRect(0, 0, boxWidth, boxHeight / 2);
      ctx.restore();

      ctx.fillStyle = '#ffffff';
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title, 26, 16);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.font = `600 ${state.subSize}px '${font}', sans-serif`;
      ctx.fillText(subtitle, 26, 20 + state.titleSize + 4);

      ctx.restore();
    },

    /**
     * TEMPLATE 7: Sports ESPN / Athletic Tournament Slanted
     */
    sports: function (ctx, state, pIn, pOut) {
      const { title, subtitle, badge, colors, font, dimensions } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slide = (1 - pIn) * -160 + (1 - pOut) * 120;
      ctx.translate(x + slide, y);

      const sportFont = `'Montserrat', '${font}', sans-serif`;
      ctx.font = `900 ${state.titleSize + 4}px ${sportFont}`;
      const titleWidth = ctx.measureText(title.toUpperCase()).width;
      ctx.font = `700 ${state.subSize}px ${sportFont}`;
      const subWidth = ctx.measureText(subtitle.toUpperCase()).width;

      const skew = 22;
      const badgeWidth = badge ? 90 : 0;
      const mainWidth = Math.max(titleWidth, subWidth) + 70;
      const totalWidth = badgeWidth + mainWidth + skew;
      const totalHeight = 88;

      ctx.shadowColor = 'rgba(0, 0, 0, 0.6)';
      ctx.shadowBlur = 18;
      ctx.shadowOffsetY = 8;

      // Dark athletic backing
      drawParallelogram(ctx, 0, 0, totalWidth, totalHeight, skew);
      ctx.fillStyle = hexToRgba(colors.bg, 0.96);
      ctx.fill();

      ctx.shadowColor = 'transparent';

      // Left Team/Number Badge (Solid Primary)
      if (badge) {
        drawParallelogram(ctx, 0, 0, badgeWidth + skew, totalHeight, skew);
        ctx.fillStyle = colors.primary;
        ctx.fill();

        // Accent edge strip
        ctx.beginPath();
        ctx.moveTo(badgeWidth + skew, 0);
        ctx.lineTo(badgeWidth + skew + 6, 0);
        ctx.lineTo(badgeWidth + 6, totalHeight);
        ctx.lineTo(badgeWidth, totalHeight);
        ctx.closePath();
        ctx.fillStyle = colors.accent;
        ctx.fill();

        // Badge Text
        ctx.fillStyle = '#ffffff';
        ctx.font = `900 24px ${sportFont}`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(badge.toUpperCase(), (badgeWidth + skew) / 2 - 4, totalHeight / 2);
        ctx.textAlign = 'start';
      }

      // Title & Subtitle
      const textX = badgeWidth + skew + 18;

      // Top title
      ctx.fillStyle = colors.text;
      ctx.font = `900 ${state.titleSize + 4}px ${sportFont}`;
      ctx.textBaseline = 'top';
      ctx.fillText(title.toUpperCase(), textX, 14);

      // Subtitle Bar (Accent Color)
      ctx.fillStyle = colors.accent;
      ctx.font = `700 ${state.subSize}px ${sportFont}`;
      ctx.fillText(subtitle.toUpperCase(), textX, 18 + state.titleSize + 6);

      // Bottom dynamic speed lines
      ctx.fillStyle = colors.primary;
      ctx.fillRect(textX, totalHeight - 4, mainWidth - 40, 4);

      ctx.restore();
    },

    /**
     * TEMPLATE 8: Cinematic Documentary / Film NatGeo Minimal Line
     */
    documentary: function (ctx, state, pIn, pOut) {
      const { title, subtitle, colors, font, dimensions } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const fadeSlide = (1 - pIn) * 35;
      ctx.translate(x, y + fadeSlide);

      ctx.font = `700 ${state.titleSize}px '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title).width;
      ctx.font = `500 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle).width;

      const boxWidth = Math.max(titleWidth, subWidth) + 90;
      const boxHeight = 84;

      // Soft cinematic gradient backing (transparent fade out to the right)
      const gradBg = ctx.createLinearGradient(0, 0, boxWidth, 0);
      gradBg.addColorStop(0, hexToRgba(colors.bg, 0.88));
      gradBg.addColorStop(0.75, hexToRgba(colors.bg, 0.5));
      gradBg.addColorStop(1, 'transparent');

      roundRect(ctx, 0, 0, boxWidth, boxHeight, 4);
      ctx.fillStyle = gradBg;
      ctx.fill();

      // Animated Vertical Accent Needle Line (Draws downwards on intro)
      const lineProgress = Easing.easeOutCubic(pIn);
      const lineHeight = (boxHeight - 24) * lineProgress;
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.moveTo(14, 12);
      ctx.lineTo(14, 12 + lineHeight);
      ctx.stroke();

      // Elegant Title
      ctx.fillStyle = '#ffffff';
      ctx.font = `700 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title, 32, 16);

      // Location / Role Subtitle with subtle bullet or marker
      ctx.fillStyle = hexToRgba('#ffffff', 0.82);
      ctx.font = `400 ${state.subSize}px '${font}', sans-serif`;
      ctx.letterSpacing = '1px';
      ctx.fillText(subtitle, 32, 20 + state.titleSize + 6);
      ctx.letterSpacing = '0px';

      ctx.restore();
    },

    /**
     * TEMPLATE 9: Studio Video Podcast / Waveform Pill
     */
    podcast: function (ctx, state, pIn, pOut, time = 0) {
      const { title, subtitle, badge, colors, font, dimensions, avatarImg } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const bounceIn = Easing.easeOutBack(pIn);
      ctx.translate(x, y);
      ctx.scale(bounceIn, bounceIn);

      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title).width;
      ctx.font = `600 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle).width;

      const tagText = badge || 'HOST';
      ctx.font = `800 12px '${font}', sans-serif`;
      const tagWidth = ctx.measureText(tagText.toUpperCase()).width + 36;

      const contentWidth = Math.max(titleWidth, subWidth) + 50;
      const totalWidth = tagWidth + contentWidth;
      const pillHeight = 78;

      ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
      ctx.shadowBlur = 20;
      ctx.shadowOffsetY = 8;

      // Full pill background
      roundRect(ctx, 0, 0, totalWidth, pillHeight, pillHeight / 2);
      ctx.fillStyle = hexToRgba(colors.bg, colors.bgOpacity);
      ctx.fill();

      ctx.shadowColor = 'transparent';
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = hexToRgba(colors.primary, 0.3);
      ctx.stroke();

      // Left Tag Pill (Solid primary gradient)
      const tagGrad = ctx.createLinearGradient(0, 0, tagWidth, pillHeight);
      tagGrad.addColorStop(0, colors.primary);
      tagGrad.addColorStop(1, colors.accent);

      roundRect(ctx, 0, 0, tagWidth, pillHeight, pillHeight / 2);
      ctx.fillStyle = tagGrad;
      ctx.fill();

      // Mini Animated Audio Waveform inside the Left Tag Pill
      drawWaveform(ctx, 14, (pillHeight - 22) / 2, time, '#ffffff');

      // Tag Label (e.g. "HOST" / "EPISODE 01")
      ctx.fillStyle = '#ffffff';
      ctx.font = `800 12px '${font}', sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillText(tagText.toUpperCase(), 44, pillHeight / 2);

      // Title & Subtitle in Right Body
      const textX = tagWidth + 18;
      ctx.fillStyle = colors.text;
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title, textX, 16);

      ctx.fillStyle = hexToRgba(colors.text, 0.7);
      ctx.font = `500 ${state.subSize}px '${font}', sans-serif`;
      ctx.fillText(subtitle, textX, 18 + state.titleSize + 4);

      ctx.restore();
    },

    /**
     * TEMPLATE 10: Neon Synthwave / 80s Retro Glow
     */
    neon_glow: function (ctx, state, pIn, pOut, time = 0) {
      const { title, subtitle, colors, font, dimensions } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slideX = (1 - pIn) * -130;
      ctx.translate(x + slideX, y);

      const neonFont = `'Orbitron', '${font}', sans-serif`;
      ctx.font = `900 ${state.titleSize}px ${neonFont}`;
      const titleWidth = ctx.measureText(title.toUpperCase()).width;
      ctx.font = `700 ${state.subSize}px ${neonFont}`;
      const subWidth = ctx.measureText(subtitle.toUpperCase()).width;

      const boxWidth = Math.max(titleWidth, subWidth) + 70;
      const boxHeight = 86;

      // Dark Synthwave Plate
      roundRect(ctx, 0, 0, boxWidth, boxHeight, 8);
      ctx.fillStyle = hexToRgba('#05050f', 0.94);
      ctx.fill();

      // Dual Glow Neon Border (Primary Cyan + Accent Magenta)
      ctx.shadowColor = colors.primary;
      ctx.shadowBlur = 18;
      roundRect(ctx, 0, 0, boxWidth, boxHeight, 8);
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = colors.primary;
      ctx.stroke();

      // Inner Accent Neon Line
      ctx.shadowColor = colors.accent;
      ctx.shadowBlur = 12;
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = colors.accent;
      ctx.beginPath();
      ctx.moveTo(12, boxHeight - 6);
      ctx.lineTo(boxWidth - 12, boxHeight - 6);
      ctx.stroke();

      // Retro Micro-grid dots in corner
      ctx.shadowColor = 'transparent';
      ctx.fillStyle = colors.accent;
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(boxWidth - 18 - i * 8, 14, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Title Text with Neon Glow
      ctx.shadowColor = colors.primary;
      ctx.shadowBlur = 10;
      ctx.fillStyle = '#ffffff';
      ctx.font = `900 ${state.titleSize}px ${neonFont}`;
      ctx.textBaseline = 'top';
      ctx.fillText(title.toUpperCase(), 24, 16);

      // Subtitle with Accent Glow
      ctx.shadowColor = colors.accent;
      ctx.shadowBlur = 8;
      ctx.fillStyle = colors.accent;
      ctx.font = `700 ${state.subSize}px ${neonFont}`;
      ctx.fillText(subtitle.toUpperCase(), 24, 20 + state.titleSize + 4);

      ctx.restore();
    },

    /**
     * TEMPLATE 11: Swiss Modernist / Bold Split Block
     */
    clean_split: function (ctx, state, pIn, pOut) {
      const { title, subtitle, colors, font, dimensions } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slide = (1 - pIn) * -100;
      ctx.translate(x + slide, y);

      const splitFont = `'Montserrat', '${font}', sans-serif`;
      ctx.font = `900 ${state.titleSize}px ${splitFont}`;
      const titleWidth = ctx.measureText(title.toUpperCase()).width + 48;
      ctx.font = `700 ${state.subSize}px ${splitFont}`;
      const subWidth = ctx.measureText(subtitle.toUpperCase()).width + 48;

      const blockHeight = 74;

      ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
      ctx.shadowBlur = 20;
      ctx.shadowOffsetY = 6;

      // Left Solid Primary Block
      ctx.fillStyle = colors.primary;
      ctx.fillRect(0, 0, titleWidth, blockHeight);

      // Right Solid Dark Contrast Block
      ctx.fillStyle = hexToRgba(colors.bg, 0.98);
      ctx.fillRect(titleWidth, 0, subWidth, blockHeight);

      // Divider line
      ctx.shadowColor = 'transparent';
      ctx.fillStyle = colors.accent;
      ctx.fillRect(titleWidth - 3, 0, 6, blockHeight);

      // Title Text (Inverted White)
      ctx.fillStyle = '#ffffff';
      ctx.font = `900 ${state.titleSize}px ${splitFont}`;
      ctx.textBaseline = 'middle';
      ctx.fillText(title.toUpperCase(), 22, blockHeight / 2);

      // Subtitle Text
      ctx.fillStyle = colors.text;
      ctx.font = `700 ${state.subSize}px ${splitFont}`;
      ctx.fillText(subtitle.toUpperCase(), titleWidth + 22, blockHeight / 2);

      ctx.restore();
    },

    /**
     * TEMPLATE 12: YouTube Creator / Subscribe & Bell Call-to-Action
     */
    youtube_sub: function (ctx, state, pIn, pOut, time = 0) {
      const { title, subtitle, colors, font, dimensions, avatarImg } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slide = (1 - pIn) * -120;
      ctx.translate(x + slide, y);

      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title).width;
      ctx.font = `600 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle).width;

      const avRadius = 34;
      const textWidth = Math.max(titleWidth, subWidth);
      const subBtnWidth = 145;
      const boxHeight = 82;
      const totalWidth = avRadius * 2 + textWidth + subBtnWidth + 65;

      ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
      ctx.shadowBlur = 22;
      ctx.shadowOffsetY = 8;

      // Main pill
      roundRect(ctx, 0, 0, totalWidth, boxHeight, 20);
      ctx.fillStyle = hexToRgba(colors.bg, colors.bgOpacity);
      ctx.fill();

      ctx.shadowColor = 'transparent';
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = hexToRgba(colors.primary, 0.35);
      ctx.stroke();

      // Avatar Circle
      const avX = 14;
      const avY = (boxHeight - avRadius * 2) / 2;

      ctx.save();
      ctx.beginPath();
      ctx.arc(avX + avRadius, avY + avRadius, avRadius, 0, Math.PI * 2);
      ctx.clip();
      if (avatarImg) {
        ctx.drawImage(avatarImg, avX, avY, avRadius * 2, avRadius * 2);
      } else {
        const avGrad = ctx.createLinearGradient(avX, avY, avX + avRadius * 2, avY + avRadius * 2);
        avGrad.addColorStop(0, colors.primary);
        avGrad.addColorStop(1, colors.accent);
        ctx.fillStyle = avGrad;
        ctx.fillRect(avX, avY, avRadius * 2, avRadius * 2);
      }
      ctx.restore();

      ctx.beginPath();
      ctx.arc(avX + avRadius, avY + avRadius, avRadius, 0, Math.PI * 2);
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = colors.primary;
      ctx.stroke();

      // Channel Title
      const textX = avX + avRadius * 2 + 16;
      ctx.fillStyle = colors.text;
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title, textX, 16);

      // Handle or Sub count
      ctx.fillStyle = hexToRgba(colors.text, 0.7);
      ctx.font = `600 ${state.subSize}px '${font}', sans-serif`;
      ctx.fillText(subtitle, textX, 18 + state.titleSize + 4);

      // Red Subscribe Button & Bell Pill on Right
      const btnX = totalWidth - subBtnWidth - 14;
      const btnY = (boxHeight - 46) / 2;
      roundRect(ctx, btnX, btnY, subBtnWidth, 46, 23);
      ctx.fillStyle = colors.primary;
      ctx.fill();

      // Subscribe Button Text
      ctx.fillStyle = '#ffffff';
      ctx.font = `800 13px '${font}', sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillText('SUBSCRIBE', btnX + 16, btnY + 23);

      // Ringing Bell Icon with vibration pulse during hold
      const ringAngle = Math.sin(time * 12) * 0.25;
      drawBell(ctx, btnX + subBtnWidth - 34, btnY + 12, 22, ringAngle, '#ffffff');

      ctx.restore();
    },

    /**
     * TEMPLATE 13: E-Commerce Product Showcase & Rating Card
     */
    product_card: function (ctx, state, pIn, pOut, time = 0) {
      const { title, subtitle, badge, colors, font, dimensions, avatarImg } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slide = (1 - pIn) * -120;
      ctx.translate(x + slide, y);

      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title).width;
      ctx.font = `600 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle).width;

      const imgSize = 76;
      const ctaWidth = 140;
      const textWidth = Math.max(titleWidth, subWidth);
      const boxHeight = 96;
      const boxWidth = imgSize + textWidth + ctaWidth + 60;

      // Card Backing Shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 8;

      roundRect(ctx, 0, 0, boxWidth, boxHeight, 16);
      ctx.fillStyle = hexToRgba(colors.bg, colors.bgOpacity);
      ctx.fill();

      // Card Border with subtle primary gradient
      ctx.shadowColor = 'transparent';
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = hexToRgba(colors.primary, 0.4);
      ctx.stroke();

      // 1. Left Product Image Box
      const imgX = 12;
      const imgY = (boxHeight - imgSize) / 2;
      roundRect(ctx, imgX, imgY, imgSize, imgSize, 12);
      ctx.save();
      ctx.clip();
      if (avatarImg) {
        ctx.drawImage(avatarImg, imgX, imgY, imgSize, imgSize);
      } else {
        const pGrad = ctx.createLinearGradient(imgX, imgY, imgX + imgSize, imgY + imgSize);
        pGrad.addColorStop(0, colors.primary);
        pGrad.addColorStop(1, colors.accent);
        ctx.fillStyle = pGrad;
        ctx.fillRect(imgX, imgY, imgSize, imgSize);

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        roundRect(ctx, imgX + 22, imgY + 26, 32, 28, 4);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(imgX + 38, imgY + 26, 8, Math.PI, 0);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = '#ffffff';
        ctx.stroke();
      }
      ctx.restore();

      roundRect(ctx, imgX, imgY, imgSize, imgSize, 12);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = hexToRgba(colors.primary, 0.5);
      ctx.stroke();

      // 2. Middle Details (Title, Subtitle, 5-Star Rating)
      const textX = imgX + imgSize + 16;
      ctx.fillStyle = colors.text;
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title, textX, 14);

      // Star Rating (5 Gold Stars)
      const starY = 18 + state.titleSize + 2;
      for (let s = 0; s < 5; s++) {
        drawStar(ctx, textX + s * 16 + 6, starY + 6, 6, 2.5, '#f59e0b');
      }
      ctx.fillStyle = '#f59e0b';
      ctx.font = `700 11px '${font}', sans-serif`;
      ctx.fillText('4.9', textX + 5 * 16 + 10, starY);

      // Subtitle / Features
      ctx.fillStyle = hexToRgba(colors.text, 0.7);
      ctx.font = `500 ${state.subSize - 2}px '${font}', sans-serif`;
      ctx.fillText(subtitle, textX, starY + 18);

      // 3. Right: Price & CTA Button
      const btnX = boxWidth - ctaWidth - 14;
      const btnY = (boxHeight - 44) / 2;

      const priceText = badge || '$199.99';
      ctx.fillStyle = colors.accent;
      ctx.font = `800 16px '${font}', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(priceText, btnX + ctaWidth / 2, 14);

      roundRect(ctx, btnX, btnY + 8, ctaWidth, 38, 19);
      const btnGrad = ctx.createLinearGradient(btnX, btnY, btnX + ctaWidth, btnY + 38);
      btnGrad.addColorStop(0, colors.primary);
      btnGrad.addColorStop(1, colors.accent);
      ctx.fillStyle = btnGrad;
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = `800 12px '${font}', sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillText('SHOP NOW ➔', btnX + ctaWidth / 2, btnY + 27);
      ctx.textAlign = 'start';

      ctx.restore();
    },

    /**
     * TEMPLATE 14: Flash Sale / Discount & Promo Code Banner
     */
    flash_sale: function (ctx, state, pIn, pOut, time = 0) {
      const { title, subtitle, badge, colors, font, dimensions } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slide = (1 - pIn) * -140;
      ctx.translate(x + slide, y);

      ctx.font = `900 ${state.titleSize + 2}px 'Montserrat', '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title.toUpperCase()).width;
      ctx.font = `700 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle.toUpperCase()).width;

      const promoTag = badge || 'CODE: DEAL50';
      ctx.font = `800 14px monospace`;
      const promoWidth = ctx.measureText(promoTag.toUpperCase()).width + 30;

      const mainWidth = Math.max(titleWidth, subWidth) + 40;
      const totalWidth = mainWidth + promoWidth + 40;
      const totalHeight = 88;

      ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
      ctx.shadowBlur = 22;

      roundRect(ctx, 0, 0, totalWidth, totalHeight, 10);
      ctx.fillStyle = hexToRgba(colors.bg, 0.96);
      ctx.fill();

      ctx.shadowColor = 'transparent';

      roundRect(ctx, 0, 0, totalWidth, 24, 10);
      const alertGrad = ctx.createLinearGradient(0, 0, totalWidth, 0);
      alertGrad.addColorStop(0, colors.primary);
      alertGrad.addColorStop(1, colors.accent);
      ctx.fillStyle = alertGrad;
      ctx.fill();
      ctx.fillRect(0, 14, totalWidth, 10);

      ctx.fillStyle = '#ffffff';
      ctx.font = `900 11px 'Montserrat', sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillText('⚡ LIMITED TIME FLASH DEAL • FREE 2-DAY SHIPPING', 16, 12);

      ctx.fillStyle = colors.text;
      ctx.font = `900 ${state.titleSize + 2}px 'Montserrat', '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title.toUpperCase(), 16, 32);

      ctx.fillStyle = colors.accent;
      ctx.font = `700 ${state.subSize}px '${font}', sans-serif`;
      ctx.fillText(subtitle.toUpperCase(), 16, 34 + state.titleSize + 2);

      const couponX = totalWidth - promoWidth - 14;
      const couponY = 30;
      const couponH = 46;

      ctx.save();
      ctx.setLineDash([4, 3]);
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 1.5;
      roundRect(ctx, couponX, couponY, promoWidth, couponH, 6);
      ctx.stroke();
      ctx.fillStyle = hexToRgba(colors.primary, 0.15);
      ctx.fill();
      ctx.restore();

      ctx.fillStyle = colors.primary;
      ctx.font = `800 10px 'Montserrat', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('DISCOUNT CODE', couponX + promoWidth / 2, couponY + 12);

      ctx.fillStyle = '#ffffff';
      ctx.font = `800 14px monospace`;
      ctx.fillText(promoTag.toUpperCase(), couponX + promoWidth / 2, couponY + 28);
      ctx.textAlign = 'start';

      ctx.restore();
    },

    /**
     * TEMPLATE 15: Minimal Luxury / Keynote Product Showcase
     */
    minimal_luxury: function (ctx, state, pIn, pOut, time = 0) {
      const { title, subtitle, badge, colors, font, dimensions } = state;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slide = (1 - pIn) * -90;
      ctx.translate(x + slide, y);

      ctx.font = `700 ${state.titleSize}px '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title).width;
      ctx.font = `500 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle).width;

      const priceTag = badge || 'From $999';
      ctx.font = `700 14px '${font}', sans-serif`;
      const priceWidth = ctx.measureText(priceTag).width + 24;

      const totalWidth = Math.max(titleWidth, subWidth) + priceWidth + 70;
      const totalHeight = 78;

      roundRect(ctx, 0, 0, totalWidth, totalHeight, totalHeight / 2);
      ctx.fillStyle = hexToRgba(colors.bg, 0.88);
      ctx.fill();

      ctx.strokeStyle = hexToRgba(colors.primary, 0.4);
      ctx.lineWidth = 1.2;
      roundRect(ctx, 0, 0, totalWidth, totalHeight, totalHeight / 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(24, totalHeight / 2, 4, 0, Math.PI * 2);
      ctx.fillStyle = colors.primary;
      ctx.fill();

      ctx.fillStyle = colors.text;
      ctx.font = `700 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title, 38, 16);

      ctx.fillStyle = hexToRgba(colors.text, 0.65);
      ctx.font = `400 ${state.subSize}px '${font}', sans-serif`;
      ctx.fillText(subtitle, 38, 20 + state.titleSize + 2);

      const pillX = totalWidth - priceWidth - 14;
      const pillY = (totalHeight - 38) / 2;
      roundRect(ctx, pillX, pillY, priceWidth, 38, 19);
      ctx.fillStyle = hexToRgba(colors.primary, 0.2);
      ctx.fill();
      ctx.strokeStyle = colors.primary;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = colors.primary;
      ctx.font = `700 13px '${font}', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(priceTag, pillX + priceWidth / 2, pillY + 19);
      ctx.textAlign = 'start';

      ctx.restore();
    },

    /**
     * TEMPLATE 16: Dual Product Angle Showcase (2 Images)
     */
    dual_product: function (ctx, state, pIn, pOut, time = 0) {
      const { title, subtitle, badge, colors, font, dimensions } = state;
      const img1 = (state.images && state.images.img1) || state.avatarImg;
      const img2 = state.images && state.images.img2;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slide = (1 - pIn) * -130;
      ctx.translate(x + slide, y);

      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      const titleWidth = ctx.measureText(title).width;
      ctx.font = `600 ${state.subSize}px '${font}', sans-serif`;
      const subWidth = ctx.measureText(subtitle).width;

      const imgSize = 74;
      const ctaWidth = 130;
      const textWidth = Math.max(titleWidth, subWidth);
      const boxHeight = 94;
      const boxWidth = (imgSize * 2) + textWidth + ctaWidth + 70;

      // Card Background Shadow
      ctx.shadowColor = 'rgba(0, 0, 0, 0.55)';
      ctx.shadowBlur = 24;
      ctx.shadowOffsetY = 8;

      roundRect(ctx, 0, 0, boxWidth, boxHeight, 16);
      ctx.fillStyle = hexToRgba(colors.bg, colors.bgOpacity);
      ctx.fill();

      ctx.shadowColor = 'transparent';
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = hexToRgba(colors.primary, 0.4);
      ctx.stroke();

      // Image 1: Main Product Shot
      const img1X = 12;
      const img1Y = (boxHeight - imgSize) / 2;
      roundRect(ctx, img1X, img1Y, imgSize, imgSize, 12);
      ctx.save();
      ctx.clip();
      if (img1) {
        ctx.drawImage(img1, img1X, img1Y, imgSize, imgSize);
      } else {
        const grad1 = ctx.createLinearGradient(img1X, img1Y, img1X + imgSize, img1Y + imgSize);
        grad1.addColorStop(0, colors.primary);
        grad1.addColorStop(1, colors.accent);
        ctx.fillStyle = grad1;
        ctx.fillRect(img1X, img1Y, imgSize, imgSize);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('HERO SHOT', img1X + imgSize / 2, img1Y + imgSize / 2 + 4);
      }
      ctx.restore();
      roundRect(ctx, img1X, img1Y, imgSize, imgSize, 12);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = colors.primary;
      ctx.stroke();

      // Image 2: Secondary / Angle Shot
      const img2X = img1X + imgSize + 8;
      const img2Y = img1Y;
      roundRect(ctx, img2X, img2Y, imgSize, imgSize, 12);
      ctx.save();
      ctx.clip();
      if (img2) {
        ctx.drawImage(img2, img2X, img2Y, imgSize, imgSize);
      } else {
        const grad2 = ctx.createLinearGradient(img2X, img2Y, img2X + imgSize, img2Y + imgSize);
        grad2.addColorStop(0, hexToRgba(colors.primary, 0.6));
        grad2.addColorStop(1, hexToRgba(colors.accent, 0.8));
        ctx.fillStyle = grad2;
        ctx.fillRect(img2X, img2Y, imgSize, imgSize);
        ctx.fillStyle = '#ffffff';
        ctx.font = '800 11px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('DETAIL', img2X + imgSize / 2, img2Y + imgSize / 2 + 4);
      }
      ctx.restore();
      roundRect(ctx, img2X, img2Y, imgSize, imgSize, 12);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = colors.accent;
      ctx.stroke();

      // Middle: Product Info & Rating
      const textX = img2X + imgSize + 16;
      ctx.fillStyle = colors.text;
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textAlign = 'start';
      ctx.textBaseline = 'top';
      ctx.fillText(title, textX, 14);

      // 5 Gold Stars
      const starY = 18 + state.titleSize + 2;
      for (let s = 0; s < 5; s++) {
        drawStar(ctx, textX + s * 16 + 6, starY + 6, 6, 2.5, '#f59e0b');
      }
      ctx.fillStyle = '#f59e0b';
      ctx.font = `700 11px '${font}', sans-serif`;
      ctx.fillText('5.0', textX + 5 * 16 + 10, starY);

      // Subtitle
      ctx.fillStyle = hexToRgba(colors.text, 0.7);
      ctx.font = `500 ${state.subSize - 2}px '${font}', sans-serif`;
      ctx.fillText(subtitle, textX, starY + 18);

      // Right: Price & Buy Now CTA
      const btnX = boxWidth - ctaWidth - 14;
      const btnY = (boxHeight - 44) / 2;

      const priceText = badge || '$149.99';
      ctx.fillStyle = colors.accent;
      ctx.font = `800 15px '${font}', sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(priceText, btnX + ctaWidth / 2, 14);

      roundRect(ctx, btnX, btnY + 8, ctaWidth, 38, 19);
      const btnGrad = ctx.createLinearGradient(btnX, btnY, btnX + ctaWidth, btnY + 38);
      btnGrad.addColorStop(0, colors.primary);
      btnGrad.addColorStop(1, colors.accent);
      ctx.fillStyle = btnGrad;
      ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = `800 12px '${font}', sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.fillText('BUY NOW ➔', btnX + ctaWidth / 2, btnY + 27);
      ctx.textAlign = 'start';

      ctx.restore();
    },

    /**
     * TEMPLATE 17: Before & After Transformation (2 Images)
     */
    before_after: function (ctx, state, pIn, pOut, time = 0) {
      const { title, subtitle, colors, font, dimensions } = state;
      const img1 = (state.images && state.images.img1) || state.avatarImg;
      const img2 = state.images && state.images.img2;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slide = (1 - pIn) * -120;
      ctx.translate(x + slide, y);

      const cardW = 110;
      const cardH = 88;
      const textW = Math.max(ctx.measureText(title).width, ctx.measureText(subtitle).width, 240);
      const totalWidth = (cardW * 2) + textW + 70;
      const totalHeight = 104;

      roundRect(ctx, 0, 0, totalWidth, totalHeight, 14);
      ctx.fillStyle = hexToRgba(colors.bg, 0.95);
      ctx.fill();

      ctx.lineWidth = 1.5;
      ctx.strokeStyle = hexToRgba(colors.primary, 0.4);
      ctx.stroke();

      // Card 1: BEFORE PHOTO
      const bX = 10;
      const bY = 8;
      roundRect(ctx, bX, bY, cardW, cardH, 10);
      ctx.save();
      ctx.clip();
      if (img1) {
        ctx.drawImage(img1, bX, bY, cardW, cardH);
      } else {
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(bX, bY, cardW, cardH);
      }
      ctx.restore();
      roundRect(ctx, bX, bY, cardW, cardH, 10);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#64748b';
      ctx.stroke();

      // BEFORE Badge
      roundRect(ctx, bX + 6, bY + 6, 52, 18, 4);
      ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
      ctx.fill();
      ctx.fillStyle = '#94a3b8';
      ctx.font = '800 10px sans-serif';
      ctx.fillText('BEFORE', bX + 11, bY + 19);

      // Divider Arrow
      const arrowX = bX + cardW + 8;
      ctx.fillStyle = colors.accent;
      ctx.font = '900 18px sans-serif';
      ctx.fillText('➔', arrowX, bY + cardH / 2 + 6);

      // Card 2: AFTER PHOTO
      const aX = arrowX + 22;
      const aY = bY;
      roundRect(ctx, aX, aY, cardW, cardH, 10);
      ctx.save();
      ctx.clip();
      if (img2) {
        ctx.drawImage(img2, aX, aY, cardW, cardH);
      } else {
        const aGrad = ctx.createLinearGradient(aX, aY, aX + cardW, aY + cardH);
        aGrad.addColorStop(0, colors.primary);
        aGrad.addColorStop(1, colors.accent);
        ctx.fillStyle = aGrad;
        ctx.fillRect(aX, aY, cardW, cardH);
      }
      ctx.restore();
      roundRect(ctx, aX, aY, cardW, cardH, 10);
      ctx.lineWidth = 2;
      ctx.strokeStyle = colors.primary;
      ctx.stroke();

      // AFTER Badge
      roundRect(ctx, aX + 6, aY + 6, 48, 18, 4);
      ctx.fillStyle = colors.primary;
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = '800 10px sans-serif';
      ctx.fillText('AFTER', aX + 12, aY + 19);

      // Text Section
      const textX = aX + cardW + 18;
      ctx.fillStyle = colors.text;
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title, textX, 22);

      ctx.fillStyle = colors.accent;
      ctx.font = `700 ${state.subSize}px '${font}', sans-serif`;
      ctx.fillText(subtitle, textX, 26 + state.titleSize + 4);

      ctx.restore();
    },

    /**
     * TEMPLATE 18: Triple Image Portfolio Gallery (3 Images)
     */
    triple_gallery: function (ctx, state, pIn, pOut, time = 0) {
      const { title, subtitle, badge, colors, font, dimensions } = state;
      const img1 = (state.images && state.images.img1) || state.avatarImg;
      const img2 = state.images && state.images.img2;
      const img3 = state.images && state.images.img3;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slide = (1 - pIn) * -120;
      ctx.translate(x + slide, y);

      const thumbSize = 72;
      const textW = Math.max(ctx.measureText(title).width, ctx.measureText(subtitle).width, 220);
      const totalWidth = (thumbSize * 3) + textW + 70;
      const totalHeight = 92;

      roundRect(ctx, 0, 0, totalWidth, totalHeight, 16);
      ctx.fillStyle = hexToRgba(colors.bg, colors.bgOpacity);
      ctx.fill();

      ctx.lineWidth = 1.5;
      ctx.strokeStyle = hexToRgba(colors.primary, 0.4);
      ctx.stroke();

      // 3 Photos in a Row
      const photos = [
        { img: img1, label: '01', col: colors.primary },
        { img: img2, label: '02', col: colors.accent },
        { img: img3, label: '03', col: '#10b981' }
      ];

      photos.forEach((p, idx) => {
        const px = 12 + idx * (thumbSize + 8);
        const py = (totalHeight - thumbSize) / 2;

        roundRect(ctx, px, py, thumbSize, thumbSize, 10);
        ctx.save();
        ctx.clip();
        if (p.img) {
          ctx.drawImage(p.img, px, py, thumbSize, thumbSize);
        } else {
          ctx.fillStyle = '#1e293b';
          ctx.fillRect(px, py, thumbSize, thumbSize);
          ctx.fillStyle = '#ffffff';
          ctx.font = '800 12px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText(`IMG ${p.label}`, px + thumbSize / 2, py + thumbSize / 2 + 4);
        }
        ctx.restore();

        roundRect(ctx, px, py, thumbSize, thumbSize, 10);
        ctx.lineWidth = 1.8;
        ctx.strokeStyle = p.col;
        ctx.stroke();
      });

      // Text Section
      const textX = 12 + 3 * (thumbSize + 8) + 12;

      if (badge) {
        ctx.fillStyle = colors.accent;
        ctx.font = `800 11px '${font}', sans-serif`;
        ctx.fillText(badge.toUpperCase(), textX, 16);
      }

      ctx.fillStyle = colors.text;
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textAlign = 'start';
      ctx.textBaseline = 'top';
      ctx.fillText(title, textX, badge ? 30 : 18);

      ctx.fillStyle = hexToRgba(colors.text, 0.7);
      ctx.font = `500 ${state.subSize}px '${font}', sans-serif`;
      ctx.fillText(subtitle, textX, (badge ? 34 : 22) + state.titleSize + 2);

      ctx.restore();
    },

    /**
     * TEMPLATE 19: Product Photo + Scannable QR Code (2 Images / QR)
     */
    product_qr: function (ctx, state, pIn, pOut, time = 0) {
      const { title, subtitle, badge, colors, font, dimensions } = state;
      const img1 = (state.images && state.images.img1) || state.avatarImg;
      const img2 = state.images && state.images.img2;
      const x = dimensions.x;
      const y = dimensions.y;
      const alpha = pIn * pOut;
      if (alpha <= 0.001) return;

      ctx.save();
      ctx.globalAlpha = alpha;

      const slide = (1 - pIn) * -120;
      ctx.translate(x + slide, y);

      const prodSize = 78;
      const qrSize = 78;
      const textW = Math.max(ctx.measureText(title).width, ctx.measureText(subtitle).width, 240);
      const totalWidth = prodSize + qrSize + textW + 70;
      const totalHeight = 98;

      roundRect(ctx, 0, 0, totalWidth, totalHeight, 16);
      ctx.fillStyle = hexToRgba(colors.bg, colors.bgOpacity);
      ctx.fill();

      ctx.lineWidth = 1.5;
      ctx.strokeStyle = hexToRgba(colors.primary, 0.4);
      ctx.stroke();

      // 1. Left Product Image
      const pX = 12;
      const pY = (totalHeight - prodSize) / 2;
      roundRect(ctx, pX, pY, prodSize, prodSize, 12);
      ctx.save();
      ctx.clip();
      if (img1) {
        ctx.drawImage(img1, pX, pY, prodSize, prodSize);
      } else {
        const pGrad = ctx.createLinearGradient(pX, pY, pX + prodSize, pY + prodSize);
        pGrad.addColorStop(0, colors.primary);
        pGrad.addColorStop(1, colors.accent);
        ctx.fillStyle = pGrad;
        ctx.fillRect(pX, pY, prodSize, prodSize);
      }
      ctx.restore();
      roundRect(ctx, pX, pY, prodSize, prodSize, 12);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = colors.primary;
      ctx.stroke();

      // 2. Middle Text
      const textX = pX + prodSize + 16;
      ctx.fillStyle = colors.text;
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title, textX, 16);

      ctx.fillStyle = colors.accent;
      ctx.font = `700 13px '${font}', sans-serif`;
      ctx.fillText(badge || 'AVAILABLE NOW', textX, 18 + state.titleSize + 2);

      ctx.fillStyle = hexToRgba(colors.text, 0.7);
      ctx.font = `500 ${state.subSize - 2}px '${font}', sans-serif`;
      ctx.fillText(subtitle, textX, 36 + state.titleSize + 2);

      // 3. Right: QR Code Box
      const qrX = totalWidth - qrSize - 14;
      const qrY = (totalHeight - qrSize) / 2;

      if (img2) {
        roundRect(ctx, qrX, qrY, qrSize, qrSize, 8);
        ctx.save();
        ctx.clip();
        ctx.drawImage(img2, qrX, qrY, qrSize, qrSize);
        ctx.restore();
      } else {
        drawQRPlaceholder(ctx, qrX, qrY, qrSize, colors.primary);
      }

      // QR pulsing corner brackets
      ctx.strokeStyle = colors.accent;
      ctx.lineWidth = 2;
      ctx.strokeRect(qrX - 2, qrY - 2, qrSize + 4, qrSize + 4);

      // Label below QR
      ctx.fillStyle = colors.accent;
      ctx.font = '800 9px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('SCAN TO BUY', qrX + qrSize / 2, qrY + qrSize + 10);
      ctx.textAlign = 'start';

      ctx.restore();
    },

    /**
     * TEMPLATE 20: Custom Template Builder
     * Fully customizable lower third authored via the Custom Shape & Element Studio
     */
    custom_builder: function (ctx, state, pIn, pOut, t = 0) {
      if (state.canvasElements !== undefined) {
        if (state.canvasElements.length > 0) {
          drawCanvasStudioElements(ctx, state, t);
        } else if (!state.isExporting) {
          // Empty canvas guide
          ctx.save();
          ctx.strokeStyle = 'rgba(99, 102, 241, 0.5)';
          ctx.lineWidth = 2.5;
          ctx.setLineDash([10, 8]);
          roundRect(ctx, 80, 850, 840, 160, 16);
          ctx.stroke();
          ctx.fillStyle = 'rgba(199, 210, 254, 0.95)';
          ctx.font = '700 22px Inter, sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('Canvas is Empty: Click "+ Add Elements" on the left sidebar to start designing!', 500, 915);
          ctx.fillStyle = 'rgba(165, 180, 252, 0.75)';
          ctx.font = '500 16px Inter, sans-serif';
          ctx.fillText('Tip: Press [Ctrl+Z] to undo deleting elements, or pick a Starter Layout', 500, 955);
          ctx.restore();
        }
        if ((state.selectedElementId || state.isAllSelected) && !state.isExporting) {
          drawSelectionGizmo(ctx, state);
        }
        return;
      }

      const { title, subtitle, colors, font, dimensions } = state;
      const b = state.builder || {};

      const x = dimensions.x;
      const y = dimensions.y;
      const shape = b.shape || 'rounded';
      const cornerRadius = b.cornerRadius !== undefined ? parseInt(b.cornerRadius, 10) : 14;
      const cardHeight = b.cardHeight ? parseInt(b.cardHeight, 10) : (shape === 'pill' ? 104 : 116);
      const cardWidthMode = b.cardWidthMode || 'auto';
      const customCardWidth = b.cardWidth ? parseInt(b.cardWidth, 10) : 720;
      const border = b.border || 'neon';
      const borderWidth = b.borderWidth ? parseFloat(b.borderWidth) : 2.0;
      const glowIntensity = b.glowIntensity !== undefined ? parseFloat(b.glowIntensity) : 18;
      const stripeStyle = b.stripeStyle || 'left-bar';

      const imageMode = String(b.imageMode !== undefined ? b.imageMode : '1');
      const photoShape = b.photoShape || 'rounded';
      const photoSize = b.photoSize ? parseInt(b.photoSize, 10) : 88;
      const layoutAlign = b.layoutAlign || 'left';

      const showBadge = b.showBadge !== undefined ? b.showBadge : true;
      const badgeText = b.badgeText || state.badge || 'EXCLUSIVE';
      const badgeIcon = b.badgeIcon || 'sparkles';
      const badgeColor = b.badgeColor || 'primary';
      const badgePlacement = b.badgePlacement || 'above-title';

      const showPrice = b.showPrice !== undefined ? b.showPrice : true;
      const priceText = b.priceText || '$199.99';
      const oldPriceText = b.oldPriceText || '';
      const discountTag = b.discountTag || '';

      const showCta = b.showCta !== undefined ? b.showCta : true;
      const ctaText = b.ctaText || 'SHOP NOW ➔';
      const ctaStyle = b.ctaStyle || 'gradient';

      const showRating = b.showRating !== undefined ? b.showRating : true;
      const ratingText = b.ratingText || '4.9 (1.2k+)';
      const starColor = b.starColor || '#f59e0b';

      const showUrgency = !!b.showUrgency;
      const urgencyText = b.urgencyText || '⚡ SPECIAL PROMO • LIMITED TIME ONLY';

      const showQr = !!b.showQr || imageMode === 'qr';
      const qrLabel = b.qrLabel || 'SCAN TO BUY';

      const img1 = (state.images && state.images.img1) || state.avatarImg;
      const img2 = state.images && state.images.img2;
      const img3 = state.images && state.images.img3;

      ctx.save();

      // Measure typography
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      const titleW = ctx.measureText(title || 'CUSTOM TITLE').width;
      ctx.font = `500 ${state.subSize}px '${font}', sans-serif`;
      const subW = ctx.measureText(subtitle || 'Subtitle description').width;
      let textW = Math.max(titleW, subW, 200);

      // Determine photo section width
      let imageSectionW = 0;
      if (imageMode === '1') {
        imageSectionW = photoSize + 16;
      } else if (imageMode === '2') {
        const dualSize = Math.max(50, photoSize * 0.9);
        imageSectionW = dualSize * 2 + 8 + 16;
      } else if (imageMode === '3') {
        const tripSize = Math.max(45, photoSize * 0.8);
        imageSectionW = tripSize * 3 + 12 + 16;
      } else if (imageMode === 'qr') {
        imageSectionW = photoSize + 16;
      }

      // Determine right widget width (rating, price badge, CTA button, QR)
      let rightW = 0;
      if (showQr) {
        rightW += 86 + 18;
      }
      if (showCta) {
        ctx.font = `800 12px '${font}', sans-serif`;
        const ctaBtnW = ctx.measureText(ctaText).width + 26;
        rightW += ctaBtnW + 14;
      }
      if (showPrice) {
        ctx.font = `800 13px '${font}', sans-serif`;
        let priceW = ctx.measureText(priceText).width + 20;
        if (oldPriceText) {
          ctx.font = `500 11px '${font}', sans-serif`;
          priceW += ctx.measureText(oldPriceText).width + 8;
        }
        if (discountTag) {
          ctx.font = `800 10px '${font}', sans-serif`;
          priceW += ctx.measureText(discountTag).width + 10;
        }
        rightW += priceW + 14;
      }

      // Card Width
      const padLeft = stripeStyle === 'left-bar' ? 24 : 18;
      const padRight = 24;
      let cardWidth = 0;
      if (cardWidthMode === 'custom') {
        cardWidth = customCardWidth;
      } else {
        cardWidth = Math.max(480, Math.min(1080, padLeft + imageSectionW + textW + rightW + padRight));
      }

      // 1. Top Urgency Ribbon
      if (showUrgency) {
        const ribbonH = 26;
        const ribbonW = Math.min(cardWidth - 24, 380);
        const ribbonX = x + 12;
        const ribbonY = y - ribbonH + 4;

        ctx.save();
        const rGrad = ctx.createLinearGradient(ribbonX, ribbonY, ribbonX + ribbonW, ribbonY);
        rGrad.addColorStop(0, colors.accent);
        rGrad.addColorStop(1, colors.primary);
        ctx.fillStyle = rGrad;
        roundRect(ctx, ribbonX, ribbonY, ribbonW, ribbonH, 6);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = `800 10px '${font}', sans-serif`;
        ctx.textBaseline = 'middle';
        const pulse = 0.85 + Math.sin(t * 8) * 0.15;
        ctx.globalAlpha = pulse;
        ctx.fillText(urgencyText, ribbonX + 12, ribbonY + ribbonH / 2);
        ctx.restore();
      }

      // 2. Base Background Fill
      ctx.fillStyle = hexToRgba(colors.bg, colors.bgOpacity);
      drawCardPath(ctx, x, y, cardWidth, cardHeight, shape, cornerRadius);
      ctx.fill();

      // 3. Border & Glow
      if (border === 'neon') {
        ctx.save();
        ctx.shadowColor = colors.primary;
        ctx.shadowBlur = glowIntensity;
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = borderWidth;
        drawCardPath(ctx, x, y, cardWidth, cardHeight, shape, cornerRadius);
        ctx.stroke();
        ctx.restore();
      } else if (border === 'gradient') {
        const bGrad = ctx.createLinearGradient(x, y, x + cardWidth, y + cardHeight);
        bGrad.addColorStop(0, colors.primary);
        bGrad.addColorStop(0.5, colors.accent);
        bGrad.addColorStop(1, colors.primary);
        ctx.strokeStyle = bGrad;
        ctx.lineWidth = borderWidth;
        drawCardPath(ctx, x, y, cardWidth, cardHeight, shape, cornerRadius);
        ctx.stroke();
      } else if (border === 'dashed') {
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = borderWidth;
        ctx.setLineDash([8, 5]);
        drawCardPath(ctx, x, y, cardWidth, cardHeight, shape, cornerRadius);
        ctx.stroke();
        ctx.setLineDash([]);
      } else if (border === 'double') {
        ctx.strokeStyle = colors.primary;
        ctx.lineWidth = borderWidth;
        drawCardPath(ctx, x, y, cardWidth, cardHeight, shape, cornerRadius);
        ctx.stroke();
        ctx.strokeStyle = hexToRgba(colors.accent, 0.4);
        ctx.lineWidth = 1;
        drawCardPath(ctx, x + 3, y + 3, cardWidth - 6, cardHeight - 6, shape, Math.max(0, cornerRadius - 3));
        ctx.stroke();
      } else if (border === 'subtle') {
        ctx.strokeStyle = hexToRgba(colors.primary, 0.45);
        ctx.lineWidth = borderWidth;
        drawCardPath(ctx, x, y, cardWidth, cardHeight, shape, cornerRadius);
        ctx.stroke();
      }

      // 4. Accent Stripe Style
      if (stripeStyle === 'left-bar') {
        ctx.save();
        drawCardPath(ctx, x, y, cardWidth, cardHeight, shape, cornerRadius);
        ctx.clip();
        const sGrad = ctx.createLinearGradient(x, y, x, y + cardHeight);
        sGrad.addColorStop(0, colors.primary);
        sGrad.addColorStop(1, colors.accent);
        ctx.fillStyle = sGrad;
        ctx.fillRect(x, y, 7, cardHeight);
        ctx.restore();
      } else if (stripeStyle === 'bottom-line') {
        ctx.save();
        drawCardPath(ctx, x, y, cardWidth, cardHeight, shape, cornerRadius);
        ctx.clip();
        const sGrad = ctx.createLinearGradient(x, y, x + cardWidth, y);
        sGrad.addColorStop(0, colors.primary);
        sGrad.addColorStop(1, colors.accent);
        ctx.fillStyle = sGrad;
        ctx.fillRect(x, y + cardHeight - 4, cardWidth, 4);
        ctx.restore();
      } else if (stripeStyle === 'top-ribbon') {
        ctx.save();
        drawCardPath(ctx, x, y, cardWidth, cardHeight, shape, cornerRadius);
        ctx.clip();
        const sGrad = ctx.createLinearGradient(x, y, x + cardWidth, y);
        sGrad.addColorStop(0, colors.primary);
        sGrad.addColorStop(1, colors.accent);
        ctx.fillStyle = sGrad;
        ctx.fillRect(x, y, cardWidth, 3.5);
        ctx.restore();
      } else if (stripeStyle === 'corner-brackets') {
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 2;
        const bLen = 14;
        ctx.beginPath();
        ctx.moveTo(x + 4, y + 4 + bLen);
        ctx.lineTo(x + 4, y + 4);
        ctx.lineTo(x + 4 + bLen, y + 4);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x + cardWidth - 4 - bLen, y + cardHeight - 4);
        ctx.lineTo(x + cardWidth - 4, y + cardHeight - 4);
        ctx.lineTo(x + cardWidth - 4, y + cardHeight - 4 - bLen);
        ctx.stroke();
      }

      // 5. Photos Rendering
      let currentX = x + padLeft;
      const imgY = y + (cardHeight - photoSize) / 2;

      let photoDrawX = currentX;
      if (layoutAlign === 'right') {
        photoDrawX = x + cardWidth - imageSectionW - 14;
      }

      if (imageMode === '1') {
        drawPhotoShape(ctx, photoDrawX, imgY, photoSize, photoShape, 12);
        ctx.save();
        ctx.clip();
        if (img1) {
          ctx.drawImage(img1, photoDrawX, imgY, photoSize, photoSize);
        } else {
          const grad = ctx.createLinearGradient(photoDrawX, imgY, photoDrawX + photoSize, imgY + photoSize);
          grad.addColorStop(0, colors.primary);
          grad.addColorStop(1, colors.accent);
          ctx.fillStyle = grad;
          ctx.fillRect(photoDrawX, imgY, photoSize, photoSize);
        }
        ctx.restore();
        drawPhotoShape(ctx, photoDrawX, imgY, photoSize, photoShape, 12);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = colors.primary;
        ctx.stroke();
        if (layoutAlign !== 'right') currentX += photoSize + 16;
      } else if (imageMode === '2') {
        const dualSize = Math.max(50, photoSize * 0.9);
        [img1, img2].forEach((img, idx) => {
          const ix = photoDrawX + idx * (dualSize + 8);
          drawPhotoShape(ctx, ix, imgY + 5, dualSize, photoShape, 10);
          ctx.save();
          ctx.clip();
          if (img) {
            ctx.drawImage(img, ix, imgY + 5, dualSize, dualSize);
          } else {
            const grad = ctx.createLinearGradient(ix, imgY, ix + dualSize, imgY + dualSize);
            grad.addColorStop(0, idx === 0 ? colors.primary : colors.accent);
            grad.addColorStop(1, idx === 0 ? colors.accent : colors.primary);
            ctx.fillStyle = grad;
            ctx.fillRect(ix, imgY + 5, dualSize, dualSize);
          }
          ctx.restore();
          drawPhotoShape(ctx, ix, imgY + 5, dualSize, photoShape, 10);
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = idx === 0 ? colors.primary : colors.accent;
          ctx.stroke();
        });
        if (layoutAlign !== 'right') currentX += dualSize * 2 + 8 + 16;
      } else if (imageMode === '3') {
        const tripSize = Math.max(45, photoSize * 0.8);
        [img1, img2, img3].forEach((img, idx) => {
          const ix = photoDrawX + idx * (tripSize + 6);
          drawPhotoShape(ctx, ix, imgY + 8, tripSize, photoShape, 8);
          ctx.save();
          ctx.clip();
          if (img) {
            ctx.drawImage(img, ix, imgY + 8, tripSize, tripSize);
          } else {
            const grad = ctx.createLinearGradient(ix, imgY, ix + tripSize, imgY + tripSize);
            grad.addColorStop(0, idx === 0 ? colors.primary : (idx === 1 ? colors.accent : '#38bdf8'));
            grad.addColorStop(1, idx === 0 ? colors.accent : (idx === 1 ? '#38bdf8' : colors.primary));
            ctx.fillStyle = grad;
            ctx.fillRect(ix, imgY + 8, tripSize, tripSize);
          }
          ctx.restore();
          drawPhotoShape(ctx, ix, imgY + 8, tripSize, photoShape, 8);
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = colors.primary;
          ctx.stroke();
        });
        if (layoutAlign !== 'right') currentX += tripSize * 3 + 12 + 16;
      } else if (imageMode === 'qr') {
        drawPhotoShape(ctx, photoDrawX, imgY, photoSize, photoShape, 12);
        ctx.save();
        ctx.clip();
        if (img1) {
          ctx.drawImage(img1, photoDrawX, imgY, photoSize, photoSize);
        } else {
          const grad = ctx.createLinearGradient(photoDrawX, imgY, photoDrawX + photoSize, imgY + photoSize);
          grad.addColorStop(0, colors.primary);
          grad.addColorStop(1, colors.accent);
          ctx.fillStyle = grad;
          ctx.fillRect(photoDrawX, imgY, photoSize, photoSize);
        }
        ctx.restore();
        drawPhotoShape(ctx, photoDrawX, imgY, photoSize, photoShape, 12);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = colors.primary;
        ctx.stroke();
        if (layoutAlign !== 'right') currentX += photoSize + 16;
      }

      // 6. Typography & Badge
      let textStartY = y + 18;

      if (showBadge && badgePlacement === 'above-title') {
        let bColor = colors.primary;
        if (badgeColor === 'accent') bColor = colors.accent;
        else if (badgeColor === 'gold') bColor = '#f59e0b';
        else if (badgeColor === 'emerald') bColor = '#10b981';
        else if (badgeColor === 'red') bColor = '#ef4444';

        ctx.font = `800 10px '${font}', sans-serif`;
        const bTextW = ctx.measureText(badgeText).width;
        const bW = bTextW + (badgeIcon !== 'none' ? 24 : 14);
        const bH = 18;

        ctx.fillStyle = hexToRgba(bColor, 0.22);
        roundRect(ctx, currentX, textStartY - 2, bW, bH, 4);
        ctx.fill();
        ctx.strokeStyle = bColor;
        ctx.lineWidth = 1;
        ctx.stroke();

        if (badgeIcon !== 'none') {
          drawBadgeIcon(ctx, badgeIcon, currentX + 4, textStartY + 1, 11, bColor);
        }
        ctx.fillStyle = bColor;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'left';
        ctx.fillText(badgeText, currentX + (badgeIcon !== 'none' ? 18 : 7), textStartY + bH / 2 - 2);
        textStartY += 22;
      }

      // Title
      ctx.fillStyle = colors.text;
      ctx.font = `800 ${state.titleSize}px '${font}', sans-serif`;
      ctx.textBaseline = 'top';
      ctx.fillText(title || 'CUSTOM TITLE', currentX, textStartY);

      let belowTitleY = textStartY + state.titleSize + 4;

      // Rating Stars (if enabled)
      if (showRating) {
        for (let i = 0; i < 5; i++) {
          drawStar(ctx, currentX + i * 14 + 6, belowTitleY + 6, 5, 5.5, 2.8, starColor);
        }
        ctx.fillStyle = starColor;
        ctx.font = `800 11px '${font}', sans-serif`;
        ctx.fillText(ratingText, currentX + 76, belowTitleY + 1);
        belowTitleY += 18;
      }

      // Subtitle
      ctx.fillStyle = hexToRgba(colors.text, 0.72);
      ctx.font = `500 ${state.subSize}px '${font}', sans-serif`;
      ctx.fillText(subtitle || 'Subtitle description', currentX, belowTitleY);

      // 7. Right Widgets: Scannable QR, CTA Button & Price
      let rightEdgeX = x + cardWidth - 18;
      if (layoutAlign === 'right') {
        rightEdgeX = photoDrawX - 16;
      }

      // Scannable QR Code Box
      if (showQr) {
        const qrSize = Math.min(80, cardHeight - 24);
        const qrX = rightEdgeX - qrSize;
        const qrY = y + (cardHeight - qrSize) / 2;

        if (img2) {
          roundRect(ctx, qrX, qrY, qrSize, qrSize, 8);
          ctx.save();
          ctx.clip();
          ctx.drawImage(img2, qrX, qrY, qrSize, qrSize);
          ctx.restore();
        } else {
          drawQRPlaceholder(ctx, qrX, qrY, qrSize, colors.primary);
        }
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(qrX - 2, qrY - 2, qrSize + 4, qrSize + 4);

        ctx.fillStyle = colors.accent;
        ctx.font = '800 9px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(qrLabel, qrX + qrSize / 2, qrY + qrSize + 9);
        ctx.textAlign = 'start';
        rightEdgeX = qrX - 14;
      }

      // CTA Button
      if (showCta) {
        ctx.font = `800 12px '${font}', sans-serif`;
        const ctaBtnW = ctx.measureText(ctaText).width + 26;
        const ctaH = 34;
        const ctaX = rightEdgeX - ctaBtnW;
        const ctaY = y + (cardHeight - ctaH) / 2;

        if (ctaStyle === 'neon') {
          ctx.save();
          ctx.shadowColor = colors.accent;
          ctx.shadowBlur = 12;
          ctx.fillStyle = hexToRgba(colors.accent, 0.2);
          roundRect(ctx, ctaX, ctaY, ctaBtnW, ctaH, shape === 'sharp' ? 4 : ctaH / 2);
          ctx.fill();
          ctx.strokeStyle = colors.accent;
          ctx.lineWidth = 1.5;
          ctx.stroke();
          ctx.restore();
        } else if (ctaStyle === 'solid') {
          ctx.fillStyle = colors.primary;
          roundRect(ctx, ctaX, ctaY, ctaBtnW, ctaH, shape === 'sharp' ? 4 : ctaH / 2);
          ctx.fill();
        } else if (ctaStyle === 'glass') {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
          roundRect(ctx, ctaX, ctaY, ctaBtnW, ctaH, shape === 'sharp' ? 4 : ctaH / 2);
          ctx.fill();
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          const ctaGrad = ctx.createLinearGradient(ctaX, ctaY, ctaX + ctaBtnW, ctaY);
          ctaGrad.addColorStop(0, colors.primary);
          ctaGrad.addColorStop(1, colors.accent);
          ctx.fillStyle = ctaGrad;
          roundRect(ctx, ctaX, ctaY, ctaBtnW, ctaH, shape === 'sharp' ? 4 : ctaH / 2);
          ctx.fill();
        }

        ctx.fillStyle = '#ffffff';
        ctx.font = `800 12px '${font}', sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText(ctaText, ctaX + ctaBtnW / 2, ctaY + ctaH / 2);
        ctx.textAlign = 'start';

        rightEdgeX = ctaX - 12;
      }

      // Price Tag Pill (with strikethrough & discount tag)
      if (showPrice) {
        ctx.font = `800 14px '${font}', sans-serif`;
        const pMainW = ctx.measureText(priceText).width;
        let pOldW = 0;
        if (oldPriceText) {
          ctx.font = `600 11px '${font}', sans-serif`;
          pOldW = ctx.measureText(oldPriceText).width + 8;
        }
        let pDiscW = 0;
        if (discountTag) {
          ctx.font = `800 10px '${font}', sans-serif`;
          pDiscW = ctx.measureText(discountTag).width + 10;
        }

        const totalPW = pMainW + pOldW + pDiscW + 20;
        const priceH = 34;
        const priceX = rightEdgeX - totalPW;
        const priceY = y + (cardHeight - priceH) / 2;

        ctx.fillStyle = hexToRgba(colors.accent, 0.18);
        roundRect(ctx, priceX, priceY, totalPW, priceH, shape === 'sharp' ? 4 : priceH / 2);
        ctx.fill();
        ctx.strokeStyle = colors.accent;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        let curPX = priceX + 10;

        if (oldPriceText) {
          ctx.fillStyle = hexToRgba(colors.text, 0.55);
          ctx.font = `600 11px '${font}', sans-serif`;
          ctx.textBaseline = 'middle';
          ctx.fillText(oldPriceText, curPX, priceY + priceH / 2);
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(curPX - 2, priceY + priceH / 2 + 5);
          ctx.lineTo(curPX + pOldW - 6, priceY + priceH / 2 - 5);
          ctx.stroke();
          curPX += pOldW;
        }

        ctx.fillStyle = colors.accent;
        ctx.font = `800 14px '${font}', sans-serif`;
        ctx.textBaseline = 'middle';
        ctx.fillText(priceText, curPX, priceY + priceH / 2);
        curPX += pMainW + 6;

        if (discountTag) {
          ctx.fillStyle = '#ef4444';
          roundRect(ctx, curPX, priceY + 6, pDiscW, priceH - 12, 4);
          ctx.fill();
          ctx.fillStyle = '#ffffff';
          ctx.font = `800 9px sans-serif`;
          ctx.textAlign = 'center';
          ctx.fillText(discountTag, curPX + pDiscW / 2, priceY + priceH / 2);
          ctx.textAlign = 'start';
        }
      }

      ctx.restore();
    }
  };

  /**
   * Main Frame Render function
   * Handles universal motion transitions & 60fps frame-by-frame rendering
   */
  function renderFrame(ctx, state, time) {
    const durIn = state.durIn;
    const durHold = state.durHold;
    const durOut = state.durOut;
    const totalDur = durIn + durHold + durOut;

    // Loop or clamp time
    let t = time;
    if (t > totalDur) {
      t = totalDur;
    }

    // Clear Canvas for true Alpha transparency (or Green Screen for CapCut mobile Chroma Key)
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    if (state.greenScreenExport) {
      ctx.fillStyle = '#00ff00';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }

    const motionIn = state.motionIn || 'slide-left';
    const motionOut = state.motionOut || 'slide-down';
    const motionEase = state.motionEase || 'cubic';

    // Pick easing functions
    let easeInFn = Easing.easeOutCubic;
    let easeOutFn = Easing.easeInCubic;
    if (motionEase === 'fluid') {
      easeInFn = Easing.easeOutFluid;
      easeOutFn = Easing.easeInCubic;
    } else if (motionEase === 'elastic') {
      easeInFn = Easing.easeOutElastic;
      easeOutFn = Easing.easeInBack;
    } else if (motionEase === 'snappy') {
      easeInFn = Easing.easeOutBack;
      easeOutFn = Easing.easeInQuad;
    } else if (motionEase === 'linear') {
      easeInFn = Easing.linear;
      easeOutFn = Easing.linear;
    }

    // Native 4K UHD (3840x2160) Vector Scaling
    const scaleFactor = ctx.canvas.width / 1920;
    ctx.save();
    if (scaleFactor !== 1) {
      ctx.scale(scaleFactor, scaleFactor);
    }

    // Calculate In/Out animation progress (0.0 to 1.0)
    let pIn = 1;
    let pOut = 1;
    let isEntrance = false;
    let isExit = false;

    if (t < durIn) {
      isEntrance = true;
      const rawIn = Math.max(0, Math.min(1, t / durIn));
      pIn = easeInFn(rawIn);
      pOut = 1;
    } else if (t < durIn + durHold) {
      pIn = 1;
      pOut = 1;
    } else {
      isExit = true;
      const rawOut = Math.max(0, Math.min(1, (t - (durIn + durHold)) / durOut));
      pIn = 1;
      pOut = 1 - easeOutFn(rawOut);
    }

    ctx.save();

    // 1. Entrance Transitions (In Green Screen mode, enforce 100% solid opacity so green background NEVER bleeds through)
    if (isEntrance) {
      const isGreen = state.greenScreenExport === true;
      const slideDistX = isGreen ? 1920 : 450;
      const slideDistY = isGreen ? 1080 : 220;

      if (motionIn === 'slide-left') {
        ctx.translate((1 - pIn) * -slideDistX, 0);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pIn));
      } else if (motionIn === 'slide-right') {
        ctx.translate((1 - pIn) * slideDistX, 0);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pIn));
      } else if (motionIn === 'slide-up') {
        ctx.translate(0, (1 - pIn) * slideDistY);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pIn));
      } else if (motionIn === 'slide-down') {
        ctx.translate(0, (1 - pIn) * -slideDistY);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pIn));
      } else if (motionIn === 'elastic-pop') {
        const ax = state.dimensions.x + 300;
        const ay = state.dimensions.y + 60;
        const s = Math.max(0.01, pIn);
        ctx.translate(ax, ay);
        ctx.scale(s, s);
        ctx.translate(-ax, -ay);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pIn));
      } else if (motionIn === 'zoom-fade') {
        const ax = state.dimensions.x + 300;
        const ay = state.dimensions.y + 60;
        const s = 1.30 - 0.30 * Math.max(0, Math.min(1, pIn));
        ctx.translate(ax, ay);
        ctx.scale(s, s);
        ctx.translate(-ax, -ay);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pIn));
      } else if (motionIn === 'mask-wipe') {
        ctx.beginPath();
        ctx.rect(0, 0, 1920 * Math.max(0, Math.min(1, pIn)), 1080);
        ctx.clip();
      } else if (motionIn === 'flip-3d') {
        const ay = state.dimensions.y + 60;
        const sy = Math.max(0.01, Math.min(1, pIn));
        ctx.translate(0, ay);
        ctx.scale(1, sy);
        ctx.translate(0, -ay);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pIn));
      } else if (motionIn === 'cyber-glitch') {
        const jitterX = (1 - pIn) * (Math.sin(t * 80) * 45);
        const jitterY = (1 - pIn) * (Math.cos(t * 60) * 10);
        ctx.translate(jitterX, jitterY);
        ctx.globalAlpha = isGreen ? 1.0 : (pIn < 0.2 ? (Math.sin(t * 100) > 0 ? 0.9 : 0.2) : Math.min(1, pIn));
      } else if (motionIn === 'smooth-fade') {
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pIn));
      }
    }

    // 2. Exit Transitions (In Green Screen mode, enforce 100% solid opacity)
    if (isExit) {
      const isGreen = state.greenScreenExport === true;
      const slideDistX = isGreen ? 1920 : 450;
      const slideDistY = isGreen ? 1080 : 240;

      if (motionOut === 'slide-down') {
        ctx.translate(0, (1 - pOut) * slideDistY);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pOut));
      } else if (motionOut === 'slide-left') {
        ctx.translate((1 - pOut) * -slideDistX, 0);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pOut));
      } else if (motionOut === 'slide-right') {
        ctx.translate((1 - pOut) * slideDistX, 0);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pOut));
      } else if (motionOut === 'slide-up') {
        ctx.translate(0, (1 - pOut) * -slideDistY);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pOut));
      } else if (motionOut === 'scale-down') {
        const ax = state.dimensions.x + 300;
        const ay = state.dimensions.y + 60;
        const s = Math.max(0.001, pOut);
        ctx.translate(ax, ay);
        ctx.scale(s, s);
        ctx.translate(-ax, -ay);
        ctx.globalAlpha = isGreen ? 1.0 : Math.max(0, Math.min(1, pOut));
      } else if (motionOut === 'mask-wipe') {
        ctx.beginPath();
        ctx.rect(0, 0, 1920 * Math.max(0, Math.min(1, pOut)), 1080);
        ctx.clip();
      } else if (motionOut === 'glitch-fade') {
        const jitterX = (1 - pOut) * (Math.sin(t * 90) * 45);
        ctx.translate(jitterX, 0);
        ctx.globalAlpha = Math.max(0, Math.min(1, pOut * (Math.sin(t * 60) > 0 ? 1 : 0.4)));
      } else if (motionOut === 'smooth-fade') {
        ctx.globalAlpha = Math.max(0, Math.min(1, pOut));
      }
    }

    // Call selected template renderer
    const renderer = Templates[state.template] || Templates.minimal;
    renderer(ctx, state, 1, 1, t);

    ctx.restore(); // restore motion in/out transformations
    ctx.restore(); // restore 4K UHD scale factor
  }

  return {
    renderFrame,
    Templates,
    Easing
  };

})();
