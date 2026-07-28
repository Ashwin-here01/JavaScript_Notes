let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked!");
    let a = 25;
    a++;
    console.log(a);
};

let box1 = document.querySelector("#box1");

box1.onmouseover = () => {
    console.log("You're inside second div!");
};


// JS code has higher priority than HTML code

let butt = document.querySelector("#butt");

butt.ondblclick = () => {
    console.log("This is through script.js")
};


// The later written handler will overwrite the previous one

let btn2 = document.querySelector("#btn2");

btn2.onclick = () => {
    console.log("HANDLER 1");
};
btn2.onclick = () => {
    console.log("HANDLER 2");
};




// Event Object

let btn3 = document.querySelector("#btn3");

btn3.onclick = (evt) => {
    console.dir(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
};




// Event Listeners
// Can add multiple event listeners to the same node
let btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", () => {
    console.log("Btn4 was clicked!");
});
btn4.addEventListener("click", (evt) => {
    console.log(evt.target);
    console.log(evt.type);
});

// Removing EventListeners
let btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", () => {
    console.log("Btn5 was clicked! Handler1");
});

btn5.addEventListener("click", () => {
    console.log("Btn5 was clicked! Handler2");
});

function handler3() {
    console.log("Btn5 was clicked! Handler3");
}
btn5.addEventListener("click", handler3);

btn5.addEventListener("click", () => {
    console.log("Btn5 was clicked! Handler4");
});

btn5.removeEventListener("click", handler3); // Only the named functions can be removed... Other handlers don't store the function anywhere, so we can't refer to it and hence can't delete it!