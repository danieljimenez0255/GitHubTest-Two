
let resultDisplay = document.getElementById("displayResult");
let numberOne = prompt("Enter your first Number: ");
let numberTwo = prompt("EnterSecondNumber: ");
function addNums(a, b){
   let addNums = a + b;
   return addNums;
}

resultDisplay.innerHTML = "The value of the numbers added is: " + addNums(parseInt(numberOne),parseInt(numberTwo));