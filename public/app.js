"use strict";

const number = document.getElementById("id");
const para = document.getElementById("para");
const btn = document.getElementById("btn");

const getAdvice = async () => {
  let url = "https://api.adviceslip.com/advice";
  const response = await fetch(url);
  const data = await response.json();
  const { id, advice } = data.slip;
  number.innerHTML = id;
  para.innerHTML = advice;
};

setInterval(getAdvice, 10000);

btn.addEventListener("click", function (e) {
  e.preventDefault();
  getAdvice;
});
