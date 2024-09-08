const correctAnswers = {
    q1: 'b',
    q2: 'c',  
    q3: 'attention' 
};

function submitQuiz() {
    let score = 0;

    resetQuestionStates();

    const q1Answer = document.querySelector('input[name="q1"]:checked');
    if (q1Answer) {
        if (q1Answer.value === correctAnswers.q1) {
            score += 1;
            highlightAnswer('question1', true);
        } else {
            highlightAnswer('question1', false);
        }
    } else highlightAnswer('question1', false);


    const q2Answer = document.querySelector('input[name="q2"]:checked');
    if (q2Answer) {
        if (q2Answer.value === correctAnswers.q2) {
            score += 1;
            highlightAnswer('question2', true);
        } else {
            highlightAnswer('question2', false);
        }
    } else highlightAnswer('question2', false);

    const q3Answer = document.getElementById('q3-answer').value.trim().toLowerCase();
    if (q3Answer === correctAnswers.q3) {
        score += 1;
        document.getElementById('question3').classList.add('correct');
    } else {
        document.getElementById('question3').classList.add('incorrect');
    }

    alert(`총점: ${score} / 3`);
}

function highlightAnswer(questionId, isCorrect) {
    const questionElement = document.getElementById(questionId);
    if (isCorrect) {
        questionElement.classList.add('correct');
        questionElement.classList.remove('incorrect');
    } else {
        questionElement.classList.add('incorrect');
        questionElement.classList.remove('correct');
    }
}

function resetQuestionStates() {
    document.querySelectorAll('.question').forEach(questionElement => {
        questionElement.classList.remove('correct', 'incorrect');
    });
}
