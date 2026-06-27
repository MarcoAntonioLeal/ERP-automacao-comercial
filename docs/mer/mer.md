# Modelo Entidade Relacionamento (MER)

```mermaid
erDiagram

    %% Gerenciamento
    USUARIOS ||--o{ CLIENTES : gerencia
    USUARIOS ||--o{ FORNECEDORES : gerencia
    USUARIOS ||--o{ GRUPOS : gerencia
    USUARIOS ||--o{ PRODUTOS : gerencia
    USUARIOS ||--o{ PEDIDOS : gerencia
    USUARIOS ||--o{ ITENS_PEDIDOS : gerencia
    USUARIOS ||--o{ CAIXAS : gerencia
    USUARIOS ||--|| CONFIG_GERAIS : configura
    USUARIOS ||--|| CONFIG_OPERACIONAIS : configura

    %% Cadastros
    GRUPOS ||--o{ PRODUTOS : classifica
    FORNECEDORES ||--o{ PRODUTOS : fornece

    %% Vendas
    CLIENTES ||--o{ PEDIDOS : realiza
    CAIXAS ||--o{ PEDIDOS : registra

    PEDIDOS ||--|{ ITENS_PEDIDOS : possui
    PRODUTOS ||--o{ ITENS_PEDIDOS : vendido
    CLIENTES ||--o{ ITENS_PEDIDOS : compra
    FORNECEDORES ||--o{ ITENS_PEDIDOS : origem
    GRUPOS ||--o{ ITENS_PEDIDOS : categoria

    %% Caixa
    CAIXAS ||--o{ MOVIMENTACOES_CAIXAS : possui
    PEDIDOS ||--o{ MOVIMENTACOES_CAIXAS : gera
    CLIENTES ||--o{ MOVIMENTACOES_CAIXAS : relacionado

    %% Recebimento
    PEDIDOS ||--|| FORMAS_RECEBIMENTO : pagamento

    USUARIOS {
        INTEGER id PK
        TEXT codigo
        TEXT nome
    }

    CLIENTES {
        INTEGER id PK
        TEXT codigo
        TEXT nome
        TEXT tipo_pessoa
    }

    FORNECEDORES {
        INTEGER id PK
        TEXT codigo
        TEXT nome
        TEXT tipo_pessoa
    }

    GRUPOS {
        INTEGER id PK
        TEXT codigo
        TEXT nome
    }

    PRODUTOS {
        INTEGER id PK
        TEXT codigo
        TEXT nome
        REAL estoque
        INTEGER valor_venda
        INTEGER grupo_id FK
        INTEGER fornecedor_id FK
    }

    PEDIDOS {
        INTEGER id PK
        INTEGER num_pedido
        INTEGER cliente_id FK
        INTEGER turno_caixa_id FK
        INTEGER valor_liquido
    }

    ITENS_PEDIDOS {
        INTEGER id PK
        INTEGER pedido_id FK
        INTEGER produto_id FK
        REAL quant_vendida
        INTEGER valor_total
    }

    CAIXAS {
        INTEGER id PK
        TEXT codigo
        TEXT caixa_fechado
    }

    MOVIMENTACOES_CAIXAS {
        INTEGER id PK
        TEXT codigo
        TEXT tipo_operacao
        INTEGER valor
    }

    FORMAS_RECEBIMENTO {
        INTEGER id PK
        TEXT codigo
        INTEGER valor_liquido
    }

    CONFIG_GERAIS {
        INTEGER id PK
    }

    CONFIG_OPERACIONAIS {
        INTEGER id PK
    }
```

## Legenda

* PK = Chave Primária
* FK = Chave Estrangeira
