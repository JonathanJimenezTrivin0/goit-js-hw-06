const amountUl = categories.children.length; // Obtener longitud del tag <ul>
console.log(`Number of categories: ${amountUl}`);
console.log("");
const ulList = document.querySelectorAll("#categories > li");

ulList.forEach((element) => {
  console.log(`Category: ${element.querySelector("h2").textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
  console.log("");
});
