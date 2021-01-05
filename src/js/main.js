import './vendor/focus-visible.min.js';
import './components/main-slider';
import '../../node_modules/@fortawesome/fontawesome-free/js/all';
import './components/catalog-slider';
import './components/catalog-props';
import './components/marketing';
import './components/catalog-filter-toggle';
import {resizeContent} from './functions/resize';
import {scrollTo} from './functions/smooth-scroll';
import {disableScroll, enableScroll} from './functions/stop-scroll';
import _vars from './_vars.js';



//disableScroll(fix) // fix -> class of element with position: fixed

_vars.$freeDelivery.addEventListener('click', (e) => {
  e.currentTarget.closest('.free-delivery').style.display = 'none';
});

