var prompt = require("prompt-sync")();

var guesses = 0;
var number = Math.floor(Math.random() * 100) + 1; //random number from 1 to 100, inclusive;
var guess = 0;
var previousGuesses = [];

while(true){
  guess = prompt("Guess a number: ");

  if(guess == "exit") break;

  guess = parseInt(guess);

  if(isNaN(guess)) {
    console.log("Not a number! Try again!");
  }
  else if(previousGuesses.indexOf(guess) >= 0){
      console.log("Already Guessed!");
  }
  else if(guess == number) {
    guesses++;
    var plural = "";
    if(guesses > 1) plural = "s";
    console.log("You got it! You took " + guesses + " attempt" + plural + "!");
    break;
  }
  else if(guess > number){
    guesses++;
    previousGuesses.push(guess);
    console.log("Too High!");
  }
  else if(guess < number){
    guesses++;
    previousGuesses.push(guess);
    console.log("Too Low!");
  }

}