const buttonGerar = document.querySelector('#btn');

const nomeInput = document.querySelector('.forms #nome');
const celularInput = document.querySelector('.forms #cel');
const emailInput = document.querySelector('.forms #email');
const cargosInput = document.querySelector("#cargos");

const nomeField = document.getElementById('nome-assinatura');
const celularField = document.getElementById('numero-assinatura');
const emailField = document.getElementById('email-assinatura');
const cargoField = document.getElementById('cargo-assinatura');

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
