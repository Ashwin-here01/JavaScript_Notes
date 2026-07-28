// Storing method (funtion) in an object:

const student = {
    name : "Harry",
    age : 18,
    marks : 98.77,
    printMarks : function() {
        console.log("Marks:", this.marks); // this Keyword
    },
    printAge() {
        console.log("Age:", this.age);
    }
};

console.log(student.printMarks());
console.log(student.printAge());



// Prototype:
// Reference to an object
const employee = {
    calcTax() {
        console.log("The tax is 10%");
    }
};

const emp1 = {
    salary : 50000,
};

const emp2 = {
    salary : 40000,
    calcTax() {
        console.log("The tax is 20%");
    }
};

// console.log(emp1.calcTax()); // Gives error

emp1.__proto__ = employee;
// Can only give one prototype to an object

console.log(emp1.calcTax());

emp2.__proto__ = employee;

console.log(emp2.calcTax());
// If object and prototype has same method, object's method will be used



// Classes
class ToyotaCar {
    constructor(number) {
        console.log("Creating new object");
        this.number = number;
    }

    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
    
    setBrand(brand) {
        this.brand = brand;
    }
};

let fortuner = new ToyotaCar(1234);

console.log(typeof(fortuner)); // object
console.log(fortuner.start());
console.log(fortuner.number);
fortuner.brand = "fortuner";

let lexus = new ToyotaCar(); // See no error if we don't pass any argument during obj creation

lexus.setBrand("lexus");
console.log(lexus.number); // undefined
lexus.number = 5678;
console.log(lexus.number);



// Inheritance
class Person {
    constructor(name) {
        this.species = "Homo sapiens";
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    work() {
        console.log("Do nothing");
    }
};

class Doctor extends Person {
    constructor(speacialisation, name) {
        super(name); // To invoke parent class constructor
        this.spec = speacialisation;
    }
    work() { // Method Overriding: If parent class has the same fucntion, child's functino will work!
        console.log("Treats Patients");
    }
};

class Engineer extends Person {
    work() {
        super.eat();
        console.log("Solve Problems");
    }
};

let doc = new Doctor("Dentist", "Harry"); // Gives error if super() constructor not called
let eng = new Engineer();
console.log(eng.work());