"use strict"

// Main game function
async function playRPS(userIn) {
    const RPS = {
        1 : 'rock',
        2 : 'paper',
        3 : 'scissors'
    };
    // Declare waiting processes
    var wait = ms => new Promise((r, j)=>setTimeout(r, ms));
    var waitMore = ms => new Promise((r, j)=>setTimeout(r, ms));
    var waitEvenMore = ms => new Promise((r, j)=>setTimeout(r, ms));
    var waitMoreSo = ms => new Promise((r, j)=>setTimeout(r, ms));
    var waitAgain = ms => new Promise((r, j)=>setTimeout(r, ms));
    var waitOnceMore = ms => new Promise((r, j)=>setTimeout(r, ms));

    // Declare and format DOM objects
    let outcomeField = document.getElementById('outcomeField');
    let userField = document.getElementById('userField');
    let computerField = document.getElementById('computerField');
    let userPic = document.getElementById('userPic');
    let computerPic = document.getElementById('computerPic');
    
    resetDOM();
    disableButtons();

    let computerIn = getComputerIn();

    // Shake
    movePicsDown();
    await wait(100);
    movePicsUp();
    await waitMore(100);
    movePicsDown();
    await waitEvenMore(100);
    movePicsUp();
    await waitMoreSo(100);
    
    // Change images to result
    userPic.src = `img/${ RPS[userIn.toString()] }-right.png`;
    computerPic.src = `img/${ RPS[computerIn.toString()] }-left.png`;
    movePicsDown();
    await waitAgain(100);
    movePicsUp();
    await waitOnceMore(100);
    
    let outcome = getRoundOutcome(userIn, computerIn);
    
    // Update DOM with outcome
    userField.innerHTML = `You played ${RPS[userIn.toString()]}`;
    computerField.innerHTML = `The computer played ${RPS[computerIn.toString()]}`;
    outcomeField.innerHTML = `You ${outcome}`;
    updateScoreTable(outcome);
    enableButtons();
}

function resetDOM() {
    userField.innerHTML = '&nbsp';
    computerField.innerHTML = '&nbsp';
    outcomeField.innerHTML = '&nbsp';
    userPic.src = 'img/rock-right.png';
    computerPic.src = 'img/rock-left.png';
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

function movePicsDown() {
    userPic.style.marginTop = '0.25em';
    computerPic.style.marginTop = '0.25em';
}

function movePicsUp() {
    userPic.style.marginTop = '0em';
    computerPic.style.marginTop = '0em';
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

    if (outcome == 'tied') {
        let tiedScore = document.getElementById('tiedScore');
        let i = tiedScore.innerHTML;
        i++;
        tiedScore.innerHTML = i;
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