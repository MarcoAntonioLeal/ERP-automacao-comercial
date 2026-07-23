const btnClear = document.querySelector('#button-clear')
const campoPesquisarCliente = document.querySelector('#campoPesquisarCliente')

btnClear.addEventListener('click', () => {
    campoPesquisarCliente.value = ''
})

//para resetar os campos do modal de pesquisa de clientes
const modalInputTodosClientes = document.querySelector('#todosClientes')
const modalInputFiltroPorCod = document.querySelector('#filtroPorCodigoCli')
const btnPesquisarCliente = document.querySelector('#btnPesquisarCliente')

btnPesquisarCliente.addEventListener('click', () => {
    modalInputTodosClientes.checked = 'true'
    modalInputFiltroPorCod.checked = 'true'
})