const buttons = document.querySelectorAll(".button");
const resultDisplay = document.querySelector(".result");


console.log(buttons);

buttons.forEach(button => button.addEventListener("click", input));




// let contentDisplayed = "";
let contentArray = [];
let firstNumberDone = false;
let operatorUsed = "";
let num1 = 0;
let num2 = 0;




// function updateDisplay(buttonPressed) {
//     console.log(contentString);

    

//     contentArray.push(buttonPressed.target.innerText);
//     console.log(contentArray);
    
//     resultDisplay.innerText = buttonPressed.target.innerText;
//     // console.log(buttonPressed);
//     // console.log(buttonPressed.target.innerText);

// }

function createNumber(pressed) {

  let keyPressed = pressed.target.innerText;

  console.log(keyPressed !== "*");

  contentArray.push(keyPressed);
  
  
  let contentString = contentArray.join("");
  
  resultDisplay.innerText = contentString;
  return contentString

}


function createOperator(object) {
  let operatorChosen = object.target.innerText;
  if (operatorChosen == "+") {
    return "add"
  };

  if (operatorChosen == "-") {
    return "substract"
  };

  if (operatorChosen == "/") {
    return "division"
  };

  if (operatorChosen == "*") {
    return "multiply"
  };


};
 
function input(objectPressed) {

  let key = objectPressed.target.innerText;

  if (firstNumberDone) {
    num2 = createNumber(objectPressed);
  } else {
    num1 = createNumber(objectPressed);
  };


  if (key == "+" || key == "-" || key == "*" || key == "/") {
    contentArray = [];
    firstNumberDone = true;
    resultDisplay.innerText = key;

    
  }

  if (key == "+") {
    operatorUsed = "add"
  }

  if (key == "-") {
    operatorUsed = "substract"
  }

  if (key == "/") {
    operatorUsed = "division"
  }

  if (key == "*") {
    operatorUsed = "multiply"
  }


  if (key == "=") {
    // contentArray = [];
    // firstNumberDone = true;
  }


  // let firstNumber = 0;
  // let secondNumber = 0;

    
  // console.log(contentArray);
  // console.log(contentString);


}
 
 
 

 
 
 
 
 
 
 
 
function add(a, b) {
    return a + b;
};

function substract(a, b) {
    return a - b;
};


function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};


function operate(operator, firstNumber, secondNumber) {
    return operator(firstNumber, secondNumber)
};