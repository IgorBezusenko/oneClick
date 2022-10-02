const connection__city = document.querySelector(".connection__city");
const connection__city_modalShow = document.querySelector(
  ".connection__city-modalShow"
);
const connection__city_bg_modal = document.querySelector(
  ".connection__city-bg-modal"
);
const burger = document.querySelector(".icon-menu");
const menu__body_burger = document.querySelector(".menu__body_burger");

const modalCityShow = () => {
  connection__city.classList.add("active");
  connection__city_bg_modal.classList.add("active");
  document.body.style.overflow = "hidden";
};
const checkMenuCase = (element) => {
  switch (element) {
    case "ul":
    case "li":
    case "a":
    case "label":
    case "input": {
      console.log("something do");
      break;
    }

    default: {
      connection__city.classList.remove("active");
      connection__city_bg_modal.classList.remove("active");
      document.body.style.overflow = "auto";
      break;
    }
  }
};
const modalCityClose = (e) => {
  checkMenuCase(e.target.tagName.toLowerCase());
};

connection__city_modalShow.addEventListener("click", modalCityShow);
connection__city_bg_modal.addEventListener("click", modalCityClose);

const showBurgerMenu = () => {
  burger.classList.add("active");
  menu__body_burger.classList.add("active");
  document.getElementById("mySidenav").style.width = "100%";
  document.body.style.overflow = "hidden";
};
const closeBurgerMenu = (e) => {
  burger.classList.remove("active");
  menu__body_burger.classList.remove("active");
  document.getElementById("mySidenav").style.width = 0;
  document.body.style.overflow = "auto";
};

const showBurgerIpoteca = () => {
  document.getElementById("mySidenavIpoteca").style.width = "100%";
};
const closeBurgerIpoteca = (e) => {
  document.getElementById("mySidenavIpoteca").style.width = 0;
};
const showBurgerService = () => {
  document.getElementById("mySidenavService").style.width = "100%";
};
const closeBurgerService = (e) => {
  document.getElementById("mySidenavService").style.width = 0;
};

const showModalIpoteca = () => {
  document.getElementById("modalIpoteca").style.marginTop = 0;
  document.body.style.overflow = "hidden";
};
const closeModalIpoteca = (e) => {
  document.getElementById("modalIpoteca").style.marginTop = "-100%";
  document.body.style.overflow = "auto";
};

const showModalService = () => {
  document.getElementById("modalService").style.marginTop = 0;
  document.body.style.overflow = "hidden";
};
const closeModalService = (e) => {
  document.getElementById("modalService").style.marginTop = "-100%";
  document.body.style.overflow = "auto";
};
