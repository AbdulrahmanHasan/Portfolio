var $document       = $(document),
  $element          = $('.navbar'),
  navbarDefault     = 'navbar-background',
  navbarTransparent = 'navbar-transparent',
  fadeInDown        = 'fadeInDown',
  fadeIn            = 'fadeIn';

$document.scroll( () => {
  'use strict';
  if ($document.scrollTop() >= 150) {
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
    $element.removeClass('borderColor');
  }
});

// loading screen
$(window).on('load', function() {
  $('.spinner').fadeOut(3500, function() {
    //Show The Scroll
    $('body').css('overflow-y', 'auto');

    $(this).parent().fadeOut(250, function() {
      $(this).remove();
    });
  });
});

// scroll progressbar
$(window).scroll( () => {
  'use strict';
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();
  var scrollPercent = (s / (d-c)) * 100;
  var position = scrollPercent;

  $('#progressbar').attr('value', position);

});
// make backgrounds' width and height = windows' height and width
$(() => {
  'use strict';
  $('.backgrounds-height').height($(window).height());
  $(window).resize(() => {
    $('.backgrounds-height').height($(window).height());
  });
});


$(function() {
  'use strict';
  const topoffset = 69; //variable for menu height

  //Use smooth scrolling when clicking on navigation
  $('.navbar-nav a').click( function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 750);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling
});



// fixed menu
$('.menu .themes').on('click', function() {
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
  'use strict';
  $('body').attr('data-default-color', $(this).data('color'));
});




// skills heading
const swirl = () => {
  'use strict';
  $('.heading h2').first().letterfx({'fx':'fall', 'timing':500});
  setTimeout(swirl, 500);
};
swirl();

// Projects heading
const flyRight = () => {
  'use strict';
  $('.flyRightFunction h2').letterfx({'fx':'swirl', 'timing':500});
  setTimeout(flyRight, 500);
};
flyRight();

// about heading
const fall = () => {
  'use strict';
  $('.heading h2').last().letterfx({'fx':'grow', 'timing':500});
  setTimeout(fall, 500);
};
fall();
