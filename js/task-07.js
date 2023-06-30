let input = document.getElementById("font-size-control");
let span = document.getElementById("text");

span.style.fontSize = input.value + "px";

input.addEventListener("input", (evt) => {
  span.style.fontSize = evt.target.value + "px";
});
