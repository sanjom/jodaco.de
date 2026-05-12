/* ── Nav shadow on scroll ── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ── Scroll-reveal ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Animated stat bars ── */
const barData = {
  'bar-mobile-old':  '30%',
  'bar-mobile-new':  '100%',
  'bar-speed-old':   '20%',
  'bar-speed-new':   '95%',
  'bar-google-old':  '25%',
  'bar-google-new':  '85%',
  'bar-leads-old':   '15%',
  'bar-leads-new':   '90%',
};

const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      if (barData[id]) {
        entry.target.style.width = barData[id];
      }
      barObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.bar[id]').forEach(bar => barObserver.observe(bar));

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
