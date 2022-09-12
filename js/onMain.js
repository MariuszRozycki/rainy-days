const onMainContainer = document.querySelector('.on-main');

// creating function renderProductsOnMain()
const renderProductsOnMain = () => {
  products.forEach(product => {
    if (product.onMain) {
      let productLink = `<a href="../layout/jacket-details.html?id=${product.id}" id=${product.id} title="${product.name}" class="btn btn__show-item">Show Item</a>`;

      onMainContainer.innerHTML += `
        <div class="item">
            <div class="item__picture">
            <img src="${product.image}" alt="Picture of ${product.name}">
          </div>
          <div>
            <h1 class="item__product-name">${product.name}</h1>
            <p class="item__product-price">${product.price} nok</p>
          ${productLink}
          </div>  
        </div>
      `;
    }
  });
}
renderProductsOnMain();

/* .products .item | displaying more items i section */
let buttonMoreItems = document.querySelector('.btn__more-items');
buttonMoreItems.innerHTML = 'more items'

/* .products .item .more-items | changing text of button 'MORE ITEMS' to 'LESS ITEMS' & add jacket  */
const mainItems = document.querySelectorAll('.item');
mainItems[0].classList.add('hide');
mainItems[4].classList.add('hide');

let flag = false;

buttonMoreItems.addEventListener('click', function () {
  flag = !flag;
  flag ? this.innerHTML = 'hide items' : this.innerHTML = 'more items';

  for (let item of mainItems) {
    item.classList.remove('hide');
  }

  if (!flag) {
    mainItems[0].classList.toggle('hide');
    mainItems[4].classList.toggle('hide');
  }
});
