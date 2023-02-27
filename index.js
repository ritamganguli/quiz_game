const quizDB = [{
    question: "Q1.What is the full form of HTML?",
    a: "Hyper Text Middle Languge",
    b: "Hyper Text Mac Languge",
    c: "Hyper Text Makeup Languge",
    d: "Hyper Text Markupp Language",
    ans: "ans4"
},
{
    question: "Q2.What is the full form of CSS?",
    a: "Cascading Style Sheet",
    b: "Chareterset Style Sheet",
    c: "Cascaded Style Sheet",
    d: "Common Style Sheet",
    ans: "ans1"
},
{
    question: "Q3.What is the Js for?",
    a: "Styling",
    b: "Fucnonality",
    c: "For Hooks",
    d: "Connecting To Api",
    ans: "ans2 "
},
{
    question: "Q4.What is CSS Used For?",
    a: "Styling",
    b: "Adding Text",
    c: "Creating Libary",
    d: "None",
    ans: "ans1"
}]
const questions = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const scoreShow = document.querySelector("#show-score");
let questionCount = 0;

let scrore = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    questions.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestion();

//Ab man ke chalo me koi button pe click kia to uske repsective id mil gaye mujhereeee
const getCheckAnswer = () => {
    let answer;
    answers.forEach((abc) => {
        if (abc.checked){
            answer = abc.id;
        }
    });
    return answer;
};
//Unchecked karne ke kam ayega
const deSelect=()=>{
    answers.forEach((abc)=>{
        abc.checked=false;
    })
}
submit.addEventListener("click", () => {
    const retuenId = getCheckAnswer();
    if (retuenId === quizDB[questionCount].ans){
        scrore++
        // console.log(scrore);
    };
    questionCount++

    deSelect();

    if (questionCount < quizDB.length) {
        loadQuestion();
    }else {
        // scoreShow.style.display="block";
        scoreShow.innerHTML=`<h3>Your Score is ${scrore}/${quizDB.length}</h3>`;
        scoreShow.innerHTML+=`<button class="btn" onclick="location.reload()">Play Again</button>`;
        document.getElementById("submit").style.display="none";
        scoreShow.classList.remove("showScore");
        
    }

})