import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const form = document.getElementById('form');
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

const serverRequest = async query => {
  const url = 'https://portfolio-js.b.goit.study/api/requests';
  try {
    const serverResponse = await axios.post(url, query);
    showPopUp(serverResponse.data.title, serverResponse.data.message);
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

const showPopUp = (title, message) => {
  document.getElementById('popUpTitle').innerText = `${title}`;
  document.getElementById('popUpMessage').innerText = `${message}`;
  const closeModalBtn = document.querySelector('[modal-close]');
  closeModalBtn.addEventListener('click', toggleModal);
};
