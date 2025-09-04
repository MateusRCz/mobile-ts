import promptSync from "prompt-sync";
const prompt = promptSync();

const n = Number(prompt("Quantas pessoas serao digitadas? "));

const pessoas = [];
const idades: string[] = [];
let mediaAlt = 0;
let contagem = 0;
let porcentagem = 0;


for(let i = 0; i < n; i++){

    console.log(`Dados da ${i + 1} pessoa:`);
    const nome = String(prompt("Nome: "));
    const idade = Number(prompt("Idade: "));
    const altura = String(prompt("Altura: "));

    pessoas.push({
        nome,
        idade,
        altura
    })
};



pessoas.forEach(element => {

    mediaAlt += Number(element.altura);

    if(element.idade < 16){

        contagem += 1;
        idades.push(element.nome);


    }

});


porcentagem = (contagem / n) * 100;
    
mediaAlt = mediaAlt / n;

console.log('=========================')

console.log(`Altura média: ${mediaAlt}`);
console.log(`Pessoas com menos de 16 anos: ${porcentagem.toFixed(1)}%`);

idades.forEach(element => {
    console.log(element);
});

