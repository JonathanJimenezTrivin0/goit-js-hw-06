function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = document.querySelector(".change-color");
const textSpan = document.querySelector(".color");

color.addEventListener("click", () => {
  const random = getRandomHexColor();
  document.body.style.backgroundColor = random;
  textSpan.textContent = random;
});
