const pulsanteStart = document.querySelector('.start');
const timer = document.querySelector('.timer');
const contenitore = document.querySelector('.contenitore');
const total = document.querySelector('.total');
const cps = document.querySelector('.cps');

let startTime;
let idInterval;
let clickTotali = 0;
let time = 0;

let hasStarted = false;

function onStartClick(){
    pulsanteStart.style.display = "none";
    hasStarted = true;
    time = 0;
    clickTotali = 0;
    startTime = Date.now();
    idInterval = setInterval(onTimerUpdate, 1000/60);
}

pulsanteStart.addEventListener('click', onStartClick)

function onTimerUpdate(){
    time = Date.now() - startTime
    timer.innerHTML = "Tempo trascorso: " + time / 1000; 
    total.innerHTML = "Click totali: " + clickTotali;
    cps.innerHTML = "CPS: " + clickTotali / (time / 1000);
    if(time >= 5000){
        clearInterval(idInterval);
        hasStarted = false;
    }
}

function onContenitoreClick(){
    if(hasStarted == true){
        clickTotali = clickTotali + 1;
    }
}

contenitore.addEventListener('click', onContenitoreClick)

