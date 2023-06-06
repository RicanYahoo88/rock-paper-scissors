function playRound() {
  //get the players choice
  var playerSelection = prompt("Rock? Paper? Scissors? Make Your Choice", "Make Your Choice: ");

  var computerSelection = Math.floor(Math.random() * 3);

  if (playerSelection != null) {
    return playerSelection;
  }

  console.log(playRound("You chose " + playerSelection + " and the computer chose " + computerSelection));

}

playRound();
