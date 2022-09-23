$(document).ready(function () {
  $(".category__slider").slick({
    prevArrow: `<button type="button" class="slick-prev"></button>`,
    nextArrow: `<button type="button" class="slick-next"></button>`,
    dots: true,
    dotsClass: "slick-dots category-slick-dots",
    adaptiveHeight: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1312,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 636,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  $(".newProducts__slider").slick({
    prevArrow: `<button type="button" class="slick-prev"></button>`,
    nextArrow: `<button type="button" class="slick-next"></button>`,
    dots: true,
    dotsClass: "slick-dots newProducts-slick-dots",
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1312,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 636,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".product-slider-big").slick({
    prevArrow: `<button type="button" class="slick-prev"></button>`,
    nextArrow: `<button type="button" class="slick-next"></button>`,

    speed: 700,
    // fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".product-slider-min",
    // centerMode: true,
  });

  $(".product-slider-min").slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".product-slider-big",
    infinite: true,
    // dots: true,
    // centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
  });

  $(".news__slider").slick({
    arrows: true,
    prevArrow: `<button type="button" class="slick-prev"></button>`,
    nextArrow: `<button type="button" class="slick-next"></button>`,
    // dots: true,
    // dotsClass: "slick-dots category-slick-dots",
    // adaptiveHeight: true,
    variableWidth: true,
    infinite: false,
    // slidesToShow: 6,
    // slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          // slidesToShow: 1,
          // slidesToScroll: 1,
        },
      },
    ],
  });

  $(".news__list").slick({
    arrows: false,
    // dots: true,
    dotsClass: "slick-dots category-slick-dots",
    // adaptiveHeight: true,
    variableWidth: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    // swipe: true,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
});
// $('#button-rotation').on("click", "div", function(e) {
//   $('.slider-for').slick('slickGoTo', $(this).index() + s1);
// });
