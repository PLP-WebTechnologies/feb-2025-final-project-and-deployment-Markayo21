// Smooth scrolling for internal ID links only (e.g., #about)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Back to Top button functionality (assumes it's already in HTML)
const backToTopButton = document.querySelector('.back-to-top');
if (backToTopButton) {
  window.addEventListener('scroll', () => {
    backToTopButton.style.display = window.scrollY > 500 ? 'block' : 'none';
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Contact Form Validation (check if form exists)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value || !email.value || !message.value) {
      alert('Please fill out all fields.');
      return;
    }

    if (!email.value.includes('@')) {
      alert('Please enter a valid email.');
      return;
    }

    document.getElementById('contact-message').innerHTML = `
      <p>Thank you for your message, ${name.value}!</p>
      <p>We will get back to you shortly.</p>
    `;
    this.reset();
  });
}

// Auto Slide Images
function nextSlide() {
  const activeSlide = document.querySelector('.slide.active');
  if (!activeSlide) return;

  let nextSlide = activeSlide.nextElementSibling;
  if (!nextSlide || !nextSlide.classList.contains('slide')) {
    nextSlide = activeSlide.parentElement.children[0]; // First slide
  }

  activeSlide.classList.remove('active');
  nextSlide.classList.add('active');
}
setInterval(nextSlide, 3000);

// Preloader
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.display = 'none';
  }
});

// Toggle navbar (responsive)
const toggleButton = document.querySelector('.menu-toggle');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    const navList = document.querySelector('nav ul');
    if (navList) navList.classList.toggle('show');
  });
}


