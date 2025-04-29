// src/js/menu.js

const burgerBtn = document.querySelector('.header--open-menu');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const sectionLinks = document.querySelectorAll('.menu-list > li');

export function initMenu() {
  if (!burgerBtn || !menu || !closeBtn) return;

  burgerBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  sectionLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  if (window.innerWidth <= 768) {
    initSwipeMenu(menu);
  }
}

function openMenu() {
  menu.classList.add('open');
  document.body.classList.add('menu-open'); // блокуємо скрол через клас
}

function closeMenu() {
  menu.classList.remove('open');
  document.body.classList.remove('menu-open'); // прибираємо блокування скролу
}

function initSwipeMenu(menuElement) {
  let touchStartX = null;
  let touchEndX = null;
  const swipeThreshold = 50;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;

    if (touchStartX !== null && touchEndX !== null) {
      const swipeDistance = touchStartX - touchEndX;

      if (!menuElement.classList.contains('open') && swipeDistance > swipeThreshold) {
        openMenu();
      }

      if (menuElement.classList.contains('open') && swipeDistance < -swipeThreshold) {
        closeMenu();
      }
    }

    touchStartX = null;
    touchEndX = null;
  });
}
