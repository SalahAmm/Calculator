const buttons = document.querySelectorAll("button");
const display = document.querySelector(".result input");

let num1 = "";
let num2 = "";
let operator = "";
let shouldResetDisplay = false;
// handle the clicking
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (button.classList.contains("clear")) {
      clearDisplay();
    } else if (button.classList.contains("operator")) {
      handleOperator(value);
    } else if (button.classList.contains("results")) {
      calculateResult();
    } else {
      newNumber(value);
    }
  });
});

function clearDisplay() {
  num1 = "";
  num2 = "";
  operator = "";
  display.value = "";
  shouldResetDisplay = false;
}

function handleOperator(op) {
  if (num1 && !num2 && operator) {
    operator = op;
  } else if (num1 && num2) {
    calculateResult();
    operator = op;
    num1 = display.value;
    num2 = "";
    shouldResetDisplay = true;
  } else {
    operator = op;
    num1 = display.value;
    shouldResetDisplay = true;
  }
}
// calculate the numbers

function calculateResult() {
  if (num1 && operator) {
    num2 = display.value;
    result = operate(operator, parseFloat(num1), parseFloat(num2));
    display.value = result;
    num1 = display.value;
    num2 = "";
    operator = "";
    shouldResetDisplay = true;
  }
}
// create new number

function newNumber(number) {
  if (shouldResetDisplay) {
    display.value = "";
    shouldResetDisplay = false;
  }

  display.value += number;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("Error");
  } else {
    return num1 / num2;
  }
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);

    case "-":
      return subtract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);

    default:
      throw new Error("invalid operator");
  }
}
