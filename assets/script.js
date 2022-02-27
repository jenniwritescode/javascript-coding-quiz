// CODING QUIZ CHALLENGE

// This is a timed quiz that tests Javascript fundamentals.
// Expected behavior:
// User clicks start quiz button, which starts a timer (2 minutes/120 seconds).
// Question is presented, user clicks button to answer.
// Quiz continues to display additional questions, until timer runs out or there are no more questions.
// A wrong answer reduces remaining time by 5 seconds.
// Game is over when timer is at 0 seconds, or there are no more questions.
// After game ends, user is asked for initials to save high score.
// High scores are saved until user clears them using "Clear High Scores" button.



// Declare list of questions
const questions = [
  {
    question: "1. How do you declare a Javascript variable?",
    choices: ["a. var", "b. let", "c. const", "d. all of the above"],
    answer: "d. all of the above",
  },
  {
    question:
      "2. String values must be enclosed within _____ when being assigned to variables.",
    choices: ["a. commas", "b. curly brackets", "c. quotes", "d. parentheses"],
    answer: "c. quotes",
  },
  {
    question: "3. In HTML, Javascript code is inserted between which tag?",
    choices: ["a. <js>", "b. <javascript>", "c. <scripting>", "d. <script>"],
    answer: "d. <script>",
  },
  {
    question: "4. Commonly used data types DO NOT include:",
    choices: ["a. strings", "b. alerts", "c. booleans", "d. numbers"],
    answer: "b. alerts",
  },
  {
    question: "5. What does 'x === y' mean in Javascript?",
    choices: [
      "a. x and y are equal",
      "b. x and y are not equal",
      "c. x and y are both numbers",
      "d. x and y are equal in both value and data type",
    ],
    answer: "d. x and y are equal in both value and data type",
  },
  {
    question: "6. How do you call a function named 'myFunction'?",
    choices: [
      "a. call myFunction()",
      "b. call function myFunction()",
      "c. myFunction()",
      "d. call myFunctions",
    ],
    answer: "c. myFunction()",
  },
  {
    question:
      "7. What are the named values inside of a Javascript object called?",
    choices: ["a. properties", "b. variables", "c. functions", "d. booleans"],
    answer: "a. properties",
  },
  {
    question: "8. The second index of an array is ____.",
    choices: ["a. 0", "b. 1", "c. 2", "d. any"],
    answer: "b. 1",
  },
  {
    question: "9. How do you get a random number using Javascript?",
    choices: [
      "a. Math.random()",
      "b. Number.random()",
      "c. Integer.random()",
      "d. Random.random()",
    ],
    answer: "a. Math.random()",
  },
  {
    question: "10. What is an example of a HTML event?",
    choices: ["a. onpress", "b. onload", "c. onclick", "d. both b and c"],
    answer: "d. both b and c",
  },
  {
    question: "11. What is the proper way to comment in a Javascript file?",
    choices: [
      "a. 'This is a comment'",
      "b. <!--This is a comment-->",
      "c. //This is a comment",
      "d. * This is a comment *",
    ],
    answer: "c. //This is a comment",
  },
  {
    question: "12. What data types can a Javascript array hold?",
    choices: ["a. numbers", "b. strings", "c. objects", "d. all of the above"],
    answer: "d. all of the above",
  },
];

// Declare variables and get references to HTML elements
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");

var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");

var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("button0");
var choiceB = document.getElementById("button1");
var choiceC = document.getElementById("button2");
var choiceD = document.getElementById("button3");

var answerCheck = document.getElementById("answerCheck");

var summary = document.getElementById("summary");
var submitInitialsBtn = document.getElementById("submitInitialsBtn");
var initialsInput = document.getElementById("initialsInput");

var quizMain = document.getElementById("quizMain");
var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");

var backButton = document.getElementById("backButton");
var clearButton = document.getElementById("clearButton");

var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

// Functions

// Timer starts when Start Quiz button is clicked
var totalTime = 121;
function newQuiz() {
  totalTime = 120;
  questionIndex = 0;
  timeLeft.textContent = totalTime;

  // Clear initials and correct/incorrect answer text as new game is starting
  initialsInput.textContent = "";
  answerCheck.textContent = "";

  // Reset score to 0
  correctAns = 0;

  startDiv.style.display = "none";
  questionDiv.style.display = "block";
  timer.style.display = "block";
  timesUp.style.display = "none";

  var startTimer = setInterval(function () {
    totalTime--;
    timeLeft.textContent = totalTime;
    if (totalTime <= 0) {
      clearInterval(startTimer);
      if (questionIndex < questions.length - 1) {
        gameOver();
      }
    }
  }, 1000);

  showQuiz();
}

