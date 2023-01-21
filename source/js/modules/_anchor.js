// Скролл к якорю
const items = document.querySelectorAll('.nav-menu__link--anchor');

if (items) {

  for (const anchor of items) {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }
}
