import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos valores vai ter cada vetor? "));

const A: number [] = [];
const B: number [] = [];
const C: number [] = [];

console.log("Digite os valores do vetor A: ");

for(let i = 0; i < 1; i++){
    
    for (let j = 0; j < n; j++) {

        const x = Number(prompt(""));
        A.push(x);
        
    }
}

console.log("Digite os valores do vetor B: ");

for(let i = 0; i < 1; i++){
    
    for (let j = 0; j < n; j++) {

        const x = Number(prompt(""));
        B.push(x);
        
    }
}

for(let i = 0; i < n; i++){

    let soma = A[i] + B[i];

    C.push(soma);
    
}

console.log("VETOR RESULTANTE: ");
console.log(`${C.join("\n")}`);