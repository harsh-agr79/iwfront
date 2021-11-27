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

$(document).ready(function(){
    $('.modal').modal();
  });

  $('.dropdown-trigger').dropdown({
      constrainWidth: false,
      coverTrigger:false,
  });

//   var slider = document.getElementById('slider');
//   noUiSlider.create(slider, {
//    start: [20, 80],
//    connect: true,
//    step: 1,
//    orientation: 'horizontal', // 'horizontal' or 'vertical'
//    range: {
//      'min': 0,
//      'max': 100
//    },
//    format: wNumb({
//      decimals: 0
//    })
//   });
