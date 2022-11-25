/* CART */
setTimeout(() => createCart(), 1500);

let cart = JSON.parse(localStorage.getItem("CART")) || [];

const loaderWrapper = document.querySelector(".loader-wrapper");

function createCart() {
  async function getProduct(url) {
    // data from REST API
    const response = await fetch(url);
    const product = await response.json();

    if (document.querySelector('title').innerText === 'Rainy Days | Cart') {
      loaderWrapper.style.display = "none";
    }

    // size of item
    const sizeOfItem = document.querySelectorAll(".item__size-button");
    const itemProductSize = document.querySelector(".item__product-size");
    let size;

    function generateSizeItem() {

      sizeOfItem.forEach(item => {
        item.addEventListener('click', () => {
          size = item.id;
          if (itemProductSize.classList.contains("failure")) {
            itemProductSize.classList.remove("failure");
          }
          return size;
        });
      });
    }
    generateSizeItem();

    // function buttonAddItemHandler()
    const buttonAddItem = document.querySelector("#add-to-cart");

    function buttonAddItemHandler() {
      if (size === undefined) {
        console.log("size", size);
        itemProductSize.classList.add("failure");
        alert("Choose size!");
        return null;
      }
      console.log(cart);
      if (cart.some(item => item.id === product.id && item.size === size)) {
        changeNumberOfUnits('plus', product.id, size);
      }

      else {
        cart.push({
          ...product,
          productId: product.id,
          numberOfUnits: 1,
          size
        });
        updateCart();
      }
      localStorage.setItem("CART", JSON.stringify(cart));
    }

    if (document.querySelector('title').innerText === 'Rainy Days | Jacket Details') {
      buttonAddItem.addEventListener('click', buttonAddItemHandler);
    }


    /* Rendering product(s) in cart */
    const productsInCart = document.querySelector(".list-of-products");

    function renderProductInCart() {
      productsInCart.innerHTML = "";
      cart.forEach((item, index) => {
        let productLink = `<a href="./jacket-details.html?id=${item.id}" id="${item.id}" title="${item.name}">${item.name}</a>`;

        item.images.forEach(img => {
          const itemImg = img.src;
          const itemPrice = item.prices.price;

          productsInCart.innerHTML += `
          <thead class="cart-header-title">
          </thead>
          <tbody>
          <tr class="cart-order">
            <td>${++index}</td>
          </tr>
          <tr class="cart-product-details" onclick="location.href='../layout/jacket-details.html?id=${item.id}'">
            <td><img src="${itemImg}" alt="${item.name}"></td>
            <td>Product: <strong>${productLink}</strong></td>
            <td>Size: <strong><a class="size">${item.size}</a></strong></td>
            <td>Price: <strong>${itemPrice} kr</strong></td>
          </tr>
          <tr class="cart-number-of-units">
            <td><button id="reduce" data-id=${item.id} data-size=${item.size}>-</button></td>
            <td class="number">${item.numberOfUnits}</td>
            <td><button id="increase" data-id=${item.id} data-size=${item.size}>+</button></td>
          </tr>
          <tr class="remove" id="delete" data-id=${item.id} data-size=${item.size}>
            <td><button><i class="fas fa-trash-alt"></i></button></td>
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
      });
    }

    /* changeNumberOfUnitsButtons() */
    function changeNumberOfUnitsButtons() {
      const reduceButtons = document.querySelectorAll("#reduce");
      const increaseButtons = document.querySelectorAll("#increase");

      reduceButtons.forEach(singleButton => {
        singleButton.addEventListener('click', () => {
          const id = singleButton.getAttribute("data-id");
          const size = singleButton.getAttribute("data-size");
          changeNumberOfUnits('minus', id, size);
        })
      });

      increaseButtons.forEach(singleButton => {
        singleButton.addEventListener('click', () => {
          const id = singleButton.getAttribute("data-id");
          const size = singleButton.getAttribute("data-size");
          changeNumberOfUnits('plus', id, size);
        })
      })
    }

    function removeButtons() {
      const removeButtons = document.querySelectorAll("#delete");
      removeButtons.forEach(singleButton => {
        singleButton.addEventListener('click', () => {
          const id = singleButton.getAttribute("data-id");
          const size = singleButton.getAttribute("data-size");
          removeItem(id, size);
        });
      });
    }

    /* updating cart */
    function updateCart() {
      renderProductInCart();
      changeNumberOfUnitsButtons();
      renderSubtotal();
      removeButtons();
    }

    /* function changeNumberOfUnits */
    function changeNumberOfUnits(action, id, size) {

      cart.forEach(item => {
        let numberOfUnits = item.numberOfUnits;
        let stockQuantity = 10;

        if (item.id == id && item.size === size) {
          if (action === 'plus' && numberOfUnits < stockQuantity) {
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

    /* removeItem() */
    function removeItem(id, size) {
      cart = cart.filter(item => {

        if (item.size !== size) {
          return item.size !== size;
        }

        if (item.id != id) {
          return item.id != id;
        }
      });

      updateCart();
      localStorage.setItem("CART", JSON.stringify(cart));
    }

    if (document.querySelector('title').innerText === 'Rainy Days | Jacket Details' || document.querySelector('title').innerText === 'Rainy Days | Cart') {
      updateCart();
    }
  }
  getProduct(detailUrl);
}

/* subtotal container */
const subtotal = document.querySelector(".subtotal");

/* cart container in nav */
const cartContainer = document.querySelectorAll('.shopping-cart');

/* calculate subtotal */
function renderSubtotal() {

  let totalPrice = 0;
  let totalItems = 0;

  cart.forEach(item => {
    totalPrice += item.prices.price * item.numberOfUnits;
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