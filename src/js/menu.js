// src/js/menu.js

// Визначаємо DOM-елементи на самому початку
const burgerBtn = document.querySelector('.header--open-menu');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

export function initMenu() {
  if (!burgerBtn || !menu || !closeBtn) return;

  // Клік на бургер
  burgerBtn.addEventListener('click', () => {
    openMenu();
  });

  // Клік на хрестик
  closeBtn.addEventListener('click', () => {
    closeMenu();
  });

  // Ініціалізація свайпів на мобілках
  if (window.innerWidth <= 768) {
    initSwipeMenu(menu);
  }
}

function openMenu() {
  menu.classList.add('open');
}

function closeMenu() {
  menu.classList.remove('open');
}

function initSwipeMenu(menu) {
  let touchStartX = null;
  let touchEndX = null;

  document.addEventListener('touchstart', (e) => {
    if (menu.classList.contains('open')) return;
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  document.addEventListener('touchend', (e) => {
    if (menu.classList.contains('open')) return;
    touchEndX = e.changedTouches[0].screenX;

    if (touchStartX === null || touchEndX === null) return;

    const swipeDistance = touchStartX - touchEndX;
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold) {
      openMenu();
    }

    touchStartX = null;
    touchEndX = null;
  }, false);

  menu.addEventListener('touchstart', (e) => {
    if (!menu.classList.contains('open')) return;
    touchStartX = e.changedTouches[0].screenX;
  }, false);

  menu.addEventListener('touchend', (e) => {
    if (!menu.classList.contains('open')) return;
    touchEndX = e.changedTouches[0].screenX;

    if (touchStartX === null || touchEndX === null) return;

    const swipeDistance = touchStartX - touchEndX;
    const swipeThreshold = 50;

    if (swipeDistance < -swipeThreshold) {
      closeMenu();
    }

    touchStartX = null;
    touchEndX = null;
  }, false);
}
