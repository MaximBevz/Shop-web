import vars from '../_vars';

const customSelect = () => {
  vars.$catalogCastomSelect.forEach(el => {
    el.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('custom-select_open');

      if (e.target.classList.contains('custom-select__item')) {
        let text = e.target.textContent;

        e.currentTarget.querySelector('.custom-select__text').textContent = text;
      }
    });

  });
};

if(document.querySelector('.catalog')) {

  vars.$catalogFiltersTop.forEach(el => {
    el.addEventListener('click', (e) => {
      e.currentTarget.closest('.catalog-filter').classList.toggle('catalog-filter_open');
    });
  });

  vars.$hideFilters.addEventListener('click', (e) => {
    vars.$catalogFiltersTop.forEach(el => {
      el.closest('.catalog-filter').classList.remove('catalog-filter_open');
    });
  });

  customSelect();
  
}

if(document.querySelector('.card-page')) {
  customSelect();
}
