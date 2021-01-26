# Desafio Elixir Stone

## Pré-requisitos

É necessário ter instalado o [Node.js](https://nodejs.org/en/download/), para a execução.

## Executando

Para executar basta abrir a pasta raiz do projeto e usar o comando:

$ node index.js

### Entrada de dados

A entrada de dados é feita por arquivos JSON externos. A lista de itens é fornecida no arquivo itemsList.json, e a de emails no arquivo emailsList.json.

#### Formato da lista de itens

O formato da lista de itens é uma array de objetos, com 3 atributos:

- "item": string
- "quantity": int
- "unitPrice": int

onde, o atributo "item" é o nome do mesmo, o atributo "quantity" é a quantidade de itens deste tipo, e o atributo "unitPrice" é o preço unitário para uma unidade desse item, em centavos de reais.

O arquivo enviado, tem um exemplo de entrada com dados fictícios.

#### Formato da lista de emails

O formato da lista de emails é uma array de string, onde cada célula tem um email diferente.

O arquivo enviado, tem um exemplo de entrada com dados fictícios.

### Resultado/Saída de dados

O resultado será printado no console no formato de um dicionário, onde as chaves são os emails e o valor quanto cada um deve pagar da conta.