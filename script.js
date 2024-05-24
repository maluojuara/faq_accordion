const faqTopics = document.querySelectorAll('.faq-topic');

for (const topic of faqTopics) {
    const question = topic.querySelector('.question');
    const questionIcon = topic.querySelector('.question-icon');
    const answer = topic.querySelector('.answer');

    question.addEventListener('click', () => {
        toggleFAQ(questionIcon, answer);
    })
}

function toggleFAQ (questionIcon, answer) {
    const isExpanded = questionIcon.getAttribute('aria-expanded') === 'true';

    questionIcon.setAttribute('aria-expanded', !isExpanded);
    questionIcon.src = isExpanded ? 'assets/images/icon-plus.svg' : 'assets/images/icon-minus.svg';
    answer.style.display = isExpanded ? 'none' : 'block';
}