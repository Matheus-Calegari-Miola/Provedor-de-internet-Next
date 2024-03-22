// aguarda o DOM ser completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o elemento do menu hamburguer pelo seu ID
    const mobileMenu = document.getElementById('hamburguer-menu');
    // Seleciona todos os itens do menu de navegação
    const navbarItems = document.querySelector('.navbar-itens');

    // Adiciona um evento de clique ao menu hamburguer
    mobileMenu.addEventListener('click', function () {
        // Adiciona ou remove a classe 'show' para exibir ou ocultar o menu de navegação
        navbarItems.classList.toggle('show');

        // Adiciona um ouvinte de evento para remover a classe após a transição completa
        navbarItems.addEventListener('transitionend', function removeTransition() {
        // Remove o ouvinte de evento para evitar mútiplas chamadas
           navbarItems.removeEventListener('transitionend', removeTransition);
        // Verifica se a classe 'show' não está mais presente nos itens do menu de navegação
        if (!navbarItems.classList.contains('show')) {
            // Remove a transição para evitar piscar ao esconder o menu de navegação
            navbarItems.style.transition = 'none';
            // Força a reflow (recarregar) para aplicar imediatamente a remoção da transição
            void navbarItems.offsetWidth;
            // Restaura a transição após a remoção da classe 'show'
            navbarItems.style.transition = '';
        }
    }, {once: true}); // Ouvinte de evento será removido após a primeira execução
});
});