import promptSync from "prompt-sync";
const prompt = promptSync();

let n = Number(prompt("Quantas pessoas voce vai digitar? "));
let nomes: string[] = [];
let idades: Number[] = [];
let maiorIdade = 0;
let nomeMaiorIdade = ""; 

for (let i = 0; i < n; i++) {
    console.log(`Dados da ${i+1}a pessoa:`);
    let nome = String(prompt("Nome: "));
    let idade = Number(prompt("Idade: "));
    if(idade > maiorIdade){
        maiorIdade = idade;
        nomeMaiorIdade = nome;
    }
    nomes.push(nome);
    idades.push(idade);
}

console.log(`PESSOA MAIS VELHA: ${nomeMaiorIdade}`)

