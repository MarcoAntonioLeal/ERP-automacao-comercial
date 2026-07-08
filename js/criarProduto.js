// -- tooltip -- //
const btnTooltipGrupo = document.querySelector('.tooltip-criar-grupo')
new bootstrap.Tooltip(btnTooltipGrupo)

const modalGrupo = document.getElementById('staticGrupo')

modalGrupo.addEventListener('hide.bs.modal', () => {
    const tooltipGrupo = bootstrap.Tooltip.getInstance(btnTooltipGrupo)
    tooltipGrupo.hide()

    /*Ainda com problema */
})


// -- habilitando botao ENTER como principal -- //
document.addEventListener('keydown', element => {

    if(element.key === 'Enter') {
        element.key === 'Tab'

        console.log('oi')
    }
    console.log(element)
})


// -- menu -- //
const todosOsInputs = document.querySelectorAll('input, textarea, select')
const inputDescricaoProduto = document.querySelector('#descricao')
const statusAtivo = document.querySelector('#ativo-inativo')
const estoque = document.querySelector('#estoque')
const custo = document.querySelector('#custo')
const preco = document.querySelector('#preco')
const margem = document.querySelector('#margem')


//menu ao abrir o modulo
const btnExcluir = document.querySelector('.btn-excluir')
btnExcluir.classList.add('disabled')

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
        estoque.value = 0
        custo.value = 0

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


// -- validação do value para aceitar somente numeros -- // 
let inputNumeros = document.querySelectorAll('#cod-barras, #estoque')
let inputNumerosPontoVirgula = document.querySelectorAll(' #custo, #margem, #preco')

inputNumeros.forEach(element => {
    element.addEventListener('input', num => {
        num.target.value = num.target.value.replace(/\D/g, '')
    })
})


// -- validação do value para aceitar somente numeros e ponto -- // 
inputNumerosPontoVirgula.forEach(element => {
    element.addEventListener('input', num => {
        num.target.value = num.target.value.replace(/[^0-9.]|^\./g, '').replace(/\.(?=.*\.)/g, '')
    })
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

//ao entrar no modulo de grupo
const btnAbrirModalGrupo = document.querySelector('.btn-criar-grupo')
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

    //novo grupo
    if(btnMenuGrupoData === 'novo') {
        remove_disabled(btnCancelarGrupo, nomeGrupo)
        add_disabled(btnNovoGrupo, btnExcluirGrupo)
        grupo.forEach(element => element.checked = '')
        grupo.forEach(element => element.classList.add('disabled'))
        nomeGrupo.focus()
        
    //cancelar grupo
    } else if(btnMenuGrupoData === 'cancelar') {

        add_disabled(btnCancelarGrupo, btnSalvarGrupo, btnExcluirGrupo, nomeGrupo)

        nomeGrupo.value = ''

        remove_disabled(btnNovoGrupo)
        grupo.forEach(element => element.checked = '')
        grupo.forEach(element => element.classList.remove('disabled'))
        
    //salvar grupo
    } else if(btnMenuGrupoData === 'salvar') {
        remove_disabled(btnNovoGrupo)
        grupo.forEach(element => element.classList.remove('disabled'))
        
        nomeGrupo.value = ''
        
        add_disabled(btnSalvarGrupo, btnCancelarGrupo, nomeGrupo)

    //excluir grupo
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

//evento para liberar o botao de salvar de grupo
nomeGrupo.addEventListener('input', () => {
    if(nomeGrupo.value.trim() === '') {
        add_disabled(btnSalvarGrupo)
    } else {
        remove_disabled(btnSalvarGrupo)
    }
})


// -- validação do preco e margem de lucro -- //
document.addEventListener('input', event => {

    const valorProduto = event.target.closest('.calcValorProduto')

    if(!valorProduto) return

    const calcValorProduto = valorProduto.dataset.preco

    const custoValueFloatPonto = Number(custo.value)
    const precoValueFloatPonto = Number(preco.value)
    const margemValueFloatPonto = Number(margem.value)

    const novoPreco = (custoValueFloatPonto + (margemValueFloatPonto * custoValueFloatPonto) / 100).toFixed(2)
    const novaMargem = (((precoValueFloatPonto * 100) / custoValueFloatPonto) - 100).toFixed(2)

    if(custo.value == 0) return margem.value = ''
    
    //controle de valores de custo, margem e preço
    if(calcValorProduto === 'margem') {
        preco.value = novoPreco

    } else if(calcValorProduto === 'preco') {
        

    } else if (calcValorProduto === 'custo') {
        preco.value = novoPreco
    }
})