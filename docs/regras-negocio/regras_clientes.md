# Tabela Clientes

## Objetivo

Cadastro e gerenciamento dos clientes do sistema.

## Valores de Caracteres

* O nome possui limite máximo de 70 caracteres.
* O CPF deve possuir 11 caracteres.
* O CNPJ deve possuir 14 caracteres.
* O CEP deve possuir 8 caracteres.
* O telefone fixo deve possuir 10 caracteres.
* Os números de celular devem possuir 11 caracteres.
* O campo de observação possui limite máximo de 200 caracteres.

## Datas

* data_criacao: data de criação do registro.
* data_atualizacao: data da última atualização do registro.

## Chaves Estrangeiras

* As chaves estrangeiras criado_por e atualizado_por referenciam os usuários responsáveis pela criação e atualização do registro.

## Regras de Negócio

* O cliente não poderá ser cadastrado com código duplicado.
* O cliente deverá ser cadastrado como PF (Pessoa Física) ou PJ (Pessoa Jurídica).
* O CPF e o CNPJ não poderão ser utilizados simultaneamente no mesmo cadastro.
* O CPF, CNPJ, CEP e números de telefone deverão ser armazenados apenas com caracteres numéricos, sem utilização de ".", "-", "/", "(", ")" ou quaisquer outros caracteres especiais.
* Clientes podem ser cadastrados como ativos ou inativos.
* Clientes inativos não devem estar disponíveis para seleção em vendas.
* Clientes podem ser excluídos do sistema.
* Recomenda-se a inativação em vez da exclusão para preservar o histórico de associações e movimentações.
* O código do cliente será utilizado como identificador de negócio do sistema.
* O ID será utilizado exclusivamente para relacionamentos internos do banco de dados.

## Observações Técnicas

* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o código para as regras de negócio do sistema.
* A coluna codigo dos clientes será gerada no formato C0001, com incremento sequencial de uma unidade (C0002, C0003, C0004 e assim por diante).
* Os campos de CPF, CNPJ, CEP e telefones possuirão máscaras de exibição nos inputs do frontend.
* O CPF e o CNPJ possuirão validação antes da gravação dos dados.
* O CEP possuirá integração com API de consulta de endereços.
* Todos os campos deverão receber tratamento de remoção de espaços em branco antes e depois dos dados (trim).
* Todos os campos deverão receber tratamento para armazenamento em letras maiúsculas (uppercase).
* Os limites definidos nos CHECK(length()) deverão permanecer sincronizados com os limites configurados nos campos do frontend.