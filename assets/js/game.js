var userInput = event.keyCode >= 65 && event.keyCode <=90;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var previousGuesses = [];

function updatePage();