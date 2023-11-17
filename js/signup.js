let btn = document.querySelector('#verSenha')
let btnConfirm = document.querySelector('#verConfirmSenha')


let nome = document.querySelector('#nome')
let labelNome = document.querySelector('#labelNome')
let validNome = false

let usuario = document.querySelector('#usuario')
let labelUsuario = document.querySelector('#labelUsuario')
let validUsuario = false

let endereço = document.querySelector('#endereço')
let labelEndereço = document.querySelector('#labelEndereço')
let validEndereço = false

let veiculo = document.querySelector('#veiculo')
let labelVeiculo = document.querySelector('#labelVeiculo')
let validVeiculo = false

let placa = document.querySelector('#placa')
let labelPlaca = document.querySelector('#labelPlaca')
let validPlaca = false

let senha = document.querySelector('#senha')
let labelSenha = document.querySelector('#labelSenha')
let validSenha = false

let confirmSenha = document.querySelector('#confirmSenha')
let labelConfirmSenha = document.querySelector('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = document.querySelector('#msgError')
let msgSuccess = document.querySelector('#msgSuccess')

nome.addEventListener('keyup', () => {
  if(nome.value.length <= 2){
    labelNome.setAttribute('style', 'color: red')
    labelNome.innerHTML = 'Nome *Insira no minimo 3 caracteres'
    nome.setAttribute('style', 'border-color: red')
    validNome = false
  } else {
    labelNome.setAttribute('style', 'color: green')
    labelNome.innerHTML = 'Nome'
    nome.setAttribute('style', 'border-color: green')
    validNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if(usuario.value.length <= 4){
    labelUsuario.setAttribute('style', 'color: red')
    labelUsuario.innerHTML = 'Usuário *Insira no minimo 5 caracteres'
    usuario.setAttribute('style', 'border-color: red')
    validUsuario = false
  } else {
    labelUsuario.setAttribute('style', 'color: green')
    labelUsuario.innerHTML = 'Usuário'
    usuario.setAttribute('style', 'border-color: green')
    validUsuario = true
  }
})

endereço.addEventListener('keyup', () => {
  if(endereço.value.length <= 4){
    labelEndereço.setAttribute('style', 'color: red')
    labelEndereço.innerHTML = 'Endereço *Insira no minimo 5 caracteres'
    endereço.setAttribute('style', 'border-color: red')
    validEndereço = false
  } else {
    labelEndereço.setAttribute('style', 'color: green')
    labelEndereço.innerHTML = 'Endereço'
    endereço.setAttribute('style', 'border-color: green')
    validEndereço = true
  }
})

veiculo.addEventListener('keyup', () => {
  if(veiculo.value.length <= 3){
    labelVeiculo.setAttribute('style', 'color: red')
    labelVeiculo.innerHTML = 'Veículo *Insira no minimo 3 caracteres'
    veiculo.setAttribute('style', 'border-color: red')
    validVeiculo = false
  } else {
    labelVeiculo.setAttribute('style', 'color: green')
    labelVeiculo.innerHTML = 'Veículo'
    veiculo.setAttribute('style', 'border-color: green')
    validVeiculo = true
  }
})

placa.addEventListener('keyup', () => {
  if(placa.value.length < 7 || placa.value.length > 7){
    labelPlaca.setAttribute('style', 'color: red')
    labelPlaca.innerHTML = 'Placa *Insira 8 caracteres e não inclua hífen'
    placa.setAttribute('style', 'border-color: red')
    validPlaca = false
  } else {
    labelPlaca.setAttribute('style', 'color: green')
    labelPlaca.innerHTML = 'Placa'
    placa.setAttribute('style', 'border-color: green')
    validPlaca = true
  }
})

senha.addEventListener('keyup', () => {
  if(senha.value.length <= 5){
    labelSenha.setAttribute('style', 'color: red')
    labelSenha.innerHTML = 'Senha *Insira no minimo 6 caracteres'
    senha.setAttribute('style', 'border-color: red')
    validSenha = false
  } else {
    labelSenha.setAttribute('style', 'color: green')
    labelSenha.innerHTML = 'Senha'
    senha.setAttribute('style', 'border-color: green')
    validSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if(senha.value != confirmSenha.value){
    labelConfirmSenha.setAttribute('style', 'color: red')
    labelConfirmSenha.innerHTML = 'Confirmar Senha *As senhas não conferem'
    confirmSenha.setAttribute('style', 'border-color: red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.setAttribute('style', 'color: green')
    labelConfirmSenha.innerHTML = 'Confirmar Senha'
    confirmSenha.setAttribute('style', 'border-color: green')
    validConfirmSenha = true
  }
})

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.value,
      userCad: usuario.value,
      senhaCad: senha.value
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.setAttribute('style', 'display: block')
    msgSuccess.innerHTML = '<strong>Cadastrando usuário...</strong>'
    msgError.setAttribute('style', 'display: none')
    msgError.innerHTML = ''
    
    setTimeout(()=>{
        window.location.href = './index.html'
    }, 3000)
  
    
  } else {
    msgError.setAttribute('style', 'display: block')
    msgError.innerHTML = '<strong>Preencha todos os campos corretamente antes de cadastrar</strong>'
    msgSuccess.innerHTML = ''
    msgSuccess.setAttribute('style', 'display: none')
  }
}

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('#senha')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

btnConfirm.addEventListener('click', ()=>{
  let inputConfirmSenha = document.querySelector('#confirmSenha')
  
  if(inputConfirmSenha.getAttribute('type') == 'password'){
    inputConfirmSenha.setAttribute('type', 'text')
  } else {
    inputConfirmSenha.setAttribute('type', 'password')
  }
})



  
  
