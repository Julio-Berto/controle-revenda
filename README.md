# Controle de Revendas

Projeto desenvolvido com o objetivo de praticar React, JavaScript e Tailwind CSS através da criação de um sistema simples para controle de produtos de revenda.

A proposta do sistema é ajudar pessoas que compram produtos para revender em plataformas como OLX e Facebook Marketplace, permitindo acompanhar valores de compra, venda, lucro, estoque e status dos produtos.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- Tailwind CSS

## Objetivo do projeto

Criar uma aplicação simples e prática para controlar produtos comprados para revenda, acompanhando informações como:

- Nome do produto
- Valor de compra
- Valor de venda
- Lucro previsto
- Status
- Quantidade em estoque

Além de desenvolver o sistema, o projeto também está sendo utilizado como forma de aprendizado e prática dos principais conceitos do React.

## Funcionalidades atuais

- Exibição de um cabeçalho reutilizável
- Cards de resumo
- Lista dinâmica de produtos
- Cadastro de novos produtos
- Controle dos produtos utilizando estado do React
- Exibição de valores no formato de moeda brasileira
- Cálculo de lucro previsto
- Interface responsiva utilizando Tailwind CSS

## Conceitos praticados

Durante o desenvolvimento foram trabalhados conceitos como:

### Componentes

A aplicação foi dividida em componentes reutilizáveis, como:

- `Header`
- `SummaryCard`
- `ProductCard`

### Props

As informações são enviadas entre componentes utilizando props.

Por exemplo, o componente de produto recebe um objeto contendo as informações do produto que deve ser exibido.

### Estado com useState

O `useState` está sendo utilizado para armazenar informações que podem mudar durante o uso da aplicação.

Atualmente existem estados para:

- Lista de produtos
- Nome do produto
- Valor de compra
- Valor de venda
- Status
- Quantidade

### Renderização de listas

Os produtos são armazenados em um array e exibidos dinamicamente utilizando o método `.map()`.

### Spread Operator

O operador `...` é utilizado para preservar os produtos existentes ao adicionar um novo produto ao array.

### Formulários controlados

Os campos do formulário são controlados pelo React através de `value`, `onChange` e estados.

### Formatação de moeda

Os valores financeiros são armazenados como números e formatados apenas durante a exibição utilizando `Intl.NumberFormat`.

### Tailwind CSS

O Tailwind está sendo utilizado para estilização e criação de layouts responsivos.

O layout dos cards utiliza diferentes quantidades de colunas dependendo do tamanho da tela.

## Estrutura atual

```text
src/
├── components/
│   ├── Header.jsx
│   ├── ProductCard.jsx
│   └── SummaryCard.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Próximas melhorias

Algumas funcionalidades planejadas para as próximas versões:

- Validação do formulário
- Limpar os campos após cadastrar um produto
- Editar produtos
- Excluir produtos
- Registrar uma venda
- Diferenciar lucro previsto de lucro real
- Calcular automaticamente os cards de resumo
- Salvar os produtos no LocalStorage
- Filtros por status
- Pesquisa de produtos
- Melhorias visuais
- Histórico de vendas
- Gráficos e relatórios
- Integração futura com banco de dados

## Aprendizado

Este projeto está sendo desenvolvido passo a passo, com foco no entendimento dos conceitos utilizados e não apenas na construção da aplicação final.

A intenção é utilizar o projeto como parte do portfólio de desenvolvimento front-end e também como prática dos fundamentos do React.
