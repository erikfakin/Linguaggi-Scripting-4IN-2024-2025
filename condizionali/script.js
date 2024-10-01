const prezzo = Number(prompt("Inserisci il prezzo del panino"));
const soldiInPortafoglio = Number(prompt("Quanti soldi hai in portafoglio?"));

if(prezzo > soldiInPortafoglio){
    console.log("Non ho tanti soldi in portafoglio.");
} else if (prezzo == soldiInPortafoglio){
    console.log("Compro il panino ma non mi resta niente.");
} else {
    const resto = soldiInPortafoglio - prezzo;
    console.log("Compro il panino e mi resta", resto);
}

// OPERTORE TERNARIO

const commento = prezzo > 5 ? "caro": "ok";

console.log("Il prezzo del panino e'", commento)