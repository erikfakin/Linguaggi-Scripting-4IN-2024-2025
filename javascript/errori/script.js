// const risultato = numeratore;

try {
    // Qua' metto il codeice che potrebbe darmi errori
    const risultato = numeratore / denominatore;
    console.log("Risultato", risultato);
} catch(errore){
    // Gestione dell'errore
    console.log("Errore", errore)
}

try{
    // metto il codice che potrebbe darmi errori
    const numero = Math.round(Math.random());
    if (numero == 0){
        console.log(variabileNonDefinita)
    }
}
catch(e){
    console.log("errore", e)
}
finally{
    // blocco di codice che si esegue sempre, se succede qualche
    // errore oppure no.

    console.log("Nel finally")

}

function formattaStringa(stringa){
    if (typeof stringa != "string"){
        throw new Error("Il parametro deve essere una stringa.")
    }
    console.log(stringa.toUpperCase())
}

try{
    const input = 8;
    formattaStringa(input);
} catch(e){
    console.log("Errore: ", e);
} finally {
    console.log("nel finally del verifica stringa");
}



console.log("Dopo il try catch")