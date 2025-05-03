
type GetDataType = (product: {
  name: string;
  stock: number;
  price: number;
  image: string;
}) => void;

const getData: GetDataType = (product) => {
  console.log(product.name);
};

const product01 = {
    name: "macbook air",
    stock: 86,
    price: 55000,
    image: "imageurl"
}

getData(product01);

// never type
type themeType = "light" | "dark";

const ErrorHandler = (): never => {
    throw new Error();
}

const mode:themeType = "light";