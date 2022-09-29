const navbar_email = document.querySelector('.navbar-email'); 
const account_menu = document.querySelector('.account-menu'); 
const mobile_side_menu_icon = document.querySelector('img.menu')
const mobile_side_menu_container = document.querySelector('.mobile-menu-container');
const shopping_cart_icon = document.querySelector('.navbar-shopping-cart');
const order_detail_menu = document.querySelector('.product-detail');
const main_container = document.querySelector('.main-container');

// !Aparecer menu account en desktop

navbar_email.addEventListener('click', () => {
    order_detail_menu.classList.add('inactive')
    account_menu.classList.toggle('inactive');
});

// !Aparece menu lateral en mobile

mobile_side_menu_icon.addEventListener('click', ()=>{
    order_detail_menu.classList.add('inactive')
    mobile_side_menu_container.classList.toggle('inactive');
});

// !Aparece menu aside de carro de compra(my order)

shopping_cart_icon.addEventListener('click', ()=>{
    mobile_side_menu_container.classList.add('inactive');
    account_menu.classList.add('inactive');
    order_detail_menu.classList.toggle('inactive');
});
// !Cerrar menus al dar click en otra zona

main_container.addEventListener('click', ()=>{
    account_menu.classList.add('inactive')
    order_detail_menu.classList.add('inactive');
    mobile_side_menu_container.classList.add('inactive');
})

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
    img: 'https://images.pexels.com/photos/611229/bike-pink-paris-bicycle-611229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});
productList.push({
    name: 'Laptop',
    price: 600,
    img: 'https://images.pexels.com/photos/611229/bike-pink-paris-bicycle-611229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

function renderProducts(arr){

    for ( product of productList) {
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
        `;
    /*     const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const img = document.createElement('img');
        const bottomSection = document.createElement('div');
        const productInfo = document.createElement('div');
        const priceP = document.createElement('p');
        const nameP = document.createElement('p');
        const iconContainer = document.createElement('figure');
        const iconAddToCart = document.createElement('img');

        img.setAttribute('src', product.img);
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

        cardsContainer.appendChild(productCard); */
    }
};
renderProducts(productList);