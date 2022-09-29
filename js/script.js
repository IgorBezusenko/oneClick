const connection__city = document.querySelector(".connection__city");
const connection__city_modalShow = document.querySelector(".connection__city-modalShow");
const connection__city_bg_modal = document.querySelector(".connection__city-bg-modal");
const burger = document.querySelector(".icon-menu");
const menu__body_burger = document.querySelector(".menu__body_burger");
// const sidebar = document.querySelector(".sidebar");
// const listNav = document.querySelectorAll(".list__nav");
// const listIcon = document.querySelectorAll(".list__icon");
// const logo = document.querySelector(".logo");
// const list = document.querySelector(".list");
// const logoText = document.querySelector(".logo__text");

const modalCityShow = () => {
    connection__city.classList.add("active");
    connection__city_bg_modal.classList.add("active");
    document.body.style.overflow = 'hidden';
};
const checkMenuCase = (element) => {
    switch (element) {
        case 'ul':
        case 'li':
        case 'a':
        case 'label':
        case 'input': {
            console.log('something do')
            break;
        }

        default: {
            connection__city.classList.remove("active");
            connection__city_bg_modal.classList.remove("active");
            document.body.style.overflow = 'auto';
            break;
        }
    }
}
const modalCityClose = (e) => {
    checkMenuCase(e.target.tagName.toLowerCase());
};

connection__city_modalShow.addEventListener("click", modalCityShow);
connection__city_bg_modal.addEventListener("click", modalCityClose);

const showBurgerMenu = ()=>{
    burger.classList.add("active");
    menu__body_burger.classList.add("active");
    document.body.style.overflow = 'hidden';
}
const closeBurgerMenu = ()=>{
    burger.classList.remove("active");
    document.body.style.overflow = "auto";
}

burger.addEventListener("click",showBurgerMenu)