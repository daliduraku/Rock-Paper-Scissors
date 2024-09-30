
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

function playRound(humanChoice, computerChoice){
    if ( humanChoice === computerChoice) {
        return `Current score: You're score: ${humanScore}, Computer's score: ${computerScore}`
    }else if (humanChoice === "rock" && computerChoice === "scissors"){
        humanScore ++;
        return `Current score: You're score: ${humanScore}, Computer's score: ${computerScore}`
    }else if (humanChoice === "rock" && computerChoice === "paper"){
        computerScore ++;
        return `Current score: You're score: ${humanScore}, Computer's score: ${computerScore}`
    }else if (humanChoice === "paper" && computerChoice === "rock"){
        humanScore ++;
        return `Current score: You're score: ${humanScore}, Computer's score: ${computerScore}`
    }else if (humanChoice === "paper" && computerChoice === "scissors"){
        computerScore ++;
        return `Current score: You're score: ${humanScore}, Computer's score: ${computerScore}`
    }else if (humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        return `Current score: You're score: ${humanScore}, Computer's score: ${computerScore}`
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        computerScore ++;
        return `Current score: You're score: ${humanScore}, Computer's score: ${computerScore}`
    }
}

rockBtn.addEventListener('click', function(){
    // plays a round of game
    const humanSelection = 'rock';
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    // display the result
    document.getElementById('round-result').innerHTML = `<p> ${result} </p>`

    // announce winner of the game 
    if (humanScore === 5 || computerScore === 5) {
        if ( humanScore > computerScore){
            document.getElementById('round-result').innerHTML = `<p> You are the winner! </p>`
        }else{
            document.getElementById('round-result').innerHTML = `<p> The computer has won the game! </p>`
        }
        // reset the game
        humanScore = 0;
        computerScore = 0;
    }
});
paperBtn.addEventListener('click', function(){
    // play a round of the game
    const humanSelection = 'paper';
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);


    // display the result
    document.getElementById('round-result').innerHTML = `<p> ${result} </p>`

    // announce winner of the game
    if (humanScore === 5 || computerScore === 5) {
        if ( humanScore > computerScore){
            document.getElementById('round-result').innerHTML = `<p> "You are the winner!" </p>`
        }else{
            document.getElementById('round-result').innerHTML = `<p> "The computer has won the game!" </p>`
        }
        // reset the game 
        humanScore = 0;
        computerScore = 0;
    }
});
scissorsBtn.addEventListener('click', function(){
    // plays a round of game
    const humanSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    // display the result
    document.getElementById('round-result').innerHTML = `<p> ${result} </p>`
    
    // announce winner of the game 
    if (humanScore === 5 || computerScore === 5) {
        if ( humanScore > computerScore){
            document.getElementById('round-result').innerHTML = `<p> "You are the winner!" </p>`
        }else{
            document.getElementById('round-result').innerHTML = `<p> "The computer has won the game!" </p>`
        }

        // reset the game
        humanScore = 0;
        computerScore = 0;
    }

});