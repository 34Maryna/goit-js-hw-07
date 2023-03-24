import { galleryItems } from './gallery-items.js';
// console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryEl = createGallery(galleryItems);

function createGallery(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) => {
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`;
     })
     .join(' ');
}
galleryContainer.insertAdjacentHTML('beforeend', galleryEl);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });