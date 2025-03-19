const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');

burger?.addEventListener('click', () => {
  nav.classList.toggle('nav-visible');
});
