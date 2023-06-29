let input = document.getElementById("validation-input");

input.addEventListener("focus", (e) => {
  e.target.style.border = "3px solid #bdbdbd";
});

input.addEventListener("blur", (e) => {
  if (e.target.value.length == "6") {
    e.target.style = "border-color: #4caf50";
    alert("Agreed Access");
  }
});

input.addEventListener("blur", (e) => {
  if (e.target.value.length < "6") {
    e.target.style = "border-color: #f44336";
    alert("Please enter 6 symbols");
  }
});
