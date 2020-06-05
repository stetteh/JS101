//Question 1
let numbers = [1, 2, 3];
numbers[6] = 5;
console.log(numbers); // returns [ 1, 2, 3, <3 empty items>, 5 ]
console.log(numbers[4]); // what will this line return?

//number[4] returns undefined.

//Question 2
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));

//Question 3
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
console.log(ages.hasOwnProperty('Spot')); //return false because Spot is not an object

//Question 4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
console.log(munstersDescription.charAt(0).toUpperCase() +
            munstersDescription.slice(1).toLowerCase());

//Question 5
console.log(false == '0'); //this returns true
console.log(false === '0'); //this returns false, the strict equality evaluates if both expressions are true

//Question 6
let ages1 = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 }; //Add entries for Marilyn and Spot to the object:

Object.assign(ages1, additionalAges);
console.log(ages1);
/*
{
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
}
*/

//Question 7
/*Determine whether the name Dino appears in the strings below
//-- check each string separately):
*/
let str3 = 'Few things in life are as important as' +
            'house training your pet dinosaur.';
let str4 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str3.includes('Dino')); //false
console.log(str4.includes('Dino')); //true

//Question 8
//How can we add the family pet, "Dino", to the following array?
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);
/*[
  'Fred',   'Barney',
  'Wilma',  'Betty',
  'Bambam', 'Pebbles',
  'Dino'
]*/

//Question 9
//How can we add multiple items to our array? ('Dino' and 'Hoppy')
flintstones.push('Dino', 'Happy');
console.log(flintstones);
/*[
  'Fred',   'Barney',
  'Wilma',  'Betty',
  'Bambam', 'Pebbles',
  'Dino',   'Dino',
  'Happy'
]*/

//Question 10
/*Return a new version of this sentence that ends just before the word house.
Don't worry about spaces or punctuation: remove everything starting from the
beginning of house to the end of the sentence.*/
let advice = "Few things in life are as important as house training your pet dinosaur.";
console.log(advice.slice(0, advice.indexOf('house'))); //Few things in life are as important as