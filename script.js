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
