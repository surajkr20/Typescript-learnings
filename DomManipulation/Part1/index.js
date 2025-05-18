var myform = document.getElementById("form");
var inputVal = document.querySelector("myform > input");
myform.onsubmit = function (e) {
    e.preventDefault();
    console.log(typeof inputVal.value);
};
