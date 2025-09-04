import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantos elementos voce vai digitar? "));
const negativos = [];

for(let i = 0; i < n; i++){
    const x = Number(prompt('Digite um numero: '));
    if(x < 0){
        negativos.push(x);
    }
}

console.log('NUMEROS NEGATIVOS: ');
negativos.forEach(element => {
    console.log(element);
});

