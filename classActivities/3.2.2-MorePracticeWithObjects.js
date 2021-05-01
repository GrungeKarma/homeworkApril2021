// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1")
};
// what will the following lines print?
obj[key];
obj.key;
obj["key"];

// create an object with at least four properties, each with a different data type
// name one of the four properties "collection" and set its value to an Array or Object
const groceries = {
  collection: {
    food: ["vegetables", "fruit", "candy", "chips", "yogurt"],
    toiletries: ["toothpaste", "deoderant"],
    cards: ["greeting", "gift cards"],
    lifeGoals: true
},
  people: {
    workers: ["cashier", "stockers", "welcomeParty"],
    shoppers: [2, 76, 36]
  }
};
// access a value in in "collection" property
console.log(groceries.collection.cards);
console.log(groceries.collection["cards"]);
console.log(groceries["collection"]);

// Nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};
// fill in your favorite movie and color below
obj["favorites"] = {
  movie: "Dark Knight",
  number: 7,
  color: "Black"
};
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];
console.log(obj);
// how many lines will the following for...of statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}
// use a template literal to print a sentence about your favorite movie and color
console.log(`Hello, my favorite movie is ${obj.favorites.movie}. I also like the color ${obj.favorites.color}.`)
// access the values "b", 4, and 6 from obj.list
console.log(obj.list[1]);
console.log(obj.list[4][1]);
console.log(obj.list[5].f);
