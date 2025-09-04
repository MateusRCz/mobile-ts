import promptSync from "prompt-sync";
const prompt = promptSync();

const nome = Number(prompt("Nome: "));
const valor = Number(prompt("Valor por hora: "));
const horas = Number(prompt("Horas trabalhadas: "));

const salario = valor * horas;

console.log(`O pagamento para ${nome} deve ser ${salario.toFixed(2)}`);