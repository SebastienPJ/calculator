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


// operate(operatorUsed, num1, num2);


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

  // console.log(keyPressed !== "*");
  console.log(keyPressed);

  if (keyPressed !== "*" && keyPressed !== "/" && keyPressed !== "-" && keyPressed !== "+" && keyPressed !== "=") {
    contentArray.push(keyPressed);

  }

  
  
  let contentString = Number(contentArray.join(""));
  
  resultDisplay.innerText = contentString;
  return contentString

}


// function createOperator(object) {
//   let operatorChosen = object.target.innerText;
//   if (operatorChosen == "+") {
//     return "add"
//   };

//   if (operatorChosen == "-") {
//     return "substract"
//   };

//   if (operatorChosen == "/") {
//     return "division"
//   };

//   if (operatorChosen == "*") {
//     return "multiply"
//   };


// };
 
function input(objectPressed) {

  let key = objectPressed.target.innerText;

  if (firstNumberDone) {
    num2 = createNumber(objectPressed);
  } else {
    num1 = createNumber(objectPressed);
  };


  switch (key) {
    case "+":
      operatorUsed = "add"
      startSecondNumber()      
      break;

    case "-":
      operatorUsed = "substract"
      startSecondNumber()      
      break;
    

    case "/":
      operatorUsed = "divide"
      startSecondNumber()
      break;

    case "*":
      operatorUsed = "multiply"
      startSecondNumber()
      break;
    
    case "=":
      let answer = operate(operatorUsed, num1, num2);
      resultDisplay.innerText = answer;
      num1 = answer;
      break;


    default: 
      break;
  }

  function startSecondNumber() {
    contentArray = [];
    firstNumberDone = true;
    resultDisplay.innerText = key;
  }



  // if (key == "+" || key == "-" || key == "*" || key == "/") {
  //   contentArray = [];
  //   firstNumberDone = true;
  //   resultDisplay.innerText = key;

    
  // }

  // if (key == "+") {
  //   operatorUsed = "add"
  // }

  // if (key == "-") {
  //   operatorUsed = "substract"
  // }

  // if (key == "/") {
  //   operatorUsed = "divide"
  // }

  // if (key == "*") {
  //   operatorUsed = "multiply"
  // }


  // if (key == "=") {

  //   let answer = operate(operatorUsed, num1, num2);
  //   resultDisplay.innerText = answer;
  //   num1 = answer;


  // }


  // let firstNumber = 0;
  // let secondNumber = 0;

    
  // console.log(contentArray);
  // console.log(contentString);


}



function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "add":
            return firstNumber + secondNumber
            
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
};