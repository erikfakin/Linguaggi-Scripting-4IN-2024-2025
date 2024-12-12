
const barzelettaP = document.querySelector('#barzeletta p')
const barzelettaImg = document.querySelector("#barzeletta img")
const getBarzelettaBtn = document.querySelector("#barzeletta-btn")

console.log(barzelettaP)
function getBarzeletta(){
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => {
        return response.json()})
    .then(data => {
        barzelettaP.innerHTML = data.value;
        barzelettaImg.src = data.icon_url;
        console.log(data)
})
}
getBarzelettaBtn.addEventListener('click', getBarzeletta)


console.log(a)