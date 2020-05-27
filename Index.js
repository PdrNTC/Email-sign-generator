// Encontra o botao escrito Gerar Assinatura e define qual a funÃ§Ã£o queserÃ¡ executada quando este for pressionado
const buttonGerar = document.getElementById('btn-gerar')
buttonGerar.onclick = btn;

// Encontra todas as entradas de texto
const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const celularInput = document.getElementById('cel');
const emailInput = document.getElementById('email');
const cargosInput = document.getElementById('cargos');

// Encontra todas as areas que serÃ£o preenchidas
// (os campos na assinatura)
const nomeCompletoField = document.getElementById('nome-assinatura');
const celularField = document.getElementById('numero-assinatura');
const emailField = document.getElementById('email-assinatura');
const cargoField = document.getElementById('cargo-assinatura');

// Define a funÃ§Ã£o que serÃ¡ executada quando o botÃ£o for pressionado
function btn() {
  // 1 - Salva as informaÃ§Ãµes em variaveis
  var nome = nomeInput.value;
  var sobrenome = sobrenomeInput.value;
  var celular = celularInput.value;
  var email = emailInput.value;
  var cargo = cargosInput.options[cargosInput.selectedIndex].value;

  // 2 - Edita algumas das entradas, pra manter um padrÃ£o
  let nomeCompleto = nome.trim() + ' ' + sobrenome.trim()
  let celularEditado = editaCelular(celular.trim())
  let emailEditado = checkEmail(email);
  
  // 3 - Preenche os campos com os valores encontrados
  nomeCompletoField.innerHTML = primeirasMaiusculas(nomeCompleto);
  celularField.innerHTML = celularEditado;
  emailField.innerHTML = emailEditado;
  cargoField.innerHTML = cargo;
  
  // 4 - Preenche as informaÃ§Ãµes de links nos campos necessÃ¡rios
  celularField.setAttribute('href', `tel:${celularEditado}`);
  emailField.setAttribute('href', `mailto:${email}`);
}

// Define funÃ§Ã£o que deixa as primeiras letras do nome Maiusculas
function primeirasMaiusculas(nome) {
  try {

    // Primeiro separamos o nome completo em partes (que sÃ£o separadas pelos espaÃ§os)
    // ex: diego ferreira - se torna - [diego] [ferreira]
    sentence = nome.toLowerCase().split(" ");
    // Depois iteramos em cada pedaÃ§o
    // Pegando a letra 1 (index = 0) e transformando em maiuscula
    // Depois juntando o resto do pedaÃ§o
    // ex: [diego] -> d | iego -> D | iego -> [Diego]
    for (let i = 0; i < sentence.length; i++) {
      let primeiraLetra = sentence[i][0].toUpperCase();
      let resto = sentence[i].slice(1); // slice nesse caso retorna o resto, depois da letra 1
      sentence[i] = primeiraLetra + resto;
    }
    // Por fim, retornamos a junÃ§ao dos pedaÃ§os
    return sentence.join(" ");
  } catch(err) {
    return ''
  }
}

function editaCelular(cel) {
  try {
    // 1 - Retira os espaÃ§os e simbolos
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
      // SenÃ£o, mostra um alerta de erro
      alert('Coloque o telefone no formato 12 12345 1234 (com 11 numeros)');
      return ''
    }
  } catch(err) {}
}

// Define funÃ§Ã£o que confere se o email Ã© da solucaut
function checkEmail(email) {
  if (email.includes('@solucaut.com.br')) {
    return email;
  } else {
    alert('VocÃª nÃ£o estÃ¡ usando o email da Solucaut...');
    return ''
  }
}
