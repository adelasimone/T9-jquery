$(document).ready(function () {
    let elementoComAcao = $('#aguardandoAcao')

    $('#hideElement').click(function () {
        // elementoComAcao.hide('slow')
        // elementoComAcao.hide('fast')
        // elementoComAcao.hide(5000)
    })

    $('#showElement').click(function () {
        // elementoComAcao.show('slow')
        // elementoComAcao.show('fast')
        // elementoComAcao.show(5000)
    })

    $('#toggleElement').click(function () {
        // elementoComAcao.toggle('slow')
        // elementoComAcao.toggle('fast')
        elementoComAcao.toggle(5000)
    })

    $('input').keyup(function() {
        $(this).val()

        if($(this).val() == 'hide') {
            elementoComAcao.hide('slow')
        }
        if($(this).val() == 'show') {
            elementoComAcao.show('slow')
        }
        if($(this).val() == 'toggle') {
            elementoComAcao.toggle('slow')
        }
    })
})
