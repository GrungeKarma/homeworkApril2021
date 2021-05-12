// create a function constructor that works as a template for an Animal
function Animal(name, color, weight, personality){
  this.name =  name;
  this.color =  color;
  this.weight = weight;
  this.personality = personality;
  this.bio= `This is a ${this.name}. The color of this animal is ${this.animal}. It weighs ${this.weight} pounds. This animal has a ${this.personality} personality.`;
}
// include properties for name, type, weight, etc.

// create a new instance on an Animal
garfield = new Animal("Garfield", "orange", 15, "sassy");
console.log(garfield.bio);


// add methods to the Animal prototype
Animal.prototype.newBio = function (){
  console.log(this.bio);
};


// attach a method directly to the Animal instance that "overwrites" a prototype method
garfield.newBio = function (){
  console.log("I am not happy");
};
garfield.newBio();
