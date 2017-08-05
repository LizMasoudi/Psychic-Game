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


document.onkeyup = function(event) {

  	// Determines which key was pressed.
  	var userGuess = event.key;
  	console.log(userGuess);
  	var guessesTracker = document.createElement("p");
	guessesTracker.innerHTML = (userGuess + ", ");



	function win() {
		winsCounter++;
		message.innerHTML="YOU WON!";

	}

	function reset() {
		guessesRemainingCounter=9;
		message.innerHTML="";
		guessesJS.innerHTML="Guesses: ";
	}

	function lose () {
		lossesCounter++;
		message.innerHTML="Uh oh, you lost...";

	}


	if (guessesRemainingCounter > 1 && userGuess === myGuess) {
		win();
		winsJS.innerHTML = "Wins: " + winsCounter;
		reset();
		guessesRemainingJS.innerHTML = "Guesses Remaining: " + guessesRemainingCounter;
		

		console.log(winsCounter);
		console.log(lossesCounter);
		console.log(guessesRemainingCounter);
	}
	else if (guessesRemainingCounter > 1 && userGuess != myGuess) {
		// console.log("NOT YET!");
		guessesRemainingCounter--;
		guessesRemainingJS.innerHTML = "Guesses Remaining: " + guessesRemainingCounter;
		guessesJS.appendChild(guessesTracker);
		console.log(guessesRemainingCounter);
	}

	else {
		lose();
		lossesJS.innerHTML = "Losses: " + lossesCounter;		
		reset();
		guessesRemainingJS.innerHTML = "Guesses Remaining: " + guessesRemainingCounter;

		console.log(winsCounter);
		console.log(lossesCounter);
		console.log(guessesRemainingCounter);
		console.log(guessesTracker);
	}

  
}
