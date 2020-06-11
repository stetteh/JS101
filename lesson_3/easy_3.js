//Question 1
/*Write four different ways to remove all of the elements
 from the following array:*/

let numbers = [1, 2, 3, 4];

while (numbers.length) {
  numbers.pop();
}
//numbers []

while (numbers.length) {
  numbers.shift();
}
//numbers []

numbers.splice(0, numbers.length);
//numbers []

numbers.length = 0;
//numbers []

//Question 2
//What will the following code output?

console.log([1, 2, 3] + [4, 5]); //1,2,34,5

//Question 3
//What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1); //outputs hello there, because strings are immutable

//Question 4
//What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); //[ { first: 42 }, { second: 'value2' }, 3, 4, 5 ] str1 and str2 points to the same object

//Question 5
/*The following function unnecessarily uses two return statements to return
boolean values. How can you eliminate the unnecessary duplication?*/

function isColorValid(color) {
  return color === "blue" || color === "green";
}

const isColorValid1 = color => color === "blue" || color === "green";

let color1 = isColorValid('red');
console.log(color1); //returns false
let color2 = isColorValid1('green');
console.log(color2); //returns ture
