import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
          <img
            class="gallery-image"
            src="${img.webformatURL}"
            alt="${img.tags}"
          />
        </a>

        <div class="info">
          <p class="info-item"><b>Likes</b> <span>${img.likes}</span></p>
          <p class="info-item"><b>Views</b> <span>${img.views}</span></p>
          <p class="info-item"><b>Comments</b> <span>${img.comments}</span></p>
          <p class="info-item"><b>Downloads</b> <span>${img.downloads}</span></p>
        </div>
      </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.add('active');
}

export function hideLoader() {
  loaderEl.classList.remove('active');
}
