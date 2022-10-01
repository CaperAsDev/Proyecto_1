const mobile_side_menu_icon = document.querySelector('img.menu');
const shopping_cart_icon = document.querySelector('.navbar-shopping-cart');
const product_detail_close_icon = document.querySelector('.product-detail-close');

const navbar_email = document.querySelector('.navbar-email'); 
const account_menu = document.querySelector('.account-menu'); 
const mobile_side_menu_container = document.querySelector('.mobile-menu-container');
const order_detail_menu = document.querySelector('.order-detail');
const main_container = document.querySelector('.main-container');

const product_detail = document.querySelector('#product-detail-aside');
const product_detail_name = document.querySelector('.product-info-name');
const product_detail_img = document.querySelector('.product-info-img');
const product_detail_price = document.querySelector('.product-info-price');


// !Aparecer menu account en desktop

navbar_email.addEventListener('click', () => {
    if(!account_menu.classList.contains('inactive')){
        cerrarVentanas();
    }else{
        cerrarVentanas();
        account_menu.classList.remove('inactive');
    }
});

// !Aparece menu lateral en mobile

mobile_side_menu_icon.addEventListener('click', ()=>{
    if(!mobile_side_menu_container.classList.contains('inactive')){
        cerrarVentanas();
    }else{
        cerrarVentanas();
        mobile_side_menu_container.classList.remove('inactive');
    }
});

// !Aparece menu aside de carro de compra(my order)

shopping_cart_icon.addEventListener('click', ()=>{
    if(!order_detail_menu.classList.contains('inactive')){
        cerrarVentanas();
    }else{
        cerrarVentanas();
        order_detail_menu.classList.remove('inactive');
    }
});
// !Cerrar menus al dar click en otra zona

function cerrarVentanas(){
    account_menu.classList.add('inactive')
    order_detail_menu.classList.add('inactive');
    mobile_side_menu_container.classList.add('inactive');
    product_detail.classList.add('inactive');
};

// !Creando catalogo home
const cardsContainer = document.querySelector('.cards-container');

const productList = [];
productList.push({
    name: 'bike',
    price: 200,
    img: 'https://images.pexels.com/photos/611229/bike-pink-paris-bicycle-611229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'TV',
    price: 100,
    img: 'https://images.pexels.com/photos/333984/pexels-photo-333984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    price: 600,
    img: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr){

    for ( product of productList) {
   /*      
   !Este metodo funcionaria si no tuviera que agregar el event listener
   cardsContainer.innerHTML += `
            <div class="product-card">
                <img src=${product.img} class="product-img" alt="">
                <div class="bottom-section">
                    <div class="product-info">
                        <p>$${product.price}</p>
                        <p>${product.name}</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>
        `; */

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img = document.createElement('img');
        const bottomSection = document.createElement('div');
        const productInfo = document.createElement('div');
        const priceP = document.createElement('p');
        const nameP = document.createElement('p');
        const iconContainer = document.createElement('figure');
        const iconAddToCart = document.createElement('img');

        img.setAttribute('src', product.img);
        img.addEventListener('click', openProductDetail);
        productCard.appendChild(img); 
        productCard.appendChild(bottomSection);

        bottomSection.classList.add('bottom-section');
        bottomSection.appendChild(productInfo);
        bottomSection.appendChild(iconContainer);

        productInfo.classList.add('product-info');
        productInfo.appendChild(priceP);
        productInfo.appendChild(nameP);
        
        priceP.innerText = '$' + product.price;

        nameP.innerText =product.name;

        iconContainer.appendChild(iconAddToCart);

        iconAddToCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        cardsContainer.appendChild(productCard);
    }
};
renderProducts(productList);

// !Vamos a hacer la interacción para ver el detalle de cada producto(product-card)
product_detail_close_icon.addEventListener('click', closeProductDetail);

function closeProductDetail(){

    product_detail.classList.add('inactive');
};
function openProductDetail (){
    cerrarVentanas();
    console.log(this);
    product_detail_img.setAttribute('src',this.src);
    product_detail_name.innerText = this.nextSibling.firstChild.children[1].innerText;
    product_detail_price.innerText = this.nextSibling.firstChild.children[0].innerText;
    product_detail.classList.remove('inactive');
};