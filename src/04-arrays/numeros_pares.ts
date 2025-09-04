import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));

const numeros = [];
let cont = 0;

for(let i = 0; i < n; i++){

    const x = Number(prompt("Digite um numero: "));

    if(x % 2 === 0){

        numeros.push(x);
        cont+= 1;

    }
}

console.log("\nNUMEROS PARES: ");
console.log(`${numeros.join(" ")}`);
console.log(`QUANTIDADE DE PARES = ${cont}`);
