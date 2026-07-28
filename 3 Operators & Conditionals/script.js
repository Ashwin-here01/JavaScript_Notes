let a = 10;
let b = 20;
console.log(a+b);
console.log("a + b = ", a+b);
console.log("a / b = ", a/b, "Focus the answer is in floating point");

let base = 5;
let power = 3;
console.log(base, "to the power", power, "=", base ** power);

// Comparison Operator
a = 5;
b = "5"; // JS will implicitly first convert it into number before comparing with another number
console.log("a == b", a == b); //true

// === / !== also checks the datatype (Stricter version of == / !=)
console.log("a === b", a === b); //false
// Mostly use this one only!



// Conditional Statements

let mode = "light";
let color;

if(mode === "dark") {
    color = "black";
}

if(mode === "light")
    color = "white";

console.log(color);

let age = 78;

if(age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You cannot vote!");
}

// Ternary operator
age = 19;
let adult;
age >= 18 ? console.log("You can vote") : console.log("You cannot vote");
adult = age >= 18 ? "Adult" : "Not Adult";
console.log(adult);

let digit = console.log("Harry");
console.log(digit); //undefined because console.log() does not return anything, it returns undefined