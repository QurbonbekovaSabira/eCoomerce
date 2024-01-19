const hero__item_h = document.querySelectorAll(".hero__item_h");
const hero__item_min = document.querySelectorAll(".hero__item_min");
const hero__item_sec = document.querySelectorAll(".hero__item_sec");
const url = "https://fakestoreapi.com/products";
const about__saleCart = document.querySelector(".about__saleCart");
const about__tab = document.querySelector(".about__tab");
const about__product = document.querySelector(".about__product");
const header__count = document.querySelectorAll(".header__count");
const header__firstBox_cartIcon = document.querySelector(
  ".header__firstBox_cartIcon"
);
const about__first_tab = document.querySelector(".about__first_tab");
const header__firstBox_totalPrice = document.querySelector(
  ".header__firstBox_totalPrice"
);
const flashSale = document.querySelector(".about__first_tab_flashSale");
const megaSale = document.querySelector(".about__first_tab_megaSale");
const about__first_navBox_light = document.querySelector(
  ".about__first_navBox_light"
);
const slider = document.querySelector(".slider");
if (slider) {
  $(".slider").slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });
}
let h = 8,
  min = 10,
  s = 59;
const hour = (min, h, s) => {
  hero__item_min.forEach((item) => (item.textContent = min));
  hero__item_h.forEach((item) => (item.textContent = h));
  hero__item_sec.forEach((item) => (item.textContent = s));
};

const intervalID = setInterval(myCallback, 1000, hour);
function myCallback(a, b) {
  if (h != 0) {
    if (s == 0) {
      min--;
      s = 60;
    }
    if (min == 0) {
      h--;
      min = 60;
    }
    s--;
    hour(min, h, s);
  }
}
let dataProduct;
const rendData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    dataProduct = await data;
    return data;
  } catch (error) {}
};

const rendCount = () => {
  let count;
  let number = 0;
  if (localStorage.getItem("product")) {
    console.log(localStorage.getItem("product"));
    if (localStorage.getItem("prudct") != "undefined") {
      count = JSON.parse(localStorage.getItem("product"));
    }
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

const rendSale = async () => {
  try {
    const data = await rendData();
    let products = data.filter((item) => item.price > 500);
    console.log(products);
    if (about__saleCart) {
      about__saleCart.innerHTML = products
        .map(
          (item) =>
            `
        <a href="./cart.html" class="about__saleCart_item">
        <p class="about__saleCart_item_title">${
          item.title.split("").length > 21
            ? item.title.slice(0, 21) + "..."
            : item.title
        }</p>
        <img src="${item.image}" alt="">
       <div class="about__saleCart_item_saleBox">
       <p class="about__saleCart_item_salePrice">${item.price}</p>
       <p class="about__saleCart_item_sale">24% Off</p>
       </div>
       <p class="about__saleCart_item_price">${(
         (item.price / 100) *
         74
       ).toFixed(2)}</p>
          </a>
        `
        )
        .join("");
    }
  } catch (error) {
    console.log(error);
  }
};
rendSale();

const rendTab_Product = async (name) => {
  try {
    const res = await fetch(`${url}/category/${name}`);
    const data = await res.json();
    const about__tabText = document.querySelectorAll(".about__tabText");
    about__tabText.forEach((item) => {
      if (item.id == name) {
        item.classList.remove("about__tabText--notActive");
        item.classList.add("about__tabText--active");
      }
      if (item.id != name) {
        item.classList.add("about__tabText--notActive");
        item.classList.remove("about__tabText--active");
      }
    });
    about__product.innerHTML = data
      .map(
        (item) => `
  <a class="about__product_item" href="http://127.0.0.1:5500/single.html?id=${
    item.id
  }" data-id="${item.id}">
  <div class="about__itemImg">
  <img  src="${item.image}">
  <div  class="about__itemHover" id="${name}" data-id="${item.id}">
  <img class="about__itemHover_img" id="${name}" data-id="${
          item.id
        }" src="./img/icon/cartCard.svg" alt="">
  </div>
  </div>
 <div class="about__item_content" data-id="${item.id}">
 <p class="about__item_text">${
   item.title.split("").length > 19
     ? item.title.slice(0, 16) + "..."
     : item.title
 }</p>
 <img src="./img/icon/star.svg" alt="">
 <div class="about__item_priceBox" data-id="${item.id}">
 <p class="about__item_salePrice" data-id="${item.id}">${(
          (item.price / 100) *
          76
        ).toFixed(2)}</p>
 <p class="about__item_price" data-id="${item.id}">${item.price}</p>
 <p class="about__item_sale">24% Off</p>
 </div>
 </div>
   </a>
  `
      )
      .join("");
  } catch (error) {}
};
rendTab_Product("electronics");
if (about__product) {
  about__product.addEventListener("click", (e) => {
    let id = e.target.dataset.id;
    let data;
    if (localStorage.getItem("product") && id) {
      let find;
      let local = JSON.parse(localStorage.getItem("product"));
      let findly = local.find((item) => (item.id == id ? item : false));
      find = data ? data.find((item) => item.id == id) : id;
      if (find == id && id && findly) {
        let product = dataProduct.find((item) => item.id == id);
        if (product) {
          if (local.length > 0 && product != null) {
            data = [...local, product];
            header__count.textContent = data.length;
          }
          if (!local) {
            console.log(local);
            data.push(product);
            header__count.textContent = 1;
          }
        }
      }

      localStorage.setItem("product", JSON.stringify(data));
      rendCount();
    } else if (id) {
      let id = e.target.dataset.id;
      let product = dataProduct.find((item) => item.id == id);
      console.log(product);
      localStorage.setItem("product", JSON.stringify([product]));
      header__count.textContent = 1;
    }
  });
}
if (about__tab) {
  about__tab.addEventListener("click", (e) => {
    e.preventDefault();
    let id = e.target.id;

    rendTab_Product(id);
    console.log(e.target.id);
  });
}
const rendTab = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    if (about__tab) {
      about__tab.innerHTML = data
        .map(
          (item) => `
    <a class="about__tabText about__tabText--notActive" href="#" id="${item}">
    ${item}
    </a>
    `
        )
        .join("");
    }
  } catch (error) {
    console.log(error);
  }
};
rendTab();

