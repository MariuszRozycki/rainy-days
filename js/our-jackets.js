const ourJacketsContainer = document.querySelector('.our-jackets');
const baseUrl = "https://mariuszrozycki.info/rainy-days/wp-json/wc/store/products?per_page=100";

async function getProducts(url) {
  // data from REST API
  try {
    const response = await fetch(url);
    const products = await response.json();

    ourJacketsContainer.innerHTML = "";

    products.forEach(product => {
      const productPrice = product.prices.price; // productPrice

      const productId = product.id; // productId
      const productName = product.name; // productName
      const productImg = product.images.map(img => img.src); // productImg

      renderProductsOnOurJackets(productId, productName, productImg, productPrice);
    });
  }
  catch (err) {
    ourJacketsContainer.innerHTML = `<p class="bad-error">Some technical issue occurred. Please contact service. Call to 939 28 270</p>`;
  }
}
getProducts(baseUrl);

// creating function renderProductsOnMain()
const renderProductsOnOurJackets = (productId, productName, productImg, productPrice) => {
  let productLink = `<a href="../layout/jacket-details.html?id=${productId}" id=${productId} title="${productName}" class="btn btn__show-item">Show Item</a>`;

  ourJacketsContainer.innerHTML += `
        <div class="item" onclick="location.href='../layout/jacket-details.html?id=${productId}'">
            <div class="item__picture">
            <img src="${productImg}" alt="Picture of ${productName}">
          </div>
          <div>
            <h1 class="item__product-name">${productName}</h1>
            <p class="item__product-price">${productPrice} nok</p>
          ${productLink}
          </div>  
        </div>
      `;
}
