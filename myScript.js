
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



