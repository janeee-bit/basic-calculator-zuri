const num1 = parseFloat(prompt("Enter 1st Number: "));
const num2 = parseFloat(prompt("Enter 2nd Number: "));
const operator = prompt("Enter operator(+,-,/,*)");
let result = 0;
if (isNaN(num1) || isNaN(num2)) {
  alert("Wrong Input. refresh the page and provide detail");
} else {
  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "/") {
    result = num1 / num2;
  } else if (operator == "*") {
    result = num1 * mum2;
  }
  alert(num1 + operator + num2 + "=" + result);
}
