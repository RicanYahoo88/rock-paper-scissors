/* const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
} */

playRound();

function getPlayersChoice() {
  let playersChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();
  return playersChoice;
}

function getComputerChoice(computersChoice) {
  var computersNumber = Math.floor(Math.random() * 3);

  if (computersNumber == 0) {
    return computersChoice = "rock";

  }
  else if (computersNumber == 1) {
    return computersChoice = "paper";

  }
  else {
    return computersChoice = "scissors";
  }
}

function playRound() {

  /*   do {
      guess = prompt(text);
      if (number < guess) {
          text = "You've guessed too high!";
      } else if (number > guess) {
          text = "You've guessed too low!";
      }
  } while (guess != number);
  document.write("Good Job!"); */

  let rock = "rock";
  let paper = "paper";
  let scissors = "scissors";

  let playerSelection = getPlayersChoice();
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return console.log(`Its a tie! You chose ${playerSelection}Computers choice was ${computerSelection} Try again.`);
  } else if((playerSelection === rock && computerSelection === scissors) ||
            (playerSelection === paper && computerSelection === rock) ||
            (playerSelection === scissors  && computerSelection === paper)){
              return console.log("You won! ");

  }else {
    return console.log("The computer won!");
  }

}  


