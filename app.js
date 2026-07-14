// Question 1: Variable Declarations and Initialization.
//Create three variables: productName (string with value "Laptop"),
//price (number with value 999.99), and inStock (boolean with value true).
// Console.log all three variables in a single statement.

let productName = "Laptop";
let price = 999.99;
let inStock = true;

console.log(productName, price, inStock);
// Question 2: Mathematical Operations
// Calculate and display:
// The remainder when 27 is divided by 4
// The square of 12 (using exponentiation operator **)
// The result of incrementing 8 by 1 using the ++ operator
// The result of decrementing 15 by 2 using the -= operator

let remainder = 27 % 4;
let square = 12 ** 2;
let Increment = 8;
Increment++;
let Decrement = 15;
Decrement -= 2;

console.log(remainder,square,Increment,Decrement);
// Question 3: String Concatenation and Case Conversion
// Create two string variables: firstName = "alex" and lastName = "SMITH".
// Concatenate them with a space, then convert the result to proper case (first letter uppercase, rest lowercase).
// Also find the total length of the full name.
let toProperCase = (text)=>{
    let lowerCase = text.toLowerCase();
    return lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
}

let firstName = "alex" ;
let lastName = "SMITH";
let fullName = firstName + " " + lastName;

let properCase = toProperCase(fullName)

 console.log(properCase);


//  Question 4: if-else Conditional Logic
// Write an if-else statement that checks a temperature variable.
// If temperature is above 30, console.log "Hot day". If between 20 and 30 (inclusive), console.log "Pleasant day".
//Otherwise, console.log "Cold day". Test with temperature = 25.
 
let temperature = 25;

if (temperature > 30) {
    console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("Pleasant day");
} else {
    console.log("Cold day");
}
// Question 5: Comparison Operators. Create three comparison operations:
// 1. Check if 15 is strictly equal to "15"
// 2. Check if 20 is greater than 15 AND less than 25
// 3. Check if 10 is not equal to 10 OR 5 is greater than 3

let check1 = (15 === "15"); 
console.log(check1)

let check2 = (20 > 15 && 20 < 25);
console.log(check2);

let check3 = (10 != 10 || 5 > 3);
console.log(check3);


// Question 6: Array Manipulation - Basics. Create an array colors with values ["red", "green", "blue"].
// Then: Add "yellow" to the end, Remove the first element, Insert "purple" at index 1. 
//Console.log the final array and its length.

let colors = ["red", "green", "blue"];

colors.push("yellow"); 
colors.shift(); 

colors.splice(1, 0, "purple");

console.log(colors);
console.log(colors.length);

//Question 7: Array Manipulation - splice()
//Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Use splice() to:
//Remove "cherry"
//Replace "date" with "dragonfruit"
//Extract the middle 3 elements into a new array


let fruits = ["apple", "banana", "cherry", "date", "elderberry"];

fruits.splice(2, 1); 

fruits.splice(2, 1, "dragonfruit"); 

let newFruits = fruits.splice(1, 3);

console.log(newFruits);


//Question 8: for Loop - Number Sequence
//Write a for loop that prints numbers from 1 to 10, but skips number 5 using continue, and stops at 8 using break.
//Also calculate the sum of all printed numbers.

let sum = 0;

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; 
    }
    if (i > 8) {
        break; 
    }
    
    console.log(i);
    sum += i;
}

console.log(sum);



// Question 9: Nested for Loop - Pattern
// Write nested for loops to create this pattern:

// *
// **
// ***
// ****
// *****

for(let i = 1 ; i <= 5;i++ ){
    let row = ""
    for(let j = 1 ; j <= i; j++){
        row += "*"
    }
    console.log(row);
}
// Question 10: String Methods - Search and Extract
// Given text = "The quick brown fox jumps over the lazy dog":

// Find the position of "fox"
// Extract "brown fox" using substring/slice
// Check if the text contains "dog"
// Get the character at position 10

let text = "The quick brown fox jumps over the lazy dog";

let position = text.indexOf("fox");

let extractedText = text.slice(10, 19);

let containsDog = text.includes("dog");

let charAtTen = text.charAt(10);

console.log(position,extractedText,containsDog,charAtTen);

// Question 11: String Replacement
// Given sentence = "I love JavaScript and JavaScript is awesome":

// Replace the first "JavaScript" with "coding"
// Replace ALL "JavaScript" with "JS"
// Replace "awesome" with uppercase "AWESOME"

let sentence = "I love JavaScript and JavaScript is awesome";

let first = sentence.replace("JavaScript", "coding");

let all = sentence.replaceAll("JavaScript", "JS");

