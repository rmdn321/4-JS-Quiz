let highscoreEl = document.getElementById("highscore");
let goBackBtn = document.getElementById("go-back-btn");
let clearHighscoresBtn = document.getElementById("clear-highscores-btn");
let highscoretableEl = document.getElementById("highscore-table"); 

goBackBtn.addEventListener("click",function(){
  sessionStorage.clear();
  location.href="index.html"
});

clearHighscoresBtn.addEventListener("click",function(){
  localStorage.clear();
  highscoretableEl.textContent = ""
});

function displayHighScores() {
  let highscoreArr = JSON.parse(localStorage.getItem("highscoreArr"));  
  if (highscoreArr === null) {
    highscoreArr = [];
  } 
  for (let i in highscoreArr) {
    console.log(highscoreArr[i]);
    var row = document.createElement("tr");
    var name = document.createElement("td");
    var score = document.createElement("td");
    name.textContent = highscoreArr[i].name_stored;
    score.textContent = highscoreArr[i].score_stored;
    row.append(name);
    row.append(score);
    // highscoreEl.append(row);
    highscoretableEl.append(row);

  }
}

displayHighScores()
