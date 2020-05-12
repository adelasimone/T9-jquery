$(document).ready(function () {
    $('h1').css('color', '#f66');
    $('h1').css('font-size', '50px'); //muda tamanho da fonte com css no jquery
    // $('h1').hide() // .hide  esconde um elemento
    $('h1').delay('2000'); // delei em milisegundos | 2000=2seg
    // $('h1').togglehide();
    $('h1').fadeIn('slow');
    $('h1').text('Surpresa'); // muda o texto do h1


    // encadeamento de bloco
    $('h1')
        .css('color', '#f66')
        .hide()
        .delay('5000')
        .fadeIn('slow')
        .text('Surpresa')

    // chamando item por classe
    $('.item1').click(function () {
        $('body').css('background', 'blue')
        $('h1').css('color', '#fff')
    })

    // objeto - - - - colocando propiedades em obj que nem no css
    $('li').css({
        color: 'red',
        display: 'flex',
        padding: '20px'
    })

    $('#item2').css('color', 'blueviolet')

    $('*').css('margin-left', '50px')

    $('h1, .item1, #item2').css('border-bottom', '3px solid green')

    // exemplos css processo de parentesco
    $('div > p')
    $('td, th')
})
