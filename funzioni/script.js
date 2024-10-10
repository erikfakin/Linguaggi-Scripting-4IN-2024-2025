// Definizione di una funzione
function nomeFunzione(parametro1, parametro2){
    console.log(parametro1, parametro2);
    return parametro1 + parametro2;
}

// Chiamiamo la funzione
// I valori che passiamo alla funzione si chiamano argomenti.
const risultato = nomeFunzione(5, 9);

console.log("Il risultato e'", risultato);

// Parametri con valori di default/predefiniti.
// Se chiamo la funzione senza argomenti, il parametro avra'
// il valore predefinito nella definizione della funzione.
// In questo caso il raggio avra' valore 1.
// Se passiamo l'argomento raggio quando chiamiamo la funzione,
// il suo valore sara' uguale all'argomento passato.
function calcolaAreaCerchio(raggio=1){
    return raggio**2*Math.PI;
}

const area = calcolaAreaCerchio();
console.log("Area del cerchio con raggio 1", area);

const area5 = calcolaAreaCerchio(5);
console.log("Area del cerchio con raggio 5", area5);


// Funzione anonime - funzioni senza nome
// Di solito assegniamo la funzione a una variabile.

const anonima = function(){
    console.log("Funzione anonima");
}

anonima();

// Arrow functions (Funzioni freccia).
// Un modo piu' compatto per scrivere le funzioni anonime.

const funzioneFreccia = () => {
    console.log("Funzione freccia");
}

funzioneFreccia()