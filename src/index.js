// import Swiper JS
import Swiper from 'swiper/swiper-bundle';
// // import Swiper styles
// import 'swiper/css';

// import 'simplelightbox/dist/simple-lightbox.min.css';
import 'swiper/swiper-bundle.min.css';

const swiper = new Swiper('.slider-main-block', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
