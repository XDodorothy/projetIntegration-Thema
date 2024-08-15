
import 'swiper/swiper-bundle.css';
import Swiper from 'swiper';


// Désactiver les avertissements ESLint pour $
/* eslint-disable no-undef */




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
    return <p className="rating"><i class="fa-regular fa-star"></i></p>;
  } else if (rating >= 1 && rating < 1.5) {
    return <p className="rating"><i class="fa-regular fa-star"><i class="fa-regular fa-star-half"></i></i></p>;
  } else if (rating >= 1.5 && rating < 2) {
    return <p className="rating"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star-half"></i></p>;
  } else if (rating >= 2 && rating < 2.5) {
    return <p className="rating"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"><i class="fa-regular fa-star-half"></i></i></p>;
  } else if (rating >= 2.5 && rating < 3) {
    return <p className="rating"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>;
  } else if (rating >= 3 && rating < 3.5) {
    return <p className="rating"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"><i class="fa-regular fa-star-half"></i></i></p>;
  } else if (rating >= 3.5 && rating < 4) {
    return <p className="rating"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>;
  } else if (rating >= 4 && rating < 4.5) {
    return <p className="rating"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star-half"><i class="fa-regular fa-star-half"></i></i></p>;
  } else {
    return <p className="rating"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>;
  }
}

class HoverCarousel {
  constructor(elm, settings) {
    this.DOM = {
      scope: elm,
      wrap: elm.querySelector('ul').parentNode
    };

    this.containerWidth = 0;
    this.scrollWidth = 0;
    this.posFromLeft = 0; // Stripe position from the left of the screen
    this.stripePos = 0;   // When relative mouse position inside the thumbs stripe
    this.animated = null;
    this.callbacks = {};

    this.init();
  }

  init() {
    this.bind();
  }

  destroy() {
    this.DOM.scope.removeEventListener('mouseenter', this.callbacks.onMouseEnter);
    this.DOM.scope.removeEventListener('mousemove', this.callbacks.onMouseMove);
  }

  bind() {
    this.callbacks.onMouseEnter = this.onMouseEnter.bind(this);
    this.callbacks.onMouseMove = e => {
      if (this.mouseMoveRAF) 
        cancelAnimationFrame(this.mouseMoveRAF);

      this.mouseMoveRAF = requestAnimationFrame(this.onMouseMove.bind(this, e));
    };

    this.DOM.scope.addEventListener('mouseenter', this.callbacks.onMouseEnter);
    this.DOM.scope.addEventListener('mousemove', this.callbacks.onMouseMove);
  }

  onMouseEnter(e) {
    this.nextMore = this.prevMore = false; // reset

    this.containerWidth = this.DOM.wrap.clientWidth;
    this.scrollWidth = this.DOM.wrap.scrollWidth;
    this.padding = 0.2 * this.containerWidth; // padding in percentage of the area which the mouse movement affects
    this.posFromLeft = this.DOM.wrap.getBoundingClientRect().left;
    var stripePos = e.pageX - this.padding - this.posFromLeft;
    this.pos = stripePos / (this.containerWidth - this.padding * 2);
    this.scrollPos = (this.scrollWidth - this.containerWidth) * this.pos;

    // temporary add smoothness to the scroll 
    this.DOM.wrap.style.scrollBehavior = 'smooth';

    if (this.scrollPos < 0)
      this.scrollPos = 0;

    if (this.scrollPos > (this.scrollWidth - this.containerWidth))
      this.scrollPos = this.scrollWidth - this.containerWidth;

    this.DOM.wrap.scrollLeft = this.scrollPos;
    this.DOM.scope.style.setProperty('--scrollWidth', (this.containerWidth / this.scrollWidth) * 100 + '%');
    this.DOM.scope.style.setProperty('--scrollLeft', (this.scrollPos / this.scrollWidth) * 100 + '%');

    // lock UI until mouse-enter scroll is finished, after approx 200ms
    clearTimeout(this.animated);
    this.animated = setTimeout(() => {
      this.animated = null;
      this.DOM.wrap.style.scrollBehavior = 'auto';
    }, 200);

    return this;
  }

  onMouseMove(e) {
    if (this.animated) return;

    this.ratio = this.scrollWidth / this.containerWidth;
    
    var stripePos = e.pageX - this.padding - this.posFromLeft;
    
    if (stripePos < 0)
        stripePos = 0;

    this.pos = stripePos / (this.containerWidth - this.padding * 2);
    this.scrollPos = (this.scrollWidth - this.containerWidth) * this.pos;

    this.DOM.wrap.scrollLeft = this.scrollPos;

    if (this.scrollPos < (this.scrollWidth - this.containerWidth))
      this.DOM.scope.style.setProperty('--scrollLeft', (this.scrollPos / this.scrollWidth) * 100 + '%');

    this.prevMore = this.DOM.wrap.scrollLeft > 0;
    this.nextMore = this.scrollWidth - this.containerWidth - this.DOM.wrap.scrollLeft > 5;

    this.DOM.scope.setAttribute('data-at',
      (this.prevMore ? 'left ' : ' ')
      + (this.nextMore ? 'right' : '')
    );
  }
}

// Export the class for use in your React component
export default HoverCarousel;