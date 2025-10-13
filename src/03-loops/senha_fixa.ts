import promptSync from 'prompt-sync';
const prompt = promptSync();

let senha = 1444;
let valor = 0;
let condicao = true;

valor = Number(prompt("Digite a senha: "));

while(condicao){

    if(valor === senha ){
        console.log("Acesso permitido!");
        condicao = false;
    }else{
        valor = Number(prompt("Senha Inválida! Tente novamente: "));
    }

}