var beginBtn = document.getElementById("begin-btn");
var viewHighScoreBtn = document.getElementById("view-high-score-btn");

// Resetting the session storage every time we land on the start page
sessionStorage.clear();

// Event listeners for both the buttons on the start page
beginBtn.addEventListener("click",function(){
  location.href="quiz.html"
});

viewHighScoreBtn.addEventListener("click",function(){
  location.href="highscores.html"
});