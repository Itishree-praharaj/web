let tbody = `
<tr>
    <td>
        <span id="pid"></span>
    </td>
    <td>
        <img src="https://www.uoiea.in/cdn/shop/products/1P2AnZLpp0mZhg21Wqs8gDkeofkhdquSV_d34bb928-e73b-4eeb-a75d-6f7ca0df1485_1024x.jpg?v=1657880907"
            alt="" width="50px" height="50px" id="image">
    </td>
    <td>
       <span id="name"></span>
    </td>
    <td>
    &#8377;<i id="price"></i>
    </td>
    <td>
        <i class="fa-solid fa-square-minus" onclick="dec()"></i><span id="quantity"></span><i class="fa-solid fa-square-plus" onclick="inc()"></i>
    </td>
    <td>
    &#8377;<i id="total"></i>
    </td>
</tr>
</tbody>`;

let product = {
  pid: "P101",
  img: "",
  name: "IWatch",
  price: 40000,
  quantity: 1,
};

let table = document.getElementById("tab");
table.innerHTML = tbody;
localStorage.setItem("pid", product.pid);
localStorage.setItem("pname", product.name);
localStorage.setItem("prate", product.price);
localStorage.setItem("quantity", product.quantity);
localStorage.setItem("totalprice", product.quantity * product.price);

let pquant = document.getElementById("quantity");
pquant.innerText = product.quantity;
let totp = document.getElementById("total");
totp.innerText = product.quantity * product.price;
let productName = document.getElementById("name");
productName.innerText = localStorage.getItem("pname");
let productId = document.getElementById("pid");
productId.innerText = localStorage.getItem("pid");
let productPrice = document.getElementById("price");
productPrice.innerText = localStorage.getItem("prate");
function inc() {
  localStorage.setItem("quantity", ++product.quantity);
  pquant.innerText = localStorage.getItem("quantity");
  localStorage.setItem("totalprice", product.quantity * product.price);
  totp.innerText = localStorage.getItem("totalprice");
}
function dec() {
  if (localStorage.getItem("quantity") > 1) {
    localStorage.setItem("quantity", --product.quantity);
    pquant.innerText = localStorage.getItem("quantity");
    localStorage.setItem("totalprice", product.quantity * product.price);
    totp.innerText = localStorage.getItem("totalprice");
  } else {
  }
}
