# Tabela Grupos

## Objetivo

Cadastro e gerenciamento dos grupos de produtos do sistema.

## Valores de Caracteres

* O nome possui limite máximo de 18 caracteres.

## Datas

* data_criacao: data de criação do registro.
* data_atualizacao: data da última atualização do registro.

## Chaves Estrangeiras

* As chaves estrangeiras criado_por e atualizado_por referenciam os usuários responsáveis pela criação e atualização do registro.

## Regras de Negócio

* Um grupo não poderá ser cadastrado com código duplicado.
* O nome do grupo não poderá ser cadastrado em duplicidade.
* O grupo poderá ser excluído mesmo estando vinculado a produtos.
* Quando um grupo for excluído, os produtos associados permanecerão cadastrados e terão o campo grupo_id definido como NULL.
* O código do grupo será utilizado como identificador de negócio do sistema.
* O ID será utilizado exclusivamente para relacionamentos internos do banco de dados.

## Observações Técnicas

* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o código para as regras de negócio do sistema.
* A coluna codigo dos grupos será gerada no formato G0001, com incremento sequencial de uma unidade (G0002, G0003, G0004 e assim por diante).
* Todos os campos deverão receber tratamento de remoção de espaços em branco antes e depois dos dados (trim).
* Todos os campos deverão receber tratamento para armazenamento em letras maiúsculas (uppercase).
* Os limites definidos nos CHECK(length()) deverão permanecer sincronizados com os limites configurados nos campos do frontend.