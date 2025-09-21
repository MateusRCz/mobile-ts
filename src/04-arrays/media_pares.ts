import promptSync from "prompt-sync";
const prompt = promptSync();

let n = Number(prompt("Quantos elementos vai ter o vetor? "));
let numbers: number[] = []
let sum = 0;
let media = 0;

for (let i = 0; i < n; i++) {
    let x = Number(prompt("Digite um numero: "));
    if(x % 2 === 0){
        numbers.push(x);
    }
}

if(numbers.length === 0){
    console.log(`NENHUM NUMERO PAR`);
}else{
    sum = numbers.reduce((acc, cur) => acc + cur);
    media = sum / numbers.length;
    console.log(`MEDIA DOS PARES = ${media}`);
}






