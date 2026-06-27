# Tabela Pedidos

## Objetivo

Cadastro e gerenciamento dos pedidos do sistema.

## Datas

* data_criacao: data de criação do registro.
* data_atualizacao: data da última atualização do registro.
* data_venda: data efetiva da conclusão da venda.
* data_cancelamento: data e hora do cancelamento da venda ou orçamento.

## Chaves Estrangeiras

* A chave estrangeira turno_caixa_id referencia o registro do caixa ao qual a venda está vinculada.
* As chaves estrangeiras criado_por e atualizado_por referenciam os usuários responsáveis pela criação e atualização do registro.
* A chave estrangeira cliente_id referencia o cliente associado ao pedido.

## Regras de Negócio

* O número do pedido, representado pela coluna num_pedido, será utilizado como identificador de negócio do sistema.
* O ID será utilizado exclusivamente para relacionamentos internos do banco de dados.
* Os pedidos poderão ser dos tipos VENDA ou ORCAMENTO.
* As vendas realizam movimentação de estoque e movimentação financeira.
* Após a finalização, uma venda não poderá ser reaberta.
* Os orçamentos não realizam movimentação de estoque nem movimentação financeira.
* Os orçamentos poderão ser reabertos e convertidos em venda.
* O usuário poderá escolher uma das seguintes formas de recebimento: DINHEIRO, PIX, CARTAO_DEBITO ou CARTAO_CREDITO.
* Ao finalizar uma venda utilizando mais de uma forma de recebimento, o campo forma_recebimento receberá o valor MULTIPLAS_FORMAS.
* Os valores detalhados de cada forma de recebimento serão armazenados na tabela FORMAS_RECEBIMENTO.
* Vendas ou orçamentos cancelados não poderão ser reabertos.
* O cancelamento de uma venda ou orçamento deverá registrar a data e hora do cancelamento na coluna data_cancelamento.
* A coluna data_venda será preenchida apenas quando o pedido for efetivamente concluído como venda.
* Orçamentos não possuem data_venda.

## Observações Técnicas

* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o número do pedido para as regras de negócio do sistema.
* Os registros detalhados das formas de recebimento podem ser consultados na tabela FORMAS_RECEBIMENTO.
* Os valores das colunas valor_bruto, valor_desconto e valor_liquido serão armazenados no banco de dados como INTEGER, utilizando a estratégia de multiplicação por 100 para evitar problemas de precisão em operações monetárias.
* Todos os campos deverão receber tratamento de remoção de espaços em branco antes e depois dos dados (trim).
* Todos os campos deverão receber tratamento para armazenamento em letras maiúsculas (uppercase).
