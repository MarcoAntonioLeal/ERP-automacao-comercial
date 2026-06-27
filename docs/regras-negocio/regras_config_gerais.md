# Tabela de Configurações Gerais

## Objetivo

Armazenar os dados das configurações gerais da empresa proprietária do sistema.

## Valores de Caracteres

* O nome da empresa possui limite máximo de 70 caracteres.
* O CPF deve possuir 11 caracteres.
* O CNPJ deve possuir 14 caracteres.
* O CEP deve possuir 8 caracteres.
* O telefone fixo deve possuir 10 caracteres.
* Os números de celular devem possuir 11 caracteres.
* A UF deve possuir 2 caracteres.

## Datas

* data_criacao: data e hora de criação do registro.
* data_atualizacao: data e hora da última atualização do registro.

## Chaves Estrangeiras

* As chaves estrangeiras criado_por e atualizado_por referenciam os usuários responsáveis pela criação e atualização do registro.

## Regras de Negócio

* A configuração inicial será realizada durante a instalação do sistema, podendo ser alterada posteriormente por meio do módulo de Configurações Gerais.
* A empresa deverá ser cadastrada como PF (Pessoa Física) ou PJ (Pessoa Jurídica).
* Os campos CPF e CNPJ não poderão ser utilizados simultaneamente no mesmo cadastro.
* O CPF, o CNPJ, o CEP e os números de telefone deverão ser armazenados apenas com caracteres numéricos, sem a utilização de ".", "-", "/", "(", ")" ou quaisquer outros caracteres especiais.
* A tabela de configurações gerais possui apenas um registro, responsável por armazenar os dados da empresa proprietária do sistema.
* Por se tratar de uma tabela de registro único, os campos CPF e CNPJ não utilizam restrição UNIQUE, uma vez que não existe cenário de múltiplas empresas compartilhando a mesma base de dados.

## Observações Técnicas

* A validação de preenchimento entre CPF ou CNPJ será realizada pelo backend de acordo com o tipo de pessoa informado (PF ou PJ).
* Os campos de CPF, CNPJ, CEP e telefones possuirão máscaras de exibição nos componentes de entrada de dados (inputs) do frontend.
* O CPF e o CNPJ deverão passar por validação antes da gravação dos dados.
* O CEP possuirá integração com API de consulta de endereços.
* Todos os campos do tipo texto deverão receber tratamento para remoção de espaços em branco no início e no final do conteúdo (trim).
* Todos os campos do tipo texto deverão ser armazenados em letras maiúsculas (uppercase).
* Os limites definidos nas restrições CHECK(length()) deverão permanecer sincronizados com os limites configurados nos componentes do frontend.
* O backend deverá garantir que exista apenas um registro na tabela de configurações gerais, respeitando a regra de negócio de empresa única.