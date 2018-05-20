
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var previousGuesses = [];
var remainingGuesses = 10;

function updatePage() { //updates all four page counters when needed
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("previousGuesses").innerText = previousGuesses;
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
}

function newGame() { //the parent code does enough to reset the game and start a new one
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    remainingGuesses = 10;
    previousGuesses.length = 0;

    var selectedLetter = alphabet[Math.floor(Math.random() * (alphabet.length))]; //sets the genie's letter
    
    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //sets the user guess variable to whichever key you press
        previousGuesses.push(userGuess);
        if (userGuess === selectedLetter) {
            wins++;
            newGame();
        }

        else if (remainingGuesses === 0) {
            losses++;
            newGame();
        }

        else {
            if(event.keyCode >= 65 && event.keyCode <=90) { //this makes sure we only changes your remaining guesses if you press a letter key, not a symbol
                remainingGuesses--;
                updatePage();
            }
        }
    }
    console.log(selectedLetter);
}