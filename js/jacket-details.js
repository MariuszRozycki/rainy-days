/* container for productWrapper */
const productWrapper = document.querySelector('.products-wrapper');

/* getting ID from url address in location to choose product */
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const product = products.find(({ id }) => id == productId);

/* choose-jacket__menu */
const chooseJacketMenu = document.querySelector(".choose-jacket__menu");
console.log(chooseJacketMenu);

if (product.type === 'mens-jackets') {
  chooseJacketMenu.innerHTML = `
  <li><a href="../layout/our-jackets.html">Our Jackets</a></li>
  <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
  <li><a href="../layout/mens-jackets.html">Men's Jackets</a></li>
  <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
  <li class="choose-jacket__menu-active choose-jacket__menu-detail"><a>${product.name}</a></li>
`;
}
if (product.type === 'womens-jacket') {
  chooseJacketMenu.innerHTML = `
  <li><a href="../layout/our-jackets.html">Our Jackets</a></li>
  <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
  <li><a href="../layout/womens-jackets.html">Women's Jackets</a></li>
  <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
  <li class="choose-jacket__menu-active choose-jacket__menu-detail"><a>${product.name}</a></li>
  `;
}
if (product.type === 'raincoat') {
  chooseJacketMenu.innerHTML = `
  <li><a href="../layout/our-jackets.html">Our Jackets</a></li>
  <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
  <li><a href="../layout/raincoats.html">Raincoats</a></li>
  <li><img class="menu-arrow" src="../images/menu-arrow.svg" alt="Arrow inside menu"></li>
  <li class="choose-jacket__menu-active choose-jacket__menu-detail"><a>${product.name}</a></li>
  `;
}


function renderProduct() {
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
  <button onclick="addToCart(${product.id})" id="add-to-cart" class="btn">Add Item</button>
</div>`
}
renderProduct();

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






















// First version doesn't work correctly
// // Add product to cart code
// // cart Array
// let cart = JSON.parse(localStorage.getItem("CART")) || [];
// console.log("cart", cart);

// // Add product to cart code

// // container for cart-details
// const cartDetails = document.querySelector('.list-of-products');

// function addToCart(id) {
//   // check if product already exists
//   console.log("id", id);
//   if (cart.some(item => item.id === id)) {
//     changeNumberOfUnits('plus', product.id);
//   } else {
//     // product destructure & adding new property "numberOfUnits" to product

//     cart.push({
//       ...product,
//       numberOfUnits: 1
//     });
//   }
//   updateCart();
// }

// // create function updateCart()
// const updateCart = () => {
//   renderCartDetails();
//   renderSubtotal();

//   // save cart to local storage
//   localStorage.setItem("CART", JSON.stringify(cart));
// }

// // create renderCartDetails()
// function renderCartDetails() {

//   // working code but with problems
//   cartDetails.innerHTML = "";
//   cart.forEach((item) => {
//     let productLink = `<a href="./jacket-details.html?id=${item.id}" id="${item.id}" title="${item.name}">Product: ${item.name}</a>`;
//     cartDetails.innerHTML += `
//     <thead>
//     <tr>
//       <th></th>
//       <th>Product</th>
//       <th>Size</th>
//       <th>Price</th>
//       <th class="amount">Amount</th>
//       <th></th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr class="cart-order">
//       <td>1</td>
//     </tr>
//     <tr class="cart-product-details">
//       <td><img src="${item.image}" alt="${item.name}"></td>
//       <td>${productLink}</a></td>
//       <td>Size: <a>XS</a></td>
//       <td>Price: ${item.price}</td>
//     </tr>
//     <tr class="cart-number-of-units">
//       <td><button onclick="changeNumberOfUnits('plus', ${item.id})">+</button></td>
//       <td>${item.numberOfUnits}</td>
//       <td><button onclick="changeNumberOfUnits('minus', ${item.id})">-</button></td>
//     </tr>
//     <tr onclick="removeItem(${item.id})" class="remove">
//       <td><i class="fas fa-trash-alt"></i></td>
//     </tr>
//   </tbody>
//   `
//   });
// };

// // remove item from cart
// const removeItem = (id) => {
//   console.log("id", id);


//   cart = cart.filter(item => {
//     console.log("id", item.id);
//     id === item.id;
//   });

//   updateCart();
// }

// // change number of units
// const changeNumberOfUnits = (action) => {
//   console.log("cart in changeNumberOfUnits", cart);

//   cart = cart.map(item => {
//     let numberOfUnits = item.numberOfUnits;

//     if (item.id === item.id) {
//       if (action === 'plus' && numberOfUnits < item.inStock) {
//         numberOfUnits++;
//       } else if (action === 'minus' && numberOfUnits > 1) {
//         numberOfUnits--;
//       }

//       return {
//         ...item,
//         numberOfUnits
//       }

//     }
//   });
//   updateCart();
// }

// // subtotal container
// const subtotal = document.querySelector(".subtotal");

// // cart container in nav
// const cartContainer = document.querySelector('.shopping-cart');

// // calculate subtotal
// const renderSubtotal = () => {

//   let totalPrice = 0;
//   let totalItems = 0;

//   cart.forEach(item => {
//     totalPrice += item.price * item.numberOfUnits;
//     totalItems += item.numberOfUnits;
//   })

//   subtotal.innerHTML = `
//     <tr>
//       <td>Price total:</td>
//       <td>${totalPrice.toFixed(2)} nok</td>
//       <td>(Items: ${totalItems})</td>
//     </tr>
//   `

//   cartContainer.innerHTML += `<div class="item-quantity">${totalItems}</div>`
// }

// updateCart();














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









