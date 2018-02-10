"use strict"

function playRPS(userIn) {
    const RPS = {
        1 : 'rock',
        2 : 'paper',
        3 : 'scissors'
    };
    let outcomeField = document.getElementById('outcomeField');
    let userField = document.getElementById('userField');
    let computerField = document.getElementById('computerField');
    
    let computerIn = getComputerIn();

    userField.innerHTML = `You played ${RPS[userIn.toString()]}`;
    computerField.innerHTML = `The computer played ${RPS[computerIn.toString()]}`;

    let outcome = roundOutcome(userIn, computerIn);
    
    outcomeField.innerHTML = `You ${outcome}`;
    updateScoreTable(outcome);
}

function getComputerIn() {
    return Math.floor(Math.random() * (4-1) + 1);
}

function roundOutcome(userIn, computerIn) {
    if (userIn == computerIn) return 'tied';
    if (userIn == 1 && computerIn == 3) return 'win'; // play rock, against scissors
    if (userIn == 2 && computerIn == 1) return 'win'; // play paper, against rock
    if (userIn == 3 && computerIn == 2) return 'win'; // play scissors, against paper
    else return 'lose';
}

function updateScoreTable(outcome) {
    if (outcome == 'win') {
        let playerScore = document.getElementById('playerScore');
        let i = playerScore.innerHTML;
        i++;
        playerScore.innerHTML = i;
    }
    if (outcome == 'lose') {
        let computerScore = document.getElementById('computerScore');
        let i = computerScore.innerHTML;
        i++;
        computerScore.innerHTML = i;
    }
}