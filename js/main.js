$(document).ready(function() {

  
  $(".toggle-menu").on('click',function(){
  $(".top-line .nav").slideToggle();
  });



 // $(window).bind('mousewheel', function(){
 //    $(".map-marker-box").hide();
 //     //prevent page fom scrolling
 //     return false;
 //    });

  //активируем селект
  $('select').selectric();
    $(".navbar .btn").on("click", function(){
    $(".navbar .input-group").toggleClass("active");
  });
  //waypoint
  var navLi = $('.way-nav li');

  $(".homesect").waypoint(function() {
    var hash = $(this).attr('id');
    $(".way-nav a").removeClass('active');
     navLi.find('[href="#'+hash+'"]').addClass('active');

  }, {
    offset: '20'
  });

  //Выравниваем все блоки .leader-item по одной высоте
  var maxHeight = 0;
  if($('.leader-item').length > 0){
    $('.leader-item').each(function(){
      var LeaderHeight = $(this).height();
      if(LeaderHeight >= maxHeight){
        maxHeight = LeaderHeight;
      }
    });
    $('.leader-item').css('height',maxHeight);
  };

  //прячем надпись видео
  $('.header-video').on('click',function(){
      $('.header-video h4').hide();
      $('.video-opacity').hide();
  });
  //прячем ефект кнопки в видео
  $('.vjs-big-play-button').on('click',function(){
      $('.video-opacity').hide();
  });

  //form
  $('.btn-form').on('click',function(){
    $('.lightbox').css('display','block')
          .animate({'opacity':'1'},400);
          return false;
  });
  $('.lightbox-inherit, .close-lightbox').on('click',function(){
    $('.lightbox').animate({'opacity':'0'},400)
          .css('display','none');
  });

  //карусель
  $("#owl").owlCarousel({
    loop:true,
    margin:40,
    nav:true,
    navText : ["",""],
    items:3,
    mouseDrag:true,
    slideBy:3,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav: false

        },
        450:{
            items:2,
            nav: false

        },
        1000:{
            items:3
        }
    }
  });

  //карусель
  $("#owl-2").owlCarousel({
    loop:true,
    margin:40,
    nav:false,
    navText : ["",""],
    items:1,
    mouseDrag:true,
    slideBy:1
  });

  //карусель
  $("#owl-3").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText : ["",""],
    items:4,
    mouseDrag:true,
    dots: false,
    slideBy:1,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        550:{
            items:2,
            
        },
        1000:{
            items:4
        }
    }
  });

  //навигацыя по сайту
  $(".arrow-top, .arrow-down, .way-nav a").mPageScroll2id({
    scrollSpeed: 900,
    offset: 0
  });

  //скрол
  $(".selectric-items .selectric-scroll, .lightbox-block").niceScroll({
    cursorcolor:"#88bb0e",
    cursorwidth: "4px",
    cursorborder: "none",
    horizrailenabled: false,
  });

  
});