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

var firstName = "alex" ;
var lastName = "SMITH";
var fullName = firstName + " " + lastName;

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
