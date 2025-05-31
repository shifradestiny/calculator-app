const displayBox = document.querySelector("#input-row-box");

// appendToDisplay() functionality
function appendToDisplay(input) {
  displayBox.value += input;
}

// clearDisplay() functionality
function clearDisplay() {
  displayBox.value = "";
}

// calculate() functionality
function calculate() {
  try {
    displayBox.value = eval(displayBox.value);
  } catch (error) {
    displayBox.value = "Error";
  }
}

// Dark theme functionality
function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener("click", changeTheme);
