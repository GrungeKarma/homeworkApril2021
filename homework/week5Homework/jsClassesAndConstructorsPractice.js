//In a .js file, create a few classes. Create one "general category" class, then two more specific //classes which extend from the first class.
//
//For example: Perhaps you are creating a webstore that sells video games and game consoles.
//
//- You could create a general `Item` class to hold properties that any and every item for sale //shares in common, like `id`, `name`, or `price`.
//- Then, extend `Item` with a class for `GameConsoles` and a class for `VideoGames` and include //properties specific to each _category_ of item.
//
//In a .js file, create a few classes. Create one "general category" class, then two more specific //classes which extend from the first class.
//
//For example: Perhaps you are creating a webstore that sells video games and game consoles.
//
//- You could create a general `Item` class to hold properties that any and every item for sale //shares in common, like `id`, `name`, or `price`.
//- Then, extend `Item` with a class for `GameConsoles` and a class for `VideoGames` and include //properties specific to each _category_ of item.

function Item(id, price, description, platform, genre) {
  this.id = id;
  this.price = price;
  this.description = description;
  this.platform = platform;
  this.genre = genre;
}

let gameOne = new Item(
  "Rimworld",
  35,
  "You take control of a colony to ensure survival.",
  "PC",
  "Colony Sim"
);
console.log(gameOne);

let gameTwo = new Item(
  "Odd World: New and Tasty",
  20,
  "Guide abe through Odd World to save his people",
  "Pc",
  "Platformer"
);
console.log(gameTwo);

let gameThree = new Item(
  "Kenshi",
  30,
  "The world has ended, what will you do with your time?",
  "Pc",
  "SandBox"
);
console.log(gameThree);

class HardcopyGame extends Item {
  constructor(id, price, description, platform, genre, hardcopy) {
    super(id, price, description, platform, genre);
    this.hardcopy = hardcopy;
  }
}

let gameFour = new HardcopyGame(
  "Noita",
  15,
  "You are a witch. What spells will you make?",
  "Pc",
  "SandBox/Platformer",
  true
);
console.log(gameFour);

class SpecialEdition extends Item {
  constructor(id, price, description, platform, genre, specialEdition) {
    super(id, price, description, platform, genre);
    this.specialEdition = specialEdition;
  }
}

let gameFive = new SpecialEdition(
  "Baldur's Gate III",
  60,
  "Dropped in a DnD world, you have freedom to explore alone or with friends.",
  "Pc",
  "CRPG",
  true
);
console.log(gameFive);
