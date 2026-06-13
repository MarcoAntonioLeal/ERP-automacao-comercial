# Modelo Entidade Relacionamento (MER)

```mermaid
erDiagram

    USUARIOS ||--o{ CLIENTES : gerencia
    USUARIOS ||--o{ FORNECEDORES : gerencia
    USUARIOS ||--o{ GRUPOS : gerencia
    USUARIOS ||--o{ PRODUTOS : gerencia

    GRUPOS ||--o{ PRODUTOS : classifica

    FORNECEDORES ||--o{ PRODUTOS : fornece

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
        INTEGER fornecedor FK
    }
```

## Legenda

- PK = Chave Primária
- FK = Chave Estrangeira

## Observações

Todas as tabelas possuem os campos:

- criado_por
- atualizado_por
- data_criacao
- data_atualizacao

que referenciam a tabela `USUARIOS`.
```
