// this file is for javascript
const question = [
    {
        question: "Which is the largest animal in the world?",
        answers :[
            {text: "Shark" , correct : false},
            {text: "Blue Whale" , correct : true},
            {text: "Elephant" , correct : false},
            {text: "Giraffe" , correct : false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers :[
            {text: "Kalahari" , correct : false},
            {text: "Gobi" , correct : false},
            {text: "Sahara" , correct : true},
            {text: "Antartica" , correct : false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers :[
            {text: "Asia" , correct : false},
            {text: "Australia" , correct : true},
            {text: "Artic" , correct : false},
            {text: "Africa" , correct : false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers :[
            {text: "Vatican City" , correct : true},
            {text: "Bhutan" , correct : false},
            {text: "Nepal" , correct : false},
            {text: "Sri Lanka" , correct : false},
        ]
    }   
];
const questionelement =document.getElementById("question");
const answerbuttons =document.getElementById("answer-buttons");
const nextbutton =document.getElementById("next-btn");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex =0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionelement.innerHTML =questionNumber + ". "+ currentQuestion.question;
}