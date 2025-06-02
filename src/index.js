let newLine = true;
let currentOperator;
let value1;

// Handling for when a digit is pressed
function digitButton(button) {
  if (newLine) {
    document.getElementById("input-row-box").value = button;
    newLine = false;
  } else {
    let currentValue = document.getElementById("input-row-box").value;
    document.getElementById("input-row-box").value = currentValue + button;
  }
}

// Handling for AC button
function clearButton() {
  document.getElementById("input-row-box").value = "";
  newLine = true;
}

// Handling for operator buttons
function operatorButton(operator) {
  currentOperator = operator;
  value1 = parseInt(document.getElementById("input-row-box").value);
  newLine = true;
}

// Handling for operations
function equalButton() {
  let value2 = parseInt(document.getElementById("input-row-box").value);
  let finalTotal;

  switch (currentOperator) {
    case "+":
      finalTotal = value1 + value2;
      break;
    case "-":
      finalTotal = value1 - value2;
      break;
    case "*":
      finalTotal = value1 * value2;
      break;
    case "/":
      finalTotal = value1 / value2;
      break;
  }

  document.getElementById("input-row-box").value = finalTotal;
  value1 = 0;
  newLine = true;
}

// Dark theme functionality
function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}

let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener("click", changeTheme);
