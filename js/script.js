/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


// Creo una lista di utenti autorizzati
const classe61 = [
  'domenicogostino@icloud.com',
  'mihaibadia@icloud.com',
  'riccardobecattini@icloud.com',
  'manuelbenini@icloud.com',
  'brunobernardini@icloud.com',
  'guidobuono@icloud.com',
  'pierluigicancellaro@icloud.com',
  'francescocataletto@icloud.com',
  'stefanocravotta@icloud.com',
];


// Chiedo all'utente la sua mail 
const mail = prompt('Inserisci la tua mail');

let output = document.querySelector('#message-output');

// controllo che sia nella lista di chi può accedere
let mailPresente = false;

for(let i = 0; i < classe61.length; i++){
  if(mail === classe61[i]){
    mailPresente = true;
    output.innerHTML = 'Sei presente nella lista!'
  }else{
    output.innerHTML = 'Non sei presente nella lista!'
  }
};
