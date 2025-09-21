import promptSync from "prompt-sync";
const prompt = promptSync();

let n = Number(prompt("Quantas pessoas serao digitadas? "));
let maiorAltura = 0;
let menorAltura = 3.00;
let somaAlturas = 0
let numHomens= 0; 
let numMulheres = 0; 

for (let i = 0; i < n; i++) {
    let altura = Number(prompt(`Altura da ${i+1}a pessoa: `));
    let genero = String(prompt(`Genero da ${i+1}a pessoa: `));
    
    if(altura < menorAltura){
        menorAltura = altura;
    }
    if(altura > maiorAltura){
        maiorAltura = altura;
    }


    if(genero === "M"){
        numHomens++;
    }else if(genero === "F"){
        numMulheres++;
        somaAlturas+= altura;
    }
}

let media = somaAlturas / numMulheres; 

console.log(`Menor altura = ${menorAltura}`);
console.log(`Maior altura = ${maiorAltura}`);
console.log(`Media das alturas das mulheres = ${media.toFixed(2)}`);
console.log(`Numero de homens = ${numHomens}`);