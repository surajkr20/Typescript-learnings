
type nameType = (name: string, height: number, weight: number) => number | string;

class Player{
    public readonly userId: string | undefined = String(Math.random()*100);
    private height;
    public weight;

    AccessHeight(){
        return this.height;
    }

    constructor(height: number, weight: number, userId?: string){
        this.height = height;
        this.weight = weight;
        this.userId = userId;
    }
}

class NewPlayer extends Player{
    name: string;

    constructor(height: number, weight: number, name: string){
        super(height, weight);
        this.name = name;
    }

    GetMyId(){
        this.userId;
    }
}

const suraj = new Player(12.43, 6.5, "12st435");

// console.log(suraj.weight)

// console.log(suraj.AccessHeight())

const abhinav = new NewPlayer(12, 23, "surajkr");

console.log(abhinav.userId)






