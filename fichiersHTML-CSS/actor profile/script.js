/*-----caroussel---------*/
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

/*-------year--------*/
let year = document.querySelector("#year");
$(document).ready(function () {
  year.innerText = new Date().getFullYear();
});

/*----navbar------*/
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/*---Read more-----*/
$(document).ready(function () {
  $('.read-more-link').click(function (e) {
    e.preventDefault();
    $('.additional-text').slideToggle();
    $(this).text(function (i, text) {
      return text === "Read less" ? "Read more ..." : "Read less";
    });
  });
});