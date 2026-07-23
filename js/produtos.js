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

//para resetar os campos do modal de pesquisa de produtos
const modalInputTodosOsProd = document.querySelector('#todosProdutos')
const modalInputFiltroPorCodProd = document.querySelector('#filtroPorCodigoProd')
const btnPesquisarProduto = document.querySelector('#btnPesquisarProduto')

btnPesquisarProduto.addEventListener('click', () => {
    modalInputTodosOsProd.checked = 'true'
    modalInputFiltroPorCodProd.checked = 'true'
    modalBuscaGrupo.value = ''
    modalBuscaFornecedor.value = ''
})