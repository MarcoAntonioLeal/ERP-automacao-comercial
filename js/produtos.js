//para limpar os campos de select do modal
const campoPesquisarProd = document.querySelector('#campoPesquisarProduto')
const modalBuscaGrupo = document.querySelector('#buscaGrupo')
const modalBuscaFornecedor = document.querySelector('#buscaFornecedor')

document.addEventListener('click', event => {
    const btnExcluirCampos = event.target.dataset.btnApagar
    
    if(!btnExcluirCampos) return

    if(btnExcluirCampos === 'grupo') {
        modalBuscaGrupo.value = ''

    } else if (btnExcluirCampos === 'fornecedor') {
        modalBuscaFornecedor.value = ''

    } else if (btnExcluirCampos === 'buscaProduto') {
        campoPesquisarProd.value = ''
    }
})

//para resetar os campos do modal
const modalInputTodosOsProd = document.querySelector('#todosProdutos')
const modalInputFiltroPorCod = document.querySelector('#filtroPorCodigo')
const btnPesquisar = document.querySelector('#btnPesquisar')

btnPesquisar.addEventListener('click', () => {
    modalInputTodosOsProd.checked = 'true'
    modalInputFiltroPorCod.checked = 'true'
    modalBuscaGrupo.value = ''
    modalBuscaFornecedor.value = ''
})