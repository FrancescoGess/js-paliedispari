/* Pari e Dispari
L’utente sceglie pari o dispari e un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */



//utente sceglie pari o dispari
var pariDispari = prompt('Pari o Dispari?', 'Pari');
console.log(pariDispari);
//utente sceglie numero
var numero = parseInt(prompt('Scegli un numero da 1 a 5', '2'));
console.log(numero);



var numeroPc = numeroRand(1 , 5)
console.log(numeroPc);

//funzione numero random
function numeroRand (min, max) {
    var numeroPc = Math.floor(Math.random() * ( max - min + 1)) + min;
    return numeroPc;
}
// funzione per somma numeri
function sommaNumeri (num1 , num2) {
    var somma = num1 + num2;
    return somma;
}
//funzione per somma numeri
var addizione = sommaNumeri(numero, numeroPc)
console.log(addizione);


// funzione per controllo somma pari o dispari

function controlloSomma (numero) {
    if (numero % 2 == 0) {
        return 'Pari';
} 
    return 'Dispari'
}
//invocazione funzione per controllo somma pari o dispari
if (controlloSomma(addizione) == 'Pari') {
    console.log('Pari');
} else {
    console.log('Dispari');
}

//stabilire vincitore
if (pariDispari == controlloSomma(addizione)) {
    console.log('Hai vinto');
    
} else {
    console.log('Hai perso');
    
}