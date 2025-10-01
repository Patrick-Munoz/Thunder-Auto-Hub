// Mobile nav toggle
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href && href.length > 1) {
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        nav.classList.remove('open');
      }
    }
  });
});

// Chat button demo
const chat = document.querySelector('.chat');
if (chat) {
  chat.addEventListener('click', () => {
    const url = 'https://m.me/';
    window.open(url, '_blank');
  });
}


