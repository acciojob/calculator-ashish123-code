//your code here
const buttons = document.querySelectorAll("button");
const input = document.querySelector("#input");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    switch (e.target.id) {
      case "block0":
      case "block1":
      case "block2":
      case "block3":
      case "block4":
      case "block5":
      case "block6":
      case "block7":
      case "block8":
      case "block9":
        input.value += e.target.textContent;
        break;
      case "plus":
      case "minus":
      case "multiply":
      case "divide":
        input.value += e.target.textContent;
        break;
      case "dot":
        if (!input.value.includes(".")) {
          input.value += ".";
        }
        break;
      case "ans":
        try {
          input.value = eval(input.value);
        } catch (error) {
          input.value = error;
        }
        break;
      case "clr":
        input.value = "";
        break;
    }
  });
});


