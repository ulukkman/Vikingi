$(function () {
  // $('[data-fancybox]').fancybox({
  //   youtube: {
  //     controls: 0,
  //     showinfo: 0
  //   }
  // });
  $('.card-deck a').fancybox({
    caption: function (instance, item) {
      return $(this).parent().find('.card-text').html();
    }
  });


  $('.heroes__slider-img').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.heroes__slider-text',
    prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt=""></button>',
  });
  $('.heroes__slider-text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.heroes__slider-img',
arrows: false,
  });
});