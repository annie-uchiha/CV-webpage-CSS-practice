/*Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second,
 1 if it is vice versa, and 0 if they are equal.*/

function compareNumbers() {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);

  var result;
  if (num1 < num2) {
    result = -1;
  } else if (num1 > num2) {
    result = 1;
  } else {
    result = 0;
  }

  document.getElementById("compare").innerHTML = "The result is: " + result;
}

//Write a function that counts the factorial of a given number.

function calculateFactorial() {
  var number = parseInt(document.getElementById("number").value);

  if (number < 0) {
    document.getElementById("factorial").innerHTML =
      "Factorial cannot be calculated for a negative number.";
    return;
  }

  var factorial = 1;
  for (var i = 2; i <= number; i++) {
    factorial *= i;
  }

  document.getElementById("factorial").innerHTML =
    "Factorial of " + number + " is: " + factorial;
}

//Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
function combineDigits() {
  var digit1 = parseInt(document.getElementById("digit1").value);
  var digit2 = parseInt(document.getElementById("digit2").value);
  var digit3 = parseInt(document.getElementById("digit3").value);

  var combinedNumber = digit1 * 100 + digit2 * 10 + digit3;

  document.getElementById("combination").innerHTML =
    "Combined number: " + combinedNumber;
}
