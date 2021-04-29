/* eslint-disable no-undef */

let pizzaToppings = ["pepperoni", "sausage", "ham", "peppers", "feta", "bacon"];
//array of toppings
greetCustomers = name => {
  return `Hello ${name}, we have ${pizzaToppings[0]}, ${pizzaToppings[1]}, ${pizzaToppings[2]}, ${pizzaToppings[3]}, ${pizzaToppings[4]}, and ${pizzaToppings[5]} available.`;
};
console.log(greetCustomers("Jerry"));