function showQuiz() {
  nextQuestion();
}

function nextQuestion() {
  questionTitle.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].choices[0];
  choiceB.textContent = questions[questionIndex].choices[1];
  choiceC.textContent = questions[questionIndex].choices[2];
  choiceD.textContent = questions[questionIndex].choices[3];
}

// After question is answered, check answer and display correct or incorrect w/correct answer
function checkAnswer(answer) {
  var lineBreak = document.getElementById("lineBreak");
  lineBreak.style.display = "block";
  answerCheck.style.display = "block";

  if (
    questions[questionIndex].answer === questions[questionIndex].choices[answer]
  ) {
    // Add 1 to score if correct
    correctAns++;
    answerCheck.textContent = "Correct!";
  } else {
    // Take away 5 seconds on timer if incorrect
    totalTime -= 5;
    timeLeft.textContent = totalTime;
    answerCheck.textContent =
      "Incorrect! The correct answer is: " + questions[questionIndex].answer;
  }
  questionIndex++;
  // Iterate through questions
  if (questionIndex < questions.length) {
    nextQuestion();
  } else {
    // End Game if no more questions
    gameOver();
  }
}

// Call checkAnswer function when a user picks an answer
function chooseA() {
  checkAnswer(0);
}
function chooseB() {
  checkAnswer(1);
}
function chooseC() {
  checkAnswer(2);
}
function chooseD() {
  checkAnswer(3);
}

// Game Over Function - if timer ends or all questions have been answered
function gameOver() {
  summary.style.display = "block";
  questionDiv.style.display = "none";
  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "block";

  // Show final score
  finalScore.textContent = correctAns;
}

// High Scores stored in Local Storage
function storeHighScores(event) {
  event.preventDefault();

  // Exit Function if blank
  if (initialsInput.value === "") {
    alert("Enter your initials:");
    return;
  }

  startDiv.style.display = "none";
  timer.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  highScoreSection.style.display = "block";

  var savedHighScores = localStorage.getItem("high scores");
  var scoresArray;

  if (savedHighScores === null) {
    scoresArray = [];
  } else {
    scoresArray = JSON.parse(savedHighScores);
  }

  var userScore = {
    initials: initialsInput.value,
    score: finalScore.textContent,
  };

  scoresArray.push(userScore);

  var scoresArrayString = JSON.stringify(scoresArray);
  window.localStorage.setItem("high scores", scoresArrayString);

  // call High Score function
  showHighScores();
}

// High Score function
function showHighScores() {
  startDiv.style.display = "none";
  timer.style.display = "none";
  questionDiv.style.display = "none";
  timesUp.style.display = "none";
  summary.style.display = "none";
  highScoreSection.style.display = "block";

  var savedHighScores = localStorage.getItem("high scores");

  // Check if there is any data in Local Storage
  if (savedHighScores === null) {
    return;
  }

  // Display current list of high scores
  var storedHighScores = JSON.parse(savedHighScores);

  // Remove contents of listOfHighScores so scores don't display multiple times
  listOfHighScores.innerHTML = "";

  for (var i=0; i < storedHighScores.length; i++) {
      var displayHighScores = document.createElement("p");
      displayHighScores.innerHTML = storedHighScores[i].initials + ": " + storedHighScores[i].score;
      listOfHighScores.appendChild(displayHighScores);
  }
}

// Event Listeners

startQuizBtn.addEventListener("click", newQuiz);
choiceA.addEventListener("click", chooseA);
choiceB.addEventListener("click", chooseB);
choiceC.addEventListener("click", chooseC);
choiceD.addEventListener("click", chooseD);

submitInitialsBtn.addEventListener("click", function (event) {
  storeHighScores(event);
});

viewHighScore.addEventListener("click", function (event) {
  showHighScores(event);
});

backButton.addEventListener("click", function () {
  startDiv.style.display = "block";
  highScoreSection.style.display = "none";
});

clearButton.addEventListener("click", function () {
  window.localStorage.removeItem("high scores");
  alert("High scores cleared!");
  listOfHighScores.innerHTML = "";
  listOfHighScores.setAttribute(
    "style",
    "font-family: 'Quicksand', sans-serif; font-style: italic;"
  );
});
