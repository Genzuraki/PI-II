const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sVeiculo = document.querySelector('#m-veiculo')
const sPlaca = document.querySelector('#m-placa')
const sServico= document.querySelector('#m-servico')
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
    sVeiculo.value = itens[index].veiculo
    sPlaca.value = itens[index].placa
    sServico.value = itens[index].servico
    id = index
  } else {
    sVeiculo.value = ''
    sPlaca.value = ''
    sServico.value = ''
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
    <td>${item.veiculo}</td>
    <td>${item.placa}</td>
    <td>${item.servico}</td>
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
  
  if (sVeiculo.value == '' || sPlaca.value == '' || sServico.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].veiculo = sVeiculo.value
    itens[id].placa = sPlaca.value
    itens[id].servico = sServico.value
    itens[id].valor = sValor.value
    itens[id].dataini = sDataini.value
    itens[id].datafim = sDatafim.value
    itens[id].funcionario = sFuncionario.value
  } else {
    itens.push({'veiculo': sVeiculo.value, 'placa': sPlaca.value, 'servico': sServico.value})
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
