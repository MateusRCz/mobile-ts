import promptSync from 'prompt-sync';
const prompt = promptSync();
let condicao = true;
let alcool = 0;
let gasolina = 0;
let diesel = 0;
let codigo = 0;

while(condicao){
    while(codigo != 4){
        codigo = Number(prompt("Informe um codigo (1, 2, 3) ou 4 para parar: "));
        if(codigo === 1){
        alcool++;
        }
        else if(codigo === 2){
            gasolina++;
        }
        else if(codigo === 3){
            diesel++;
        }
    }
        console.log(`MUITO OBRIGADO \nAlcool: ${alcool} \nGasolina: ${gasolina} \nDiesel: ${diesel}`);
        condicao = false;
}



