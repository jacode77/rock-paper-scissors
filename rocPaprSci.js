function startGame(playerSelection) {
  let computerSelection = getRandomSelection();
  console.log("Player Chose: ", playerSelection);
  console.log("Computer Seletion: ", computerSelection);
  let winner = findWinner(playerSelection, computerSelection);
  console.log("The winner is: ", winner);
}

function getRandomSelection() {
  let randomSelection = ["Rock", "Paper", "Scissors"];

  let computerSelection =
    randomSelection[Math.floor(Math.random() * randomSelection.length)];
  return computerSelection;
}

function findWinner(playerSelection, computerSelection) {
  //if playerSelection and computerSelection === same, "it's a tie"
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  //if playerSelection is paper and computerSelection is rock, "The winner is player"
  if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return "Player wins!";
  }

  return "Computer wins, too bad.";
}

// let playerSelection = onclick //how to assign onclick to images?

// function playRound(playerSelection, computerSelection) {

// }

// switch (playerSelection) {
//     case 'Tie': playerSelection === rock && computerSelection === rock;
//         return "It's a tie"; //Not sure if alert or a simple return is better
//         break;
//     case 'Lose': playerSelection === rock && computerSelection === paper;
//         return "You lose, paper beats rock";
//         break;
//     case 'Win': plaerSelection === rock && computerSelection === scissors;
//         return "You win! Rock beats scissors!";
// }

// On click, return random computerSelection. Tally the score and print game outcome message
