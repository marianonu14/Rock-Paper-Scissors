let playerCount = 0;
let computerCount = 0;

const playerSelectionButton = document.querySelectorAll('button');
const playerValue = document.querySelector('#player-score')
const computerValue = document.querySelector('#computer-score')
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
  computerSelection = computerPlay();

  checkCount(selection);
  
  computerValue.textContent = computerCount;
  playerValue.textContent = playerCount;
};

function startCounting(selection) {
    if (selection === 'rock' && computerSelection === 'paper') {
        computerCount+=1
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
};

function checkCount(selection){
  if (playerCount === 5) {
        winnerContainer.textContent = 'You Win'
        setTimeout(resetCount, 800);
  } else if (computerCount === 5) {
        winnerContainer.textContent = 'Computer Win'
        setTimeout(resetCount, 800);
  } else {
        startCounting(selection); 
    }
};

function resetCount (){
    playerSelectionButton
    computerValue.textContent = 0;
    playerValue.textContent  = 0;
    playerCount = 0;
    computerCount = 0;
    setTimeout(resetContainer, 1500);
};

function resetContainer(){
    winnerContainer.textContent = ""
};
