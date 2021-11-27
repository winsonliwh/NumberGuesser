let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
let generatedTargetString = '';

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random()*10);
}
/* 
for (let i=0; i<100; i++) {
generatedTargetString += '' + generateTarget() + ' ' + generateTarget() + ' ' + generateTarget() + ' ' + generateTarget() + ' ' + generateTarget() + ' ' + generateTarget() + ' ' + generateTarget() + ' ' + generateTarget() + ' ' + generateTarget() + ' ' + generateTarget() + ' ';
};
console.log(generatedTargetString);
 */
const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
  if (humanGuess > 9) {
    alert("Please select 0-9!");
    return undefined;
  } else {
    return Math.abs(humanGuess - targetNumber) <= Math.abs(computerGuess - targetNumber) ? true : false;
  }
}

const updateScore = winner => {
  return winner === 'human' ? humanScore++ : winner === 'computer' ? computerScore++ : null;
}

const advanceRound = () => {
  currentRoundNumber++;
}