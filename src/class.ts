
type nameType = (name: string, height: number, weight: number) => number | string;

interface GiveId{
    getId: () => string;
}

class Player implements GiveId{
    private readonly userId: string = String(Math.random()*1000);
    private height;
    public weight;

    AccessHeight(){
        return this.height;
    }

    constructor(height: number, weight: number){
        this.height = height;
        this.weight = weight;
    }
    
    getId = () => this.userId;
}

class NewPlayer extends Player{
    name: string;

    constructor(height: number, weight: number, name: string){
        super(height, weight);
        this.name = name;
    }
}

const suraj = new Player(12.43, 6.5);

// console.log(suraj.weight)

// console.log(suraj.AccessHeight())

const abhinav = new NewPlayer(12, 23, "surajkr");

console.log(abhinav.getId)






