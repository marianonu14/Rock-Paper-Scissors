

let computerSelection = randomComputer();
let playerSelection = userSelection();
let computerScore = 0;
let playerScore = 0;


function randomComputer(){
    const options = ['rock', 'paper', 'scissor'];
    return (options[Math.floor(Math.random() *options.length)])
}

function userSelection(){
    return prompt("Choose Rock, Paper or Scissor") 
}

function validateString(){
    let newString = playerSelection.toLowerCase();

    const options = ['rock', 'paper', 'scissor'];
    
    if(!options.includes(newString)){
        return alert('Recarga la Pagina');
    }
}


function playRound(playerSelection,computerSelection){
    
    validateString();

      if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        console.log('Empate');
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        console.log('Ganaste');
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissor') {
        console.log('Ganaste');
    }
    
      if (playerSelection.toLowerCase() ==='paper' && computerSelection === 'paper'){
        console.log('Empate');
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissor') {
        console.log('Perdiste');
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        console.log('Ganaste');
    }
    
      if (playerSelection.toLowerCase() ==='scissor' && computerSelection === 'scissor'){
        console.log('Empate');
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'rock') {
        console.log('Perdiste');
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === 'paper') {
        console.log('Ganaste');
    }
}

playRound(playerSelection,computerSelection); 








    

