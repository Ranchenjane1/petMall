
var appendNumber = 9;
var prependNumber = 1;
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 7,
//   centeredSlides: true,
//   spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
