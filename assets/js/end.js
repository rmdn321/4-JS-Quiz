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
let playerName = document.getElementById("name");
let saveMsg = document.getElementById("save-msg");

playAgainBtn.addEventListener("click",function(){
  sessionStorage.clear();
  location.href="quiz.html"
});

viewHighScoreBtn.addEventListener("click",function(){
  sessionStorage.clear();
  location.href="highscores.html"
});

if (timeleftCounter <= 0) { 
  if (noOfquestions){ 
    thankYou.innerHTML = "GAME OVER !!";
    thankYou.style.color = "#c71f37";  
    myScore.innerHTML = `SCORE: ${score} points`;
    questionsAnswered.innerHTML = `You answered ${noOfCorrectAnswers} out of ${noOfquestions} questions correctly`;
  }  
}

if (allQuestions) {
  thankYou.innerHTML = "THANK YOU FOR TAKING THE JAVASCRIPT QUIZ !!";
  thankYou.style.color = "#38b000";
  myScore.innerHTML = `SCORE: ${score} points`;
  questionsAnswered.innerHTML = `You answered ${noOfCorrectAnswers} out of ${noOfquestions} questions correctly`;
}

if (score) {
  let highscore = {
    name_stored: "",
    score_stored: score,
  };
  
  sessionStorage.setItem("highscore", JSON.stringify(highscore));
  
  playerName.addEventListener("keyup", function(e){
    e.preventDefault();  
    let highscoreSS = JSON.parse(sessionStorage.getItem("highscore")); 
    if (e.key === "Enter") {
      saveMsg.style.display = "block";
      this.value = "";
      this.disabled = true;
      let highscoreArr = JSON.parse(localStorage.getItem("highscoreArr"));  
      insert_flag = false;
      if (highscoreArr === null) {        
        highscoreArr = [highscoreSS];
        insert_flag = true;
      } else {
        for (let index = 0; index < highscoreArr.length; index++) {
        if (highscoreSS.score_stored < highscoreArr[index].score_stored ) {
          continue;
        }
        insert_flag = true;
        highscoreArr.splice(index, 0, highscoreSS);
        break;
        }
        if (!insert_flag){
          highscoreArr.push(highscoreSS)
        }
      }
      if (highscoreArr.length > 10) {
        highscoreArr.pop();    
      }  
      localStorage.setItem("highscoreArr",JSON.stringify(highscoreArr));
    } else {
      saveMsg.style.display = "display"
      highscoreSS.name_stored = playerName.value;
       
      sessionStorage.setItem("highscore", JSON.stringify(highscoreSS));
      console.log(highscoreSS);
    }  
  })
}



