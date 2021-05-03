/* eslint-disable for-direction */
/* eslint-disable no-undef */

let pizzaToppings = [
  " pepperoni",
  " sausage",
  " ham",
  " peppers",
  " feta",
  " bacon"
];

greetCustomer = name => {
  for (let i = 0; i < pizzaToppings.length; i++) {
    console.log(`Welcome to Tony's Pizza House ${name}, our toppings are:`);
    let lastTopping = pizzaToppings.pop();
    let listToppings = pizzaToppings.toString();
    console.log(listToppings + `, and` + lastTopping);
    return pizzaToppings[i];
  }
};
greetCustomer("Jerry");

getPizzaOrder = (size, crust, ...toppings) => {
  console.log(toppings);
  if (toppings.length <= 0) {
    console.log(`One ${size}${crust} crust cheese pizza coming right up!`);
  } else {
    console.log(
      `One ${size}${crust} crust pizza with ${toppings} coming right up!.`
    );
  }
  return (toppingArr = [size, crust, toppings]);
};

getPizzaOrder(" large", " thin");

preparePizza = toppingArr => {
  console.log(`###Cooking Pizza###`);
  let order = {
    size: toppingArr[0],
    crust: toppingArr[1],
    toppings: toppingArr[2]
  };
  return (pizza = order);
};
preparePizza(toppingArr);

servePizza = pizza => {
  if (pizza.toppings.length <= 0) {
    console.log(
      `Order up! Here's your${pizza.size}${pizza.crust} crust cheese pizza!`
    );
  } else {
    console.log(
      `Order up! Here's your${pizza.size}${pizza.crust} crust pizza with`
    );

    let lastTopping = pizzaToppings.pop();
    let listToppings = pizzaToppings.toString();
    console.log(listToppings + `, and` + lastTopping);
  }
};
servePizza(pizza);
