
humanScore = 0;
computerScore = 0;

function getComputerChoice(){
    let num = Math.random();

    if(num >=0 && num < 0.333){
        return ("rock")
    }else if(num >= 0.333 && num < 0.666){
        return("paper")
    }else{
        return("scissors")
    }
}

function getHumanChoice(){
    let choice = prompt("rock,paper,scissors,shoot!");
    return choice.trim().toLowerCase();
}


function playRound(humanChoice, computerChoice){
    if ( humanChoice === computerChoice) {
        console.log ("The round was a tie")
    }else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore ++;
        console.log ("You win! Rock beats Scissors")
    }else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore ++;
        console.log ("You lose! Paper beats Rock")
    }else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore ++;
        console.log ("You win! Paper beats Rock")
    }else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore ++;
        console.log ("You lose! Scissors beats Paper")
    }else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        console.log ("You win! Scissors beats Paper")
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore ++;
        console.log ("You lose! Rock beats Scissors")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

