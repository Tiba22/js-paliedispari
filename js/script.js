// GOAL:
// Una funzione per capire se la parola è
// palindroma


// L'utente sceglie pari o dispari e un numero
// da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto.


//Esercizio Parola Palindroma

// function funPalindroma(str) {
//
//   var reversed = str.split('').reverse().join('');
//   var pal = 'La tua parola è palindroma!';
//   var notPal = 'La tua parola non è palindroma!';
//
//   //Split per convertire in un array di lettere,
//   // reverse per invertire,
//   // join per riconvertire
//
//
//   if (reversed === str) {
//     return document.getElementById('maintitle').innerHTML = pal;
//   }
//
//   else {
//     return document.getElementById('maintitle').innerHTML = notPal;
//   }
// }
//
// funPalindroma(prompt("Inserisci un nome").toLowerCase());


//Esercizio 2

var numUtente = parseInt(prompt('Scegli un numero da 1 a 5'));
var parDisp = prompt('Scegli pari o dispari');

console.log(numUtente, parDisp);

function play(){
  var numPC = Math.floor(Math.random() * 5) +1;
  var sum = numUtente + numPC;
  var risultato = 'Hai scelto il numero ' + numUtente + ', il PC ha scelto ' + numPC + '<br> Hai scelto ' + parDisp + ', la somma totale è ' + sum + '<br>';

  console.log(numPC, numUtente, sum);

  if (sum % 2 == 0 && parDisp == 'pari') {

    document.getElementById('maintitle').innerHTML += risultato + 'Hai vinto!'

  }else if (sum % 2 == 0 && parDisp == 'dispari') {

    document.getElementById('maintitle').innerHTML += risultato + 'Il PC ha vinto!'

  }else if (sum % 2 == 1 && parDisp == 'dispari') {

    document.getElementById('maintitle').innerHTML += risultato + 'Hai vinto!'

  }else {

    document.getElementById('maintitle').innerHTML += risultato + 'Il PC ha vinto!'

  }



  // document.getElementById('maintitle').innerHTML = 'Hai scelto il numero ' + numUtente + ', il PC ha scelto ' + numPC + '<br>' + 'Hai scelto ' + parDisp + ', la somma totale è ' + sum + '<br>'

}

play();
