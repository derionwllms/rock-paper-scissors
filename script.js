let round = 0
let playerScore = 0
let cpuScore  = 0

function computerPlay(){
     let options = ['rock', 'paper', 'scissors']
    return (options[Math.floor(Math.random() * options.length)])
}

function playRound(computerSelection, playerSelection){
    computerSelection  = computerPlay()
    playerSelection = prompt("Whats your move?").toLowerCase()
    console.log(`cpu: ${computerSelection}, player: ${playerSelection}`)
    
    if ((computerSelection == 'rock' && playerSelection == 'scissors')||
        (computerSelection == 'paper' && playerSelection == 'rock')||
        (computerSelection == 'scissors' && playerSelection == 'paper')) {
        return `You Lose! ${computerSelection} beats ${playerSelection}`,
                cpuScore += 1;

    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors')||
        (playerSelection == 'paper' && computerSelection == 'rock')||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {

        return `You Win!`,
                playerScore += 1;

    }

    else if (
        (playerSelection == 'rock' && computerSelection == 'scissors')||
        (playerSelection == 'paper' && computerSelection == 'rock')||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            return `Draw!`;
        }

    //take player input
    //conditional to decide winner
    //return strin that declare winner of round "You Lose! Paper beats Rock"
}

function game(){
    //five round game that keeps score and reports a winner or loser at the end

    while (playerScore < 5 && cpuScore < 5){
        playRound(computerPlay())
        round = round +1;
        console.log(`Round: ${round} Player: ${playerScore} CPU: ${cpuScore}`)
    }

    if (playerScore >= 5){
        return `Congrats you've won on round ${round}!`
    } else if (cpuScore >= 5){
         return `You lost on round ${round}. Better luck next time!`
    }
}

console.log(game())