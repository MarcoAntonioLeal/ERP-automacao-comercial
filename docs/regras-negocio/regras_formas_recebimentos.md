# Tabela Formas de Recebimento

## Objetivo

Gerenciamento das formas de recebimento das vendas do sistema.

## Datas

* data_criacao: data de criação do registro.
* data_atualizacao: data da última atualização do registro.

## Chaves Estrangeiras

* As chaves estrangeiras criado_por e atualizado_por referenciam os usuários responsáveis pela criação e atualização do registro.

## Regras de Negócio

* O código da forma de recebimento será utilizado como identificador de negócio do sistema.
* O ID será utilizado exclusivamente para relacionamentos internos do banco de dados.
* A tabela formas_recebimento é independente e não possui chave estrangeira para pedidos.
* A associação com a venda é realizada através da coluna num_pedido, utilizada como identificador de negócio do pedido.
* A coluna num_pedido é única, permitindo apenas um registro de recebimento para cada venda.
* Somente vendas concluídas são registradas nesta tabela.
* Orçamentos não geram registros de recebimento.
* Pelo menos uma forma de recebimento deverá possuir valor informado.
* A soma dos valores das formas de recebimento deverá ser igual ao valor líquido da venda.
* A validação da soma será realizada pelo backend.

## Observações Técnicas

* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o código para as regras de negócio do sistema.
* A coluna codigo será gerada no formato R0001, com incremento sequencial de uma unidade (R0002, R0003, R0004 e assim por diante).
* Campos de formas de recebimento não utilizados permanecem NULL.
* Os valores das colunas valor_liquido, valor_dinheiro, valor_pix, valor_cartao_debito e valor_cartao_credito serão armazenados no banco de dados como INTEGER, utilizando a estratégia de multiplicação por 100 para evitar problemas de precisão em operações monetárias.
* Todos os campos deverão receber tratamento de remoção de espaços em branco antes e depois dos dados (trim).
* Todos os campos deverão receber tratamento para armazenamento em letras maiúsculas (uppercase).