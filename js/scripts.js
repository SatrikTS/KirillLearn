var popup = document.querySelector('.js-popup');
var productBuyBtns = document.querySelectorAll('.js-product-button');
var titleProduct = document.querySelectorAll('.js-product-title');
var popupTitle = document.querySelector('.js-popup-title');



for (let i = 0; i < productBuyBtns.length; i++) {
    productBuyBtns[i].addEventListener('click', function() {
        popupTitle.innerHTML = titleProduct[i].innerHTML;
        popup.classList.add('is-active')
    })
}

var closeBtn = document.querySelector('.js-popup-close');
closeBtn.addEventListener('click',  function() {
    popup.classList.remove('is-active');
});


var basketAddBtn = document.querySelector('.js-add-product');
var basketCount = document.querySelector('.js-basket-count');
var count = 0;

basketAddBtn.addEventListener('click', function() {
    basketCount.innerHTML = count ++;
});
