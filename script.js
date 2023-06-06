function playRound() {
  //get the players choice
  var playerSelection = prompt("Rock? Paper? Scissors? Make Your Choice");

  if (playerSelection != null) {
    return playerSelection;
  }

  var computerSelection = Math.floor(Math.random() * 3);

  console.log("You chose " + playerSelection + " and the computer chose " + computerSelection);

}

playRound();
