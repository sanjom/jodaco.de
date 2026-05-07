/* ── Nav raise on scroll ── */
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('raised', window.scrollY > 8);
}, { passive: true });

/* ── Scroll-reveal ── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── Animated result bars ── */
const barTargets = {
  'rb-mobile-b':  '22%',  'rb-mobile-a':  '100%',
  'rb-speed-b':   '18%',  'rb-speed-a':   '92%',
  'rb-google-b':  '20%',  'rb-google-a':  '80%',
  'rb-leads-b':   '15%',  'rb-leads-a':   '88%',
};

const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const w = barTargets[e.target.id];
      if (w) e.target.style.width = w;
      barObs.unobserve(e.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.rbar[id]').forEach(bar => barObs.observe(bar));

/* ── Smooth anchor scroll ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
