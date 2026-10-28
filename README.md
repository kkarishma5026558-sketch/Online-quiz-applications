[28/10, 7:47 pm] Kkarishu🕊️🖤: <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Online Quiz Application</title>

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f3e5f5;
            text-align: center;
            padding: 20px;
        }

        .container {
            background-color: white;
            max-width: 600px;
            margin: auto;
            padding: 25px;
            border-radius: 10px;
        }

        h1 {
            color: purple;
        }

        .question {
            text-align: left;
            margin: 20px 0;
            padding: 15px;
            background: #f9f0ff;
            border-radius: 8px;
        }

        input[type="text"] {
            padding: 10px;
            width: 80%;
        }

        button {
            background-color: purple;
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        #result {
            color: green;
            font-weight: bold;
            margin-top: 20px;
        }
    </style>
</head>

<body>

<div class="container">

    <h1>Online Quiz Application</h1>

    <p>Test Your Knowledge!</p>

    <form id="quizForm">

        <label for="studentName">Student Name:</label>
        <br><br>

        <input type="text" id="studentName"
               placeholder="Enter your name" required>

        <div class="question">
            <p>1. What does HTML stand for?</p>

            <input type="radio" name="q1" value="1" required>
            Hyper Text Markup Language<br>

            <input type="radio" name="q1" value="0">
            High Text Machine Language<br>

            <input type="radio" name="q1" value="0">
            Hyper Transfer Markup Language
        </div>

        <div class="question">
            <p>2. Which language is used for styling web pages?</p>

            <input type="radio" name="q2" value="0" required>
            Java<br>

            <input type="radio" name="q2" value="1">
            CSS<br>

            <input type="radio" name="q2" value="0">
            Python
        </div>

        <div class="question">
            <p>3. Which language adds interactivity to websites?</p>

            <input type="radio" name="q3" value="1" required>
            JavaScript<br>

            <input type="radio" name="q3" value="0">
            HTML<br>

            <input type="radio" name="q3" value="0">
            CSS
        </div>

        <div class="question">
            <p>4. Which tag creates a paragraph in HTML?</p>

            <input type="radio" name="q4" value="0" required>
            &lt;h1&gt;<br>

            <input type="radio" name="q4" value="1">
            &lt;p&gt;<br>

            <input type="radio" name="q4" value="0">
            &lt;img&gt;
        </div>

        <div class="question">
            <p>5. Which tag creates a hyperlink?</p>

            <input type="radio" name="q5" value="1" required>
            &lt;a&gt;<br>

            <input type="radio" name="q5" value="0">
            &lt;table&gt;<br>

            <input type="radio" name="q5" value="0">
            &lt;div&gt;
        </div>

        <button type="submit">Submit Quiz</button>

        <button type="reset" onclick="resetResult()">
            Reset Quiz
        </button>

    </form>

    <div id="result"></div>

</div>

<script>
    const form = document.getElementById("quizForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let score = 0;
        let total = 5;

        for (let i = 1; i <= total; i++) {
            let answer = document.querySelector(
                'input[name="q' + i + '"]:checked'
            );

            score += Number(answer.value);
        }

        let name = document.getElementById("studentName").value;

        document.getElementById("result").innerHTML =
            "Student Name: " + name +
            "<br>Your Score: " + score + "/" + total +
            "<br>Percentage: " + (score / total * 100) + "%";
    });

    function resetResult() {
        document.getElementById("result").innerHTML = "";
    }
</script>

</body>
</html>
[28/10, 7:47 pm] Kkarishu🕊️🖤: /* General Page Styling */
body {
    font-family: Arial, sans-serif;
    background-color: #f3e5f5;
    margin: 0;
    padding: 20px;
    color: #333;
}

/* Main Container */
.container {
    background-color: white;
    max-width: 600px;
    margin: 20px auto;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 15px #d1b3e0;
}

/* Heading */
h1 {
    color: purple;
    text-align: center;
    margin-bottom: 10px;
}

/* Description */
p {
    line-height: 1.6;
}

/* Student Name Input */
input[type="text"] {
    width: 80%;
    padding: 10px;
    border: 1px solid #aaa;
    border-radius: 5px;
    margin: 10px 0;
}

/* Question Box */
.question {
    background-color: #faf5ff;
    text-align: left;
    padding: 15px;
    margin: 20px 0;
    border-left: 5px solid purple;
    border-radius: 8px;
}

/* Question Heading */
.question p {
    font-weight: bold;
    color: #4a148c;
}

/* Radio Buttons */
input[type="radio"] {
    margin: 10px 8px;
    accent-color: purple;
    cursor: pointer;
}

/* Buttons */
button {
    background-color: purple;
    color: white;
    padding: 12px 22px;
    margin: 10px 5px;
    border: none;
    border-radius: 6px;
    font-size: 15px;
    cursor: pointer;
    transition: 0.3s;
}

/* Button Hover Effect */
button:hover {
    background-color: #6a1b9a;
    transform: scale(1.03);
}

/* Result Section */
#result {
    background-color: #e8f5e9;
    color: #1b5e20;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    padding: 15px;
    margin-top: 20px;
    border-radius: 8px;
}

/* Responsive Design */
@media (max-width: 600px) {
    body {
        padding: 10px;
    }

    .container {
        padding: 15px;
        margin: 10px auto;
    }

    input[type="text"] {
        width: 90%;
    }

    button {
        width: 90%;
        margin: 8px auto;
    }
}
[28/10, 7:47 pm] Kkarishu🕊️🖤: // Online Quiz Application JavaScript

const quizForm = document.getElementById("quizForm");

quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    let score = 0;
    let totalQuestions = 5;

    // Check all answers
    for (let i = 1; i <= totalQuestions; i++) {

        let answer = document.querySelector(
            'input[name="q' + i + '"]:checked'
        );

        if (answer) {
            score += Number(answer.value);
        }
    }

    // Get student name
    let studentName =
        document.getElementById("studentName").value;

    // Calculate percentage
    let percentage =
        (score / totalQuestions) * 100;

    // Display result
    document.getElementById("result").innerHTML =
        "Student Name: " + studentName +
        "<br> Total Questions: " + totalQuestions +
        "<br> Correct Answers: " + score +
        "<br> Wrong Answers: " +
        (totalQuestions - score) +
        "<br> Final Score: " + score +
        "/" + totalQuestions +
        "<br> Percentage: " + percentage + "%" +
        "<br> Result: " +
        (percentage >= 40 ? "PASS" : "FAIL");
});

// Reset quiz result
function resetResult() {
    document.getElementById("result").innerHTML = "";
}
