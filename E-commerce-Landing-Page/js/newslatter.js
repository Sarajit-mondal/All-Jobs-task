document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const successMessage = document.getElementById("success-message");

    // Simple email validation regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Reset error and success messages
    emailError.style.display = "none";
    successMessage.style.display = "none";

    if (emailPattern.test(emailInput.value)) {
      // If email is valid
      successMessage.textContent = "Thank you for subscribing!";
      successMessage.style.display = "block";
      emailInput.value = ""; // Clear the input field
    } else {
      // If email is invalid
      emailError.textContent = "Please enter a valid email address.";
      emailError.style.display = "block";
    }
  });
