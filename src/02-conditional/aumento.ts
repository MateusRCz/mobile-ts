import promptSync from "prompt-sync";
const prompt = promptSync();

const salario = Number(prompt("Digite o salario da pessoa: "));

if(salario <= 1000){
    console.log(`Novo salario = R$${(salario + (salario * 0.20)).toFixed(2)}`);
    console.log(`Aumento = R$${(salario * 0.20).toFixed(2)}`);
    console.log(`Porcentagem = 20%`);
}else if(salario > 1000 && salario <= 3000){
    console.log(`Novo salario = R$${(salario + (salario * 0.15)).toFixed(2)}`);
    console.log(`Aumento = R$${(salario * 0.15).toFixed(2)}`);
    console.log(`Porcentagem = 15%`);
}else if(salario > 3000 && salario <= 8000){
    console.log(`Novo salario = R$${(salario + (salario * 0.10)).toFixed(2)}`);
    console.log(`Aumento = R$${(salario * 0.10).toFixed(2)}`);
    console.log(`Porcentagem = 10%`);
}else if(salario > 8000){
    console.log(`Novo salario = R$${(salario + (salario * 0.05)).toFixed(2)}`);
    console.log(`Aumento = R$${(salario * 0.05).toFixed(2)}`);
    console.log(`Porcentagem = 5%`);
}