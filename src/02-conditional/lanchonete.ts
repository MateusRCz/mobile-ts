import promptSync from "prompt-sync";
const prompt = promptSync();

const codigo = Number(prompt("Codigo do produto comprado: "));
const quantidade = Number(prompt("Quantidade comprada: "));
let valor = 0;

switch (codigo) {
    case 1:
        valor = 5.00;
        console.log(`Valor a pagar: R$${(quantidade * valor).toFixed(2)}`)
        
        break;

    case 2:
        valor = 3.50; 
        console.log(`Valor a pagar: R$${(quantidade * valor).toFixed(2)}`)
        break;
    
    case 3:
        valor = 4.80;
        console.log(`Valor a pagar: R$${(quantidade * valor).toFixed(2)}`)
        break;

    case 4:
        valor = 8.90;
        console.log(`Valor a pagar: R$${(quantidade * valor).toFixed(2)}`)
        break;

    case 5:
        valor = 7.32;
        console.log(`Valor a pagar: R$${(quantidade * valor).toFixed(2)}`)
        break;

    default:

        break;
}