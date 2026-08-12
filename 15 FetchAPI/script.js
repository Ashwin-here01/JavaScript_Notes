// API : Applicaton Programming Interface
const URL = "https://dogapi.dog/api/v2/breeds";

async function getFacts() {
    console.log("Getting data...");
    const response = await fetch(URL); // By default GET request
    console.log(response);
    const data = await response.json(); // JSON format (JavaScript Object Notation)
    console.log(data.data[0].attributes.name);
    console.log(data.data[0].attributes.description);
    console.log(response.headers);
}

// Using Promise chain
function promiseGetFacts() {
    console.log("Getting data...");
    fetch(URL).then((response) => {
        return (response.json());
    }).then((data) => {
        console.log(data.data[4].attributes.name);
        console.log(data.data[4].attributes.description);
    })
}