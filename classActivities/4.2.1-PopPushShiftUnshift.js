const nums = [0, 1, 2, 3, 4, 5, 6];
console.log(nums);
// remove each of the last two items with pop(), saving each item to a variable
let dropItem = nums.pop();
console.log(dropItem);
let dropItem2 = nums.pop();
console.log(dropItem2);
console.log(nums);
// remove each of the first two items with shift(), saving each item to a variable
let x = nums.shift();
console.log(x);
let x2 = nums.shift();
console.log(x2);
console.log(nums);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(dropItem2, dropItem);
console.log(nums);
nums.unshift(x, x2);
console.log(nums);
