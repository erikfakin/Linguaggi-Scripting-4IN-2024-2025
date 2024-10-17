const pulsanteStart = document.querySelector('.start');
const timer = document.querySelector('.timer');

function onStartClick(){
    pulsanteStart.style.display = "none";
}

pulsanteStart.addEventListener('click', onStartClick)

function onTimerUpdate(){
    
}
// Usero setInterval per fare il timer
setInterval(onTimerUpdate, 1000/60);
