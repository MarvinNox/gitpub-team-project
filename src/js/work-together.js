import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const form = document.getElementById('work-together-form');
let query = { email: '', comment: '' };

form.addEventListener('submit', evt => {
  evt.preventDefault();
  query.email = form.elements.email.value.trim();
  query.comment = form.elements.comment.value.trim();
  if (!query.email || !query.comment) {
    iziToast.error({
      message: 'Please fill out all required fields',
      backgroundColor: '#EF4040',
      close: true,
      position: 'topRight',
    });
    return;
  }
  serverRequest(query);
});

export const serverRequest = async query => {
  const url = 'https://portfolio-js.b.goit.study/api/requests';
  try {
    const serverResponse = await axios.post(url, query);
    showModal(serverResponse.data.title, serverResponse.data.message);
    console.log(serverResponse);
    form.reset();
  } catch (error) {
    iziToast.error({
      message: `${error}`,
      backgroundColor: '#EF4040',
      close: true,
      position: 'topRight',
    });
  }
};

const showModal = (title, message) => {
  document.getElementById('work-together-modal').classList.toggle('is-open');
  document.getElementById('work-together-modal-caption').innerText = `${title}`;
  document.getElementById(
    'work-together-modal-paragraph'
  ).innerText = `${message}`;
  const closeModalBtn = document.getElementById(
    'work-together-modal-close-button'
  );
  closeModalBtn.addEventListener('click', closeModal);
  function closeModal() {
    document.getElementById('work-together-modal').classList.remove('is-open');
  }
};
