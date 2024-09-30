
humanScore = 0;
computerScore = 0;

let rockBtn = document.querySelector(".rock-button");
let paperBtn = document.querySelector('.paper-button');
let scissorsBtn = document.querySelector('.scissors-button');

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

/*
function getHumanChoice(){
    let choice = prompt("rock,paper,scissors,shoot!").trim().toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)){
        choice = prompt("Invalid choice! Please choose rock, paper, or scissors").trim().toLowerCase()
    }
    return choice;
}
*/

function playRound(humanChoice, computerChoice){
    if ( humanChoice === computerChoice) {
        return "The round was a tie"
    }else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore ++;
        return "You win! Rock beats Scissors"
    }else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore ++;
        return "You lose! Paper beats Rock"
    }else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore ++;
        return "You win! Paper beats Rock"
    }else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore ++;
        return "You lose! Scissors beats Paper"
    }else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return "You win! Scissors beats Paper"
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore ++;
        return "You lose! Rock beats Scissors"
    }
}

/*
function playgame(choice) {
    while (humanScore < 6 || computerScore < 6){
        const humanSelection = choice
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    if ( humanScore > computerScore){
        console.log("You are the winner!")
    }else{
        console.log("The computer has won the game!")
    }

    humanScore = 0;
    computerScore = 0;
}
*/

rockBtn.addEventListener('click', function(){
    // plays a round of game
    const humanSelection = 'rock';
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    // announce winner of the game 
    if (humanScore === 5 || computerScore === 6) {
        if ( humanScore > computerScore){
            document.getElementById('round-result').innerHTML = `<p> "You are the winner!" </p>`
        }else{
            document.getElementById('round-result').innerHTML = `<p> "The computer has won the game!" </p>`
        }
    }

    // display the result
    document.getElementById('round-result').innerHTML = `<p> ${result} </p>`
});
paperBtn.addEventListener('click', function(){
    playRound('paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', function(){
    playRound('scissors', getComputerChoice());
});