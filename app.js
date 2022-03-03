const Elements = ['Rock', 'Paper', 'Scissor'];

function computerPlay() {
    var random = Math.floor(Math.random()*Elements.length);
    return Elements[random];
}

console.log(computerPlay());

