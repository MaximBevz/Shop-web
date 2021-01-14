import vars from '../_vars';

if (document.querySelector('.stepper')) {

  const $stepperInput = vars.$stepper.querySelector('.stepper__input'),
    $stepperMinus = vars.$stepper.querySelector('.stepper__btn_minus'),
    $stepperPlus = vars.$stepper.querySelector('.stepper__btn_plus');


  $stepperInput.addEventListener('input', (e) => {

    if (e.currentTarget.value <= 1) {
      $stepperMinus.classList.add('stepper__btn_disabled');
      $stepperPlus.classList.remove('stepper__btn_disabled');
    } else {
      $stepperMinus.classList.remove('stepper__btn_disabled');
    }

    if (e.currentTarget.value > 99998) {
      $stepperPlus.classList.add('stepper__btn_disabled');
      $stepperMinus.classList.remove('stepper__btn_disabled');
    } else {
      $stepperPlus.classList.remove('stepper__btn_disabled');
    }

  });

  $stepperPlus.addEventListener('click', (e) => {
    let currentValue = parseInt($stepperInput.value);
    currentValue++;
    $stepperInput.value = currentValue;
    $stepperMinus.classList.remove('stepper__btn_disabled');

    if ($stepperInput.value > 99998) {
      $stepperInput.value = 99999;
      $stepperPlus.classList.add('stepper__btn_disabled');
    } else {
      $stepperPlus.classList.remove('stepper__btn_disabled');
    }
  });

  $stepperMinus.addEventListener('click', (e) => {
    $stepperInput.value--;
    $stepperPlus.classList.remove('stepper__btn_disabled');

    if ($stepperInput.value <= 1) {
      $stepperInput.value = 1;
      $stepperMinus.classList.add('stepper__btn_disabled');
    } else {
      $stepperMinus.classList.remove('stepper__btn_disabled');
    }
  });
}
