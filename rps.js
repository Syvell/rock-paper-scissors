//Gets  the computer choice in Rock-Paper-Scissors(RPS)
const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorsChoice = document.getElementById('scissors');

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

//Prompts the human to make a choice in RPS
function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors").toLowerCase();
}

//Global score counters
let humanScore = 0;
let computerScore = 0;

//Logic for a round of RPS
const playRound = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice) {
        console.log("Oh it is a tie. We both picked " + humanChoice + "." );
        return;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "rock")) {
        console.log("You win! " + humanChoice + " beats " + (computerChoice +"."))
        humanScore++;
        return;
    } else {
        console.log("I win! " + computerChoice + " beats " + humanChoice + ".")
        computerScore++;
        return;
    }
}

const playGame = () => {

    while(humanScore+computerScore < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("Final Score \nComputer: " + computerScore + "\nYou: " + humanScore);
}

playGame();



