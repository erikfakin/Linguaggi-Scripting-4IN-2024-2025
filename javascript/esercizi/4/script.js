const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');
const risultatoP = document.getElementById('risultato');

usernames = ["topogigio", "alibaba", "mohamed"];
passwords = {
    "topogigio": "1223",
    "alibaba": "baba",
    "mohamed": "0000"
};

submitButton.addEventListener('click', onButtonClick)

function onButtonClick(){
    const username = usernameInput.value;
    const password = passwordInput.value;

    
}