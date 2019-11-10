$(document).ready(function() {

	// Custom JS
  $('.pop-up').magnificPopup({type:'image'});
  $(".popup_content").magnificPopup({
    type:"inline",
    midClick: true,
    closeBtnInside:true,
  });

if ($(window).height() < 450) {
  $(".topMenu ul").addClass("topPosition")
};
  $('.parallax-window').parallax({
    naturalWidth: 1920,
    naturalHeight: 1081,
  });
  function isMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          return true;
    }
    return false;
};
  if (isMobile()) {
    $('.parallax-window').css('background-image', 'url(../img/bgnaruto.v1.jpg)').css('width', '100%');
  };
  AOS.init({disable: 'mobile'});
  $("input,select,textarea").not("[type=submit]").jqBootstrapValidation();
  $(".toggleMenu").on('click', function() {
  $(".sandwich").toggleClass("active");
  if ($(".topMenu").is(":visible")) {
    $(".topMenu").fadeOut(600);
    $(".topMenu li:nth-child(2n) a").addClass('fadeOutRight animated');
    $(".topMenu li:nth-child(2n+1) a").addClass('fadeOutLeft animated');
  } else {
    $(".topMenu li:nth-child(2n) a").removeClass('fadeOutRight animated');
    $(".topMenu li:nth-child(2n+1) a").removeClass('fadeOutLeft animated');
    $(".topMenu").fadeIn(600);
    $(".topMenu li a").addClass('fadeInDown animated');
  }
});


function heightDetect() {
  $(".header").css("height", $(window).height());
};
heightDetect();
$(window).on('rezise', function(){
heightDetect();
});
$(".menuItem").on("click", function() {
  $(".topMenu").fadeToggle(600);
  $(".sandwich").toggleClass("active");
  $(".topMenu li:nth-child(2n) a").addClass('fadeOutRight animated');
  $(".topMenu li:nth-child(2n+1) a").addClass('fadeOutLeft animated');

});
  $('#portfolioTable').mixItUp();
// PORTFOLIO PICKER
  $(".portfolio li").on('click', function() {
  $(".portfolio li").removeClass("active");
  $(this).addClass("active");
});

  $(function() {
    $('a[href*="#"]').smoothscroll({
    duration: 1200,
    hash: true,
    focus: true,
    easing: 'easeInQuint',
  });
});


});

$(window).on('load', function() {
  $(".loaderInner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");
});
