var botoes = document.querySelectorAll('.servico__botao');
var secaoContato = document.getElementById('contato');

botoes.forEach(botao => {
  var campoInteresse = document.querySelector('.contato__input[name=interesse]');
  var interesse;

  botao.addEventListener('click',function(event){
    interesse=botao.parentNode.firstElementChild.textContent;
    campoInteresse.value=interesse.trim();

    contato.scrollIntoView({behavior: "smooth"});
  });

});