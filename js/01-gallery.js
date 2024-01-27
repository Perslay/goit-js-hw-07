import { galleryItems } from "./gallery-items.js";
// Change code below this line

const list = document.querySelector(".gallery");

const listItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li><div
      class="gallery__item"><a
      class="gallery__link" href=${original}></div>
      <img class="gallery__image"
      src=${preview}
      data-source=${original}
      alt="${description}"
      /></a></div></li>`
  )
  .join("");

list.insertAdjacentHTML("afterbegin", listItems);

const lightbox = basicLightbox.create(`<img src="" />`, {
  onShow: () => window.addEventListener("keydown", escape),
  onClose: () => window.removeEventListener("keydown", escape),
});

function showLightbox(event) {
  event.preventDefault();
  const src = event.target.dataset.source;

  if (!src) return;

  lightbox.element().querySelector("img").src = src;
  lightbox.show();
}

list.addEventListener("click", showLightbox);

function escape(event) {
  if (event.key !== "Escape") return;
  lightbox.close();
}
