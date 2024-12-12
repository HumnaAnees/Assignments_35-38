// Question_01

function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("dateTimeDisplay").textContent = dateTimeString;
}
document.addEventListener("DOMContentLoaded", displayDateTime);
setInterval(displayDateTime, 1000);


// Question_02

function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("dateTimeDisplay").textContent = dateTimeString;
}
function greetUser(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    alert(`Hello, ${fullName}! Welcome!`);
}
document.addEventListener("DOMContentLoaded", displayDateTime);
setInterval(displayDateTime, 1000);


// Question_03

function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("dateTimeDisplay").textContent = dateTimeString;
}
document.addEventListener("DOMContentLoaded", displayDateTime);
setInterval(displayDateTime, 1000);
function greetUser(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    alert(`Hello, ${fullName}! Welcome!`);
}
function addNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const sum = num1 + num2;
    alert(`The sum of ${num1} and ${num2} is ${sum}.`);
    return sum;
}

// Question_04

function displayDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("dateTimeDisplay").textContent = dateTimeString;
}
document.addEventListener("DOMContentLoaded", displayDateTime);
setInterval(displayDateTime, 1000);
function greetUser(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    alert(`Hello, ${fullName}! Welcome!`);
}
function addNumbers() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const sum = num1 + num2;
    alert(`The sum of ${num1} and ${num2} is ${sum}.`);
    return sum;
}
function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const operator = prompt("Enter an operator (+, -, *, /):");
    const num2 = parseFloat(prompt("Enter the second number:"));

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
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                alert("Division by zero is not allowed.");
                return;
            }
            break;
        default:
            alert("Invalid operator. Please use +, -, *, or /.");
            return;
    }
    alert(`The result of ${num1} ${operator} ${num2} is ${result}.`);
    return result;
}


// Question_05


function square(num) {
    return num * num;
  }
    document.write("The square of 5 is: " + square(5) + "<br>");
  document.write("The square of 10 is: " + square(10) + "<br>");
  

// Question_06

function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  function displayFactorial() {
    var number = document.getElementById("numberInput").value;
    var result = factorial(parseInt(number));
    document.getElementById("result").innerHTML = "The factorial of " + number + " is: " + result;
  }

//   Qustion_07

function displayCounting() {
    var start = parseInt(document.getElementById("startInput").value);
    var end = parseInt(document.getElementById("endInput").value);
        if (start <= end) {
      var counting = "";
      for (var i = start; i <= end; i++) {
        counting += i + " ";
      }
      document.getElementById("result").innerHTML = "Counting: " + counting;
    } else {
      document.getElementById("result").innerHTML = "Please make sure the start number is less than or equal to the end number.";
    }
  }


// Question_08

function calculateHypotenuse() {
    var base = parseFloat(document.getElementById("baseInput").value);
    var perpendicular = parseFloat(document.getElementById("perpendicularInput").value);
        function calculateSquare(number) {
      return number * number;
    }
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    document.getElementById("result").innerHTML = "The hypotenuse is: " + hypotenuse.toFixed(2);
  }

//   Question_09

function calculateArea(width, height) {
    var area = width * height;
    return area;
  }
  function areaWithValues() {
    var area = calculateArea(10, 5);
    document.getElementById("resultValue").innerHTML = "Area with values (10 * 5) = " + area;
  }
  function areaWithVariables() {
    var width = 15;    
    var height = 7;    
    var area = calculateArea(width, height);  
    document.getElementById("resultVariables").innerHTML = "Area with variables (15 * 7) = " + area;
  }

//   Question_10

function isPalindrome(str) {
    var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    var reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
      return true;
    } else {
      return false;
    }
  }
  function checkPalindrome() {
    var inputString = document.getElementById("inputString").value;
    if (isPalindrome(inputString)) {
      document.getElementById("result").innerHTML = "'" + inputString + "' is a palindrome.";
    } else {
      document.getElementById("result").innerHTML = "'" + inputString + "' is not a palindrome.";
    }
  }

//   Question_11

function convertToTitleCase(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(' ');
  }
  function displayTitleCase() {
    var inputString = document.getElementById("inputString").value;
    var resultString = convertToTitleCase(inputString);
    document.getElementById("ans").innerHTML = "Converted Title Case: " + resultString;
  }

//   Question_12

function findLongestWord(inputStr) {
    var words = inputStr.split(' ');
    
    var longestWord = '';
        for (var i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    return longestWord;
  }
  function showLongestWord() {
    var inputText = document.getElementById("userInput").value;
    var longestWord = findLongestWord(inputText);
    document.getElementById("outputResult").innerHTML = "The longest word is: " + longestWord;
  }

//   Question_13

function countLetterOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i).toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    }
    return count;
  }
  function showOccurrences() {
    var inputString = document.getElementById("inputString").value;
    var inputLetter = document.getElementById("inputLetter").value;
    var occurrences = countLetterOccurrences(inputString, inputLetter);
    document.getElementById("output").innerHTML = "The letter '" + inputLetter + "' appears " + occurrences + " time(s) in the string.";
  }

//   Question_14


function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;  
    document.getElementById("circumferenceResult").innerHTML = "The circumference is " + circumference.toFixed(2);
  }
  function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);  
    document.getElementById("areaResult").innerHTML = "The area is " + area.toFixed(2);
  }
  function calculateCircleProperties() {
    var radius = parseFloat(document.getElementById("radiusInput").value);
    if (!isNaN(radius) && radius > 0) {
      calcCircumference(radius);  
      calcArea(radius);  
    } else {
      alert("Please enter a valid positive number for the radius.");
    }
  }