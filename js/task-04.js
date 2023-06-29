let buttonDecrement = document.querySelector(
  'button[data-action = "decrement"]'
);
let buttonIncrement = document.querySelector(
  'button[data-action = "increment"]'
);
let numberSpan = document.querySelector("#value");

let counterValue = 0;

buttonDecrement.addEventListener("click", () => {
  counterValue -= 1;
  numberSpan.textContent = counterValue;
});

buttonIncrement.addEventListener("click", () => {
  counterValue += 1;
  numberSpan.textContent = counterValue;
});
