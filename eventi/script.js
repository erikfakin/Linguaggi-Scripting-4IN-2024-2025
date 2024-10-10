// EVENTI
// E' una sorta di "segnale" che indica che qualcosa e' accaduto.
// Ad es. click del mouse, caricamento di una pagina...
// Utilizzando gli eventi possiamo rispondere a queste interazioni
// eseguendo delle funzioni.

// Esempi di eventi piu' comuni:
//      - click
//      - mouseover
//      - keydown
//      - submit

// Event listener
// Per ascoltare e gestire un evento.

// come si usa:
// elemento.addEventListener('tipoDiEvento', funzioneDaEseguire);

const contenitore = document.getElementById('colore');

function onMouseMove(evento){
    contenitore.style.backgroundColor = "rgb(" + evento.clientX + ", " + evento.clientY+", 0)";
    // contenitore.innerText = "Posizione x del mouse:" + evento.clientX + ", posizione y del mouse: " + evento.clientY;
    // Template literals - ci permettono di usare variabili nelle stringhe
    contenitore.innerText = `Posizione x del mouse: ${evento.clientX}, posizione y del mouse: ${evento.clientY}`
    console.log("Mouse si muove");
}

document.addEventListener('mousemove', onMouseMove);

let numeroDiClick = 0;

function onMouseClick(e){
    // console.log(e);
    numeroDiClick++;
    const clickAlSecondo = numeroDiClick / (e.timeStamp / 1000);
    console.log("click al secondo", clickAlSecondo);
}

contenitore.addEventListener('click', onMouseClick);