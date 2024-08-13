const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");

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
                results.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
            }
            else if(computerChoice == "scissors"){
                results.textContent = `YOU WIN! ${humanChoice} beats ${computerChoice}`;
            }
            else
                results.textContent = "TIED!";
        break;

        case "paper":
            if(computerChoice == "scissors"){
                results.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
            }
            else if(computerChoice == "rock"){
                results.textContent = `YOU WIN! ${humanChoice} beats ${computerChoice}`;
            }
            else
                results.textContent = "TIED!";
        break;

        case "scissors":
            if(computerChoice == "rock"){
                results.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
            }
            else if(computerChoice == "paper"){
                results.textContent = `YOU WIN! ${humanChoice} beats ${computerChoice}`;
            }
            else
                results.textContent = "TIED!";
        break;
    }
}

rock.addEventListener("click", () => playRound("rock", getComputerChoice()))
paper.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()))