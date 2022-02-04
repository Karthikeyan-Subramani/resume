$(window).scroll(function() {
  $('.nav1').toggleClass('scrolled', $(this).scrollTop() > 20);
  $(".brand1").toggleClass('brand1-size', $(this).scrollTop() > 20);
  $(".brand2").toggleClass('brand2-size', $(this).scrollTop() > 20);
});
