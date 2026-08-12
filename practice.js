/*
const product = {
    name : "Parker Jotter Standard CT Ball Pen (Black)",
    rating : 4,
    price : 270,
    offer : 5
};

console.log(product);
console.log(product.name);
console.log(product.rating);
console.log(product.price);
console.log(product.offer);

let num = 17;
if(num % 2) {
    console.log("Odd");
} else {
    console.log("Even");
}

let num = prompt("Enter a number:");

if(num % 5) {
    console.log("Not a multiple of 5");
} else {
    console.log("Multiple of 5");
}

let marks = prompt("Enter your marks:");
let grade;

if(marks >= 80 && marks <= 100) {
    grade = "A";
} else if(marks >= 70 && marks <= 79) {
    grade = "B";
} else if(marks >= 60 && marks <= 69) {
    grade = "C";
} else if(marks >= 50 && marks <= 59) {
    grade = "D";
} else if(marks >= 0 && marks <= 49) {
    grade = "F";
} else {
    grade = "Invalid Input";
}
if (grade === "Invalid Input") {
    console.log(grade);
} else {
    console.log("Grade:", grade);
}

for (let i = 0; i <= 100; i++) {
    if(i % 2 === 0) {
        console.log(i);
    }
}

let gamenum = 53;
let i = 0;
do {
    i = prompt("Enter a number:");
} while (i != gamenum);
console.log("You entered the correct number");

let name = prompt("Enter your full name (without spaces):");
let username = "@" + name + name.length;
console.log(`Username: ${username}`);

let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i=0; i < marks.length; i++) {
    sum += marks[i];
}
console.log("Average:", sum/marks.length);

let price = [250, 645, 300, 900, 50];
console.log(price);
for (let i=0; i < price.length; i++) {
    price[i] -= (price[i]/10);
}
console.log(price);

let companies = ["Bloomberg", 'Microsoft', 'Uber', "Google", 'IBM', "Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1, 1, "Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);

function vowel(str) {
    let sum = 0;
    for(let letter of str) {
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === "o" || letter === 'u' || letter === 'A' || letter === 'E' || letter === "I" || letter === "O" || letter === "U") {
            sum++;
        }
    }
    return sum;
}
let numofvowel = vowel("This is me... If you  wanna learn JS ejaculate and evacuate");
console.log(numofvowel);
const arrowVowel = (str) => {
    let sum = 0;
    for(let letter of str) {
        if(letter === 'a' || letter === 'e' || letter === 'i' || letter === "o" || letter === 'u' || letter === 'A' || letter === 'E' || letter === "I" || letter === "O" || letter === "U") {
            sum++;
        }
    }
    return sum;
}
numofvowel = vowel("This is me... If you  wanna learn JS ejaculate and evacuate");
console.log(numofvowel);

let number = [2, 3, 7, 4, 9, 11, 25];
number.forEach(function square(num) {
    console.log(num*num);
});
number.forEach((num) => {
    console.log(num*num);
});

let marks = [99, 89, 67, 92, 78, 10, 96];
let highMarks = marks.filter((val) => {
    return val > 90;
});
console.log(highMarks);

let num = prompt("Enter a number:");
let numarr = [];
for(let i=0; i<num; i++) {
    numarr[i] = i + 1;
}
console.log(numarr);
let sum = numarr.reduce((prev, curr) => {
    return prev + curr;
});
console.log(sum);
let prod = numarr.reduce((prev, curr) => {
    return prev * curr;
});
console.log(prod);



// ChatGPT questions Practice
// 1:-
function evenOdd(num) {
    if(num%2 === 0) {
        return "even";
    }
    return "odd";
}
let number = prompt("Enter a number:");
let isOddEven = evenOdd(number);
console.log(`The number ${number} is ${isOddEven}`);

// 3:-
function largeNum(arr) {
    let greatest = arr.reduce((res, curr) => {
        return res > curr ? res : curr;
    });
    return greatest;
}
let arr = [1, 5, 67, 34, 89 ,12, 100, 123, 67];
console.log(arr);
console.log(`The greatest number in the array is ${largeNum(arr)}`);

// 4:-
let largeNum = (arr) => {
    let greatest = arr.reduce((res, curr) => {
        return res > curr ? res : curr;
    });
    return greatest;
}
let arr = [1, 5, 67, 34, 89 ,12, 100, 123, 67];
console.log(arr);
console.log(`The greatest number in the array is ${largeNum(arr)}`);

// 5:-
function strReverse(str) {
    let temp = "";
    let length = str.length;
    for(length; length > 0; length--) {
        temp = temp.concat(str[length-1]);
    }
    return temp;
}
let str = "Harry";
console.log(str);
let reverseStr = strReverse(str);
console.log(reverseStr);

// 6:-
function grtr(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));
let greater = grtr(a, b);
console.log(`The greater out of ${a} and ${b} is ${greater}`);

// 7:-
function charCount(str, char) {
    let count=0;
    for(let val of str) {
        if(val === char) {
            count++;
        }
    }
    return count;
}
let str = "My name is Harry";
let aCount = charCount(str, "a");
console.log(`The number of times "a" appeared in the string is ${aCount}`);

// 8:-
function isPrime(num) {
    let i = 2;
    while(i < num) {
        if(num%i === 0) {
            return "not a prime number";
        }
        i++;
    }
    return "a prime number";
}
let number = Number(prompt("Enter a number:"));
console.log(`The number ${number} is ${isPrime(number)}`);

// 9:-
let square = (num) => {
    return num*num;
}
let number = Number(prompt("Enter a number:"));
console.log(`The square of the number ${number} is ${square(number)}`);

// 10:-
function arrContain(arr, char) {
    for(let val of arr) {
        if(val == char) {
            return "array contain that character";
        }
    }
    return "array does not contain that character";
}
let arr = ["a", 6, true, 67.89, "Harry", 43, null, undefined];
let char = "Harry";
console.log(`Character: ${char} and ${arrContain(arr, char)}`);

// 11:-
let arr = [1, "Harry", "Your name", "Yo", 90.98, null];
arr.forEach((val, index) => {
    console.log(val, index);
});

// 12:-
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArr = arr.map((val) => {
    return val*2;
});
console.log(arr);
console.log(newArr);

// 13:-
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = arr.filter((val) => {
    return val%2 === 0;
});
console.log(arr);
console.log(evenArr);

// 14:-
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(arr);
console.log(sum);

// 15:-
let strArr = ["Harry", "John", 'Romeo', 'Taylor', 'Conan Gray', "Olivia"];
let lenArr = strArr.map((val) => {
    return val.length;
});
console.log(strArr);
console.log(lenArr);

// 16 (I have doubt):-
function unq(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
}
let arr = [1, 4, 67, 234, 234, 23, 1, 23, 89, 78, 234, 89, 1];
console.log(arr);
let newArr = unq(arr);
console.log(newArr);

// 17:-
function capitalise(str) {
    return str.toUpperCase();
}
let str = "Harry";
let capStr = capitalise(str);
console.log(str);
console.log(capStr);

// 19:-
function longWord(str) {
    let k=0;
    let word = "";
    for(let i=0; i < str.length; i++) {
        if(str[i] === " ") {
            let tempword = str.slice(k, i);
            if(tempword.length > word.length) {
                word = tempword;
            }
            k=i+1;
        }
    }
    let tempword = str.slice(k, str.length);
        if(tempword.length > word.length) {
            word = tempword;
        }
    return word;
}
let str = "My name is Harry";
let lWord = longWord(str);
console.log(str);
console.log(`Longest word: ${lWord}`);

// 20:-
let isPalindrome = (numStr) => {
    let temp = "";
    for(let i=numStr.length-1; i >= 0; i--) {
        temp = temp.concat(numStr[i]);
    }
    return numStr === temp ? "Palindrome" : "Not a palindrome";
};
let number = prompt("Enter a number:");
console.log(isPalindrome(number));



function greet(name) {
    console.log(`Hi ${name}! I'm Harry!\nNice to meet you!`);
}
let name = prompt("Enter your name:");
greet(name);

let str = prompt("Enter the string:");
let arr = [];
let j=0;
let k=0;
for(let i=0; i < str.length; i++) {
    if(str[i] === " ") {
        arr[j] = str.slice(k, i);
        j++;
        k=i+1;
    }
    arr[j] = str.slice(k, str.length);
}
console.log(str);
console.log(arr);
let revStr = "";
for(let i=arr.length-1; i >= 0; i--) {
    revStr = revStr + arr[i] + " ";
}
console.log(revStr);

let arr = [1, 2, 3, 4];
console.log(arr);
arr.unshift(arr.pop());
console.log(arr);

// Claude Questions
// Question 1:
function generatePattern(num) {
    let newArr = [1];
    for(let i=0; i < (num-1); i++) {
        newArr.push(newArr[i] + i + 1);
    }
    return newArr;
}

console.log(generatePattern(10));

// Claude Questions
// Question 1:
function countEven(arr) {
    let count=0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(countEven([4, 3, 5, 10, 1121, 123456, 78, 90, 33, 22, 11]));

// Question 2:
function reverseStr(str) {
    let revStr = "";
    for(let i=(str.length-1); i >= 0; i--) {
        revStr = revStr.concat(str[i]);
    }
    return revStr;
}
console.log(reverseStr("Harry"));

// Question 3:
function findMax(arr) {
    let max = arr.reduce((prev, curr) => {
        return prev > curr ? prev : curr;
    })
    return max;
}
console.log(findMax([1,5,2,67,23,1,2234,3,-234,54,0]));

// Question 4:
function sumRange(start, end) {
    let sum = 0;
    for(let i=start; i<=end; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumRange(1, 5));

// Question 5:
function hasVowel(str) {
    for(let val of str.toLowerCase()) {
        if(val === 'a' || val === 'e' || val === 'i' || val === 'o' || val === 'u') {
            return true;
        }
    }
    return false;
}
console.log(hasVowel("Harry"));

document.querySelector("h2").innerText += " from Harry!"

let divs = document.querySelectorAll(".box");
console.dir(divs);
// divs[0].innerText = "Changed text 1";
// divs[1].innerText = "Changed text 2";
// divs[2].innerText = "Changed text 3";
let index = 1;
for(div of divs) {
    div.innerText = "New changed value " + index;
    index++;
}

let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);


let content = document.querySelector("p");
content.setAttribute("class", "newClass");

let button = document.querySelector("button");
let count = 0;
button.addEventListener("click", () => {
    if(count%2 === 0) {
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        document.querySelector("body").style.backgroundColor = "white";
}
count++;
});

let box = document.getElementById("box");
let hoverStatus = "in";
box.addEventListener("mouseenter", () => {
    box.innerText = "You are inside div";
});
box.addEventListener("mouseleave", () => {
    box.innerText = "You are outside div";
});

let para = document.querySelectorAll("p");
para.forEach((p) => {
    p.style.color = "blue";
});

let para = document.getElementById("p1");
para.innerHTML = "<i>This is in italics</i>";

let highlights = document.querySelectorAll(".highlight");
highlights.forEach((el) => {
    el.style.border = "2px solid black";
});

let newDiv = document.createElement("div");
newDiv.innerText = "This div is added using JS";
document.querySelector("body").append(newDiv);

let clone = document.querySelector("div").cloneNode(true);
let div = document.querySelector("div");
div.append(clone);

let div = document.querySelector("#box1");
div.innerHTML = '';

let button = document.querySelector("button");
let Status = "off";
button.addEventListener("click", () => {
    if(Status === "off") {
        button.setAttribute("class", "on");
        Status = "on";
        console.log("On");
        button.innerText = "On";
    } else {
        button.setAttribute("class", "off");
    Status = "off";
    console.log("Off");
    button.innerText = "Off";
}
});

const obj = {
    name : "Harr",
    rollNo : 45,
    age : 19
};

console.log(obj.name);
console.log(obj["age"]);
let str = "rollNo";
console.log(obj[str]);

let DATA = "Website Data"

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data:", DATA);
    }
};

class Admin extends User {
    editData(data) {
        DATA = data;
    }
};

let student1 = new User("Harry", "harry123@gmail.com");
console.log(student1.email);
console.log(student1.name);
student1.viewData();

let admin = new Admin();
// admin.editData("New Data");




// Q1
function greetingCallback() {
    console.log("Greeting completed.")
}

function greet(name, otherFunction) {
    setTimeout(() => {
        console.log(`Hello ${name}!`);
        otherFunction();
    }, 2000);
}

greet("John", greetingCallback);

// Q2
function sum(x, y) {
    console.log(x+y);
}
function multiply(x,y) {
    console.log(x*y);
}
function calculate(a, b, operation) {
    operation(a, b);
}
calculate(10, 5, sum);
calculate(10, 5, multiply);

// Q3
function openCallback() {
    console.log("Opening file...")
}
function downloadFile(fileName, openFunc) {
    console.log(`Downloading ${fileName}...`);
    setTimeout(() => {
        console.log("Download Complete.");
        openFunc();
    }, 3000);
}
downloadFile("resume.pdf", openCallback);

// Q4
function login(callback) {
    setTimeout(() => {
        console.log("Login Successful");
        callback();
    }, 2000);
}
function fetchingUser(callback) {
    setTimeout(() => {
        console.log("User Fetched");
        callback();
    }, 2000);
}
function fetchingPost(callback) {
    setTimeout(() => {
        console.log("Posts Fetched");
        callback();
    }, 2000);
}
function fetchingComments() {
    setTimeout(() => {
        console.log("Comments fetched");
    }, 2000);
}
function userLogin() {
    console.log("Loggin in...");
    login(() => {
        console.log("Fetching User...");
        fetchingUser(() => {
            console.log("Fetching Posts...");
            fetchingPost(() => {
                console.log("Fetching Comments...");
                fetchingComments();
            });
        });
    });
}
userLogin();

// Q5
function takeOrder(callback) {
    setTimeout(() => {
        console.log("Order taken!");
        callback();
    }, 2000);
}
function foodCook(callback) {
    setTimeout(() => {
        console.log("Food Cooked");
        callback();
    }, 2000);
}
function foodServe(callback) {
    setTimeout(() => {
        console.log("Food Served!");
        callback();
    }, 2000);
}
function collectPayment() {
    setTimeout(() => {
        console.log("Payment Collected!");
    }, 2000);
}
function foodOrder() {
    console.log("Taking Order...");
    takeOrder(() => {
        console.log("Cooking food...");
        foodCook(() => {
            console.log("Food Serving...");
            foodServe(() => {
                console.log("Collecting payment...");
                collectPayment();
            });
        });
    });
}
foodOrder();

// Q6
function choseMovie(callback) {
    setTimeout(() => {
        console.log("Movie chosen");
        callback();
    }, 2000);
}
function choseSeats(callback) {
    setTimeout(() => {
        console.log("Seats Chosen");
        callback();
    }, 2000);
}
function makePayment(callback) {
    setTimeout(() => {
        console.log("Payment Made");
        callback();
    }, 2000);
}
function printTickets() {
    setTimeout(() => {
        console.log("Tickets Printed");
    }, 2000);
}
function movieBooking() {
    console.log("Choosing Movie...");
    choseMovie(() => {
        console.log("Choosing Seats...");
        choseSeats(() => {
            console.log("Making Payment...");
            makePayment(() => {
                console.log("Printing Tickets...");
                printTickets();
            });
        });
    });
}
movieBooking()

// Q7
function greet(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hello ${name}!`);
            resolve("Done");
        }, 2000);
    });
}
greet("John").then((res) => {
    console.log(res);
});

// Q8
function downloadFile(fileName) {
    console.log("Downloading...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(fileName) {
                resolve("Downloaded");
            } else {
                reject("Invalid Filename");
            }
        }, 2000);
    });
}
downloadFile("JohnFile.pdf")
    .then((res) => {
        console.log(res);
    })
    .catch((rej) => {
        console.log(rej);
    });

// Q9
function flipCoin() {
    return new Promise((resolve, reject) => {
        if(Math.random() >= 0.5) {
            resolve("You won");
        } else {
            reject("You lost");
        }
    });
}
let promise = flipCoin();
promise.then((res) => {
    console.log(res);
});
promise.catch((err) => {
    console.log(err);
});

// Q10
function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Logged in");
        }, 2000);
    });
}
function getProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Got Profile")
        }, 2000);
    });
}
function getFriends() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Got Friends")
        }, 2000);
    });
}
function getMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Got Messages")
        }, 2000);
    });
}
function userFlow() {
    console.log("Loggin in...");
    login()
        .then((res) => {
            console.log(res);
            console.log("Getting Profile...");
            return getProfile();
        })
        .then((res) => {
            console.log(res);
            console.log("Getting Friends...");
            return getFriends();
        })
        .then((res) => {
            console.log(res);
            console.log("Getting Messages...");
            return getMessages();
        })
        .then((res) => {
            console.log(res);
        });
}
userFlow();
// Explain this one pls... I didn't get what was your flow and mine... And also how to add catch statement?!:(

// Skipped 11th
// Q12
function checkBalance(balance) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(balance > 500) resolve("Sufficient Balance");
            else reject("Insufficient Balance");
        }, 2000);
    });
}
function withdrawMoney() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Money withdrawn");
        }, 2000);
    });
}
function printReceipt() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Receipt Printed");
        }, 2000);
    });
}
function ATM(balance) {
    console.log("Insert Card...");
    checkBalance(balance)
        .then((res) => {
            console.log(res);
            console.log("Withdrawing money...");
            return withdrawMoney();
        }).then((res) => {
            console.log(res);
            console.log("Printing receipt...");
            return printReceipt();
        }).then((res) => {
            console.log(res);
        });
    checkBalance(balance)
        .catch((err) => {
            console.log(err);
        });
}
ATM(600);

// Skipped Q13
// Q14
function divide(a, b) {
    return new Promise((resolve, reject) => {
        if(b === 0) {
            reject("Cannot divide by 0");
        } else {
            resolve(a/b);
        }
    });
}
let promise = divide(10, 6);
promise.then((res) => {
    console.log(res);
});
promise.catch((err) => {
    console.log(err);
});

// Skipped the rest ones as I think they're pretty similar and I can do them


// ChatGPT Questions on Async-await
// 1
async function greet() {
    return "hello"
}

console.log(greet());

greet().then(console.log);

// 2
fetchData()
.then(data => processData(data))
.then(result => console.log(result))
.catch(err => console.log(err));

(async function() {
    try {
        const data = await fetchData();
        const result = await processData(data);
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}) ();

// 3
async function getData() {
    const data = await fetchData();
    console.log(data);
}

async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
        throw new Error("Oops");
    } catch(err) {
        console.log("Error:", err);
    } finally {
        console.log("Fuck off");
    }
}

// 4
function a() {
    throw new Error("Something went wrong");
}
console.log(a());

// 5
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    await delay(1000);
    delay(1000);
    console.log("Done");
}

run();

// 6
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    })
}

(async function() {
    await delay(2000);
    console.log("After 2 seconds of delay");
}) ();

// 7
async function fetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                {
                    name: "Alex",
                    age: 22
                }
            )
        }, 2000);
    });
}

(async function() {
    const info = await fetchUser();
    for(let i in info) {
        console.log(i, info[i]);
    }
}) ();

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("step 1");
        }, 1000);
    });
}
function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("step 2");
        }, 1000);
    });
}
function final() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Finished");
        }, 1000);
    });
}

(async function() {
    console.log(await step1());
    console.log(await step2());
    console.log(await final());
}) ();

function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Error running this step");
        }, 1000);
    });
}

let i = 0;
async function callStep1() {
    try {
        await step1();
    } catch(err) {
        if(i === 3) {
            console.log(err);
        } else {
            i++;
        callStep1();
    }
}
}

login()
.then(token => getProfile(token))
.then(profile => getPosts(profile.id))
.then(posts => console.log(posts))
.catch(console.error);

(async function() {
    try {
        const token = await login();
        const profile = await getProfile(token);
        const posts = await getPosts(profile.id);
        console.log(posts);
    } catch(error) {
        console.log(error);
    }
}) ();

function fetchURL() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("URL.com");
        }, 1000);
    })
}

async function callFetchURL() {
    const r1 = await fetchURL();
    return [r1, r2, r3, r4, r5];
}

async function test() {
    try {
        throw new Error("Oops");
    } catch (e) {
        console.log(e.message);
  }
}

test();

async function test() {
    throw new Error("Something went wrong");
}

test();

const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
.then(results => {
    console.log(results); // [10, 20, 30]
});
*/