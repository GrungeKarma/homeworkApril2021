const pizzaPlace = "Tony's Pizza";

let numberOfToppings = 10;
let orderOfToppings = 10;

console.log(`Here at ${pizzaPlace} we offer ${numberOfToppings} toppings!`);

if (orderOfToppings >= 9) {
  console.log(`Quality`);
} else if (orderOfToppings >= 0) {
  console.log(`We do not serve fools!`);
} else {
  console.log(`A whole lot of pizza!`);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
