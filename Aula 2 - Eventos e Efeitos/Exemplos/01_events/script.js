$(document).ready(function () {
    // evento disparado
    $('h2').click(function () {
        // aquele elemento que esta sendo afetado pelo evento
        $(this).css({
            'background-color': '#000',
            'color': '#fff'
            // 'cursor': 'pointer'
        })

        $('h3').dblclick(function() {
            alert('Fui clicado 2 vezes')
            $(this).hide('slow')
            $(this).show('slow')
        })
    })

    // $('#div').mouseenter(function() {
    //     alert('Vc entrou numa div!')
    // })

    // $('#div').mouseleave(function() {
    //     alert('VOLTAAAA!!!!')
    // })

    $('input').focus(function() {
        $(this).css('background-color', '#ccc')
    })

    $('input').blur(function() {
        $(this).css('background-color', 'yellow')
    })
})