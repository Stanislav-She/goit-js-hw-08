import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const containerGalleryRef = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);

containerGalleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

// import SimpleLightbox from 'simplelightbox';
// // додаємо імпорт бібліотеки SimpleLightbox
// import 'simplelightbox/dist/simple-lightbox.min.css';
// // додаємо ще один додатковий імпорт стилів бібліотеки SimpleLightbox

// // Add imports above this line
// import { galleryItems } from './gallery-items';
// // Change code below this line

// // решта коду внизу зкопійована з task-02 home work 7

// const containerGalleryRef = document.querySelector('.gallery');

// const galleryMarkup = createGalleryMarkup(galleryItems);

// containerGalleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

// function createGalleryMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `
//         <a class="gallery__item" href="${original}">
//             <img
//             class="gallery__image"
//             src="${preview}"
//             alt="${description}"
//             />
//         </a>`;
//     })
//     .join('');
// }

// var lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionPosition: 'bottom',
//   captionDelay: 250,
// });
