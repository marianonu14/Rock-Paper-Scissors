let playerCount = 0;
let computerCount = 0;

const playerValue = document.querySelector('#player-score')
const computerValue = document.querySelector('#computer-score')
const playerSelectionButton = document.querySelectorAll('button');
const winnerContainer = document.querySelector('#winner')

winnerContainer.textContent = ''

playerSelectionButton.forEach(function(playerSelection){
     playerSelection.addEventListener('click', (e) => {
     let selection = e.target.value
     playRound(selection);
    }) 
});

function computerPlay() {
    const myArray = ['rock', 'paper', 'scissor'];
    return myArray[~~(Math.random() * myArray.length)];
  }

function playRound(selection){

    const computerSelection = computerPlay();

   if (selection === 'rock' && computerSelection === 'paper') {
        playerCount+=1
  } else if (selection === 'rock' && computerSelection === 'scissor') {
        playerCount+=1;
  }
  
   if (selection === 'paper' && computerSelection === 'scissor') {
      computerCount+=1;
  } else if (selection === 'paper' && computerSelection === 'rock') {
      playerCount+=1;
  }
  
   if (selection === 'scissor' && computerSelection === 'rock') {
      computerCount+=1;
  } else if (selection === 'scissor' && computerSelection === 'paper') {
      playerCount+=1;
  }   

  computerValue.textContent = computerCount;
  
  playerValue.textContent = playerCount;

  checkCount();
};

function checkCount(){
  if (playerCount === 5) {
        winnerContainer.textContent = 'You Win'
        setTimeout(resetCount, 500);
  } else if (computerCount === 5) {
        winnerContainer.textContent = 'Computer Win'
        setTimeout(resetCount, 500);
    };
}

function resetCount (){
    computerValue.textContent = 0;
    playerValue.textContent  = 0;
    playerCount = 0;
    computerCount = 0;
    setTimeout(resetContainer, 1500);
}

function resetContainer(){
    winnerContainer.textContent = ""
}



