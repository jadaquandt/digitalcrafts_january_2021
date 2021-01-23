//ARRAYS

///Empty array
var myArray = [];

console.log(myArray);
//Fill in with details
myArray = ["Cat", "Dog", "Ferret", "Llama"];

console.log(myArray);
console.log('--.push()--');
//Using .push()  adds to the end of the array
myArray.push("Bird");

console.log(myArray.length);
console.log(myArray);
///Visual separator
console.log('--.unshift()--');
//Using .unshift() adds to the front of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
console.log(fruits);
///Visual separator
console.log('--.shift()--');
//Using .shift() removes one from the front of the array
var fruits = [ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);
fruits.shift();
console.log(fruits);
///Visual separator
console.log('--.pop()--');
//The pop() method removes the last element of an array, and returns that element.
