let score = 0;
let PassWord = "Ready";
let shadowSize = 10;
let blu = 0;

function load() {
    checkCode()
    document.body.setAttribute("password", PassWord);

}


function checkCode() {
    const userInput = document.getElementById('Inputcode').value.trim();
    const hiddenCode = PassWord;

    

   

    if (userInput == hiddenCode) {
        feedback.textContent = "Correct! You've found the code!";
        feedback.style.color = "green";
        score++;
        PassWord = generNewPass();
        changBackgroundAndPosition()
        changBody()
        
    } else {
        feedback.textContent = "No";
        feedback.style.color = "red";
    }
}

function generNewPass() {
    const charaters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let newPasswords = "";
    for (let i = 0; i < 8; i++) {
        newPasswords += charaters.charAt(Math.floor(Math.random() * charaters.length));
    }
    return newPasswords;
}


function changBackgroundAndPosition() {
    document.body.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 60%, 80%)`;

    const hiddenCodeElement = document.querySelector('.hiden');
    hiddenCodeElement.style.top = `${Math.floor(Math.random() * 80) + 10}%`;
    hiddenCodeElement.style.left = `${Math.floor(Math.random() * 80) + 10}%`;
    
    const randomRote = Math.floor(Math.random() * 280) - 0;
    hiddenCodeElement.style.transform = `rotate(${randomRote}deg)`;
    

    hiddenCodeElement.textContent = PassWord
}

function changBody() {
    shadowSize += 85;
    blu += 0.25;
    const randomX = Math.floor(Math.random() * 30) - 15;
    const randomY = Math.floor(Math.random() * 30) - 15;
    const randomYx = Math.floor(Math.random() * 30) - 15;
    const blur = Math.floor(Math.random() * 10) + 10;

    document.getElementById('Bgg').style.boxShadow = `${randomX + shadowSize}px ${randomY + shadowSize}px ${randomYx + shadowSize}px ${blur + shadowSize}px rgba(0, 0, 0, 0.5) inset`;
    document.body.style.filter = `blur(${blu}px)`;
}


load()