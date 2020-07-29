// variables
var startBttn = document.getElementById("startButton");


var position = 0;
var correct = 0;
var quiz, status, question, choice, choices, chA, chB, chC, Chd, iniatls, displayHigh;
var time = 60;
var timer = document.getElementById("timer");


var questions = [
    {
        question: "What does DOM stand for?",
        a: "Dudes of Matrix",
        b: "Directory of Markdown",
        c: "Document Object Model",
        d: "Nothing",

        correctAnswer: "c"
    },

    {
        question: "Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Preston Nichols",
        correctAnswer: "c"
    },
    {
        question: "What is the correct tag to write javascript in?",
        a: "&lt;head&gt;",
        b: "&lt;script&gt;",
        c: "&lt;style&gt;",
        d: "&lt;java&gt;",

        correctAnswer: "b"

    },
    {
        question: "How do you declare a varaible?",
        a: "var name = 'preston'",
        b: "&lt;script&gt;",
        c: "name = 'preston'",
        d: " var = 'name' ",

        correctAnswer: "a"

    },

    {
        question: "Which one of these is a JavaScript package manager?",

        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "lsp",

        correctAnswer: "c"
    },

    {
        question: "Which tool can you use to ensure code quality?",

        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint",

        correctAnswer: "d"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'main.js'?",

        a: "&lt;script href = 'main.js'&gt;",
        b: "&lt;link href \= \'main.js'&gt;",
        c: "&lt;main.js&gt;&gt;",
        d: "&lt;script src \= \'main.js'&gt;",

        correctAnswer: "d"

    },
    {
        question: "Which of the following is not a reserved word in javaScript?",

        a: "interface",
        b: "throws",
        c: "short",
        d: "program",

        correctAnswer: "d"

    },
    {
        question: "What is the syntax for creating a function in Javascript named 'Func2'?",

        a: "function = Func2()",
        b: "function Func2()",
        c: "function := Func2()",
        d: "Func2() function",
        correctAnswer: "b"

    },
    {
        question: "What is the correct syntax for making comments in javaScript?",
        a: "///*",
        b: "&lt;!--comment--!&gt;",
        c: "**comment**",
        d: "//",
        correctAnswer: "d"
    }

]
// countdown


// functions
//decrementtimer

// variables
var startBttn = document.getElementById("startButton");


var position = 0;
var correct = 0;
var quiz, status, question, choice, choices, chA, chB, chC, Chd, iniatls;
var time = 60;
var timer = document.getElementById("timer");


var questions = [
    {
        question: "What does DOM stand for?",
        a: "Dudes of Matrix",
        b: "Directory of Markdown",
        c: "Document Object Model",
        d: "Nothing",

        correctAnswer: "c"
    },

    {
        question: "Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Preston Nichols",
        correctAnswer: "c"
    },
    {
        question: "What is the correct tag to write javascript in?",
        a: "&lt;head&gt;",
        b: "&lt;script&gt;",
        c: "&lt;style&gt;",
        d: "&lt;java&gt;",

        correctAnswer: "b"

    },
    {
        question: "How do you declare a varaible?",
        a: "var name = 'preston'",
        b: "&lt;script&gt;",
        c: "name = 'preston'",
        d: " var = 'name' ",

        correctAnswer: "a"

    },

    {
        question: "Which one of these is a JavaScript package manager?",

        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "lsp",

        correctAnswer: "c"
    },

    {
        question: "Which tool can you use to ensure code quality?",

        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint",

        correctAnswer: "d"
    },
    {
        question: "What is the correct syntax for referring to an external script called 'main.js'?",

        a: "&lt;script href = 'main.js'&gt;",
        b: "&lt;link href \= \'main.js'&gt;",
        c: "&lt;main.js&gt;&gt;",
        d: "&lt;script src \= \'main.js'&gt;",

        correctAnswer: "d"

    },
    {
        question: "Which of the following is not a reserved word in javaScript?",

        a: "interface",
        b: "throws",
        c: "short",
        d: "program",

        correctAnswer: "d"

    },
    {
        question: "What is the syntax for creating a function in Javascript named 'Func2'?",

        a: "function = Func2()",
        b: "function Func2()",
        c: "function := Func2()",
        d: "Func2() function",
        correctAnswer: "b"

    },
    {
        question: "What is the correct syntax for making comments in javaScript?",
        a: "///*",
        b: "&lt;!--comment--!&gt;",
        c: "**comment**",
        d: "//",
        correctAnswer: "d"
    }

]
// countdown


// functions
//timer decrementtimer

function setTime() {
    var timerInterval = setInterval(function () {
        time--;
        timer.textContent = time;

        if (time <= 0 || position >= questions.length) {
            clearInterval(timerInterval);
            end();
            time = 0
        }


    }, 1000);
}




