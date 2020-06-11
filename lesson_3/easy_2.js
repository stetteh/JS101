
//Question 1
/*Given a string, return a new string that replaces every occurrence of the word
 "important" with "urgent":*/
let advice = "Few things in life are as important as house training" +
               "your pet dinosaur. its very important";
console.log(advice.replace('important', 'urgent')); //Few things in life are as urgent as house training your pet dinosaur. its very important

//replaces all occurance of the string important
console.log(advice.replace(/important/g, 'urgent'));//Few things in life are as urgent as house trainingyour pet dinosaur. its very urgent

//Question 2
/*The Array.prototype.reverse method reverses the order of elements in an array,
and Array.prototype.sort can rearrange the elements in a variety of ways,
including descending.Both of these methods mutate the original array as shown
below. Write two distinct ways of reversing the array without mutating the
original array.Use reverse for the first solution, and sort for the second.*/
let numbers = [1, 2, 3, 4, 5];
let reversedArray = numbers.slice().reverse();
console.log(reversedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

numbers = [1, 2, 3, 4, 5];
let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
console.log(sortedArray); // [5, 4, 3, 2, 1]
console.log(numbers); // [1, 2, 3, 4, 5]

//Question 3
/*Given a number and an array, determine whether the number
is included in the array.*/
let number1 = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number2 = 8;  // false
let number3 = 95; // true

console.log(number1.includes(number2));
console.log(number1.includes(number3));

//Question 4
/*Starting with the string: show two different ways to put the
expected "Four score and " in front of it.*/
let famousWords = "seven years ago...";
let wordsToAdd = 'Four score and ';

console.log(wordsToAdd + famousWords);  //Four score andseven years ago...
console.log(wordsToAdd.concat(famousWords));  //Four score andseven years ago...

//Question 5
/*Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing
the number at index 2, so that the array becomes [1, 2, 4, 5].*/
let numbers1 = [1, 2, 3, 4, 5];
numbers1.splice(2,1);
console.log(numbers1); //[1, 2, 4, 5]

//Question 6
//Suppose we build an array like this:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

console.log(flintstones);
/*This code will create a nested array that looks like this:
["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

Create a new array that contains all of the above values, but in an
un-nested format:
[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]*/

let newFlinttones = [].concat(...flintstones);
console.log(newFlinttones);

//Question 8
/*How would you check whether the objects assigned to variables numbers
and table below are arrays?*/

let numbers2 = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

console.log(Array.isArray(numbers2));
console.log(Array.isArray(table));

//Question 9
/*Write two one-line expressions to count the number of lower-case t characters
in each of the following strings:*/

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log((statement1.match(/t/g) || []).length); //2
console.log((statement2.match(/t/g) || []).length); //0

//Question 10
/*Back in the stone age (before CSS), we used spaces to align things on the screen.
If we have a 40-character wide table of Flintstone family members,
how can we center the following title above the table with spaces?*/
let title = "Flintstone Family Members";
let padding = Math.floor((40 - title.length) / 2);
console.log(title.padStart(padding + title.length)); //       Flintstone Family Members