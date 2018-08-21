
const startMsg = 'Do you want to play a game?';
const denyMsg = 'You did not become a millionaire, but can.';
const roundsQuanity = 3;
let win = 10;
const prizes = {
	1: win,
	2: win=win/2,
	3: win=win/2
};
let userPrize = 0;
let gameNumber = 0;
let rangeMax = 5;
let superFuckingNumber;

initialize();

function initialize() {
	const result = confirm(startMsg);
	if (result) {
		startGame();
	} else {
		alert(denyMsg);
	}
}

function startGame() {
	let round = 1;
	generateNewNuber();
	console.log(superFuckingNumber);
	while (round <= roundsQuanity) {
		const result = askUser(round);
		if (result === superFuckingNumber) {
			userPrize += getPrizeForRound(round);
			const proceed = confirm(getCongratulationMsg());
			if (proceed) {
				gameNumber++;
				startGame();
			} else {
				alert(getGoodByeMsg());
			}
			break;
		} else {
			// USER DIDNT GUES
			if (round === 3) {
				// STOP THE GAME
				confirm(getGoodByeMsg());
				break;
			}
		}
		round++;
	}
}

function askUser(round) {
    const question = `\n
    Enter a number from 0 to ${getMaxRange()} 
    Attempts left: ${3 - round} 
    Total prize: ${Math.floor(userPrize)}$ 
    Possible prize: ${Math.floor(getPrizeForRound(round))}$`;
	const answer = prompt(question);
	if (answer !== null && !isNaN(answer)) {
		return parseInt(answer);
	} else {
		// USER CLICKED CANCEL AND WHAT?????
	}
}

function getPrizeForRound(round) {
	return gameNumber !== 0 ? prizes[round] * (3 * gameNumber) : prizes[round];
}

function getMaxRange() {
	return gameNumber !== 0 ? rangeMax * (2 * gameNumber) : rangeMax;
}

function generateNewNuber() {
	superFuckingNumber = getRandomInt();
}

function getRandomInt() {
    const min = 0;
    const inclusive = 1;
    return Math.floor(Math.random() * (getMaxRange() - min + inclusive)) + min;
}

function getCongratulationMsg () {
	return `Congratulation! Your prize is: ${Math.floor(userPrize)}$. Do you want to continue?`;
}

function getGoodByeMsg () {
	return `Thank you for a game. Your prize is: ${Math.floor(userPrize)}$`;
}


