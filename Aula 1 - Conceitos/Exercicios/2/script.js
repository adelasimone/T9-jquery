/*
    Liga e Desliga - Versão JQuery

  - Altere o background do body, o título da página e o gif da imagem quando o usuário clicar no botão
  - Você pode criar uma função "changeBg" que será responsável pela lógica dessa alteração
  - Extra: Modifiquem o estilo da página para ela ficar com a sua cara!
*/

<<<<<<< HEAD
//jquery

$(document).ready(function() {
=======
$(document).ready(function () {
>>>>>>> 812b66b7696b41dc10a40292491639bd1d7de1f7

  const bodyColor = $('body')
  bodyColor.css('background', 'yellow')

  function changeBg() {
    if(bodyColor[0].style.background == 'yellow') {
<<<<<<< HEAD
      $('body').css('background', 'black');
      $('h1')
        .css('color', 'white')
        .text('Desligado')
      $('.imagem').attr('src', "https://media.giphy.com/media/N4a7e1ftdbQWc/giphy.gif" )
    } else {
      $('body').css('background', 'yellow');
      $('h1')
        .css('color', 'black')
        .text('Ligado')
      $('.imagem').attr('src', "https://media.giphy.com/media/3KVRMtLXfORVosk6TW/giphy.gif" )

    }
  }

$('#botao').click(function() {
    changeBg()
})

//ou

$('#botao').click(changeBg)

})
=======
      $('body').css('background', '#fff');
      $('h1')
        .css('color', '#000')
        .text('Ligado');
      $('.imagem').attr('src', "https://media.giphy.com/media/xT9IgKgt9iDoLOQafm/giphy.gif");
    } else {
      $('body').css('background', '#000');
      $('h1')
        .css('color', '#fff')
        .text('Desligado');
      $('.imagem').attr('src', "https://media.giphy.com/media/xT9IgKgt9iDoLOQafm/giphy.gif");
    }
  }
  // $('#botao').click(changeBg)
  $('#botao').click(function () {
    changeBg()
  })
})

// $('document').ready(function () {

//   $('#botao').click(function () {

//     $('body').css('background', '#000')
//     $('h1')
//       .text('Desligado')
//       .css('color', '#fff')
//     $('.imagem').attr("src", "https://media.giphy.com/media/xT9IgKgt9iDoLOQafm/giphy.gif")
//   })
// })
>>>>>>> 812b66b7696b41dc10a40292491639bd1d7de1f7
