let AttemptLeft = 10;
let Score = 0;
let HighScore = 0;
let guess = document.querySelector(".guess");
let score = document.querySelector(".score");
let attemptLeft = document.querySelector(".attempt-left");
let highScore = document.querySelector(".Highscore");
let checkButton = document.querySelector(".btn-check");
let againButton = document.querySelector(".btn-again");
let resetButton = document.querySelector(".btn-reset");
let result = document.querySelector(".result");

let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

checkButton.addEventListener("click", function (e) {
  let guessNumber = Number(guess.value);
  if (guessNumber == randomNumber) {
    result.textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#61B15A";
    Score = AttemptLeft;
    if (Score > HighScore) {
      HighScore = Score;
      highScore.textContent = Score;
    }
    document.querySelector(".attempt-count").style.display = "none";
    score.textContent = Score;
    document.querySelector(".number").textContent = guessNumber;
  } else {
    if (guessNumber > randomNumber) {
      result.textContent = "Your Guess is too High";
    } else {
      result.textContent = "Your Guess is too Low";
    }
    AttemptLeft--;
    attemptLeft.textContent = AttemptLeft;
    if (AttemptLeft == 0) {
      result.textContent = "You lost the Game";
      document.querySelector("body").style.backgroundColor = "#D54C4C";
      document.querySelector(".attempt-count").style.display = "none";
    }
  }
});

againButton.addEventListener("click", function (e) {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  AttemptLeft = 10;
  Score = 0;
  document.querySelector("body").style.backgroundColor = "#222";
  result.textContent = "Start Guessing";
  attemptLeft.textContent = AttemptLeft;
  guess.value = "";
  score.textContent = Score;
  document.querySelector(".attempt-count").style.display = "block";
  document.querySelector(".number").textContent = "?";
});

resetButton.addEventListener("click", function (e) {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(randomNumber);
  AttemptLeft = 10;
  Score = 0;
  HighScore = 0;
  document.querySelector("body").style.backgroundColor = "#222";
  result.textContent = "Start Guessing";
  attemptLeft.textContent = AttemptLeft;
  guess.value = "";
  score.textContent = Score;
  highScore.textContent = HighScore;
  document.querySelector(".attempt-count").style.display = "block";
  document.querySelector(".number").textContent = "?";
});
