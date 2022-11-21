const onMainContainer = document.querySelector('.on-main');

const baseUrl = "https://mariuszrozycki.info/rainy-days/wp-json/wc/store/products?per_page=100";

async function getProducts(url) {
  // data from REST API
  try {
    const response = await fetch(url);
    const products = await response.json();

    onMainContainer.innerHTML = "";

    products.forEach(product => {
      const productPrice = product.prices.price;
      const productId = product.id;
      const productName = product.name;
      const productImg = product.images.map(img => img.src);

      product.attributes.map(attribute => {
        const productOnMain = attribute.name === "onMain";
        renderProductsOnMain(productOnMain, productId, productName, productImg, productPrice);
      })
    });
  }
  catch (err) {
    onMainContainer.innerHTML = `<p class="bad-error">Some technical issue occurred. Please contact service. Call to 939 28 270</p>`;
  }

  /* .products .item .more-items */
  const mainItems = document.querySelectorAll('.item');
  mainItems[0].classList.add('hide');
  mainItems[4].classList.add('hide');

  /* .products .item | displaying more items in section */
  let buttonMoreItems = document.querySelector('.btn__more-items');
  buttonMoreItems.innerHTML = 'more items';

  /* changing text of button 'MORE ITEMS' to 'LESS ITEMS' & add jacket  */
  let flag = false;

  buttonMoreItems.addEventListener('click', function () {
    flag = !flag;
    flag ? this.innerHTML = 'hide items' : this.innerHTML = 'more items';

    for (let item of mainItems) {
      item.classList.remove('hide');
    }

    if (!flag) {
      mainItems[0].classList.toggle('hide');
      mainItems[4].classList.toggle('hide');
    }
  });
}
getProducts(baseUrl);

// creating function renderProductsOnMain()
const renderProductsOnMain = (productOnMain, productId, productName, productImg, productPrice) => {
  if (productOnMain) {
    let productLink = `<a href="../layout/jacket-details.html?id=${productId}" id=${productId} title="${productName}" class="btn btn__show-item">Show Item</a>`;

    onMainContainer.innerHTML += `
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
}


