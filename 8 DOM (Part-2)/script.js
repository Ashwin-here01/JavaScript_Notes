let div = document.querySelector("#box");
console.dir(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector(".para");
console.log(para.getAttribute("class"));


para.setAttribute("class", "newClass");

// To add more than 1 class to an element we use classList method otherwise it'll get overwritten
console.log(para.classList);
para.classList.add("secondClass");
para.classList.add("thirdClass");
para.classList.remove("secondClass");


console.dir(div.style); // It shows the INLINE style
div.style.backgroundColor = "gray";
div.style.backgroundColor = "green";
div.style.fontSize = "23px";
// div.innerText = "Hello";



// Creating new elements using JS
let newBtn = document.createElement("button"); // Tagname inside the ()
console.dir(newBtn);
newBtn.innerText = "Click me!";


div.append(newBtn); // End (Inside)

div.prepend(newBtn); // Start (Inside)

div.before(newBtn); // Start (Outside)

div.after(newBtn); // End (Outside)

// E.g.
let newHeading = document.createElement("h1");
newHeading.innerText = "This is the biggest heading";
newHeading.style.backgroundColor = "yellow";

document.querySelector("body").prepend(newHeading)


// remove
para.remove();