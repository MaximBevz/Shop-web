import vars from '../_vars';

if (document.querySelector('.catalog')) {
  vars.$freeDelivery.addEventListener('click', (e) => {
    e.currentTarget.closest('.free-delivery').style.display = 'none';
  });


  vars.$catalogColumns.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.classList.contains('catalog-columns__link') || e.target.closest('.catalog-columns__item')) {
      let columns = e.target.dataset.columns;
      let links = document.querySelectorAll('.catalog-columns__link');

      links.forEach(el => {
        el.classList.remove('catalog-columns__link_active');
      });

      e.target.classList.add('catalog-columns__link_active');

      vars.$catalogGridContent.dataset.gridColumns = columns;
    }
  });

  const createChoiseItem = (text) => {
    return (
      `
      <button class="btn-reset catalog-choise__item" data-choise-text=${text}>
          ${text}
          <i class="fas fa-times catalog-choise__close"></i>
        </button>
      `
    );
  };


  vars.$catalogFilterItems.forEach(el => {
    el.querySelector('.custom-checkbox__input').addEventListener('change', (e) => {
      let checked = el.querySelector('.custom-checkbox__input').checked;

      if(checked) {
        el.querySelector('.custom-checkbox').classList.add('custom-checkbox_active');
        let text = el.querySelector('.custom-checkbox__text').textContent;

        vars.$catalogChoise.insertAdjacentHTML('afterbegin', createChoiseItem(text));
      } else {
        el.querySelector('.custom-checkbox').classList.remove('custom-checkbox_active');

        let text = el.querySelector('.custom-checkbox__text').textContent;

        document.querySelector(`[data-choise-text=${text}]`).remove();
      }

      let activeCheckboxes = document.querySelectorAll('.custom-checkbox_active');

      if (activeCheckboxes.length > 0) {
        vars.$catalogChoise.style.display = 'block';
      } else {
        vars.$catalogChoise.style.display = 'none';
      }
    });
  });

  vars.$catalogChoise.addEventListener('click', (e) => {
    if (e.target.classList.contains('catalog-choise__item') || e.currentTarget.classList.contains('catalog-choise__item')) {
      e.target.remove();

      let text = e.target.textContent.trimLeft().trimRight();

      document.querySelector(`[data-text=${text}]`).querySelector('input').checked = false;
      document.querySelector(`[data-text=${text}]`).classList.remove('custom-checkbox_active');
    }

    if (e.target.classList.contains('catalog-choise__clear')) {
      Array.from(e.currentTarget.children).forEach(el => {
        if (!el.classList.contains('catalog-choise__clear')) {
          el.remove();
        }

        vars.$catalogFilterItems.forEach(el => {
          el.querySelector('input').checked = false;
          el.querySelector('input').classList.remove('custom-checkbox_active');
        });
      });
    }

    if(e.currentTarget.children.length === 1) {
      e.currentTarget.style.display = 'none';
    }
  });
}



