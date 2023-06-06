function playRockPaperScissors() {
  // Get the user's choice
  //var playersNumber = prompt("Choose rock, paper, or scissors: ");
  let playersNumber = Number(prompt("Choose 0 for rock, 1 for paper, or 2 for scissors: "));

  // Generate the computer's choice
  var computersNumber = Math.floor(Math.random() * 3);

  // Display the results
  console.log("You chose " + playersNumber + " and the computer chose " + computersNumber);

  // Determine the winner
  if (playersNumber == computersNumber) {
    console.log("It's a tie!");
  } else if ((playersNumber == 0 && computersNumber == 2) ||
             (playersNumber == 1 && computersNumber == 0) ||
             (playersNumber == 2 && computersNumber == 1)) {
    console.log("You won!");
  } else {
    console.log("The computer won!");
  }
}

// Play the game
playRockPaperScissors();
