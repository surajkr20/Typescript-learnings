type funtype = (n: number, m: number, l?: number) => number;    // parameter is optional

const fun2:funtype = (n, m, l) => {
    if(typeof l === "undefined") return n*m;    // if the user not pass the value of l then return, only n * m
    return n*m*l;   // otherwise n * m * l
}

console.log(fun2(23,33));