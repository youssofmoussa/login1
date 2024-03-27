const togglePassword = document.getElementById("toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
  this.classList.toggle("fa-eye");
});

document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Retrieve username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username and password match
    if (username === "username" && password === "password") {
      // Redirect to profile.html
      window.location.href = "profile.html";
    } else {
      // Display validation error message
      document.getElementById("username-error").innerText =
        "Invalid username or password";
    }
  });