let awesome = sentence.replace("awesome", "awesome".toUpperCase());

console.log(first,all,awesome);

// Question 12: Number Rounding and Formatting
// Given num = 123.456789:

// Round to 2 decimal places
// Round to nearest integer
// Get the floor value
// Get the ceiling value
// Format to show exactly 4 decimal places

let num = 123.456789;
let rd = Math.round(num * 100) / 100;
let rt = Math.round(num);
let fn = Math.floor(num);
let cn = Math.ceil(num);
let ed = num.toFixed(4);
console.log(rd,rt,fn,cn,ed);

// Question 13: Random Number Generation
// Generate:

// A random integer between 1 and 100 (inclusive)
// A random decimal between 0 and 1 with 3 decimal places
// A random number between 50 and 75 (inclusive)

let random1To100 = Math.floor(Math.random() * 100 ) + 1;
let randomDeci = Number( Math.random().toFixed(3));
let random50To75= Math.floor(Math.random() * (75 - 50 + 1) ) + 50;

console.log(random1To100,randomDeci,random50To75);

// Question 14: Type Conversion
// Perform these conversions:

// Convert string "123" to number
// Convert string "45.67" to decimal (float)
// Convert number 789 to string
// Check the type of "true" after converting to boolean

let sn = "123";
let num1 = Number(sn)
 
let sf = "45.67";
let num2 = parseFloat(sf);

let ns = 789 ;
let string = ns.toString();

let sb = "true";
let boolean = JSON.parse(sb);
let typeCheck = typeof boolean ;

console.log(num1,num2,string,typeCheck);


// Question 15: Date and Time Operations
// Create a Date object for the current time and:

// Extract the year, month (0-11), and day
// Get the hours in 24-hour format
// Format it as "YYYY-MM-DD"
// Create a specific date for December 25, 2024

let currentTime = new Date();

let year = currentTime.getFullYear();
let month = currentTime.getMonth();
let day = currentTime.getDate();

let hours = currentTime.getHours();

let fMonth = String(month + 1).padStart(2, "0");
let fDay = String(day).padStart(2, "0");
let fDate = `${year}-${fMonth}-${fDay}`;

let sDate = new Date(2006,1,12);

console.log(currentTime,year,month,day,hours);
console.log(fDate);
console.log(sDate);

// Question 16: Function - Basic Calculator
// Write a function calculate that takes two numbers and an operator (+, -, *, /) as parameters and returns the result.
//  Handle division by zero by returning "Error: Division by zero".

function calculatNum(numb1,numb2,operator){
    if(operator === "+"){
       return numb1 + numb2;
    }else if(operator === "-"){
        return numb1 - numb2 ;
    }else if(operator === "*"){
        return numb1 * numb2 ;
    }else if(operator === "/"){
        if(numb2 === 0 ){
            return "Error: Division by zero";
        }
        return numb1 / numb2;
    }else{
        return "Invalid Operator"
    }
}
console.log(calculatNum(2,2,"+"));
// Question 17: Function - Local vs Global Variables
// Create a global variable globalCounter = 0. Write a function incrementCounter that declares a local variable with the same name and increments it,
// while also incrementing the global variable
// Show the difference after calling the function twice.

let globalCounter = 0;

function incrementCounter() {
    let globalCounter = 0; 
    globalCounter++; 
    
    window.globalCounter++; 
}

incrementCounter();
incrementCounter();



// Question 18: switch Statement - Day of Week
// Write a switch statement that takes a number (0-6) and returns the corresponding day name (0=Sunday, 1=Monday, etc.). Include a default case for invalid numbers.
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "Invalid day number";
  }
}

console.log(getDayName(0));
console.log(getDayName(3));
console.log(getDayName(6));
console.log(getDayName(10));



// Question 19: while Loop - Countdown
// Write a while loop that starts at 10 and counts down to 1, printing each number. Then print "Blast off!". Also calculate the factorial of 5 using a while loop.
let count = 10;

while (count >= 1) {
  console.log(count);
  count--;
}

console.log("Blast off!");


let n = 5;
let factorial = 1;

while (n >= 1) {
  factorial *= n;
  n--;
}

console.log("Factorial of 5:", factorial);



// Question 20: do...while Loop - User Input Simulation
// Create a do...while loop that simulates asking for a password. Start with enteredPassword = "" and keep "asking" (incrementing a counter) until enteredPassword === "secret123" or 5 attempts are made.
let enteredPassword = "";
let attempts = 0;
let correctPassword = "secret123";
let simulatedInputs = ["abc123", "hello", "password1", "secret123", "test"];

