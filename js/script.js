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

  //Split per convertire in un array di lettere,
  // reverse per invertire,
  // join per riconvertire


  if (reversed === str) {
    return alert("La tua parola è palindroma!");
  }

  else {
    return alert("La tua parola non è palindroma!");;
  }

}

funPalindroma(prompt("Inserisci un nome").toLowerCase());
