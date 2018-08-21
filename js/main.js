// sileder--------------
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:3
      },
      600:{
        items:3
      },
      1000:{
        items:3
      }
    }
  });
// menu-reponsive---------------->

$('.fa-bars').click(function() {
  $('.site').toggleClass('open-repon');
  $('#icon-menu').toggleClass(' fa-times fa-bars');
 
});
$(window).resize(function(){
  var length= $(window).width();
 if(length>=768)
 {
  $('.site').removeClass('open-repon');
  $('#icon-menu').removeClass(' fa-times');
  return false;
 }
});

//sub-menu-reponsive----------------->
$('.true0').click(function(){
  $('.sub-menu').slideToggle();
  $('.true0').toggleClass('fa-chevron-down fa-chevron-up');
});

$('.true1').click(function(){
  $('.sub-menu1').slideToggle();
  $('.true1').toggleClass('fa-chevron-down fa-chevron-up');
});

$('.true2').click(function(){
  $('.sub-menu2').slideToggle();
  $('.true2').toggleClass('fa-chevron-down fa-chevron-up');
});

$('.true3').click(function(){
  $('.sub-menu3').slideToggle();
  $('.true3').toggleClass('fa-chevron-down fa-chevron-up');
});

$('.true4').click(function(){
  $('.sub-menu4').slideToggle();
  $('.true4').toggleClass('fa-chevron-down fa-chevron-up');
});

$('.true5').click(function(){
  $('.sub-menu5').slideToggle();
  $('.true5').toggleClass('fa-chevron-down fa-chevron-up');
});

$('.true6').click(function(){
  $('.sub-menu6').slideToggle();
  $('.true6').toggleClass('fa-chevron-down fa-chevron-up');
});
// resize documnet------>

 return true;
});
