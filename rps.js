function playRockPaperScissors() {
    // Get the user's choice
    let userChoice = prompt("Choose rock, paper, or scissors: ");
    let chosenValue = 0;
    switch (userChoice) {
        case "rock" :
            
            return  chosenValue;

        case r:
            
            return userChoice = 0;
    
        default:
            break;
    }
  
    // Generate the computer's choice
    var computerChoice = Math.floor(Math.random() * 3);
  
    // Display the results
    console.log("You chose " + userChoice + " and the computer chose " + computerChoice);
  
    // Determine the winner
    if (userChoice == computerChoice) {
      console.log("It's a tie!");
    } else if ((userChoice == 0 && computerChoice == 2) ||
               (userChoice == 1 && computerChoice == 0) ||
               (userChoice == 2 && computerChoice == 1)) {
      console.log("You won!");
    } else {
      console.log("The computer won!");
    }
  }
  
  // Play the game
  playRockPaperScissors();