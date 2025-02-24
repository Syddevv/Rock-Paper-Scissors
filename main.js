let playerMove = "";
let computerMove = "";
let result = "";
let playerScore = Number(localStorage.getItem("playerScore") || 0);
let computerScore = Number(localStorage.getItem("computerScore") || 0);

displayScore();

document.getElementById("rockBTN").addEventListener("click", () => {
  playerMove = "rock";
  makeComputerMove();
  checkResult();
});

document.getElementById("paperBTN").addEventListener("click", () => {
  playerMove = "paper";
  makeComputerMove();
  checkResult();
});

document.getElementById("scissorBTN").addEventListener("click", () => {
  playerMove = "scissor";
  makeComputerMove();
  checkResult();
});

document.getElementById("playAgainBTN").addEventListener("click", () => {
  resultModal.style.display = "none";
});

// RANDOMIZE COMPUTER MOVE
function makeComputerMove() {
  const randomMove = Math.round(Math.random() * 3) + 1;
  if (randomMove === 1) {
    computerMove = "rock";
  } else if (randomMove === 2) {
    computerMove = "paper";
  } else {
    computerMove = "scissor";
  }
  console.log(computerMove);
}

// FUNCTION FOR CHECKING THE RESULT
function checkResult() {
  if (playerMove === "rock" && computerMove === "scissor") {
    result = "win";
    playerScore++;
  } else if (playerMove === "scissor" && computerMove === "rock") {
    result = "lose";
    computerScore++;
  } else if (playerMove === "paper" && computerMove === "rock") {
    result = "win";
    playerScore++;
  } else if (playerMove === "rock" && computerMove === "paper") {
    result = "lose";
    computerScore++;
  } else if (playerMove === "scissor" && computerMove === "paper") {
    result = "win";
    playerScore++;
  } else if (playerMove === "paper" && computerMove === "scissor") {
    result = "lose";
    computerScore++;
  } else if (playerMove === computerMove) {
    result = "tie";
  }
  displayResult();
  saveScore();
  displayScore();
}

// DISPLAY RESULT FUNCTION
function displayResult() {
  const matchResult = document.getElementById("result");
  const moveResult = document.getElementById("moveResult");
  resultModal.style.display = "block";

  if (result === "win") {
    matchResult.textContent = "YOU WIN!";
    moveResult.innerHTML = `YOU
          <img src="images/${playerMove}.png" /> COMPUTER
          <img src="images/${computerMove}.png" />`;
  } else if (result === "lose") {
    matchResult.textContent = "YOU LOSE!";
    moveResult.innerHTML = `YOU
          <img src="images/${playerMove}.png" /> COMPUTER
          <img src="images/${computerMove}.png" />`;
  } else {
    matchResult.textContent = "TIE";
    moveResult.innerHTML = `YOU
          <img src="images/${playerMove}.png" /> COMPUTER
          <img src="images/${computerMove}.png" />`;
  }
}

// DISPLAY SCORE FUNCTION
function displayScore() {
  const displayedPlayerScore = document.getElementById("myScoreContainer");
  const displayedComputerScore = document.getElementById(
    "computerScoreContainer"
  );

  displayedPlayerScore.innerHTML = playerScore;
  displayedComputerScore.innerHTML = computerScore;
}

// SAVE SCORE FUNCTION
function saveScore() {
  localStorage.setItem("playerScore", playerScore);
  localStorage.setItem("computerScore", computerScore);
}

// RESET SCORE BUTTON
document.getElementById("resetScoreBTN").addEventListener("click", () => {
  resetModal.style.display = "block";

  document.getElementById("cancelBTN").addEventListener("click", () => {
    resetModal.style.display = "none";
  });

  document.getElementById("confirmBTN").addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    displayScore();
    saveScore();
    resetModal.style.display = "none";
  });
});
