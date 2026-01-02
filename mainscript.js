
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let secondPlayerChoice = choices[Math.floor(Math.random() * choices.length)];
    return secondPlayerChoice;
}

function getHumanChoice() {
    const humanChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
   switch (humanChoice) {
        case "rock":
            if (computerChoice === "scissors") {
                humanScore++;
                return "You win! Rock beats Scissors.";
            } else if (computerChoice === "paper") {
                computerScore++;
                return "You lose! Paper beats Rock.";
            } else {
                return "It's a tie!";
            }
        case "paper":
            if (computerChoice === "rock") {
                humanScore++;
                return "You win! Paper beats Rock.";
            } else if (computerChoice === "scissors") {
                computerScore++;
                return "You lose! Scissors beats Paper.";
            } else {
                return "It's a tie!";
            }
        case "scissors":
            if (computerChoice === "paper") {
                humanScore++;
                return "You win! Scissors beats Paper.";
            } else if (computerChoice === "rock") {
                computerScore++;
                return "You lose! Rock beats Scissors.";
            } else {
                return "It's a tie!";
            }
    }
}

function playGame() {
    let getHumanSelection = "";
    let getComputerSelection = "";

    for (let i = 0; i < 5; i++) {
        getHumanSelection = getHumanChoice();
        getComputerSelection = getComputerChoice();
        console.log(playRound(getHumanSelection, getComputerSelection));
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    console.log("Thanks for Playing!");
}

playGame();
