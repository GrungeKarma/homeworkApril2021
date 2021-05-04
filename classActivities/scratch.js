/* eslint-disable no-undef */
let pizzaToppingsMaster = [
  " pepperoni",
  " sausage",
  " ham",
  " peppers",
  " feta",
  " bacon"
];

getPizzaOrder = (size, crust, ...toppings) => {
  isEqual = (toppings, pizzaToppingsMaster) => {
    for (x in test) {
      if (x === test) {
        console.log((result = true));
      } else {
        console.log((result = false));
      }
    }
    console.log(isEqual(toppings, pizzaToppingsMaster));
    if (toppings.length <= 0) {
      console.log(`One ${size}${crust} crust cheese pizza coming right up!`);
    } else {
      console.log(
        `One ${size}${crust} crust pizza with ${toppings} coming right up!.`
      );
    }
    return (toppingArr = [size, crust, toppings]);
  };
};
getPizzaOrder(" large", " thin", " pepperoni");
