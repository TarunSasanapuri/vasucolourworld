/**
 * ============================================================================
 * Vasu Colour World Paints - Full-Section Hero Carousel & Deal Posters
 * Auto-scrolling + Manual Navigation + 3D Paint Can Interaction Awareness
 * ============================================================================
 */

(function () {
  let currentIndex = 0;
  let autoTimer = null;
  let isPaused = false;
  const slideDuration = 6000; // 6 seconds per slide

  function initHeroSlider() {
    const hero = document.getElementById('hero');
    const track = document.getElementById('hero-slides-track');
    if (!hero || !track) return;

    const slides = Array.from(track.children);
    const totalSlides = slides.length;
    if (totalSlides <= 1) return;

    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    const dotsContainer = document.getElementById('hero-indicators');
    const dots = dotsContainer ? Array.from(dotsContainer.querySelectorAll('.hero-dot')) : [];
    const counterEl = document.getElementById('hero-curr-slide');
    const pauseBtn = document.getElementById('hero-pause-btn');
    const pauseIcon = document.getElementById('hero-pause-icon');

    // 1. Core Slide Switcher
    function goToSlide(index, manual = false) {
      currentIndex = (index + totalSlides) % totalSlides;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      slides.forEach((slide, idx) => {
        const isActive = idx === currentIndex;
        slide.classList.toggle('active', isActive);
        slide.setAttribute('aria-hidden', (!isActive).toString());
      });

      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentIndex);
        dot.setAttribute('aria-pressed', (idx === currentIndex).toString());
      });

      if (counterEl) {
        counterEl.textContent = (currentIndex + 1).toString();
      }

      // If returning to default slide with 3D paint can, trigger a resize event
      if (currentIndex === 0) {
        window.dispatchEvent(new Event('resize'));
      }

      // If user navigated manually, reset the auto-scroll timer
      if (manual && !isPaused) {
        resetAutoTimer();
      }
    }

    // 2. Auto-scroll Timer Engine
    function startAutoScroll() {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = setInterval(() => {
        if (!isPaused) {
          goToSlide(currentIndex + 1);
        }
      }, slideDuration);
    }

    function stopAutoScroll() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    function resetAutoTimer() {
      stopAutoScroll();
      startAutoScroll();
    }

    // 3. Pause / Play Control
    function setPauseState(paused) {
      isPaused = paused;
      if (isPaused) {
        stopAutoScroll();
        if (pauseIcon) pauseIcon.textContent = '▶';
        if (pauseBtn) {
          pauseBtn.setAttribute('title', 'Resume auto-scroll');
          pauseBtn.setAttribute('aria-label', 'Resume auto-scroll');
        }
      } else {
        startAutoScroll();
        if (pauseIcon) pauseIcon.textContent = '⏸';
        if (pauseBtn) {
          pauseBtn.setAttribute('title', 'Pause auto-scroll');
          pauseBtn.setAttribute('aria-label', 'Pause auto-scroll');
        }
      }
    }

    if (pauseBtn) {
      pauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setPauseState(!isPaused);
      });
    }

    // 4. Arrow Navigation
    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentIndex - 1, true);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        goToSlide(currentIndex + 1, true);
      });
    }

    // 5. Dots Navigation
    dots.forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetIdx = parseInt(dot.getAttribute('data-index'), 10);
        if (!isNaN(targetIdx)) {
          goToSlide(targetIdx, true);
        }
      });
    });

    // 6. Pause on Hover
    hero.addEventListener('mouseenter', () => {
      if (!isPaused) stopAutoScroll();
    });

    hero.addEventListener('mouseleave', () => {
      if (!isPaused) startAutoScroll();
    });

    // 7. Pause on 3D Paint Can Interaction (so user can freely rotate & pick swatches)
    const stage = document.getElementById('stage');
    const swatches = document.getElementById('sw');

    if (stage) {
      stage.addEventListener('pointerdown', () => stopAutoScroll());
      stage.addEventListener('pointerup', () => {
        if (!isPaused) resetAutoTimer();
      });
    }

    if (swatches) {
      swatches.addEventListener('click', () => {
        if (!isPaused) resetAutoTimer();
      });
    }

    // 8. Touch Swipe Navigation for Mobile Devices
    let touchStartX = 0;
    let touchStartY = 0;

    hero.addEventListener('touchstart', (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    hero.addEventListener('touchend', (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Only trigger if horizontal swipe is prominent and greater than vertical scroll
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
        if (diffX < 0) {
          // Swiped left -> next slide
          goToSlide(currentIndex + 1, true);
        } else {
          // Swiped right -> prev slide
          goToSlide(currentIndex - 1, true);
        }
      }
    }, { passive: true });

    // 9. Keyboard Accessibility Navigation
    hero.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1, true);
      } else if (e.key === 'ArrowRight') {
        goToSlide(currentIndex + 1, true);
      }
    });

    // 10. Deal Banner Calculate Button Handler
    const calcDealsBtn = hero.querySelector('a[href="#chat-launcher"]');
    if (calcDealsBtn) {
      calcDealsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (window.VasuChatbot && typeof window.VasuChatbot.open === 'function') {
          window.VasuChatbot.open();
        }
      });
    }

    // 11. Start initial auto-scroll (respecting prefers-reduced-motion)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setPauseState(true);
    } else {
      startAutoScroll();
    }
  }

  window.VasuDeals = {
    init: initHeroSlider
  };
})();
