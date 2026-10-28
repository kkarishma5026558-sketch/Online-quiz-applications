const questions = [
    {
        question: "1. Which language is used to create web pages?",
        options: ["HTML", "Python", "Java", "C"],
        answer: "HTML"
    },
    {
        question: "2. Which language is used to style web pages?",
        options: ["Java", "CSS", "C++", "Python"],
        answer: "CSS"
    },
    {
        question: "3. Which language adds interactivity to web pages?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        question: "4. Which tag is used to create a paragraph in HTML?",
        options: ["<h1>", "<p>", "<div>", "<table>"],
        answer: "<p>"
    },
    {
        question: "5. Which tag is used to create a hyperlink?",
        options: ["<img>", "<br>", "<a>", "<hr>"],
        answer: "<a>"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const welcome = document.getElementById("welcome");
const quiz = document.getElementById("quiz");
const questionText = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const quizForm = document.getElementById("quizForm");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");
const scoreText = document.getElementById("score");
const message = document.getElementById("message");

// Start the quiz
document.getElementById("startBtn").addEventListener("click", function () {
    currentQuestion = 0;
    score = 0;
    welcome.style.display = "none";
    result.style.display = "none";
    quiz.style.display = "block";
    displayQuestion();
});

// Display the current question
function displayQuestion() {
    answered = false;

    const q = questions[currentQuestion];

    questionText.textContent = q.question;
    questionNumber.textContent =
        "Question " + (currentQuestion + 1) +
        " of " + questions.length;

    quizForm.innerHTML = "";

    q.options.forEach(function (option, index) {
        const label = document.createElement("label");
        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "answer";
        radio.value = option;
        radio.id = "option" + index;

        label.htmlFor = radio.id;
        label.appendChild(radio);
        label.appendChild(document.createTextNode(" " + option));

        quizForm.appendChild(label);
    });

    nextBtn.textContent =
        currentQuestion === questions.length - 1
        ? "Submit Quiz"
        : "Next Question";
}

// Check the selected answer
function checkAnswer() {
    const selected = quizForm.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selected) {
        alert("Please select an answer!");
        return false;
    }

    if (selected.value === questions[currentQuestion].answer) {
        score++;
    }

    answered = true;
    return true;
}

// Move to the next question or show results
nextBtn.addEventListener("click", function () {
    if (answered) {
        return;
    }

    if (!checkAnswer()) {
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResult();
    }
});

// Display the final score
function showResult() {
    quiz.style.display = "none";
    result.style.display = "block";

    scoreText.textContent =
        "Your Score: " + score + "/" + questions.length;

    if (score >= 4) {
        message.textContent = "Excellent! Great performance!";
    } else if (score >= 3) {
        message.textContent = "Good job! Keep practicing.";
    } else {
        message.textContent = "Keep learning and try again!";
    }
}

// Restart the quiz
document.getElementById("restartBtn")
    .addEventListener("click", function () {
        currentQuestion = 0;
        score = 0;
        answered = false;

        result.style.display = "none";
        welcome.style.display = "block";
        quiz.style.display = "none";
    });

// Set initial visibility
quiz.style.display = "none";
result.style.display = "none";
