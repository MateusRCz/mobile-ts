import promptSync from "prompt-sync";
const prompt = promptSync();

let n = Number(prompt("Quantos alunos serao digitados? "));

let alunos: {nome: string; nota1: number, nota2: number} [] = [];

for (let i = 0; i < n; i++) {
    console.log(`Digite nome, primeira e segunda nota do ${i+1}o aluno: `);
    let nome = String(prompt(""));
    let nota1 = Number(prompt(""));
    let nota2 = Number(prompt("")); 

    alunos.push({nome, nota1, nota2});
    
}

console.log(`ALUNOS APROVADOS: ${alunos.filter(aluno => (aluno.nota1 + aluno.nota2) / 2 >= 6).map(aluno => aluno.nome).join("\n")}`);