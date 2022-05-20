let playAgainBtn = document.getElementById("play-again-btn");
let viewHighScoreBtn = document.getElementById("view-high-score-btn");
let timeleftCounter = sessionStorage.getItem("timeleftCounter");
let allQuestions = sessionStorage.getItem("allQuestions");
let myScore = document.getElementById("my-score");
let questionsAnswered = document.getElementById("questions-answered");
let score = sessionStorage.getItem("score");
let noOfCorrectAnswers = sessionStorage.getItem("noOfCorrectAnswers");
let thankYou = document.getElementById("thank-you");
let noOfquestions = sessionStorage.getItem("noOfquestions"); 


playAgainBtn.addEventListener("click",function(){
  location.href="quiz.html"
});

viewHighScoreBtn.addEventListener("click",function(){
  location.href="highscores.html"
});

if (timeleftCounter <= 0) {  
  thankYou.innerHTML = "GAME OVER !!";
  thankYou.style.color = "#c71f37";
  myScore.innerHTML = `SCORE: ${score} points`;
  questionsAnswered.innerHTML = `You answered ${noOfCorrectAnswers} out of ${noOfquestions} questions correctly`;
}

if (allQuestions) {
  thankYou.innerHTML = "THANK YOU FOR TAKING THE JAVASCRIPT QUIZ !!";
  thankYou.style.color = "#38b000";
  myScore.innerHTML = `SCORE: ${score} points`;
  questionsAnswered.innerHTML = `You answered ${noOfCorrectAnswers} out of ${noOfquestions} questions correctly`;
}

sessionStorage.clear();