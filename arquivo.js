document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('hamburguer-menu');
    const navbarItems = document.querySelector('.navbar-itens');


    mobileMenu.addEventListener('click', function () {
        navbarItems.classList.toggle('show');

        // Adiciona um ouvinte de evento para remover a classe após a transição completa
        navbarItems.addEventListener('transitionend', function removeTransition() {
           navbarItems.removeEventListener('transitionend', removeTransition);

        if (!navbarItems.classList.contains('show')) {
            navbarItems.style.transition = 'none';
            void navbarItems.offsetWidth;
            navbarItems.style.transition = '';
        }
    }, {once: true});
});
});