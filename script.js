/* ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Il prezzo del biglietto è definito in base ai km (0.21 € al km),
ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.*/

var tariffa
//numero km
var numKm = parseInt(prompt("Prego inserire il numero di chilometri che si intende percorrere"))
//età
var eta = parseInt(prompt("Prego inserire la propria età al momento del viaggio"))

//prezzo biglietto: #km * 0,21€
var prezzo = numKm * 0.21

//calcola sconto -20% per i minorenni <18
var scontoYoung = prezzo - ((prezzo/100)*20)

//calcola sconto -40% per i minorenni >65
var scontoSenior = prezzo - ((prezzo/100)*40)

if (eta < 18) {
  tariffa = scontoYoung
} else if (eta > 65) {
  tariffa = scontoSenior
} else {
  tariffa = prezzo
}

document.getElementById("tariffa-revenue").innerHTML = tariffa




//
// console.log("numero utente= " +  userNum);
// console.log("numero PC= " +  pcNum);
// console.log("somma= " +  sum);
