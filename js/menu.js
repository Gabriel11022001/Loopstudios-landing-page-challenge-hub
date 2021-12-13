let botao = document.querySelector('.cabecalho__navegacao__botao-controla-menu');
let menu = document.querySelector('.cabecalho__navegacao');
botao.addEventListener('click', function () {
    menu.classList.toggle('menu-ativo');
});