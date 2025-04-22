// Quiz Questions
const questions = [
    {
        question: "A simple pendulum of lenght 0.4m has a period of 2s. What is the period of a similar pendulum of length 0.8m at the same place?",
        options: ["√2 s", "8 s", "4 s", "2√2 s"],
        correctAnswer: 3,
        explanation: "[2013, 5]"
    },
{
    question: "If a freely suspended object is pulled to one side and released, it oscillates about  "+
    "about the point of suspension because the ",
    options: ["Acceleration is directly proportional to the displacement", "motion is directed away from the equilibrium point", "acceleration is directly proportional to the square of the displacement", "velocity is minimum at the equilibrium point"],
    correctAnswer: 0,
    explanation: "[2012, 9]"
},
{
    question: "The differences observed in solids, liquids and gases may be accounted for by",
    options: ["their relative masses", "their melting points", "the different molecules in each of them", "the spacing and forces acting between the molecules"],
    correctAnswer: 3,
    explanation: "[2007, 37]"
},
{
    question: "The transverse wave with the longest wavelength is",
    options: ["X-rays", "imfrared ray", "radio wave", "ultra violet ray"],
    correctAnswer: 2,
    explanation: "]2016,9]"
},
{
    question: "Short sightedness occurs if the ",
    options: ["focal length of the eye is at infinity", "parallel rays are brought to a focus behind the retina", "eyeball is too short", "eyeball is too long"],
    correctAnswer: 3,
    explanation: ""
},
{
    question: "Satellite that circles round the earth are held by a force called",
    options: ["gravitational potential", "earth's gravitational pull", "earth's gravitational field", "gravitational constant"],
    correctAnswer: 2,
    explanation: "[2016,11]"
},

{
    question: "I.Refraction \u000A II. Interference\u000A III. Difffraction\n Which of the above properties are common to all waves?",
    options: ["II and III only", "I, II and III", "I and II only", "I and III only"],
    correctAnswer: 1,
    explanation: "[2017, 8]"
},
{
    question: "Which of the following would appear when a white screen is illuminated by red and green ",
    options: ["Red", "Purple", "Yelllow", "Green"],
    correctAnswer: 2,
    explanation: "[2017,9]"
},
{
    question: "A stationary wave pattern is formed by a wave of frequency 40 Hz and velocity 60cm/s. What is the distance between the nodes?",
    options: ["0.33cm", "1.50cm", "0.67cm", "0.75cm"],
    correctAnswer: 3,
    explanation: "[2017,17]"
},
{
    question: "What is the angular magmification of a telescope having objective and eyepiece lenses of focal lengths 30 cm and 3cm respectively? ",
    options: ["60", "10", "30", "90"],
    correctAnswer: 1,
    explanation: "[2016,29]"
},
{
    question: "Semi conductor is class of solid whose conductivity increases with am increase in",
    options: ["pressure", "temperature", "current", "voltage"],
    correctAnswer: 1 ,
    explanation: ""
},
{
    question: "Which of the followinv cannot be used as a measure of degree of expansion in solids?",
    options: ["Linear expansivity", "Cubic expansivity", "Area expansivity", "Apparent expansivity"],
    correctAnswer: 3,
    explanation: "[2018,4]"
},
{
    question: "In the earth's gravitational field, ",
    options: ["work is done when a force moves its point of application around a closed path", "bodies repel themselves when they come close", "energy is released when an object is raised above the ground", "a body experiences no decrease in its deceleration when it moves freely upwards"],
    correctAnswer: 3,
    explanation: "[2018,1] Emsure you read the explanation."
},
{
    question: "The mass of the substance deposited in electrolysis is given by",
    options: ["m\u2044t", "mt\u00B2", "ml", "zIt"],
    correctAnswer: 3,
    explanation: ""
},
{
    question: "Astigmatism is corrected by the use of a",
    options: ["diverging lens spectacle", "cylindrical lens spectacle", "converging lens spectacle", "plano glass spectacle"],
    correctAnswer:1 ,
    explanation: ""
},
{
    question: "The vapour pressure of a liquid in equilibrium with its own environment is",
    options: ["balanced vapour pressure", "environmental vapour pressure", "equilibrium vapour pressure", "saturated vapour pressure"],
    correctAnswer: 3,
    explanation: "[2018, 11]"
},
{
    question: "What law describes the integration between two charges?",
    options: ["Coulomb", "Capacitance", "Faraday", "Maxwell"],
    correctAnswer: 0,
    explanation: ""
},
{
    question: "If the speed of light is 3\u00D710\u2078m/s, calculate the frequency of the light if the wavelength is 7.80\u00D710\u207B\u2077m",
    options: ["3.444\u00D710\u00B9\u2074Hz", "3.846\u00D710\u00B9\u2074Hz", "2.889\u00D710\u00B9\u2074Hz", "3.526\u00D710\u00B9\u2074Hz"],
    correctAnswer: 1,
    explanation: ""
},
{
    question: "Radiant heat can only be measured with a",
    options: ["clincal thermometer", "gas thermometer", "platinum resistance thermometer", "thermopile"],
    correctAnswer:3,
    explanation: "[2019,4]"
},
{
    question: "If a donor impurity is introduced into a silicon lattice, the resulting material is",
    options: ["p-type silicom", "richer in holes only", "richer in electric hole pairs", "n-type silicon"],
    correctAnswer:3 ,
    explanation: ""
},
{
    question: "Isulators cannot electricity because ",
    options: ["the forbidden band gap is wide ", "it has no holes", "there is no valence band", "there is no conductoon band"],
    correctAnswer: 0,
    explanation: "[2019,19]"
},
{
    question: "Standing waves are as a result of",
    options: ["interference of waves", "refraction of wave", "reflection of waves", "diffraction of waves"],
    correctAnswer:0,
    explanation: ""
},
{
    question: "The point at which the resultant magnetic flux density is zero is the ",
    options: ["magnetic point", "flux point", "neutral point", "zero point"],
    correctAnswer: 2,
    explanation: ""
},
{
    question: "A givem barometric altimeter reads zero Pascal",
    options: ["in the atmosphere", "in the sea", "on land", "in outer space"],
    correctAnswer:3 ,
    explanation: ""
},
{
    question: "It takes 4 minutes to boil a quantity of water electrically. How long will it take to boil the same quantity of water using the same heating coil but with the current doubled?",
    options: ["32 minutes", "8 minutes", "2 minutes", "1 minute"],
    correctAnswer: 3,
    explanation: "[2019,7]"
},
{
    question: "The characteristic of a vibration that determines its intensity is the",
    options: ["frequency", "overtone", "wavelength", "amplitude"],
    correctAnswer: 3,
    explanation: "Ensure you go through the explanation [2012,29]"
},
{
    question: "The process of detecting a pin mistakenly swallowed by a child is X-ray",
    options: ["diagnosis", "therapy", "crystallography", "mammorgraphy"],
    correctAnswer:2 ,
    explanation: "[2012, 46]"
},
{
    question: "After reflection from the concave mirror, rays of light from the sun converges",
    options: ["at the radius of curvature", "at the focus", "beyond the radius of curvature", "between the focus and radius of curvature"],
    correctAnswer:1 ,
    explanation: ""
},
{
    question: "If a sonometer has a fundamental frequency of 450Hz, what is the frequency of the fifth overtone?",
    options: ["444 Hz", "75 Hz", "2700 Hz", "456 Hz"],
    correctAnswer: 2,
    explanation: "[2013, 28]"
},
{
    question: "Which of the following waves is both transverse and mechanical?",
    options: ["Sound waves", "Radio waves", "Water waves", "X-rays"],
    correctAnswer: 2,
    explanation: ""
}
];

