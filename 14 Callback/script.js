console.log("one");
console.log("two");

setTimeout(() => { // Asynchronous Programming
    console.log("Hello");
}, 1000);

console.log("three");
console.log("four");



// Callback : Is a function passed as an argument to another function
// e.g. setTimeout()

function sum(a, b) {
    console.log(a + b);
}

function printSum(a, b, sumCallback) {
    sumCallback(a, b);
}

printSum(10, 20, sum); // Function passed without parenthesis ()



// Callback Hell : Nested Callbacks (Bad way, not easy to understand)

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if(getNextData) {
            getNextData();
        }
    }, 2000);
}

// Callback Hell
getData(1, () => {
    console.log("Getting data 2...");
    getData(2, () => {
        console.log("Getting data 3...");
        getData(3, () => {
            console.log("Getting data 4...");
            getData(4);
        });
    });
});