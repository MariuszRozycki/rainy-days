const listOfProductsCheckOut = document.querySelector('.list-of-products');

cart.forEach((item, index) => {
  let productLink = `<a href="./jacket-details.html?id=${item.id}" id="${item.id}" title="${item.name}">${item.name}</a>`;

  const productName = item.name;
  const productPrice = item.prices.price;
  const productImg = item.images.map(img => img.src);
  const productSize = item.size;
  const productId = item.id;

  listOfProductsCheckOut.innerHTML += `
  <tbody>
      <tr class="cart-order">
        <td>${++index}</td>
      </tr>
      <tr class="cart-product-details" onclick="location.href='../layout/jacket-details.html?id=${productId}'">
        <td><img src="${productImg}" alt="${productName}"></td>
        <td>Product: <strong>${productLink}</strong></td>
        <td>Size: <strong><a class="size">${productSize}</a></strong></td>
        <td>Price: <strong>${productPrice} kr</strong></td>
      </tr>
    </tbody>
  `
});

renderSubtotal();

