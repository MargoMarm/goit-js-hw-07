import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galletyRef = document.querySelector(".gallery");

const makeImages = (gallery) =>
  gallery
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
   </a>
</li>`
    )
    .join("");

const images = makeImages(galleryItems);
galletyRef.insertAdjacentHTML("afterbegin", images);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
