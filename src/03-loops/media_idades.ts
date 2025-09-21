import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Digite as idades: ");
let n = Number(prompt(''));
let cont = 0;
let soma = 0;

while(n > 0){
    n = Number(prompt(''));
    if(n < 0){
        break;
    }
    cont++;
    soma += n;
}

let media = soma / cont;
console.log(`MEDIA = ${media.toFixed(2)}`);
