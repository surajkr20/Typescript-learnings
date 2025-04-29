
// creating a interface
interface obj  {
    height: number;
    weight: number;
    userName: string;
    gender: string;
}

// created a type
type FunType = (n: number, m: number) => void;

// this is inherit previous objects values
interface newObj extends obj{
    scolar: boolean;
    // fun?: (n: number, m: number) => void;
    fun?: FunType;
}

const object:obj = {
    height : 5.4,
    weight: 55,
    userName: "surajkr20",
    gender: "male"
}

const object2: obj = {
    height : 5,
    weight : 60,
    userName : 'abhinav-bhardwaj',
    gender : "male"
}

const object3: newObj = {
    height : 5,
    weight : 60,
    userName : 'abhinav-bhardwaj',
    gender : "male",
    scolar : true,
    fun : (n,m) =>{
        console.log(n*m);
    }
}

console.log(object)