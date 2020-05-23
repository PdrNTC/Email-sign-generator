var inputNome;

function gerarAssinatura(){
  inputNome = document.querySelector('input[name=nome]').value;

}


var teste = 'Azul';



var linkElement = document.createElement('a');
linkElement.setAttribute('tr', teste);

var textElement = document.createTextNode(teste);
linkElement.appendChild(textElement);

var containerElement = document.querySelector('body div#info');
containerElement.appendChild(linkElement);