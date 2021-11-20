//Variables
let questionNumber = 1; //holds the current question number
let Score = 0; //holds the score
let index = 0;
//questions array
const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    optionA: "javascript",
    optionB: "js",
    optionC: "script",
    optionD: "scripting",
    correctOption: "optionC"
  },

  {
    question: "Choose the correct HTML element for the largest heading:",
    optionA: "h1",
    optionB: "head",
    optionC: "h6",
    optionD: "heading",
    correctOption: "optionA"
  },

  {
    question: "Which HTML attribute is used to define inline styles?",
    optionA: "styles",
    optionB: "font",
    optionC: "class",
    optionD: "style",
    correctOption: "optionD"
  },

  {
    question: "What is the correct HTML element for inserting a line break?",
    optionA: "b",
    optionB: "br",
    optionC: "lb",
    optionD: "hr",
    correctOption: "optionB"
  },
  {
    question: "Which is the correct CSS syntax?",
    optionA: "{black;}",
    optionB: "color=black;",
    optionC: "{body;black;}",
    optionD: "body{color:black;}",
    correctOption: "optionD"
  }
];

//Elements in a variable
const qNum = document.getElementById("question-number");
const sNum = document.getElementById("score");
const question = document.getElementById("display-question");
const option1 = document.getElementById("option-one-label");
const option2 = document.getElementById("option-two-label");
const option3 = document.getElementById("option-three-label");
const option4 = document.getElementById("option-four-label");
const options = document.getElementsByName("option");

//display question one
question.innerHTML = questions[index].question;
option1.innerHTML = questions[index].optionA;
option2.innerHTML = questions[index].optionB;
option3.innerHTML = questions[index].optionC;
option4.innerHTML = questions[index].optionD;

//calculate Score function
function calculateScore() {

  for (let i = 0; i < options.length; i++) {
    if (options[i].checked == true) {
      if (questions[index].correctOption === options[i].value) {
          //update score
        Score += 2;
        sNum.innerHTML = Score;
      }
    }
  }
}


//button of next question function
function nextQuestion() {
    //check the user select answer or not
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    alert("select answer!!");
  } else {
      //update question and answers
    if (index <= questions.length - 1) {

      question.innerHTML = questions[index].question;
      option1.innerHTML = questions[index].optionA;
      option2.innerHTML = questions[index].optionB;
      option3.innerHTML = questions[index].optionC;
      option4.innerHTML = questions[index].optionD;
      //update question Number
      questionNumber++;
      qNum.innerHTML = questionNumber;
      //calculate Score
      calculateScore();
      //update index of array
      index++;
      //show score after calculate
      sNum.innerHTML = Score;

    } else {
         //calculate Score for last question
      if (questionNumber == 5) {
        for (let i = 0; i < options.length; i++) {
          if (options[i].checked == true) {
            if (questions[4].correctOption === options[i].value) {
              Score += 2;
            }
            questionNumber++;
          }
        }
      } else {
        if (Score >= 6) {
          alert("Congratulations your grade is " + Score);
        } else {
          alert("Good luck your grade is " + Score);
        }

        //reset quiz
        questionNumber = 1;
        Score = 0;
        index = 0;
        question.innerHTML = questions[index].question;
        option1.innerHTML = questions[index].optionA;
        option2.innerHTML = questions[index].optionB;
        option3.innerHTML = questions[index].optionC;
        option4.innerHTML = questions[index].optionD;
        sNum.innerHTML = Score;
        qNum.innerHTML = questionNumber;
      }
    }
  }
}
