// create a constant variable (const)

const name = "Anthony";
console.log(name);
let age = 30
console.log(age)


//create a variable that can be reassigned (let)


// create three variables and assign them values of different data types (=)

let housing = "Apartment";
console.log( typeof housing)
let ownPet = false;
console.log( typeof ownPet)
let numberOfChildren = 1;
console.log(typeof numberOfChildren)

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal


// change the value referenced by a variable (dynamic typing)
ownPet = ":(";
console.log(ownPet);

// print the type of the variable you just changed (typeof)
console.log(typeof ownPet);

// create variables and give them values to complete the sentences that will print
// ? which variables need to be created?
// ? what type of data needs to go in each variable?
console.log(
  "Hello, my name is " + name + " and I live in an " + housing +". Sadley, " + ownPet + " I do not own a pet right now."
);
