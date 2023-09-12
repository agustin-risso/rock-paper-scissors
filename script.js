let userScore = 0;
let computerScore = 0;
let roundWinner;
let playerChoice;
let playerChoiceLower;
let playerSelection;
let computerSelection;

const compArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
	return compArray[~~(Math.random() * compArray.length)];
}

function getPlayerChoice() {
	playerChoice = prompt("Choose your weapon: rock, paper or scissors");
	playerChoiceLower = playerChoice.toLowerCase();
	return playerChoiceLower;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
		roundWinner = 1;
		return roundWinner;
	} else if (
		(playerSelection == "paper" && computerSelection == "rock") ||
		(playerSelection === "rock" && computerSelection == "scissors") ||
		(playerSelection === "scissors" && computerSelection == "paper")
	) {
		roundWinner = 2;
		return roundWinner;
	} else {
		roundWinner = 3;
		return roundWinner;
	}
}

function game() {
	do {
		playerSelection = getPlayerChoice();
		computerSelection = getComputerChoice();
		roundWinner = playRound(playerSelection, computerSelection);
		if (roundWinner == 2) {
			userScore = ++userScore;
			console.log(
				"You choose: " +
					playerSelection +
					". Computer choose: " +
					computerSelection +
					".\n" +
					playerSelection +
					" beats " +
					computerSelection +
					"\nPlayer: " +
					userScore +
					"\nComputer: " +
					computerScore
			);
		} else if (roundWinner == 3) {
			computerScore = ++computerScore;
			console.log(
				"You choose: " +
					playerSelection +
					". Computer choose: " +
					computerSelection +
					".\n" +
					computerSelection +
					" beats " +
					playerSelection +
					"\nPlayer: " +
					userScore +
					"\nComputer: " +
					computerScore
			);
		} else {
			console.log(
				"You choose: " +
					playerSelection +
					". Computer choose: " +
					computerSelection +
					".\nIt's a tie."
			);
		}
	} while (userScore != 5 && computerScore != 5);
	if (userScore > computerScore) {
		return "You won the match";
	} else {
		return "You lost the match";
	}
}

console.log(game());
