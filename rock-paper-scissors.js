function playRound(playerSelection, computerSelection) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

   if (computerSelection === playerSelection) {
    "You Lose! Paper beats Rock";
   } else {
    
   }
    
}

function getComputerChoice( rock ,paper ,scissors) {

    let rock = "rock";
    let paper = "paper";
    let scissors = "scissors";
    let randomInt = Math.floor(Math.random() * (3 - 1)) + 1;

    if (randomInt == 1) {
        return this.rock.toUpperCase();
        
    } else if (randomInt == 2){
        return paper;
    }else{
    return scissors;
    }
}

function getPlayerChoice( promptChoice) {
    let promptChoice = prompt("Rock? Paper? Scissors? Make Your Choice", "Make Your Choice");
    if (promptChoice != null) {
        return promptChoice;
}
}





const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));