const productsGrid = document.querySelector('.products-grid');
const loadMore = document.querySelector('.main-products__btn-more');
let quantityProducts = 5;
let dataLength = '';

if (productsGrid) {
  const fetchProducts = (quantity = 5) => {
    fetch('../products.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dataLength = data.length;
        productsGrid.innerHTML = '';

        for (let i = 0; i < data.length; i++) {
          if (i < quantity) {
            productsGrid.innerHTML += `
          <li class="products-grid__item">
            <div class="product">
              <span class="product__prop ${data[i].status}">${data[i].status}</span>
              <div class="product__image">
                <img src="${data[i].image}" alt="${data[i].title}">
              </div>
              <h5 class="product__title">
                <a href="#">
                  ${data[i].title}
                </a>
              </h5>
              <div class="product-custom">
                <div class="product-custom__price">
                  <div class="product__price">
                    <span class="product__new-price btn">
                      ${data[i].newPrice}.00 $
                    </span>
                  </div>
                </div>
                <button class="product-custom__cart btn-reset btn">
                  Add to cart
                </button>
              </div>
            </div>
          </li>
        `;
          }

          if (data[i].oldPrice) {

            let old = document.createElement('span');
            old.classList.add('product__old-price');
            old.textContent = `
          ${data[i].oldPrice}.00 $
        `;

            let prices = document.querySelectorAll('.product__price');

            let productsGridItems = productsGrid.querySelectorAll('.products-grid__item');

            if (productsGridItems[i]) {
              for (let j = 0; j < prices.length; j++) {
                prices[j].prepend(old);
              }
            }
          }
        }

      });
  };

  fetchProducts();

  loadMore.addEventListener('click', (e) => {
    quantityProducts = quantityProducts + 5;
    fetchProducts(quantityProducts);

    if (quantityProducts >= dataLength) {
      loadMore.style.display = 'none';
    } else {
      loadMore.style.display = 'inline-block';
    }
  });
}



