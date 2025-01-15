// Fai due input e un pulsante. 
// Gli input sono numeri e cliccando sul pulsante
// voglio scrivere tutti i numeri compresi tra
// i numeri passati in input in un elemento p.

const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');
const pulsante = document.getElementById('pulsante');
const risultato = document.getElementById('risultato');

function onButtonClick(){
    const numero1 = Number(inputNumero1.value); //5
    const numero2 = Number(inputNumero2.value); //10
    let stringa = "";
    
    for(let i=numero1; i <= numero2; i = i + 1){
        stringa = stringa + i + " ";
    }
    
    risultato.innerText = stringa;

}

pulsante.addEventListener('click', onButtonClick);