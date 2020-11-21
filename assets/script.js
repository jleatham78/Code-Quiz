var timerEl = document.getElementById('countdown');
var timeLeft = 0;
var score = 0;
    

function countdown() {
    timeLeft = 35;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
          timerEl.textContent = timeLeft;
          timeLeft--;

        //} else if  {
            //finishQuizEl=true
            //clearInterval(timeInterval);
           // console.log(finishQuizEl);
        } 
    
         else {
           timerEl.textContent = ''
      
          clearInterval(timeInterval);
          alert("Time's up!");
        }
        //if (alert="Incorrect"--can't pull from other functions?)
    },750);

    //document.getElementById(buttona1El).addEventListener('click', function() {
         //sec -= 5;
    //     document.getElementById('timerDisplay').innerHTML='00:'+sec;
    //});
    //startTimer();
}
  

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
    buttonEl.className = "btn-start-quiz";
    introContainerEl.appendChild(buttonEl);
    buttonEl.setAttribute("id", "start-button");

buttonEl.addEventListener("click", function() {
    buttonEl.remove();
    introContainerEl.remove();
    renderQuestion1()
    countdown(35);
})

//var startGame = function() {

//}

//make element for the scores, textContent = 0
//make a function to decrease timer (get element by Id and subtract, start timer)
//make function to increase score (get score element id, increase the textContent--call when correct)

//question 1
var renderQuestion1 = function() {

    //var score = localStorage.getItem('score');

    var quizContainerEl = document.createElement("div");
    document.body.appendChild(quizContainerEl);

    var question1El = document.createElement("h2")
    question1El.className = "question-style";
    question1El.textContent = "Commonly used data types do not include:"
    quizContainerEl.appendChild(question1El);

//question 1 answers
    var buttona1El = document.createElement("button");
    buttona1El.textContent = "Strings";
    buttona1El.className = "btn";
    quizContainerEl.appendChild(buttona1El);

//if button is clicked, prompt shows incorrect
    buttona1El.addEventListener("click", function() {
        if (true) {
            alert("Incorrect. You've lost 10 seconds");
            timeLeft = timeLeft - 10;
            //call a function that changes the textContent of timerEl
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
            alert("Incorrect. You've lost 10 seconds");
            timeLeft = timeLeft - 10;
        };

        quizContainerEl.remove();
        renderQuestion2()
    });

    var buttona3El = document.createElement("button");
    buttona3El.textContent = "Alerts";
    buttona3El.className = "btn";
    quizContainerEl.appendChild(buttona3El);

    //correct answer
    buttona3El.addEventListener("click", function() {
        if (true) {
            score = score + 1;
            localStorage.setItem("score", score);
            alert("Correct");
            console.log(score);
        };
        quizContainerEl.remove();
        renderQuestion2()
    });
}

//question 2
var renderQuestion2 = function() {
    var quizContainerEl = document.createElement("div");
    document.body.appendChild(quizContainerEl);

    var question2El = document.createElement("h2")
    question2El.className = "question-style";
    question2El.textContent = "The condition in an if/else statement is enclosed with:"
    quizContainerEl.appendChild(question2El);

    var buttona1q2El = document.createElement("button");
    buttona1q2El.textContent = "Quotes";
    buttona1q2El.className = "btn";
    quizContainerEl.appendChild(buttona1q2El);

    buttona1q2El.addEventListener("click", function() {
        if (true) {
            alert("Incorrect. You've lost 10 seconds");
            timeLeft = timeLeft - 10;
        };
        quizContainerEl.remove();
        renderQuestion3()
    });

    var buttona2q2El = document.createElement("button");
    buttona2q2El.textContent = "Parantheses";
    buttona2q2El.className = "btn";
    quizContainerEl.appendChild(buttona2q2El);
    
    //correct answer
    buttona2q2El.addEventListener("click", function() {
        if (true) {
            score = score + 1;
            alert("Correct");
            console.log(score);
        };
        quizContainerEl.remove();
        renderQuestion3()
    });

    var buttona3q2El = document.createElement("button");
    buttona3q2El.textContent = "Quotes";
    buttona3q2El.className = "btn";
    quizContainerEl.appendChild(buttona3q2El);

    buttona3q2El.addEventListener("click", function() {
        if (true) {
            alert("Incorrect. You've lost 10 seconds");
            timeLeft = timeLeft - 10;
        };
        quizContainerEl.remove();
        renderQuestion3()
    });
}

//question 3
var renderQuestion3 = function() {
    var quizContainerEl = document.createElement("div");
    document.body.appendChild(quizContainerEl);

    var question3El = document.createElement("h2")
    question3El.className = "question-style";
    question3El.textContent = "Arrays in JavaScript can be used to store:"
    quizContainerEl.appendChild(question3El);

    var buttona1q3El = document.createElement("button");
    buttona1q3El.textContent = "Numbers and Strings";
    buttona1q3El.className = "btn";
    quizContainerEl.appendChild(buttona1q3El);

    buttona1q3El.addEventListener("click", function() {
        if (true) {
            alert("Incorrect. You've lost 10 seconds");
            timeLeft = timeLeft - 10;
        };
        quizContainerEl.remove();
        endofQuiz()
    });

    var buttona2q3El = document.createElement("button");
    buttona2q3El.textContent = "Other Arrays";
    buttona2q3El.className = "btn";
    quizContainerEl.appendChild(buttona2q3El);
    
    //correct answer
    buttona2q3El.addEventListener("click", function() {
        if (true) {
            alert("Incorrect. You've lost 10 seconds");
            timeLeft = timeLeft - 10;
        };
        quizContainerEl.remove();
        endofQuiz()
    });

    var buttona3q3El = document.createElement("button");
    buttona3q3El.textContent = "All of the above";
    buttona3q3El.className = "btn";
    quizContainerEl.appendChild(buttona3q3El);

    buttona3q3El.addEventListener("click", function() {
        if (true) {
            score = score + 1;
            alert("Correct");
            console.log(score);
        };
        quizContainerEl.remove();
        endofQuiz()
    });
}

//when questions are finished
var endofQuiz = function () {
    //stop time function
    var finishQuizEl = document.createElement("div");
    finishQuizEl.className = "welcome";
    finishQuizEl.textContent = "Congratulations! Test is over.";
    document.body.appendChild(finishQuizEl);
    
    // var form = document.createElement("form");
    // finishQuizEl.appendChild(form);
    
    // var label = document.createElement("label");
    // form.appendChild(label);
    // label.textContent = "Name"
    // var nameField = document.createElement("input");
    // form.appendChild(nameField);
    // nameField.setAttribute("type", "text");
    // nameField.setAttribute("id", "name");
    // var submitButton = document.createElement("button");
    // submitButton.setAttribute("value", "Submit score");
    
    //submitButton.onclick = saveName;

}

// var saveName = function() {
//     var name = document.getElementById("name");
//     var score = document.getElementById("score");
//     var score1 = {name: name, score: score}; 
//     highScores.push(score1)
//     finishQuizEl.remove();

// }
// buttonEl.onclick = countdown;

    //if incorrect, subtract time
//show/store score
//display high scores

//style questions
//style buttons for answers

