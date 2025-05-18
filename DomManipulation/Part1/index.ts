
const myform = document.getElementById("form") as HTMLFormElement;

const inputVal = document.querySelector("myform > input") as HTMLInputElement;

myform.onsubmit = (e: SubmitEvent) =>{
    e.preventDefault();
    
    console.log(typeof inputVal.value)
}
