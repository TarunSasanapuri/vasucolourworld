/**
 * ============================================================================
 * Vasu Colour World Paints - Main Application Entry Point
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize 3D Paint Can
  if (window.Vasu3D && typeof window.Vasu3D.init === 'function') {
    window.Vasu3D.init();
  }

  // 2. Initialize Shade Visualizer & Swatches
  if (window.VasuShades && typeof window.VasuShades.init === 'function') {
    window.VasuShades.init();
  }

  // 3. Initialize Verified Local Painters Directory
  if (window.VasuPainters && typeof window.VasuPainters.init === 'function') {
    window.VasuPainters.init();
  }

  // 3b. Initialize Paint Coverage & Quantity Chatbot
  if (window.VasuChatbot && typeof window.VasuChatbot.init === 'function') {
    window.VasuChatbot.init();
  }

  // 3c. Initialize In-Store Paint Products Directory & Carousel
  if (window.VasuProducts && typeof window.VasuProducts.init === 'function') {
    window.VasuProducts.init();
  }

  // 3d. Initialize Hero Auto-Scrolling In-Store Offers & Deals Carousel
  if (window.VasuDeals && typeof window.VasuDeals.init === 'function') {
    window.VasuDeals.init();
  }

  // 4. Interactive 3D Tilt Effect on Category Cards
  const cards = document.querySelectorAll('.cat');
  cards.forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const xRatio = (event.clientX - rect.left) / rect.width - 0.5;
      const yRatio = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateY(${xRatio * 14}deg) rotateX(${-yRatio * 14}deg) translateZ(8px)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });

  // 5. Update copyright year dynamically
  const currentYear = new Date().getFullYear();
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = currentYear;
  }

  // 6. Permanent Combined Theme (Default & Locked)
  document.documentElement.setAttribute('data-theme', 'combined');
  try {
    localStorage.removeItem('vasu-theme');
  } catch (e) { }
});

