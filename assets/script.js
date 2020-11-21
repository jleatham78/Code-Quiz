//build array for questions
var pos = 0;
var correct = 0;
var test, test_status, question, choice, choices, chA, chB, chC, cdD;

var myQuestions = [
    { 
        question: "Commonly used data types do Not include:", 
            a: "A. Strings",
            b: "B. Booleans",
            c: "C. Alerts",
            d: "D. Numbers",
            answer: "C"
        },
    {
        question: "The condition in an if/else statement is enclosed with:", 
            a: "A. Quotes",
            b: "B. Curly brackets",
            c: "C. Parantheses",
            d: "D. Square brackets",
            answer: "C"
        },

    { 
        question: "Arrays in JavaScript can be used to store:", 
            a: "A. Numbers and strings",
            b: "B. Other arrays",
            c: "C. Booleans",
            d: "D. All of the above",
            answer: "D"
        }
];


var introContainerEl = document.createElement("div");
    document.body.appendChild(introContainerEl);

var headlineContainerEl = document.createElement("h1");
    headlineContainerEl.className = "welcome";
    headlineContainerEl.textContent = "Coding Quiz Challenge";
    introContainerEl.appendChild(headlineContainerEl);

var welcomeContainerEl = document.createElement("p");
    welcomeContainerEl.className = "instructions";
    welcomeContainerEl.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!"
    introContainerEl.appendChild(welcomeContainerEl);

var startquizEl = document.createElement("h2");
    startquizEl.className = "instructions";
    startquizEl.textContent = "Click here to get started!"
    introContainerEl.appendChild(startquizEl);

var buttonEl = document.createElement("button");
    buttonEl.textContent = "Start Quiz!";
    buttonEl.className = "btn";
    introContainerEl.appendChild(buttonEl);
    buttonEl.setAttribute("id", "start-button");

buttonEl.addEventListener("click", function() {
    buttonEl.remove();
    introContainerEl.remove();
    renderQuestion1()
})


var renderQuestion1 = function() {
    var quizContainerEl = document.createElement("div");
    document.body.appendChild(quizContainerEl);

    var question1El = document.createElement("h2")
    question1El.className = "question-style";
    question1El.textContent = "Commonly used data types do not include:"
    quizContainerEl.appendChild(question1El);

    var buttona1El = document.createElement("button");
    buttona1El.textContent = "Strings";
    buttona1El.className = "btn";
    quizContainerEl.appendChild(buttona1El);
    //buttonq1El.setAttribute("id", "start-button");
    buttona1El.addEventListener("click", function() {
        if (true) {
            alert("Incorrect");
        };
        quizContainerEl.remove();
        renderQuestion2()
    });

    var buttona2El = document.createElement("button");
    buttona2El.textContent = "Booleans";
    buttona2El.className = "btn";
    quizContainerEl.appendChild(buttona2El);

    buttona2El.addEventListener("click", function() {
        if (true) {
            alert("Incorrect");
        };
        quizContainerEl.remove();
        renderQuestion2()
    });

    var buttona3El = document.createElement("button");
    buttona3El.textContent = "Alerts";
    buttona3El.className = "btn";
    quizContainerEl.appendChild(buttona3El);

    buttona3El.addEventListener("click", function() {
        if (true) {
            alert("Correct");
        };
        quizContainerEl.remove();
        renderQuestion2()
    });
}



    

var renderQuestion2 = function() {
    var quizContainerEl = document.createElement("div");
    document.body.appendChild(quizContainerEl);

    var question2El = document.createElement("h2")
    question2El.className = "question-style";
    question2El.textContent = "The condition in an if/else statement is enclosed with:"
    quizContainerEl.appendChild(question2El);

    var buttonq2El = document.createElement("button");
    buttonq2El.textContent = "Quotes";
    buttonq2El.className = "btn";
    quizContainerEl.appendChild(buttonq2El);
    //buttonq1El.setAttribute("id", "start-button");
    
    buttonq2El.addEventListener("click", function() {
        if (true) {
            alert("Correct");
            console.log(buttonq2El);
        //} else {
          //  alert("Incorrect");
        };
        //renderQuestion2()
    })
}
    
    // test = get("test");
    // if(pos >= myQuestions.length) {
    //     test.innerHTML = "<h2>You got" +correct+" of "+myQuestions.length+" questions correct</h2>";
    //     get("test-status").innerHTML = "Test Completed";
    //     //resets variable to allow users to restart the test
    //     pos = 0;
    //     correct = 0;
    //     //stops rest of renderQuestion running when test is completed
    //     return false;
    // }

    // //get("test_status").innerHTML = "Question "+(pos+1)+" of "+myQuestions.length;

    // question = myQuestions[pos].question;
    // chA = myQuestions[pos].a;
    // chB = myQuestions[pos].b;
    // chC = myQuestions[pos].c;
    // chD = myQuestions[pos].d;

    // //display the question
    // test.innerHTML = "<h3>"+question+"</h3>";

    // //display the answer options
    // test.innerHTML += "<label> <input type="button" name="choices" value="A"> "+chA+"</label><br>";
    // test.innerHTML += "<label> <input type="button" name="choices" value="B"> "+chB+"</label><br>";
    // test.innerHTML += "<button onclick="checkAnswer()">Submit Answer</button>";


//create quiz button--eventhandler
//create function to start quiz

//create function to go to next question

//create fuction to answer correct or incorrect
    //if incorrect, subtract time
//show/store score
//display high scores

//style questions
//style buttons for answers



//create buttons for each answer--add dynamically?
//add ul element for buttons
//<button type="button" id="1"></button>
//<input type="button" name= "question1" value="2" id="q1a">


//     var buildQuiz = function() {
//     var output = [];

//     var quizContainer = document.createElement('div');
//     quizContainer.className = "quiz-questions";


//     //for each question
//     myQuestions.forEach(
//         (currentQuestion, questionNumber) => {

//             //variable to store the list of possible answers
//             var answers = [];

//             //and for each available answer
//             for(number in currentQuestions.answers){

//                 //add buttons
//                 answers.push(

//                 )
//             }
//         }
//     )
// }