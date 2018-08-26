

var selectableWords = ["italy", "france", "england", "scotland", "brazil", "canada", "germany", "mexico", "belgium", "china", "japan", "russia", "jordan", "india", "haiti", "egypt"];

var triesCounter = 15;
var remainingTries = 0;
var currentWord;
var guessedLetter = [];
var guessing = [];
var hasStarted = false;
var hasFinished = false;
var wins = 0;

function reset() {
    remainingTries = triesCounter;
    hasStarted = false;

    currentWord = Math.floor(Math.random() * (selectableWords.length));
    console.log(currentWord);
    guessing = [];
    guessedLetter = [];


    for (var i = 0; i < selectableWords[currentWord].length; i++) {
        guessing.push("_");
    }

    clearDisplay();

};//ends reset()

reset();
document.getElementById("winsCounter").innerText = wins;

function clearDisplay() {
    
    document.getElementById("currentWord").innerText = "";
    var displayString = '';
    for (var i = 0; i < guessing.length; i++) {
        displayString += (guessing[i] + " ");
    }
    document.getElementById("currentWord").innerText = displayString;
    document.getElementById("guessesCounter").innerText = remainingTries;
    document.getElementById("lettersGuessed").innerText = guessedLetter;
    document.getElementById("message").innerText = "";
   
}//ends clearDisplay()

document.onkeydown = function(event) {
    //console.log(event.keyCode);
    if(hasFinished) {
        reset();
        hasFinished = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};//ends onkeydown function


function makeGuess(letter) {
    if (remainingTries > 0) {
        if (!hasStarted) {
            hasStarted = true;
        }
        if (guessedLetter.indexOf(letter) === -1) {
            if (selectableWords[currentWord].indexOf(letter) === -1) {
                guessedLetter.push(letter);
            }
        
            evaluateGuess(letter);
        }
    }
    clearDisplay(); 
    checkWin();
   
};

function evaluateGuess(letter) {

    var positions = [];

    for (var i = 0; i < selectableWords[currentWord].length; i++) {
        if(selectableWords[currentWord][i] === letter) {
        positions.push(i);
        }
    }
    if (positions.length <= 0) {
        remainingTries--;
        
    } else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            guessing[positions[i]] = letter;
        }
    }
};

function checkWin() {
    var youLost = "You have lost.";
    var youWin = "You have won!";
   
    if(remainingTries <= 0) {
        
        hasFinished = true;
        document.getElementById("message").innerText = youLost;
    } 
    if(guessing.indexOf("_") === -1) {
        
        hasFinished = true;
        wins++;
        document.getElementById("winsCounter").innerText = wins;
        document.getElementById("message").innerText = youWin;
    } 
    
};//ends checkWin()

