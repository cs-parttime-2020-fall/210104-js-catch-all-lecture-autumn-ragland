# 21 01 04 JS "Catch All" Lecture

## Set Up
1. Create an html file with an `h1` rendering the assignment title
1. Create a JS file 
1. Link the JS file before the closing `body` tag using the `script` tag
1. Open the HTML file in the browser
1. Print the assignment title in the browser from the JS file to be sure that files are linked correctly

## Lecture 
### Review

1. Declare a function that accepts one parameter and returns the message : "You passed PARAMETER". Prompt for input in the browser and pass the value entered into the function declared above. Save the return value of the function in a variable and alert the variable in the browser. 

1. Declare an empty array. In the browser, prompt to add an element to the array until "q" is entered. Once "q" has been entered iterate through all elements in the array, outputting each element in the console.

### Global Scope

1. Declare a variable `userName` in the global scope
1. Redefine the variable in the global scope
1. Redefine the variable in the function `updateUsername` and call the function
1. Output the value of the variable in the function `printUsername` and call the function

### Local Scope

1. Declare a function `userAge1` that declares a variable `userAge` and outputs that value to the console. Call the function.
1. Repeat step one with functions `userAge2` and `userAge3` using different values for `userAge`
1. Declare a variable `userAge` in the global scope. Output the value to the console. 

### Try Catch

1. Declare a function `subtractNumbers` that accepts two parameters and subtracts the values.
1. Call the function in a `try` block passing valid parameters and invalid parameters. 
1. Add a `catch` block that outputs errors to the console
1. Add a `finally` block that outputs the message "Try Catch Complete" to the console

### Switch Statement

1. Prompt the user to enter a day of the week
2. Declare a switch statement that checks that value entered
3. If the user enters monday alert the message : "Monday is Lunes in Spanish". Create a case for each day of the week following the same structure.
```
Monday : Lunes
Tuesday : Martes
Wednesday : Miercoles
Thursday : Jueves
Friday : Viernes
Saturday : Sabado
Sunday : Domingo
```
4. If the user does not enter a day of the week alert the message  : "You did not enter a day of the week"
5. Update the switch case to provide the same message whether the users enter the day of the week in lower case or with initial caps
