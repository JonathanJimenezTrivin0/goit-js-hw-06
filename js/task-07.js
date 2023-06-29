let input = document.getElementById("font-size-control");
let span = document.getElementById("text");

input.addEventListener("click", (evt) => {
  evt.target.value;

  span.style.fontSize = evt.target.value + "px";
});
