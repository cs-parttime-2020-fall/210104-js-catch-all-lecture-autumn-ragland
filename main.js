console.log(`21 01 04 JS "Catch All" Lecture`);

// Review
// Declare a function that accepts one parameter and returns the message : "You passed PARAMETER". 
function alertMessage(message){
    return(`You passed in ${message}`);
}

// Prompt for input in the browser and pass the value entered the the function declared above. 
let userMessage = alertMessage(prompt("Enter a message!"))

// Save the return value of the function in a variable and alert the variable in the browser. 
alert(userMessage);

// -----------------------------------------

// Declare an empty array. 
let userArray = [];

// In the browser, prompt to add an element to the array until "q" is entered. 
let userElement = prompt("Add an element to the array!")
while(userElement != "q"){
    userArray.push(userElement);
    userElement = prompt("Add an element to the array!");
}

// Once "q" has been entered iterate through all elements in the array, outputting each element in the browser.
for(let i = 0; i < userArray.length; i++){
    console.log(userArray[i]);
}

// -----------------------------------------

// Scope
// Declare a variable `userName` in the global scope
let userName = "Autumn";
console.log(userName);

// Redefine the variable in the global scope
userName = "Chris";
console.log(userName);

// Redefine the variable in the function `updateUsername` and call the function
function updateUsername() {
    userName = "Monique";
}
updateUsername();
console.log(userName);

// Output the value of the variable in the function `printUsername` and call the function
function printUsername() {
    let userName = "Brown";
    console.log(userName);
}
printUsername();
console.log(userName);

// -----------------------------------------

// Declare a function `userAge1` that declares a variable `userAge` and outputs that value to the console. Call the function.
function userAge1() {
    let userAge = 25;
    console.log(userAge)
}
userAge1();
// console.log(userAge);

// Repeat step one with functions `userAge2` and `userAge3` using different values for `userAge`
function userAge2() {
    let userAge = 27;
    console.log(userAge)
}
userAge2();
// console.log(userAge);
function userAge3() {
    let userAge = 29;
    console.log(userAge)
}
userAge3();
// console.log(userAge);

// Declare a variable `userAge` in the global scope. Output the value to the console.
let userAge = 31;
console.log(userAge);

// -----------------------------------------

// Declare a function `subtractNumbers` that accepts two parameters and subtracts the values.
function subtractNumbers(num1, num2) {
    console.log(num1 - num2);
}
// Call the function in a `try` block passing valid parameters and invalid parameters. 
try {
    // subtractNumbers(10, 19);
    subtractNumbers(okay, 19);
} catch (err) { // `catch` block that outputs errors to the console
    console.warn(err)
} finally { // `finally` block that outputs the message "Try Catch Complete" to the console
    console.log("Try Catch Complete");
}

// -----------------------------------------

// Prompt the user to enter a day of the week
let weekDay = prompt("Enter a day of the week");

// Declare a switch statement that check that value entered
switch (weekDay) {
    // If the user enters monday alert the message : "Monday is Lunes in Spanish". Create a case for each day of the week following the same structure.
    case "monday" :
    case "Monday":
        alert(`Monday is Lunes in Spanish`);
        break;
    case "tuesday" :
    case "Tuesday":
        alert(`Tuesday is Martes in Spanish`);
        break;
    case "wednesday" :
    case "Wednesday":
        alert(`Wednesday is Miercoles in Spanish`);
        break;
    case "thursday" :
    case "Thursday":
        alert(`Thursday is Jueves in Spanish`);
        break;
    case "friday" :
    case "Friday":
        alert(`Friday is Viernes in Spanish`);
        break;
    case "saturday" :
    case "Saturday":
        alert(`Saturday is Sabado
        in Spanish`);
        break;
    case "sunday" :
    case "Sunday":
        alert(`Sunday is Domingo in Spanish`);
        break;
    
    // If the user does not enter a day of the week alert the message  : "You did not enter a day of the week"
    default :
        alert(`${weekDay} is not a valid day of the week`)
}

// Update the switch case to provide the same message whether the users enter the day of the week in lower case or with initial caps