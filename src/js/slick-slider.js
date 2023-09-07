import $ from 'jquery';
import 'slick-carousel';

$('.carousel').slick({
  // dots: true, //pagination
  slidesToShow: window.screen.availWidth < 768 ? 4 : 6,
  vertical: true,
  // autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: false,
  nextArrow:
    '<button type="button" arial-label="show next fund" class="slick-next"><svg class="slick-icon" width="22" height="22"><use  xlink:href="#icon-arrow-up"></use></svg></button>',
  draggable: true,
  // easing: 'string' animation
  verticalSwiping: true,
  // slidesToScroll: 3,
  // centerMode: true,
  initialSlide: 0,
});
