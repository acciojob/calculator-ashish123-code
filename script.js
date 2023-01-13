//your code here
let input = document.getElementById("input");
let numbers = document.getElementById("numbers");
let operations = document.getElementById("operations");
let ansButton = document.getElementById("ans");
let clrButton = document.getElementById("clr");
let dotButton = document.getElementById("dot");
let current = "";
let previous = "";
let operator = "";

numbers.addEventListener("click", function(event) {
  let button = event.target;
  current += button.textContent;
  input.value = current;
});

operations.addEventListener("click", function(event) {
  let button = event.target;
  if (button.textContent === "=") {
    previous = current;
    current = "";
    operator = "";
  } else if (button.textContent === "Clear") {
    current = "";
    previous = "";
  }