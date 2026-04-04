const quizzes = [
    {
        title: "Math Quiz",
        questions: 10,
        topic: "Math",
        description: "Practice algebra basics"
    },
    {
        title: "History Quiz",
        questions: 8,
        topic: "History",
        description: "Test your history knowledge"
    },
    {
        title: "Science Quiz",
        questions: 12,
        topic: "Science",
        description: "Explore physics concepts"
    },
    {
        title: "Programming Quiz",
        questions: 15,
        topic: "Other",
        description: "JS fundamentals"
    }
];

const container = document.querySelector("#quizContainer");
const topicFilter = document.getElementById("topicFilter");
const form = document.getElementById("quizForm");
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

function updateTotalQuizzes() {
    const total = quizzes.reduce((count) => count + 1, 0);
    document.getElementById("totalQuizzes").textContent = `Total Quizzes: ${total}`;
}

function renderQuizzes() {
    const filterValue = document.getElementById("topicFilter").value;
    container.innerHTML = "";
    
    const filteredQuizzes = quizzes.filter(quiz => {
        return filterValue === "All" || quiz.topic === filterValue;
    });

    filteredQuizzes.forEach(quiz => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${quiz.title}</h3>
            <p><strong>Questions:</strong> ${quiz.questions}</p>
            <p><strong>Topic:</strong> ${quiz.topic}</p>
            <p>${quiz.description}</p>
        `;
        container.appendChild(card);
    });
}

function addQuiz(quiz) {
    quizzes.push(quiz);
    renderQuizzes();
    updateTotalQuizzes();
}

topicFilter.addEventListener("change", () => {
    renderQuizzes();
});

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const newQuiz = {
        title: document.getElementById("title").value,
        questions: parseInt(document.getElementById("questions").value),
        topic: document.getElementById("topic").value,
        description: document.getElementById("description").value
    };

    addQuiz(newQuiz);

    form.reset();
    modal.classList.add("modal-hidden");
});

openBtn.addEventListener("click", function(e) {
    e.preventDefault();
    modal.classList.remove("modal-hidden");
});

closeBtn.addEventListener("click", function() {
    modal.classList.add("modal-hidden");
});

window.addEventListener("click", function(e) {
    if (e.target === modal) {
        modal.classList.add("modal-hidden");
    }
});

renderQuizzes();
updateTotalQuizzes();