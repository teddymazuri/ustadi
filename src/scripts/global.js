// Global JavaScript — Minimal, progressive enhancement only

/**
 * Initializes the back-to-top button with smooth scroll behavior.
 * Button appears after scrolling 400px and hides above that threshold.
 */
function initBackToTop() {
  const button = document.getElementById('back-to-top');
  if (!button) return;

  let scrollTimeout;

  const handleScroll = () => {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = window.requestAnimationFrame(() => {
      const shouldShow = window.scrollY > 400;
      
      if (shouldShow) {
        button.classList.remove('opacity-0', 'invisible');
        button.classList.add('opacity-100', 'visible');
      } else {
        button.classList.add('opacity-0', 'invisible');
        button.classList.remove('opacity-100', 'visible');
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Initializes all global JavaScript functionality.
 */
function init() {
  initBackToTop();
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}