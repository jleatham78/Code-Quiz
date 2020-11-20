//build array for questions
var myQuestions = [
    { 
        question: "Commonly used data types do Not include:", 
        answers: {
            1: "Strings",
            2: "Booleans",
            3: "Alerts",
            4: "Numbers"
        }
        ,correctAnswer: "3",
    },
    {
        question: "The condition in an if/else statement is enclosed with:", 
        answers: {
            1: "Quotes",
            2: "Curly brackets",
            3: "Parantheses",
            4: "Square brackets"
        }
        ,correctAnswer: "3",
    },

    { 
        question: "Arrays in JavaScript can be used to store:", 
        answers: {
            1: "Numbers and strings",
            2: "Other arrays",
            3: "Booleans",
            4: "All of the above"
        }
        ,correctAnswer: "4",
    },

    {  
        question: "String values must be enclosed within ______ when being assigned to variables.", 
        answers: {
            1: "Commas",
            2: "Curly brackets",
            3: "Quotes",
            4: "Parantheses"
        }
        ,correctAnswer: "3",
    },

    { 
        question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log"
        }
        ,correctAnswer: 4,
        get correctAnswer() {
            return this._correctAnswer;
        },
        set correctAnswer(4) {
            this._correctAnswer = value;
        },
     }
];

//create buttons for each answer--add dynamically

//add ul element for buttons
//<button type="button" id="1"></button>
//<input type="button" name= "question1" value="2" id="q1a">


var buildQuiz = function() {
    var output = [];

    var quizContainer = document.createElement('div');
    quizContainer.className = "quiz-questions";


    //for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            //variable to store the list of possible answers
            var answers = [];

            //and for each available answer
            for(number in currentQuestions.answers){

                //add buttons
                answers.push(

                )
            }
        }
    )
}