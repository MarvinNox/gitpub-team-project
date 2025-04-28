import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import Swiper from 'swiper/bundle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiperWrapper = document.querySelector('.swiper-wrapper');
const notFoundText = document.querySelector('.reviews-not-found');

async function fetchReviews() {
  try {
    const response = await axios.get('https://portfolio-js.b.goit.study/api/reviews');
    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to load reviews',
    });
    notFoundText.hidden = false;
  }
}

function renderReviews(reviews) {
  swiperWrapper.innerHTML = reviews
    .map(
      ({ review, author, avatar_url }) => `
      <li class="swiper-slide">
        <div class="review-card">
          <p class="review-text">${review}</p>
          <div class="review-author">
            <img src="${avatar_url}" alt="${author}" class="review-author-avatar" />
            <span class="review-author-name">${author}</span>
          </div>
        </div>
      </li>
    `,
    )
    .join('');

  initSwiper();
}

function initSwiper() {
  new Swiper('.swiper', {
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      1280: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
    grabCursor: true,
    on: {
      reachEnd(swiper) {
        swiper.navigation.nextEl.classList.add('reviews-button-disabled');
      },
      reachBeginning(swiper) {
        swiper.navigation.prevEl.classList.add('reviews-button-disabled');
      },
      fromEdge(swiper) {
        swiper.navigation.nextEl.classList.remove('reviews-button-disabled');
        swiper.navigation.prevEl.classList.remove('reviews-button-disabled');
      },
    },
  });
}

fetchReviews().then(renderReviews);