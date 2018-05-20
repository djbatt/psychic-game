var alphabet = {
    a: 65,
    b: 66,
    c: 67,
    d: 68,
    e: 69,
    f: 70,
    g: 71,
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
}

var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var previousGuesses = [];

function updatePage() {
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
}

function newGame() {
    var selectedLetter = Math.floor(Math.random() * (Object.keys(alphabet).length) + 65);
    console.log(selectedLetter);
    updatePage();
}

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);
}
