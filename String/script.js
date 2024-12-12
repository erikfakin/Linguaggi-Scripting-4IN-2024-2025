const stringa1 = "Ciao";
const stringa2 = 'a tutti!';
const stringa3 = `Saluto: ${stringa1} ${stringa2}`;

console.log(stringa3);

console.log("La lungezza di stringa3 e'", stringa3.length);

console.log("In UPPERCASE:", stringa3.toUpperCase());
console.log("In lowercase:", stringa3.toLowerCase());

const nome = "    Marco     ";
console.log("Nome senza spazi vuoti",nome.trim());

const testo = "Marco e' andato a fare la spesa in Spar";
const indexSpar = testo.indexOf("Spar");
console.log(testo, "--- La parola Spar si trova nell'index", indexSpar);
const indexKonzum = testo.indexOf("Konzum");
console.log("Index di KOnzum", indexKonzum);