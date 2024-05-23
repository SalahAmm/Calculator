const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result input");
const clear = document.getElementsByClassName('clear')

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.textContent;
      if(button.classList.contains('clear')) {
        result.value = '';
      }else{
        result.value += value;
      }

    });
  });

let num1 = "";
let num2 = "";
let operator = "";

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
