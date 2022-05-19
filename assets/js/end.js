var playAgainBtn = document.getElementById("play-again-btn");
var viewHighScoreBtn = document.getElementById("view-high-score-btn");

playAgainBtn.addEventListener("click",function(){
  location.href="quiz.html"
});

viewHighScoreBtn.addEventListener("click",function(){
  location.href="highscores.html"
});