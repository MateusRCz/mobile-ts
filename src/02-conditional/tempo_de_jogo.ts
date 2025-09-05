import promptSync from "prompt-sync";
const prompt = promptSync();

const horaInicio = Number(prompt("Hora inicial: "));
const horaFim = Number(prompt("Hora final: "));

if(horaFim > horaInicio){
    console.log(`O JOGO DUROU ${horaFim - horaInicio} HORA(S)`);

}else {
    console.log(`O JOGO DUROU ${(24 - horaInicio) + horaFim} HORA(S)`);
}