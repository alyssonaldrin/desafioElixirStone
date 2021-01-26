# Desafio Elixir Stone

## Pré-requisitos

É necessário ter instalado o [Node.js](https://nodejs.org/en/download/), para a execução.
## Estrutura de dados

O sistema trabalha com duas entidades, `Item` e `E-mail`. O `Item` possue a seguinte estrutura de dados:

| Atributo  | Tipo    | Descrição                                   |
|-----------|---------|---------------------------------------------|
| item      | String  | Nome do item                                |
| quantity  | Inteiro | Quantidade de itens                         |
| unitPrice | Inteiro | Preço unitário do item em centavos de reais |

Já o `E-mail`, é uma `string`, respresentando um endereço eletrônico informado.

## Execução

Para executar, basta abrir a pasta raiz do projeto e usar o comando:

```
node index.js
```

A entrada de dados é feita por arquivos JSON externos. Onde um `array` de `Itens` é fornecida no arquivo `./itemsList.json`, e um `array` de `E-mails` no arquivo `./emailsList.json`. Os arquivos enviados, possuem exemplos de entrada com dados fictícios.

O resultado será printado no console no formato de um dicionário, onde as chaves são os e-mails e o valor, quanto cada um deve pagar da conta.

Exemplo de saída:

```
node index.js
{
  'email1@provedor1.com': 42,  
  'email2@provedor2.com': 41,
  'email3@provedor3.com': 41   
}
```