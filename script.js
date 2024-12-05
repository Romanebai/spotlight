const questionCard = document.getElementById('question-card');
const questionDisplay = document.getElementById('question');
const feedback = document.getElementById('feedback');
const answerForm = document.getElementById('answer-form');
const answerOptions = document.getElementById('answer-options'); 
const nextQuestionButton = document.getElementById('next-question');

const questions = [
  {
    question: "Which platform was the first to reach 1 billion active users?",
    options: ["YouTube", "Facebook", "TikTok"],
    answer: "Facebook",
  },
  {
    question: "What is the first step to optimizing a website for SEO?",
    options: ["Choosing relevant keywords", "Adding advertisements on Google", "Posting daily content"],
    answer: "Choosing relevant keywords",
  },
  {
    question: "On social media, which factor is most important for a post to go viral?",
    options: ["Number of hashtags", "User interactions", "Posting time"],
    answer: "User interactions",
  },
  {
    question: "Which field primarily uses AI tools like ChatGPT?",
    options: ["Content creation and automation", "Game development only", "Replacing design software"],
    answer: "Content creation and automation",
  },
  {
    question: "Which technology is commonly associated with cryptocurrencies?",
    options: ["Blockchain", "Cloud computing", "Augmented reality"],
    answer: "Blockchain",
  },
  {
    question: "In digital marketing, what does the term 'CTA' stand for?",
    options: ["Call To Action", "Click Through Analysis", "Content Targeted Advertising"],
    answer: "Call To Action",
  },
];

let currentQuestionIndex = Math.floor(Math.random() * questions.length); 

const loadQuestion = () => {
  const currentQuestion = questions[currentQuestionIndex];
  questionDisplay.textContent = currentQuestion.question;

  answerOptions.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const radioWrapper = document.createElement("div");
    radioWrapper.classList.add("flex", "items-center", "mt-2");

    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "answer";
    radioInput.id = `option-${index}`;
    radioInput.value = option;
    radioInput.classList.add("mr-2");

    const radioLabel = document.createElement("label");
    radioLabel.htmlFor = `option-${index}`;
    radioLabel.textContent = option;

    radioWrapper.appendChild(radioInput);
    radioWrapper.appendChild(radioLabel);
    answerOptions.appendChild(radioWrapper);
  });

  feedback.classList.add("hidden");
};

const checkAnswer = (event) => {
  event.preventDefault();

  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    feedback.textContent = "Please select an answer!";
    feedback.classList.remove("hidden");
    return;
  }

  if (selectedOption.value === questions[currentQuestionIndex].answer) {
    feedback.textContent = `Correct! Welcome in the light!`;
  } else {
    feedback.textContent = `Incorrect! The answer is "${questions[currentQuestionIndex].answer}".`;
  }

  feedback.classList.remove("hidden");
};

const nextQuestion = () => {
  currentQuestionIndex = Math.floor(Math.random() * questions.length); 
  loadQuestion();
};

answerForm.addEventListener('submit', checkAnswer);
nextQuestionButton.addEventListener('click', nextQuestion);

loadQuestion();
