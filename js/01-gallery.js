import { galleryItems } from './gallery-items.js';

// console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const galleryEl = createGallery(galleryItems);

function createGallery(galleryItems) {
return galleryItems
.map(({ preview, original, description}) => {
    return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
})
.join(' ');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryEl);
galleryContainer.addEventListener('click', onImgClick)

function onImgClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG'){
        return;
    }
    const modal = basicLightbox.create(
     `<img src="${event.target.dataset.source}" width="800" height="600">`,
     
     {  onShow: () => window.addEventListener('keydown', onKeyPress),
        onClose: () => window.removeEventListener ('keydown', onKeyPress),   
    }
     );
 modal.show();
  function onKeyPress (event) {
    if(event.code === 'Escape') {
        modal.close();
    }
  }  
}
