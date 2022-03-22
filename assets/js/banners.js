var banners = document.querySelector('.contem__banners');

function quebrarSeletorBanner(id){
  var bannerSelecionado = id.split('_');
  return bannerSelecionado[1];
}

function mudarBanner(atual,proximo,proximoId){
  atual.classList.remove('banner-selecionado');
  proximo.classList.add('banner-selecionado');

  var margemSelecionada = (proximoId*-100)+100;
  
  banners.style.marginLeft = margemSelecionada+'%';

  
  
}

function mudarAutomatico(){
  var atual = document.querySelector('.banner-selecionado');

  
  var idAtual = quebrarSeletorBanner(atual.id);

  if(idAtual == '4'){
    var proximoId = 1;
  }else{
    var proximoId = parseInt(idAtual) + 1;
  }
  

  var proximo = document.querySelector('#banner_'+proximoId)

  mudarBanner(atual,proximo,proximoId);
}

// //Passar Automaticamente
setInterval(mudarAutomatico, 10000);