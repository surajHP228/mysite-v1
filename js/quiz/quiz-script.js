let url = new URLSearchParams(window.location.search);
let subject = url.get("subject");
let test = url.get("test");
let questions = {};
if (subject === "gk") questions = gkQuestions[test];
else if (subject === "math") questions = mathQuestions[test];
else if (subject === "science") questions = scienceQuestions[test];
else if (subject === "history") questions = historyQuestions[test];
else if (subject === "geography") questions = geographyQuestions[test];
else if (subject === "english") questions = englishQuestions[test];
else if (subject === "computer") questions = computerQuestions[test];
else if (subject === "reasoning") questions = reasoningQuestions[test];
let current = 0, score = 0;
let userAnswers = [];

document.getElementById("quiz-title").textContent = `${subject.toUpperCase()} - ${test}`;

function renderQuestion() {
  if (current >= questions.length) return;
  let q = questions[current];
  let html = `<h3>Q${current + 1}. ${q.question}</h3>`;
  q.options.forEach((opt, i) => {
    html += `<label><input type="radio" name="opt" value="${i}"> ${opt}</label><br>`;
  });
  document.getElementById("question-box").innerHTML = html;
}

function submitQuiz() {
  let selected = document.querySelector('input[name="opt"]:checked');
  if (!selected) return alert("Please select an answer.");
  let ans = parseInt(selected.value);
  if (ans === questions[current].answer) score++;
  userAnswers.push({ ...questions[current], selected: ans });
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    localStorage.setItem("quizResult", JSON.stringify({ score, total: questions.length, questions: userAnswers }));
    window.location.href = "result.html";
  }
}

function startTimer() {
  let time = 30 * 60;
  const timerDisplay = document.getElementById("timer");
  const interval = setInterval(() => {
    if (--time < 0) {
      clearInterval(interval);
      submitQuiz();
      return;
    }
    let min = Math.floor(time / 60);
    let sec = time % 60;
    timerDisplay.textContent = `Time Left: ${min}:${sec < 10 ? "0" : ""}${sec}`;
  }, 1000);
}

renderQuestion();
startTimer();
