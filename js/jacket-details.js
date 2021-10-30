/* container for menuDetail */
const menuDetail = document.querySelector('.choose-jacket__menu-detail');

/* container for productWrapper */
const productWrapper = document.querySelector('.products-wrapper');

/* getting ID from url adress in location to choose product */
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const product = products.find(({ id }) => id == productId);

/* placeing a name of product got from queryString */
menuDetail.innerHTML +=
  `<a>${product.name}</a>`

/* placing product-detail html code & rating inside .product-wrapper */
productWrapper.innerHTML +=
  `<div class="item">
  <div class="item__picture">
    <img src="${product.image}" alt="Picture of ${product.name}">
  </div>
  <div class="item__product-description">
    <h3 class="item__product-name">${product.name}</h3>
    <p class="item__product-price">999 nok</p>
    <p class="item__product-size">Choose size:</p>
    <ul class="item__product-choose-size">
      <li><a>XS</a></li>
      <li><a>S</a></li>
      <li><a>M</a></li>
      <li><a>L</a></li>
      <li><a>XL</a></li>
    </ul>
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
  <button class="btn">Add to cart</button>
</div>`

/* container for rating & code for*/
const ratingContainer = document.querySelector('.rating');
const items = ratingContainer.querySelectorAll('.rating-item');

ratingContainer.addEventListener('click', (event) => {
  const classElement = event.target.classList;
  if (!classElement.contains('active')) {
    items.forEach(item => item.classList.remove('active'));
    console.log(event.target.getAttribute("data-rate"));
    classElement.add('active');
  }
});



