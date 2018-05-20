
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var previousGuesses = [];
var remainingGuesses = 10;

function updatePage() {
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
}

function newGame() {
    var selectedLetter = alphabet[Math.floor(Math.random() * (alphabet.length))];
    updatePage();
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        if (userGuess === selectedLetter) {
            wins++;
            updatePage();
        }
        else {
            if(event.keyCode >= 65 && event.keyCode <=90) { // if you press keys a-z run the script below.
                remainingGuesses--;
                updatePage();
            }
        }
    }
    console.log(selectedLetter);
}