const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sEndereco = document.querySelector('#m-endereco')
const sVeiculo= document.querySelector('#m-veiculo')
const sPlaca= document.querySelector('#m-placa')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sEndereco.value = itens[index].endereco
    sVeiculo.value = itens[index].veiculo
    sPlaca.value = itens[index].placa
    id = index
  } else {
    sNome.value = ''
    sEndereco.value = ''
    sVeiculo.value = ''
    sPlaca.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.endereco}</td>
    <td>${item.veiculo}</td>
    <td>${item.placa}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sEndereco.value == '' || sVeiculo.value == '' || sPlaca.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].endereco = sEndereco.value
    itens[id].veiculo = sVeiculo.value
    itens[id].placa = sPlaca.value
  } else {
    itens.push({'nome': sNome.value, 'endereco': sEndereco.value, 'veiculo': sVeiculo.value, 'placa': sPlaca.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
