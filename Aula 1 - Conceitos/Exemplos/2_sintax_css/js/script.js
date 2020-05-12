<<<<<<< HEAD
$(document).ready(function() {

//chamando pela tag
$('h1').css('color', '#f66')
$('h1').css('font-size', '50px')
$('h1').hide();
$('h1').delay('2000'); //2000ms = 2s
$('h1').fadeIn('slow');
$('h1').text('Olár menines')

//encadeamento de bloco
$('h1')
    .css('color', '#f66')
    .hide()
    .delay('5000')
    .fadeIn('slow')
    .text('Surpresa!')

//chamando pela classe
$('.item1').click(function() {
    $('body').css('background', 'blue')
    $('h1').css('color', "#fff")
});


//obj 
$('li').css({
    color: 'red', 
    display: 'flex', 
    padding: '20px',
})

//chamando por ID
$('#item2').css('color', 'yellow')

$('*').css('margin-left', '200px')

$('h1, #item2, .item1').css('border-bottom', '3px solid blue')

//exemplos css de parentesco
$('div > p')

})

=======
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
>>>>>>> 812b66b7696b41dc10a40292491639bd1d7de1f7
