const listOfProducts = document.querySelector(".list-of-products");

listOfProducts.innerHTML += `
<thead>
<tr>
  <th></th>
  <th>Product</th>
  <th>Size</th>
  <th>Price</th>
  <th>Amount</th>
  <th></th>
</tr>
</thead>
<tbody>
<tr>
  <td>1</td>
  <td><img src="../images/jackets/men-jackets/nh-100-raincut.png" alt="nh-100-raincut">
    <a href="/layout/tribord300MB.html">Tribord 300MB</a>
  </td>
  <td><a>XS</a></td>
  <td>999 nok</td>
  <td>1</td>
  <td><a href="/layout/empty-cart.html"><i class="fas fa-trash-alt"></i></a></td>
</tr>
</tbody>
<tfoot>
<tr>
  <td>Price total:</td>
  <td>999 nok</td>
  <td></td>
</tr>
</tfoot>
`

