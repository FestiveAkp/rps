"use strict"

// Main game function
async function playRPS(userIn) {
    const RPS = {
        1 : 'rock',
        2 : 'paper',
        3 : 'scissors'
    };
    // Promise??? what even
    var wait = ms => new Promise((r, j)=>setTimeout(r, ms));
    var waitMore = ms => new Promise((r, j)=>setTimeout(r, ms));

    // Declare and format output text fields
    let outcomeField = document.getElementById('outcomeField');
    let userField = document.getElementById('userField');
    let computerField = document.getElementById('computerField');
    
    resetFields();
    disableButtons();

    let computerIn = getComputerIn();

    userField.innerHTML = `You played ${RPS[userIn.toString()]}`;
    await wait(1000);
    computerField.innerHTML = `The computer played ${RPS[computerIn.toString()]}`;
    await waitMore(1000);

    let outcome = getRoundOutcome(userIn, computerIn);
    
    // Update output text fields with outcome
    outcomeField.innerHTML = `You ${outcome}`;
    updateScoreTable(outcome);
    enableButtons();
}

function resetFields() {
    userField.innerHTML = '&nbsp';
    computerField.innerHTML = '&nbsp';
    outcomeField.innerHTML = '&nbsp';
}

function disableButtons() {
    let rockBtn = document.getElementById('rock');
    rockBtn.disabled = true;
    rockBtn.className = 'button-disabled';

    let paperBtn = document.getElementById('paper');
    paperBtn.disabled = true;
    paperBtn.className = 'button-disabled';

    let scissorsBtn = document.getElementById('scissors');
    scissorsBtn.disabled = true;
    scissorsBtn.className = 'button-disabled';
}

// Return random number from 1-3
function getComputerIn() {
    return Math.floor(Math.random() * (4-1) + 1);
}

function getRoundOutcome(userIn, computerIn) {
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

function enableButtons() {
    let rockBtn = document.getElementById('rock');
    rockBtn.disabled = false;
    rockBtn.className = 'button-primary';

    let paperBtn = document.getElementById('paper');
    paperBtn.disabled = false;
    paperBtn.className = 'button-primary';

    let scissorsBtn = document.getElementById('scissors');
    scissorsBtn.disabled = false;
    scissorsBtn.className = 'button-primary';
}