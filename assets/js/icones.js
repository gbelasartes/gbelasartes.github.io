function criarPath(elemento){
  //viewbox padrÃ£o
  var viewbox="0 0 92 92";
  var enableBackground="new 0 0 92 92";
  
  if(elemento=='instagram'){
    var pathIcone = document.createElementNS('http://www.w3.org/2000/svg','path');
    pathIcone.setAttribute('id','XMLID_1456_');
    pathIcone.setAttribute('d','M10.75 0.399994C5.06874 0.399994 0.399994 5.06249 0.399994 10.75V25.25C0.399994 30.9312 5.06249 35.6 10.75 35.6H25.25C30.9312 35.6 35.6 30.9375 35.6 25.25V10.75C35.6 5.06874 30.9375 0.399994 25.25 0.399994H10.75ZM10.75 3.59999H25.25C29.2062 3.59999 32.4 6.79374 32.4 10.75V25.25C32.4 29.2062 29.2062 32.4 25.25 32.4H10.75C6.79374 32.4 3.59999 29.2062 3.59999 25.25V10.75C3.59999 6.79374 6.79374 3.59999 10.75 3.59999ZM27.45 7.09999C26.6437 7.09999 26 7.74374 26 8.54999C26 9.35624 26.6437 9.99999 27.45 9.99999C28.2562 9.99999 28.9 9.35624 28.9 8.54999C28.9 7.74374 28.2562 7.09999 27.45 7.09999ZM18 8.39999C12.7187 8.39999 8.39999 12.7187 8.39999 18C8.39999 23.2812 12.7187 27.6 18 27.6C23.2812 27.6 27.6 23.2812 27.6 18C27.6 12.7187 23.2812 8.39999 18 8.39999ZM18 11.6C21.5562 11.6 24.4 14.4437 24.4 18C24.4 21.5562 21.5562 24.4 18 24.4C14.4437 24.4 11.6 21.5562 11.6 18C11.6 14.4437 14.4437 11.6 18 11.6Z');

    viewbox="0 0 36 36";
  }
  else if(elemento=='email'){
    var pathIcone = document.createElementNS('http://www.w3.org/2000/svg','path');
    pathIcone.setAttribute('id','XMLID_1456_');
    pathIcone.setAttribute('d','M39.2 29.4H0.799988V0.600006H39.2V29.4ZM2.39999 3.03681V27.8H37.6V3.03681L20.0016 19.0368L2.39999 3.03681ZM36.1424 2.20001H3.86079L20.0016 16.8736L36.1424 2.20001V2.20001Z');

    viewbox="0 0 40 30";
  }
  else if(elemento=='whatsapp'){
    var pathIcone = document.createElementNS('http://www.w3.org/2000/svg','path');
    pathIcone.setAttribute('id','XMLID_1456_');
    pathIcone.setAttribute('d','M30.7559 5.25586C27.3691 1.86914 22.8691 0 18.0762 0C8.19727 0 0.152344 8.03906 0.152344 17.918C0.146484 21.0762 0.972657 24.1582 2.54297 26.877L0 36.1641L9.50391 33.668C12.1172 35.0977 15.0703 35.8477 18.0703 35.8535H18.0762C27.9551 35.8535 35.9941 27.8145 36 17.9297C36 13.1426 34.1367 8.64258 30.7559 5.25586ZM18.0762 32.8242H18.0703C15.3984 32.8242 12.7734 32.1035 10.4883 30.75L9.94336 30.4277L4.30078 31.9043L5.80664 26.4082L5.45508 25.8457C3.96094 23.4727 3.17578 20.7305 3.17578 17.918C3.17578 9.70898 9.86133 3.0293 18.082 3.0293C22.0605 3.0293 25.7988 4.58203 28.6113 7.39453C31.4238 10.2129 32.9707 13.9512 32.9707 17.9297C32.9707 26.1445 26.2852 32.8242 18.0762 32.8242ZM26.2441 21.668C25.7988 21.4453 23.5957 20.3613 23.1855 20.2148C22.7754 20.0625 22.4766 19.9922 22.1777 20.4375C21.8789 20.8887 21.0234 21.8965 20.7598 22.1953C20.502 22.4883 20.2383 22.5293 19.793 22.3066C19.3418 22.084 17.9004 21.6094 16.1895 20.0801C14.8594 18.8965 13.957 17.4258 13.6992 16.9805C13.4355 16.5293 13.6699 16.2891 13.8926 16.0664C14.0977 15.8672 14.3438 15.5449 14.5664 15.2812C14.7891 15.0234 14.8652 14.8359 15.0176 14.5371C15.1641 14.2383 15.0879 13.9746 14.9766 13.752C14.8652 13.5293 13.9688 11.3203 13.5938 10.4238C13.2305 9.55078 12.8613 9.67383 12.5859 9.65625C12.3281 9.64453 12.0293 9.64453 11.7305 9.64453C11.4316 9.64453 10.9453 9.75586 10.5352 10.207C10.125 10.6523 8.9707 11.7363 8.9707 13.9395C8.9707 16.1426 10.5762 18.2754 10.7988 18.5742C11.0215 18.8672 13.957 23.3906 18.4512 25.3301C19.5176 25.793 20.3496 26.0684 21 26.2734C22.0723 26.6133 23.0508 26.5664 23.8242 26.4551C24.6855 26.3262 26.4727 25.3711 26.8477 24.3223C27.2168 23.2793 27.2168 22.3828 27.1055 22.1953C26.9941 22.0078 26.6953 21.8965 26.2441 21.668Z');

    viewbox="0 0 36 36";
  }
  else if(elemento=='sandwich'){
    var pathIcone = document.createElementNS('http://www.w3.org/2000/svg','path');
    pathIcone.setAttribute('id','XMLID_1456_');
    pathIcone.setAttribute('d','M32 27H4C3.73478 27 3.48043 26.8946 3.29289 26.7071C3.10536 26.5196 3 26.2652 3 26C3 25.7348 3.10536 25.4804 3.29289 25.2929C3.48043 25.1054 3.73478 25 4 25H32C32.2652 25 32.5196 25.1054 32.7071 25.2929C32.8946 25.4804 33 25.7348 33 26C33 26.2652 32.8946 26.5196 32.7071 26.7071C32.5196 26.8946 32.2652 27 32 27Z M32 19H4C3.73478 19 3.48043 18.8946 3.29289 18.7071C3.10536 18.5196 3 18.2652 3 18C3 17.7348 3.10536 17.4804 3.29289 17.2929C3.48043 17.1054 3.73478 17 4 17H32C32.2652 17 32.5196 17.1054 32.7071 17.2929C32.8946 17.4804 33 17.7348 33 18C33 18.2652 32.8946 18.5196 32.7071 18.7071C32.5196 18.8946 32.2652 19 32 19Z M32 11H4C3.73478 11 3.48043 10.8946 3.29289 10.7071C3.10536 10.5196 3 10.2652 3 10C3 9.73478 3.10536 9.48043 3.29289 9.29289C3.48043 9.10536 3.73478 9 4 9H32C32.2652 9 32.5196 9.10536 32.7071 9.29289C32.8946 9.48043 33 9.73478 33 10C33 10.2652 32.8946 10.5196 32.7071 10.7071C32.5196 10.8946 32.2652 11 32 11Z');

    viewbox="0 0 36 36";
  }
  else if(elemento=='facebook'){
    var pathIcone = document.createElementNS('http://www.w3.org/2000/svg','path');
    pathIcone.setAttribute('id','XMLID_1456_');
    pathIcone.setAttribute('d','M3.59999 0.399994C1.84999 0.399994 0.399994 1.84999 0.399994 3.59999V32.4C0.399994 34.15 1.84999 35.6 3.59999 35.6H32.4C34.15 35.6 35.6 34.15 35.6 32.4V3.59999C35.6 1.84999 34.15 0.399994 32.4 0.399994H3.59999ZM3.59999 3.59999H32.4V32.4H24.1V21.6H28.25L28.85 16.8H24.1V13.7C24.1 12.3 24.4437 11.35 26.45 11.35H29.05V6.99999C28.6062 6.94374 27.0687 6.84999 25.3 6.84999C21.6125 6.84999 19.1 9.06874 19.1 13.2V16.8H14.9V21.6H19.1V32.4H3.59999V3.59999Z');

    viewbox="0 0 36 36";
  }
  else if(elemento=='localizacao'){
    var pathIcone = document.createElementNS('http://www.w3.org/2000/svg','path');
    pathIcone.setAttribute('id','XMLID_1456_');
    pathIcone.setAttribute('d','M14.7609 1.74681C11.5642 -0.581618 7.43388 -0.581618 4.23909 1.74681C0.121864 4.74284 -1.19617 10.5813 1.17367 15.3262L9.5 32L17.8263 15.3262C20.1962 10.5813 18.88 4.74284 14.7609 1.74681ZM16.1821 14.3473L9.50187 27.7261L2.81981 14.3473C0.918687 10.5383 1.97424 5.85483 5.27965 3.45064C6.56207 2.51681 8.03009 2.04785 9.5 2.04785C10.9699 2.04785 12.4379 2.51476 13.7203 3.44859C17.0258 5.85483 18.0832 10.5383 16.1821 14.3473Z M9.5 4.26562C6.91642 4.26562 4.81281 6.56333 4.81281 9.3853C4.81281 12.2073 6.91642 14.505 9.5 14.505C12.0836 14.505 14.1872 12.2073 14.1872 9.3853C14.1872 6.56333 12.0855 4.26562 9.5 4.26562ZM9.5 12.4571C7.94947 12.4571 6.68768 11.0789 6.68768 9.3853C6.68768 7.69171 7.94947 6.31349 9.5 6.31349C11.0505 6.31349 12.3123 7.69171 12.3123 9.3853C12.3123 11.0789 11.0505 12.4571 9.5 12.4571Z');

    viewbox="0 0 36 36";
  }
  
  
  
  return [pathIcone, viewbox, enableBackground];
}

window.onload = function () {
     
  var icones=document.querySelectorAll('.icone');
  
  var i = 0;
  while( i < icones.length){
    var nomeIcone = icones[i].id;

    var pathIcone = criarPath(nomeIcone);
    
    icones[i].setAttribute('viewBox',pathIcone[1]);
    icones[i].setAttribute('enable-background',pathIcone[2]);
    icones[i].append(pathIcone[0]);
    
    i++
  }
  
}