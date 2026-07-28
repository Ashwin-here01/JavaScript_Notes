// Loops

for(let i=1; i <= 5; i++) {
    console.log("Harry");
}
// We cannot access the variable initialised inside a for statement... (It's scope is only upto the block)
// console.log("i =", i); // It'll give error

let count;
for(count=0; count < 5; count++) {
    console.log(count);
}

let num = 1;
for(num; num<=5; num++) {
    console.log("This is", num);
}

// for-of loop (It is for string and array)
let str = "My name is Harry";
for(let val of str) { // No need to initialise or provide stopping condition to iterator
    console.log(val);
}
str = "This is a string"
count = 0;
for(let val of str) {
    count++;
}
console.log("The lenght of the string is:", count);

// for-in loop (It is for objects and array)
const student = {
    name : "Harry",
    roll : 1234,
    marks : 99,
    age : 19,
    isPass : true,
    fname : "Harrypup",
    mname : "Harrymum"
};
for(let key in student) {
    console.log("Key =", key, "Value =", student[key]); // NOTE: The key is not written in "" becuase its a variable
}
let variable = "fname";
console.log(student.fname);



// Strings
// Strings are Immutable in JS
let name = "Harry";
let name2 = 'Hary';

let size = name.length;
console.log(size);
let size2 = name2.length;
console.log(size2);

console.log(name[3]); // Accessing through indices
console.log(name2[0]);


// Template literals
let specialString = `This is template literal(Special type of string)`; // ` is called back tick
console.log(specialString);
console.log(typeof specialString); //String

const obj = {
    item : "Pen",
    price : 10
};
console.log("The price of", obj.item, "is", obj.price, "rupees");
let output = `The price of ${obj.item} is ${obj.price} rupees`; // Here price(10) becomes the part of this string so its not a number anymore in this string
console.log(output);
console.log(`The sum is ${1 + 2 + 3}`);
// ${variableName} is called placeholder
// This process is called string interpolation


// Escape sequence
console.log("My name is\nHarry");
console.log("My name is\tHarry");
console.log("Honey\tHarry".length); //11 // Escape sequence is considered as a single character in string length


// String Methods (Method jo kuchh kam karta h)
str = "Harry";
console.log(str.toUpperCase());
let newstr = str.toUpperCase(); // It returns a new string with uppercase value and don't change the previous string
console.log(newstr);
console.log(str);
str = str.toUpperCase();
console.log(str);

console.log(str.toLowerCase());
newstr = str.toLowerCase();
console.log(newstr);

str = "    This is    Harry     ";
console.log(str.trim()); // It trims the whitespaces from starting and ending only

str = "0123456789";
console.log(str.slice(3, 7)); // Ending index is non-inclusive and also optional
console.log(str.slice(3));

str = "My name is ";
let str2 = "Harry";
let res = str.concat(str2);
console.log(res);
res = str2 + str;
console.log(res);
res = "Hello" + 123 + "This is me";
console.log(res);

str = "Harry";
res = str.replace("H","M");
console.log(res);
console.log(str.replace("r","l")); // Only the first matching value will get replaced
console.log(str.replaceAll("r","l"));
str = "Harry";
str[2] = "l"; // This will not affect the original string because strings are immutable
str = str.replace(str[2],"l");
console.log(str);

str = "Harry";
console.log(str.charAt(4));
console.log(str[4]);