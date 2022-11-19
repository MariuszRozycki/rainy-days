/* container for productWrapper */
const productWrapper = document.querySelector('.products-wrapper');

const detailUrl = "https://mariuszrozycki.info/rainy-days/wp-json/wc/store/products?per_page=100";

async function getProduct(url) {
  // data from REST API
  try {
    const response = await fetch(url);
    const products = await response.json();

    /* getting ID from url address in location to choose product */
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const productId = params.get("id");

    let product = products.find(({ id }) => id == productId);

    const productSize = product.variations.map(el => el.attributes.map(el => el.value));
    console.log(productSize);

    const productName = product.name; // productName
    const productPrice = product.prices.price;
    const productImg = product.images.map(img => img.src); // productImg
    const productType = product.categories.map(el => el.slug); // productType

    if (document.querySelector('title').innerText === 'Rainy Days | Jacket Details') {
      renderNavProductDetails(productType, productName);
      renderProduct(productName, productImg, productSize);

      /* container for rating */
      const ratingContainer = document.querySelector('.rating');
      const items = ratingContainer.querySelectorAll('.rating-item');

      ratingContainer.addEventListener('click', (event) => {
        const classElement = event.target.classList;
        if (!classElement.contains('active')) {
          items.forEach(item => item.classList.remove('active'));
          classElement.add('active');
        }
      });
    }
  }
  catch (error) {
    console.error(error);
  }
}
getProduct(detailUrl);


/* choose-jacket__menu */
const chooseJacketMenu = document.querySelector(".choose-jacket__menu");

function renderNavProductDetails(productType, productName) {
  switch (productType[0]) {
    case 'mens-jackets':
      chooseJacketMenu.innerHTML = `
        <li><a href="../layout/our-jackets.html">Our Jackets</a></li>
        <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
        <li class="product-type"><a href="../layout/mens-jackets.html">Men's Jackets</a></li>
        <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
        <li class="choose-jacket__menu-active choose-jacket__menu-detail"><a>${productName}</a></li>
      `;
      break;

    case 'womens-jackets':
      chooseJacketMenu.innerHTML = `
        <li><a href="../layout/our-jackets.html">Our Jackets</a></li>
        <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
        <li><a href="../layout/womens-jackets.html">Women's Jackets</a></li>
        <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
        <li class="choose-jacket__menu-active choose-jacket__menu-detail"><a>${productName}</a></li>
        `;
      break;

    case 'raincoats':
      chooseJacketMenu.innerHTML = `
        <li><a href="../layout/our-jackets.html">Our Jackets</a></li>
        <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
        <li><a href="../layout/raincoats.html">Raincoats</a></li>
        <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
        <li class="choose-jacket__menu-active choose-jacket__menu-detail"><a>${productName}</a></li>
        `;
      break;
  }
}

function renderProduct(productName, productImg, productSize) {
  /* placing product-detail html code & rating inside .product-wrapper */

  productWrapper.innerHTML +=
    `<div class="item">
  <div class="item__picture">
    <img src="${productImg}" alt="Picture of ${productName}">
  </div>
  <div class="item__product-description">
    <h1 class="item__product-name">${productName}</h1>
    <p class="item__product-price">999 nok</p>
    <p class="item__product-size">Size:</p>
    <form class="item__product-choose-size"></form>
  </div>
  <div class="item__info">
    <ul class="rating">
      <li class="rating-item" data-rate="1">
      <li>
      <li class="rating-item active" data-rate="2">
      <li>
      <li class="rating-item" data-rate="3">
      <li>
      <li class="rating-item" data-rate="4">
      <li>
      <li class="rating-item" data-rate="5">
      <li>
    </ul>

    <ul class="reviews">
      <li>Lorem sisum sit dolor</li>
      <li>Dera sisum sit dolor</li>
      <li>Bera sisum sit dolor</li>
    </ul>
  </div>
  <button id="add-to-cart" class="btn">Add Item</button>
</div>`


  /* sizesRender */
  const sizesContainer = document.querySelector(".item__product-choose-size");
  console.log(productSize);

  for (let size of productSize) {
    sizesContainer.innerHTML += `
  <label for="${size}">${size}
    <input id="${size}" class="item__size-button" name="item__size-button" type="radio">
  </label>
  `;
  }



  createCart(); // function from cart.js
}
