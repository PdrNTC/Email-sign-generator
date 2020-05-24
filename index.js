const buttonGerar = document.querySelector('#btn');

const nomeInput = document.querySelector('.forms #nome');
const celularInput = document.querySelector('.forms #cel');
const emailInput = document.querySelector('.forms #email');
const cargosInput = document.querySelector("#cargos");

const nomeField = document.querySelector('.assinatura #nome')
const celularField = document.querySelector('.assinatura #telefone')
const emailField = document.querySelector('.assinatura #email')
const cargoField = document.querySelector('.assinatura #cargo')

var value = cargosInput.options[cargosInput.selectedIndex].value; // get selected option value
var text = cargosInput.options[cargosInput.selectedIndex].text; //get the selected option text
console.log({ value: value, text: text});

function btn() {

  var nome = nomeInput.value;
  var celular = celularInput.value;
  var email = emailInput.value;
  var cargo = cargosInput.options[cargosInput.selectedIndex].value;
  var info = {
    nome: nome,
    celular: celular,
    email: email,
    cargo: cargo
  }
  nomeField.innerHTML = nome;
  celularField.innerHTML = celular;
  emailField.innerHTML = email;
  cargoField.innerHTML = cargo;
  console.log(info);
}
buttonGerar.onclick = btn;



// Copiar para a area de tranferencia
function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  document.body.removeChild(textArea);
}