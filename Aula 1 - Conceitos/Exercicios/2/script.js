/*
    Liga e Desliga - Versão JQuery

  - Altere o background do body, o título da página e o gif da imagem quando o usuário clicar no botão
  - Você pode criar uma função "changeBg" que será responsável pela lógica dessa alteração
  - Extra: Modifiquem o estilo da página para ela ficar com a sua cara!
*/


// ----- RESOLUÇÃO PROF -----
$(document).ready(function () {
  
  const bodyColor = $('body')
  bodyColor.css('background', 'yellow')
  
  function changeBg() {
    if(bodyColor[0].style.background == 'yellow') {
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

// ----- MINHA RESOLUÇÃO PARCIAL -----
// $('document').ready(function () {

//   $('#botao').click(function () {

//     $('body').css('background', '#000')
//     $('h1')
//       .text('Desligado')
//       .css('color', '#fff')
//     $('.imagem').attr("src", "https://media.giphy.com/media/xT9IgKgt9iDoLOQafm/giphy.gif")
//   })
// })