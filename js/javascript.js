var $document         = $(document),
    $element          = $('.navbar'),
    navbarDefault     = 'navbar-background';
    navbarTransparent = 'navbar-transparent';
    fadeInDown        = 'fadeInDown';
    fadeIn            = 'fadeIn';

$document.scroll(function (){
  if ($document.scrollTop() >= 150){
    $element.addClass(navbarDefault);
    $element.removeClass(navbarTransparent);
    $element.removeClass(fadeIn);
    $element.addClass(fadeInDown);
    $element.addClass('borderColor');
  } else {
    $element.removeClass(navbarDefault);
    $element.addClass(navbarTransparent);
    $element.addClass(fadeIn);
    $element.removeClass(fadeInDown);
    $element.removeClass('borderColor')
  }
});

 // loading screen
 $(window).on('load', function() {
   $('.spinner').fadeOut(3500, function() {
      //Show The Scroll
     $('body').css("overflow-y", "auto");

     $(this).parent().fadeOut(250, function(){
       $(this).remove();
     });
   });
 });

 // scroll progressbar
$(window).scroll(function () {
  var s = $(window).scrollTop(),
        d = $(document).height(),
        c = $(window).height();
        scrollPercent = (s / (d-c)) * 100;
        var position = scrollPercent;

   $("#progressbar").attr('value', position);

});
// make backgrounds' width and height = windows' height and width
$(function () {
  'use strict'

  $('.backgrounds-height').height($(window).height());
  $(window).resize(function() {
    $('.backgrounds-height').height($(window).height());
  })
});

// fixed menu
$('.menu .themes').on('click', function (){
  $(this).parent('.menu').toggleClass('is-visible');
  if ($(this).parent('.menu').hasClass('is-visible')) {
    $(this).parent('.menu').animate({
      left: '0',
      backGround:'#4E1402'
    },500);

} else {
  $(this).parent('.menu').animate({
    left: '-35px',
    backGround:'#4E1402'
  },500);
}
});

$('.change-colors li').on('click', function() {
  $('body').attr('data-default-color', $(this).data('color'));
});




// skills heading
swirl()
function swirl(){
$(".heading h2").first().letterfx({"fx":"fall", "timing":500});
setTimeout(swirl, 500);}


// Projects heading
flyRight()
function flyRight(){
$(".flyRightFunction h2").letterfx({"fx":"swirl", "timing":500});
setTimeout(flyRight, 500);}


// about heading
fall()
function fall(){
$(".heading h2").last().letterfx({"fx":"grow", "timing":500});
setTimeout(fall, 500);}
