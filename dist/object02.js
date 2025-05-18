"use strict";
const getData = (product) => {
    console.log(product.name);
};
const product01 = {
    name: "macbook air",
    stock: 86,
    price: 55000,
    image: "imageurl"
};
getData(product01);
const ErrorHandler = () => {
    throw new Error();
};
const mode = "light";
