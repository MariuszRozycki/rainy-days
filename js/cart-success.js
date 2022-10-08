const listOfProductsCheckOut = document.querySelector('.list-of-products');

cart.forEach((item, index) => {
  let productLink = `<a href="./jacket-details.html?id=${item.id}" id="${item.id}" title="${item.name}">${item.name}</a>`;

  listOfProductsCheckOut.innerHTML += `
  <tbody>
      <tr class="cart-order">
        <td>${++index}</td>
      </tr>
      <tr class="cart-product-details" onclick="location.href='../layout/jacket-details.html?id=${item.id}'">
        <td><img src="${item.image}" alt="${item.name}"></td>
        <td>Product: <strong>${productLink}</strong></td>
        <td>Size: <strong><a class="size">${item.size}</a></strong></td>
        <td>Price: <strong>${item.price} kr</strong></td>
      </tr>
    </tbody>
  `
});

renderSubtotal();