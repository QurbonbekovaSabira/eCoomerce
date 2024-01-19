const header__mobile_iconBox = document.querySelector(
  ".header__mobile_iconBox"
);
const header__firstBox_cartIcon = document.querySelector(
  ".header__firstBox_cartIcon"
);
const header__firstBox_totalPrice = document.querySelector(
  ".header__firstBox_totalPrice"
);
const about__first_navBox_light = document.querySelector(
  ".about__first_navBox_light"
);
const header__count = document.querySelectorAll(".header__count");
const pay__contentBox = document.querySelector(".pay__contentBox");
let dataProduct;
const payTotalPrice=document.querySelector(".payTotalPrice");

const rendData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    dataProduct = await data;
    return data;
  } catch (error) {}
};
let price = 0;
const rendCount = () => {
  let count;
  let number = 0;
  if (localStorage.getItem("product")) {
    count = JSON.parse(localStorage.getItem("product"));
    let items = 0;
    console.log(number);
    if (count.length > 0) {
      for (let i of count) {
        if (i) {
          items += i.price;
        }
      }
      number = count.length;
      header__count.forEach((item) => (item.textContent = ""));
    } else if (count) {
      number = 1;
    }
    console.log(number);
    header__firstBox_cartIcon.innerHTML = `
      <img src="./img/icon/cart.svg" alt="cartIcon">
      <span class="header__count">${number}</span>
      `;
    header__firstBox_totalPrice.innerHTML = `
      <p class="header__countSubText"> Items</p>
      <p class="header__countText">$${items.toFixed(2)}</p>
      `;
    header__mobile_iconBox.innerHTML = `
      <a href="#"><img src="/img/icon/heart.svg" alt="heart Icon"></a>
      <a href="#" class="header__firstBox_cart"><img src="./img/icon/notification.svg" alt="notification">
          <span class="header__count">${number}</span>
      </a>
      `;
    if (about__first_navBox_light) {
      about__first_navBox_light.innerHTML = `
      <a href="./pay.html" class="about__first_navItem">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.1875 21C9.49816 21 9.75 20.7482 9.75 20.4375C9.75 20.1268 9.49816 19.875 9.1875 19.875C8.87684 19.875 8.625 20.1268 8.625 20.4375C8.625 20.7482 8.87684 21 9.1875 21Z" fill="#9098B1" stroke="#9098B1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.0625 21C17.3732 21 17.625 20.7482 17.625 20.4375C17.625 20.1268 17.3732 19.875 17.0625 19.875C16.7518 19.875 16.5 20.1268 16.5 20.4375C16.5 20.7482 16.7518 21 17.0625 21Z" fill="#9098B1" stroke="#9098B1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 3H5.25L7.5 16.5H18.75L21 6.375H6.375" stroke="#9098B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> 
          <span class="about__first_navBox_light_count">${number}</span>
      <p class="about__first_nav">Cart</p>
  </a>
      `;
    }
  }
  if (number == 1 || number == 0) {
    header__firstBox_cartIcon.innerHTML = `
    <img src="./img/icon/cart.svg" alt="cartIcon">
    <span class="header__count">${number}</span>
    `;
    header__firstBox_totalPrice.innerHTML = `
    <p class="header__countSubText"> Items</p>
    <p class="header__countText">$0</p>
    `;

    header__mobile_iconBox.innerHTML = `
    <a href="#"><img src="/img/icon/heart.svg" alt="heart Icon"></a>
    <a href="#" class="header__firstBox_cart"><img src="./img/icon/notification.svg" alt="notification">
        <span class="header__count">${number}</span>
    </a>
    `;
    if (about__first_navBox_light) {
      about__first_navBox_light.innerHTML = `
      <a href="./pay.html" class="about__first_navItem">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.1875 21C9.49816 21 9.75 20.7482 9.75 20.4375C9.75 20.1268 9.49816 19.875 9.1875 19.875C8.87684 19.875 8.625 20.1268 8.625 20.4375C8.625 20.7482 8.87684 21 9.1875 21Z" fill="#9098B1" stroke="#9098B1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17.0625 21C17.3732 21 17.625 20.7482 17.625 20.4375C17.625 20.1268 17.3732 19.875 17.0625 19.875C16.7518 19.875 16.5 20.1268 16.5 20.4375C16.5 20.7482 16.7518 21 17.0625 21Z" fill="#9098B1" stroke="#9098B1" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 3H5.25L7.5 16.5H18.75L21 6.375H6.375" stroke="#9098B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg> 
          <span class="about__first_navBox_light_count">0</span>
      <p class="about__first_nav">Cart</p>
  </a>
      `;
    }
  }
};
rendCount();
let n = 1;

const rendProduct = async () => {
  try {
    if (localStorage.getItem("product")) {
      let data = JSON.parse(localStorage.getItem("product"));
      console.log(data);
      if (data.length > 0) {
        pay__contentBox.innerHTML = data
          ?.map(
            (item) => `
          <span></span>
   <div class="pay__contentBox_item">
   <div class="pay__congtent_main">
   <button class="pay__deleteBtn" id="${item.id}" data-delete="${
              item.id
            }"></button>
 <div class="pay__img">
 <img src="${item.image}">
 </div>
 <p class="pay__title">${item.title}</p>
   </div>
   <div>
   <p class="pay__total_price">$ ${item.price}</p>
   </div>
   <div class="pay__btn_box">
   <button class="pay__decBtn" data-dec="${item.id}"></button>
   <p class="pay__count_text">${item.newCount ? item.newCount : 1}</p>
   <button class="pay__incBtn" data-inc="${item.id}"></button>
   </div>
   <div>
   <p class="pay__price">$ ${item.price}</p>
   </div>
   </div>
      `
          )
          .join("");
      }
    } else {
      pay__contentBox.innerHTML = "";
    }
  } catch (error) {}
};
rendProduct();

const Rendprice =()=>{
  let ship=20;
  let data =[]
if(localStorage.getItem("product")){
 data = [...JSON.parse(localStorage.getItem("product"))];
}
console.log(data);
let totalPrice=0;
for(let i of data){
  totalPrice+=i.price;
}
  payTotalPrice.innerHTML=`
 <div><p>Subtotal</p> <p>$${totalPrice}</p></div>
 <div><p>Shipping fee</p><p>$${ship}</p></div>
<div><strong>TOTAL</strong> <strong>$${totalPrice+ ship}</strong></div>
<button>Check out</button>
  `
}
Rendprice()

pay__contentBox.addEventListener("click", (e) => {
  let id = e.target.id;
  let dec = e.target.dataset.dec;
  let inc = e.target.inc;
  const pay__count_text = document.querySelectorAll(".pay__count_text");
  console.log(JSON.parse(localStorage.getItem("product")));
  let data = JSON.parse(localStorage.getItem("product"));
  if (id && data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data.splice(i, 1);
      }
    }
    console.log(data);
    localStorage.setItem("product", JSON.stringify(data));
  }
  if (data.length == 0) {
    JSON.stringify(localStorage.clear("product"));
  }
  if (dec) {
    n++;
    console.log(n);
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == dec) {
        for (let j = 0; j < pay__count_text.length; j++) {
          if (i == j) {
            console.log(pay__count_text[i]);
            console.log(data[i]);
            data[i].newCount = n;
            rendProduct();
            localStorage.setItem("product", JSON.stringify(data));
          } else {
            console.log(pay__count_text[j]);
          }
        }
      }
    }
  }
  rendCount();
  rendProduct();
});
