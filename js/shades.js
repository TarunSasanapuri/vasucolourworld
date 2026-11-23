/**
 * ============================================================================
 * Vasu Colour World Paints - Shade Visualizer & Palette
 * ============================================================================
 */

(function () {
  let currentIndex = 0;

  // Helper to calculate high contrast text (dark vs white) for any background color
  function getContrastColor(hex) {
    if (!hex) return '#ffffff';
    const cleanHex = hex.replace('#', '');
    const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
    const g = parseInt(cleanHex.substring(2, 4), 16) || 0;
    const b = parseInt(cleanHex.substring(4, 6), 16) || 0;
    const yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 155 ? '#0f172a' : '#ffffff';
  }

  function pickShade(index) {
    const shades = window.VasuData && window.VasuData.SHADES;
    if (!shades || !shades[index]) return;

    currentIndex = index;
    const shade = shades[index];
    const textColor = getContrastColor(shade.hex);

    // 1. Update Room / Wall Visualizer Preview
    const roomEl = document.getElementById('room');
    const roomNameEl = document.getElementById('room-name');
    const roomHexEl = document.getElementById('room-hex');
    const roomChipEl = document.getElementById('room-chip');

    if (roomEl) {
      roomEl.style.backgroundColor = shade.hex;
      roomEl.style.color = textColor;
    }
    if (roomNameEl) {
      roomNameEl.textContent = shade.name;
    }
    if (roomHexEl) {
      roomHexEl.textContent = shade.hex.toUpperCase();
    }
    if (roomChipEl) {
      roomChipEl.style.backgroundColor = shade.hex;
      roomChipEl.style.borderColor = textColor === '#ffffff' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.2)';
    }

    // 2. Update interactive 3D paint can color if initialized
    if (window.Vasu3D && typeof window.Vasu3D.setColor === 'function') {
      window.Vasu3D.setColor(shade.hex);
    }

    // 3. Update active states on hero quick swatches
    const heroSwatches = document.getElementById('sw');
    if (heroSwatches) {
      Array.from(heroSwatches.children).forEach((button, i) => {
        const isSelected = i === index;
        button.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        button.classList.toggle('active', isSelected);
      });
    }

    // 4. Update active states on the full shade grid
    const fullPalette = document.getElementById('shade-palette') || document.querySelector('.shades');
    if (fullPalette) {
      Array.from(fullPalette.children).forEach((button, i) => {
        const isSelected = i === index;
        button.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
        button.classList.toggle('active', isSelected);
      });
    }
  }

  function initShades() {
    const shades = window.VasuData && window.VasuData.SHADES;
    if (!shades || !Array.isArray(shades)) return;

    const fullPalette = document.getElementById('shade-palette') || document.querySelector('.shades');
    const heroSwatches = document.getElementById('sw');

    // Populate Full Shade Grid
    if (fullPalette) {
      fullPalette.innerHTML = '';
      shades.forEach((shade, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.style.backgroundColor = shade.hex;
        btn.setAttribute('aria-label', shade.name);
        btn.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
        if (i === 0) btn.classList.add('active');

        // Text & checkmark indicator
        btn.innerHTML = `
          <span class="swatch-check" aria-hidden="true">✓</span>
          <span class="swatch-name">${shade.name}</span>
        `;

        btn.onclick = (e) => {
          e.preventDefault();
          pickShade(i);
        };
        fullPalette.appendChild(btn);
      });
    }

    // Populate Hero Quick-Pick Swatches (first 6 shades)
    if (heroSwatches) {
      heroSwatches.innerHTML = '';
      shades.slice(0, 6).forEach((shade, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.style.backgroundColor = shade.hex;
        btn.setAttribute('aria-label', shade.name);
        btn.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
        if (i === 0) btn.classList.add('active');

        btn.onclick = (e) => {
          e.preventDefault();
          pickShade(i);
        };
        heroSwatches.appendChild(btn);
      });
    }

    // Select the first shade initially
    pickShade(0);
  }

  window.VasuShades = {
    init: initShades,
    pick: pickShade,
    getCurrent: () => currentIndex
  };
})();
