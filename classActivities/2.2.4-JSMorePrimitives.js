// create five variables and assign them values
// each variable should reference a different primitive data type
// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable

const name = "Anthony";
let age = 30;
let happy = true;
let student = null;
let mindPowers;
//You are not supposed to know about these.

// print the type of each variable in this order:
// string, number, boolean, undefined, null

console.log(typeof name);
console.log(typeof age);
console.log(typeof happy);
console.log(typeof student);
console.log(typeof mindPowers);

// create a variable that references a template literal
// inside the template literal, use two variables

let aboutMe = `My name is ${name} and I am ${age} years old`;
console.log(aboutMe);


// reassign the value of the variable that references "null"

student = "hopefully not for long";

// print the value and its type

console.log(typeof student);
console.log(student);

// print a variable that causes a ReferenceError

//console.log(values)

// alter the previous line to no longer cause a ReferenceError
