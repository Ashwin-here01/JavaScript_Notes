age = 17;
name = "Honey";
price = 99.99;
x = null;
y = undefined;
isFollow = false;
isnotFollow = true;
console.log(name);
console.log(age);
console.log(price);
console.log(x);
console.log(y);
console.log(isFollow);
console.log(isnotFollow);
console.log('Harry');

// JS is a dynamically typed language:-
// That means we don't have to specify the datatype of a variable at first... We can store any datatype in any variable
price = "Ninety nine point nine nine"
console.log(price);


// var can be REDECLARED anytime in the code. NEVER use!!!
var singer = 'Taylor Swift';
var singer = 'Billie Eilish';
var singer = "Harry Styles";
console.log(singer);

// let can only be declared once and the value can change later. Its scope is only upto the block.
let fullName = "Blurryface";
fullName = "Olivia Rodrigo";
console.log(fullName);
let song;
song = "Love Story";
console.log(song);

{
    let a = 10;
    console.log(a);
}

{
    let a = 20;
    console.log(a);
}

// const is a constant value and CANNOT be changes throughout the code
// const MUST be initialised not only declared
const PI = 22/7;
console.log(PI);



let a; // By default undefined value
console.log(a);
a = 10;
console.log(a);

// const b; // This is an error





// Datatype:-

let year = 2025;
console.log(typeof year); // number

let height = 5.11;
console.log(typeof height); // number

let yourName = "Keshav Garg"
console.log(typeof yourName); // string

let going = true;
console.log(typeof going); // boolean

let r;
console.log(typeof r); // undefined

let q = null;
console.log(typeof q); // object


// Primitive datatype (Object):-

const Student = {
    fname : "Conan Gray",
    age : 23,
    marks : 69,
    isSinger : true
}; // Key : Value pair

console.log(Student);
console.log(typeof Student);
console.log(Student["fname"]);
console.log(Student.fname);
let key = "marks";
console.log(Student[key]); // NOTE: key is not written in "" because its a variable
// console.log(Student.key); // Though this is incorrect

Student["age"] = Student["age"] + 1;
Student.fname = "Troye Sivan";
console.log(Student["age"]);
console.log(Student.fname);