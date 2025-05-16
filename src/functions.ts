// type funtype = (n: number, m: number, l?: number) => number;    // parameter is optional

// const fun2:funtype = (n, m, l) => {
//     if(typeof l === "undefined") return n*m;    // if the user not pass the value of l then return, only n * m
//     return n*m*l;   // otherwise n * m * l
// }

// console.log(fun2(23,33));

type calculateType = (principle: number, rate: number, time: number) => number;

const calculate: calculateType = (principle, rate, time) =>{
    return (principle * rate * time) / 100;
}

console.log(calculate(1232, 10, 3));