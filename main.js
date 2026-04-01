// ── NAV SCROLL ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ── MOBILE MENU ──
const menuBtn     = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');
const menuClose   = document.getElementById('menuClose');

menuBtn.addEventListener('click', () => menuOverlay.classList.add('open'));
menuClose.addEventListener('click', closeMenu);

function closeMenu() {
  menuOverlay.classList.remove('open');
}

// ── REVEAL ON SCROLL ──
const reveals  = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// ── BOOKING: min date ──
const today = new Date().toISOString().split('T')[0];
document.querySelectorAll('input[type="date"]').forEach(i => i.min = today);
