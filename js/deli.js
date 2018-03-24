$(document).ready(function(){

  $('.slick-slideshow-container-wide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1150,
    fade: true,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    draggable: false,
    arrows: false
});
  $('.slick-slideshow-container-thin').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    speed: 1150,
    fade: true,
    infinite: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    draggable: false,
    arrows: false
  });
});


$(window).scroll(function(){
  var scrollVar = $(window).scrollTop();
  $('.hero-container').css("opacity", 1 - scrollVar/500);
});

$(window).resize(function() {
  $(document.body).css("margin-top", $(".hero-image").height() + 72);
}).resize();