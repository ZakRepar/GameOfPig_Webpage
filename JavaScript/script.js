var diNumber = 0;
const goalTotal = 10;
var turnTotal = 0;
var p1Total = 0;
var p2Total = 0;
var player1Active = true;
var di = document.getElementById("di");
var rolled = document.getElementById("rolled");
var turn = document.getElementById("turnScore");
var p1Score = document.getElementById("Player1Score");
var p2Score = document.getElementById("Player2Score");
var winner = document.getElementById("winner");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
p1.style.color="pink";
var resetButton = document.getElementById("resetButton");
var title = document.getElementById("title");
var scoreboard = document.getElementById("scoreboard");
var rules = document.getElementById("rulesButton");



function roll() {
    diNumber = Math.floor(Math.random()*6) + 1;
    if (p1Total >= goalTotal || p2Total >= goalTotal) {
        resetOnWin();
    }
    if (diNumber == 1) {
        di.src="Images/di1.png";
        rolled.innerText="1";
        turnTotal = 0;
        turn.innerText=turnTotal;
        pass();
    }
    if (diNumber == 2) {
        di.src="Images/di2.png";
        rolled.innerText="2";
        turnTotal += diNumber;
        turn.innerText=turnTotal;
    }
    if (diNumber == 3) {
        di.src="Images/di3.png";
        rolled.innerText="3";
        turnTotal += diNumber;
        turn.innerText=turnTotal;
    }
    if (diNumber == 4) {
        di.src="Images/di4.png";
        rolled.innerText="4";
        turnTotal += diNumber;
        turn.innerText=turnTotal;
    }
    if (diNumber == 5) {
        di.src="Images/di5.png";
        rolled.innerText="5";
        turnTotal += diNumber;
        turn.innerText=turnTotal;
    }
    if (diNumber == 6) {
        di.src="Images/di6.png";
        rolled.innerText="6";
        turnTotal += diNumber;
        turn.innerText=turnTotal;
    }
}



function pass() {
    if (player1Active == true) {
        p1Total += turnTotal;
        p1Score.innerText=p1Total;
        player1Active = false;
        p1.style.color="black";
        p2.style.color="pink";
    }
    else {
        p2Total += turnTotal;
        p2Score.innerText=p2Total;
        player1Active = true;
        p1.style.color="pink";
        p2.style.color="black";
    }
    turnTotal = 0;
    turn.innerText=turnTotal;
    if (p1Total >= goalTotal || p2Total >= goalTotal) {
        resetOnWin();
    }
}



function resetOnWin() {
    if (p1Total >= goalTotal) {
        winner.innerText="Player 1 Won!";
    }
    else {
        winner.innerText="Player 2 Won!"
    }
    title.style.display="none";
    scoreboard.style.display="none";
    rules.style.display="none";
    winner.style.display="block";
    resetButton.style.display="block";
    document.body.style.backgroundImage = "url(Images/balloons.png)";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}



function reset() {
    title.style.display="block";
    scoreboard.style.display="block";
    rules.style.display="block";
    winner.style.display="none";
    resetButton.style.display="none";
    document.body.style.backgroundImage = "url(Images/background.png)";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundSize = "auto";

    turnTotal = 0;
    p1Total = 0;
    p2Total = 0;
    player1Active = true;

    p1.style.color="pink";
    p2.style.color="black";

    turn.innerText="0";
    rolled.innerText="0";
    p1Score.innerText="0";
    p2Score.innerText="0";
}