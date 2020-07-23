// variables
var startBttn = document.getElementById("startButton");
var timer = document.getElementById(".timer");

var position = 0;
var correct = 0;
var quiz, status, question, choice, choices, chA, chB, chC, Chd;
var time = 70;

var questions = [
    {
        question: "What does DOM stand for?",
        a: "Dudes of Matrix",
        b: "Directory of Markdown",
        c: "Document Object Model",
        d: "Nothing",

        correctAnswer: "Document Object Model"
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
function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
// functions
function save(){
    localStorage.setItem("initals",initals);
  }

// get function
function get(x) {
    return document.getElementById(x);
}
//render questions
function renderQuestion() {

    quiz = get("quizz");
    // if quiz is complete
    if (position >= questions.length || time === 0) {
        quiz.innerHTML = "<h2>You Got " + correct + " of " + questions.length + " questions correct</h2><br>"+
        "<p> Type your initals below</p>" +
        "<input id='initals' type='text'>"+
        "<button id='save'>Save</button>";
        var inital = document.getElementById("initals");
        var initals= inital.value;
          var saveBttn = document.getElementById("save")
          saveBttn.addEventListener("click", save)
        
        

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
    

    // display answers as vairable

    quizz.innerHTML += "<label> <button id = 'a' class = 'choices' value = '"+ chA + "'>" + chA +"</button></label><br>";
    quizz.innerHTML += "<label> <button id = 'b' class = 'choices' value = '"+ chB + "'>" + chB +"</button></label><br>";
    quizz.innerHTML += "<label> <button id = 'c' class = 'choices' value = '"+ chC + "'>" + chC +"</button></label><br>";
    quizz.innerHTML += "<label> <button id = 'd' class = 'choices' value = '"+ chD + "'>" + chD +"</button></label><br>";
    document.getElementById("a").addEventListener("click", checkAnswer);
    document.getElementById("b").addEventListener("click", checkAnswer);
    document.getElementById("c").addEventListener("click", checkAnswer);
    document.getElementById("d").addEventListener("click", checkAnswer);
}

function checkAnswer() {
    choices = document.querySelectorAll(".choices");
    for( var i = 0; i<choices.length; i++){
        if (choices[i]) {
            choice = choices[i].Value;
        }
    }
    if(choice == questions[position].correctAnswer){
        correct++;
    }
    position++;
    renderQuestion();
}

//display quiz imediatly will change to a button later
startBttn.addEventListener("click", renderQuestion);
