# Tabela Produtos

## Objetivo

Cadastro e gerenciamento dos produtos do sistema.

## Valores de Caracteres

* O nome possui limite máximo de 100 caracteres.
* O código de barras deve possuir entre 8 e 14 caracteres e será único no sistema.
* O campo de observações possui limite máximo de 100 caracteres.

## Valores Monetários

* O estoque possui valor padrão igual a 0 e poderá assumir valores negativos conforme as regras de movimentação do sistema.
* O custo possui valor padrão igual a 0, porém não pode ser negativo.
* O valor de venda não pode ser negativo nem igual a 0.

## Datas

* data_criacao: data de criação do registro.
* data_atualizacao: data da última atualização do registro.

## Chaves Estrangeiras

* O campo grupo_id referencia a tabela de grupos através de chave estrangeira.
* A chave estrangeira de grupo utiliza a configuração ON DELETE SET NULL, permitindo a exclusão do grupo sem excluir os produtos associados.
* Quando um grupo for excluído, os produtos vinculados permanecerão cadastrados e terão o campo grupo_id definido como NULL.
* O campo unidade_venda_id referencia a tabela de unidades de venda por meio de chave estrangeira
* O campo fornecedor_id referencia a tabela de fornecedores por meio de chave estrangeira
* As chaves estrangeiras criado_por e atualizado_por referenciam os usuários responsáveis pela criação e atualização do registro.

## Regras de Negócio

### Para cadastro manual
* O produto poderá ser cadastrado manualmente pelo usuário por meio do módulo de Produtos.

### Para cadastro por importação de NF-e (XML)

* O produto poderá ser cadastrado automaticamente durante a importação de uma NF-e (XML), caso ainda não exista um cadastro correspondente no sistema. Caso já exista, o item da nota será associado ao produto previamente cadastrado.

### Configurações para ambos os cadastros

* Um produto não poderá ser cadastrado com código duplicado.
* Produtos podem ser cadastrados como ativos ou inativos.
* Por padrão o produto é criado como ativo 
* Produtos inativos não deverão estar disponíveis para seleção durante a criação de pedidos de venda ou orçamentos.
* Produtos poderão ser excluídos apenas quando não possuírem vínculos com outros registros do sistema.
* Recomenda-se a inativação em vez da exclusão para preservar o histórico de associações e movimentações.
* Todos os campos que possuem valor padrão (DEFAULT) serão preenchidos automaticamente pelo sistema durante a criação de um novo produto, sendo:
	* Estoque = 0
	* Custo = 0
* Todo produto deverá estar vinculado a uma unidade de venda cadastrada no sistema.
* O código do produto será utilizado como identificador de negócio do sistema.
* O ID será utilizado exclusivamente para relacionamentos internos do banco de dados.

## Observações Técnicas

* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o código para as regras de negócio do sistema.
* A coluna codigo dos produtos será gerada no formato P0001, com incremento sequencial de uma unidade (P0002, P0003, P0004 e assim por diante).
* Os valores das colunas custo e valor_venda serão armazenados no banco de dados como INTEGER, utilizando a estratégia de multiplicação por 100 para evitar problemas de precisão com valores monetários.
* Todos os campos deverão receber tratamento de remoção de espaços em branco antes e depois dos dados (trim).
* Todos os campos deverão receber tratamento para armazenamento em letras maiúsculas (uppercase).
* Os limites definidos nos CHECK(length()) deverão permanecer sincronizados com os limites configurados nos campos do frontend.
