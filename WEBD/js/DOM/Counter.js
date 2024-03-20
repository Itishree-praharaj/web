let product1 = {
  pid: "H101",
  img: "../heinken.jpeg",
  pname: "Heinken",
  price: 180,
  msg: "Happy Hours",
  qty: 1,
};
let product2 = {
  pid: "K102",
  img: "../kingfisher.jpeg",
  pname: "Kingfisher",
  price: 180,
  msg: "Happy Hours",
  qty: 1,
};
let product3 = {
  pid: "M103",
  img: "../maharani.png",
  pname: "Maharani",
  price: 180,
  msg: "Happy Hours",
  qty: 1,
};
let product4 = {
  pid: "B104",
  img: "../budweiser.jpg",
  pname: "Budweiser",
  price: 180,
  msg: "Happy Hours",
  qty: 1,
};
let div = document.getElementById("prod");
let product = [product1, product2, product3, product4];
console.log(product);
let first = document.getElementById("p1");
product.forEach((element) => {
  let totalprice = element.qty * element.price;
  let displ = ``;
  displ +=` <div class="row border mb-2" id="1">
  <div class="col-4">
      <img src="${element.img}" height="300px">
  </div>
  <div class="col-8 mt-2">
      <p class="bg-primary">Brand:- <span id="brand-name1">${element.pname}</span></p>
      <p class="bg-secondary-subtle">Price:- <span id="brand-price1">${element.price}</span></p>
      <p class="bg-gradient">Msg:- <span id="msg1">${element.msg}</span></p>
      <p>gty:- <i class="fa-solid fa-circle-minus" onclick="dec('${element.pid}')"></i><span id="${element.pid}">${element.qty}</span><i
              class="fa-solid fa-circle-plus" onclick="inc('${element.pid}')"></i></p>
      <p>Total Price : <span id="total${element.pid}">${totalprice}</span></p>
  </div>
  </div>
  </div>`;
  div.innerHTML += displ;
});
function inc(id) {
  product.forEach((element) => {
    let spanTag = document.getElementById(id);
    let totalTag = document.getElementById("total" + id);
    if (element.pid === id) {
      element.qty = ++element.qty;
      spanTag.innerText = element.qty;
      totalprice = element.qty * element.price;
      totalTag.innerText = totalprice;
    }
  });
}
function dec(id) {
  product.forEach((element) => {
    let spanTag = document.getElementById(id);
    let totalTag = document.getElementById("total" + id);
    if (element.pid === id) {
      if (element.qty > 1) {
        element.qty = --element.qty;
        spanTag.innerText = element.qty;
        totalprice = element.price * element.qty;
        totalTag.innerText = totalprice;
      }
    }
  });
}
