var winsJS = document.getElementById("wins");
var lossesJS = document.getElementById("losses");
var guessesRemainingJS = document.getElementById("guessesRemaining");
var guessesJS = document.getElementById("guesses");
var message = document.getElementById("message");

var winsCounter = 0;
var lossesCounter = 0;
var guessesRemainingCounter = 9;

winsJS.innerHTML = "Wins: " + winsCounter;
lossesJS.innerHTML = "Losses: " + lossesCounter;
guessesRemainingJS.innerHTML = "Guesses Remaining: " + guessesRemainingCounter;


// Randomly chooses a choice from the possibilities array, which becomes my guess.
var possiblities = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var myGuess = possiblities[Math.floor(Math.random() * possiblities.length)+1];
console.log(myGuess);

// An incorrect user guess (counter - 1, and write it to the DOM)
function guess() {
	guessesRemainingCounter--;
	guessesRemainingJS.innerHTML = "Guesses Remaining: " + guessesRemainingCounter;
}

// A Win (counter + 1, write to the DOM, and write message to DOM indicating win)
function win() {
	winsCounter++;
	winsJS.innerHTML = "Wins: " + winsCounter;
	guessesRemainingJS.innerHTML = "Guesses Remaining: " + guessesRemainingCounter;
	message.innerHTML="YOU WON!";
	reset();

}

// A loss (counter - 1, write to the DOM, and write a message to DOM indicating loss)
function lose () {
	lossesCounter++;
	lossesJS.innerHTML = "Losses: " + lossesCounter;
	guessesRemainingJS.innerHTML = "Guesses Remaining: " + guessesRemainingCounter;
	message.innerHTML="Uh oh, you lost...";
	reset();

}

// A reset function (reset guess counter and write to DOM, reset guess list and write to DOM
// and pick a new letter for the computer guess)
function reset() {
	guessesRemainingCounter=9;
	message.innerHTML="";
	guessesJS.innerHTML="Guesses: ";
	myGuess = possiblities[Math.floor(Math.random() * possiblities.length)+1];
	console.log(myGuess);

}


document.onkeyup = function(event) {

  	// Determines which key was pressed, and writes it to the DOM
  	var userGuess = event.key;
  	var guessesTracker = document.createElement("p");
	guessesTracker.innerHTML = (userGuess + ", ");

	if (guessesRemainingCounter > 1 && userGuess === myGuess) {
		win();
	}
	else if (guessesRemainingCounter > 1 && userGuess != myGuess) {
		guess();
		guessesJS.appendChild(guessesTracker);
	}
	else {
		lose();
	}
}
