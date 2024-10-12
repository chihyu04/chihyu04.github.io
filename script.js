const questions = [
    { name: 'Google', src: '/images/google.jpg', answer: 'D' },
    { name: 'Apple', src: '/images/apple.jpg', answer: 'D' },
    { name: 'KFC', src: '/images/kfc.jpg', answer: 'A' },
    { name: 'WeChat', src: '/images/wechat.jpg', answer: 'A' },
    { name: 'Samsung', src: '/images/samsung.jpg', answer: 'D' }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('item-name').textContent = currentQuestion.name;

    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `<img src="${currentQuestion.src}" alt="${currentQuestion.name}">`;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const options = ['A', 'B', 'C', 'D'];
    options.forEach((option) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => handleAnswer(option, currentQuestion.answer));
        optionsContainer.appendChild(button);
    });

    document.getElementById('result').textContent = '';
    document.getElementById('next-button').style.display = 'none';
    answered = false;
}

function handleAnswer(selected, correct) {
    if (answered) return;
    answered = true;

    if (selected === correct) {
        score++;
        document.getElementById('result').textContent = '正確！';
    } else {
        document.getElementById('result').textContent = `錯誤！正確答案是：${correct}`;
    }

    document.getElementById('score-value').textContent = score;
    document.getElementById('next-button').style.display = 'block';
}

document.getElementById('next-button').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
});

function showFinalScore() {
    document.getElementById('question').textContent = '遊戲結束！你的最終分數是：';
    document.getElementById('result').textContent = score;
    document.getElementById('image-container').style.display = 'none';
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('home-button').style.display = 'block';
}

loadQuestion();
