'use strict';
const baseUrl = "https://mariuszrozycki.info/rainy-days/wp-json/wc/store/products?per_page=100";

async function getProducts(url) {
  // data from REST API
  const response = await fetch(url);
  const products = await response.json();

  products.forEach(product => {
    const productPrice = product.prices.price; // productPrice

    const productId = product.id; // productId
    const productName = product.name; // productName
    const productImg = product.images.map(img => img.src); // productImg
    const productType = product.categories.map(el => el.slug); // productType

    rainCoatsGenerator(productId, productName, productImg, productPrice, productType);
  });
}
getProducts(baseUrl);

const raincoatsProductsWrapper = document.querySelector('.raincoats');

function rainCoatsGenerator(productId, productName, productImg, productPrice, productType) {
  let productLink = `<a href="../layout/jacket-details.html?id=${productId}" id=${productId} title="${productName}" class="btn btn__show-item">Show Item</a>`;

  if (productType[0] === 'raincoats') {
    raincoatsProductsWrapper.innerHTML +=
      `<div class="item" onclick="location.href='../layout/jacket-details.html?id=${productId}'">
          <div class="item__picture">
          <img src="${productImg}" alt="Picture of ${productName}">
        </div>
        <div>
          <h1 class="item__product-name">${productName}</h1>
          <p class="item__product-price">${productPrice} nok</p>
        ${productLink}
        </div>  
      </div>`
  }
}

