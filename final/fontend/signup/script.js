
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.forms["Formfill"];
    form.addEventListener("submit", function (event) {
      // Prevent the form from submitting by default
      event.preventDefault();

      // Validate email format for the username
      const usernameInput = form.elements["Username"];
      if (!isValidEmail(usernameInput.value)) {
        alert("Please enter a valid email address for the username");
        return;
      }

      // Validate that password and confirm password match
      const passwordInput = form.elements["Password"];
      const confirmPasswordInput = form.elements["cPassword"];
      if (passwordInput.value !== confirmPasswordInput.value) {
        alert("Password and Confirm Password must match");
        return;
      }

      // If all validations pass, you can submit the form programmatically
      form.submit();
    });

    // Function to validate email format
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
