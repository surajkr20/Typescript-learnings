"use strict";
const fun2 = (n, m, l) => {
    if (typeof l === "undefined")
        return n * m; // if the user not pass the value of l then return, only n * m
    return n * m * l; // otherwise n * m * l
};
console.log(fun2(23, 33));
