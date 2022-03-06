const computerSelection = computerPlay();
let selection = '';

document.addEventListener('DOMContentLoaded', function(){
    App();
});

function App(){
    computerPlay();
    playRound();
};


const playerSelectionButton = document.querySelectorAll('button');
playerSelectionButton.forEach(function(playerSelection){
     playerSelection.addEventListener('click', (e) => {
     let selection = e.target.value
     playRound(selection);
    }) 
});


function computerPlay() {
    const myArray = ["Rock", "Paper", "Scissor"];
    return myArray[~~(Math.random() * myArray.length)];
  }


function playRound(){
    if (selection === 'rock' && computerSelection === 'rock') {
      console.log('Empate');
  } else if (selection === 'rock' && computerSelection === 'paper') {
      console.log('Ganaste');
  } else if (selection === 'rock' && computerSelection === 'scissor') {
      console.log('Ganaste');
  }
  
    if (selection ==='paper' && computerSelection === 'paper'){
      console.log('Empate');
  } else if (selection === 'paper' && computerSelection === 'scissor') {
      console.log('Perdiste');
  } else if (selection === 'paper' && computerSelection === 'rock') {
      console.log('Ganaste');
  }
  
    if (selection ==='scissor' && computerSelection === 'scissor'){
      console.log('Empate');
  } else if (selection === 'scissor' && computerSelection === 'rock') {
      console.log('Perdiste');
  } else if (selection === 'scissor' && computerSelection === 'paper') {
      console.log('Ganaste');
  }   
}


