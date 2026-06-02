const btnPeriodoDeVendas = document.querySelectorAll('.btn-check')
const periodoDeVendas = document.querySelector('#periodo-vendas')

btnPeriodoDeVendas.forEach(element => {
    element.addEventListener('click', event => {
        const periodo = event.target.value

        if(periodo === 'Dia') {
            periodoDeVendas.textContent = 'Vendas de Hoje'
        } else if(periodo === 'Semana') {
            periodoDeVendas.textContent = 'Vendas da Semana'
        } else {
            periodoDeVendas.textContent = 'Vendas do Mês'
        }
    })
})