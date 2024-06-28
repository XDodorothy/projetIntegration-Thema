/* eslint-disable no-undef */
import $ from 'jquery';


/*---------caroussel movie--------*/
export const initCarousel = () => {
  $(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
};

/*----------year-----------*/
export const updateYear = () => {
  let yearElement = document.querySelector("#year");
  if (yearElement) {
    yearElement.innerText = new Date().getFullYear();
  }
};

/*--------navbar----------*/
export const initNavbarScroll = () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
};

/*---Read more-----*/
export const initReadMore = () => {
  $('.read-more-link').click(function (e) {
    e.preventDefault();
    $('.additional-text').slideToggle();
    $(this).text(function (i, text) {
      return text === "Read less" ? "Read more ..." : "Read less";
    });
  });
};

/*-----caroussel actors--------*/
const carousel = document.getElementById('carousel');
const willLeftLessThan40pxToScrollEnd = (nextStep) => {
  const scrollLeftAfterTwoClicks = carousel.scrollLeft + (nextStep * 2);
  return scrollLeftAfterTwoClicks > carousel.scrollWidth - 40;
};
const willLeftLessThan40pxToScrollStart = (nextStep) => {
  const scrollLeftAfterOneClick = carousel.scrollLeft - nextStep;
  return scrollLeftAfterOneClick < 40;
};
export const handleClickGoAhead = () => {
  let nextStep = carousel.offsetWidth;
  if (willLeftLessThan40pxToScrollEnd(nextStep)) nextStep *= 2;

  carousel.scroll({
    left: carousel.scrollLeft + nextStep,
    behavior: "smooth"
  });
};
export const handleClickGoBack = () => {
  let nextStep = carousel.offsetWidth;
  if (willLeftLessThan40pxToScrollStart(nextStep)) nextStep *= 2;

  carousel.scroll({
    left: carousel.scrollLeft - nextStep,
    behavior: "smooth"
  });
};