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
    let listToppings = pizzaToppings.toString();
    console.log(listToppings);
    return pizzaToppings[i];
  }
};
greetCustomer("Jerry");

getPizzaOrder = (size, crust, ...toppings) => {
  console.log(
    `One ${size}${crust} crust pizza with ${toppings} coming right up!.`
  );
  return (toppingArr = [size, crust, toppings]);
};

getPizzaOrder(" large", " thin", " pepperoni", " sausage");

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
  console.log(
    `Order up! Here's your${pizza.size}${
      pizza.crust
    } crust pizza with${pizza.toppings.toString()}`
  );
};
servePizza(pizza);
