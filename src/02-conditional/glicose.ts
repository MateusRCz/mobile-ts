import promptSync from "prompt-sync";
const prompt = promptSync();

const glicose = Number(prompt("Digite a medida da glicose: "));

if(glicose < 100){
    console.log("Classificação: Normal");
} else if(glicose > 100 && glicose <= 140){
    console.log("Classificação: Elevado");
} else {
    console.log("Classificação: diabetes");
}