// mini tab

const rendTabMini = async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    about__first_tab.innerHTML = data
      .map(
        (item) => `
    <li class="about__first_tabBox"  data-id=${item}>
    <p class="about__first_tabIcon" data-id=${item}></p>
    <p class="about__first_tabText" data-id=${item}>${item}</p>
    </li>
    `
      )
      .join("");
  } catch (error) {}
};
rendTabMini();

const rendMiniTab_product = async (name) => {
  try {
    if (name == "men's") name = "men's clothing";
    if (name == "women's") name = "women's clothing";
    const res = await fetch(`${url}/category/${name}`);
    const data = await res.json();
    let flash = data.filter((item) => item.price < 100);
    let mega = data.filter((item) => item.price >= 100);
    flashSale.innerHTML = flash
      ?.map(
        (item) => `
        <a class="about__product_item_second" href="#" id="${item.category}">
        <div class=" about__itemImg_second">
        <img  src="${item.image}">
        <div  class="about__itemHover_second" id="${name}" data-id="${item.id}">
        <img class="about__itemHover_img_second" id="${name}" data-id="${
          item.id
        }" src="./img/icon/cartCard.svg" alt="">
        </div>
        </div>
        <div class="about__item_content_second">
        <p class="about__item_text_second">${
          item.title.split("").length > 19
            ? item.title.slice(0, 16) + "..."
            : item.title
        }</p>
        <img src="./img/icon/star.svg" alt="">
        <p class="about__item_salePrice_second">${(
          (item.price / 100) *
          76
        ).toFixed(2)}</p>
        <div class="about__item_priceBox_second">
        <p class="about__item_price_second">${item.price}</p>
        <p class="about__item_sale_second">24% Off</p>
        
        </div>
        </div>
        
         </a>
        `
      )
      .join("");
    megaSale.innerHTML = mega
      ?.map(
        (item) => `
            <a class="about__product_item_second" href="#" id="${item.id}">
            <div class=" about__itemImg_second">
            <img  src="${item.image}">
            <div  class="about__itemHover_second" id="${name}" data-id="${
          item.id
        }">
            <img class="about__itemHover_img_second" id="${name}" data-id="${
          item.id
        }" src="./img/icon/cartCard.svg" alt="">
        </div>
        </div>
        <div class="about__item_content_second id="${name}">
        <p class="about__item_text_second" id="${name}>${
          item.title.split("").length > 19
            ? item.title.slice(0, 16) + "..."
            : item.title
        }</p>
        <img src="./img/icon/star.svg" alt="">
        <p class="about__item_salePrice_second" id="${name}>${(
          (item.price / 100) *
          60
        ).toFixed(2)}</p>
        <div class="about__item_priceBox_second id="${name}">
        <p class="about__item_price_second">${item.price}</p>
        <p class="about__item_sale_second">40% Off</p>
    </div>
    </div>
 </a>
`
      )
      .join("");
  } catch (error) {}
};
rendMiniTab_product("electronics");
if (about__first_tab) {
  about__first_tab.addEventListener("click", (e) => {
    rendMiniTab_product(e.target.dataset.id);
  });
}
if (flashSale) {
  flashSale.addEventListener("click", (e) => {
    let id = e.target.dataset.id;
    let data;
    if (localStorage.getItem("product")) {
      let find;
      let local = JSON.parse(localStorage.getItem("product"));
      find = data ? data.find((item) => item.id == id) : id;
      if (find == id) {
        let product = dataProduct.find((item) => item.id == id);
        if (local.length > 0) {
          data = [...local, product];
        } else {
          data = [local, product];
        }
        console.log(data);
      }
      header__count.textContent = data.length;
      localStorage.setItem("product", JSON.stringify(data));
      rendCount();
    } else {
      let id = e.target.dataset.id;
      let product = dataProduct.find((item) => item.id == id);
      console.log(product);
      localStorage.setItem("product", JSON.stringify(product));
      header__count.textContent = 1;
    }
  });
}
if (megaSale) {
  megaSale.addEventListener("click", (e) => {
    console.log(e.target.id);
    let id = e.target.dataset.id;
    let find = arr ? arr.find((item) => item.id == id) : null;
    if (find == null) {
      let product = dataProduct.find((item) => item.id == id);
      arr.push(product);
    }
    header__count.textContent = arr.length;
    localStorage.setItem("product", JSON.stringify(arr));
    rendCount();
  });
}
let mainProduct;
const cart__box = document.querySelector(".cart__box");
const rendProduct_cart = async () => {
  try {
    const data = await rendData();
    mainProduct = [...data];
    cart__box.innerHTML = data
      .map(
        (item) => `
  <a class="about__product_item" href="http://127.0.0.1:5500/single.html?id=${
    item.id
  }" id="${item.category}">
  <div class="about__itemImg" data-id="${item.id}">
  <img  src="${item.image}" data-id="${item.id}">
  <div  class="about__itemHover" data-id="${item.id}" data-id="${item.id}">
  <img class="about__itemHover_img" id="${item.id}" data-id="${
          item.id
        }" src="./img/icon/cartCard.svg" alt="">
  </div>
  </div>
  <div class="about__item_content" data-id="${item.id}">
  <p class="about__item_text">${
    item.title.split("").length > 19
      ? item.title.slice(0, 16) + "..."
      : item.title
  }</p>
  <img src="./img/icon/star.svg" alt="" data-id="${item.id}">
  <div class="about__item_priceBox" data-id="${item.id}">
  <p class="about__item_salePrice" data-id="${item.id}">${(
          (item.price / 100) *
          76
        ).toFixed(2)}</p>
  <p class="about__item_price" data-id="${item.id}">${item.price}</p>
  <p class="about__item_sale" data-id="${item.id}">24% Off</p>
  </div>
  </div>
   </a>
  `
      )
      .join("");
  } catch (error) {}
};

rendProduct_cart();
if (cart__box) {
  cart__box.addEventListener("click", (e) => {
    console.log(e.target.dataset.id);
    let id = e.target.dataset.id;
    let product = JSON.parse(localStorage.getItem("product"));
    console.log(product);
    let arr2 = [];
    if (product) {
      arr2 = [...product];
    }
    let data;
    if (id != null) {
      data = dataProduct.find((item) => item.id == id);
      console.log(data);
    }
    if (product && id) {
      let find = product.find((item) => (item.id == id ? id : null));
      if (find == null) {
        arr2.push(data);
        console.log(arr2);
        localStorage.setItem("product", JSON.stringify(arr2));
      }
    }
    if (!product) {
      arr2.push(data);
      localStorage.setItem("product", JSON.stringify(arr2));
    }
    rendCount();
  });
}
const about__input = document.querySelector(".about__input");
const search = document.querySelector(".search");
const rendSearch = async (text) => {
  console.log(text);
  console.log(mainProduct);
  let newData = [...mainProduct];
  let product = newData.filter((item) => {
    item.title.toLowerCase().includes(text.toLowerCase());
  });
  console.log(product);
};

about__input.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  rendSearch(e.target.value);
});
