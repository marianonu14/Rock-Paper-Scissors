const myArray = ["Rock", "Paper", "Scissor"];

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}


function playRound(){
    
    let playerSelection = window.prompt("Choose Rock, Paper or Scissor").toLocaleLowerCase();
   
    let computerSelection = computerPlay().toLocaleLowerCase();

    if (playerSelection === 'rock' && computerSelection === 'rock') {
      console.log('Empate');
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      console.log('Ganaste');
  } else if (playerSelection === 'rock' && computerSelection === 'scissor') {
      console.log('Ganaste');
  }
  
    if (playerSelection ==='paper' && computerSelection === 'paper'){
      console.log('Empate');
  } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
      console.log('Perdiste');
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      console.log('Ganaste');
  }
  
    if (playerSelection ==='scissor' && computerSelection === 'scissor'){
      console.log('Empate');
  } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
      console.log('Perdiste');
  } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
      console.log('Ganaste');
  }   
}

for (let i = 0; i < 5; i++) {
    playRound();
}