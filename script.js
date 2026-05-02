let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
input.addEventListener("input", (e) => {
  // Just mirror what user typed, don't re-append
  string = e.target.value;
});

// Convert NodeList to array
let arr = [...buttons];

// Common function
function handleInput(value) {
  if (value === "=") {
    try {
      string = eval(string);
      input.value = string;
    } catch {
      input.value = "Error";
      string = "";
    }
  } else if (value === "AC") {
    string = "";
    input.value = "";
  } else if (value === "DEL") {
    string = string.slice(0, -1);
    input.value = string;
  } else {
    string += value;
    input.value = string;
  }
}

// Mouse clicks
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    handleInput(e.target.innerText);
  });
});

// Keyboard input
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (key === "Enter") handleInput("=");
  else if (key === "Backspace") handleInput("DEL");
  else if (key === "Escape") handleInput("AC");
  else if ("0123456789+-*/.%".includes(key)) handleInput(key);
});
