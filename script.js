const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded','false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const track = document.getElementById('packageTrack');
let active = 0;
function visibleCards() {
  if (window.innerWidth <= 650) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}
function updateCarousel() {
  const cards = [...track.querySelectorAll('.package-card')];
  const max = Math.max(0, cards.length - visibleCards());
  active = Math.min(active, max);
  const cardWidth = cards[0].getBoundingClientRect().width;
  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  track.style.transform = `translateX(-${active * (cardWidth + gap)}px)`;
}
document.getElementById('prevPackage').addEventListener('click', () => { active = Math.max(0, active - 1); updateCarousel(); });
document.getElementById('nextPackage').addEventListener('click', () => { active = Math.min(3 - visibleCards(), active + 1); updateCarousel(); });
window.addEventListener('resize', updateCarousel);
document.querySelectorAll('[data-package]').forEach(link => link.addEventListener('click', () => {
  const select = document.querySelector('select[name="package"]');
  if (select) select.value = link.dataset.package;
}));

// Replace these placeholders before publishing.
const BUSINESS_EMAIL = 'hello@example.com';
const GOOGLE_REVIEWS_URL = '';
const googleLink = document.getElementById('googleReviewLink');
if (GOOGLE_REVIEWS_URL) googleLink.href = GOOGLE_REVIEWS_URL;
else googleLink.addEventListener('click', e => { e.preventDefault(); alert('Add your Google Business Profile review link in script.js before publishing.'); });

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const subject = encodeURIComponent(`Detailing inquiry — ${data.get('name')}`);
  const body = encodeURIComponent(
`Name: ${data.get('name')}
Contact: ${data.get('reply')}
Vehicle: ${data.get('vehicle') || 'Not specified'}
Package: ${data.get('package') || 'Not sure yet'}

Message:
${data.get('message') || 'No additional notes'}`
  );
  if (BUSINESS_EMAIL === 'hello@example.com') {
    document.getElementById('formStatus').textContent = 'Before launch, replace hello@example.com in script.js with your real business email. Your inquiry is ready to send once updated.';
    return;
  }
  window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
});
updateCarousel();