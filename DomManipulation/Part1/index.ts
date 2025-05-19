const myform = document.getElementById("form") as HTMLFormElement;

const inputVal = document.getElementById("value") as HTMLInputElement;

const btn = document.getElementById("btn") as HTMLElement;

myform.onsubmit = (e) => {
  e.preventDefault();
  const num: number = Number(inputVal.value) + 20;

  const h2 = document.createElement("h2");
  h2.textContent = String(num);
  const body = document.querySelector("body")!;
  body.append(h2);
};
