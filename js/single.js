let params = new URLSearchParams(document.location.search);
let urlname = params.get("id");
let header__count = document.querySelectorAll(".header__count");
let header__firstBox_cartIcon = document.querySelector(
  ".header__firstBox_cartIcon"
);
let header__firstBox_totalPrice = document.querySelector(
  ".header__firstBox_totalPrice"
);
let about__first_navBox_light = document.querySelector(
  ".about__first_navBox_light"
);
const single_box = document.querySelector(".single_box");

let mainData;
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

const rendData = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    mainData = [...data];
    return data;
    return data;
  } catch (error) {}
};

const product = async () => {
  let product = await rendData();
  let data = product.find((item) => item.id == urlname);
  single_box.innerHTML = `
  <div>
  <img src="${data.image}">
  </div>
  <div class="single__contentBox">
  <h3>${data.title}</h3>
  <p>${data.description}</p>
  <strong>$${data.price}</strong>
  <button class="button" data-id=${data.id}>
  <svg data-id=${data.id} width="40" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.22974 21.7395C9.5404 21.7395 9.79224 21.4877 9.79224 21.177C9.79224 20.8663 9.5404 20.6145 9.22974 20.6145C8.91908 20.6145 8.66724 20.8663 8.66724 21.177C8.66724 21.4877 8.91908 21.7395 9.22974 21.7395Z" fill="#22262A" stroke="#22262A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1047 21.7395C17.4154 21.7395 17.6672 21.4877 17.6672 21.177C17.6672 20.8663 17.4154 20.6145 17.1047 20.6145C16.7941 20.6145 16.5422 20.8663 16.5422 21.177C16.5422 21.4877 16.7941 21.7395 17.1047 21.7395Z" fill="#22262A" stroke="#22262A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.04224 3.7395H5.29224L7.54224 17.2395H18.7922L21.0422 7.1145H6.41724" stroke="#22262A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </button>
  </div>
  `;
};
product();

single_box.addEventListener("click", (e) => {
  let id = e.target.dataset.id;
  let localProduct = JSON.parse(localStorage.getItem("product"));
  let product = mainData.find((item) => item.id == id);
  let find = localProduct?.find((item) => {
    item.id == id ? id : false;
  });
  if (!find) {
    let newData;
    if (localProduct) {
       newData = [...localProduct, product];
    } else if(!localProduct) {
       newData = [ product];
    }
    console.log(newData);
    localStorage.setItem("product", JSON.stringify(newData));
  }
  else{
    localStorage.setItem("product", JSON.stringify(localProduct));
  }
  rendCount();
});
