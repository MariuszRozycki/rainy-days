const onMainContainer = document.querySelector('.on-main');
console.log(onMainContainer);

for (let product of products) {
  if (product.onMain) {
    let productLink = `<a href="../layout/jacket-details.html?id=${product.id}" id=${product.id} title="${product.name}" class="btn btn__show-item">Show Item</a>`;

    onMainContainer.innerHTML +=
      `<div class="item">
          <div class="item__picture">
          <img src="${product.image}" alt="Picture of ${product.name}">
        </div>
        <div>
          <h3 class="item__product-name">${product.name}</h3>
          <p class="item__product-price">${product.price} nok</p>
        ${productLink}
        </div>  
      </div>`
  }
};
