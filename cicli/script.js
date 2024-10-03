// ciclo for
// for(inizializzazione; condizione; incremento)

for(let i = 0; i < 10; i++){
    console.log("Ciclo for", i);
}

// ciclo while
let ripetizioni = 0;

while(ripetizioni < 10){
    console.log("Ciclo while", ripetizioni);
    //stessa cosa di 
    //ripetizioni++;
    ripetizioni = ripetizioni + 1;
}

// Prendo un numero intero a caso tra 0 e 9
let numeroRandom = Math.floor(Math.random() * 10);
// se il numero random e' uguale a 5 mi fermo, altrimenti
// ripeti il while e crea un nuovo numero random
while(numeroRandom !== 5){
    console.log("Numero random uguale a", numeroRandom);
    numeroRandom = Math.floor(Math.random() * 10);
}

console.log("Siamo usciti dal while perche il numero random e' uguale a",
    numeroRandom);


// Ciclo do...while
// a differenza del ciclo while, il blocco di codice
// viene seguito almeno una volta, anche se la condizione e' falsa
let r = 100;
do{
    console.log("Ciclo do while", r);
    r++;
} while(r < 10);

// Cicli for...of e for...in

// Per fare il ciclo su iterabili ad esempio le liste
const numeri = [1, 5, 3, 2, 8];
for (const numero of numeri) {
    console.log("Il numero e' uguale a", numero);
}

const persona = {
    'nome': 'Ivan',
    'eta': 18,
    'classe': 'IVb'
}

for(const chiave in persona){
    console.log("La chiave e'", chiave, ",il valore e'", persona[chiave]);
}