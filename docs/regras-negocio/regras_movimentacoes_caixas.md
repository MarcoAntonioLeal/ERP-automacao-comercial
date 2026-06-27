# Tabela de Movimentações dos Caixas

## Objetivo

Armazenar o histórico das movimentações realizadas nos caixas da empresa.

## Datas

* data_movimentacao: data e hora da movimentação realizada no caixa.

## Chaves Estrangeiras

* A chave estrangeira usuario_movimentacao_id referencia o usuário responsável pela movimentação registrada.
* A chave estrangeira turno_caixa_id referencia o registro do caixa ao qual a movimentação está vinculada.
* A chave estrangeira cliente_id referencia o cliente vinculado à movimentação, quando houver.
* A chave estrangeira pedido_id referencia o pedido vinculado à movimentação, quando houver.

## Regras de Negócio

* Cada registro representa uma única movimentação realizada no caixa.
* As movimentações poderão ser dos tipos: VENDA, ORCAMENTO, SUPRIMENTO ou SANGRIA.
* Apenas um tipo de operação poderá ser registrado em cada movimentação.
* Movimentações do tipo VENDA e ORCAMENTO poderão possuir vínculo com cliente e pedido.
* Movimentações do tipo SUPRIMENTO e SANGRIA não possuem vínculo obrigatório com cliente ou pedido.
* Toda movimentação deverá estar vinculada a um registro de caixa.
* A coluna pedido_id será utilizada para manter o relacionamento com a tabela de pedidos, enquanto a coluna num_pedido preservará o identificador de negócio utilizado pelo sistema.
* O código da movimentação será utilizado como identificador de negócio do sistema.
* O ID será utilizado exclusivamente para relacionamentos internos do banco de dados.

## Observações Técnicas

* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o código para as regras de negócio do sistema.
* A coluna codigo das movimentações será gerada no formato M0001, com incremento sequencial de uma unidade (M0002, M0003, M0004 e assim por diante).
* A coluna valor será armazenada no banco de dados como INTEGER, utilizando a estratégia de multiplicação por 100 para evitar problemas de precisão em operações monetárias.
* Os campos do tipo código deverão receber tratamento de remoção de espaços em branco antes e depois do conteúdo (trim).
* Todos os campos do tipo texto deverão ser armazenados em letras maiúsculas (uppercase).
