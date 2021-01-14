import vars from '../_vars';

vars.$cardBottomLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.currentTarget.getAttribute('href');

    document.querySelectorAll('.card-descr__link').forEach(item => {
      item.classList.remove('card-descr__link_active');
    });

    document.querySelectorAll('.card-descr__content').forEach(el => {
      el.classList.remove('card-descr__content_active');
    });

    e.currentTarget.classList.add('card-descr__link_active');
    document.querySelector(`[data-target="${target}"]`).classList.add('card-descr__content_active');
    
  });
});