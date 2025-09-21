// Scroll reveal with IntersectionObserver + small stagger
document.addEventListener('DOMContentLoaded', () => {
  const els = Array.from(document.querySelectorAll('.animate'));
  const options = { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.12 };

  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // small stagger based on index
        const idx = els.indexOf(entry.target);
        const delay = Math.min(idx * 80, 300);
        setTimeout(() => entry.target.classList.add('show'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  els.forEach(el => io.observe(el));
});
