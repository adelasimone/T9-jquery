<<<<<<< HEAD
$(document).ready(function() {

    $('p').html(`Olá é igual a 
    <span class="cor">Hello</span>
    <strong>Darkness</strong>
    `
    );

    $('li').addClass("margin")

    $('li').removeClass("item1")


    $("p").click(function() {
        $(this).toggleClass("destaque")
    })
=======
$(document).ready(function () {


    // P's recebeam esse html "span" que criei dentro do P e a classe ja etsa no css/style
    $('p').html(`Olá é igual a 
    
    <span class="cor">Hello</span>
    
    <strong>Darkness</strong>`)

    // add classe ja existente no sttyle/css
    $('li').addClass('margin')

    // excluir a classe no item 1
    $('li').removeClass('item1')

    $('p').click(function () {
        // this == algo que quando eu clico "aquele q foi clicado 
        // eu quero q receba a classs destaque liga e desliga-toggle"
        $(this).toggleClass('destaque')
    })

>>>>>>> 812b66b7696b41dc10a40292491639bd1d7de1f7
})