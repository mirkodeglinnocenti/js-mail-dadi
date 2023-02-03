// console.log('Funziona')

//     Esercizio email
// Crea un array con una lista di email (stringhe)
// Chiedi all’utente la sua email (con il prompt), controlla che sia nella lista di email,
// stampa un messaggio appropriato sull’esito del controllo.



// Crea un array con una lista di email (stringhe)

const email = ['email1@gmail.com' , 'email2@gmail.com' , 'email3@gmail.com' , 'email4@gmail.com' ];

// console.log(email);

// Chiedi all’utente la sua email (con il prompt), controlla che sia nella lista di email

let userEmail = prompt ('Inserisci la tua email per verificare che sia in lista');

// console.log(userEmail);

let risultatoEmail = 'questa email non è presente';

for (let i = 0 ; i < email.length ; i++ ) {

    // console.log( email[i] );

    if ( email[i] === userEmail ) {
        risultatoEmail = 'questa email è già presente';
    } 
}

// stampa un messaggio appropriato sull’esito del controllo.

console.log(risultatoEmail);

const risultatoOutput = document.getElementById('risultato');

risultatoOutput.innerHTML = userEmail + ': ' + risultatoEmail;




// Esercizio Dadi

// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? 
// Se dobbiamo confrontare qualcosa che “cosa” ci serve?


// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 


// creazione array
const dadi = []

// generare numero random per giocatore e computer

let dadoGiocatore =  Math.floor(Math.random() * 6) ;

let dadoComputer =  Math.floor(Math.random() * 6) ;

console.log(dadoGiocatore , 'dado del giocatore');
console.log(dadoComputer , 'dado del computer');

// Inserire questi due numeri random dentro l'array

dadi.push(dadoGiocatore , dadoComputer)

console.log(dadi)

// confrontarli

for (let i=0; i < dadi.length - 1; i++) {

    // console.log(i)
    // console.log (dadi[0] , dadi[1])

    if (dadi[0] === dadi[1]) {
        console.log('Pareggio')
    } else if (dadi[0] > dadi[1]) {
        console.log('Il giocatore ha vinto')
    } else {
        console.log('Il computer ha vinto')
    }
}

// Seconda soluzione più ridotta


// generare numero random per giocatore e computer

// let dadoGiocatore =  Math.floor(Math.random() * 6) ;

// let dadoComputer =  Math.floor(Math.random() * 6) ;

// console.log(dadoGiocatore , 'dado del giocatore');
// console.log(dadoComputer , 'dado del computer');


// // confrontarli

// if (dadoGiocatore === dadoComputer) {
//     console.log('Pareggio')
// } else if (dadoGiocatore > dadoComputer) {
//     console.log('Il giocatore ha vinto')
// } else {
//     console.log('Il computer ha vinto')
// }