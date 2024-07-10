function getComputerChoice(){
    let choice = Math.round(Math.random() * 2);
    switch(choice){
        case 0:
            return "rock";
            break;

        case 1:
            return "paper";
            break;

        case 2:
            return "scissors";
            break;
    }
}

function getHumanChoice(){
    let choice = prompt("Enter Choice:\nRock, Paper, or Scissors");
    return choice;
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        switch(humanChoice){
            case "rock": 
                if(computerChoice == "paper"){
                    computerScore++;
                    console.log(`YOU LOSE! ${computerChoice} beats ${humanChoice}`)
                }
                else if(computerChoice == "scissors"){
                    humanScore++;
                    console.log(`YOU WIN! ${humanChoice} beats ${computerChoice}`)
                }
                else
                    console.log("TIED!")
            break;
    
            case "paper":
                if(computerChoice == "scissors"){
                    computerScore++;
                    console.log(`YOU LOSE! ${computerChoice} beats ${humanChoice}`)
                }
                else if(computerChoice == "rock"){
                    humanScore++;
                    console.log(`YOU WIN! ${humanChoice} beats ${computerChoice}`)
                }
                else
                    console.log("TIED!")
            break;
    
            case "scissors":
                if(computerChoice == "rock"){
                    computerScore++;
                    console.log(`YOU LOSE! ${computerChoice} beats ${humanChoice}`)
                }
                else if(computerChoice == "paper"){
                    humanScore++;
                    console.log(`YOU WIN! ${humanChoice} beats ${computerChoice}`)
                }
                else
                    console.log("TIED!")
            break;
        }
    }

    for(let i = 0; i < 5; ++i){
        playRound(getHumanChoice(), getComputerChoice());
    }

    if(humanScore == computerScore){
        console.log(`You tied. ${humanScore}-${computerScore}`)
    }else{
        (humanScore > computerScore) ? console.log(`You Won! ${humanScore}-${computerScore}`) : console.log(`You Lost. ${humanScore}-${computerScore}`);
    }

}

playGame();