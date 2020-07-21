var pos = 0;
var correct = 0;
var quizz, status, question, choices, chA, chB, chC, Chd;

var questions = [
    {
      question: "What does DOM stand for?",
      answers: {
        a: "Dudes of Matrix",
        b: "Directory of Markdown",
        c: "Document Object Model",
        d: "Nothing"
  
      },
      correctAnswer: "c"
    },
  
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the correct tag to write javascript in?",
      answers: {
        a: "&lt;head&gt;",
        b: "&lt;script&gt;",
        c: "&lt;style&gt;"
      },
      correctAnswer: "b"
  
    },
    {
      question: "How do you declare a varaible?",
      answers: {
        a: "var name = 'preston'",
        b: "&lt;script&gt;",
        c: "name = 'preston'"
      },
      correctAnswer: "a"
  
    },
  
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "lsp"
      },
      correctAnswer: "c"
    },
  
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the correct syntax for referring to an external script called 'main.js'?",
      answers: {
        a: "&lt;script href = 'main.js'&gt;",
        b: "&lt;link href \= \'main.js'&gt;",
        c: "&lt;main.js&gt;&gt;",
        d: "&lt;script src \= \'main.js'&gt;"
      },
      correctAnswer: "d"
  
    },
    {
      question: "Which of the following is not a reserved word in javaScript?",
      answers: {
        a: "interface",
        b: "throws",
        c: "short",
        d: "program"
      },
      correctAnswer: "d"
  
    },
    {
      question: "What is the syntax for creating a function in Javascript named 'Func2'?",
      answers: {
        a: "function = Func2()",
        b: "function Func2()",
        c: "function := Func2()",
        d: "Func2() function"
      },
      correctAnswer: "b"
  
    },
    {
      question: "What is the correct syntax for making comments in javaScript?",
      answers: {
        a: "///*",
        b: "&lt;!--comment--!&gt;",
        c: "**comment**",
        d: "//"
      },
      correctAnswer: "d"
  
    }
  
  
  
  
]  