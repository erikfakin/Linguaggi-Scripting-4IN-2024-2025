// Selettore con l'id
let titolo = document.getElementById('titolo');
titolo.innerText = 'Titolo da JS';
titolo.style.color = '#ffbbcc'; 

// Possiamo utilizzare i selettori css

// document.querySelector mi ritorna solo un elemento, 
// il primo che trova
const primoElemento = document.querySelector('.elemento');
console.log("Primo elemento",primoElemento);
primoElemento.innerText = "Primo elemento";

// document.querySelectorAll mi ritorna la lista di 
// tutti gli elementi
const elementi = document.querySelectorAll('.elemento');
console.log("Lista di elementi", elementi);

