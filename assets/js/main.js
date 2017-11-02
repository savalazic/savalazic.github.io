$(function(){

  setTimeout(function(){
    $('body').addClass('loaded');
  }, 2000);

  var sideNav = $('.side-nav li');
  var navAbout = $('.side-nav li:first-of-type');
  var navPortfolio = $('.side-nav li:nth-of-type(2), .portfolio-link');
  var navContact = $('.side-nav li:last-of-type');

  sideNav.on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });

  navAbout.on('click', function(){
    $('.content-about').addClass('is-active').siblings().removeClass('is-active');
  });
  
  navPortfolio.on('click', function(){
    $('.side-nav li:nth-of-type(2)').addClass('active').siblings().removeClass('active');
    $('.content-portfolio').addClass('is-active').siblings().removeClass('is-active');
  });

  navContact.on('click', function(){
    $('.content-contact').addClass('is-active').siblings().removeClass('is-active');
  });

  $('.multiple-items').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: false,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          arrows: false,
        }
      }
    ]
  });

});
