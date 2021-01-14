import vars from '../_vars';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const catalogSwiper = new Swiper(vars.$catalogSlider, {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.slide-btn_prev',
    prevEl: '.slide-btn_next',
  }

  // If we need pagination
});

const relatedSlider = new Swiper(vars.$cardRelatedSlider, {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 40,
  // If we need pagination
  pagination: {
    el: '.related-pagination',
    clickable: true
  },
});
