window.onload = function () {
  alert("Welcome to my portfolio site!");
  updateToggleText(); // Set initial button text
};

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  updateToggleText();
}

function updateToggleText() {
  const button = document.getElementById("modeToggle");
  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "☀️ Light Mode";
    button.classList.remove("light-mode-active");
  } else {
    button.textContent = "🌙 Dark Mode";
    button.classList.add("light-mode-active");
  }
}

function validateForm() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (email.trim() === "" || message.trim() === "") {
    alert("Please fill out both fields.");
    return false;
  }

  alert("Thanks for reaching out!");
  return true;
}