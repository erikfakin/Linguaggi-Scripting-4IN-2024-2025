console.log("Informazioni generiche utili per degub e messagi informativi");

console.error("Per mostrare errori");

console.warn("Attenzione! Per mostrare avvisi");

console.info("Info! L'applicazione funziona.");

const studenti = [
    {
        nome: 'Marco',
        eta: 17
    },
    {
        nome: 'Laura',
        eta: 16
    },
    {
        nome: 'Kevin',
        eta: 18
    }
];

console.table(studenti);

const saldo = -10;

// Scrive nella console il messaggio come un errore se la condozione
// e' falsa.
// TEST
console.assert(saldo >= 0, "Attenzione, sei in rosso!");
