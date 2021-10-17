'use strict'

const productsWrapper = document.querySelector('.products-wrapper');

for (let product of products) {
  let productLink = `<a href="#" title="Raincut Wtp" class="btn btn__show-item">Show Item</a>`;
  productsWrapper.innerHTML +=
    `<div class="item">
  <div class="item__picture">
    <img src="${product.image}"
      alt="Picture of ${product.name}">
  </div>
  <h3 class="item__product-name">${product.name}</h3>
  <p class="item__product-price">${product.price} nok</p>
  ${productLink}
</div>`
}