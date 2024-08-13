const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const playerWins = document.querySelector("#playerScore")
const computerWins = document.querySelector("#computerScore")

results.textContent = "Welcome to Rock Paper Scissors!"

playerWins.textContent = "Player's Score: 0";
computerWins.textContent = "Computer's Score: 0";


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

let playerScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice){
    switch(humanChoice){
        case "rock": 
            if(computerChoice == "paper"){
                results.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
                computerScore++;
            }
            else if(computerChoice == "scissors"){
                results.textContent = `YOU WIN! ${humanChoice} beats ${computerChoice}`;
                playerScore++;
            }
            else
                results.textContent = "TIED!";
        break;

        case "paper":
            if(computerChoice == "scissors"){
                results.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
                computerScore++;
            }
            else if(computerChoice == "rock"){
                results.textContent = `YOU WIN! ${humanChoice} beats ${computerChoice}`;
                playerScore++;
            }
            else
                results.textContent = "TIED!";
        break;

        case "scissors":
            if(computerChoice == "rock"){
                results.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}`;
                computerScore++;
            }
            else if(computerChoice == "paper"){
                results.textContent = `YOU WIN! ${humanChoice} beats ${computerChoice}`;
                playerScore++;
            }
            else
                results.textContent = "TIED!";
        break;
    }

    playerWins.textContent = `Player's Score: ${playerScore}`;
    computerWins.textContent = `Computer's Score: ${computerScore}`;

    if(playerScore >= 5 || computerScore >= 5){
        if(playerScore == 5) results.textContent = "Congrats you beat the Computer!";
        if(computerScore == 5) results.textContent = "Computer beat you, better luck next time :("
        rock.removeEventListener("click", playRock);
        paper.removeEventListener("click", playPaper);
        scissors.removeEventListener("click", playScissors);
    }
}

const playRock = () => playRound("rock", getComputerChoice());
const playPaper = () => playRound("paper", getComputerChoice());
const playScissors = () => playRound("scissors", getComputerChoice());


rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);
