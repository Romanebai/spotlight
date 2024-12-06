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
    question: "What does 'bounce rate' measure?",
    options: ["The speed at which your website loads", "The number of visitors who leave after viewing one page", "The total number of clicks on your homepage", "The percentage of visitors who click on a call-to-action"],
    answer: "The number of visitors who leave after viewing one page",
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
  {
    question: "What is the purpose of a '404 error' page?",
    options: ["To redirect users to the homepage", "To inform users that the website is down", "To inform users that the page does not exist"],
    answer: "To inform users that the page does not exist",
  },
  {
    question: "What is the purpose of an SSL certificate on a website?",
    options: ["To increase website speed", "To protect user data", "To increase the number of visitors"],
    answer: "To protect user data",
  },
  {
    question: "What is the purpose of a 'favicon' on a website?",
    options: ["To increase website speed", "To protect user data", "To increase the number of visitors", "To improve brand recognition"],
    answer: "To improve brand recognition",
  },
  {
    question: "What is the purpose of 'alt text' on an image?",
    options: ["To increase website speed", "To protect user data", "To improve SEO", "To improve brand recognition"],
    answer: "To improve SEO",
  },
  {
    question: "What does 'CTR' stand for in digital marketing?",
    options: ["Click Through Rate", "Content Targeted Recommendations", "Customer Targeted Results"],
    answer: "Click Through Rate",
  },
  {
    question: "What is the main goal of retargeting ads?",
    options: ["To increase website speed", "To protect user data", "To improve brand recognition", "To bring back visitors who did not convert"],
    answer: "To bring back visitors who did not convert",
  },
  {
    question: "Which acquisition channel typically has the highest conversion rate?",
    options: ["Organic traffic", "Direct traffic", "Email marketing", "Social media traffic"],
    answer: "Email marketing",
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
