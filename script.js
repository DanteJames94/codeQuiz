var strtBtn = document.getElementById("start");
var gameScreen = document.getElementById("gameScreen");
var paragraph = document.getElementById("paragraph");
var questionEl = document.getElementById("questions");
var answerButtons = document.getElementById("answerButtons");
var secondQuestion = document.getElementById("secondQuestion");

var questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hypertext Markup Language",
      "Hotel to Motel Living",
      "Hold the Mic Level",
    ],
    correctAnswers: "Hypertext Markup Language",
  },
  {
    question: "What is CSS used for?",
    answers: [
      "To modify the appearance of an HTML file",
      "Security at the airport",
      "To encrypt emails",
    ],
    correctAnswers: "To modify the appearance of an HTML file",
  },
];

var gameIndex = 0;

function nextQuestion() {
  for(var i=0; i < questions[gameIndex].answers.length; i++) {
    questionEl.textContent = questions[gameIndex].question;
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = questions[gameIndex].answers[i]
    answerButtons.append(btn);
    
  }
}

strtBtn.addEventListener("click", function () {
  console.log("this worked");
  paragraph.classList.add("hide");
  gameScreen.classList.remove("hide");
  nextQuestion();
});




// answerButtons.addEventListener("click", function () {
//   console.log("second button worked");
//   gameScreen.classList.add("hide");
//   secondQuestion.classList.remove("hide");
  
  
  
// });




