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
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    )
    .join("");

const images = makeImages(galleryItems);

galletyRef.insertAdjacentHTML("afterbegin", images);

galletyRef.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);
  instance.show();

  galletyRef.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}
