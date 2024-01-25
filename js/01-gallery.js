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

const links = document.querySelectorAll(".gallery__link");

links.forEach((link) => {
  link.addEventListener("click", showModal);
});

function showModal(event) {
  event.preventDefault();
  const src = event.currentTarget.getAttribute("href");
  const lightbox = basicLightbox.create(`<img src=${src} />`);
  lightbox.show();

  const escapeLightbox = (event) => {
    if (event.key === "Escape") {
      lightbox.close();
      document.removeEventListener("keydown", escapeLightbox);
    }
  };

  document.addEventListener("keydown", escapeLightbox);
}
