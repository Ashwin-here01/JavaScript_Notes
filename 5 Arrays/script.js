// Arrays are heterogeneous
// Arrays are object with key = index
// Arrays are mutable in JS
// Dynamic

let het = [1, "Harry", 2, "Honey", 3, "Suraj"];
console.log(het);

marks = [99, 89, 88, 78, 87, 90, 45];
console.log(marks);
console.log(marks.length); // Property (Property jo koi value deti h)
heroes = ["Ironman", "Thor", "Scarlet Witch", 'Hulk'];
console.log(heroes);

console.log(typeof marks); //Object

// Accessing elements of array
console.log(marks[2]);
console.log(marks[100]); //undefined

// Mutability
console.log(marks);
marks[3] = 100;
console.log(marks);


// Looping over arrays
for(let i=0; i < heroes.length; i++) {
    console.log(heroes[i]);
}
// using for - of loop
cities = ["Delhi", 'Maharashtra', 'Chandigarh', "Punjab", 'Haryana'];
console.log(cities);
for(let el of cities) {
    console.log(el);
    console.log(el.toUpperCase());
}


// Array methods
cities.push("Gujrat"); //Adds at the end of the array. It returns the length of the new array
console.log(cities);
marks.push(67, 89, 90, 11, 99);
console.log(marks);

cities.unshift("Kolkata"); //Adds at the start of the array. It returns the length of the new array
console.log(cities);

let deletedItem = cities.pop(); //Deletes one item from the end. It return the deleted item.
console.log(cities);
console.log(`Deleted Item: ${deletedItem}`);

deletedItem = cities.shift(); //Deletes one item from the start. It return the deleted item.
console.log(cities);
console.log(`Deleted Item: ${deletedItem}`);

console.log(marks);
console.log(marks.toString()); //It converts the entire array into a single string separating values by ,   It does not affect the original array
console.log(marks);

let first = ["Harry", "Honey", 'Suraj'];
let second = ["Akash", "John"];
let third = ['Romeo', "Juliet", 'Taylor', 'Troye', "Ariana"];
let fourthNew = first.concat(second, third); //It returns a new array. Does not change the original arrays
console.log(first);
console.log(second);
console.log(third);
console.log(fourthNew);
fourthNew = first + second + third; //It returns a single string combining all the arrays
console.log(fourthNew);

console.log(cities);
console.log(cities.slice(1, 4)); //Ending index is non-inclusive and optional

let number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(number);
number.splice(3, 2, 101, 102, 103);
console.log(number);
number.splice(6, 0, 90); //Only add an element, no deletion
console.log(number);
number.splice(9, 1, 55); //Replace one value
console.log(number);
number.splice(12, 1); //Delete the index value
console.log(number);
deletedItem = number.splice(8); //Deletes all the consecutive values from the index passed and return the deleted values (String separated by ,)
console.log(`Deleted Item: ${deletedItem}`);
console.log(number)