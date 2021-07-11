const buttons = document.querySelectorAll(".button");
const resultDisplay = document.querySelector(".result");

console.log(buttons);

// let contentArray = [];
let firstNumberDone = false;
let operatorUsed = "";
let operatorCount = 0;
let num1 = "";
let num2 = "";
let answer = 0;
let periodUsed = false;

buttons.forEach((button) => button.addEventListener("click", calculator));

document.addEventListener("keydown", keyboard);



function calculator(objectPressed) {
  let keyValue = objectPressed.target.innerText;
  let objectClasses = objectPressed.target.classList;

  
  if(firstNumberDone) {
    if (objectClasses.contains("number") || (objectClasses.contains("period") && periodUsed == false)){
      num2 += keyValue;
      updateDisplay(num2);
    }
  } else {
    if (objectClasses.contains("number") || (objectClasses.contains("period") && periodUsed == false)){
      num1 += keyValue;
      updateDisplay(num1);
    }
  }


  switch (keyValue) {
    case ".":
      periodUsed = true;
    break;

    case "+":
      updateOperatorCount();
      operatorUsed = "add";
      startSecondNumber();
    break;

    case "-":
      updateOperatorCount()
      operatorUsed = "substract";
      startSecondNumber();
    break;

    case "/":
      updateOperatorCount()
      operatorUsed = "divide";
      startSecondNumber();
    break;

    case "*":
      updateOperatorCount()
      operatorUsed = "multiply";
      startSecondNumber();
    break;

    case "=":
      getAnswer(operatorUsed, Number(num1), Number(num2));
      updateDisplay(answer);
      // num1 = answer;
      // // num2 = 0;

    break;

    case "Clear":
      updateDisplay(0);
      firstNumberDone = false;
      periodUsed = false;
      num1 = "";
      num2 = "";
      answer = 0;
      operatorUsed = "";
      operatorCount = 0;
    break;

    case "Back":
      firstNumberDone ? num2 = deleteLastCharacter(num2) : num1 = deleteLastCharacter(num1);
    break;

    default:
    break;
  }


  function updateOperatorCount() {
    operatorCount += 1

    if (operatorCount > 1) {
      getAnswer(operatorUsed, Number(num1), Number(num2));
      num1 = answer;    
      num2 = "";    
      updateDisplay(num1);
    };

  }

  function updateDisplay(value) {
    resultDisplay.innerText = value;
  }


  function getAnswer(sign, firstNum, secondNum) {
    answer = operate(sign, firstNum, secondNum);
  }

  function startSecondNumber() {
    firstNumberDone = true;
    periodUsed = false;
  }


  function deleteLastCharacter(number) {
    let newNumber = number.slice(0, number.length - 1);
    updateDisplay(newNumber);
    return newNumber;
  }


  function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
      case "add":      
        return firstNumber + secondNumber;
      break;

      case "substract":
        return firstNumber - secondNumber;
      break;

      case "multiply":
        return firstNumber * secondNumber;
      break;

      case "divide":
        return firstNumber / secondNumber;
      break;

      default:
        console.log("Something went wrong in the operate function");
      break;
    }
  }
}



/******* KEYBOARD EVENTS ********/

function keyboard(buttonPressed) {

  console.log(buttonPressed.key);



}
