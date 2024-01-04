let NomeHeroi = "Thor Calvo"
let QuantidadeExp = "17.000"
let Patente

if (QuantidadeExp <= 1.000) {
    Patente = "Ferro"
}
else if (QuantidadeExp == "1.001" || QuantidadeExp <= 2.000) {
    Patente = "Bronze"
}
else if (QuantidadeExp == "2.001" || QuantidadeExp <= 5.000) {
    Patente = "Prata"
}
 else if (QuantidadeExp == "6.001" || QuantidadeExp <= 7.000) {
    Patente = "Ouro"
}
else if (QuantidadeExp == "7.001" || QuantidadeExp <= 8.000) {
    Patente = "Platina"
}
else if (QuantidadeExp == "8.001" || QuantidadeExp <= 9.000) {
    Patente = "Ascendente"
}
else if (QuantidadeExp == "9.001" || QuantidadeExp <= 10.000) {
    Patente = "Imortal"
}
else if (QuantidadeExp >= "10.001" ) {
    Patente = "Radiante"
} 

console.log ("O herói de nome " + NomeHeroi, "está no nível de " + Patente)