"use strict";
const myform = document.getElementById("form");
const inputVal = document.getElementById("value");
const btn = document.getElementById("btn");
myform.onsubmit = (e) => {
    e.preventDefault();
    const num = Number(inputVal.value) + 20;
    const h2 = document.createElement("h2");
    h2.textContent = String(num);
    const body = document.querySelector("body");
    body.append(h2);
};
