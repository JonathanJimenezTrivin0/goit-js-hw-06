const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

let listItems = ingredients.map((value) => {
  const li = document.createElement("li");

  li.classList.add("item");

  li.textContent = value;

  return li;
});

list.append(...listItems);
