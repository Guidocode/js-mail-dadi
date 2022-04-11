/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere (creare quindi una lista di utenti autorizzati),
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/


// MAIL 

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
// const mail = prompt('Inserisci la tua mail');
const mail = 'guidobuono@icloud.com';

const btnTira = document.querySelector('.gb-btn');

let mailOutput = document.querySelector('#mail-output');
let dadiOutput = document.querySelector('#dadi-output');
let arrowDown = document.querySelector('.arrow');


// di dafault stabilisco che il mio nome non sia presnte
let mailPresente = false;

// controllo che sia nella lista di chi può accedere
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
  mailOutput.innerHTML = 'Sei presente nella lista! Gioca hai dadi!';
  console.log('trovato');
  arrowDown.classList.add('opacity');
  dadiOutput.innerHTML = 'Tira i dadi!'
  btnTira.classList.add('active');
} else {
  mailOutput.innerHTML = 'Non sei presente nella lista!'
  console.log('non trovato');  
  dadiOutput.innerHTML = 'Mi spiace, non puoi giocare...'
}


// DADI 
let nPc = document.querySelector('.pc');
let nUser = document.querySelector('.user');
let nRandom = document.querySelector('.n-random');
let winLose = document.querySelector('.win-lose');


btnTira.addEventListener('click', function(){
  nRandom.classList.add('opacity');
  nPc.innerHTML = Math.ceil(Math.random()*6);
  nUser.innerHTML = Math.ceil(Math.random()*6);


  console.log(nPc);
  console.log(nUser);
  
  // NON FUNZIONA 
  if(nPc > nUser){
    winLose.innerHTML = 'Hai perso...'
  }else if(nPc < nUser){
    winLose.innerHTML = 'Hai vinto!'
  }else{
    winLose.innerHTML = 'Pareggio!'
  }
});
