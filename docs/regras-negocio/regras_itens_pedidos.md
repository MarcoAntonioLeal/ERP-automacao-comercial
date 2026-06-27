# Tabela Itens dos Pedidos

## Objetivo

Armazenar os itens que compõem os pedidos do sistema, sejam eles orçamentos ou vendas, preservando o histórico das informações registradas no momento da operação.

## Datas

* data_criacao: data e hora de criação do registro.
* data_atualizacao: data e hora da última atualização do registro.

## Chaves Estrangeiras

* As chaves estrangeiras produto_id, grupo_id, fornecedor_id, cliente_id e pedido_id referenciam os registros de suas respectivas tabelas e garantem a integridade dos relacionamentos do banco de dados.
* As chaves estrangeiras criado_por e atualizado_por referenciam os usuários responsáveis pela criação e atualização do registro.

## Regras de Negócio

* O campo codigo será utilizado como identificador de negócio dos itens dos pedidos.
* O campo id será utilizado exclusivamente para relacionamentos internos do banco de dados.
* A tabela armazenará os itens pertencentes aos pedidos, tanto orçamentos como ou vendas.
* O campo pedido_id identifica o pedido ao qual o item pertence.
* O campo num_pedido armazena o número do pedido para facilitar consultas, auditorias e suporte.
* As colunas produto_id, grupo_id, fornecedor_id, cliente_id e pedido_id são utilizadas para relacionamento e integridade dos dados.
* As colunas produto_nome, grupo_nome, fornecedor_nome, cliente_nome e num_pedido registram uma fotografia das informações existentes no momento da inclusão do item no pedido.
* A coluna unidade_venda registra a unidade comercial utilizada na operação.
* A coluna item_cancelado identifica se o item foi cancelado individualmente, independentemente da situação do pedido.
* Os campos valor_unitario, quant_vendida e valor_total devem possuir valores maiores que zero.
* Os campos históricos não devem ser alterados após a finalização da venda, exceto em situações previstas pelas regras de negócio do sistema.

## Observações Técnicas
* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o número do pedido para as regras de negócio do sistema.
* A coluna codigo dos itens dos pedidos será gerada no formato I0001, com incremento sequencial de uma unidade (I0002, I0003, I0004 e assim por diante).
* Os valores das colunas valor_unitario e valor_total serão armazenados como INTEGER, utilizando a estratégia de multiplicação por 100 para evitar problemas de precisão em operações monetárias.
* Todos os campos deverão receber tratamento de remoção de espaços em branco antes e depois dos dados (trim).
* Todos os campos deverão receber tratamento para armazenamento em letras maiúsculas (uppercase).
* Os registros deverão manter o histórico das informações da operação, evitando que alterações futuras nos cadastros de produtos, grupos, fornecedores ou clientes afetem vendas e orçamentos já registrados.
