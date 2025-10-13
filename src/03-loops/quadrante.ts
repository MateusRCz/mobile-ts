import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("Digite os valores das coordenadas X e Y: ");
let x = Number(prompt(""));
let y = Number(prompt(""));
let condicao = true;

while(condicao){
    if(x > 0 && y > 0){
        console.log("QUADRANTE Q1");
        break;
    }
    else if(x < 0 && y > 0){
        console.log("QUADRANTE Q2");
        break;
    }
    else if(x < 0 && y < 0){
        console.log("QUADRANTE Q3");
        break;
    }
    else if(x > 0 && y < 0){
        console.log("QUADRANTE Q4");
        break;
    }
    else{
        condicao = false
    }
}