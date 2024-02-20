console.log("Hello there") // <-- print() -- prints information to the console in your browser
let robot; //<-- Declaring a variable with let but assigning no value
 //      ^ Semi-colon, kinda like punctuation

 /**Multi-line comment
 * 
 * 
 * -- Variable Decloration --
 *  var, let, const
 * 
 * -- Types --
 *  strings, integers, floats, booleans, arrays, object(dictionary)
 * 
 * 
 * -- Functions --
 *  regular - named functions
 *  arrow fuunctions -- anonymous functions like lambda in pytho
 * 
 * -- Loops and built in functions --

 */

// something = "A bagel" <-- do not use this method -->

// -- var - redeclared and reassigned --
// declaring variable
// declaring happens when you use the vaar, let, or const keywords
// assigninng happends after decleration, if the variable was declared and not assigned
var person = "Jei'A";
console.log(person)

// -- Variable redeclaration --
var person = "Alaia";
console.log(person)

// -- reassigning variables
person = "Fatman";
console.log(person)

// Let can be reassigned but not redeclared
let maximal = "Cheetor";
console.log(maximal)

// Reassigning a let variable
maximal = "Rat Trap";
console.log(maximal)

// Cannot redeclare a variable with Let
// let maximal = "Optimus Primal" -- cannot redeclare a block scoped variable

// Assigning 'Armed variable' or a variable that has been declared but has not been set
robot = "Mega Man";
console.log (robot)


// Const cannot be reassigned or redeclared
// nice fore functions so you dont accidentally reuse the same function
const zFighter = "Krillin";
console.log(zFighter)

// cannot redeclare block scoped variable with constant 
// identifier 'zfighter' has already been declared ---console error
// const zFighter = "Gohan";
// console error TypeError: Assignment to constant variable
// zfighter = 'Goku'

// Types in Javascript
// Strings, integers, floats, arrays, objects, booleans

// Integer
let someNumber = 31
console.log(someNumber)
console.log( typeof someNumber)

// float
let someFloat = 3.14
console.log(someFloat)
console.log(typeof someFloat)

// String
let someString = 'kamehame ha'
console.log(someString)
console.log(typeof someString)

// array - llist in python
let someArray = [1, 2, 3, 4]
console.log(someArray)
console.log(typeof someArray)
console.log( someArray[length])
console.log(someArray.length)
// len(someArray)

// objects -- dictionary in python 
let someObject = {
    test: "Please Test Me!", // Keys dont need qoutes, but is recommended
    "test_2": "still need testing!"
}
console.log(someObject)

//                                      ------> Math operators in javascript <------
// ------> Addition <------
let sum = 5 + 5
console.log(sum)

//             addtion shorthand
sum += 5
//              Increment by 1
sum++ // <----- specefic for incrementing by 1
console.log(sum)


// ------> Subtraction <------
let diff = 10 - 5
console.log(diff)
// shorthand
diff -= 2
// decrementing/subtract just 1
diff --


// ------> Multiplacation <------
let product = 5 * 5
console.log(product)
//         Shorthand
product *= 5
console.log(product)

// ------> Exponent <------
let exponent = 6 ** 2
//        Shorthand
exponent ** 2
console.log(exponent)


// ------> Modulo <------
let mod = 5 % 2
console.log(mod)


// ------> Some other math stuff <------
let findFloor = Math.floor(26.7)
console.log(findFloor)

let findseal = Math.floor = Math.ceil(26.7)

let num = 5
let num2 = 2
let newFloor = Math.floor (num / num2)
console.log(newFloor)


//------> Weird Javascript typing <------
someFloat = 3.14
let crazyStuff = somefloat + '4'
// undefined, 7.14, 3.14 + 4, 3.144, typrerror
// Typing correction
console.log(crazyStuff)
console.log(typeof crazyStuff)

// python str(), int(), float()
//.tostring() --changes to string type
// parseInt (Thing to be intified. Changes to an integer whole number)
// parseFloat ( Thing to be floatified changes to a decimal number)

//ParseInt()
let string_num = '4'
newNum = somefloat = parseInt(string_num)



/**
 * 
 * 
 * 
 * 
 * =============JAVASCRIPT FUNCTIONS ========
 */


// ------> Regular normal boring functions <------
// def function_name(param1; param2):
//          do something here

function addNums(){
    let num = 4
    let num2 = 5
    console.log("This is a reguar named function")
    return num + num2
};

// ------> Calling a function <------
// addNums()
// console.Logging function call so we can see output in the console
console.log(addNums())

// ------> Function with parameters <------
function subnums(x,y){
    return x -y
}

// -------> Calling a function with parameters <------
console.log(subNums(100, 74))

// ------> Defining a function with a variable name <------
const addNums2 = function(num1, num2){
    return num1 + num2
}

console.log(addNums2(17, 59))
// Setting variable to the output of a function
let subtraction = subNums (10, 7)
console.log(subscription)
// Setting new variable to the function itself
//and calling that new variable as a function
let subMoreNums = subNums
console.log(subMoreNums(50, 23))

//ES6
/*
            Arrow functions
            similar to the python lambda, arrow functions allow us to create functions
            on the fly

            If there is only one parameter, the arrow function does need parameters
*/


// Arrow function with no parameters
let sayHello = () =>{
    return 'Hello There!'
}

console.log(sayHello())


// No parameters with single parameter
let sayHelloToPerson = name =>{
    return 'Hello there, ${name}!'
}
console.log(sayHelloToPerson('General Grievous'))


// ------> Arrow function with more than one parameter <------
// need parentheses with more than 1 parameter
const addNum3 = (num1, num2) =>{
    return num1 + num2
}

console.log(addnum3(1000, 367254))

// JavaScript Conditionals
