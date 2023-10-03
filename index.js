const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const range = document.getElementById('range');
const rangeNumber = document.getElementById('range-number');
range.addEventListener('input', updateRangeValue);
let globalValue = range.value
function updateRangeValue() {
    globalValue = range.value
    rangeNumber.textContent = range.value
}

function generatePassword() {
    let password = []
    for (let i = 0; i < globalValue; i++) {
        let randomCharacter = Math.floor(Math.random() * 4)
        if (randomCharacter === 1) {
            let randomUpper = Math.floor(Math.random() * upperCase.length)
            password.push(upperCase[randomUpper])
        } else if (randomCharacter === 2) {
            let randomLower = Math.floor(Math.random() * lowerCase.length)
            password.push(lowerCase[randomLower])
        } else if (randomCharacter === 3) {
            let randomNumber = Math.floor(Math.random() * numbers.length)
            password.push(numbers[randomNumber])   
        } else {
            let randomSymbol = Math.floor(Math.random() * symbols.length)
            password.push(symbols[randomSymbol])
        }
    }
    const generatedPassword = password.join("")
    document.getElementById("copy-layout").value = generatedPassword
}

function copyToClipboard() {
    copyText = document.getElementById("copy-layout")
    copyText.select()
    navigator.clipboard.writeText(copyText.value)
}






