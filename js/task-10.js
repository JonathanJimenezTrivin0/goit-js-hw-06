function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let createButton = document.querySelector("button[data-create]"); //Seleccionar el boton de crear
let destroyButton = document.querySelector("button[data-destroy]"); // Seleccionar el boton de borrar
let boxes = document.querySelector("#boxes");

// Evento de escucha cuando se da click en el boton de crear
createButton.addEventListener("click", () => {
  const inputNumber = document.querySelector('input[type="number"]'); //Seleccionar el input en donde se coloca la cantidad
  const amount = parseInt(inputNumber.value); // Validar que sea un numero entero

  createBoxes(amount); // Llamar a la funcion de crear los div
});

// Evento de escucha para borrar los div
destroyButton.addEventListener("click", () => {
  destroyBoxes(); //Llamar a la funcion de borrar los div
});

// Se crea la funcion para agregar los div
function createBoxes(amount) {
  for (let index = 0; index < amount; index++) {
    //Iterar para obtener el numero registrado en el input
    let createDiv = document.createElement("div");
    createDiv.innerText = index + 1;
    createDiv.style.background = getRandomHexColor(); // Agregar color de fondo a los los div, funcion getRandomHexColor()

    boxes.append(createDiv);
  }
}

function destroyBoxes() {
  boxes.innerText = "";
} // Funcion para borrar los div creados
