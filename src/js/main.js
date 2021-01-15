import './vendor/focus-visible.min.js';
import './components/main-slider';
import '../../node_modules/@fortawesome/fontawesome-free/js/all';
import './components/catalog-slider';
import './components/catalog-props';
import './components/marketing';
import './components/stepper';
import './components/card-select';
import './components/card-slider';
import './components/products';
import './components/card-bottom-tabs';
import './components/catalog-filter-toggle';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import {disableScroll, enableScroll} from './functions/stop-scroll';
import vars from './_vars.js';
import SimpleBar from 'simplebar';

//disableScroll(fix) // fix -> class of element with position: fixed

if(document.querySelector('[data-bar]')) {
  new SimpleBar(document.querySelector('.card-descr__left'));
}

if (vars.$toTop) {
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollHeight - window.pageYOffset - document.documentElement.clientHeight <= 700) {
      vars.$toTop.style.display = 'block';
    } else {
      vars.$toTop.style.display = 'none';
    }
  });
  document.querySelector('.to-top').addEventListener('click', (e) => {
    e.preventDefault();

    scrollTo(document.querySelector('.site-container'));
  });
}


