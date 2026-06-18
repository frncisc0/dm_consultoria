'use strict';

/* NAV */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
if (nav) {
nav.classList.toggle('scrolled', window.scrollY > 70);
}
}, { passive: true });

/* Hero Ken Burns */
setTimeout(() => {
const bg = document.getElementById('heroBg');
if (bg) {
bg.classList.add('zoomed');
}
}, 60);

/* Scroll Reveal com stagger */
const io = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (!entry.isIntersecting) return;

const el = entry.target;
const parent = el.parentElement;
const sibs = [...parent.children].filter(c => c.hasAttribute('data-rev'));
const idx = sibs.indexOf(el);

setTimeout(() => {
  el.classList.add('visible');
}, idx * 90);

io.unobserve(el);


});
}, {
threshold: 0.1,
rootMargin: '0px 0px -32px 0px'
});

document.querySelectorAll('[data-rev]').forEach(el => {
io.observe(el);
});

/* Form */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');


/* Hamburger */
const navHam = document.getElementById('navHam');
const navLinks = document.getElementById('navLinks');

if (navHam && navLinks) {

const closeMenu = () => {
document.body.classList.remove('nav-open');
navHam.setAttribute('aria-expanded', 'false');
};

navHam.addEventListener('click', () => {
const open = document.body.classList.toggle('nav-open');
navHam.setAttribute('aria-expanded', String(open));
});

navLinks.querySelectorAll('a').forEach(link => {
link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', (event) => {
if (event.key === 'Escape') {
closeMenu();
}
});

}

/* Máscara WhatsApp */
const whatsappInput = document.getElementById('f-whatsapp');

if (whatsappInput) {

  whatsappInput.addEventListener('input', function (e) {

    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    if (value.length > 10) {
      value = value.replace(
        /^(\d{2})(\d{5})(\d{4})$/,
        '($1) $2-$3'
      );
    } else if (value.length > 6) {
      value = value.replace(
        /^(\d{2})(\d{4,5})(\d{0,4})$/,
        '($1) $2-$3'
      );
    } else if (value.length > 2) {
      value = value.replace(
        /^(\d{2})(\d+)/,
        '($1) $2'
      );
    } else if (value.length > 0) {
      value = value.replace(
        /^(\d*)/,
        '($1'
      );
    }

    e.target.value = value;

  });

}

const emailInput = document.getElementById('f-email');

if (emailInput) {
  emailInput.addEventListener('input', function () {
    this.value = this.value.trim().toLowerCase();
  });
}

