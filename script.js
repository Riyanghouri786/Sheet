let email = document.getElementById("email");
let first = document.getElementById("first");
let last = document.getElementById("last");
let number = document.getElementById("number");

const scriptURL =
  "https://script.google.com/macros/s/AKfycbws4Ro0Ua0oRBasDTjSwm-1grbunzVsls-bv2a10mbLWml0otazBrC6RGKjq68XxA0-/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
  email.value = "";
  first.value = "";
  last.value = "";
  number.value = "";
});
