var fotosServico = document.querySelectorAll('.servico__fotos');

fotosServico.forEach(quadro => {
  var lista = quadro.querySelector('.servico__listaFotos');
  var fotoPrincipal = quadro.querySelector('.servico__foto');

  lista.addEventListener('click',function(event){
    var fotoClicada = event.target.style.backgroundImage;
    fotoPrincipal.style.backgroundImage = fotoClicada;
  });
});