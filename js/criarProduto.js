// -- tooltip -- //
const btnTooltipGrupo = document.querySelector('.tooltip-criar-grupo')
const btnTooltipFornecedores = document.querySelector('.tooltip-fornecedores')
new bootstrap.Tooltip(btnTooltipGrupo)
new bootstrap.Tooltip(btnTooltipFornecedores)

const modalGrupo = document.getElementById('staticGrupo')

modalGrupo.addEventListener('hide.bs.modal', () => {
    const tooltipGrupo = bootstrap.Tooltip.getInstance(btnTooltipGrupo)
    tooltipGrupo.hide()

    /*Ainda com problema */
})


// -- menu -- //

//menu ao abrir o modulo
const btnExcluir = document.querySelector('.btn-excluir')
btnExcluir.classList.add('disabled')

const todosOsInputs = document.querySelectorAll('input, textarea, select')
const inputDescricaoProduto = document.querySelector('#descricao')
const statusAtivo = document.querySelector('#ativo-inativo')

document.addEventListener('click', event => {
    
    const btnMenu = event.target.closest('.btn-menu')
    if(!btnMenu) return

    const btnMenuData = btnMenu.dataset.btnMenu
    
    //novo
    if(btnMenuData === 'novo') {
        btnExcluir.classList.add('disabled')
        todosOsInputs.forEach(element => element.value = '')
        unidadeVenda.value = 'un'
        statusAtivo.checked = true
        inputDescricaoProduto.focus()
    
    //salvar
    } else if (btnMenuData === 'salvar') {
        const form = document.querySelector('.formCriarProduto')
        form.requestSubmit()

    //excluir
    } else if (btnMenuData === 'excluir') {
        //verificar se terá algum evento
    }
})


// -- validação do value do campo de grupos -- // 
const inputGrupos = document.querySelector('#grupo')
const grupoOptions = document.querySelectorAll('#grupos option')

inputGrupos.addEventListener('change', () => {
    let grupoValue = [...grupoOptions].map(option => option.value)

    if(!grupoValue.includes(inputGrupos.value)) {
        inputGrupos.value = ''
    }
})

const btnApagarUnVenda = document.querySelector('.btn-apagar')
const unidadeVenda = document.querySelector('select')

btnApagarUnVenda.addEventListener('click', () => {
    unidadeVenda.value = ''
})


// -- menu grupo -- //
function add_disabled(...btns) {
    btns.forEach(btn => {btn.classList.add('disabled')})
}

function remove_disabled(...btns) {
    btns.forEach(btn => {btn.classList.remove('disabled')})
}

const btnNovoGrupo = document.querySelector('.btn-novo-grupo')
const btnCancelarGrupo = document.querySelector('.btn-cancelar-grupo')
const btnSalvarGrupo = document.querySelector('.btn-salvar-grupo')
const btnExcluirGrupo = document.querySelector('.btn-excluir-grupo')
const nomeGrupo = document.querySelector('#nomeGrupo')
const grupo = document.querySelectorAll('.grupo')

//ao entrar no modulo
const btnAbrirModalGrupo = document.querySelector('.btn-criar')
btnAbrirModalGrupo.addEventListener('click', () => {

    add_disabled(btnCancelarGrupo, btnSalvarGrupo, btnExcluirGrupo, nomeGrupo)

    nomeGrupo.value = ''

    remove_disabled(btnNovoGrupo)
    grupo.forEach(element => element.checked = '')
    grupo.forEach(element => element.classList.remove('disabled'))
})

document.addEventListener('click', event => {
    const btnMenuGrupo = event.target.closest('.btn-menu-grupo')
    if(!btnMenuGrupo) return

    const btnMenuGrupoData = btnMenuGrupo.dataset.btnMenuGrupo

    //novo
    if(btnMenuGrupoData === 'novo') {
        remove_disabled(btnCancelarGrupo, nomeGrupo)
        add_disabled(btnNovoGrupo, btnExcluirGrupo)
        grupo.forEach(element => element.checked = '')
        grupo.forEach(element => element.classList.add('disabled'))
        nomeGrupo.focus()
        
    //cancelar
    } else if(btnMenuGrupoData === 'cancelar') {

        add_disabled(btnCancelarGrupo, btnSalvarGrupo, btnExcluirGrupo, nomeGrupo)

        nomeGrupo.value = ''

        remove_disabled(btnNovoGrupo)
        grupo.forEach(element => element.checked = '')
        grupo.forEach(element => element.classList.remove('disabled'))
        
    //salvar
    } else if(btnMenuGrupoData === 'salvar') {
        remove_disabled(btnNovoGrupo)
        grupo.forEach(element => element.classList.remove('disabled'))
        
        nomeGrupo.value = ''
        
        add_disabled(btnSalvarGrupo, btnCancelarGrupo, nomeGrupo)

    //excluir
    } else if(btnMenuGrupoData === 'excluir') {
        remove_disabled(btnNovoGrupo)

        grupo.forEach(element => element.checked = '')
        
        add_disabled(btnExcluirGrupo, btnCancelarGrupo)
    }
})

//input grupo
grupo.forEach(event => {
    event.addEventListener('change', () => {
        remove_disabled(btnExcluirGrupo, btnCancelarGrupo)
        add_disabled(btnNovoGrupo)
    })
})

//evento para liberar o botao de salvar
nomeGrupo.addEventListener('input', () => {
    if(nomeGrupo.value.trim() === '') {
        add_disabled(btnSalvarGrupo)
    } else {
        remove_disabled(btnSalvarGrupo)
    }
})


// -- validação do preco e margem de lucro -- //
const custo = document.querySelector('#custo')
const preco = document.querySelector('#preco')
const margem = document.querySelector('#margem')

/*function custoMargemPreco(custo = 0, preco = 0, margem = 0) {
    const custoProduto = Math.round((preco * 100) / margem).toFixed(2)
    const precoProduto = Math.round((custo * margem) / 100).toFixed(2)
    const margemProduto = Math.round( ((preco * 100) / custo) - 100 ).toFixed(2)

    return {custoProduto, precoProduto, margemProduto}
}*/

/*
document.addEventListener('change', event => {
    const valorProduto = event.target.closest('.calcValorProduto')

    if(!valorProduto) return

    const calcValorProduto = valorProduto.dataset.preco

    if(calcValorProduto === 'custo') {
        margem.value = Math.round( ((preco.value || 0 * 100) / custo.value || 0) - 100 ).toFixed(2)
        preco.value = Math.round((custo.value || 0 * margem.value || 0) / 100).toFixed(2)

    } else if(calcValorProduto === 'margem') {
        custo.value = Math.round((preco.value || 0 * 100) / margem.value || 0).toFixed(2)
        preco.value = Math.round((custo.value || 0 * margem.value || 0) / 100).toFixed(2)

    } else if(calcValorProduto === 'preco') {
        custo.value = Math.round((preco.value || 0 * 100) / margem.value || 0).toFixed(2)
        margem.value = Math.round( ((preco.value || 0 * 100) / custo.value || 0) - 100 ).toFixed(2)
    }
})*/