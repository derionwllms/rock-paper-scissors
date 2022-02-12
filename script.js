let round = 0
let playerScore = 0
let cpuScore  = 0

function computerPlay(){
     let options = ['rock', 'paper', 'scissors']
    return (options[Math.floor(Math.random() * options.length)])
}

function playRound(computerSelection, playerSelection){

    if ((computerSelection == 'rock' && playerSelection == 'scissors')||
        (computerSelection == 'paper' && playerSelection == 'rock')||
        (computerSelection == 'scissors' && playerSelection == 'paper')) {
        
        cpuScore += 1;
        
        return `You Lose! ${computerSelection} beats ${playerSelection}`;

    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors')||
        (playerSelection == 'paper' && computerSelection == 'rock')||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            
        playerScore += 1;

        return `You Win!`;

    } else if (playerSelection == computerSelection ) {

            return `Draw!`;
        }

    //take player input
    //conditional to decide winner
    //return strin that declare winner of round "You Lose! Paper beats Rock"
}

function game(e){
    //five round game that keeps score and reports a winner or loser at the end
    playerSelection = this.dataset.move;
    computerSelection = computerPlay();
    let roundResult = playRound(computerSelection,playerSelection)
    round = round +1;

    
    move.textContent = `cpu: ${computerSelection}, player: ${playerSelection}`;
    container.appendChild(move);

    result.textContent = roundResult;
    container.appendChild(result);

    score.textContent = `Round: ${round} Player: ${playerScore} CPU: ${cpuScore}`;
    container.appendChild(score);

    if (playerScore >= 5){
        gameEnd.textContent = `Congrats you've won on round ${round}!`;
        container.appendChild(gameEnd);
    } else if (cpuScore >= 5){
         gameEnd.textContent = `You lost on round ${round}. Better luck next time!`;
         container.appendChild(gameEnd);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', game));

const container = document.getElementById('result');

const move = document.createElement('p');
const result = document.createElement('p');
const score = document.createElement('p');
const gameEnd = document.createElement('p');