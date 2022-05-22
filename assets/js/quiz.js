var timeLeftEl = document.querySelector("#time-left");
var questionEl = document.querySelector("#question");
var option1El = document.querySelector("#option1");
var option2El = document.querySelector("#option2");
var option3El = document.querySelector("#option3");
var option4El = document.querySelector("#option4");
var commentEl = document.querySelector("#comment");
var progressEl = document.querySelector("#progress");
var countdownEl = document.querySelector("#countdown");


quizQuestions = [
  {
    question:"When a user views a page containing a JavaScript program, which machine actually executes the script?",
    option1:"The User's machine running a Web browser",
    option2:"The Web server",
    option3:"A central machine deep within server's corporate offices",
    option4:"None of the above",
    answer:"option1",
  },
  {
    question:"Which of the following is not a valid JavaScript variable name?",
    option1:"2names",
    option2:"_first_and_last_names",
    option3:"FirstAndLast",
    option4:"None of the above",
    answer:"option1",
  },
  {
    question:"How does JavaScript store dates in a date object?",
    option1:"The number of milliseconds since January 1st, 1970",
    option2:"The number of days since January 1st, 1900",
    option3:"The number of seconds since Netscape's public stock offering.",
    option4:"None of the above",
    answer:"option1",
  },
  {
    question:" ______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    option1:"<script>",
    option2:"<head>",
    option3:"<body>",
    option4:"<title>",
    answer:"option1",
  },
  {
    question:"Inside which HTML element do we put the JavaScript?",
    option1:"<js>",
    option2:"<scripting>",
    option3:"<script>",
    option4:"<javascript>",
    answer:"option3",
  },
  {
    question:"What is the correct syntax for referring to an external script called 'abc.js'?",
    option1:"<script href='abc.js'>",
    option2:"<script name='abc.js'>",
    option3:"<script src='abc.js'>",
    option4:"None of the above",
    answer:"option3",
  },
  {
    question:"Using _______ statement is how you test for a specific condition.",
    option1:"Select",
    option2:"If",
    option3:"Switch",
    option4:"For",
    answer:"option2",
  },
  {
    question:"The _______ method of an Array object adds and/or removes elements from an array.",
    option1:"Reverse",
    option2:"Shift",
    option3:"Slice",
    option4:"Splice",
    answer:"option4",
  },
  {
    question:"Which of the following functions is a valid type of function that javascript supports?",
    option1:"named function",
    option2:"anonymous function",
    option3:"both of the above",
    option4:"None of the above",
    answer:"option3",
  },
  {
    question:"Which method returns the character at the specified index?",
    option1:"characterAt()",
    option2:"getCharAt()",
    option3:"charAt()",
    option4:"None of the above",
    answer:"option3",
  },
  {
    question:"Which method returns the string starting at the specified position?",
    option1:"substr()",
    option2:"getSubstring()",
    option3:"slice()",
    option4:"None of the above",
    answer:"option1",
  },
  {
    question:"How do you find the greatest value of 'a' and 'b'?",
    option1:"Math.ceil(a, b)",
    option2:"Math.max(a, b)",
    option3:"ceil(a, b)",
    option4:"top(a, b)",
    answer:"option2",
  },
  {
    question:"What is the correct syntax of the 'while' loop?",
    option1:"while (i <= 5)",
    option2:"while i = 1 to 5",
    option3:"while (i <= 5; i++)",
    option4:"while (i=0; i <= 5; i++)",
    answer:"option1",
  },
  {
    question:"What is the correct syntax of the 'for' loop?",
    option1:"for (i <= 10; i++)",
    option2:"for i = 1 to 10",
    option3:"for (i = 0; i <= 10)",
    option4:"for (i = 0; i <= 10; i++)",
    answer:"option4",
  },
  {
    question:"How to round the number 3.12 to a closer integer number?",
    option1:"Math.round(3.12)",
    option2:"Math.rnd(3.12)",
    option3:"float(3.12)",
    option4:"Math.float(3.12)",
    answer:"option1",
  },
]
timeLeftEl.textContent = "Time left: 20 m 0 s"
timeleftCounter = 1200; //set to 1200 in the end

function startTimer(){
  
  var timerinterval = setInterval(function(){
    timeLeftEl.textContent = `Time left: ${parseInt(timeleftCounter/60)} m ${timeleftCounter%60} s`;
    if(timeleftCounter <= 0) {
      clearInterval(timerinterval);
      sessionStorage.setItem("timeleftCounter", timeleftCounter);
      sessionStorage.setItem("score", (score));
      sessionStorage.setItem("noOfCorrectAnswers", (noOfCorrectAnswers));
      document.location.href="end.html";
    };
    timeleftCounter--;    
  },(1000))  
};

function displayQuestion(index){
  
  sessionStorage.setItem("noOfquestions", quizQuestions.length);
  fifteenSecInterval = null;
  
  if (index < quizQuestions.length){
    questionEl.textContent = quizQuestions[index].question;
    option1El.textContent = quizQuestions[index].option1;
    option2El.textContent = quizQuestions[index].option2;
    option3El.textContent = quizQuestions[index].option3;
    option4El.textContent = quizQuestions[index].option4;
    progressEl.textContent = `Question ${index+1} out of ${quizQuestions.length}`;
    
    if (index === 0) {
      validateUserAnswer(index);
    }    
  } else {
    sessionStorage.setItem("allQuestions", true);
    sessionStorage.setItem("score", (score));
    sessionStorage.setItem("noOfCorrectAnswers", (noOfCorrectAnswers));    
    document.location.href="end.html";
  }
};

let fifteenSecInterval = null;
function start15Sectimer(displayNextquestion) {
  let timerlength = 15
  fifteenSecInterval = setInterval(function(){    
    countdownEl.textContent = `${timerlength} seconds left to answer this question`;
    if (timerlength <= 0) {
      console.log(timerlength);
      clearInterval(fifteenSecInterval);
      countdownEl.textContent = ""
      displayNextquestion();
    }
    timerlength--;
  },1000)
};

function isRight(el){
  el.classList.add("right");  
  commentEl.textContent = "CORRECT !!";
  commentEl.style.color = "#38b000";
  score += 10;
  noOfCorrectAnswers += 1; 
};

function isWrong(el) {
  el.classList.add("wrong");
  commentEl.textContent = "WRONG !!";
  commentEl.style.color = "#c71f37";
  timeleftCounter -= 60;
  timeLeftEl.style.color = "#c71f37";
};

let score = 0
let noOfCorrectAnswers = 0

function validateUserAnswer(index){
  document.addEventListener('click', e => {
    let userAnswer = e.target.id;    
    let correctAnswer = quizQuestions[index].answer;    
   
    if (e.target.matches("button")){
      if (userAnswer === correctAnswer) {
        
        clearInterval(fifteenSecInterval);
        countdownEl.textContent = "";
        let clickedEl = document.querySelector("#"+correctAnswer);        
        isRight(clickedEl);
        setTimeout(function(){
          clickedEl.classList.remove("right");
          commentEl.textContent = "";
          index = index + 1;
          displayQuestion(index);
        },1000)
              
      } else {      
        let clickedEl = document.querySelector("#"+userAnswer);
        isWrong(clickedEl);
        if (!fifteenSecInterval) {
          start15Sectimer(function(){
            index = index + 1;
            displayQuestion(index);
          });
        }        
        setTimeout(function(){
          clickedEl.classList.remove("wrong");
          commentEl.textContent = "";
          timeLeftEl.style.color = "#d8f3dc";
        },3000)
        
      }
    }
  })
};

startTimer();
displayQuestion(0);
