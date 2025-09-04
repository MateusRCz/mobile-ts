import promptSync from "prompt-sync";
const prompt = promptSync();

const distanciaPercorrida = Number(prompt("Distancia percorrida: "));
const combustivelGasto = Number(prompt("Combustivel gasto: "));

const consumoMedio = distanciaPercorrida / combustivelGasto;

console.log(`Consumo medio = ${consumoMedio.toFixed(3)}`);