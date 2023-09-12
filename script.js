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
