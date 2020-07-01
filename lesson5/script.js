const app = new Vue({
    el: '#shme',
    data: {
        searchLine: '',
        isVisibleCart: false,
        cart: [],
        products: {
            2345243: {
                name: 'trysi',
                color: 'red',
                price: 100,
                currency: '$',
                img: 'product.jpg'
            },
            6667868433: {
                name: 'trysi',
                color: 'red',
                price: 100,
                currency: '$',
                img: 'product.jpg'
            },
            8567857: {
                name: 'trysi',
                color: 'red',
                price: 100,
                currency: '$',
                img: 'product.jpg'
            },
            232332456: {
                name: 'trysi',
                color: 'red',
                price: 100,
                currency: '$',
                img: 'product.jpg'
            },
            25225345532: {
                name: 'trysi',
                color: 'red',
                price: 100,
                currency: '$',
                img: 'product.jpg'
            },
        }
    },
    methods: {
        FilterGoods() {
            for (let id in this.products) {
                let reg = new RegExp(this.searchLine);
                if (reg.test(this.products[id].name)) {
                    console.log(this.products[id].name, this.products[id].price);
                }
            }

        },
        openCart(){
            this.isVisibleCart = !this.isVisibleCart;
        },
        addToCart(product){
            this.cart.push(product);
        }
    }
});