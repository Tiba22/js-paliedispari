// GOAL:
// Una funzione per capire se la parola è
// palindroma
// L'utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.


function funPalindroma(str) {

  var reversed = str.split('').reverse().join('');
  var pal = 'La tua parola è palindroma!';
  var notPal = 'La tua parola non è palindroma!';

  //Split per convertire in un array di lettere,
  // reverse per invertire,
  // join per riconvertire


  if (reversed === str) {
    return document.getElementById('maintitle').innerHTML = pal;
  }

  else {
    return document.getElementById('maintitle').innerHTML = notPal;
  }

}

funPalindroma(prompt("Inserisci un nome").toLowerCase());
