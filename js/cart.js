let cart = JSON.parse(localStorage.getItem("CART")) || [];

function createCart() {

  async function getProducts(url) {
    // data from REST API
    const response = await fetch(url);
    const products = await response.json();

    /* getting ID from url address in location to choose product */
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const productId = params.get("id");

    let product = products.find(({ id }) => id == productId);



    const productName = product.name; // productName
    const productPrice = product.prices.price;
    const productImg = product.images.map(img => img.src); // productImg
    const productType = product.categories.map(el => el.slug); // productType

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
          console.log(size);
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
          numberOfUnits: 1,
          size
        });
        updateCart();
      }
      localStorage.setItem("CART", JSON.stringify(cart));
    }
    buttonAddItem.addEventListener('click', buttonAddItemHandler);

    /* Rendering product(s) in cart */
    const productsInCart = document.querySelector(".list-of-products");

    function renderProductInCart() {
      console.log("cart in renderProductInCart", cart);
      productsInCart.innerHTML = "";
      cart.forEach((item, index) => {
        let productLink = `<a href="./jacket-details.html?id=${item.id}" id="${item.id}" title="${item.name}">${item.name}</a>`;

        const itemImg = item.images.map(img => img.src); // productImg
        const itemPrice = item.prices.price; // productPrice

        console.log(item.numberOfUnits);

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

        console.log(item.id);
        console.log(id);
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

    /* subtotal container */
    const subtotal = document.querySelector(".subtotal");

    /* cart container in nav */
    const cartContainer = document.querySelectorAll('.shopping-cart');

    /* calculate subtotal */
    const renderSubtotal = () => {

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

    if (document.querySelector('title').innerText === 'Rainy Days | Jacket Details' || document.querySelector('title').innerText === 'Rainy Days | Cart') {
      updateCart();
    }

  }
  getProducts(detailUrl);
}

console.log(cart);



