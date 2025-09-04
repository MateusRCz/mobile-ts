import promptSync from "prompt-sync";
const prompt = promptSync();

const valor1 = Number(prompt("Primeiro valor: "));
const valor2 = Number(prompt("Segundo valor: "));
const valor3 = Number(prompt("Terceiro valor: "));

if(valor1 < valor2 && valor1 < valor3){
    console.log(`Menor = ${valor1}`);
} else if (valor2 < valor1 && valor2 < valor2){
    console.log(`Menor = ${valor2}`);
} else{
    console.log(`Menor = ${valor3}`);
}