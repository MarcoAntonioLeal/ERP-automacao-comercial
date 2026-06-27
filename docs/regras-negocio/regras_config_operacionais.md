# Tabela de Configurações Operacionais

## Objetivo

Armazenar os dados das configurações operacionais da empresa proprietária do sistema.

## Datas

* data_criacao: data e hora de criação do registro.
* data_atualizacao: data e hora da última atualização do registro.

## Chaves Estrangeiras

* As chaves estrangeiras criado_por e atualizado_por referenciam os usuários responsáveis pela criação e atualização do registro.

## Regras de Negócio

* A configuração inicial será realizada durante a instalação do sistema, podendo ser alterada posteriormente por meio do módulo de Configurações Operacionais.

* A opção Controle de Caixa estará habilitada por padrão.
* Quando habilitada, o sistema exigirá a abertura e o fechamento de caixa para realização das operações de venda.
* Recomenda-se que o fechamento seja realizado ao final de cada expediente.
* O sistema permitirá a existência de múltiplos registros de caixa na mesma data, **desde que apenas um caixa permaneça aberto por vez**.
* Não será permitida a abertura simultânea de dois caixas.
* Não será permitido manter um caixa aberto após a mudança de data do sistema.
* Caso exista um caixa aberto de data anterior, o sistema bloqueará a realização de novas vendas até que o caixa pendente seja devidamente fechado.
* Após o fechamento do caixa pendente, deverá ser realizada a abertura de um novo caixa para que as vendas possam ser retomadas.
* Quando a opção Controle de Caixa estiver desabilitada, o sistema operará sem a exigência de abertura e fechamento de caixa, permitindo o registro de vendas independentemente de turnos de caixa.

* Será possível selecionar uma entre três modalidades de operação:
  * Vendas e Orçamentos, permitindo a utilização das duas modalidades. Esta é a configuração padrão do sistema.
  * Somente Vendas, onde todos os pedidos serão registrados como vendas, não sendo permitido criar orçamentos.
  * Somente Orçamentos, onde todos os pedidos serão registrados como orçamentos, não sendo permitido criar vendas.

* O sistema poderá realizar envio automático de e-mails mediante configuração prévia dos parâmetros de SMTP.
* Por padrão, a configuração sugerida será compatível com o Gmail.
* Será possível informar o caminho da imagem da logomarca da empresa, utilizada nas impressões de vendas e orçamentos.
* Será possível informar o caminho da impressora utilizada pelo sistema.
* A tabela de configurações operacionais possui apenas um registro, responsável por armazenar as configurações operacionais da empresa proprietária do sistema.

## Observações Técnicas

* Utilizar um componente do tipo Select no frontend para controlar as modalidades de operação.
* Dependendo do ambiente de instalação, poderá ser necessária configuração de firewall, antivírus ou políticas de rede para permitir o envio de e-mails.
* O protocolo de segurança padrão será TLS.
* A senha de aplicativo deverá ser obtida pelo proprietário do sistema junto ao provedor de e-mail utilizado.
* Recomenda-se que a imagem da logomarca possua tamanho reduzido para evitar impactos no desempenho das impressões.
* A instalação e manutenção da impressora são de responsabilidade do proprietário do sistema.
* Todos os campos do tipo texto deverão receber tratamento para remoção de espaços em branco no início e no final do conteúdo (trim).
* O armazenamento em letras maiúsculas (uppercase) deverá ser aplicado apenas aos campos textuais de negócio, não sendo recomendado para campos técnicos como e-mails, servidores SMTP, senhas ou caminhos de arquivos.
* O backend deverá garantir que exista apenas um registro na tabela de configurações operacionais, respeitando a regra de negócio de empresa única.
* Os parâmetros de SMTP, porta, protocolo de segurança e senha de aplicativo deverão ser validados pelo backend antes da gravação das configurações.
* Os caminhos da logomarca e da impressora deverão ser validados pelo backend para garantir que os recursos informados existam e estejam acessíveis ao sistema.
