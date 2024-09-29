
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
    let choice = prompt("rock,paper,scissors,shoot!").trim().toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)){
        choice = prompt("Invalid choice! Please choose rock, paper, or scissors").trim().toLowerCase()
    }
    return choice;
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

function playgame() {
    /*
    count = 0;
    while (count < 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        count ++;
    }
    
    if ( humanScore > computerScore){
        console.log("You are the winner!")
    }else{
        console.log("The computer has won the game!")
    }

    humanScore = 0;
    computerScore = 0;
    */
}


playgame();