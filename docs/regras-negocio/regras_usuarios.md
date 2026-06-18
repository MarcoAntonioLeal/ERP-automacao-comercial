# Tabela Usuários

## Objetivo

Cadastro e gerenciamento dos usuários do sistema.

## Valores de Caracteres

* O nome possui limite máximo de 15 caracteres.
* A senha possui exatamente 4 dígitos numéricos.

## Datas

* data_criacao: data de criação do registro.
* data_atualizacao: data da última atualização do registro.

## Chaves Estrangeiras

* As chaves estrangeiras criado_por e atualizado_por referenciam os usuários responsáveis pela criação e atualização do registro, tendo como característica um autorrelacionamento da própria tabela.

## Regras de Negócio

* Um usuário não poderá ser cadastrado com código duplicado.
* A senha do usuário não poderá ser cadastrada em duplicidade.
* A senha deverá conter apenas caracteres numéricos.
* O primeiro usuário será o MASTER e será criado durante a instalação do sistema juntamente com as configurações iniciais.
* Usuários podem ser cadastrados como ativos ou inativos.
* Usuários inativos não poderão realizar login no sistema.
* Todo usuário criado inicia sem permissões de acesso aos módulos.
* As permissões serão concedidas manualmente pelo usuário responsável pelo cadastro.
* Todos os módulos de cadastro e vendas possuirão controle de acesso por permissões.
* Usuários podem ser excluídos do sistema.
* Recomenda-se a inativação em vez da exclusão para preservar o histórico de associações e movimentações.
* O código do usuário será utilizado como identificador de negócio do sistema.
* O ID será utilizado exclusivamente para relacionamentos internos do banco de dados.

## Observações Técnicas

* A tabela possui duas formas de identificação: o ID para as regras internas do banco de dados e o código para as regras de negócio do sistema.
* A coluna codigo dos usuários será gerada no formato U0001, com incremento sequencial de uma unidade (U0002, U0003, U0004 e assim por diante).
* Durante a instalação do sistema será criado automaticamente o usuário MASTER.
* O usuário MASTER possuirá senha armazenada com hash e não poderá ser editado ou selecionado por outros usuários do sistema.
* Somente o próprio usuário MASTER poderá alterar suas informações.
* O usuário MASTER será utilizado para criação dos demais usuários e para administração inicial do sistema.
* Todos os campos deverão receber tratamento de remoção de espaços em branco antes e depois dos dados (trim).
* Todos os campos deverão receber tratamento para armazenamento em letras maiúsculas (uppercase).
* Os limites definidos nos CHECK(length()) deverão permanecer sincronizados com os limites configurados nos campos do frontend.