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

function voltarBanner(){
  var atual = document.querySelector('.banner-selecionado');
  var idAtual = quebrarSeletorBanner(atual.id);

  if(idAtual == '1'){
    var proximoId = 4;
  }else{
    var proximoId = parseInt(idAtual) - 1;
  }
  

  var proximo = document.querySelector('#banner_'+proximoId)

  mudarBanner(atual,proximo,proximoId);
}

// //Passar Automaticamente
setInterval(mudarAutomatico, 10000);

//TOQUE NA TELA
var ts_x;
var ts_y;

banners.addEventListener('touchstart', function(e) {
 
  e.preventDefault();
  var touch = e.changedTouches[0];
  ts_x = touch.pageX;
  ts_y = touch.pageY;
  
}, false);

banners.addEventListener('touchend', function(e) {

  if(e.target.className=='banner__botao botao botao-ciano'){
    var enderecoLocal = e.target.firstElementChild.textContent;
    console.log(enderecoLocal);
    local = document.querySelector(enderecoLocal);
    local.scrollIntoView();
  }
  else{
    e.preventDefault();
    var touch = e.changedTouches[0];
    td_x = touch.pageX - ts_x; // deslocamento na horizontal
    td_y = touch.pageY - ts_y; // deslocamento na vertical
    // O movimento principal foi vertical ou horizontal?
    if( Math.max( Math.abs( td_x )) > 100 ) {
        // é horizontal
        if( td_x < 10 ) {
          mudarAutomatico();
        } else if(td_x > 10 ){
          voltarBanner();
        }
        else{
          alert('teste');
        }
    }
    else if( Math.abs(td_y) > 10 ) {
        // é vertical
        if( td_y < 0 ) {
          // cima
          var valorScroll = scrollY + touch.pageY;
          console.log(valorScroll);
          window.scrollTo(0,valorScroll);
        } else {
          // baixo
          window.scrollTo(0,0);
        }
    }
  }

  
}, false);