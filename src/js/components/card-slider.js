import vars from '../_vars';

if (document.querySelector('.card-slider')) {
  vars.$sliderThumbs.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-slider__thumb')) {
      let src = e.target.querySelector('img').getAttribute('src');

      vars.$sliderImg.setAttribute('src', src);
    }
  });
}



