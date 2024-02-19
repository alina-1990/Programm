$(function () {
  $('.top__slider').slick({
    dots: true,
    slidesShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrows slick-prev"><img src="images/prev.svg" alt="prev"/></button>',
    nextArrow: '<button type="button" class="slick-arrows slick-next"><img src="images/next.svg" alt="next"/></button>',
    responsive: [
      {
        breakpoint: 475,
        settings: {
        }
      },
    ]
  });
  $('.new__slider').slick({
    dots: true,
    slidesShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrows slick-prev"><img src="images/prev.svg" alt="prev"/></button>',
    nextArrow: '<button type="button" class="slick-arrows slick-next"><img src="images/next.svg" alt="next"/></button>',
    responsive: [
      {
        breakpoint: 475,
        settings: {
        }
      },
    ]
  });
});






//burger это
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const header = document.querySelector('.header');
const all = document.querySelector('.validation');


mobileNavButton.addEventListener('click', function () {
  header.classList.toggle('bg');
  mobileNavIcon.classList.toggle('active');
  mobileNav.classList.toggle('active');
  header.classList.toggle('blue');
  all.classList.toggle('validation');
  all.classList.toggle('validation-one');

});













