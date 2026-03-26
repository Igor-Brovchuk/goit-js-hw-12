import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const btnloadMore = document.querySelector('.js-btn-load');

let page = 1;
let query = '';
let totalHits = 0;
const perPage = 15;

form.addEventListener('submit', async e => {
  e.preventDefault();

  query = e.target.elements['search-text'].value.trim();
  if (!query) return;

  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        messageColor: '#fafafb',
        backgroundColor: '#ef4040',
      });
      return;
    }

    createGallery(data.hits);

    if (totalHits > perPage) {
      showLoadMoreButton();
    }

    if (page * perPage >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }

    form.reset();
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
      position: 'topRight',
      messageColor: '#fafafb',
      backgroundColor: '#ef4040',
    });
  } finally {
    hideLoader();
  }
});

btnloadMore.addEventListener('click', async () => {
  page += 1;

  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);
    showLoadMoreButton();

    const card = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();

    window.scrollBy({
      top: card.height * 2,
      behavior: 'smooth',
    });

    if (page * perPage >= totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Error loading more images',
      position: 'topRight',
      messageColor: '#fafafb',
      backgroundColor: '#ef4040',
    });
  } finally {
    hideLoader();
  }
});
