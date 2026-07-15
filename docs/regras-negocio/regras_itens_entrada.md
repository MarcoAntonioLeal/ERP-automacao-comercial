# Tabela Itens por Entrada de NFe(XML)

## Objetivo

Cadastro e gerenciamento dos itens de entrada por NFe

## Valores de Caracteres

* O nome possui limite máximo de 100 caracteres.
* O código de barras deve possuir entre 8 e 14 caracteres.

## Chaves Estrangeiras

* O campo produto_id referencia a tabela de produtos por meio de chave estrangeira para associação caso exista.
* A chave estrangeira criado_por representa o responsável que realizou a entrada da nota no sistema.
* O campo unidade_venda_id referencia a unidade de venda associada ao produto criado.
* O campo nota_entrada_id referencia a nota de origem da entrada.

## Regras de Negócio

* O custo do produto será calculado pelo backend considerando o valor do item acrescido das despesas acessórias rateadas (frete, seguro e outras despesas), descontados os descontos aplicados ao item. O cálculo dos tributos não será considerado na composição do custo nesta versão do sistema.
* O produto poderá ser cadastrado durante a importação de uma NF-e (XML). Caso já exista um produto correspondente no sistema, o item da NF-e poderá ser associado ao cadastro existente.
* A unidade de venda poderá ser cadastrada durante a importação de uma NF-e (XML). Caso já exista ela será associada automaticamente.
* Unidades de venda poderão ser excluídas apenas quando não possuírem vínculos com produtos ou itens de entrada de NF-e.
* O código dos itens de entrada por nota será utilizado como identificador de negócio do sistema.
* O ID será utilizado exclusivamente para relacionamentos internos do banco de dados.

## Observações Técnicas

* O cálculo do custo será: valor_total + valor_frete + valor_seguro + outras_despesas - valor_desconto.
* Quando frete, seguro, outras despesas ou descontos forem informados apenas no total da NF-e, o backend deverá realizar o rateio proporcional entre os itens antes da gravação dos registros.
* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o código para as regras de negócio do sistema.
* A coluna codigo dos itens de entrada será gerada no formato T0001, com incremento sequencial de uma unidade (T0002, T0003, T0004 e assim por diante).
* Os valores das colunas valor_unidade, valor_total, valor_frete, valor_seguro, outras_despesas, valor_desconto e custo serão armazenados no banco de dados como INTEGER, utilizando a estratégia de multiplicação por 100 para evitar problemas de precisão com valores monetários.
* Todos os campos deverão receber tratamento de remoção de espaços em branco antes e depois dos dados (trim).
* Todos os campos deverão receber tratamento para armazenamento em letras maiúsculas (uppercase).
* Os limites definidos nos CHECK(length()) deverão permanecer sincronizados com os limites configurados nos campos do frontend.

## Mapeamento das Tags da NF-e (XML)

	* <nNF> para número
	* <cProd> para o código
	* <xProd> para o nome
	* <cEAN> para o código de barras
	* <uCom> unidade de venda
	* <qCom> para quantidade
	* <vUnCom> valor unitário
	* <vProd> valor total
	* <vFrete> para frete
	* <vSeg> para o seguro
	* <vOutro> para outras despesas
	* <vDesc> para o desconto