const auto = ['fiat', 'ford', 'audi'];

console.log(typeof auto);

// Quanti elementi ci sono nell'array
console.log("Elementi nella lista:",auto.length) //3

// Per accedere agli elementi
// dell'array uso gli index.
// L'index del primo elemento e' 0

console.log("Primo auto:",auto[0]);

// L'ultimo elemento in auto
console.log("Ultimo auto:",auto[auto.length-1]);

// Per aggiungere elementi nell'array alla fine dell'array
auto.push('bmw');
console.log("Dopo aver aggiunto bmw alla fine", auto);

auto.unshift('lancia');
console.log("Dopo aver aggiunto lancia all'inizio", auto);

// Per togliere elementi dalla fine dell'array
auto.pop();
console.log("Dopo aver tolto l'ultimo elemento nell'array:", auto);

// Per togliere l'elemento all'inizio dell'array
auto.shift();
console.log("Dopo aver tolto il primo elemento nell'array:", auto);