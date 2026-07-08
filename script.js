// Mobile Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => { mobileMenu.classList.toggle('open'); });
function closeMenu() { mobileMenu.classList.remove('open'); }

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.style.background = window.scrollY > 50 ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.85)';
});

// WhatsApp form sender
function sendWhatsApp() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const goal = document.getElementById('goal').value;
  const message = document.getElementById('message').value.trim();
  if (!name || !phone || !goal) { alert('Please fill in your Name, Phone Number, and Health Goal.'); return; }
  const text = `Hi Dt. Ashmeet! 🙏\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Goal:* ${goal}${message ? `\n*Message:* ${message}` : ''}\n\nI'd like to book a free consultation.`;
  window.open(`https://wa.me/917569603343?text=${encodeURIComponent(text)}`, '_blank');
}

// Counter animation
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target; clearInterval(timer); return; }
    el.textContent = Math.floor(start);
  }, 16);
}

// Scroll reveal + counter trigger
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      // trigger counter if applicable
      const counter = entry.target.querySelector('[data-count]');
      if (counter && !counter.dataset.animated) {
        counter.dataset.animated = true;
        animateCounter(counter, parseInt(counter.dataset.count));
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .result-card, .testimonial-card, .contact-item, .credential, .stat, .challenge-inner').forEach(el => {
  el.style.opacity = '1'
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
