'use strict';

const raincoatsProductsWrapper = document.querySelector('.raincoats');

for (let product of products) {

  let productLink = `<a href="../layout/jacket-details.html?id=${product.id}" id=${product.id} title="${product.name}" class="btn btn__show-item">Show Item</a>`;

  if (product.type === 'raincoat') {
    raincoatsProductsWrapper.innerHTML +=
      `<div class="item">
          <div class="item__picture">
          <img src="${product.image}" alt="Picture of ${product.name}">
        </div>
        <div>
          <h1 class="item__product-name">${product.name}</h1>
          <p class="item__product-price">${product.price} nok</p>
        ${productLink}
        </div>  
      </div>`
  }
};

