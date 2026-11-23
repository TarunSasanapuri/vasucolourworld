/**
 * ============================================================================
 * Vasu Colour World Paints - Verified Painters Directory & Rating System
 * Features:
 *  - One-after-one Popup Modal for Painter Details (Mobile & Desktop)
 *  - Consumer Rating System (1-5 stars)
 *  - One rating per user with the ability to modify/update anytime (localStorage)
 *  - Mobile Touch Swipe & Previous / Next Navigation
 * ============================================================================
 */

(function () {
  const STORAGE_KEY = 'vasu_painter_user_ratings_v3';
  let activePainterIndex = 0;

  // Baseline verified customer reviews for each painter
  const BASELINE_RATINGS = {
    "Nagavamsam Simayya (Shyam) ": [5, 5, 5, 4], // base sum = 19 (4 ratings) -> 4.8
    "Ramesh": [5, 5, 5, 4],                     // base sum = 19 (4 ratings) -> 4.8
    "Madhu": [5, 5, 4, 5],                      // base sum = 19 (4 ratings) -> 4.8
    "Kranthi": [5, 5, 4, 5],                    // base sum = 19 (4 ratings) -> 4.8
    "Tirumula": [5, 4, 5, 5]                    // base sum = 19 (4 ratings) -> 4.8
  };

  // Retrieve user ratings from localStorage
  function getUserRatings() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  }

  // Save user ratings to localStorage
  function saveUserRating(painterName, score) {
    try {
      const ratings = getUserRatings();
      ratings[painterName] = Number(score);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
    } catch (e) {}
  }

  // Clear user rating from localStorage
  function clearUserRating(painterName) {
    try {
      const ratings = getUserRatings();
      delete ratings[painterName];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
    } catch (e) {}
  }

  // Calculate dynamic rating and total votes for a painter
  // Directly and visibly reflects according to the user's rating!
  function getPainterRatingData(painter) {
    const userRatings = getUserRatings();
    const userRating = userRatings[painter.name] != null ? Number(userRatings[painter.name]) : null;

    const baseList = BASELINE_RATINGS[painter.name] || [5, 5, 5, 4];
    const votesList = [...baseList];

    if (userRating !== null) {
      // User's rating is added as a live vote in the calculation
      votesList.push(userRating);
    }

    const totalVotes = votesList.length;
    const sum = votesList.reduce((acc, val) => acc + val, 0);
    const avgRating = Math.round((sum / totalVotes) * 10) / 10;

    return {
      avgRating: Math.min(5, Math.max(1, avgRating)),
      totalVotes: totalVotes,
      userRating: userRating,
      hasUserRated: userRating !== null
    };
  }

  // Toast notification
  function showToast(message) {
    let toast = document.getElementById('vasu-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'vasu-toast';
      toast.className = 'vasu-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  // Render cards in the grid
  function renderPainterCards() {
    const pgrid = document.getElementById('pgrid');
    if (!pgrid) return;

    const painters = window.VasuData && window.VasuData.PAINTERS;
    if (!painters || !Array.isArray(painters)) return;

    const store = window.VasuData.STORE_INFO || {};
    const defaultWhatsApp = store.whatsappNumber || "919441356529";

    pgrid.innerHTML = '';

    painters.forEach((painter, index) => {
      const displayName = painter.name || 'Painter name to be added';
      const initial = painter.name ? painter.name.trim()[0] : '?';
      const color = painter.color || '#7b2fbf';

      const ratingData = getPainterRatingData(painter);
      const ratingPercent = Math.min(100, Math.max(0, ratingData.avgRating * 20));
      const ratingText = `${ratingData.avgRating.toFixed(1)} / 5`;
      const votesText = `(${ratingData.totalVotes} reviews)`;
      const experienceText = painter.years != null ? `${painter.years} years` : 'To be added';
      const jobsText = painter.jobs != null ? `${painter.jobs}+` : 'To be added';

      const whatsappText = encodeURIComponent(
        `Hello Vasu Colour World, I need a painter for: ${painter.skill}${painter.name ? ` (${painter.name})` : ''}.`
      );
      const whatsappUrl = `https://wa.me/${defaultWhatsApp}?text=${whatsappText}`;

      const card = document.createElement('article');
      card.className = 'pc';
      card.style.setProperty('--c', color);
      card.setAttribute('data-index', index);

      let userRatingBadgeHtml = '';
      if (ratingData.userRating) {
        userRatingBadgeHtml = `
          <div class="user-rated-pill">
            <span class="user-rated-dot"></span>
            You rated: <strong>★ ${ratingData.userRating}</strong> (Click to modify)
          </div>
        `;
      }

      card.innerHTML = `
        <div class="pc-top">
          <div class="av" aria-hidden="true">${initial}</div>
          <span class="verified-tag">✓ Verified Pro</span>
        </div>
        <h3 class="pc-name"></h3>
        <p class="sp"></p>

        <div class="rating-row" title="Click to view details & rate this painter">
          <div class="stars" style="--w: ${ratingPercent}%" role="img" aria-label="Rated ${ratingText}">★★★★★</div>
          <span class="rating-num">${ratingText}</span>
          <span class="rating-count">${votesText}</span>
        </div>

        ${userRatingBadgeHtml}

        <dl>
          <dt>Experience</dt>
          <dd>${experienceText}</dd>
          <dt>Jobs done</dt>
          <dd>${jobsText}</dd>
        </dl>

        <div class="pc-actions">
          <button class="btn pc-detail-btn" type="button" aria-label="View details and rate">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
            View Details &amp; Rate
          </button>
          <a class="btn pc-wa-btn" href="${whatsappUrl}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88z"/></svg>
            Ask on WhatsApp
          </a>
        </div>
      `;

      card.querySelector('.pc-name').textContent = displayName;
      card.querySelector('.sp').textContent = painter.skill;

      // Clicking card or "View Details" button opens popup modal
      const detailBtn = card.querySelector('.pc-detail-btn');
      detailBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openPainterModal(index);
      });

      card.addEventListener('click', (e) => {
        if (e.target.closest('a')) return;
        openPainterModal(index);
      });

      pgrid.appendChild(card);
    });
  }

  // Build or get modal element
  function ensureModalElement() {
    let modal = document.getElementById('painter-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'painter-modal';
      modal.className = 'painter-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', 'Painter Details & Rating');

      modal.innerHTML = `
        <div class="pm-overlay" id="pm-overlay"></div>
        <div class="pm-dialog">
          <button class="pm-close" id="pm-close" type="button" aria-label="Close dialog">&times;</button>
          
          <div class="pm-nav-bar">
            <button class="pm-nav-btn prev" id="pm-prev" type="button" aria-label="Previous painter">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 19l-7-7 7-7"/></svg>
              <span>Prev</span>
            </button>
            <span class="pm-step-counter" id="pm-counter">Painter 1 of 5</span>
            <button class="pm-nav-btn next" id="pm-next" type="button" aria-label="Next painter">
              <span>Next</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>

          <div class="pm-body" id="pm-body">
            <!-- Dynamic Content Injected Here -->
          </div>
        </div>
      `;

      document.body.appendChild(modal);

      // Event listeners for closing
      document.getElementById('pm-close').addEventListener('click', closePainterModal);
      document.getElementById('pm-overlay').addEventListener('click', closePainterModal);

      // Previous / Next buttons
      document.getElementById('pm-prev').addEventListener('click', () => {
        navigatePainter(-1);
      });
      document.getElementById('pm-next').addEventListener('click', () => {
        navigatePainter(1);
      });

      // Keyboard navigation
      window.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closePainterModal();
        if (e.key === 'ArrowLeft') navigatePainter(-1);
        if (e.key === 'ArrowRight') navigatePainter(1);
      });

      // Mobile Touch Swipe detection
      let touchStartX = 0;
      let touchEndX = 0;
      const dialog = modal.querySelector('.pm-dialog');

      dialog.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      dialog.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });

      function handleSwipe() {
        const threshold = 45;
        if (touchEndX < touchStartX - threshold) {
          // Swipe left -> Next
          navigatePainter(1);
        } else if (touchEndX > touchStartX + threshold) {
          // Swipe right -> Prev
          navigatePainter(-1);
        }
      }
    }
    return modal;
  }

  // Open modal at specific index
  function openPainterModal(index) {
    const painters = window.VasuData && window.VasuData.PAINTERS;
    if (!painters || !painters[index]) return;

    activePainterIndex = index;
    const modal = ensureModalElement();
    renderModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  function closePainterModal() {
    const modal = document.getElementById('painter-modal');
    if (modal) {
      modal.classList.remove('active');
    }
    document.body.style.overflow = '';
  }

  // Navigate to Next / Previous painter
  function navigatePainter(delta) {
    const painters = window.VasuData && window.VasuData.PAINTERS;
    if (!painters || !painters.length) return;

    activePainterIndex = (activePainterIndex + delta + painters.length) % painters.length;
    renderModalContent();
  }

  // Render modal content for active painter
  function renderModalContent() {
    const painters = window.VasuData && window.VasuData.PAINTERS;
    if (!painters || !painters[activePainterIndex]) return;

    const painter = painters[activePainterIndex];
    const store = window.VasuData.STORE_INFO || {};
    const defaultWhatsApp = store.whatsappNumber || "919441356529";

    const ratingData = getPainterRatingData(painter);
    const ratingPercent = Math.min(100, Math.max(0, ratingData.avgRating * 20));
    const initial = painter.name ? painter.name.trim()[0] : '?';
    const color = painter.color || '#7b2fbf';

    const counterEl = document.getElementById('pm-counter');
    if (counterEl) {
      counterEl.textContent = `Painter ${activePainterIndex + 1} of ${painters.length}`;
    }

    const whatsappText = encodeURIComponent(
      `Hello Vasu Colour World, I need a painter for: ${painter.skill}${painter.name ? ` (${painter.name})` : ''}.`
    );
    const whatsappUrl = `https://wa.me/${defaultWhatsApp}?text=${whatsappText}`;

    const bodyEl = document.getElementById('pm-body');
    if (!bodyEl) return;

    // Star rating labels
    const starLabels = {
      1: 'Poor (1/5)',
      2: 'Fair (2/5)',
      3: 'Good (3/5)',
      4: 'Very Good (4/5)',
      5: 'Excellent! (5/5)'
    };

    const hasUserRated = ratingData.userRating !== null;
    const currentScore = ratingData.userRating || 0;

    bodyEl.innerHTML = `
      <div class="pm-profile-head">
        <div class="pm-av" style="background:${color}" aria-hidden="true">${initial}</div>
        <div class="pm-head-meta">
          <div class="pm-badge-row">
            <span class="verified-tag">✓ Verified Store Painter</span>
            <span class="pm-color-dot" style="background:${color}"></span>
          </div>
          <h2 class="pm-title" id="pm-painter-name"></h2>
          <p class="pm-skill" id="pm-painter-skill"></p>
        </div>
      </div>

      <!-- Stats Grid -->
      <div class="pm-stats-grid">
        <div class="pm-stat-box">
          <span class="pm-stat-label">Experience</span>
          <span class="pm-stat-val">${painter.years != null ? painter.years + ' Years' : 'Verified'}</span>
        </div>
        <div class="pm-stat-box">
          <span class="pm-stat-label">Completed</span>
          <span class="pm-stat-val">${painter.jobs != null ? painter.jobs + '+ Jobs' : 'Active'}</span>
        </div>
        <div class="pm-stat-box">
          <span class="pm-stat-label">Customer Rating</span>
          <span class="pm-stat-val">★ ${ratingData.avgRating.toFixed(1)} / 5</span>
          <span class="pm-stat-sub">(${ratingData.totalVotes} reviews)</span>
        </div>
      </div>

      <!-- Customer Interactive Rating Box -->
      <div class="pm-rating-card">
        <div class="pm-rc-head">
          <h4>Rate this Painter</h4>
          <span class="pm-rc-subtitle">
            ${hasUserRated ? 'You have rated this painter. You can change your rating anytime.' : 'Have you hired or worked with this painter? Leave your rating.'}
          </span>
        </div>

        <div class="pm-star-picker" id="pm-star-picker" role="radiogroup" aria-label="Rate from 1 to 5 stars">
          ${[1, 2, 3, 4, 5].map(star => `
            <button type="button" 
                    class="pm-star-btn ${star <= currentScore ? 'active' : ''}" 
                    data-star="${star}" 
                    aria-label="${starLabels[star]}"
                    title="${starLabels[star]}">
              ★
            </button>
          `).join('')}
        </div>

        <div class="pm-star-hint" id="pm-star-hint">
          ${hasUserRated ? `
            <div class="pm-user-rated-info">
              <span>✓ Your Rating: <strong>${starLabels[currentScore]}</strong> · Overall: <strong>★ ${ratingData.avgRating.toFixed(1)}</strong></span>
              <button type="button" class="pm-clear-btn" id="pm-clear-btn">Reset my rating</button>
            </div>
          ` : 'Tap a star above to rate (1 to 5)'}
        </div>
      </div>

      <!-- WhatsApp Action -->
      <div class="pm-cta-row">
        <a class="btn pm-wa-btn" href="${whatsappUrl}" target="_blank" rel="noopener" style="flex:1;">
          <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.05 21.79h-.01a9.87 9.87 0 01-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 01-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 012.89 6.99c0 5.45-4.44 9.88-9.88 9.88z"/></svg>
          Ask on WhatsApp
        </a>
      </div>

      <div class="pm-footer-tip">
        <span>💡 Vasu Colour World verifies all network painters to guarantee workmanship and standard rates.</span>
      </div>
    `;

    bodyEl.querySelector('#pm-painter-name').textContent = painter.name || 'Painter Name';
    bodyEl.querySelector('#pm-painter-skill').textContent = painter.skill;

    // Reset button
    const clearBtn = bodyEl.querySelector('#pm-clear-btn');
    if (clearBtn) {
      clearBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        clearUserRating(painter.name);
        renderModalContent();
        renderPainterCards();
        showToast(`Your rating for ${painter.name} was reset to default.`);
      });
    }

    // Attach interactive rating events
    const starButtons = bodyEl.querySelectorAll('.pm-star-btn');
    const hintEl = bodyEl.querySelector('#pm-star-hint');

    starButtons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        const star = Number(btn.getAttribute('data-star'));
        highlightStars(star);
        hintEl.innerHTML = `Select: <strong>${starLabels[star]}</strong>`;
      });

      btn.addEventListener('mouseleave', () => {
        const current = getUserRatings()[painter.name] || 0;
        highlightStars(current);
        if (current > 0) {
          const rData = getPainterRatingData(painter);
          hintEl.innerHTML = `
            <div class="pm-user-rated-info">
              <span>✓ Your Rating: <strong>${starLabels[current]}</strong> · Overall: <strong>★ ${rData.avgRating.toFixed(1)}</strong></span>
              <button type="button" class="pm-clear-btn" id="pm-clear-btn">Reset my rating</button>
            </div>
          `;
          const cBtn = hintEl.querySelector('#pm-clear-btn');
          if (cBtn) {
            cBtn.addEventListener('click', (e) => {
              e.preventDefault();
              clearUserRating(painter.name);
              renderModalContent();
              renderPainterCards();
              showToast(`Your rating for ${painter.name} was reset.`);
            });
          }
        } else {
          hintEl.textContent = 'Tap a star above to rate (1 to 5)';
        }
      });

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const score = Number(btn.getAttribute('data-star'));
        const isUpdate = getUserRatings()[painter.name] !== undefined;

        // Save rating in localStorage
        saveUserRating(painter.name, score);

        // Re-render modal content and update cards
        renderModalContent();
        renderPainterCards();

        const updatedData = getPainterRatingData(painter);
        const msg = isUpdate
          ? `Your rating for ${painter.name} was modified to ${score}★! Overall rating updated to ★ ${updatedData.avgRating.toFixed(1)}.`
          : `Thank you! Your ${score}★ rating recorded. Overall rating updated to ★ ${updatedData.avgRating.toFixed(1)}.`;
        showToast(msg);
      });
    });

    function highlightStars(score) {
      starButtons.forEach(b => {
        const val = Number(b.getAttribute('data-star'));
        b.classList.toggle('active', val <= score);
      });
    }
  }

  // Initialize Painters Section
  function initPainters() {
    renderPainterCards();

    // Setup desktop side-scrolling navigation buttons
    const prevBtn = document.getElementById('p-prev');
    const nextBtn = document.getElementById('p-next');
    const pgrid = document.getElementById('pgrid');

    if (prevBtn && nextBtn && pgrid) {
      function getScrollStep() {
        const card = pgrid.querySelector('.pc');
        return card ? card.offsetWidth + 20 : 280;
      }

      prevBtn.onclick = () => {
        pgrid.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
      };

      nextBtn.onclick = () => {
        pgrid.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
      };

      function updateNavState() {
        const atStart = pgrid.scrollLeft <= 5;
        const atEnd = pgrid.scrollLeft + pgrid.clientWidth >= pgrid.scrollWidth - 5;
        prevBtn.disabled = atStart;
        nextBtn.disabled = atEnd;
      }

      pgrid.addEventListener('scroll', updateNavState, { passive: true });
      if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') window.addEventListener('resize', updateNavState);
      setTimeout(updateNavState, 100);
    }
  }

  // Auto initialize when DOM is ready
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initPainters);
    } else {
      setTimeout(initPainters, 10);
    }
  }

  window.VasuPainters = {
    init: initPainters,
    openModal: openPainterModal,
    closeModal: closePainterModal,
    refresh: renderPainterCards
  };
})();
