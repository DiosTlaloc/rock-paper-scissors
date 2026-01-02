

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let secondPlayerChoice = choices[Math.floor(Math.random() * choices.length)];
    return secondPlayerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    return humanChoice
}
