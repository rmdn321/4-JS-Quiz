var beginBtn = document.getElementById("begin-btn");
var viewHighScoreBtn = document.getElementById("view-high-score-btn");

sessionStorage.clear();
beginBtn.addEventListener("click",function(){
  location.href="quiz.html"
});

viewHighScoreBtn.addEventListener("click",function(){
  location.href="highscores.html"
});