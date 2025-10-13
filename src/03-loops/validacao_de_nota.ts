import promptSync from 'prompt-sync';
const prompt = promptSync();

let condicao = true;

while(condicao){
    let n1 = Number(prompt("Digite a primeira nota: "));
    while(n1 < 0 || n1 > 10){
        n1 = Number(prompt("Valor invalido! Tente novamente: "));
    }

    let n2 = Number(prompt("Digite a segunda nota: "));
    while(n2 < 0 || n2 > 10){
        n2 = Number(prompt("Valor invalido! Tente novamente: "));
    }

    let media = (n1 + n2) / 2;
    console.log(`MEDIA = ${media}`);
    condicao = false; 
}   



