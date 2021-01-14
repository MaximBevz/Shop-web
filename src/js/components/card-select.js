import vars from '../_vars';

if (document.querySelector('.card-page')) {

  vars.$colorSelected.addEventListener('click', (e) => {
    if (e.target.classList.contains('color-select__btn')) {

      document.querySelectorAll('.color-select__btn').forEach(item => {
        item.classList.remove('color-select__btn_active');
      });

      let color = e.target.dataset.color;

      e.currentTarget.querySelector('.color-select__selected span').textContent = color;

      e.target.classList.add('color-select__btn_active');
    }
  });

  let size = '';

  vars.$sizeSelected.addEventListener('click', (e) => {
    if (e.target.classList.contains('size-select__btn')) {

      e.currentTarget.querySelector('.size-select__clear').style.display = 'block';

      e.target.classList.toggle('size-select__btn_active');

      if (e.target.classList.contains('size-select__btn_active')) {
        let currentSize = +e.target.textContent;

        size += currentSize + ', ';
      } else {
        let currentSize = +e.target.textContent + ', ';

        size = size.replace(currentSize, '');
      }

      e.currentTarget.querySelector('.size-select__selected span').textContent = size;

      if (!size) {
        e.currentTarget.querySelector('.size-select__selected span').textContent = 'Select a size';
      }
    }

    if (e.target.classList.contains('size-select__clear')) {
      document.querySelectorAll('.size-select__btn').forEach(item => {
        item.classList.remove('size-select__btn_active');
      });

      size = '';

      e.currentTarget.querySelector('.size-select__selected span').textContent = 'Select a size';

      e.currentTarget.querySelector('.size-select__clear').style.display = 'none';
    }
  });
}



