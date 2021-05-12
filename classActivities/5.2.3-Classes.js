// refactor your Animal function constructor and methods to use the class keyword
class Animal{
  constructor(name, color, weight, personality) {
  this.name =  name;
  this.color =  color;
  this.weight = weight;
  this.personality = personality;
  this.bio= `This is a ${this.name}. The color of this animal is ${this.animal}. It weighs ${this.weight} pounds. This animal has a ${this.personality} personality.`;
  }
    newBio(){
      console.log(this.bio);
    }

}
// extend the Animal class with a type of animal
class Cat extends Animal{
  constructor(name, color, weight, personality, height) {
    super(name, color, weight, personality);
    this.height = height;
  }
}
// add some unique methods and properties to the class extension

// create an instance of the class extension and call one of its methods
