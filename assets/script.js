$(document).ready(function(){
    $('.sidenav').sidenav();
  });

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 6500);
}
autoplay()   
