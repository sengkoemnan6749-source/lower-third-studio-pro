/**
 * LowerThird Studio - Transparent Video & Snapshot Exporter
 * Supports WebM with VP9 Alpha Channel Transparency & PNG snapshots
 */

const Exporter = (function () {

  // Check supported mime types for alpha video
  function getSupportedMimeType() {
    const types = [
      'video/webm;codecs=vp9',
      'video/webm;codecs=vp8',
      'video/webm',
    ];
    for (const t of types) {
      if (MediaRecorder.isTypeSupported(t)) {
        return t;
      }
    }
    return '';
  }

  /**
   * Export high-resolution transparent PNG snapshot (Cropped to graphic bounds for crisp CapCut overlay)
   */
  function exportSnapshotPNG(canvas, filename = 'lower_third_badge.png', cropToGraphic = true) {
    let outCanvas = canvas;
    if (cropToGraphic) {
      try {
        const ctx = canvas.getContext('2d');
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        let minX = canvas.width, minY = canvas.height, maxX = 0, maxY = 0;
        let found = false;
        for (let y = 0; y < canvas.height; y += 2) {
          const rowStart = y * canvas.width;
          for (let x = 0; x < canvas.width; x += 2) {
            const alpha = data[(rowStart + x) * 4 + 3];
            if (alpha > 12) {
              found = true;
              if (x < minX) minX = x;
              if (x > maxX) maxX = x;
              if (y < minY) minY = y;
              if (y > maxY) maxY = y;
            }
          }
        }
        if (found && maxX > minX && maxY > minY) {
          const pad = 24;
          minX = Math.max(0, minX - pad);
          minY = Math.max(0, minY - pad);
          maxX = Math.min(canvas.width, maxX + pad);
          maxY = Math.min(canvas.height, maxY + pad);
          const w = maxX - minX;
          const h = maxY - minY;
          outCanvas = document.createElement('canvas');
          outCanvas.width = w;
          outCanvas.height = h;
          const outCtx = outCanvas.getContext('2d');
          outCtx.drawImage(canvas, minX, minY, w, h, 0, 0, w, h);
        }
      } catch (err) {
        console.warn('Crop fallback to full canvas:', err);
      }
    }
    const link = document.createElement('a');
    link.download = filename;
    link.href = outCanvas.toDataURL('image/png');
    link.click();
  }

  /**
   * Export transparent WebM video (VP9 alpha)
   */
  async function exportTransparentVideo(canvas, state, onProgress, onComplete, onError) {
    const mimeType = getSupportedMimeType();
    if (!mimeType) {
      onError('Your browser does not support MediaRecorder with WebM video.');
      return;
    }

    const fps = 60;
    const durIn = state.durIn;
    const durHold = state.durHold;
    const durOut = state.durOut;
    const totalDuration = durIn + durHold + durOut;
    const totalFrames = Math.ceil(totalDuration * fps);
    const frameInterval = 1000 / fps;

    const is4K = canvas.width >= 3840;
    const stream = canvas.captureStream(fps);
    const options = {
      mimeType: mimeType,
      videoBitsPerSecond: is4K ? 45000000 : 18000000 // 45 Mbps for 4K UHD, 18 Mbps for 1080p
    };

    let mediaRecorder;
    try {
      mediaRecorder = new MediaRecorder(stream, options);
    } catch (e) {
      console.warn('Fallback to basic WebM options', e);
      mediaRecorder = new MediaRecorder(stream);
    }

    const chunks = [];
    mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        chunks.push(e.data);
      }
    };

    let isCancelled = false;

    const cancel = () => {
      isCancelled = true;
      if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
      }
    };

    mediaRecorder.onstop = () => {
      if (isCancelled) return;
      const blob = new Blob(chunks, { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const resTag = is4K ? '4K_UHD_' : '1080p_';
      const greenTag = state.greenScreenExport ? '_greenscreen' : '';
      a.download = `lower_third_${state.template}_${resTag}${Date.now()}${greenTag}.webm`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 10000);
      onComplete();
    };

    // Start Recording
    mediaRecorder.start();

    const ctx = canvas.getContext('2d');
    let currentFrame = 0;

    // Render frame-by-frame smoothly
    function renderStep() {
      if (isCancelled) return;

      const currentTime = currentFrame / fps;
      Engine.renderFrame(ctx, state, currentTime);

      currentFrame++;
      const percent = Math.min(100, Math.round((currentFrame / totalFrames) * 100));
      onProgress(currentFrame, totalFrames, percent);

      if (currentFrame <= totalFrames) {
        // Request next frame with accurate timing
        setTimeout(renderStep, frameInterval / 2); // Slightly faster than realtime for rapid export
      } else {
        // Finished all frames
        setTimeout(() => {
          if (mediaRecorder.state !== 'inactive') {
            mediaRecorder.stop();
          }
        }, 150);
      }
    }

    renderStep();

    return { cancel };
  }

  return {
    exportSnapshotPNG,
    exportTransparentVideo,
    getSupportedMimeType
  };

})();

