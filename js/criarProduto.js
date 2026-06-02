const btnTooltipGrupo = document.querySelector('.tooltip-criar-grupo')
new bootstrap.Tooltip(btnTooltipGrupo)

//menu
const btnSalvar = document.querySelector('.btn-salvar')
btnSalvar.classList.add('disabled')

const btnExcluir = document.querySelector('.btn-excluir')
btnExcluir.classList.add('disabled')

const todosOsInputs = document.querySelectorAll('input:not(#codigo, #nomeGrupo, .grupo), textarea, select')
const inputDescricaoProduto = document.querySelector('#descricao')
const statusAtivo = document.querySelector('#ativo-inativo')

document.addEventListener('click', event => {
    
    const btnMenu = event.target.closest('.btn-menu')
    if(!btnMenu) return

    const btnMenuData = btnMenu.dataset.btnMenu
    
    //novo
    if(btnMenuData === 'novo') {
        btnSalvar.classList.add('disabled')
        todosOsInputs.forEach(element => element.value = '')
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

todosOsInputs.forEach(element => {
    element.addEventListener('keydown', () => {
        btnSalvar.classList.remove('disabled')
    })
})

todosOsInputs.forEach(element => {
    element.addEventListener('change', () => {
        btnSalvar.classList.remove('disabled')
    })
})

//menu grupo
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
const btnNomeGrupo = document.querySelector('#nomeGrupo')
const grupo = document.querySelectorAll('.grupo')

//ao entrar no modulo
const btnAbrirModalGrupo = document.querySelector('.btn-criar')
btnAbrirModalGrupo.addEventListener('click', () => {

    add_disabled(btnCancelarGrupo, btnSalvarGrupo, btnExcluirGrupo, btnNomeGrupo)

    btnNomeGrupo.value = ''

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
        remove_disabled(btnCancelarGrupo, btnNomeGrupo)
        add_disabled(btnNovoGrupo, btnExcluirGrupo)
        grupo.forEach(element => element.checked = '')
        grupo.forEach(element => element.classList.add('disabled'))
        btnNomeGrupo.focus()
        
    //cancelar
    } else if(btnMenuGrupoData === 'cancelar') {

        add_disabled(btnCancelarGrupo, btnSalvarGrupo, btnExcluirGrupo, btnNomeGrupo)

        btnNomeGrupo.value = ''

        remove_disabled(btnNovoGrupo)
        grupo.forEach(element => element.checked = '')
        grupo.forEach(element => element.classList.remove('disabled'))
        
    //salvar
    } else if(btnMenuGrupoData === 'salvar') {
        //verificar evento

    //excluir
    } else if(btnMenuGrupoData === 'excluir') {
        //verificar evento
    }
})

//input grupo
grupo.forEach(event => {
    event.addEventListener('change', () => {
        remove_disabled(btnExcluirGrupo, btnCancelarGrupo)
        add_disabled(btnNovoGrupo)
    })
})






//validação do preço
const custo = document.querySelector('#custo')
const precoEmValor = document.querySelector('#preco')
const precoEmPorcen = document.querySelector('#precoPorcento')

//data-preco="valor"
//data-preco = "porcento"



//validação do campo de grupos 
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