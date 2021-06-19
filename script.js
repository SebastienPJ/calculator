const buttons = document.querySelectorAll(".button");
const resultDisplay = document.querySelector(".result");


console.log(buttons);

buttons.forEach(button => button.addEventListener("click", input));




let contentArray = [];
let firstNumberDone = false;
let operatorUsed = "";
let operatorCount = 0;
let num1 = 0;
let num2 = 0;
let answer = 0;


function changeArrayToNumber(){
  let contentAsNumber = Number(contentArray.join(""));
  
  return contentAsNumber

}

function createNumber(keyPressed, objectClassArray) {

  console.log(keyPressed);


  if (objectClassArray.contains("number")) {
    contentArray.push(keyPressed);  
  };

  return changeArrayToNumber();
}

 
function input(objectPressed) {
  /*****Clears display, begins recording second number ****/
  function startSecondNumber() {
    contentArray = [];
    firstNumberDone = true;
    // resultDisplay.innerText = key;
  };

  function updateNum1(){
    answer = operate(operatorUsed, num1, num2);
    operatorCount += 1
    if (operatorCount > 1) {
      num1 = answer
      resultDisplay.innerText = num1
    }

  }


  let key = objectPressed.target.innerText;
  let objectClasses = objectPressed.target.classList


  if (firstNumberDone) {

    num2 = createNumber(key, objectClasses);
    resultDisplay.innerText = num2;

  } else {
    num1 = createNumber(key, objectClasses);
    resultDisplay.innerText = num1;
  };


  switch (key) {
    case "+":
      updateNum1();  
      operatorUsed = "add"
      startSecondNumber();
          
      break;

    case "-":
      updateNum1(); 
      operatorUsed = "substract"
      startSecondNumber();
           
      break;
    

    case "/":
      updateNum1();
      operatorUsed = "divide"
      startSecondNumber()
       
      break;

    case "*":
      updateNum1(); 
      operatorUsed = "multiply"
      startSecondNumber()
      

      break;
    
    case "=":
      answer = operate(operatorUsed, num1, num2);
      resultDisplay.innerText = answer;
      num1 = answer;
      break;
    
    case "Clear":
      resultDisplay.innerText = 0;
      contentArray = [];
      firstNumberDone = false;
      num1 = 0;
      num2 = 0;
      operatorCount = 0;

      break;


    case "Back":
      deleteLastNumber();      
      break;

    default: 
      break;
  }
};



/**** Deletes last number in content array,
updates num1 or num2 and display accordingly ****/
function deleteLastNumber() {
  contentArray.pop();

  if (firstNumberDone) {
    num2 = changeArrayToNumber();
    resultDisplay.innerText = num2;
  } else {
    num1 = changeArrayToNumber();
    resultDisplay.innerText = num1;
  }
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