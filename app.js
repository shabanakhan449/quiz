var question = [{
      question: "Who invented JavaScript?",
      
        option1: "Douglas Crockford",
        option2: "Sheryl Sandberg",
        option3: "Brendan Eich",
        answer: "c"
      },
      
    {
      question: "Which one of these is a JavaScript package manager?",
      
        option1: "Node.js",
        option2: "TypeScript",
        option3: "npm",
        answer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
     
        option1: "Angular",
        option2: "jQuery",
        option3: "RequireJS",
        option4: "ESLint",
        answer: "d"
      
      
    }
  ];





var currentQuestion = 0;
var score = 0;
var totQuestion = question.length

var container = document.getElementById('quizContainer')
var questionEl = document.getElementById('question')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')
var nextButton = document.getElementById('nextButton')
var resultCont = document.getElementById('result')

function loadQuestion(questionIndex){
    var q = question[questionIndex];
    questionEl.textContent = (questionIndex + 1)+'. '+q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
function loadNextQuestion (){
    var selectedOption = document.querrySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('Please select your answer!');
        return
    }
    var answer = selectedOption.value;
    if(question[currentQuestion].answer == answer){
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestion -1){
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totQuestion){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'yourScore'+score;
        return
    }
    loadQuestion(currentQuestion)
}
loadQuestion(currentQuestion)