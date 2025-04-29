// src/js/menu.js

const burgerBtn = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const sectionLinks = document.querySelectorAll('.menu-list > li');

export function initMenu() {
  if (!burgerBtn || !menu || !closeBtn) return;

  // Відкриття меню
  burgerBtn.addEventListener('click', openMenu);

  // Закриття меню (хрестик)
  closeBtn.addEventListener('click', closeMenu);

  // Закриття меню при кліку на пункт
  sectionLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Свайпи для мобільних
  if (window.innerWidth <= 768) {
    initSwipeMenu(menu);
  }
}

function openMenu() {
  menu.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menu.classList.remove('open');
  document.body.style.overflow = '';
}

function initSwipeMenu(menuElement) {
  let touchStartX = null;
  let touchEndX = null;
  const swipeThreshold = 50;

  // Свайп справа наліво — відкрити
  document.addEventListener('touchstart', (e) => {
    if (menuElement.classList.contains('open')) return;
    touchStartX = e.changedTouches[0].screenX;
  });

  document.addEventListener('touchend', (e) => {
    if (menuElement.classList.contains('open')) return;
    touchEndX = e.changedTouches[0].screenX;

    if (touchStartX !== null && touchEndX !== null) {
      const swipeDistance = touchStartX - touchEndX;
      if (swipeDistance > swipeThreshold) {
        openMenu();
      }
    }

    touchStartX = null;
    touchEndX = null;
  });

  // Свайп зліва направо — закрити
  menuElement.addEventListener('touchstart', (e) => {
    if (!menuElement.classList.contains('open')) return;
    touchStartX = e.changedTouches[0].screenX;
  });

  menuElement.addEventListener('touchend', (e) => {
    if (!menuElement.classList.contains('open')) return;
    touchEndX = e.changedTouches[0].screenX;

    if (touchStartX !== null && touchEndX !== null) {
      const swipeDistance = touchStartX - touchEndX;
      if (swipeDistance < -swipeThreshold) {
        closeMenu();
      }
    }

    touchStartX = null;
    touchEndX = null;
  });
}
