import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));
const numeros = [];
let maior = 0;

for(let i = 0; i < n; i++){
    
    const x = Number(prompt("Digite um numero: "));
    numeros.push(x);

    if(x > maior){
        maior = x;

    }
}

console.log(`MAIOR VALOR = ${maior}`);
console.log(`POSICAO DO MAIOR VALOR = ${numeros.indexOf(maior)}`);

