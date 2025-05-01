// src/js/menu.js

const burgerBtn = document.querySelector('.header--open-menu');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');
const sectionLinks = document.querySelectorAll('.menu-list > li');

export function initMenu() {


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
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menu.classList.remove('open');
  document.body.style.overflow = '';
}

function initSwipeMenu(menu) {
  let touchStartX = null;
  let touchEndX = null;
  let touchStartY = null;
  let touchEndY = null;
  const swipeThreshold = 80;
  const maxVerticalMove = 30;

  document.addEventListener('touchstart', (e) => {
    if (menu.classList.contains('open')) return;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, false);

  document.addEventListener('touchend', (e) => {
    if (menu.classList.contains('open')) return;
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;

    if (touchStartX === null || touchEndX === null) return;

    const swipeDistance = touchStartX - touchEndX;


    if (swipeDistance > swipeThreshold) {
      openMenu();
    }

    touchStartX = null;
    touchEndX = null;
  }, false);

  menu.addEventListener('touchstart', (e) => {
    if (!menu.classList.contains('open')) return;
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, false);

  menu.addEventListener('touchend', (e) => {
    if (!menu.classList.contains('open')) return;
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;

    if (touchStartX === null || touchEndX === null) return;

    const swipeDistance = touchStartX - touchEndX;
    const verticalDistance = Math.abs(touchStartY - touchEndY);

    if (swipeDistance < -swipeThreshold && verticalDistance < maxVerticalMove) {
      closeMenu();
    }

    touchStartX = null;
    touchEndX = null;
  }, false);
}

