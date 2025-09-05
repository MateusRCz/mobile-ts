import promptSync from "prompt-sync";
const prompt = promptSync();

const escala = String(prompt("VocÊ vai digitar a temperatura em qual escala (C/F)? "));
let temperatura = "";

if(escala === "C" || escala === "c"){
    let temperatura = Number(prompt("Digite a temperatura em Celsius: "));
    let conversao = (temperatura * 1.8) + 32;
    console.log(`Temperatura equivalente em Celsius: ${conversao.toFixed(2)}`);
}else if(escala === "F" || escala === "f"){
    let temperatura = Number(prompt("Digite a temperatura em Fahrenheit: "));
    let conversao = (temperatura - 32) / 1.8;
    console.log(`Temperatura equivalente em Fahrenheit: ${conversao.toFixed(2)}`);
}

