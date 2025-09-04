import promptSync from "prompt-sync";
const prompt = promptSync();

const precoUnit = Number(prompt("Preço unitário do produto: "));
const qtdComprada = Number(prompt("Quantidade comprada: "));
const dinheiroRecebido = Number(prompt("Dinheiro recebido: "));



let troco = dinheiroRecebido - (precoUnit * qtdComprada);

let teste = Number(precoUnit * qtdComprada);
console.log(teste);

if(dinheiroRecebido < teste){


    let faltante = (precoUnit * qtdComprada) - dinheiroRecebido;

    console.log(`DINHEIRO INSUFICIENTE FALTAM R$ ${faltante.toFixed(2)} REAIS`);
}else{
    console.log(`TROCO = ${troco}`);
}

