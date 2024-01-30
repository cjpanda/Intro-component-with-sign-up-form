function validateForm() {
  // Reset previous error messages and hide error icons
  resetErrorMessages();

  // Get form values
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Check for empty fields and display error messages
  if (!firstName) {
    displayError("firstName", "First Name is required.");
  }
  if (!lastName) {
    displayError("lastName", "Last Name is required.");
  }
  if (!email) {
    displayError("email", "Email Address is required.");
  }
  if (!password) {
    displayError("password", "Password is required.");
  }

  // Check email format using a simple regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    displayError("email", "Please enter a valid email address.");
  }
}

// Error Displays
function displayError(fieldId, message) {
  // Display error message
  document.getElementById(`${fieldId}ErrorMessage`).innerHTML = message;
  // Show error icon
  document.getElementById(`${fieldId}Error`).style.display = "inline-block";
  // Add error class to input container
  document.getElementById(`${fieldId}Container`).classList.add("error");
}

// Function to handle input focus
function handleInputFocus(fieldId) {
  // Remove error class from input container when focused
  document.getElementById(`${fieldId}Container`).classList.remove("error");
  // Hide error icon
  document.getElementById(`${fieldId}Error`).style.display = "none";
  // Clear error message
  document.getElementById(`${fieldId}ErrorMessage`).innerHTML = "";
}

// Attach focus event listeners to inputs
document.getElementById("firstName").addEventListener("focus", function () {
  handleInputFocus("firstName");
});
document.getElementById("lastName").addEventListener("focus", function () {
  handleInputFocus("lastName");
});
document.getElementById("email").addEventListener("focus", function () {
  handleInputFocus("email");
});
document.getElementById("password").addEventListener("focus", function () {
  handleInputFocus("password");
});

function resetErrorMessages() {
  // Reset error messages and hide error icons
  const fields = ["firstName", "lastName", "email", "password"];
  fields.forEach((field) => {
    document.getElementById(`${field}ErrorMessage`).innerHTML = "";
    document.getElementById(`${field}Error`).style.display = "none";
  });
}
