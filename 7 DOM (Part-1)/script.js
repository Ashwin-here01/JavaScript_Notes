// console.log(window);
// window.console.log("Hello!");
// window.alert("Hi!");

console.log(window.document);

console.dir(window.document); // To print an object (Prefer this)
console.dir(document);

console.dir(document.body);
console.log(document["body"]);

console.dir(document.body.childNodes[5]);

let heading = document.getElementById("heading");
console.dir(heading);
heading = document.getElementById("asdfghjkl");
console.dir(heading); //It return null beacuse id does not exist

let para = document.getElementsByClassName("brown");
console.dir(para); //It returns an HTML collection (which is similar to an array but different)
para = document.getElementsByClassName("asdfghjkl");
console.dir(para); //It returns an empty HTML collection

let parahs = document.getElementsByTagName("p");
console.dir(parahs);


// Query selector returns a node list
let firstEl = document.querySelector("p"); //First matching element
console.dir(firstEl);
let allEl = document.querySelectorAll("p"); //All matching elements
console.dir(allEl);

firstEl = document.querySelector(".brown");
console.dir(firstEl);
allEl = document.querySelectorAll(".brown");
console.dir(allEl);

firstEl = document.querySelector("#heading");
console.dir(firstEl);


// Properties
// tagName
firstEl = document.querySelector(".brown");
console.log(firstEl.tagName);

// innerText
// It returns text content of the element and all its children
let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);
div.innerText = "This is dynamically changed text"; // This way we can dynamically change the text

// innerHTML
// It also returns the HTML content of the element and all its children
console.log(div.innerHTML);
div.innerHTML = "<div>This is a div</div>"; // This way we can dynamically change the HTMl

// textContent
// It returns textual content even for hidden elements
let hiddenHeading = document.querySelector("h3");
console.log(hiddenHeading.innerText); // ''
console.log(hiddenHeading.textContent);