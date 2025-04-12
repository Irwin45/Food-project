const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav.querySelectorAll('a');
const body = document.body;

burger?.addEventListener('click', () => {
  body.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger-active');
  nav?.classList.toggle('nav-visible');
});

navItems.forEach((el) => {
  el.addEventListener('click', () => {
    body.classList.remove('stop-scroll');
    burger?.classList.remove('burger-active');
    nav?.classList.remove('nav-visible');
  });
});

// Stiky navigation

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add('sticky');
    }

    if (ent.isIntersecting) {
      document.body.classList.remove('sticky');
    }
  },
  {
    // in the viewportr
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  },
);
obs.observe(sectionHeroEl);
