import promptSync from "prompt-sync";
const prompt = promptSync();

console.log("Digite dois numeros inteiros: ");

let x = Number(prompt(''));
let y = Number(prompt(''));

if(x % y === 0 || y % x === 0){
    console.log("São multiplos");
}else{
    console.log("Não são multiplos");
}