// Quiz State
let currentQuestionIndex = 0;
let timeLeft = 1800;
let timerId;
let userAnswers = new Array(questions.length).fill(null);
let randomizedQuestions = [];

// DOM Elements
const elements = {
    questionNumber: document.getElementById('question-number'),
    questionText: document.getElementById('question-text'),
    optionsPanel: document.getElementById('options-panel'),
    explanationPanel: document.getElementById('explanation-panel'),
    explanationContent: document.getElementById('explanation-content'),
    timer: document.getElementById('time'),
    questionButtons: document.getElementById('question-buttons'),
    quizForm: document.getElementById('quiz-form')
};

// Initialize Quiz
function init() {
    randomizeQuestions();
    createQuestionButtons();
    showQuestion(0);
    startTimer();
    window.submitQuiz = submitQuiz;
}

function randomizeQuestions() {
    randomizedQuestions = [...questions];
    shuffleArray(randomizedQuestions);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createQuestionButtons() {
    elements.questionButtons.innerHTML = '';
    randomizedQuestions.forEach((_, index) => {
        const button = document.createElement('button');
        button.className = 'question-btn';
        button.textContent = index + 1;
        button.addEventListener('click', () => showQuestion(index));
        elements.questionButtons.appendChild(button);
    });
}

function showQuestion(index) {
    if (index < 0 || index >= randomizedQuestions.length) return;
    
    currentQuestionIndex = index;
    const question = randomizedQuestions[index];
    
    // Update question display
    elements.questionNumber.textContent = `Question ${index + 1}`;
    elements.questionText.textContent = question.question;
    
    // Create radio button options
    elements.optionsPanel.innerHTML = '';
    question.options.forEach((option, optionIndex) => {
        const optionId = `q${index}-opt${optionIndex}`;
        
        const optionItem = document.createElement('div');
        optionItem.className = 'option-item';
        
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.id = optionId;
        radioInput.name = 'quiz-option';
        radioInput.value = optionIndex;
        if (userAnswers[index] === optionIndex) {
            radioInput.checked = true;
        }
        
        const checkmark = document.createElement('span');
        checkmark.className = 'radio-checkmark';
        
        const optionLabel = document.createElement('label');
        optionLabel.htmlFor = optionId;
        optionLabel.textContent = option;
        
        optionItem.appendChild(radioInput);
        optionItem.appendChild(checkmark);
        optionItem.appendChild(optionLabel);
        
        // Add multiple event types for better compatibility
        const handleSelection = () => {
            radioInput.checked = true;
            userAnswers[index] = optionIndex;
            updateNavigationButtons();
        };
        
        radioInput.addEventListener('change', handleSelection);
        radioInput.addEventListener('click', handleSelection);
        optionItem.addEventListener('click', handleSelection);
        
        elements.optionsPanel.appendChild(optionItem);
    });
    
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const buttons = document.querySelectorAll('.question-btn');
    buttons.forEach((button, index) => {
        // Reset all buttons
        button.classList.remove('active', 'answered');
        button.textContent = index + 1; // Use textContent instead of innerHTML
        
        // Mark answered questions
        if (userAnswers[index] !== null) {
            button.classList.add('answered');
        }
        
        // Highlight current question
        if (index === currentQuestionIndex) {
            button.classList.add('active');
        }
    });
}

function startTimer() {
    updateTimerDisplay();
    timerId = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) submitQuiz();
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    elements.timer.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function submitQuiz() {
    clearInterval(timerId);
    const score = calculateScore();
    showResults(score);
    saveResults(score);
    elements.explanationPanel.style.display = 'block';
}

function calculateScore() {
    return randomizedQuestions.reduce((score, question, index) => {
        return score + (userAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
}

function showResults(score) {
    let resultsHTML = `<h3>Your Score: ${score}/${randomizedQuestions.length}</h3>`;
    
    randomizedQuestions.forEach((question, index) => {
        const isCorrect = userAnswers[index] === question.correctAnswer;
        const userAnswer = userAnswers[index] !== null ? 
            question.options[userAnswers[index]] : 'Not answered';
        
        resultsHTML += `
            <div class="question-review ${isCorrect ? 'correct' : 'incorrect'}">
                <p><strong>Question ${index + 1}:</strong> ${question.question}</p>
                <p>Your answer: ${userAnswer}</p>
                <p>Correct answer: ${question.options[question.correctAnswer]}</p>
                <p>Explanation: ${question.explanation}</p>
                <hr>
            </div>
        `;
    });
    
    elements.explanationContent.innerHTML = resultsHTML;
}

function saveResults(score) {
    const results = {
        date: new Date().toLocaleString(),
        score: score,
        totalQuestions: randomizedQuestions.length,
        details: randomizedQuestions.map((question, index) => ({
            question: question.question,
            userAnswer: userAnswers[index],
            correctAnswer: question.correctAnswer,
            isCorrect: userAnswers[index] === question.correctAnswer
        }))
    };
    localStorage.setItem('quizResults', JSON.stringify(results));
}

// Start the quiz when page loads
document.addEventListener('DOMContentLoaded', init);

