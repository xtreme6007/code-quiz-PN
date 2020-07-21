// variables
var startbttn = document.getElementById("startButton")


var position = 0;
var correct = 0;
var quizz, status, question, choices, chA, chB, chC, Chd;

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
// functions

// get function
function get(x) {
    return document.getElementById(x);
}
//render questions
function renderQuestion() {

    quizz = get("quizz");
    // if quiz is complete
    if (position >= questions.length) {
        quizz.innerHTML = "<h2>You Got " + correct + " of " + questions.length + " questions correct</h2>";
        

        position = 0;
        correct = 0;
        return false;
    }
    // show question number
    get("status").innerHTML = "Question " + (position + 1) + " of " + questions.length;

    question = questions[position].question;
    //assign answer choices
    chA = questions[position].a;
    chB = questions[position].b;
    chC = questions[position].c;
    chD = questions[position].d;

    // display questions
    quizz.innerHTML = "<h3>" + question + "</h3>";

    // display answers with raido buttons

    quizz.innerHTML += "<label> <input type ='radio' name = 'choices' value='a'>" + chA + "</label><br>";
    quizz.innerHTML += "<label> <input type ='radio' name = 'choices' value='b'>" + chB + "</label><br>";
    quizz.innerHTML += "<label> <input type ='radio' name = 'choices' value='c'>" + chC + "</label><br>";
    quizz.innerHTML += "<label> <input type ='radio' name = 'choices' value='d'>" + chD + "</label><br><br>";
    quizz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {
    choices = document.getElementsByName("choices");
    for( var i = 0; i<choices.length; i++){
        if (choices[i].checked) {
            choice = choices[i].Value;
        }
    }
    if(choice === questions[position].correctAnsewr){
        correct++;
    }
    position++;
    renderQuestion();
}
//display quiz imediatly will change to a button later
startbttn.addEventListener("click", renderQuestion);