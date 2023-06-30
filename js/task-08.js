const form = document.querySelector(".login-form");

const inputEmail = document.querySelector('input[type="email"]');

const inputPassword = document.querySelector('input[type = "password"]');

const button = document.querySelector('button[type = "submit"]');

inputEmail.addEventListener("blur", (e) => {
  if (e.target.value.trim() === "") {
    e.target.style.border = "4px solid red";
    alert("Todos los espacios deben ser rellenados.");
  }
  if (e.target.value >= "0") {
    e.target.style.border = "4px solid green";
  } else {
  }
});

inputPassword.addEventListener("blur", (e) => {
  if (e.target.value.trim() === "") {
    e.target.style.border = "4px solid red";
    alert("Todos los campos deben ser diligenciados.");
  }
  if (e.target.value >= "0") {
    e.target.style.border = "4px solid green";
  } else {
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputEmail.value.trim() === "" || inputPassword.value.trim() === "") {
    alert("Todos los campos deben ser diligenciados.");
  } else {
    button.style.fontSize = "20px";
  }

  const results = { email: inputEmail.value, password: inputPassword.value };
  console.log(results);
  form.reset();
});
