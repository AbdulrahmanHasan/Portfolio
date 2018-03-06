// var $document = $(document),
//     $element = $('.navbar'),
//     navbarDefault = 'navbar-dark bg-dark';
//     navbarTransparent = 'navbar-transparent';
//     fadeInDown = 'fadeInDown';
//
// $document.scroll(function(){
//   if ($document.scrollTop() >= 720){
//     $element.addClass(navbarDefault);
//     $element.removeClass(navbarTransparent);
//     $element.addClass(fadeInDown);
//   }else{
//     $element.removeClass(navbarDefault);
//     $element.addClass(navbarTransparent);
//     $element.removeClass(fadeInDown);
//   }
// });


$('.from-top').hover(function (){
   $(this).find('span').eq(0).animate({
     height: '100%'
   },350);
}, function () {
  $(this).find('span').eq(0).animate({
    height: 0
  },350);
});

$(function () {
  'use strict'

  $('.backgrounds-height').height($(window).height());
  $(window).resize(function() {
    $('.backgrounds-height').height($(window).height());
  })
});
