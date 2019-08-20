// checkbox
function toggleCheckbox() {

    const checkbox = document.querySelectorAll('.filter-check_checkbox');

    checkbox.forEach((el) => {
        el.addEventListener('change', addCheck);
    });

    function addCheck(){
         if(this.checked === true){
             this.nextElementSibling.classList.add('checked');
             // nextElementSibling получить первого соседа (первый чайлд)
             // без if else this.nextElementSibling.classList.toggle('checked');
         } else {
             this.nextElementSibling.classList.remove('checked');
         }
    }
}
toggleCheckbox();
// end checkbox

// cart
function toggleCart() {

    const btnCart = document.getElementById('cart');
    const modalCart = document.querySelector('.cart');
    const closeBtn = document.querySelector('.cart-close');
    btnCart.addEventListener('click', () => {
        modalCart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });
    closeBtn.addEventListener('click', () => {
        modalCart.style.display = 'none';
        document.body.style.overflow = '';

    });
}
toggleCart();
// end cart

// work with basket
function addCart() {
    const cards = document.querySelectorAll('.goods .card'); // получаем все карточки из обертки
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmpty = document.getElementById('cart-empty');
    const countGoods = document.querySelector('.counter');
    cards.forEach((card) => {
        const btn = card.querySelector('button');

        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true); // true чтобы скопировать с вложенностью
            cartWrapper.appendChild(cardClone);
            showData();
            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Убрать из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });

        });
    });

    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card');
        const cardsPrice = cartWrapper.querySelectorAll('.card-price');
        const cartTotal = document.querySelector('.cart-total span');
        let sum = 0;
        countGoods.textContent = cardsCart.length.toString();

        cardsPrice.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
        });

        cartTotal.textContent = sum;

        if (cardsCart.length === 0) {
            cartWrapper.appendChild(cartEmpty);
        } else {
            cartEmpty.remove();
        }

    }
}
addCart();
// end work with basket

// filter sales

function actionPage() {
    const cards = document.querySelectorAll('.goods .card');
    const discountCheckbox = document.getElementById('discount-checkbox');
    const min = document.getElementById('min');
    const max = document.getElementById('max');
    const search = document.querySelector('.search-wrapper_input');
    const searchBtn = document.querySelector('.search-btn');

    discountCheckbox.addEventListener('click', () => {
       cards.forEach((card) => {
           if(discountCheckbox.checked){
                if(!card.querySelector('.card-sale')){
                    card.parentNode.style.display = 'none';
                }
           } else {
               card.parentNode.style.display = '';

           }
       });
    });

    function filterPrice(){
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price');
            const price = parseFloat(cardPrice.textContent); // отсеиваем пробел и рубль

            if((min.value && price < min.value) || (max.value && price > max.value)){
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.d = '';

            }

        });
    }
    // search

    min.addEventListener('change', filterPrice);
    max.addEventListener('change', filterPrice);

    searchBtn.addEventListener('click', () => {
       const searchText = new RegExp(search.value.trim(),'i');
       cards.forEach((card) => {
          const title = card.querySelector('.card-title');
          if(!searchText.test(title.textContent)){ // метод test true или false
            card.parentNode.style.display = 'none';
          } else {
              card.parentNode.style.display = '';
          }
       });
       search.value = '';
    });
    // end search


}
actionPage();


// end filter sales