do {
  enteredPassword = simulatedInputs[attempts];
  attempts++;
  console.log("Attempt " + attempts + ": Trying '" + enteredPassword + "'");

} while (enteredPassword !== correctPassword && attempts < 5);

if (enteredPassword === correctPassword) {
  console.log("Access granted! Correct password entered on attempt " + attempts);
} else {
  console.log("Access denied. Maximum attempts (5) reached.");
}



// Question 21: Array Methods with for Loop
// Given numbers = [12, 45, 78, 23, 56, 89, 34]:

// Use a for loop to find the maximum value
// Use a for loop to calculate the average
// Create a new array with only numbers greater than 50
// Reverse the array without using reverse() method
let numbers = [12, 45, 78, 23, 56, 89, 34];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log("Maximum:", max);


let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum1 += numbers[i];
}
let average = sum1 / numbers.length;
console.log("Average:", average);

let greaterThan50 = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50) {
    greaterThan50.push(numbers[i]);
  }
}
console.log("Greater than 50:", greaterThan50);


let reversed = [];
for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}
console.log("Reversed:", reversed);



// Create a function handleClick that:

// Gets a value from an input field with id "username"
// Checks if it's empty and shows an alert if so
// Otherwise, displays "Welcome, [username]!" in a paragraph with id "greeting"
// Resets the input field after greeting
function handleClick() {

  let username = document.getElementById("username").value;
  if (username.trim() === "") {
    alert("Please enter a username!");
  } else {
    document.getElementById("greeting").textContent = "Welcome, " + username + "!";
    document.getElementById("username").value = "";
  }
}



// Write a function validateForm that:

// Takes email and password as parameters
// Returns true if email contains "@" and password length ≥ 8
// Otherwise returns false with specific error messages
// Test with multiple test cases
function validateForm(email, password) {
  let isValid = true;
  if (!email.includes("@")) {
    console.log("Error: Email must contain '@' symbol.");
    isValid = false;
  }
  if (password.length < 8) {
    console.log("Error: Password must be at least 8 characters long.");
    isValid = false;
  }
  if (isValid) {
    console.log("Form is valid!");
  }

  return isValid;
}
console.log("Test 1:", validateForm("test@example.com", "12345678"));
console.log("Test 2:", validateForm("testexample.com", "12345678"));
console.log("Test 3:", validateForm("test@example.com", "123"));
console.log("Test 4:", validateForm("testexample.com", "123"));



// Question 24: Temperature Converter
// Create a function convertTemperature that:

// Takes a temperature and a unit ("C" or "F") as parameters
// Converts Celsius to Fahrenheit: (C × 9/5) + 32
// Converts Fahrenheit to Celsius: (F - 32) × 5/9
// Returns the converted value with 1 decimal place
function convertTemperature(temp, unit) {
  let result;

  if (unit === "C") {
    result = (temp * 9 / 5) + 32;
  } else if (unit === "F") {
    result = (temp - 32) * 5 / 9;
  } else {
    return "Error: Invalid unit. Use 'C' or 'F'.";
  }

  return result.toFixed(1);
}
console.log(convertTemperature(0, "C"));    // freezing point
console.log(convertTemperature(100, "C"));  // boiling point
console.log(convertTemperature(98.6, "F")); // body temp
console.log(convertTemperature(32, "F"));   // freezing point
console.log(convertTemperature(25, "X"));   // invalid unit



// Question 25: Shopping Cart Array Operations
// Create an array cart = [] and write these functions:

// addItem(name, price): Adds item object to cart
// removeItem(name): Removes item by name
// calculateTotal(): Returns sum of all item prices
// applyDiscount(percent): Applies discount to total
// listItems(): Returns array of just item names
let cart = [];
function addItem(name, price) {
  cart.push({ name: name, price: price });
  console.log(name + " added to cart.");
}
function removeItem(name) {
  let index = cart.findIndex(item => item.name === name);

  if (index !== -1) {
    cart.splice(index, 1);
    console.log(name + " removed from cart.");
  } else {
    console.log(name + " not found in cart.");
  }
}
function calculateTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
}
function applyDiscount(percent) {
  let total = calculateTotal();
  let discountedTotal = total - (total * percent / 100);
  return discountedTotal.toFixed(2);
}
function listItems() {
  return cart.map(item => item.name);
}
addItem("Laptop", 999.99);
addItem("Mouse", 25.50);
addItem("Keyboard", 45.00);

console.log("Cart items:", listItems());
console.log("Total:", calculateTotal());

removeItem("Mouse");
console.log("Cart items after removal:", listItems());
console.log("Total after removal:", calculateTotal());

console.log("Total after 10% discount:", applyDiscount(10));