
const gameRPS = () => {

  playRound();

  let round = 0;
  let playerScore = 0;
  let computerScore = 0;


  //function to get computer choice using a randomized approach
  function getComputerChoice() {
    const computerOptions = ['rock', 'paper', 'scissors'];

    const computersNumber = Math.floor(Math.random() * 3);
    const computersChoice = computerOptions[computersNumber];

    console.log(computersChoice);
    return computersChoice;
  }


  //start round
  function playRound() { 

    
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');

    //get both choices
    let playerSelection = [rockBtn, paperBtn, scissorsBtn];
    

    playerSelection.forEach(selection => {
      selection.addEventListener('click', function () {
        539555
        let computerSelection = getComputerChoice();

        const roundsLeft = document.querySelector('.rounds-left');
        round++;
        roundsLeft.innerText = `Rounds Left: ${10 - round}`;

        winner(this.innerText, computerSelection)

        if (round == 10) {
          gameOver(playerSelection, roundsLeft);
        }
      })
    })
  }


  const winner = (playerSelection, computerSelection) => {

    const result = document.querySelector('.result');
    const playerRoundsWon = document.querySelector('.player-rounds-won');
    const computerRoundsWon = document.querySelector('.computer-rounds-won');
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
      result.textContent = `Its a tie! You chose ${playerSelection} Computers choice was ${computerSelection} Try again. Round ${round}`
    }
    else if (playerSelection == 'rock') {
      if (computerSelection == 'paper') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerRoundsWon.textContent = computerScore;
      }
      else {
        result.textContent = 'Player Won';
        playerScore++;
        playerRoundsWon.textContent = playerScore;
      }
    }
    else if (playerSelection == 'scissors') {
      if (computerSelection == 'rock') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerRoundsWon.textContent = computerScore;
      }
      else {
        result.textContent = 'Player Won';
        playerScore++;
        playerRoundsWon.textContent = playerScore;
      }
    }
    else if (playerSelection == 'paper') {
      if (computerSelection == 'scissors') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerRoundsWon.textContent = computerScore;
      }
      else {
        result.textContent = 'Player Won';
        playerScore++;
        playerRoundsWon.textContent = playerScore;
      }
    }
  }

  const gameOver = (playerSelection,roundsLeft) => {
    const result = document.querySelector('.result');
    const playerRoundsWon = document.querySelector('.player-rounds-won');
    const computerRoundsWon = document.querySelector('.computer-rounds-won');
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
      result.textContent = `Its a tie! You chose ${playerSelection} Computers choice was ${computerSelection} Try again. Round ${round}`
    }
    else if (player == 'rock') {
      if (computer == 'paper') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerRoundsWon.textContent = computerScore;
      }
      else {
        result.textContent = 'Player Won';
        playerScore++;
        playerRoundsWon.textContent = playerScore;
      }
    }
    else if (player == 'scissors') {
      if (computer == 'rock') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerRoundsWon.textContent = computerScore;
      }
      else {
        result.textContent = 'Player Won';
        playerScore++;
        playerRoundsWon.textContent = playerScore;
      }
    }
    else if (player == 'paper') {
      if (computer == 'scissors') {
        result.textContent = 'Computer Won';
        computerScore++;
        computerRoundsWon.textContent = computerScore;
      }
      else {
        result.textContent = 'Player Won';
        playerScore++;
        playerRoundsWon.textContent = playerScore;
      }
    }
  }

  }
gameRPS();

