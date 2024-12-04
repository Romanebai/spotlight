const questionCard = document.getElementById('question-card');
const questionDisplay = document.getElementById('question');
const feedback = document.getElementById('feedback');
const answerForm = document.getElementById('answer-form');
const answerInput = document.getElementById('answer');
const nextQuestionButton = document.getElementById('next-question');

const questions = [
  { question: "What does SEO stand for?", answer: "Search Engine Optimization" },
  { question: "What is the primary use of Google Analytics?", answer: "Website traffic analysis" },
  { question: "What is PPC in digital marketing?", answer: "Pay-Per-Click" },
];

let currentQuestionIndex = 0;

const loadQuestion = () => {
  questionDisplay.textContent = questions[currentQuestionIndex].question;
  answerInput.value = '';
  feedback.classList.add('hidden');
};

const checkAnswer = (event) => {
  event.preventDefault();
  const userAnswer = answerInput.value.trim();
  if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
    feedback.textContent = `Correct! You can play!`;
    feedback.classList.remove('hidden');
  } else {
    feedback.textContent = `Incorrect! The answer is "${questions[currentQuestionIndex].answer}".`;
    feedback.classList.remove('hidden');
  }
};

const nextQuestion = () => {
  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  loadQuestion();
};

const restartGame = () => {
  currentQuestionIndex = 0;
  loadQuestion();
};

// Event Listeners
answerForm.addEventListener('submit', checkAnswer);
nextQuestionButton.addEventListener('click', nextQuestion);

// Load the first question
loadQuestion();