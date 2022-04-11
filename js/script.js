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

// di dafault stabilisco che il mio nome non sia presnte
let mailPresente = false;

// cerco la mail digitata dentro l'array classe 61
for(let i = 0; i < classe61.length; i++){
  // se la mail digitata è uguale a un elemento dell'array
  if(mail === classe61[i]){
    // memorizzo che è presente
    mailPresente = true;
  }
};

// Stampo il messaggio in base al risultato
if(mailPresente){
  output.innerHTML = 'Sei presente nella lista! Gioca hai dadi!'
  console.log('trovato');
} else {
  output.innerHTML = 'Non sei presente nella lista!'
  console.log('non trovato');  
}
