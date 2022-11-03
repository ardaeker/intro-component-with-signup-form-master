const button = document.querySelector(".sign-up-container-button");
const form = document.querySelector("#form");

button.addEventListener("click", () => {
  form.classList.add("was-validated");
});