// get function
function get(x) {
    return document.getElementById(x);
}
//render questions
function renderQuestion() {

    quiz = get("quizz");

    // if quiz is complete
    if (position >= questions.length || timer <= 0) {
        quiz.innerHTML = "<h2>You Got " + correct + " of " + questions.length + " questions correct</h2><br>" +
            "<p> Type your initals below</p>" +
            "<input id='initals' type='text'>" +
            "<button id='save'>Save</button>";

        var inital = document.getElementById("initals");
        var initals = inital.value;
        var saveBttn = document.getElementById("save")
        function save() {
            var highscore = correct;
            var initals = document.querySelector("#initals").value;
            localStorage.setItem("Initals:", initals);
            localStorage.setItem("Highscore:", highscore);
        }
        saveBttn.addEventListener("click", save)



        position = 0;
        correct = 0;
        return false;
    }
    // show question number
    get("status").innerHTML = "Question " + (position + 1) + " of " + questions.length;

    question = questions[position].question;
    //assign answer choices variables
    chA = questions[position].a;
    chB = questions[position].b;
    chC = questions[position].c;
    chD = questions[position].d;

    // display questions
    quizz.innerHTML = "<h2>" + question + "</h2><br>"; // + "<div id = 'timer'>" + time + "</div>";
    timer.innerHTML = time;



    // display answers

    quizz.innerHTML += "<label> <button id = 'a' class = 'choices' value = 'a'>" + chA + "</button></label><br>";
    quizz.innerHTML += "<label> <button id = 'b' class = 'choices' value = 'b'>" + chB + "</button></label><br>";
    quizz.innerHTML += "<label> <button id = 'c' class = 'choices' value = 'c'>" + chC + "</button></label><br>";
    quizz.innerHTML += "<label> <button id = 'd' class = 'choices' value = 'd'>" + chD + "</button></label><br>";
    // event listeners for anser choices 
    document.getElementById("a").addEventListener("click", checkAnswerA);
    document.getElementById("b").addEventListener("click", checkAnswerB);
    document.getElementById("c").addEventListener("click", checkAnswerC);
    document.getElementById("d").addEventListener("click", checkAnswerD);
}





//display quiz when start button is clicked
startBttn.addEventListener("click", renderQuestion);
startBttn.addEventListener("click", setTime);
// last screen display
function end() {
    quiz.innerHTML = "<h2>You Got " + correct + " of " + questions.length + " questions correct</h2><br>" +
        "<p> Type your initals below</p>" +
        "<input id='initals' type='text'>" +
        "<button id='save'>Save</button>";

    var inital = document.getElementById("initals");
    var initals = inital.value;
    var saveBttn = document.getElementById("save")
    function save() {
        var highscore = correct;
        var initals = document.querySelector("#initals").value;
        localStorage.setItem("Initals:", initals);
        localStorage.setItem("Highscore:", highscore);
    }
    saveBttn.addEventListener("click", save)



    position = 0;
    correct = 0;
    return false;
}




// get function
function get(x) {
    return document.getElementById(x);
}
//render questions
function renderQuestion() {

    quiz = get("quizz");

    // if quiz is complete
    if (position >= questions.length || timer <= 0) {
        quiz.innerHTML = "<h2>You Got " + correct + " of " + questions.length + " questions correct</h2><br>" +
            "<p> Type your initals below</p>" +
            "<input id='initals' type='text'>" +
            "<button id='save'>Save</button>";

        var inital = document.getElementById("initals");
        var initals = inital.value;
        var saveBttn = document.getElementById("save")
        function save() {
            var highscore = correct;
            var initals = document.querySelector("#initals").value;
            localStorage.setItem("Initals:", initals);
            localStorage.setItem("Highscore:", highscore);
        }
        saveBttn.addEventListener("click", save)



        position = 0;
        
        return false;
    }
    // show question number
    get("status").innerHTML = "Question " + (position + 1) + " of " + questions.length;

    question = questions[position].question;
    //assign answer choices variables
    chA = questions[position].a;
    chB = questions[position].b;
    chC = questions[position].c;
    chD = questions[position].d;

    // display questions
    quizz.innerHTML = "<h2>" + question + "</h2><br>"; // + "<div id = 'timer'>" + time + "</div>";
    timer.innerHTML = time;
    //quizz.innerHTML = "<div id = 'timer'>" + time + "</div>"


    // display answers

    quizz.innerHTML += "<label> <button id = 'a' class = 'choices' value = 'a'>" + chA + "</button></label><br>";
    quizz.innerHTML += "<label> <button id = 'b' class = 'choices' value = 'b'>" + chB + "</button></label><br>";
    quizz.innerHTML += "<label> <button id = 'c' class = 'choices' value = 'c'>" + chC + "</button></label><br>";
    quizz.innerHTML += "<label> <button id = 'd' class = 'choices' value = 'd'>" + chD + "</button></label><br>";
    document.getElementById("a").addEventListener("click", checkAnswerA);
    document.getElementById("b").addEventListener("click", checkAnswerB);
    document.getElementById("c").addEventListener("click", checkAnswerC);
    document.getElementById("d").addEventListener("click", checkAnswerD);
}

// checkAnswer Functions
// if user selects A
function checkAnswerA() {
    var userAnswer = document.getElementById("a").value;
    var answer = questions[position].correctAnswer;
    if (userAnswer === answer) {
        correct++;
    }
    if (userAnswer != answer) {
        time = time - 10;
    }

    position++;
    renderQuestion();


}
// if user selcts B
function checkAnswerB() {
    var userAnswer = document.getElementById("b").value;
    var answer = questions[position].correctAnswer;
    if (userAnswer === answer) {
        correct++;
    }
    if (userAnswer != answer) {
        time = time - 10;
    }
    position++;
    renderQuestion();


}
// if user selects C
function checkAnswerC() {
    var userAnswer = document.getElementById("c").value;
    var answer = questions[position].correctAnswer;
    if (userAnswer === answer) {
        correct++;
    }
    if (userAnswer != answer) {
        time = time - 10;
    }


    position++;
    renderQuestion();


}
// if user selects D
function checkAnswerD() {
    var userAnswer = document.getElementById("d").value;
    var answer = questions[position].correctAnswer;
    if (userAnswer === answer) {
        correct++;
    }
    if (userAnswer != answer) {
        time = time - 10;
    }

    position++;
    renderQuestion();


}



//display quiz imediatly will change to a button later
startBttn.addEventListener("click", renderQuestion);
startBttn.addEventListener("click", setTime);