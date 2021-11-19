(function ($) {
  "use strict";


  var window_width = $(window).width(),
    window_height = window.innerHeight,
    header_height = $(".default-header").height(),
    header_height_static = $(".site-header.static").outerHeight(),
    fitscreen = window_height - header_height;

  $(".fullscreen").css("height", window_height)
  $(".fitscreen").css("height", fitscreen);


  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.scroll-top').fadeIn(600);
    } else {
      $('.scroll-top').fadeOut(600);
    }
  });
  $('.scroll-top').on("click", function () {
    $("html,body").animate({
      scrollTop: 0
    }, 500);
    return false;
  });


  // ------------------------------------------------------------------------------ //
  // Preloader 
  // ------------------------------------------------------------------------------ //

  $(document).ready(function () {
    setTimeout(function () {
      $('body').addClass('loaded');
    }, 3000);

  });


  // ------------------------------------------------------------------------------ //
  // Active Menu 
  // ------------------------------------------------------------------------------ //


  $('#dopeNav').dopeNav({
    stickyNav: true,
  });

  //Smooth Scrolling Using Navigation Menu
  $('a[href*="#"]').on('click', function (e) {
    $('html,body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 70
    }, 500);
    e.preventDefault();
  });

  // ------------------------------------------------------------------------------ //
  // Testimonial carousel  
  // ------------------------------------------------------------------------------ //


  $("#testimonial-carusel").owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });


  $("#testimonial-carusel2").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: true,
    autoplayHoverPause: true,
    smartSpeed: 500,
    autoplay: true,
  });


  // ------------------------------------------------------------------------------ //
  // Screenshot carousel  
  // ------------------------------------------------------------------------------ //


  $('#screenshot-carusel').owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: true,
      margin: 5,    
      autoplayTimeout: 4000,
      smartSpeed: 500,
      center: true,
      navText: ['<span class="ti ti-angle-left"></span>', '<span class="ti ti-angle-right"></span>'],
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 3
          },
          1200: {
              items: 5
          }
      }
  });


  // ------------------------------------------------------------------------------ //
  // Parallux Background 
  // ------------------------------------------------------------------------------ //

  $(window).stellar();

})(jQuery);