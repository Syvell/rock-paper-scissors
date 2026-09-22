const getComputerChoice = () => {
    const comChoice  = Math.floor(Math.random() * 3);
    console.log(comChoice);
    switch(comChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors"
    
    }
}

console.log(getComputerChoice());
