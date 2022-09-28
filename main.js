const navbar_email = document.querySelector('.navbar-email'); 
const account_menu = document.querySelector('.account-menu'); 

navbar_email.addEventListener('click', toggleAccount_menu)

function toggleAccount_menu(){
    account_menu.classList.toggle('inactive');
};