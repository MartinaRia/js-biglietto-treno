/*Quanti minuti mancano alla fine dell’ora?  (quindi script che quando aggiorno la pagina mi dice quanti minuti mancano);

Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande. */




//Quanti minuti mancano alla fine dell’ora?  (quindi script che quando aggiorno la pagina mi dice quanti minuti mancano);

//ore
var ora = new Date();
document.getElementById("ore").innerHTML = ora.getHours();

//minuti
var minuti = new Date();
document.getElementById("minuti").innerHTML = minuti.getMinutes();

//countdown
var countdown = 60 - minuti.getMinutes();
document.getElementById("countdown").innerHTML = countdown;

var nextHour = ora.getHours() + 1;
document.getElementById("next-hour").innerHTML = nextHour;
