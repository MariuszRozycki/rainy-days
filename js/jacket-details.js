/* container for menuDetail */
const menuDetail = document.querySelector('.choose-jacket__menu-detail');

/* container for productWrapper */
const productWrapper = document.querySelector('.products-wrapper');

/* getting ID from url adress in location to choose product */
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const product = products.find(({ id }) => id == productId);
console.log(product);

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
    <h1 class="item__product-name">${product.name}</h1>
    <p class="item__product-price">999 nok</p>
    <p class="item__product-size">Choose size:</p>
    <form class="item__product-choose-size">
      
    <label for="xs">XS<input id="xs" class="item__size-button" name="item__size-button" value="size-xs" type="radio">
        </label>
      
        
        <label for="s">S
        <input id="s" class="item__size-button" name="item__size-button" value="size-s" type="radio">
        </label>
      

        <label for="m">M
        <input id="m" class="item__size-button" name="item__size-button" value="size-m" type="radio">
        </label>
      

        <label for="l">L
        <input id="l" class="item__size-button" name="item__size-button" value="size-l" type="radio">
        </label>
           
        <label for="xl">XL
        <input id="xl" class="item__size-button" name="item__size-button" value="size-xl" type="radio">
        </label>
      
    </form>
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

/* container for rating */
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


/* change button text add to cart/remove from cart  */
let flag = false;

setTimeout(() => {
  const addToCartButton = document.querySelector('#add-to-cart');
  const cartContainer = document.querySelector('.shopping-cart');

  addToCartButton.addEventListener('click', (e) => {
    e.preventDefault();

    flag = !flag;
    flag ? addToCartButton.innerHTML = `Remove Item` : addToCartButton.innerHTML = `Add Item`;
    let number = 0;
    if (flag) {
      cartContainer.innerHTML += `<div class="item-quantity">${number + 1}</div>`;
      cartContainer.classList.add('item-in-cart');
    } else if (!flag) {
      cartContainer.classList.remove('item-in-cart');
    };

    let itemQuantity = document.querySelector('.item-quantity');

    addToCartButton.addEventListener('click', function (e) {
      e.preventDefault();
      itemQuantity.remove();
    });
  });
}, 500);









