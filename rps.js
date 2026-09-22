const getComputerChoice = () => {
    const comChoice  = Math.random() * 3;
    switch(comChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        default:
            return "scissors"
    
    }
}