/* const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
} */



gameRPS();

function gameRPS() {

  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";

  let validatedPrompt = false;
  computerRoundsWon = 0;
  playerRoundsWon = 0;
  let round = 0;


  //loop rounds and keep track of rounds and winner
  while (round < 5) {
    playRound();
  }

  //compare who won the most rounds
  if (playerRoundsWon > computerRoundsWon) {
    return console.log("You win!\n Total Rounds played : " + round + " \n you won " + playerRoundsWon + " rounds");

  } else {
    return console.log("You lost!\n Total Rounds played : " + round + " \n you won " + playerRoundsWon + " rounds");

  }

  //function to get players choice and
  //change it to a standard format for comparison ie. lowercase

  function getPlayersChoice() {

    //prompt user for choice
    let playersChoice = prompt("Choose rock, paper, or scissors: ").toLowerCase();


    //validate whether its null or incorrect values
    while (playersChoice !== null) {

      if ((playersChoice === rock) ||
        (playersChoice === paper) ||
        (playersChoice === scissors)) {

        return playersChoice, validatedPrompt = true;

      }
      else {
        return console.log(`Choice must be rock, paper, or scissors. You entered ${playersChoice}. Try again.`);

      }
    }
  }

  //function to get computer choice using a randomized approach
  function getComputerChoice(computersChoice) {

    var computersNumber = Math.floor(Math.random() * 3);

    //assign correct values to corresponding plays 
    if (computersNumber == 0) {
      return computersChoice = rock;

    }
    else if (computersNumber == 1) {
      return computersChoice = paper;

    }
    else {
      return computersChoice = scissors;
    }
  }

  //start round
  function playRound() {
    //get both choices
    let playerSelection = getPlayersChoice();
    let computerSelection = getComputerChoice();

    //increment round
    ++round;

    //check to make sure prompt is accepted
    while (validatedPrompt) {

      //validate winner and increment who won
      if (playerSelection === computerSelection) {
        return console.log(`Its a tie! You chose ${playerSelection} Computers choice was ${computerSelection} Try again. Round ${round}`);
      }
      else if ((playerSelection === rock && computerSelection === scissors) ||
        (playerSelection === paper && computerSelection === rock) ||
        (playerSelection === scissors && computerSelection === paper)) {
        playerRoundsWon++;
        return console.log(`You won this round! You chose ${playerSelection} Computers choice was ${computerSelection} Try again. Round ${round}`);

      }
      else {
        computerRoundsWon++;
        return console.log(`The lose this round! You chose ${playerSelection} Computers choice was ${computerSelection} Try again. Round ${round}`);
      }

    }
  }
}

