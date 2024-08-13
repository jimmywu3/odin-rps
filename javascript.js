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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", playRound("rock", getComputerChoice()))
paper.addEventListener("click", playRound("paper", getComputerChoice()))
scissors.addEventListener("click", playRound("scissors", getComputerChoice()))