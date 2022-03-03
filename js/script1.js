var numeriRandom = [];
var numeriUtente = [];
var punteggio = 0;
var possibilita = 84;
var numeroUtente;
var trovato = false;

while (numeriRandom.length < 16) {
  var numeroCasuale = generaNumeriRandom(1, 100);
  var cerca = presenteInArray(numeriRandom, numeroCasuale);
  if (cerca == false) {
    numeriRandom.push(numeroCasuale);
  }
}
console.log(numeriRandom);



while (numeriUtente.length < possibilita && trovato == false) {
  
  numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
  
  numUgualeInserito()

  if (presenteInArray(numeriUtente, numeroUtente) == false) {
    numeriUtente.push(numeroUtente);
    if (presenteInArray(numeriRandom, numeroUtente) == true) {
      console.log("lost");
      
      trovato = true;
    } else {
      punteggio++;
    }
  }
}
console.log(" è presente tra le bombe? " + trovato);
console.log("punteggio " + punteggio);

if (numeriUtente.length == possibilita) {
  console.log('win')
}

function generaNumeriRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function controlloRangeNumeri(min, max, number) {
  var result = false;
  if (number >= min && number <= max) {
    result = true;
  }
  return result;
}

function presenteInArray(array, element) {
  var i = 0;
  var result = false;
  while (i < array.length && result == false) {
    if (array[i] == element) {
      result = true;
    }
    i++;
  }
  return result;
}

function numUgualeInserito() {
  while (presenteInArray(numeriUtente, numeroUtente) == true) {
numeroUtente = prompt ("Avevi già inserito questo numero.");
  }
}

    console.log('Numero inserito: ' + numeroUtente);