let input = document.querySelector("#name-input");
let output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  if (e.target.value === "") {
    output.textContent = "Anonimo";
  } else {
    output.textContent = e.target.value;
  }
});
