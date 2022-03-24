function pegarVariaveis(){
  var dados = new Array();
    dados['nome'] = document.querySelector('.contato__input[name=nome]').value;
    dados['telefone'] = document.querySelector('.contato__input[name=telefone]').value;
    dados['email'] = document.querySelector('.contato__input[name=email]').value;
    dados['endereco'] = document.querySelector('.contato__input[name=endereco]').value;
    dados['interesse'] = document.querySelector('.contato__input[name=interesse]').value;
    dados['mensagem'] = document.querySelector('.contato__mensagem').value;

  return dados;
}

function checarConteudo(conteudo){
  if(
    conteudo['nome']=='' ||
    conteudo['telefone']=='' ||
    conteudo['interesse']=='' ||
    conteudo['mensagem']==''
  ){
    alert('Preencha ao menos, nome, telefone, interesse e mensagem');
    return false;
  }

  else{
    return true;
  }
}

function enviarWhatsapp(){
  var destinatario = "5513997749141";

  var conteudo = pegarVariaveis();
  var conteudoChecado = checarConteudo(conteudo);

  if(conteudoChecado==true){
    var texto = "Contato de *"+conteudo['nome']+"* \n"+conteudo['interesse']+"\n\n"+conteudo['mensagem']+"\n\nTelefone: "+conteudo['telefone']+"\nE-Mail: "+conteudo['email']+"\nEndereço: "+conteudo['endereco'];
    texto = window.encodeURIComponent(texto);
    
    window.open("https://api.whatsapp.com/send?phone=" + destinatario + "&text=" + texto, "_blank");
    //Obs.. use "_system", no lugar de blank, caso vocÃª esteja usando Phonegap / Cordova / Ionic ou qualquer um baseado em webview;
  }else{
    conteudo['nome'].focus;
  }
  
  
}
