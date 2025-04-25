import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const allProjects = [
    {
        src1x: 'my-projects/rectangle-11-1x.webp',  
        src2x: 'my-projects/rectangle-11-2x.webp',
        src: '/my-projects/rectangle-11-1x.webp',
        alt: "Wallet webservice ",
        h3: "Wallet webservice "
    },
    {
        src1x: 'my-projects/rectangle-9-1x.webp',  
        src2x: 'my-projects/rectangle-9-2x.webp',
        src: 'my-projects/rectangle-9-1x.webp',
        alt: "Green harvest webservice",
        h3: "Green harvest webservice"
    },
    {
        src1x: 'my-projects/rectangle-12-1x.webp',  
        src2x: 'my-projects/rectangle-12-2x.webp',
        src: 'my-projects/rectangle-12-1x.webp',
        alt: "English Exellence website",
        h3: "English Exellence website"
    },
    {
        src1x: '/my-projects/rectangle-10-1x.webp',  
        src2x: '/my-projects/rectangle-10-2x.webp',
        src: '/my-projects/rectangle-10-1x.webp',
        alt: "power pulse webservice",
        h3: "power pulse webservice"
    },
    {
        src1x: '/my-projects/rectangle-7-1x.webp',
        src2x: '/my-projects/rectangle-7-2x.webp',
        src: '/my-projects/rectangle-7-1x.webp',
        alt: "mimino website",
        h3: "mimino website"
    },
    {
        src1x: '/my-projects/rectangle-8-1x.webp',
        src2x: '/my-projects/rectangle-8-2x.webp',
        src: '/my-projects/rectangle-8-1x.webp',
        alt: "vyshyvanka vibes Landing Page",
        h3: "vyshyvanka vibes Landing Page"
    },
    {
        src1x: '/my-projects/rectangle-6-1x.webp',
        src2x: '/my-projects/rectangle-6-2x.webp',
        src: '/my-projects/rectangle-6-1x.webp',
        alt: "chego jewelry website",
        h3: "chego jewelry website"
    },
    {
        src1x: '/my-projects/rectangle-4-1x.webp',
        src2x: '/my-projects/rectangle-4-2x.webp',
        src: '/my-projects/rectangle-4-1x.webp',
        alt: "energy flow webservice",
        h3: "energy flow webservice"
    },
    {
        src1x: '/my-projects/rectangle-5-1x.webp',
        src2x: '/my-projects/rectangle-5-2x.webp',
        src: '/my-projects/rectangle-5-1x.webp',
        alt: "fruitbox online store",
        h3: "fruitbox online store"
    },
    {
        src1x: '/my-projects/first-screen-1-1x.webp',
        src2x: '/my-projects/first-screen-1-2x.webp',
        src: '/my-projects/first-screen-1-1x.webp',
        alt: "starlight studio landing page",
        h3: "starlight studio landing page"
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
          <h3 class="names-my-project">${h3}</h3>
          <a href="https://github.com/Marakasss/gitpub-team-project" target="_blank">
            <button class="button-my-project">
              <span class="visit-my-project">VISIT</span>
              <svg class="svg-my-project" height="14.5" width="14.5">
                <use class="svg-visit-my-project" href="/img/sprite.svg#icon-visit-arrow"></use>
              </svg>
            </button>
          </a>
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

// Загрузка первых 3-х проектов при старте страницы (без скролла)


// Обработчик кнопки "LOAD MORE" — включает скролл
loadMoreBtn.addEventListener('click', () => loadNextProjects(true));


