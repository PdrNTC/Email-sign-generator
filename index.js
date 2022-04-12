// Encontra as inputs
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');

desenharImagem();

// adiciona um metodo que realiza uma funcao quando um eventoacontece
// no caso o evento chama-se: "input" e ocorre quando o texto digitado se altera
// ou quando o valor selecionado altera
nomeInput.addEventListener('input', () => atualizaNome())
sobrenomeInput.addEventListener('input', () => atualizaNome())

function atualizaNome() {
  // recebe as informacoes das inputs
  var nome = nomeInput.value;
  var sobrenome = sobrenomeInput.value;
  let nomeCompleto = nome + ' ' + sobrenome

  desenharImagem(nomeCompleto); 
}

function desenharImagem(name) {
	if(!name) name = "Preencha o nome"
    	var canvas = document.getElementById('idCanvas');
    	var context = canvas.getContext('2d');
   
	var imageObj = new Image();

  	imageObj.onload = function() {
    		context.drawImage(imageObj, 0, 0);
    		context.font = "35px Arial";
    		context.fillStyle = "black";
    		context.fillText(name, 290, 110);
	    
    		var canvas = document.getElementById('idCanvas');
   	 	var dataURL = canvas.toDataURL();

		// adiciona a imagem no botao de download
		const downloadButton = document.querySelector(".download-image")
    		downloadButton.href = `data:application/octet-stream;${dataURL}`
	}
	imageObj.setAttribute('crossOrigin', 'anonymous');
	// Esse é o atributo que você vai alterar para colocar a sua imagem de assinatura
	imageObj.src = "https://raw.githubusercontent.com/Tashima42/Email-sign-generator/canvas/assets/imgs/assinatura-modelo.png";
};
