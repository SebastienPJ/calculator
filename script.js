const buttons = document.querySelectorAll(".button");
const resultDisplay = document.querySelector(".result");


let charactersHistory = [];
let firstNumberDone = false;
let operatorUsed = "";
let operatorCount = 0;
let num1 = "";
let num2 = "";
let answer = 0;
let periodUsed = false;
let invalidMessage = "Divide by 0 is a no no!"

buttons.forEach((button) => button.addEventListener("click", calculator));

document.addEventListener("keydown", keyboard);



/******************* DOM EVENTS **************************/

function calculator(objectPressed) {

  let keyValue = objectPressed.target.innerText;
  let objectClasses = objectPressed.target.classList;
  
  charactersHistory.push(keyValue);


  if (firstNumberDone) {

    if (objectClasses.contains("number") || (objectClasses.contains("period") && periodUsed == false)) {
      buttonAnimation("_" + keyValue)
      num2 += keyValue;
      updateDisplay(num2);
    }

  } else {
    if (objectClasses.contains("number") || (objectClasses.contains("period") && periodUsed == false)) {
      buttonAnimation("_" + keyValue)
      num1 += keyValue;
      updateDisplay(num1);
    }
  }

  switch (keyValue) {
    case ".":
      buttonAnimation("period")
      periodUsed = true;
    break;

    case "+":
      buttonAnimation("add")
      updateOperatorCount();
      operatorUsed = "add";
      startSecondNumber();
    break;

    case "-":
      buttonAnimation("substract")
      updateOperatorCount();
      operatorUsed = "substract";
      startSecondNumber();
    break;

    case "/":
      buttonAnimation("divide")      
      updateOperatorCount();
      operatorUsed = "divide";
      startSecondNumber();
    break;

    case "*":
      buttonAnimation("multiply")
      updateOperatorCount();
      operatorUsed = "multiply";
      startSecondNumber();
    break;

    case "=":
      buttonAnimation("equal")
      getAnswer(operatorUsed, Number(num1), Number(num2));
      if (answer == "Infinity" || answer =="-Infinity" || answer== NaN) {
        resultDisplay.innerText = invalidMessage;
      } else {
        updateDisplay(answer);
      };
      num1 = answer;
      num2 = "";
      operatorUsed = "";
      operatorCount = 1;
      
    break;

    case "Clear":
      buttonAnimation("clear");
      updateDisplay(0);
      firstNumberDone = false;
      periodUsed = false;
      num1 = "";
      num2 = "";
      answer = 0;
      operatorUsed = "";
      operatorCount = 0;
      charactersHistory = [];
    break;

    case "Delete":
      buttonAnimation("delete")
      firstNumberDone ? (num2 = deleteLastCharacter(num2)) : (num1 = deleteLastCharacter(num1));
    break;

    default:
    break;
  };
};

/*********************** GLOBAL FUNCTIONS ************************/
function buttonAnimation(currentKey){
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
      activeButton.classList.remove("pressed");
  }, 200);

};


function updateDisplay(value) {
  resultDisplay.innerText = value;
}

/*** Finds answer for stringing multiple operators,
updates operator count ***/
function updateOperatorCount() {  

  switch (charactersHistory[charactersHistory.length - 2]) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9": 
    case ".":
      operatorCount += 1;

      if (operatorCount > 1) {
        getAnswer(operatorUsed, Number(num1), Number(num2));
        num1 = answer;
        num2 = "";
        if (answer == "Infinity" || answer =="-Infinity" || answer == "NaN") {
          resultDisplay.innerText = invalidMessage;
        } else {
          updateDisplay(num1);
        };        
      };

    break;
  
    default:
    break;
  };
};



function getAnswer(sign, firstNum, secondNum) {
  answer = operate(sign, firstNum, secondNum);
};


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
  };
};

function startSecondNumber() {
  firstNumberDone = true;
  periodUsed = false;
};

function deleteLastCharacter(number) {
  let newNumber = number.slice(0, number.length - 1);
  updateDisplay(newNumber);
  return newNumber;
};

/******************* KEYBOARD EVENTS *********************/

function keyboard(buttonPressed) {

  charactersHistory.push(buttonPressed.key);
  
  switch (buttonPressed.key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":  
      updateNumber(buttonPressed.key);
      buttonAnimation("_" + buttonPressed.key);
    break;

    case ".":
      buttonAnimation("period");
      if (periodUsed == false) {
        updateNumber(buttonPressed.key);
      };

      periodUsed = true;
    break;

    case "+":
      buttonAnimation("add");
      updateOperatorCount();
      operatorUsed = "add";
      startSecondNumber();

    break;

    case "-":
      buttonAnimation("substract");
      updateOperatorCount();
      operatorUsed = "substract";
      startSecondNumber();

    break;

    case "/":
      buttonAnimation("divide");
      updateOperatorCount();
      operatorUsed = "divide";
      startSecondNumber();

    break;

    case "*":
      buttonAnimation("multiply");
      updateOperatorCount();
      operatorUsed = "multiply";
      startSecondNumber();

    break;

    case "=":
    case "Enter":
      buttonAnimation("equal")
      getAnswer(operatorUsed, Number(num1), Number(num2));
      updateDisplay(answer);
      num1 = answer;
      num2 = "";
      operatorUsed = "";
      operatorCount = 1;


    break;

    case "Backspace":
      buttonAnimation("delete")
      firstNumberDone ? (num2 = deleteLastCharacter(num2)) : (num1 = deleteLastCharacter(num1));
    break;

    case "c":
      buttonAnimation("clear")
      updateDisplay(0);
      firstNumberDone = false;
      periodUsed = false;
      num1 = "";
      num2 = "";
      answer = 0;
      operatorUsed = "";
      operatorCount = 0;
      charactersHistory = [];
    break;

    default:
    break;
  };

  function updateNumber(value) {
    if (firstNumberDone) {
      num2 += value;

      updateDisplay(num2);
    } else {
      num1 += value;

      updateDisplay(num1);
    };
  };

};