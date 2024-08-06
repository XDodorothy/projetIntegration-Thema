
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';


// Désactiver les avertissements ESLint pour $
/* eslint-disable no-undef */


// Caroussel movie
export const initCarousel = () => {
  $('.custom-carousel').owlCarousel({
    autoWidth: true,
    loop: true,
  });

  $('.custom-carousel .item').click(function () {
    $('.custom-carousel .item').not($(this)).removeClass('active');
    $(this).toggleClass('active');
  });
};

// Year update
export const updateYear = () => {
  let yearElement = document.querySelector('#year');
  if (yearElement) {
    yearElement.innerText = new Date().getFullYear();
  }
};

// Navbar scroll
export const initNavbarScroll = () => {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    if (navbar && window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else if (navbar) {
      navbar.classList.remove('scrolled');
    }
  });
};

// Read more toggle
export const initReadMore = () => {
  $('.read-more-link').click(function (e) {
    e.preventDefault();
    $('.additional-text').slideToggle();
    $(this).text(function (i, text) {
      return text === 'Read less' ? 'Read more ...' : 'Read less';
    });
  });
};

// Caroussel actors
export const handleClickGoAhead = () => {
  const carousel = document.getElementById('carousel');
  let nextStep = carousel.offsetWidth;
  if (willLeftLessThan40pxToScrollEnd(nextStep)) nextStep *= 2;

  carousel.scroll({
    left: carousel.scrollLeft + nextStep,
    behavior: 'smooth',
  });
};

export const handleClickGoBack = () => {
  const carousel = document.getElementById('carousel');
  let nextStep = carousel.offsetWidth;
  if (willLeftLessThan40pxToScrollStart(nextStep)) nextStep *= 2;

  carousel.scroll({
    left: carousel.scrollLeft - nextStep,
    behavior: 'smooth',
  });
};

// Home slider initialization
export const initHomeSlider = () => {
  document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      effect: 'fade',
      speed: 1000,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    });
  });
};

// Owl Carousel initialization
export const initOwlCarousel = () => {
  $(document).ready(function () {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  });
};

// Parallax slider initialization
export const initParallaxSlider = () => {
  $(document).ready(function () {
    const progressFill = document.querySelector('.progress-fill');
    var swiper = new Swiper('.parallax-slider', {
      speed: 1000,
      parallax: true,
      loop: true,
      autoplay: {
        delay: 10000, // Adjust autoplay delay as needed
        disableOnInteraction: false,
      },
      grabCursor: true,
      effect: 'creative',
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -1000],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      on: {
        slideChange: function () {
          // Reset progress bar when slide changes
          progressFill.style.width = '0%';
        },
        autoplayTimeLeft(s, time, progress) {
          // Update progress bar width based on autoplay time left
          progressFill.style.width = (1 - progress) * 100 + '%';
        },
      },
    });
  });
};

// Helper function to determine scroll conditions
const willLeftLessThan40pxToScrollEnd = (nextStep) => {
  const carousel = document.getElementById('carousel');
  const scrollLeftAfterTwoClicks = carousel.scrollLeft + nextStep * 2;
  return scrollLeftAfterTwoClicks > carousel.scrollWidth - 40;
};

const willLeftLessThan40pxToScrollStart = (nextStep) => {
  const carousel = document.getElementById('carousel');
  const scrollLeftAfterOneClick = carousel.scrollLeft - nextStep;
  return scrollLeftAfterOneClick < 40;
};

export function Rating({ movie }) {
  const rating = movie.vote_average / 2;
  if (rating < 1) {
    return <p className="rating">☆</p>;
  } else if (rating >= 1 && rating < 1.5) {
    return <p className="rating">☆☆</p>;
  } else if (rating >= 1.5 && rating < 2) {
    return <p className="rating">☆☆</p>;
  } else if (rating >= 2 && rating < 2.5) {
    return <p className="rating">☆☆☆☆</p>;
  } else if (rating >= 2.5 && rating < 3) {
    return <p className="rating">☆☆☆</p>;
  } else if (rating >= 3 && rating < 3.5) {
    return <p className="rating">☆☆☆☆☆</p>;
  } else if (rating >= 3.5 && rating < 4) {
    return <p className="rating">☆☆☆☆</p>;
  } else if (rating >= 4 && rating < 4.5) {
    return <p className="rating">☆☆☆☆☆☆</p>;
  } else {
    return <p className="rating">☆☆☆☆☆</p>;
  }
}
