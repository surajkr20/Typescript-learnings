"use strict";
// type funtype = (n: number, m: number, l?: number) => number;    // parameter is optional
const calculate = (principle, rate, time) => {
    return (principle * rate * time) / 100;
};
console.log(calculate(1232, 10, 3));
