let humanScore = 0;
let computerScore = 0;

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
    console.log(choice.toLowerCase())
}

function playRound(humanChoice, computerChoice){

}

getHumanChoice();
