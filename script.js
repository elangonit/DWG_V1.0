document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const errorMessage = document.getElementById("errorMessage");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = loginForm.email.value;
        const password = loginForm.password.value;

        // Add email and password validation logic here
        if (isValidEmail(email) && isValidPassword(password)) {
            // Simulate a successful login (for demonstration purposes)
            alert("Login successful!");
        } else {
            errorMessage.textContent = "Invalid email or password. Please try again.";
        }
    });

    function isValidEmail(email) {
        // Basic email validation (for demonstration purposes)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function isValidPassword(password) {
        // Basic password validation (for demonstration purposes)
        return password.length >= 6;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitAnswers");

    submitButton.addEventListener("click", function () {
        // Collect and process user answers
        const answers = {};

        const question1 = document.querySelector('input[name="q1"]:checked');
        if (question1) answers.question1 = question1.value;

        const question2 = document.querySelector('input[name="q2"]:checked');
        if (question2) answers.question2 = question2.value;

        // Add more questions and answers as needed

        // Send answers to the server (simulated action for demonstration)
        sendAnswersToServer(answers);
    });

    function sendAnswersToServer(answers) {
        // Simulate sending answers to the server
        // In a real system, this would involve a server API and MongoDB integration
        console.log("Answers submitted:", answers);
    }
});
