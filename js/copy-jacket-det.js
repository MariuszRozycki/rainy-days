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
}

if (document.querySelector('title').innerText === 'Rainy Days | Jacket Details') {
  renderNavProductDetails();
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
}

/* cart */
let cart = JSON.parse(localStorage.getItem("CART")) || [];

// size of item
const sizeOfItem = document.querySelectorAll(".item__size-button");
console.log(sizeOfItem);
const itemProductSize = document.querySelector(".item__product-size");
let size;

sizeOfItem.forEach(item => {
  item.addEventListener('click', () => {
    size = item.id;
    if (itemProductSize.classList.contains("failure")) {
      itemProductSize.classList.remove("failure");
    }
    return size;
  });
});

/* Add product to cart */
function addToCart() {
  if (size === undefined) {
    itemProductSize.classList.add("failure");
    alert("Choose size!");
    return null;
  }

  if (cart.some(item => item.id === product.id && item.size === size)) {
    alert("Product already exists in cart!");
  }

  else {
    cart.push({
      ...product,
      numberOfUnits: 1,
      size
    });
    updateCart();
  }
  localStorage.setItem("CART", JSON.stringify(cart));
}

/* Rendering product(s) in cart */
const productsInCart = document.querySelector(".list-of-products");

function renderProductInCart() {
  productsInCart.innerHTML = "";
  cart.forEach((item, index) => {
    let productLink = `<a href="./jacket-details.html?id=${item.id}" id="${item.id}" title="${item.name}">${item.name}</a>`;

    productsInCart.innerHTML += `
      <thead class="cart-header-title">
      </thead>
      <tbody>
      <tr class="cart-order">
        <td>${++index}</td>
      </tr>
      <tr class="cart-product-details">
        <td><img src="${item.image}" alt="${item.name}"></td>
        <td>Product: <strong>${productLink}</strong></td>
        <td>Size: <strong><a class="size">${item.size}</a></strong></td>
        <td>Price: <strong>${item.price} kr</strong></td>
      </tr>
      <tr class="cart-number-of-units">
        <td><button onclick="changeNumberOfUnits('minus', ${item.id}, ${item.size})">-</button></td>
        <td class="number">${item.numberOfUnits}</td>
        <td><button onclick="changeNumberOfUnits('plus', ${item.id}, ${item.size})">+</button></td>
      </tr>
      <tr onclick="removeItem(${item.id}, ${item.size})" class="remove">
        <td><i class="fas fa-trash-alt"></i></td>
      </tr>
    </tbody>
    `;

    const cartHeaderTitle = document.querySelector(".cart-header-title");
    cartHeaderTitle.innerHTML = `
    <tr>
      <th>List of products in cart:</th>
    </tr>
    `;
  });
}

/* updating cart */
function updateCart() {
  renderProductInCart();
  renderSubtotal();
}

/* function changeNumberOfUnits */
function changeNumberOfUnits(action, id, size) {
  size = size.id;

  cart.forEach(item => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id && item.size === size) {
      if (action === 'plus' && numberOfUnits < item.inStock) {
        item.numberOfUnits++
      }

      if (action === 'minus' && numberOfUnits > 1) {
        item.numberOfUnits--;
      }
      updateCart();
    }

    return {
      ...item,
      numberOfUnits,
      size
    }
  });

  localStorage.setItem("CART", JSON.stringify(cart));
}

function removeItem(id, size) {

  cart = cart.filter(item => {
    if (item.size !== size.id) {
      return item.size !== size.id;
    }

    if (item.id !== id) {
      return item.id !== id;
    }

  });

  updateCart();
  localStorage.setItem("CART", JSON.stringify(cart));
}

/* subtotal container */
const subtotal = document.querySelector(".subtotal");

/* cart container in nav */
const cartContainer = document.querySelectorAll('.shopping-cart');

/* calculate subtotal */
const renderSubtotal = () => {

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

  for (let item of cartContainer) {
    item.innerHTML += `<div class="item-quantity">${totalItems}</div>`;
  }

  localStorage.setItem("TOTAL_ITEMS", JSON.stringify(totalItems));
}

if (document.querySelector('title').innerText === 'Rainy Days | Jacket Details' || document.querySelector('title').innerText === 'Rainy Days | Cart') {
  updateCart();
}



/* in case */
{/* <label for="xs">${product.size[0]}
      <input id="${product.size[0]}" class="item__size-button" name="item__size-button" value="size-xs" type="radio">
    </label>
    <label for="s">${product.size[1]}
        <input id="${product.size[1]}" class="item__size-button" name="item__size-button" value="size-s" type="radio">
    </label>
    <label for="m">${product.size[2]}
        <input id="${product.size[2]}" class="item__size-button" name="item__size-button" value="size-m" type="radio">
    </label>
    <label for="l">${product.size[3]}
        <input id="${product.size[3]}" class="item__size-button" name="item__size-button" value="size-l" type="radio">
    </label>
    <label for="xl">${product.size[4]}
        <input id="${product.size[4]}" class="item__size-button" name="item__size-button" value="size-xl" type="radio">
    </label> */}





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









