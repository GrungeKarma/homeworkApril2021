// Named Parameters
// write a function that takes two named parameters:
function testFunction(test1, test2, ...test3){
    console.log(test1); 
    console.log(test2);
    console.log(test3);
    console.log(test1 + test2 + test3);
    return(test1 + test2 + test3); 
}
testFunction(4,5);

// print each named parameter,
// then return the parameters added together
testFunction(38, 12, 18);
// invoke the function and pass in two numbers

// invoke the function and pass in more than two numbers

// invoke the function and pass in only one number

// change the function to set default values for the parameters

// again, invoke the function and pass in only one number

// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

// again, invoke the function and pass in more than two numbers