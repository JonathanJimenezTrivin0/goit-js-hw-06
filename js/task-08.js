const form = document.querySelector(".login-form");

const inputEmail = document.querySelector('input[type="email"]');

const inputPassword = document.querySelector('input[type = "password"]');

const button = document.querySelector('button[type = "submit"]');

inputEmail.addEventListener("blur", (e) => {
  if (e.target.value === "") {
    e.target.style.border = "4px solid red";
    alert("Todos los espacios deben ser rellenados.");
  }
  if (e.target.value >= "0") {
    e.target.style.border = "4px solid green";
  } else {
  }
});

inputPassword.addEventListener("blur", (e) => {
  if (e.target.value === "") {
    e.target.style.border = "4px solid red";
    alert("Todos los espacios deben ser rellenados.");
  }
  if (e.target.value >= "0") {
    e.target.style.border = "4px solid green";
  } else {
  }
});

button.addEventListener("click", () => {
  if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
    alert("Todos los espacios deben ser rellenados.");
  } else {
    button.style.fontSize = "20px";
  }
  form.reset();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
