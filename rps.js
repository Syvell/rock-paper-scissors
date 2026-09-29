//Gets  the computer choice in Rock-Paper-Scissors(RPS)
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
const humanScore = 0;
const computerScore = 0;



