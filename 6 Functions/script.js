function printFunction() {
    console.log("This is a function");
    console.log("We are learning JavaScript:)");
}
printFunction();

function print(msg) { //Parameter
    console.log(msg);
}
print("My name is Harry");  //Argument
print(123);

function sum(x, y) {
    console.log("Sum =", x + y);
}
let a = 10;
let b = 20;
sum(a, b);
sum(22, 55);

function sumreturn(x, y) {
    return x + y;
}
let result = sumreturn(a, b);
console.log(result);


// Arrow function
const arrowsum = (x, y) => { //arrowsum is just a variable and can also store some normal value like 5, but here it is a function variable
    return x + y;
};
result = arrowsum(a, b);
console.log(result);

const arrowmul = (x, y) => {
    return x*y;
};
console.log(arrowmul(a,b));

const printHello = () => {
    console.log("Hello!");
};
printHello();



// Method is function only which is bind to a specific datatype only
// Functions in JS can also be passed or returned from another function
// Callback function: Function which is passed as an argument to another function
// Higher Order Function/Method: Are Functions/Methods which either take another function as an argument or return it (e.g. forEach)
// forEach only used for Arrays and not for strings
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printChar(val) {
    console.log(val);
});

arr.forEach((val) => {
    console.log(val);
});

let cities = ["Delhi", "Chandigarh", 'Haryana'];
cities.forEach((val) => {
    console.log(val.toUpperCase());
});

// Three arguments inside forEach -> value, index, array
cities.forEach((val, idx, arr) => {
    console.log(val, idx, arr)
});

let upper = (str) => {
    console.log(str.toUpperCase());
};
cities.forEach(upper);


// Map is similar to forEach, but it returns a new array
arr.map((val) => {
    console.log(val);
});

let newArr = arr.map((val) => {
    return val*val;
});
console.log(newArr);


// Filter
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even = arr.filter((val) => {
    return val%2 === 0;
});
console.log(even);


// Reduce -> Used when we need a single output from many values
arr = [1, 2, 3, 4, 5];
let output = arr.reduce((prev, curr) => {
    return prev + curr;
});
console.log(output);

arr = [5, 6, 1, 3, 8, 0];
let max = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
});
console.log(max);