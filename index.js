const buttonCopiar = document.getElementById('btn-copiar')
buttonCopiar.onclick = copiar;

const nomeInput = document.getElementById('nome');
const sobrenomeInput = document.getElementById('sobrenome');
const celularInput = document.getElementById('celular');
const cargosInput = document.getElementById('cargos');

nomeInput.addEventListener('input', () => btn())
sobrenomeInput.addEventListener('input', () => btn())
celularInput.addEventListener('input', () => btn())
cargosInput.addEventListener('input', () => btn())

const nomeCompletoField = document.getElementById('nome-assinatura');
const celularField = document.getElementById('celular-assinatura');
const cargoField = document.getElementById('cargo-assinatura');

function btn() {
  var nome = nomeInput.value;
  var sobrenome = sobrenomeInput.value;
  var celular = celularInput.value;
  var cargo = cargosInput.options[cargosInput.selectedIndex].value;

  let nomeCompleto = nome + ' ' + sobrenome
  let celularEditado = editaCelular(celular.trim())

  nomeCompletoField.innerHTML = editaNome(nomeCompleto);
  celularField.innerHTML = celularEditado;
  cargoField.innerHTML = cargo;

  celularField.setAttribute('href', `https://wa.me/55${celularEditado.replace(/ /g, '')}`);
}

function editaNome(nome) {
  let palavras = nome.split(' ')
  for (let i = 0; i < palavras.length; i++) {
    palavras[i] = primeirasMaiusculas(palavras[i])
  }
  if (palavras.join(' ') == ' ') {
    return 'Nome Sobrenome'
  }
  return palavras.join(' ')
}

function primeirasMaiusculas(palavra) {
  let n = palavra.length;
  if (n > 1) {
    let primeiraLetra = palavra[0].toUpperCase()
    let resto = palavra.slice(1) //Retorna da letra 1 para frente: "diego".slice(1) = "iego"
    palavra = primeiraLetra + resto;
    return palavra
  } else {
    return palavra.toUpperCase()
  }
}

/* function editaNome(nome) {
  nome = nome.toLowerCase();
  if (nomeInput.value === '' && sobrenomeInput.value === '') {
    return 'Nome Sobrenome'
  } else if (sobrenomeInput.value === '') {
    let editado = primeirasMaiusculas(nome) + '   '
    return editado
  } else if (nomeInput.value === '') {
    return 'Nome ' + primeirasMaiusculas(nome)
  }
}

function primeirasMaiusculas(txt) {
  console.log('asdsad')
  let sentence = txt.toLowerCase().split(" ");
  console.log(sentence)
  let n = sentence.length
  for (let i = 0; i < n; i++) {
    if (sentence[i].length < 0) {
      console.log('aqui')
      console.log(sentence)
      let primeiraLetra = sentence[i][0].toUpperCase();
      let resto = sentence[i].slice(1); // slice nesse caso retorna o resto, depois da letra 1
      sentence[i] = primeiraLetra + resto;
      console.log('em baixo')
      console.log(sentence)
    }
  }
  return sentence.join(" ");
}
 */
function editaCelular(cel) {
  try {
    cel = cel.replace(/ /g, '');
    cel = cel.replace(/\(/g, '');
    cel = cel.replace(/\)/g, '');
    cel = cel.replace(/\-/g, '');
    let n = cel.length;
    if (n === 0) {
      return '99 99999 9999'
    } else if (n < 3) {
      return cel
    } else if (n < 7) {
      return cel.slice(0, 2) + ' ' + cel.slice(2)
    } else if (n <= 11) {
      return cel.slice(0, 2) + ' ' + cel.slice(2, 7) + ' ' + cel.slice(7)
    } else {
      alert('Coloque o telefone no formato 12 12345 1234 (com 11 numeros)')
      return '99 99999 9999'
    }
  } catch (err) { }
}

function copiar() {
  var area = document.getElementById("assinatura-div");
  if (document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(area);
    range.select();
    document.execCommand("Copy");
   // alert("Copiado para a area de tranferencia");
  } else if (window.getSelection) {
    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(area);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    //alert("Copiado para a area de tranferencia");
  }
}

