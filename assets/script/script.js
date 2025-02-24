document.addEventListener("DOMContentLoaded", () => {
    const subscribeForm = document.getElementById("subscribe-form");
    const emailInput = document.getElementById("email");
    const validationMessage = document.querySelector(".input-validation");
    const successMessage = document.getElementById("success-message");
    const modal = document.getElementById("modal");
    const dismissButton = document.getElementById("dismiss-button");
    const userEmail = document.getElementById("userEmail");

    if (!subscribeForm || !emailInput || !validationMessage || !successMessage || !modal || !dismissButton) return;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    subscribeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const isValid = emailRegex.test(email);

        emailInput.classList.toggle("input-invalid", !isValid);
        validationMessage.classList.toggle("d-block", !isValid);
        validationMessage.textContent = isValid ? "" : "Valid email required";

        if (isValid) {
            successMessage.classList.replace("d-none", "d-block");
            modal.classList.add("d-none");
            userEmail.textContent = email
            userEmail.setAttribute("href", `mailto:${email}`);
            subscribeForm.reset(); // Reset input field after submission
        }
    });

    dismissButton.addEventListener("click", () => {
        successMessage.classList.replace("d-block", "d-none");
        modal.classList.remove("d-none");
        modal.style.display = "grid";
    });
});
