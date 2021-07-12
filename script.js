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





/******************* DOM EVENTS **************************/

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

    case "Delete":
      firstNumberDone ? num2 = deleteLastCharacter(num2) : num1 = deleteLastCharacter(num1);
    break;

    default:
    break;
  }

}





/*********************** GLOBAL FUNCTIONS ************************/

function updateDisplay(value) {
  resultDisplay.innerText = value;
}





/*** Finds answer for stringing multiple operators,
updates operator count ***/

function updateOperatorCount() {
  operatorCount += 1

  if (operatorCount > 1) {
    getAnswer(operatorUsed, Number(num1), Number(num2));
    num1 = answer;    
    num2 = "";    
    updateDisplay(num1);
  };

}




function getAnswer(sign, firstNum, secondNum) {
  answer = operate(sign, firstNum, secondNum);
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




function startSecondNumber() {
  firstNumberDone = true;
  periodUsed = false;
}




function deleteLastCharacter(number) {
  let newNumber = number.slice(0, number.length - 1);
  updateDisplay(newNumber);
  return newNumber;
}




/******************* KEYBOARD EVENTS *********************/

function keyboard(buttonPressed) {

  console.log(buttonPressed);


  switch (buttonPressed.key) {
    case "1":
      updateNumber(buttonPressed.key);
      break;

    case "2":
      updateNumber(buttonPressed.key);
      break;

    case "3":
      updateNumber(buttonPressed.key);
      break;

    case "4":
      updateNumber(buttonPressed.key);
      break;

    case "5":
      updateNumber(buttonPressed.key);
      break;

    case "6":
      updateNumber(buttonPressed.key);
      break;

    case "7":
      updateNumber(buttonPressed.key);
      break;

    case "8":
      updateNumber(buttonPressed.key);
      break;

    case "9":
      updateNumber(buttonPressed.key);
      break;

    case "0":
      updateNumber(buttonPressed.key);
      break;

    case ".":
      if (periodUsed == false) {
        updateNumber(buttonPressed.key);
      };
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
    case "Enter":
      getAnswer(operatorUsed, Number(num1), Number(num2));
      updateDisplay(answer);
      // num1 = answer;
      // // num2 = 0;

    break;

    case "Backspace":
      firstNumberDone ? num2 = deleteLastCharacter(num2) : num1 = deleteLastCharacter(num1);
    break;


    case "c":
      updateDisplay(0);
      firstNumberDone = false;
      periodUsed = false;
      num1 = "";
      num2 = "";
      answer = 0;
      operatorUsed = "";
      operatorCount = 0;
    break;

    default:
      break;
  };




  function updateNumber(value){
    if (firstNumberDone) {

      num2 += value;
      updateDisplay(num2);

    } else {

      num1 += value;
      updateDisplay(num1);

    };
  };



};
