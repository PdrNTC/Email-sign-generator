// Encontra o botao escrito Gerar Assinatura e define qual a funcao que serao executada quando este for pressionado
const buttonGerar = document.getElementById('btn-gerar')
buttonGerar.onclick = btn;
// Encontra o botao escrito copiar para a area de transferencie e define qual funcao sera executaa quando este for pressionado
const buttonCopiar = document.getElementById('btn-copiar')
buttonCopiar.onclick = copiar;

// Encontra todas as entradas de texto
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const celularInput = document.getElementById('cel');
const emailInput = document.getElementById('email');
const cargosInput = document.getElementById('cargos');

// Encontra todas as areas que serao preenchidas
// (os campos na assinatura)
const nomeCompletoField = document.getElementById('nome-assinatura');
const celularField = document.getElementById('numero-assinatura');
const emailField = document.getElementById('email-assinatura');
const cargoField = document.getElementById('cargo-assinatura');

// Define a funcao que sera executada quando o botao for pressionado
function btn() {
  // 1 - Salva as informacoes em variaveis
  var nome = nomeInput.value;
  var sobrenome = sobrenomeInput.value;
  var celular = celularInput.value;
  var email = emailInput.value;
  var cargo = cargosInput.options[cargosInput.selectedIndex].value;

  // 2 - Edita algumas das entradas, pra manter um padrao
  let nomeCompleto = nome.trim() + ' ' + sobrenome.trim()
  let celularEditado = editaCelular(celular.trim())
  let emailEditado = checkEmail(email);
  
  // 3 - Preenche os campos com os valores encontrados
  nomeCompletoField.innerHTML = primeirasMaiusculas(nomeCompleto);
  celularField.innerHTML = celularEditado;
  emailField.innerHTML = emailEditado;
  cargoField.innerHTML = cargo;
  
  // 4 - Preenche as informcoes de links nos campos necessarios
  celularField.setAttribute('href', `tel:${celularEditado}`);
  emailField.setAttribute('href', `mailto:${email}`);
}

// Define funcao que deixa as primeiras letras do nome Maiusculas
function primeirasMaiusculas(nome) {
  try {

    // Primeiro separamos o nome completo em partes (que sao separadas pelos espacos)
    // ex: diego ferreira - se torna - [diego] [ferreira]
    sentence = nome.toLowerCase().split(" ");
    // Depois iteramos em cada pedaco
    // Pegando a letra 1 (index = 0) e transformando em maiuscula
    // Depois juntando o resto do pedaco
    // ex: [diego] -> d | iego -> D | iego -> [Diego]
    for (let i = 0; i < sentence.length; i++) {
      let primeiraLetra = sentence[i][0].toUpperCase();
      let resto = sentence[i].slice(1); // slice nesse caso retorna o resto, depois da letra 1
      sentence[i] = primeiraLetra + resto;
    }
    // Por fim, retornamos a juncao dos pedacos
    return sentence.join(" ");
  } catch(err) {
    return ''
  }
}

function editaCelular(cel) {
  try {
    // 1 - Retira os espacos e simbolos
    cel = cel.replace(/ /g, '');
    cel = cel.replace(/\(/g, '');
    cel = cel.replace(/\)/g, '');
    cel = cel.replace(/\-/g, '');
    //2 - Confere se tem exatamente 11 numeros
    let n = cel.length;
    var editado = ''
    if (n === 11) {
      // Se sim, retorna o numero no padrao: 99 99999 9999
      editado = cel.slice(0, 2) + ' ' + cel.slice(2, 3) + '' + cel.slice(3, 7) + ' ' + cel.slice(7)
      return editado
    } else {
      // Senao, mostra um alerta de erro
      alert('Coloque o telefone no formato 12 12345 1234 (com 11 numeros)');
      return ''
    }
  } catch(err) {}
}

// Define funcao que confere se o email e @solucaut
function checkEmail(email) {
  if (email.includes('@solucaut.com.br')) {
    return email;
  } else {
    alert('Voce nao esta usando o email da Solucaut...');
    return ''
  }
}

// Define funcao para copiar para a area de transferencia
function copiar() {
  var area = document.getElementById("assinatura-div");
  // Para funcionar em todos os navegadores:
  if(document.body.createTextRange) {
    // Para os mais antigos
    var range = document.body.createTextRange();
    range.moveToElementText(area);
    range.select();
    document.execCommand("Copy");
    alert("Copiado para a area de tranferencia");
  } else if(window.getSelection) {
    // Para os outros
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(area);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    alert("Copiado para a area de tranferencia");
  }
}

function copyClipboard() {
  var elm = document.getElementById("assinatura-div");
  // for Internet Explorer
  if(document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");
    alert("Copied div content to clipboard");
  }
  else if(window.getSelection) {
    // other browsers
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    alert("Copied div content to clipboard");
  }
}
