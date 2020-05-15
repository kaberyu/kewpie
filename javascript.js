$(function () {
  $('.border')
    .mouseover(function () {
      $(this).stop(true).animate({
        borderWidth: '4px'
      }, 150);
    })
    .mouseout(function () {
      $(this).stop(true).animate({
        borderWidth: '2px'
      }, 150);
    });

  $('.border1')
    .mouseover(function () {
      $(this).stop(true).animate({
        borderWidth: '4px'
      }, 150);
    })
    .mouseout(function () {
      $(this).stop(true).animate({
        borderWidth: '1px'
      }, 100);
    });

  $('#scroll').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });

  $('#slider').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    dots: true,
    // dotsClass: 'dot-class',
    arrows: false,
    infinite: true,
    swipe: true
  });

  $('#slider_pc').slick({
    accessibility: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    dots: true,
    // dotsClass: 'dot-class',
    arrows: false,
    infinite: true,
    swipe: true
  });
});
