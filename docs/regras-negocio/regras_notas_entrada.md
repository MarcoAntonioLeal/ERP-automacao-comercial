# Tabela de Entrada por NFe(XML)

## Objetivo

Cadastro e gerenciamento das entradas de notas por xml.

## Valores de Caracteres

* O nome possui limite máximo de 150 caracteres.

## Datas

* data_emissão: data da emissão da nota pelo fornecedor.
* data_entrada: data da entrada da nota no sistema.

## Chaves Estrangeiras

* O campo fornecedor_id referencia a tabela de fornecedores por meio de chave estrangeira.
* A chave estrangeira criado_por representa o responsável que realizou a entrada da nota no sistema.

## Regras de Negócio

* Somente será permitida a importação de NF-e cuja tag <xMotivo> contenha o texto "Autorizado o uso da NF-e", indicando autorização da SEFAZ
* A chave de acesso da NF-e deverá ser única no sistema, não sendo permitida a importação da mesma nota mais de uma vez.
* O fornecedor poderá ser cadastrado automaticamente durante a importação de uma NF-e (XML). Caso já exista um fornecedor cadastrado com o mesmo CPF ou CNPJ, o sistema utilizará o cadastro existente, não criando um novo registro. 
* A presença da tag <CNPJ> definirá automaticamente o tipo de pessoa do fornecedor como PJ.
* A presença da tag <CPF> definirá automaticamente o tipo de pessoa do fornecedor como PF. 
* O código das entradas por nota será utilizado como identificador de negócio do sistema.
* O ID será utilizado exclusivamente para relacionamentos internos do banco de dados.

## Observações Técnicas

* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o código para as regras de negócio do sistema.
* A coluna codigo das entradas por nota será gerada no formato N0001, com incremento sequencial de uma unidade (N0002, N0003, N0004 e assim por diante).
* Os valores das colunas valor_total serão armazenados no banco de dados como INTEGER, utilizando a estratégia de multiplicação por 100 para evitar problemas de precisão com valores monetários.
* Todos os campos deverão receber tratamento de remoção de espaços em branco antes e depois dos dados (trim).
* Todos os campos deverão receber tratamento para armazenamento em letras maiúsculas (uppercase).
* Os limites definidos nos CHECK(length()) deverão permanecer sincronizados com os limites configurados nos campos do frontend.

## Mapeamento das Tags da NF-e (XML)

### Cadastro da nota

	* <xMotivo> para verificação se foi autorizada pela Sefaz
	* <nNF> para número
	* <serie> para série
	* <dhEmi> para data de emissão
	* <xNome> para o nome 
	* <vNF> para valor total
	* <chNFe> para chave de acesso

### Cadastro do fornecedor na tabela de fornecedor 

	* A tag <CNPJ> identificará o CNPJ do fornecedor quando o emitente for pessoa jurídica.
	* A tag <CPF> identificará o CPF do fornecedor, quando o emitente for pessoa física.
	* A tag <xNome> identificará o nome do fornecedor
	* A tag <xLgr> identificará o nome da rua
	* A tag <xBairro> identificará o nome do bairro
	* A tag <xMun> identificará o nome da cidade
	* A tag <UF> identificará a unidade federativa
	* A tag <CEP> identificará o CEP
	* Caso exista a tag <fone>, o backend deverá identificar se o número corresponde a telefone fixo (10 dígitos) ou celular (11 dígitos) e armazená-lo na coluna correspondente.
	* Caso exista a tag <email>, o backend deverá cadastrá-lo no primeiro campo de e-mail