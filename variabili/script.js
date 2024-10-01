var nome = "Luca"; // variabile tradizionale, non si usa di solito

console.log("Nome: ", nome);

let cognome = "Rossi"; // variabile il cui valore puo' cambiare

console.log("Cognome: ", cognome);
cognome = "Markovic";
console.log("Cognome: ", cognome);


//console.log("OIB: ", oib);
const oib = 123547383; // variabile costante, il valore non puo cambiare
console.log("OIB: ", oib);
// oib = 214124; // ci da un errore

//console.log("Dopo l'errore: ", oib);

// Tipi di variabili

const stringa = "Tes'to"; // stringa

console.log("Il tipo di variabile di stringa e'", typeof stringa);

const numero = 12345676543; // numero
const booleano = true; // booleano - true o false
const lista = [1, 2, "tre"]; // lista
const oggettoPersona = {
    'nome': 'Marco',
    'cognome': 'Markovic',
    'anni': 18
};                              // oggetto / object

// se vogliammo accedere al secondo elemento della lista
console.log(lista[1]);

// se vogliamo accedere al nome della persona
console.log(oggettoPersona['nome']);




