"use strict";

const adviceNumberEl = document.querySelector(".advice-number");
const adviceTextEl = document.querySelector(".advice-text");
const diceBtnEl = document.querySelector(".advice-dice");

diceBtnEl.addEventListener("click", function (e) {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceNumberEl.textContent = data.slip.id;
      adviceTextEl.textContent = `"${data.slip.advice}"`;
    })
    .catch(() => (adviceTextEl.textContent = "Can't connect to the API"));

  this.style.boxShadow = "0 0 20px #52ffa8";
  setTimeout(function () {
    diceBtnEl.style.boxShadow = "none";
  }, 200);
});

diceBtnEl.addEventListener("mouseover", function (e) {
  this.style.boxShadow = "0 0 20px #52ffa8";
  this.style.cursor = "pointer";
});

diceBtnEl.addEventListener("mouseleave", function (e) {
  this.style.boxShadow = "none";
});
