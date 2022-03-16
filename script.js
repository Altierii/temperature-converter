// Getting the id's for the buttons!

const buttonOne = document.getElementById("buttonOne");
const buttonTwo = document.getElementById("buttonTwo");

// Getting the id's for the inputs!

const pageOne = document.getElementById("pageOne");
const pageTwo = document.getElementById("pageTwo");

// Getting the id's for the displays!

const displayOne = document.getElementById("displayOne");
const displayTwo = document.getElementById("displayTwo");

function convertOne() {
    parseFloat(pageOne.value); // Converts string to float
    result = (pageOne.value * 1.8) + 32; // Formula for converting Celsius to Fahrenheit
    displayOne.textContent = result
}

function convertTwo() {
    parseFloat(pageTwo.value); // Converts string into float
    result = (pageTwo.value - 32) * .5556; // Formula for converting Fahrenheit to Celsius
    displayTwo.textContent = result
}