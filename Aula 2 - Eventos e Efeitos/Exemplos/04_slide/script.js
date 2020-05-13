$(document).ready(function() {

    $('#flip').click(function() {
        $('#painel').slideToggle('fast') // up e down // cima e baixo
    })

    // DOWN--> apresenta/aparece
    $('#button').click(function() {
        $('.div1').slideDown(2000)
        $('.div2').slideDown(4000)
        $('.div3').slideDown(6000)
    })

    // UP ---> desaparece
    $('#button').click(function() {
        $('.div1').slideUp(2000)
        $('.div2').slideUp(4000)
        $('.div3').slideUp(6000)
    })
})