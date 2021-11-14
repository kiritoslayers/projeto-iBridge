'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}


const getLocalStorage = () => JSON.parse(localStorage.getItem('dbPessoa')) ?? []
const setLocalStorage = (dbPessoa) => localStorage.setItem("dbPessoa", JSON.stringify(dbPessoa))

// CRUD - create read update delete
const deletePessoa = (index) => {
    const dbPessoa = readPessoa()
    dbPessoa.splice(index, 1)
    setLocalStorage(dbPessoa)
}

const updatePessoa = (index, pessoa) => {
    const dbPessoa = readPessoa()
    dbPessoa[index] = pessoa
    var formatacaoCPF = pessoa.cpf.slice(0, 3) + "." + pessoa.cpf.slice(3, 6) + "." + pessoa.cpf.slice(6, 9) + "-" + pessoa.cpf.slice(9)
    if (pessoa.cpf == formatacaoCPF){}
    else{
        pessoa.cpf = formatacaoCPF
    }

    setLocalStorage(dbPessoa)
}

const readPessoa = () => getLocalStorage()

const createPessoa = (pessoa) => {
    const dbPessoa = getLocalStorage()
    dbPessoa.push(pessoa)
    setLocalStorage(dbPessoa)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//Interação com o layout

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

const savePessoa = () => {
    debugger
    if (isValidFields()) {
        const pessoa = {
            cpf: document.getElementById('cpf').value,
            nome: document.getElementById('nome').value,
            telefone: document.getElementById('telefone').value,
            celular: document.getElementById('celular').value,
            email: document.getElementById('email').value,
            sexo: document.getElementById('sexo').value,
            nascimento: document.getElementById('nascimento').value,
            habilidades: document.getElementById('habilidades').value
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new') {
            var formatacaoCPF = pessoa.cpf.slice(0, 3) + "." + pessoa.cpf.slice(3, 6) + "." + pessoa.cpf.slice(6, 9) + "-" + pessoa.cpf.slice(9)
            if (pessoa.cpf == formatacaoCPF){}
            else{
                pessoa.cpf = formatacaoCPF
            }
            createPessoa(pessoa)
            updateTable()
            closeModal()
        } else {
            updatePessoa(index, pessoa)
            updateTable()
            closeModal()
        }
    }
}

const createRow = (pessoa, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${pessoa.cpf}</td>
        <td>${pessoa.nome}</td>
        <td>${pessoa.telefone}</td>
        <td>${pessoa.celular}</td>
        <td>${pessoa.email}</td>
        <td>${pessoa.sexo}</td>
        <td>${pessoa.nascimento}</td>
        <td>${pessoa.habilidades}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Excluir</button>
        </td>
    `
    document.querySelector('#tb_pessoa>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tb_pessoa>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbPessoa = readPessoa()
    clearTable()
    dbPessoa.forEach(createRow)
}

const fillFields = (pessoa) => {
    document.getElementById('cpf').value = pessoa.cpf
    document.getElementById('nome').value = pessoa.nome
    document.getElementById('telefone').value = pessoa.telefone
    document.getElementById('celular').value = pessoa.celular
    document.getElementById('email').value = pessoa.email
    document.getElementById('sexo').value = pessoa.sexo
    document.getElementById('nascimento').value = pessoa.nascimento
    document.getElementById('habilidades').value = pessoa.habilidades
    document.getElementById('nome').dataset.index = pessoa.index
}

const editPessoa = (index) => {
    const pessoa = readPessoa()[index]
    var formatacaoCPF = pessoa.cpf.slice(0, 3) + "." + pessoa.cpf.slice(3, 6) + "." + pessoa.cpf.slice(6, 9) + "-" + pessoa.cpf.slice(9)
    if (pessoa.cpf == formatacaoCPF){}
    else{
        pessoa.cpf = formatacaoCPF
    }
    pessoa.index = index
    fillFields(pessoa)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button') {

        const [action, index] = event.target.id.split('-')

        if (action == 'edit') {
            editPessoa(index)
        } else {
            const pessoa = readPessoa()[index]
            const response = confirm(`Deseja realmente excluir a Pessoa ${pessoa.nome}`)
            if (response) {
                deletePessoa(index)
                updateTable()
            }
        }
    }
}

updateTable()

// Eventos
document.getElementById('cadastrarPessoa')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('salvar')
    .addEventListener('click', savePessoa)

document.querySelector('#tb_pessoa>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)