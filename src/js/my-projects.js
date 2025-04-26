import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const allProjects = [
    {
        src1x: '/my-projects/rectangle-11-1x.jpg',  
        src2x: '/my-projects/rectangle-11-2x.jpg',
        src: '/my-projects/rectangle-11-1x.jpg',
        alt: "Wallet webservice "
    },
    {
        src1x: '/my-projects/rectangle-9-1x.jpg',  
        src2x: '/my-projects/rectangle-9-2x.jpg',
        src: '/my-projects/rectangle-9-1x.jpg',
        alt: "Green harvest webservice"
    },
    {
        src1x: '/my-projects/rectangle-12-1x.jpg',  
        src2x: '/my-projects/rectangle-12-2x.jpg',
        src: '/my-projects/rectangle-12-1x.jpg',
        alt: "English Exellence website"
    },
    {
        src1x: '/my-projects/rectangle-10-1x.jpg',  
        src2x: '/my-projects/rectangle-10-2x.jpg',
        src: '/my-projects/rectangle-10-1x.jpg',
        alt: "power pulse webservice"
    },
    {
        src1x: '/my-projects/rectangle-7-1x.jpg',
        src2x: '/my-projects/rectangle-7-2x.jpg',
        src: '/my-projects/rectangle-7-1x.jpg',
        alt: "mimino website"
    },
    {
        src1x: '/my-projects/rectangle-8-1x.jpg',
        src2x: '/my-projects/rectangle-8-2x.jpg',
        src: '/my-projects/rectangle-8-1x.jpg',
        alt: "vyshyvanka vibes Landing Page"
    },
    {
        src1x: '/my-projects/rectangle-6-1x.jpg',
        src2x: '/my-projects/rectangle-6-2x.jpg',
        src: '/my-projects/rectangle-6-1x.jpg',
        alt: "chego jewelry website"
    },
    {
        src1x: '/my-projects/rectangle-4-1x.jpg',
        src2x: '/my-projects/rectangle-4-2x.jpg',
        src: '/my-projects/rectangle-4-1x.jpg',
        alt: "energy flow webservice"
    },
    {
        src1x: '/my-projects/rectangle-5-1x.jpg',
        src2x: '/my-projects/rectangle-5-2x.jpg',
        src: '/my-projects/rectangle-5-1x.jpg',
        alt: "fruitbox online store"
    },
    {
        src1x: '/my-projects/first-screen-1-1x.jpg',
        src2x: '/my-projects/first-screen-1-2x.jpg',
        src: '/my-projects/first-screen-1-1x.jpg',
        alt: "starlight studio landing page"
    }
];

const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.btn-load-more-my-project');

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let currentIndex = 0;
const batchSize = 3;

function createGallery(projects) {
  const markup = projects
    .map(({ src1x, src2x, src, alt, h3 }) => {
      return `
      <li>
  <a href="${src}" class="gallery-link">
    <img class="image-my-project" srcset="${src1x} 1x, ${src2x} 2x" src="${src}" alt="${alt}" />
  </a>
  <div class="div-my-project">
    <p class="text-my-project">React, JavaScript, Node JS, Git</p>
    <h3 class="names-my-project">${alt}</h3>
    <button class="button-my-project" onclick="window.open('https://github.com/Marakasss/gitpub-team-project', '_blank')">
      <span class="visit-my-project">VISIT</span>
      <svg class="svg-my-project" height="14.5" width="14.5">
        <use class="svg-visit-my-project" href="/img/sprite.svg#icon-visit-arrow"></use>
      </svg>
    </button>
  </div>
</li>
    `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
} 



 export async function loadNextProjects(shouldScroll = true) {
  loadMoreBtn.disabled = true;
  loadMoreBtn.classList.add('disabled');

  const nextProjects = allProjects.slice(currentIndex, currentIndex + batchSize);
  const previousLastItem = gallery.lastElementChild;

  await new Promise(resolve => setTimeout(resolve, 200)); // Плавная задержка для UX

  createGallery(nextProjects);

  const newFirstCard = previousLastItem ? previousLastItem.nextElementSibling : gallery.firstElementChild;

  if (shouldScroll && newFirstCard) {
    newFirstCard.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  currentIndex += nextProjects.length;

  if (currentIndex >= allProjects.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.disabled = false;
    loadMoreBtn.classList.remove('disabled');
  }
}




// Обработчик кнопки "LOAD MORE" — включает скролл
loadMoreBtn.addEventListener('click',loadNextProjects);