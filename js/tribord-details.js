/* change button text add to cart/remove from cart  */
let flag = false;

const addToCartButton = document.querySelector('#add-to-cart');
const cartContainer = document.querySelector('.shopping-cart');
const sizeXs = document.querySelector('.size-active');

addToCartButton.innerHTML += `Remove item`;
cartContainer.innerHTML += `<div class="item-quantity">${1}</div>`;
cartContainer.classList.add('item-in-cart');

let itemQuantity = document.querySelector('.item-quantity');

addToCartButton.addEventListener('click', () => {
  flag = !flag;
  let itemQuantity = document.querySelector('.item-quantity');
  if (flag) {
    addToCartButton.innerHTML = `Add Item`;
    itemQuantity.remove();
    cartContainer.classList.remove('item-in-cart');
    sizeXs.style.backgroundColor = "var(--secondary-color)";
  }
  if (!flag) {
    addToCartButton.innerHTML = `Remove Item`;
    cartContainer.innerHTML += `<div class="item-quantity">${1}</div>`;
    cartContainer.classList.add('item-in-cart');
    sizeXs.style.backgroundColor = "var(--tertiary-color)";
  }
});

/* location to empty basket */
const cartIcon = document.querySelector('.shopping-cart');

cartIcon.addEventListener('click', () => {
  if (addToCartButton.innerHTML = `Remove item`) {
    location.href = '../layout/cart.html';
  }
  if (addToCartButton.innerHTML = `Add item`) {
    location.href = '../layout/empty-cart.html';
  }

});