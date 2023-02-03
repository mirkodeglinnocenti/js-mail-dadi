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

for (let i = 0 ; i < email.length ; i++ ) {

    // console.log( email[i] );


    if ( email[i] === userEmail ) {
        console.log('Email già presente')
    } else {
        console.log('Email non presente')
    }


}