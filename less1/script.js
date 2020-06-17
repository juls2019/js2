"use stickt"
const products = {
    // ID товара
    536598: {
        img: 'product-shark.jpg',
        name: 'tovar1',
        price: 100,
        currency:'$',
        description: 'wertyui sdfghjk, xcvbnm dfghj'
    },
    536599: {
        img: 'product-shark.jpg',
        name: 'tovar2',
        price: 200,
        currency:'$',
        description: 'wertyui sdfghjk, xcvbnm dfghj'
    },
    536600: {
        img: 'product-shark.jpg',
        name: 'tovar3',
        price: 838800,
        currency:'$',
        description: 'wertyui sdfghjk, xcvbnm dfghj'
    },
    536601: {
        img: 'product-shark.jpg',
        name: 'tovar5',
        price: 10770,
        currency:'$',
        description: 'wertyui sdfghjk, xcvbnm dfghj'
    },
    536602: {
        img: 'product-shark.jpg',
        name: 'tovar83456',
        price: 100500,
        currency:'$',
        description: 'wertyui sdfghjk, xcvbnm dfghj'
    },
    56767602: {
        img: 'product-shark.jpg',
        name: 'tovar8345789',
        price: 10778500,
        currency:'$',
        description: 'wertyui sdfghjk, xcvbnm dfghj'
    },
};

const cart = {

};

for (let prod_id in products) {
    const prod_el = document.createElement('div'); // создаем пустой элемент в котором будет товар
    prod_el.classList.add('_col-12', '_col-md-6', '_col-lg-4', 'products-element'); // добавляем классы что бы они красиво были по колонкам


    prod_el.innerHTML = `
        <img class="products-img" src="product-shark.jpg" alt="shark">
        <h4>${products[prod_id].name}</h4>
       <div class="price">${products[prod_id].price+products[prod_id].currency}</div>
       <div class="descr">${products[prod_id].description}</div>
       <div class="button-div"><button class="product-buy" data-id="${prod_id}">Buy</button></div>
    `;

    document.querySelector('.products-list').appendChild(prod_el);   // добавляем блок товара на страницу
}

function addToCart(evt) {
    let element = evt.currentTarget;
    const prod_id = element.dataset.id;
    if (cart[prod_id]) {
        cart[prod_id] += 1;
    } else {
        cart[prod_id] = 1;
    }
    console.log(prod_id, cart[prod_id], products[prod_id].name);
    renderCart()
}

function renderCart(){
    document.querySelector('.cart-list').innerHTML = ''; // чистим корзину на странице
    for (let prod_id in cart) { // пробегаемся по корзине через цикл
        const prod_el = document.createElement('div'); // создаем пустой элемент в котором будет товар
        prod_el.classList.add('_col-12', 'products-element'); // добавляем классы что бы они красиво были по колонкам

        let totalPrice = products[prod_id].price * cart[prod_id]; // сумма конкретного товара

        prod_el.innerHTML = `
        <h4>${products[prod_id].name}</h4>
       <div class="price">${totalPrice + products[prod_id].currency}</div>
    `;

        document.querySelector('.cart-list').appendChild(prod_el);
    }
}

const productsBuy = document.querySelectorAll('.product-buy');

productsBuy.forEach ((btn) => {btn.addEventListener('click', addToCart)})
function showCart() {
    document.querySelector('.cart-list').classList.toggle('_active');
}
document.querySelector('.cart-button').addEventListener('click', showCart)