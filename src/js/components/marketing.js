import vars from '../_vars';

if (vars.$marketing) {

  let counter = 0;
  let delay = 10000;

  const data = [
    {
      title: "Adidas Women's Continental 80 White",
      price: '90.00',
      img: '../img/mark-prod-1.jpg'
    },
    {
      title: "NIKE SF Air Force 1 White",
      price: '60.00',
      img: '../img/mark-prod-3.jpg'
    },
    {
      title: "Faux shearling double-breasted coat",
      price: '60.00',
      img: '../img/mark-prod-2.jpg'
    }

  ];

  const closeMarketin = () => {
    vars.$marketing.classList.remove('marketing_visible');
  };

  const changeMarketingData = () => {
    vars.$marketing.classList.remove('marketing_visible');

    setTimeout(() => {
      vars.$marketing.classList.add('marketing_visible');
    }, delay - 5000);

    const stringTitle = `${data[counter].title}`;
    const stringPrice = `${data[counter].price}  $`;
    const stringUrl = `${data[counter].img}`;

    vars.$marketing.querySelector('.marketing__title').textContent = stringTitle;
    vars.$marketing.querySelector('.marketing__price').textContent = stringPrice;
    vars.$marketing.querySelector('.marketing__img img').src = stringUrl;

    counter++;

    if (counter === data.length) {
      counter = 0;
    }

  };

  changeMarketingData();

  const interval = setInterval(changeMarketingData, delay);

  vars.$marketing.addEventListener('click', (e) => {
    if (e.target.classList.contains('marketing__close')) {
      closeMarketin();
      clearInterval(interval);
    }
  });
}
