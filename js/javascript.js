/*global $, console */

$(function (){
  'use strict'
  $('.header').height($(window).height())
  $(window).resize(function(){
    $('.header').height($(window).height())
  })
});
