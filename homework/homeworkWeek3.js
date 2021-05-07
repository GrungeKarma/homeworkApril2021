/* eslint-disable no-undef */
let pizzaToppings = [
	' pepperoni',
	' sausage',
	' ham',
	' peppers',
	' feta',
	' bacon',
];
greetCustomer = (name) => {
	for (let i = 0; i < pizzaToppings.length; i++) {
		console.log(`Welcome to Tony's Pizza House ${name}, our toppings are:`);
		let lastTopping = pizzaToppings.pop();
		let listToppings = pizzaToppings.toString();
		console.log(listToppings + `, and` + lastTopping);
		return pizzaToppings[i];
	}
};
//function that greets customers and prints toppings by iterating through the pizzaToppings array

greetCustomer('Jerry');

getPizzaOrder = (size, crust, ...toppings) => {
	let toppingMaster = [
		' pepperoni',
		' sausage',
		' ham',
		' peppers',
		' feta',
		' bacon',
	];

	let test = toppings.every((element) => toppingMaster.includes(element));
	if (test === true) {
		if (toppings.length <= 0) {
			console.log(`One ${size}${crust} crust cheese pizza coming right up!`);
		} else {
			console.log(
				`One ${size}${crust} crust pizza with ${toppings} coming right up!.`
			);
		}
		return (toppingArr = [size, crust, toppings]);
	} else {
		console.log(
			'🤷 ' +
				`We do not offer one or more of the toppings you requested. Please try again.` +
				' 🤷'
		);
		process.exit();
	}
};

// function that processes the order parameters and kills the process if the order toppings that do not match the master list

getPizzaOrder(' large', ' thin', ' pepperoni', ' ham', ' poop');
preparePizza = (toppingArr) => {
	console.log(`###Cooking Pizza###`);
	let order = {
		size: toppingArr[0],
		crust: toppingArr[1],
		toppings: toppingArr[2],
	};
	return (pizza = order);
};

//function that processes the customers order into a pizza object

preparePizza(toppingArr);

servePizza = (pizza) => {
	if (pizza.toppings.length <= 0) {
		console.log(
			`Order up! Here's your${pizza.size}${pizza.crust} crust cheese pizza!`
		);
	} else {
		console.log(
			`Order up! Here's your${pizza.size}${pizza.crust} crust pizza with:`
		);

		let singleTopping = pizza.toppings.toString();
		let lastTopping = pizza.toppings.pop();
		let listToppings = pizza.toppings.toString();

		if (pizza.toppings.length <= 0) {
			console.log(singleTopping);
		} else {
			console.log(listToppings + `, and` + lastTopping);
		}
	}
};

// function that prints the customers order

servePizza(pizza);
