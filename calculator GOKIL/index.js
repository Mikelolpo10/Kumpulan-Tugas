let calculate = "0";
let calculateHistory = document.querySelector(".calculation-history");

function displayCalculate() {
  document.querySelector(".calculation").innerHTML = calculate;
}

document.querySelectorAll(".button-number").forEach((btn) => {
  btn.addEventListener("click", () => {
    const number = btn.textContent;

    if (calculate === "0") {
      calculate = number;
    } else {
      calculate += number;
    }

    displayCalculate();
    console.log(calculate);
  });
});

document.querySelector(".button-reset").addEventListener("click", () => {
  if (calculate === "0") {
    calculateHistory.innerHTML = "";
  } else {
    calculate = "0";
    displayCalculate();
  }
});

document.querySelector(".button-backspace").addEventListener("click", () => {
  const newCalculate = calculate.slice(0, -1);
  if (calculate.length > 1) {
    calculate = newCalculate;
    displayCalculate();
  } else if ((calculate.length = 1 && calculate !== "0")) {
    calculate = "0";
    displayCalculate();
  }
});

document.querySelectorAll(".button-operation").forEach((btn) => {
  btn.addEventListener("click", () => {
    const operator = btn.value;
    let lastChar = calculate.slice(-1);
    if ("+-*/.".includes(lastChar)) {
      calculate = calculate.slice(0, -1) + operator;
      displayCalculate();
    } else {
      calculate += operator;
      displayCalculate();
    }
  });
});

// document
//   .querySelector(".button-percentage") //ERRRORRR` coba ubah jadi array
//   .addEventListener("click", function () {
//     const percentage = this.value;
//     let lastChar = calculate.slice(-1);
//     let operators = ["+", "-", "*", "/"];
//     let arrayCalculate = 
//     let index = calculate.findIndex((item) => operators.includes(item));
//     console.log(index);

//     calculate = numberCalculate / 100;
//     displayCalculate();

//     // Ambil angka terakhir (termasuk angka negatif) CHATGPT ribet eui
//     // const match = calculate.match(/(-?\d+(\.\d+)?)$/);

//     // if (match) {
//     //   const number = match[0]; // contoh: "-55" atau "30.5"
//     //   const percentage = parseFloat(number) / 100;

//     //   // Ganti angka terakhir dengan hasil persen
//     //   calculate = calculate.slice(0, -number.length) + percentage;
//     //   displayCalculate();
//     // }
//   });

document.querySelector(".button-result").addEventListener("click", () => {
  //BIKIN PEMBATAS DI RESULT
  try {
    const result = Function('"use strict"; return (' + calculate + ")")();
    calculateHistory.innerHTML = calculate;
    calculate = result.toString();

    displayCalculate();
  } catch (error) {
    document.querySelector(".result").innerHTML = "ERROR";
  }
});
