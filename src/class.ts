
type nameType = (name: string, height: number, weight: number) => number | string;

class Player{
    private height;
    public weight;
    protected power;
    public readonly id:number;

    constructor(height:number, weight: number, power: number){
        this.height = height;
        this.weight = height;
        this.power = power;
        this.id = Number(Math.random() * 100);
    }

    MyHeight = () =>{ // accessing private variables using fun
        return this.height;
    }

    get GetMyHeight():number{   // getter function
        return this.height;
    }

    set ChangeHeight(val: number){  // setter function
        this.height = val;
    }
}

class Plater extends Player{
    public name;
    constructor(name: number){
        super(11, 34, 69, );
        this.name = name;
    }
}

const suraj = new Player(5.4, 36, 25);

console.log(suraj.id);






