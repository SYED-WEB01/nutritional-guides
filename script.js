const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if(hamburger) hamburger.addEventListener('click', () => { mobileMenu.classList.toggle('open'); });
function closeMenu() { if(mobileMenu) mobileMenu.classList.remove('open'); }

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if(navbar) navbar.style.background = window.scrollY > 50 ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)';
});

function sendWhatsApp() {
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const goal = document.getElementById('goal').value;
  const message = document.getElementById('message').value.trim();
  if (!name || !phone || !goal) {
    alert('Please fill in your Name, Phone Number, and Health Goal.');
    return;
  }
  const text = Hi Dt. Ashmeet! 🙏\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Goal:* ${goal}${message ? `\n*Message:* ${message} : ''}\n\nI'd like to book a free consultation.`;
  window.open(https://wa.me/917569603343?text=${encodeURIComponent(text)}, '_blank');
}
