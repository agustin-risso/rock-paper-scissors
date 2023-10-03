let page = document.querySelector("body");
let userScore = document.querySelector("#player-score");
let machineScore = document.querySelector("#machine-score");
let weapons = document.querySelectorAll(".weapon");
let roundNumber = document.querySelector(".round-number");
let roundDetails = document.querySelector(".round-details");
let round = 0;
let roundWinner = 0;
let userScoreAccumulator = 0;
let machineScoreAccumulator = 0;

const compArray = ["rock", "paper", "scissors"];

function getMachineChoice() {
	return compArray[~~(Math.random() * compArray.length)];
}

weapons.forEach((weaponElement) =>
	weaponElement.addEventListener("click", () => {
		if (userScoreAccumulator >= 5 || machineScoreAccumulator >= 5) {
			return;
		}
		game(weaponElement.value);
	})
);

function game(weapon) {
	let machineSelection = getMachineChoice();
	round = round + 1;
	roundNumber.innerHTML = "Round " + round;
	roundWinner = playRound(weapon, machineSelection);
	if (roundWinner == 2) {
		userScoreAccumulator = userScoreAccumulator + 1;
		userScore.innerHTML = userScoreAccumulator;
		roundDetails.innerHTML =
			"You choose: " +
			weapon +
			". Machine choose: " +
			machineSelection +
			", " +
			weapon +
			" beats " +
			machineSelection +
			".";
	} else if (roundWinner == 3) {
		machineScoreAccumulator = machineScoreAccumulator + 1;
		machineScore.innerHTML = machineScoreAccumulator;
		roundDetails.innerHTML =
			"You choose: " +
			weapon +
			". Machine choose: " +
			machineSelection +
			", " +
			machineSelection +
			" beats " +
			weapon +
			".";
	} else {
		roundDetails.innerHTML =
			"You choose: " +
			weapon +
			". Computer choose: " +
			machineSelection +
			". It's a tie.";
	}
	if (userScore.innerHTML === "5") {
		roundNumber.innerHTML = "YOU WON THE GAME !";
	} else if (machineScore.innerHTML === "5") {
		roundNumber.innerHTML = "YOU LOST THE GAME, THE MACHINE WINS :(";
	}
}

function playRound(userWeapon, machineWeapon) {
	let winner;
	if (userWeapon == machineWeapon) {
		winner = 1;
		return winner;
	} else if (
		(userWeapon == "paper" && machineWeapon == "rock") ||
		(userWeapon === "rock" && machineWeapon == "scissors") ||
		(userWeapon === "scissors" && machineWeapon == "paper")
	) {
		winner = 2;
		return winner;
	} else {
		winner = 3;
		return winner;
	}
}
