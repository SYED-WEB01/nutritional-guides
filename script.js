const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) hamburger.addEventListener('click', () => { mobileMenu.classList.toggle('open'); });
function closeMenu() { if (mobileMenu) mobileMenu.classList.remove('open'); }

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) navbar.style.background = window.scrollY > 50 ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)';
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
  var text = 'Hi Dt. Ashmeet! \n\n*Name:* ' + name + '\n*Phone:* ' + phone + '\n*Goal:* ' + goal;
  if (message) {
    text += '\n*Message:* ' + message;
  }
  text += '\n\nI would like to book a free consultation.';
  var url = 'https://wa.me/917569603343?text=' + encodeURIComponent(text);
  var link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
