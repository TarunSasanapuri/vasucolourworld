/**
 * ============================================================================
 * Vasu Colour World Paints - Asian Paints Serial-Wise Catalogue & Carousel
 * Complete 6 Categories (37 Products in Serial Order):
 *  1. Interior Emulsions (13 products)
 *  2. Exterior Emulsions (11 products)
 *  3. Interior Primers (3 products)
 *  4. Exterior Primers (5 products)
 *  5. Putty (3 products)
 *  6. Texture & Glitters (2 products)
 *
 * Features:
 *  - Responsive side-scrolling carousel with navigation buttons & touch swipe
 *  - Serial-wise display with authentic uploaded packshot images
 *  - "Calculate Quantity" launching the Paint Work Formula Chatbot
 *  - "Ask Price on WhatsApp" for instant store rate inquiry
 * ============================================================================
 */

(function () {
  let activeFilter = 'all';

  function renderProducts(filter = 'all') {
    activeFilter = filter;
    const grid = document.getElementById('prod-grid');
    if (!grid) return;

    const products = window.VasuData && window.VasuData.STORE_PRODUCTS;
    if (!products || !Array.isArray(products)) return;

    const store = window.VasuData.STORE_INFO || {};
    const defaultWhatsApp = store.whatsappNumber || "919441356529";

            const filtered = products.filter(p => {
      if (filter === 'all') return true;
      if (filter === 'asian-paints') return p.brand === 'Asian Paints';
      if (filter === 'nerolac') return p.brand && p.brand.toLowerCase().includes('nerolac');
      if (filter === 'interior') return p.categoryKey === 'interior';
      if (filter === 'exterior') return p.categoryKey === 'exterior';
      if (filter === 'primers') return p.categoryKey === 'interior-primer' || p.categoryKey === 'exterior-primer' || p.categoryKey === 'primers';
      if (filter === 'interior-primer') return p.categoryKey === 'interior-primer';
      if (filter === 'exterior-primer') return p.categoryKey === 'exterior-primer';
      if (filter === 'waterproofing') return p.categoryKey === 'waterproofing';
      if (filter === 'putty') return p.categoryKey === 'putty';
      if (filter === 'enamels') return p.categoryKey === 'enamels';
      if (filter === 'texture') return p.categoryKey === 'texture';
      return p.categoryKey === filter;
    });

    grid.innerHTML = '';

    filtered.forEach((p) => {
      const card = document.createElement('article');
      card.className = 'prod-card';
      card.style.setProperty('--c', p.colorAccent || '#7b2fbf');
      card.setAttribute('data-id', p.id);
      card.setAttribute('data-serial', p.serial || '');

      const waMsg = encodeURIComponent(
        `Hello Vasu Colour World Paints, I am interested in ${p.brand || "Asian Paints"} ${p.name} (Item #${p.serial || ''}). Please share the latest store prices for available pack sizes.`
      );
      const waUrl = `https://wa.me/${defaultWhatsApp}?text=${waMsg}`;

      const tagHtml = p.tag ? `<span class="prod-badge-tag">${p.tag}</span>` : '';
      const warrantyHtml = p.warranty ? `<span class="prod-warranty-pill">${p.warranty}</span>` : '';

      const photoStatusHtml = (!p.hasUploadedPhoto)
        ? `<span class="prod-photo-status-tag">Original Pack • Photo Coming Soon</span>`
        : '';

      card.innerHTML = `
        <div class="prod-card-top">
          <div class="prod-serial-badge">#${p.serial || ''}</div>
          <div class="prod-category-pill">${p.categoryGroup ? p.categoryGroup.replace(/^[0-9]+\.\s*/, '') : ''}</div>
          ${tagHtml}
        </div>

        <div class="prod-img-wrap">
          <div class="can-stage">
            <img src="${p.image}" alt="${p.brand || "Asian Paints"} ${p.name}" class="prod-img" loading="lazy">
            <div class="can-shadow"></div>
          </div>
          ${photoStatusHtml}
        </div>

        <div class="prod-info">
          <div class="prod-title-row">
            <h3 class="prod-name">${p.name}</h3>
          </div>
          <div class="prod-brand-sub">${p.brand || "Asian Paints"} &bull; ${warrantyHtml}</div>
          <p class="prod-finish">${p.finish}</p>

          <dl class="prod-specs">
            <dt>2-Coat Coverage</dt>
            <dd><strong>${p.coverage2Coats || p.coverage}</strong></dd>
            <dt>1-Coat Coverage</dt>
            <dd>${p.coverage1Coat || '240 – 280 sq.ft/L'}</dd>
            <dt>Available Packs</dt>
            <dd>${p.packs}</dd>
          </dl>
        </div>

        <div class="prod-actions">
          <button type="button" class="btn prod-calc-btn" data-id="${p.id}" title="Calculate paint quantity required">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <rect x="4" y="2" width="16" height="20" rx="2"></rect>
              <line x1="8" y1="6" x2="16" y2="6"></line>
              <line x1="16" y1="14" x2="16" y2="18"></line>
              <path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path>
              <path d="M12 14h.01"></path><path d="M8 14h.01"></path>
            </svg>
            Calculate Quantity
          </button>
          <a href="${waUrl}" target="_blank" rel="noopener" class="btn prod-wa-btn" title="Enquire on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88z"/>
            </svg>
            Ask Price on WhatsApp
          </a>
        </div>
      `;

      // Event: Calculate button opens Formula Chatbot directly with this product
      const calcBtn = card.querySelector('.prod-calc-btn');
      if (calcBtn) {
        calcBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          if (window.VasuChatbot && typeof window.VasuChatbot.openWithProduct === 'function') {
            window.VasuChatbot.openWithProduct(p.id);
          } else if (window.VasuChatbot && typeof window.VasuChatbot.toggle === 'function') {
            window.VasuChatbot.toggle();
          }
        });
      }

      grid.appendChild(card);
    });

    updateCarouselButtons();
  }

  function updateCarouselButtons() {
    const prevBtn = document.getElementById('prod-prev');
    const nextBtn = document.getElementById('prod-next');
    const grid = document.getElementById('prod-grid');
    if (!prevBtn || !nextBtn || !grid) return;

    const atStart = grid.scrollLeft <= 10;
    const atEnd = grid.scrollLeft + grid.clientWidth >= grid.scrollWidth - 10;

    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
  }

  function setupCarouselControls() {
    const prevBtn = document.getElementById('prod-prev');
    const nextBtn = document.getElementById('prod-next');
    const grid = document.getElementById('prod-grid');

    if (prevBtn && nextBtn && grid) {
      function getScrollStep() {
        const card = grid.querySelector('.prod-card');
        return card ? card.offsetWidth + 20 : 320;
      }

      prevBtn.onclick = () => {
        grid.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
      };

      nextBtn.onclick = () => {
        grid.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
      };

      grid.addEventListener('scroll', updateCarouselButtons, { passive: true });
      window.addEventListener('resize', updateCarouselButtons);
      setTimeout(updateCarouselButtons, 150);
    }

    // Filter Chips for Serial Categories
    const filterContainer = document.getElementById('prod-filter-chips');
    if (filterContainer) {
      filterContainer.addEventListener('click', (e) => {
        const btn = e.target.closest('.prod-chip');
        if (!btn) return;

        filterContainer.querySelectorAll('.prod-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter') || 'all';
        renderProducts(filter);

        // Reset scroll position to beginning on filter change
        if (grid) {
          grid.scrollTo({ left: 0, behavior: 'smooth' });
        }
      });
    }
  }

  function initProducts() {
    renderProducts('all');
    setupCarouselControls();
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initProducts);
    } else {
      setTimeout(initProducts, 10);
    }
  }

  window.VasuProducts = {
    init: initProducts,
    render: renderProducts
  };
})();
