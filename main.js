window.onload = function () {
  alert("Welcome to my portfolio site!");
  updateToggleText();
};

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  updateToggleText();
}

function updateToggleText() {
  const button = document.getElementById("modeToggle");
  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "Light Mode";
    button.classList.remove("light-mode-active");
  } else {
    button.textContent = "Dark Mode";
    button.classList.add("light-mode-active");
  }
}

function validateForm() {
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!email || !message) {
    alert("Please fill out both fields.");
    return false;
  }

  alert("Thanks for reaching out!");
  return true;
}
