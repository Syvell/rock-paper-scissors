//Gets  the computer choice in Rock-Paper-Scissors(RPS)
const rockChoice = document.getElementById("rock-btn");
const paperChoice = document.getElementById('paper-btn');
const scissorsChoice = document.getElementById('scissors-btn');
const displayText = document.getElementById('rps-text');
const scoreText = document.getElementById('score');

//Global score counters
let humanScore = 0;
let computerScore = 0;


const getComputerChoice = () => {
    const comChoice  = Math.floor(Math.random() * 3);
    switch(comChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors"
    
    }
}

//Logic for a round of RPS
const playRound = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice) {
        displayText.innerText = `Oh it is a tie. We both picked ${humanChoice}.` ;
        return;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        displayText.innerText = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        return;
    } else {
        displayText.innerText = `You win! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        return;
    }
}

const playGame = (humanChoice) => {
    const computerSelection = getComputerChoice();
    playRound(humanChoice, computerSelection);

    scoreText.innerText = `Computer: ${computerScore} | You: ${humanScore}`;
}

rockChoice.addEventListener('click', () => {playGame('rock')});
scissorsChoice.addEventListener('click', () => {playGame('scissors')});
paperChoice.addEventListener('click', () => {playGame('paper')});



