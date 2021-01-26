import { promises as fs } from "fs";

/**
 * lê o arquivo e retorna em formato JSON
 * @param fileName 
 */
async function readJsonFile(fileName) {
    return JSON.parse(await fs.readFile(fileName));
}

/**
 * lê o json de items e retorna
 */
async function getItemsList() {
    return await readJsonFile("itemsList.json");
}

/**
 * lê o json de emails e retorna
 */
async function getEmailsList() {
    return await readJsonFile("emailsList.json");
}

/**
 * verifica se a lista fornecida está vazia
 * @param list 
 */
const isListEmpty = (list) => {
    return (!list || list.length === 0);
}

/**
 * calcula e printa os resultados
 * @param itemsList lista de itens
 * @param emailsList lista de emails
 */
function result(itemsList, emailsList) {

    //informa ao usuário quando a lista de itens está vazia ou se ela não existe.
    if (isListEmpty(itemsList)) {
        console.log(`
            Lista de itens vazia ou inexistente, por favor executar novamente com a lista de itens desejada!
        `);
        return;
    }

    //informa ao usuário quando a lista de emails está vazia ou se ela não existe.
    if (isListEmpty(emailsList)) {
        console.log(`
            Lista de e-mails vazia ou inexistente, por favor executar novamente com a lista de emails desejada
        `);
        return;
    }

    //multiplica o preço de cada item por sua quantidade e soma todos os itens
    const total = itemsList.reduce((acc, cur) => {
        return (cur.quantity * cur.unitPrice) + acc;
    }, 0);

    //divide de forma igual entre a quantidade de emails e arredonda para baixo
    const numberOfEmails = emailsList.length;
    const average = Math.floor(total / numberOfEmails);

    //verifica se há resto na divisão
    const remainder = (total % numberOfEmails) != 0

    /** 
     * cria o dicionário onde a chave é o e-mail com seu determinado valor a pagar, sendo o primeiro valor acrescido de 1,* caso haja resto para não faltar nenhum centavo
    */
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

async function main() {
    const itemsList = await getItemsList();
    const emailsList = await getEmailsList();
    result(itemsList, emailsList);
}

main();