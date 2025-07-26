let calculate = "0";
let displayResult = document.querySelector(".result");
let lastChar = calculate.slice(-1);

document.querySelectorAll(".button-number").forEach(function (button) {
  button.addEventListener("click", function () {
    const number = this.value;

    if (calculate === "0") {
      calculate = number;
    } else {
      calculate += number;
    }

    document.querySelector(".result").textContent = calculate;
  });
});

document.querySelector(".button-reset").addEventListener("click", function () {
  calculate = "0";
  displayResult.textContent = calculate;
});

document
  .querySelector(".button-backspace")
  .addEventListener("click", function () {
    if (calculate.length > 1) {
      calculate = lastChar;
    } else {
      calculate = "0";
    }
    displayResult.textContent = calculate;
  });

document
  .querySelector(".button-percentage")
  .addEventListener("click", function () {
    const percentage = this.value;
    let lastChar = calculate.slice(-1);

    if (!"+-*/%.".includes(lastChar)) {
      calculate = calculate / 100;
    } else {
      calculate = calculate.slice(0, -1) + percentage;
    }

    console.log(calculate);
    displayResult.textContent = calculate;
  });

document.querySelectorAll(".button-operation").forEach(function (button) {
  button.addEventListener("click", function () {
    const operator = this.value;
    let lastChar = calculate.slice(-1);

    if ("+-*/%.".includes(lastChar)) {
      calculate = calculate.slice(0, -1) + operator;
    } else {
      calculate += operator;
    }
    displayResult.textContent = calculate;
  });
});

document.querySelector(".button-result").addEventListener("click", function () {
  try {
    const result = Function('"use strict"; return (' + calculate + ")")();
    calculate = result.toString();
    displayResult.textContent = calculate;
  } catch (error) {
    displayResult.textContent = "0";
  }
});

console.log(calculate);
