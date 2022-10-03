const connection__city = document.querySelector(".connection__city");
const connection__city_modalShow = document.querySelector(
    ".connection__city-modalShow"
);
const connection__city_bg_modal = document.querySelector(
    ".connection__city-bg-modal"
);
const connection__city__modalwrapper = document.querySelector(
    ".connection__city__modal-wrapper"
);
const burger = document.querySelector(".icon-menu");
const menu__body_burger = document.querySelector(".menu__body_burger");

const mySidenav = document.getElementById("mySidenav")
const mySidenavIpoteca = document.getElementById("mySidenavIpoteca")
const mySidenavService = document.getElementById("mySidenavService")
const modalIpoteca = document.getElementById("modalIpoteca")
const modalService = document.getElementById("modalService")

const auth_registration = document.getElementById("auth_registration")
const auth_login = document.getElementById("auth_login")

const overflowHidden = () => document.body.style.overflow = "hidden";
const overflowAuto = () => document.body.style.overflow = "auto";

const modalCityShow = () => {
    connection__city.classList.add("active");
    connection__city_bg_modal.classList.add("active");
    connection__city__modalwrapper.classList.add("active");
    overflowHidden()
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
            connection__city__modalwrapper.classList.remove("active");
            overflowAuto()
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
    mySidenav.style.width = "100%";
    overflowHidden()
};
const closeBurgerMenu = (e) => {
    burger.classList.remove("active");
    menu__body_burger.classList.remove("active");
    mySidenav.style.width = 0;
    overflowAuto()
};

const showBurgerIpoteca = () => {
    mySidenavIpoteca.style.width = "100%";
};
const closeBurgerIpoteca = (e) => {
    mySidenavIpoteca.style.width = 0;
};
const showBurgerService = () => {
    mySidenavService.style.width = "100%";
};
const closeBurgerService = (e) => {
    mySidenavService.style.width = 0;
};

const showModalIpoteca = () => {
    modalIpoteca.style.marginTop = "0";
    overflowHidden()
};
const closeModalIpoteca = (e) => {
    modalIpoteca.style.marginTop = "-100vh";
    overflowAuto()
};

const showModalService = () => {
    modalService.style.marginTop = 0;
    overflowHidden()
};
const closeModalService = (e) => {
    modalService.style.marginTop = "-100vh";
    overflowAuto()
};

//Auth
const showModalLogin = () => {
    auth_registration.style.marginTop = "-100vh";
    auth_login.style.marginTop = "0";
    overflowHidden()
};
const closeModalLogin = (e) => {
    auth_login.style.marginTop = "-100vh";
    overflowAuto()
};
const showModalRegistration = () => {
    auth_login.style.marginTop = "-100vh";
    auth_registration.style.marginTop = "0";
    overflowHidden()
};
const closeModalRegistration = (e) => {
    auth_registration.style.marginTop = "-100vh";
    overflowAuto()
};

//Filter

const showSearchModal = (modal, wrapper) => {
    document.querySelector("." + modal).classList.add("active")
    document.querySelector("." + wrapper).classList.add("active")
    overflowHidden()
}
const closeSearchModal = (modal, wrapper) => {
    document.querySelector("." + modal).classList.remove("active")
    document.querySelector("." + wrapper).classList.remove("active")
    overflowAuto()
}
