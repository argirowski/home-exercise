const geographyData = [
  {
    question:
      " In which country would you be if you were Visiting the Taj Mahal?",
    one: "China",
    two: "Mongolia",
    three: "Japan",
    four: "India",
    correct_answer: "four",
  },
  {
    question: "What colour is the spot in the middle of the Japanese flag?",
    one: "Red",
    two: "Blue",
    three: "Green",
    four: "Yellow",
    correct_answer: "one",
  },
  {
    question: "What African country has the largest population?",
    one: "South Africa",
    two: "Morocco",
    three: "Nigeria",
    four: "Egypt",
    correct_answer: "three",
  },
  {
    question: "What is the capital of Poland?",
    one: "Warsaw",
    two: "Paris",
    three: "New York",
    four: "Athens",
    correct_answer: "one",
  },
  {
    question: "Havana is the capital of what country?",
    one: "Venezuela",
    two: "Brazil",
    three: "Austria",
    four: "Cuba",
    correct_answer: "four",
  },

  {
    question: "Which of the following countries do not border France?",
    one: "Germany",
    two: "Spain",
    three: "Norway",
    four: "Italy",
    correct_answer: "three",
  },

  {
    question: "Which U.S. state is the Grand Canyon located in?",
    one: "Texas",
    two: "Arizona",
    three: "New Mexico",
    four: "Nevada",
    correct_answer: "two",
  },

  {
    question: "Which is the longest river in the world?",
    one: "Nile River",
    two: "Amazon River",
    three: "Yellow River",
    four: "Congo River",
    correct_answer: "one",
  },

  {
    question: "Which is the world's highest mountain?",
    one: "K2",
    two: "Mount Everest",
    three: "Kilimanjaro",
    four: "Makalu",
    correct_answer: "two",
  },

  {
    question: "What country was home to the Inca Empire?",
    one: "Argentina",
    two: "Mexico",
    three: "Peru",
    four: "Bolivia",
    correct_answer: "three",
  },
];

const geoQuiz = document.getElementById("geoQuiz");
const quizAnswers = document.querySelectorAll(".geo_answer");
const quizQuestion = document.getElementById("question");
const one_text = document.getElementById("one_text");
const two_text = document.getElementById("two_text");
const three_text = document.getElementById("three_text");
const four_text = document.getElementById("four_text");
const submitBtn = document.getElementById("submit_button");

let currentGeo = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentGeoData = geographyData[currentGeo];

  quizQuestion.innerText = currentGeoData.question;
  one_text.innerText = currentGeoData.one;
  two_text.innerText = currentGeoData.two;
  three_text.innerText = currentGeoData.three;
  four_text.innerText = currentGeoData.four;
}

function getSelected() {
  let answer = undefined;

  quizAnswers.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  quizAnswers.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === geographyData[currentGeo].correct_answer) {
      score++;
    }

    currentGeo++;
    if (currentGeo < geographyData.length) {
      loadQuiz();
    } else {
      geoQuiz.innerHTML = `
              <h2>You had ${score} correct answers out of ${geographyData.length} questions.</h2>
              
              <button onclick="location.reload()">Reload Quiz</button>
          `;
    }
  }
});
