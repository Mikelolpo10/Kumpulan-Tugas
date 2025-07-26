const imageSource = {
  rock: "rock-emoji.png",
  paper: "paper-emoji.png",
  scissors: "scissors-emoji.png",
};

const scores = {
  wins: 0,
  loses: 0,
  ties: 0,
};

let history = [];

let html;
const computerImg = document.querySelector(".computer-move-img");
const playerImg = document.querySelector(".player-move-img");
let autoPlayId = true;

function playGame(playerMove) {
  const randomMove = Math.random();
  let computerMove;
  let result;
  const resultNotification = document.querySelector(".result");

  if (randomMove <= 1 / 3) {
    computerMove = "rock";
  } else if (randomMove > 1 / 3 && randomMove <= 2 / 3) {
    computerMove = "paper";
  } else if (randomMove > 2 / 3 && randomMove <= 3 / 3) {
    computerMove = "scissors";
  }

  if (playerMove === computerMove) {
    result = "TIE";
    scores.ties += 1;
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You WIN";
    scores.wins += 1;
  } else {
    result = "You LOSE";
    scores.loses += 1;
  }

  renderScores(scores);

  resultNotification.classList.remove("result-none");
  resultNotification.innerHTML = result;

  computerImg.src = imageSource[computerMove];
  playerImg.src = imageSource[playerMove];
  document.querySelectorAll(".move-display").forEach((img) => {
    img.classList.remove("move-display-active");
  });

  console.log(result);
}

function renderScores(scores) {
  html = `<span class="wins">Wins: ${scores.wins}</span>
      <span class="loses">Loses: ${scores.loses}</span>
      <span class="ties">Ties: ${scores.ties}</span>`;
  document.querySelector(".scores-container").innerHTML = html;
}

function saveHistory() {
  history.push(scores);
  document.querySelector(".")
}

document.querySelectorAll(".player-move").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const playerMove = this.dataset.move;
    playGame(playerMove);
  });
});

document.querySelector(".autoplay").addEventListener("click", (btn) => {
  let buttonText = document.querySelector(".autoplay");
  if (autoPlayId === true) {
    buttonText.innerHTML = "Stop Autoplay";
    autoPlayId = setInterval(() => {
      let playerMove = Math.random();
      if (playerMove <= 1 / 3) {
        playerMove = "rock";
      } else if (playerMove > 1 / 3 && playerMove <= 2 / 3) {
        playerMove = "paper";
      } else if (playerMove > 2 / 3 && playerMove <= 3 / 3) {
        playerMove = "scissors";
      }
      playGame(playerMove);
    }, 1500);
  } else {
    buttonText.innerHTML = "Autoplay";
    clearInterval(autoPlayId);
    autoPlayId = true;
  }
});

document.querySelector(".reset-scores").addEventListener("click", () => {
  for (let key in scores) {
    scores[key] = 0;
  }
  renderScores(scores);
});

renderScores(scores);
