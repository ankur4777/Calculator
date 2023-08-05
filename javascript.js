let displayValue = "0";

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  if (displayValue === "") {
    displayValue = "0";
  }
  updateDisplay();
}

function calculateTrigFunction(func) {
  if (func === "sqrt") {
    displayValue = Math.sqrt(parseFloat(displayValue)).toString();
  } else {
    displayValue = Math[func](parseFloat(displayValue)).toString();
  }
  updateDisplay();
}

function calculate(symbol) {
  if (symbol === "=") {
    try {
      displayValue = eval(displayValue).toString();
    } catch (error) {
      displayValue = "Error";
    }
  } else {
    if (displayValue === "0" || displayValue === "Error") {
      displayValue = symbol;
    } else {
      displayValue += symbol;
    }
  }
  updateDisplay();
}

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key) || key === ".") {
    calculate(key);
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === "Enter" || key === "=") {
    calculate("=");
  }
});

updateDisplay();
