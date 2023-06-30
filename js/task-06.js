let input = document.getElementById("validation-input");

input.addEventListener("focus", (e) => {
  e.target.style.border = "3px solid #bdbdbd";
});

input.addEventListener("blur", (e) => {
  if (e.target.value.length === Number(input.dataset.length)) {
    e.target.style = "border-color: #4caf50";
    alert("Agreed Access");
  } else {
    e.target.style = "border-color: #f44336";
    alert("Please enter 6 symbols");
  }
});
