// console.log("one");
// console.log("two");

// setTimeout(() => { // Asynchronous Programming
//     console.log("Hello");
// }, 1000);

// console.log("three");
// console.log("four");



// // Callback : Is a function passed as an argument to another function
// // e.g. setTimeout()

// function sum(a, b) {
//     console.log(a + b);
// }

// function printSum(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// printSum(10, 20, sum); // Function passed without parenthesis ()



// // Callback Hell : Nested Callbacks (Bad way, not easy to understand)

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }

// // Callback Hell
// getData(1, () => {
//     console.log("Getting data 2...");
//     getData(2, () => {
//         console.log("Getting data 3...");
//         getData(3, () => {
//             console.log("Getting data 4...");
//             getData(4);
//         });
//     });
// });





// // Promise: is for "eventual" completion of task
// //          object
// //          Solution to callback hell

// /*
// Promises have 3 stages:
//     Pending
//     Fullfilled / resolved
//     Rejected
// */

// /*
// Promises have 2 handlers: (are callbacks, automatically created by JS)
//     resolve
//     reject
// */

// // Usually APIs return a promise and we need to learn to DEAL with it... (Creation is not that imp)

// let promise = new Promise((resolve, reject) => {
//     console.log("I'm a Promise");
//     // reject("Some error occured"); // It generates an error with the msg we pass as argument
//     resolve("Success"); // The promise is fullfilled
// });


// function returnData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//             // reject("Some error occured");
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 2000);
//     });
// }

// let dataPromise = returnData(123);

// console.dir(dataPromise);


// // then and catch
// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I'm a Promise");
//         resolve("Success");
//         // reject("Network Error");
//     });
// };

// let promise1 = getPromise();

// promise1.then((res) => { // If resolved
//     console.log("Promise Fullfilled -", res);
// });

// promise1.catch((err) => { // If rejected
//     console.log("Promise rejected -", err);
// });



// // Promise Chaining
// const asyncFunc1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data1");
//             resolve("Success");
//         }, 4000);
//     });
// };

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data2");
//             resolve("Success");
//         }, 4000);
//     });
// }

// console.log("Fetching data 1...")
// asyncFunc1().then((res) => {
//     console.log("Fetching Data 2...");
//     asyncFunc2().then((res) => {});
// });



// function getData1(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("Success");
//             // reject("Some error occured");
//         }, 2000);
//     });
// }

// console.log("Fetching data 1...");
// getData1(1).then(() => {
//     console.log("Fetching data 2...");
//     getData1(2).then(() => {
//         console.log("Fetching data 3...");
//         getData1(3).then(() => {
//             console.log("Fetching data 4...");
//             getData1(4);
//         });
//     });
// });

// Easier Way (Actual Promise Chaining)

// console.log("Fetching data 1...");
// getData1(1)
//     .then((res) => {
//         console.log("Fetching data 2...");
//         return getData1(2);
//     })
//     .then((res) => {
//         console.log("Fetching data 3...");
//         return getData1(3);
//     })
//     .then((res) => {
//         console.log("Fetching data 4...");
//         return getData1(4);
//     })
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });





// Async-Await:
// async function always return a promise.
async function hello() {
    console.log("hello");
}

// await : Stops the execution before the task is completed
// Can only be used inside an async function

function api() {
    return new Promise((resolve, rejet) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData() {
    await api(); // 1st
    await api(); // 2nd
}
// getData function

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Data ${dataId}`);
            resolve("success");
        }, 2000);
    });
}

async function asyncGetData() {
    console.log("Fetching data 10...");
    await getData(10);
    console.log("Fetching data 20...");
    await getData(20);
    console.log("Fetching data 30...");
    await getData(30);
    console.log("Fetching data 40...");
    await getData(40);
}


// IIFE : Immediately Invoked Function Expression
// A function which is executed as soon as it is defined
// Can only be used once
// Has no name
// (function)();
/*
(function () {
  // statements…
})();

// arrow function variant
(() => {
  // statements…
})();

// async IIFE
(async () => {
  // statements…
})();
*/

(async function asyncGetData() {
    console.log("Fetching data 10...");
    await getData(10);
    console.log("Fetching data 20...");
    await getData(20);
    console.log("Fetching data 30...");
    await getData(30);
    console.log("Fetching data 40...");
    await getData(40);
})();