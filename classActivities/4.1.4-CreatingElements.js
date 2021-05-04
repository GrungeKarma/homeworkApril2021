// create a new unordered list (ul) element
const newUl = document.createElement("ul");

// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar").remove("p");
// add your new ul element to the nav-bar
document.querySelector;

// create two new list item (li) elements, and add some text to them
const listItem = document.createElement("li");
const listItem2 = document.createElement("li");
listItem.textContent = "yay!";
listItem2.textContent = "boo!";
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar").appendChild(listItem);
document.querySelector(".nav-bar").appendChild(listItem2);
