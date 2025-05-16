
interface car{
    brand: string;
    model: string;
    color: string;
    NoOfGears: number;
    currentDistance?: number;
}

type val = (n: number, m: number) => number;

interface NewCar extends car{
    check: boolean;
    fun? : val;
}

const obj : NewCar = {
    brand: "Bughati trillions",
    color: "black",
    model: "E26",
    NoOfGears: 10,
    check : false,
    fun : (n, m) =>{
        return n*m;
    }
}

