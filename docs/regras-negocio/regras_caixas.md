# Tabela de Caixas

## Objetivo

Armazenar os dados operacionais referentes à abertura e ao fechamento dos caixas do sistema.

## Datas

* data_abertura: data e hora da abertura do caixa.
* data_fechamento: data e hora do fechamento do caixa.

## Chaves Estrangeiras

* As chaves estrangeiras usuario_abertura_id e usuario_fechamento_id referenciam os usuários responsáveis pela abertura e pelo fechamento do caixa.

## Regras de Negócio

* O caixa sempre será criado com a coluna caixa_fechado preenchida com o valor 'N'.
* O código do caixa será utilizado como identificador de negócio do sistema.
* O ID será utilizado exclusivamente para relacionamentos internos do banco de dados.
* O comportamento da abertura e fechamento de caixa dependerá da configuração Controle de Caixa definida na tabela de Configurações Operacionais.
* Quando o Controle de Caixa estiver habilitado, o sistema exigirá a abertura de caixa para realização de vendas.
* Recomenda-se que o fechamento seja realizado ao final de cada expediente.
* O sistema permitirá a existência de múltiplos registros de caixa na mesma data, desde que apenas um caixa permaneça aberto por vez.
* Não será permitida a abertura simultânea de dois caixas.
* Não será permitido manter um caixa aberto após a mudança de data do sistema.
* Caso exista um caixa aberto de data anterior, o sistema bloqueará a realização de novas vendas até que o caixa pendente seja devidamente fechado.
* Após o fechamento do caixa pendente, deverá ser realizada a abertura de um novo caixa para que as vendas possam ser retomadas.
* Quando o Controle de Caixa estiver desabilitado, o sistema permitirá o registro de vendas sem a obrigatoriedade de abertura e fechamento de caixa.

## Observações Técnicas

* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o código para as regras de negócio do sistema.
* A coluna codigo dos caixas será gerada no formato X0001, com incremento sequencial de uma unidade (X0002, X0003, X0004 e assim por diante).
* A data de fechamento será registrada automaticamente pelo backend no momento do encerramento do caixa.
* Os campos do tipo código deverão receber tratamento de remoção de espaços em branco antes e depois do conteúdo (trim).
