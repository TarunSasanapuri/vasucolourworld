/**
 * ============================================================================
 * Vasu Colour World Paints - Customer Testimonials (16:9 Photos & Reels)
 * ============================================================================
 * 
 * Features:
 *  - Renders customer photos strictly in 16:9 aspect ratio
 *  - Displays Instagram Reel redirect button on top of each customer photo
 *  - Smooth horizontal scrolling carousel with prev/next navigation buttons
 *  - Mobile touch swipe and snap alignment
 * ============================================================================
 */

(function () {
  'use strict';

  function renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;

    const testimonials = (window.VasuData && window.VasuData.TESTIMONIALS) || [];
    if (!testimonials.length) {
      grid.innerHTML = '<p style="color:rgba(255,255,255,0.7);padding:20px;">No customer stories available yet.</p>';
      return;
    }

    grid.innerHTML = testimonials.map((item, index) => {
      const reelUrl = item.instagramReelUrl || 'https://www.instagram.com/vasucolourworldpaints/';
      const customerName = item.customerName || 'Happy Customer';
      const location = item.location ? ` • ${item.location}` : '';
      const altText = `${customerName}${location} - Customer home painted with Vasu Colour World Paints`;

      return `
        <article class="testimonial-card" data-index="${index}">
          <div class="testimonial-aspect-box">
            <img 
              src="${item.image}" 
              alt="${altText}" 
              class="testimonial-img" 
              loading="lazy"
              onerror="this.onerror=null; this.src='assets/images/store-front.png';"
            />
            
            <a 
              href="${reelUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="insta-reel-btn" 
              aria-label="Watch ${customerName} home story reel on Instagram"
            >
              <svg class="insta-icon" viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>Watch Reel</span>
              <svg class="external-arrow" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
                <path d="M7 17l9.2-9.2M17 17V8H8"/>
              </svg>
            </a>
          </div>
        </article>
      `;
    }).join('');

    // Setup desktop side-scrolling navigation buttons
    const prevBtn = document.getElementById('t-prev');
    const nextBtn = document.getElementById('t-next');

    if (prevBtn && nextBtn) {
      function getScrollStep() {
        const card = grid.querySelector('.testimonial-card');
        return card ? card.offsetWidth + 20 : 380;
      }

      function updateButtons() {
        const scrollLeft = grid.scrollLeft;
        const maxScroll = grid.scrollWidth - grid.clientWidth;
        
        const atStart = scrollLeft <= 8;
        const atEnd = scrollLeft >= maxScroll - 8;

        prevBtn.disabled = atStart;
        nextBtn.disabled = atEnd;
        prevBtn.style.opacity = atStart ? '0.4' : '1';
        nextBtn.style.opacity = atEnd ? '0.4' : '1';
        prevBtn.style.cursor = atStart ? 'not-allowed' : 'pointer';
        nextBtn.style.cursor = atEnd ? 'not-allowed' : 'pointer';
      }

      prevBtn.onclick = () => {
        grid.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
      };

      nextBtn.onclick = () => {
        grid.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
      };

      grid.addEventListener('scroll', updateButtons, { passive: true });
      window.addEventListener('resize', updateButtons);
      setTimeout(updateButtons, 200);
    }

    // Optional click on entire card body redirects to reel URL
    grid.querySelectorAll('.testimonial-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('.insta-reel-btn')) {
          const btn = card.querySelector('.insta-reel-btn');
          if (btn && btn.href) {
            window.open(btn.href, '_blank', 'noopener,noreferrer');
          }
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderTestimonials);
  } else {
    renderTestimonials();
  }
})();
