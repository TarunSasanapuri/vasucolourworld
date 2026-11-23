/**
 * ============================================================================
 * Vasu Colour World Paints - 3D Interactive Paint Can
 * Powered by Three.js with Attractive Brand Typography Label
 * ============================================================================
 */

(function () {
  let setCanColorCallback = null;

  function toHexStr(colorHex) {
    if (typeof colorHex === 'number') {
      return '#' + colorHex.toString(16).padStart(6, '0');
    }
    return colorHex || '#7b2fbf';
  }

  function init3DCan() {
    const stage = document.getElementById('stage');
    if (!stage || typeof THREE === 'undefined') return;

    try {
      // 1. Renderer Setup
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      stage.prepend(renderer.domElement);

      // 2. Scene & Camera Setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 50);
      camera.position.set(0, 0.35, 7.2);

      // 3. Lighting (Vibrant Studio Setup)
      scene.add(new THREE.HemisphereLight(0xffffff, 0x8890c0, 0.95));
      const dirLight = new THREE.DirectionalLight(0xffffff, 0.95);
      dirLight.position.set(4, 6, 5);
      scene.add(dirLight);

      const fillLight = new THREE.DirectionalLight(0xffffff, 0.45);
      fillLight.position.set(-4, -2, -3);
      scene.add(fillLight);

      // 4. Helper: Draw Attractive "Vasu Colour World" Label onto Canvas
      function drawCanLabel(canvas, colorHex) {
        const ctx = canvas.getContext('2d');
        const w = canvas.width;
        const h = canvas.height;
        const hexStr = toHexStr(colorHex);

        // Fill background with active paint shade
        ctx.fillStyle = hexStr;
        ctx.fillRect(0, 0, w, h);

        // Subtle gloss & lighting gradient
        const glossGrad = ctx.createLinearGradient(0, 0, 0, h);
        glossGrad.addColorStop(0, 'rgba(255, 255, 255, 0.22)');
        glossGrad.addColorStop(0.12, 'rgba(255, 255, 255, 0.05)');
        glossGrad.addColorStop(0.5, 'rgba(0, 0, 0, 0)');
        glossGrad.addColorStop(0.9, 'rgba(0, 0, 0, 0.1)');
        glossGrad.addColorStop(1, 'rgba(255, 255, 255, 0.18)');
        ctx.fillStyle = glossGrad;
        ctx.fillRect(0, 0, w, h);

        // Gold metallic trim strips at top and bottom
        const goldStrip = ctx.createLinearGradient(0, 0, w, 0);
        goldStrip.addColorStop(0, '#c59b27');
        goldStrip.addColorStop(0.25, '#fff6c2');
        goldStrip.addColorStop(0.5, '#d4af37');
        goldStrip.addColorStop(0.75, '#fff6c2');
        goldStrip.addColorStop(1, '#996515');

        ctx.fillStyle = goldStrip;
        ctx.fillRect(0, 0, w, 14);
        ctx.fillRect(0, h - 14, w, 14);

        ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        ctx.fillRect(0, 14, w, 3);
        ctx.fillRect(0, h - 17, w, 3);

        function roundRect(c, x, y, bw, bh, r) {
          c.beginPath();
          c.moveTo(x + r, y);
          c.lineTo(x + bw - r, y);
          c.quadraticCurveTo(x + bw, y, x + bw, y + r);
          c.lineTo(x + bw, y + bh - r);
          c.quadraticCurveTo(x + bw, y + bh, x + bw - r, y + bh);
          c.lineTo(x + r, y + bh);
          c.quadraticCurveTo(x, y + bh, x, y + bh - r);
          c.lineTo(x, y + r);
          c.quadraticCurveTo(x, y, x + r, y);
          c.closePath();
        }

        // Draw symmetric brand badges on Front (x = 256) and Back (x = 768)
        const badgeW = 420;
        const badgeH = 290;
        const badgeY = (h - badgeH) / 2;
        const centers = [w * 0.25, w * 0.75];

        centers.forEach((cx) => {
          const bx = cx - badgeW / 2;

          // Soft drop shadow behind badge
          ctx.save();
          ctx.shadowColor = 'rgba(0, 0, 0, 0.45)';
          ctx.shadowBlur = 16;
          ctx.shadowOffsetY = 6;

          // Crisp pearl white card
          const cardGrad = ctx.createLinearGradient(bx, badgeY, bx, badgeY + badgeH);
          cardGrad.addColorStop(0, '#ffffff');
          cardGrad.addColorStop(0.85, '#fbfcfe');
          cardGrad.addColorStop(1, '#f1f5f9');
          ctx.fillStyle = cardGrad;
          roundRect(ctx, bx, badgeY, badgeW, badgeH, 20);
          ctx.fill();
          ctx.restore();

          // Outer Metallic Gold Gradient Border
          ctx.save();
          ctx.lineWidth = 5;
          const borderGrad = ctx.createLinearGradient(bx, badgeY, bx + badgeW, badgeY + badgeH);
          borderGrad.addColorStop(0, '#c59b27');
          borderGrad.addColorStop(0.3, '#fff4b8');
          borderGrad.addColorStop(0.6, '#d4af37');
          borderGrad.addColorStop(1, '#996515');
          ctx.strokeStyle = borderGrad;
          roundRect(ctx, bx, badgeY, badgeW, badgeH, 20);
          ctx.stroke();

          // Inner Fine Accent Border
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = 'rgba(212, 175, 55, 0.6)';
          roundRect(ctx, bx + 7, badgeY + 7, badgeW - 14, badgeH - 14, 15);
          ctx.stroke();
          ctx.restore();

          // -----------------------------------------------------------------
          // ATTRACTIVE BRAND TYPOGRAPHY & MOTIFS
          // -----------------------------------------------------------------
          ctx.save();
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Decorative Top Header
          ctx.fillStyle = '#b45309'; // Warm amber/gold
          ctx.font = '700 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          ctx.letterSpacing = '3px';
          ctx.fillText('★ ★ ★   ESTD. 1995   ★ ★ ★', cx, badgeY + 36);

          // 5 Colorful Paint Drops Motif
          const dotColors = ['#e11d48', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6'];
          const dotSpacing = 16;
          const dotY = badgeY + 56;
          dotColors.forEach((color, i) => {
            const dotX = cx + (i - 2) * dotSpacing;
            ctx.beginPath();
            ctx.arc(dotX, dotY, 4.5, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
          });

          // MAIN BRAND TITLE: "VASU COLOUR WORLD"
          ctx.font = '900 32px "Trebuchet MS", "Arial Black", -apple-system, sans-serif';
          ctx.fillStyle = '#0f172a'; // Deep slate
          ctx.shadowColor = 'rgba(0, 0, 0, 0.15)';
          ctx.shadowBlur = 4;
          ctx.shadowOffsetY = 2;
          ctx.fillText('VASU COLOUR WORLD', cx, badgeY + 104);
          ctx.shadowColor = 'transparent';

          // Vibrant Crimson Ribbon for "PAINTS"
          const ribbonW = 180;
          const ribbonH = 34;
          const ribbonX = cx - ribbonW / 2;
          const ribbonY = badgeY + 134;

          const ribGrad = ctx.createLinearGradient(ribbonX, ribbonY, ribbonX + ribbonW, ribbonY);
          ribGrad.addColorStop(0, '#be123c');
          ribGrad.addColorStop(0.5, '#e11d48');
          ribGrad.addColorStop(1, '#9f1239');
          ctx.fillStyle = ribGrad;
          roundRect(ctx, ribbonX, ribbonY, ribbonW, ribbonH, 8);
          ctx.fill();

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          ctx.letterSpacing = '4px';
          ctx.fillText('PAINTS', cx, ribbonY + ribbonH / 2 + 1);

          // Subtitle: "PREMIUM EMULSIONS & FINISHES"
          ctx.fillStyle = '#334155';
          ctx.font = '700 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          ctx.letterSpacing = '1.5px';
          ctx.fillText('PREMIUM EMULSIONS & FINISHES', cx, badgeY + 198);

          // Divider rule
          ctx.strokeStyle = '#e2e8f0';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(bx + 40, badgeY + 220);
          ctx.lineTo(bx + badgeW - 40, badgeY + 220);
          ctx.stroke();

          // Quality Guarantee Callout
          ctx.fillStyle = '#047857'; // Deep emerald
          ctx.font = '700 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          ctx.letterSpacing = '1px';
          ctx.fillText('✔ 100% QUALITY & SHADE ACCURACY', cx, badgeY + 242);

          // Location Callout
          ctx.fillStyle = '#64748b';
          ctx.font = '500 10px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          ctx.letterSpacing = '0.5px';
          ctx.fillText('PATHAPATNAM (A.P)', cx, badgeY + 264);

          ctx.restore();
        });
      }

      // 5. Helper to construct a realistic paint can geometry
      function createCanMesh(hexColor) {
        const canGroup = new THREE.Group();

        // Metallic tin material for can body, lid, base and handle
        const metalMat = new THREE.MeshStandardMaterial({
          color: 0xc9ccd6,
          metalness: 0.85,
          roughness: 0.3
        });

        // Dynamic 2D canvas texture for the brand label band
        const labelCanvas = document.createElement('canvas');
        labelCanvas.width = 1024;
        labelCanvas.height = 512;
        drawCanLabel(labelCanvas, hexColor);

        const labelTexture = new THREE.CanvasTexture(labelCanvas);
        labelTexture.wrapS = THREE.RepeatWrapping;
        labelTexture.wrapT = THREE.ClampToEdgeWrapping;

        const labelMat = new THREE.MeshStandardMaterial({
          map: labelTexture,
          roughness: 0.35,
          metalness: 0.15
        });

        // Top paint pool material
        const topMat = new THREE.MeshStandardMaterial({
          color: hexColor,
          roughness: 0.45
        });

        // Can cylinder body (metal tin interior/edges)
        const body = new THREE.Mesh(new THREE.CylinderGeometry(1.3, 1.3, 2.6, 48), metalMat);
        canGroup.add(body);

        // Color label band with attractive brand typography
        // thetaStart = -Math.PI / 2 centers the front badge at theta = 0 facing the camera
        const band = new THREE.Mesh(
          new THREE.CylinderGeometry(1.32, 1.32, 1.5, 64, 1, true, -Math.PI / 2, Math.PI * 2),
          labelMat
        );
        band.position.y = 0;
        canGroup.add(band);

        // Can top rim / lid
        const lid = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 0.16, 48), metalMat);
        lid.position.y = 1.38;
        canGroup.add(lid);

        // Can bottom rim
        const base = lid.clone();
        base.position.y = -1.38;
        canGroup.add(base);

        // Can paint surface on top (also shows selected shade)
        const paintTop = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.1, 0.04, 48), topMat);
        paintTop.position.y = 1.47;
        canGroup.add(paintTop);

        // Metal handle
        const handle = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.04, 8, 48, Math.PI), metalMat);
        handle.position.y = 1.4;
        canGroup.add(handle);

        canGroup.userData.labelCanvas = labelCanvas;
        canGroup.userData.labelTexture = labelTexture;
        canGroup.userData.topMaterial = topMat;

        return canGroup;
      }

      // 6. Main Hero Can
      const mainCan = createCanMesh(0x7b2fbf);
      scene.add(mainCan);

      // 7. Orbiting Mini Cans
      const miniColors = [0xe8262b, 0xf9c80e, 0x1d6fe0, 0x2aa84a];
      const miniCans = miniColors.map((color, index) => {
        const mini = createCanMesh(color);
        mini.scale.setScalar(0.28);
        mini.userData.angle = (index * Math.PI) / 2;
        scene.add(mini);
        return mini;
      });

      // 8. Export color updater for swatch clicks
      setCanColorCallback = function (hexColor) {
        if (mainCan && mainCan.userData.labelCanvas && mainCan.userData.labelTexture) {
          drawCanLabel(mainCan.userData.labelCanvas, hexColor);
          mainCan.userData.labelTexture.needsUpdate = true;
          if (mainCan.userData.topMaterial) {
            mainCan.userData.topMaterial.color.set(hexColor);
          }
        }
      };

      // 9. Touch & Mouse Rotation Controls
      let rotY = 0;
      let velocity = 0.006;
      let isDragging = false;
      let lastX = 0;

      stage.addEventListener('pointerdown', (e) => {
        isDragging = true;
        lastX = e.clientX;
      });

      window.addEventListener('pointerup', () => {
        isDragging = false;
      });

      window.addEventListener('pointermove', (e) => {
        if (isDragging) {
          velocity = (e.clientX - lastX) * 0.01;
          lastX = e.clientX;
        }
      });

      // 10. Responsive Resize Handler
      function handleResize() {
        const width = stage.clientWidth;
        const height = stage.clientHeight;
        if (!width || !height) return;
        renderer.setSize(width, height);
        camera.aspect = width / height;

        // Dynamically adjust camera framing for desktop and mobile viewports
        if (width < 500) {
          camera.position.set(0, 0.24, 7.6);
        } else if (width < 800) {
          camera.position.set(0, 0.3, 7.4);
        } else {
          camera.position.set(0, 0.35, 7.2);
        }

        camera.updateProjectionMatrix();
      }

      window.addEventListener('resize', handleResize);
      handleResize();

      // 11. Animation Render Loop
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      let animTime = 0;

      function animate() {
        requestAnimationFrame(animate);

        if (!prefersReducedMotion || isDragging) {
          rotY += velocity;
          if (!isDragging) {
            velocity += (0.006 - velocity) * 0.03;
          }
        }

        animTime += 0.012;

        // Floating motion for main can (vertically snug and centered)
        mainCan.rotation.set(0.18, rotY, 0.06);
        mainCan.position.y = 0.12 + Math.sin(animTime) * 0.08;

        // Orbiting mini cans
        miniCans.forEach((mini) => {
          const currentAngle = mini.userData.angle + animTime * (prefersReducedMotion ? 0 : 0.6);
          mini.position.set(
            Math.cos(currentAngle) * 2.5,
            0.12 + Math.sin(currentAngle * 1.3) * 0.55,
            Math.sin(currentAngle) * 1.8
          );
          mini.rotation.y = currentAngle;
          mini.rotation.z = 0.3;
        });

        renderer.render(scene, camera);
      }

      animate();
    } catch (err) {
      console.warn('3D canvas initialization failed:', err);
      stage.innerHTML = '<p style="text-align:center;color:var(--mut);padding-top:40px">Interactive 3D preview requires WebGL.</p>';
    }
  }

  // Expose to global window object
  window.Vasu3D = {
    init: init3DCan,
    setColor: function (hex) {
      if (typeof setCanColorCallback === 'function') {
        setCanColorCallback(hex);
      }
    }
  };
})();
