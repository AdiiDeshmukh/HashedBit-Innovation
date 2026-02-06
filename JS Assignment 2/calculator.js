function calculate(num1, num2, operator) {
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      break;
    default:
      result = "Invalid operator";
  }

  return result;
}

console.log(calculate(10, 8, '*'));