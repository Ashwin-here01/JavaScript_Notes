const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json";

const dropdowns = document.querySelectorAll(".dropdown select");

for(let select of dropdowns) {
    for(currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode.toLowerCase();
        if(select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if(select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

function updateFlag(element) {
    let currCode = element.value;
    console.log(currCode);
    let countryCode = countryList[currCode.toUpperCase()];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}



/*
Links: 
https://github.com/fawazahmed0/exchange-api
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json
*/