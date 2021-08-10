let roundNumber = 1;
let playerScore = 0;
let computerScore = 0;

function startGame(playerSelection) {
  if (roundNumber > 5) {
    return;
  }

  let computerSelection = getRandomSelection();
  let winner = getWinner(playerSelection, computerSelection);
  document.getElementById("playerOutcome").innerHTML = playerScore;
  document.getElementById("computerOutcome").innerHTML = computerScore;
  document.getElementById("roundNumber").innerHTML = roundNumber;
  roundNumber++;

  if (roundNumber > 5) {
    let overallWinner = getOverallWinner(playerScore, computerScore);
    document.getElementById("overallWinner").innerHTML = overallWinner;
    confirm(overallWinner + " Refresh the page to play again");
  }
  return;
}

function getRandomSelection() {
  let options = ["Rock", "Paper", "Scissors"];

  let randomSelection = options[Math.floor(Math.random() * options.length)];
  document.getElementById("computerOutcome").innerHTML = randomSelection;
  return randomSelection;
}

function getWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    document.getElementById("outcome").innerHTML = "It's a tie";
    return "It's a tie";
  }

  if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    document.getElementById("outcome").innerHTML = "Player wins!";
    playerScore++;
    return "Player wins!";
  }

  document.getElementById("outcome").innerHTML = "Computer wins, too bad.";
  computerScore++;
  return "Computer wins, too bad.";
}

function getOverallWinner(playerScore, computerScore) {
  if (playerScore === computerScore) {
    return "How embarassing, it's a tie...";
  }

  if (playerScore > computerScore) {
    return "You are the winner!";
  }
  return "Computer wins, too bad.";
}
