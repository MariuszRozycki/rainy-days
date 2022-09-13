/* container for menuDetail */
const menuDetail = document.querySelector('.choose-jacket__menu-detail');

/* container for productWrapper */
const productWrapper = document.querySelector('.products-wrapper');

/* getting ID from url address in location to choose product */
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const product = products.find(({ id }) => id == productId);

/* placing a name of product got from queryString */
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
    <label for="xs">XS
      <input id="xs" class="item__size-button" name="item__size-button" value="size-xs" type="radio">
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

// Add product to cart code

// cart Array
let cart = [];

// Add product to cart code
const addToCartButton = document.querySelector('#add-to-cart');

// container for cart-details
const cartDetails = document.querySelector('.list-of-products');

const addToCart = () => {
  // check if product already exists
  if (cart.some(el => el.id === product.id)) {
    changeNumberOfUnits('plus', product.id);
  } else {
    // product destructure
    cart.push({
      ...product,
      numberOfUnits: 1
    });
  }
  console.log(cart);
  updateCart();
}

// create function updateCart()
const updateCart = () => {
  renderCartDetails();
  renderSubtotal();
}

addToCartButton.addEventListener('click', addToCart);



// create renderCartItems()
const renderCartDetails = () => {

  cartDetails.innerHTML = "";
  cart.forEach((item) => {
    let productLink = `<a href="./jacket-details.html?id=${item.id}" id="${item.id}" title="${item.name}">Product: ${item.name}</a>`;
    cartDetails.innerHTML += `
    <thead>
    <tr>
      <th></th>
      <th>Product</th>
      <th>Size</th>
      <th>Price</th>
      <th class="amount">Amount</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr class="cart-order">
      <td>1</td>
    </tr>
    <tr class="cart-product-details">
      <td><img src="${item.image}" alt="${item.name}"></td>
      <td>${productLink}</a></td>
      <td>Size: <a>XS</a></td>
      <td>Price: ${item.price}</td>
    </tr>
    <tr class="cart-number-of-units">
      <td><button onclick="changeNumberOfUnits('plus', ${productId})">+</button></td>
      <td>${item.numberOfUnits}</td>
      <td><button onclick="changeNumberOfUnits('minus', ${productId})">-</button></td>
    </tr>
    <tr class="remove">
      <td><a href="/layout/empty-cart.html"><i class="fas fa-trash-alt"></i></a></td>
    </tr>
  </tbody>
  <tfoot class="subtotal"></tfoot>
  `
  });
};

// change number of units
const changeNumberOfUnits = (action, id) => {
  console.log(cart);
  cart = cart.map(item => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === 'plus' && numberOfUnits < item.inStock) {
        numberOfUnits++;
      } else if (action === 'minus' && numberOfUnits > 1) {
        numberOfUnits--;
      }

      return {
        ...item,
        numberOfUnits
      }

    }
  });

  updateCart();
}

// calculate & render subtotal
const renderSubtotal = () => {
  // subtotal container
  const subtotal = document.querySelector(".subtotal");

  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach(item => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  })

  subtotal.innerHTML = `
    <tr>
      <td>Price total:</td>
      <td>${totalPrice.toFixed(2)} nok</td>
      <td>(Items: ${totalItems})</td>
    </tr>
  `
}














// addToCartButton Old code
/* change button text add to cart/remove from cart  */
// let flag = false;

// setTimeout(() => {
//   const addToCartButton = document.querySelector('#add-to-cart');
//   console.log("addToCartButton", addToCartButton);
//   const cartContainer = document.querySelector('.shopping-cart');
//   console.log("cartContainer", cartContainer);

//   addToCartButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     flag = !flag;
//     flag ? addToCartButton.innerHTML = `Remove Item` : addToCartButton.innerHTML = `Add Item`;
//     let number = 0;
//     if (flag) {
//       cartContainer.innerHTML += `<div class="item-quantity">${number + 1}</div>`;
//       cartContainer.classList.add('item-in-cart');
//     } else if (!flag) {
//       cartContainer.classList.remove('item-in-cart');
//     };

//     let itemQuantity = document.querySelector('.item-quantity');

//     addToCartButton.addEventListener('click', function (e) {
//       e.preventDefault();
//       itemQuantity.remove();
//     });
//   });
// }, 500);









