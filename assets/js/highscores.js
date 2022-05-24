// Element query selectors for the page
let highscoreEl = document.getElementById("highscore");
let goBackBtn = document.getElementById("go-back-btn");
let clearHighscoresBtn = document.getElementById("clear-highscores-btn");
let highscoretableEl = document.getElementById("highscore-table"); 

// Event listeners for the buttons
goBackBtn.addEventListener("click",function(){
  sessionStorage.clear();
  location.href="index.html"
});

clearHighscoresBtn.addEventListener("click",function(){
  localStorage.clear();
  highscoretableEl.textContent = ""
});

// Function to display the highscores from local storage
function displayHighScores() {
  let highscoreArr = JSON.parse(localStorage.getItem("highscoreArr"));  
  if (highscoreArr === null) {
    highscoreArr = [];
  } 
  // Inserting the name and score from local storage by creating each row and displaying them on the page
  for (let i in highscoreArr) {
    if (highscoreArr[i].name_stored) {
      var row = document.createElement("tr");
      var name = document.createElement("td");
      var score = document.createElement("td");
      name.textContent = highscoreArr[i].name_stored;
      score.textContent = highscoreArr[i].score_stored;
      row.append(name);
      row.append(score);
      highscoretableEl.append(row);
    }      
  }
}

// Calling the function so that it can load the high scores when the page is visited
displayHighScores()
