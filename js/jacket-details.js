/* container for productWrapper */
const productWrapper = document.querySelector('.products-wrapper');

/* getting ID from url address in location to choose product */
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

let product = products.find(({ id }) => id == productId);

/* choose-jacket__menu */
const chooseJacketMenu = document.querySelector(".choose-jacket__menu");
function renderNavProductDetails() {

  let productType = product.type;

  switch (productType) {
    case 'mens-jackets':
      chooseJacketMenu.innerHTML = `
      <li><a href="../layout/our-jackets.html">Our Jackets</a></li>
      <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
      <li class="product-type"><a href="../layout/mens-jackets.html">Men's Jackets</a></li>
      <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
      <li class="choose-jacket__menu-active choose-jacket__menu-detail"><a>${product.name}</a></li>
    `;
      break;

    case 'womens-jacket':
      chooseJacketMenu.innerHTML = `
      <li><a href="../layout/our-jackets.html">Our Jackets</a></li>
      <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
      <li><a href="../layout/womens-jackets.html">Women's Jackets</a></li>
      <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
      <li class="choose-jacket__menu-active choose-jacket__menu-detail"><a>${product.name}</a></li>
      `;
      break;

    case 'raincoat':
      chooseJacketMenu.innerHTML = `
      <li><a href="../layout/our-jackets.html">Our Jackets</a></li>
      <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
      <li><a href="../layout/raincoats.html">Raincoats</a></li>
      <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
      <li class="choose-jacket__menu-active choose-jacket__menu-detail"><a>${product.name}</a></li>
      `;
  }
}

/* placing product-detail html code & rating inside .product-wrapper */

productWrapper.innerHTML +=
  `<div class="item">
  <div class="item__picture">
    <img src="${product.image}" alt="Picture of ${product.name}">
  </div>
  <div class="item__product-description">
    <h1 class="item__product-name">${product.name}</h1>
    <p class="item__product-price">999 nok</p>
    <p class="item__product-size">Choose size:</p>
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
  <button onclick="addToCart(${product.id})" id="add-to-cart" class="btn">Add Item</button>
</div>`

/* sizesRender */
const sizesContainer = document.querySelector(".item__product-choose-size");

for (let item of product.sizes) {
  sizesContainer.innerHTML += `
  <label for="${item}">${item}
    <input id="${item}" class="item__size-button" name="item__size-button" type="radio">
  </label>
  `;
}

if (document.querySelector('title').innerText === 'Rainy Days | Jacket Details') {
  renderNavProductDetails();

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

// size of product item
const sizeOfItem = document.querySelectorAll(".item__size-button");
const itemProductSize = document.querySelector(".item__product-size");
let size;

sizeOfItem.forEach(item => {
  item.addEventListener('click', () => {
    console.log(item);
    size = item.id;

    if (itemProductSize.classList.contains("failure")) {
      itemProductSize.classList.remove("failure");
    }
    size;
    console.log(size);
  });
});



