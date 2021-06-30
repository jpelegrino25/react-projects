"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Corrent Answer!";
// document.querySelector(".score").textContent = 10;
// document.querySelector(".number").textContent = 15;
// document.querySelector(".guess").value = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let hightScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);
  if (score < 1) {
    // document.querySelector(".message").textContent = "Game over, you lost!";
    displayMessage("Game over, you lost!");
  } else {
    if (!guessNum) {
      // document.querySelector(".message").textContent = "Wrong value";
      displayMessage("Wrong value");
    } else if (secretNumber === guessNum) {
      // document.querySelector(".message").textContent = "Corrent Answer!";
      displayMessage("Corrent Answer!");
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (hightScore < score) {
        hightScore = score;
        document.querySelector(".highscore").textContent = hightScore;
      }
    } else if (guessNum > secretNumber) {
      // document.querySelector(".message").textContent = "Too High!";
      displayMessage("Too High!");
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guessNum < secretNumber) {
      // document.querySelector(".message").textContent = "Too Low!";
      displayMessage("Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = 20;
  score = 20;
  let number = document.querySelector(".number");
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  number.style.width = "15rem";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
