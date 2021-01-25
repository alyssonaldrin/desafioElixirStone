import {promises as fs} from "fs";

main();

async function main() {
    const ITEMS_LIST = await getItemsList();
    const EMAILS = await getEmailsList();
    result(ITEMS_LIST, EMAILS);
}

//leitura da array de itens 
async function getItemsList() {
    return JSON.parse(await fs.readFile("itemsList.json"));
}
//leitura da array de emails
async function getEmailsList() {
    return JSON.parse(await fs.readFile("emailsList.json"));
}

//calcula e printa os resultados
const result = (itemsList, emailsList) => {
  
    const isArrayEmpty = (array) => {
        return (!array || array.length === 0);
    }

    if (isArrayEmpty(itemsList)) {
        console.log("Lista de itens vazia ou inexistente, por favor executar novamente com a lista de itens desejada!");
        return;
    }
    if (isArrayEmpty(emailsList)) {
        console.log("Lista de e-mails vazia ou inexistente, por favor executar novamente com a lista de emails desejada");
        return;
    }

    const numberOfEmails = emailsList.length;

    //multiplica o preço de cada item por sua quantidade e soma todos os itens
    const total = itemsList.reduce((acc, cur) => {
        return (cur.quantity * cur.unitPrice) + acc;
    }, 0);
    
    //divide de forma igual entre a quantidade de emails e arredonda para baixo
    const average = Math.floor(total / numberOfEmails);
    
    //verifica se há resto na divisão
    const remainder = (total % numberOfEmails) != 0 ? true : false;
    
    //cria o dicionário onde a chave é o e-mail com seu determinado valor a pagar, sendo o primeiro valor acrescido de 1,caso haja resto para não faltar nenhum centavo
    const averageByEmail = {};
    emailsList.forEach((email, index) => {
        if (!index && remainder) {
            averageByEmail[email] = (average + 1);
            return;
        };
        averageByEmail[email] = average;
        });
    console.log(averageByEmail);
}