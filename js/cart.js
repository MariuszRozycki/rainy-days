/* Add product to cart */
function addToCart() {
  console.log(size);
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
