function playRound() {
  //get the players choice
  var playerSelection = prompt("Rock? Paper? Scissors? Make Your Choice");


  //make computers choice random
  var computerSelection = Math.floor(Math.random() * 3);
  /* if (playerSelection != null) {
    return playerSelection;
  } */

  // display the results
  console.log(`You chose ${playerSelection} and the computer chose ${computerSelection}`);


  

}

playRound();
