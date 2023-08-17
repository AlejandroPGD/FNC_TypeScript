interface ITraining{
    type:string;
    distance:number;
    date:string;
    format():string;
}

class LongTraining implements ITraining{
    readonly type: string ="LONG TRAINING";
    public distance: number;
    public date: string;
    constructor(distance:number, date:string){
        this.type ="LONG TRAINING";
        this.distance=distance;
        this.date=date
    }
    format(): string {
        return "this is a long trainng"
    }
}
class Intervals implements ITraining{
    readonly type: string ="LONG TRAINING";
    public distance: number;
    public date: string;
    constructor(distance:number, date:string){
        this.type ="LONG TRAINING";
        this.distance=distance;
        this.date=date
    }
    format(): string {
        return "this is a intervals trainng"
    }
}

const t1 : ITraining = new LongTraining(21,"2023-08-09");
const t2 : ITraining = new Intervals(21,"2023-08-09");
const t3 : ITraining = new Intervals(221,"2023-08-09");

console.log(t1)
console.log(t2)

const ts: ITraining[]=[];
ts.push(t1);
ts.push(t2);
ts.push(t1);
ts.push(t3);
ts.push(t1);

console.log(ts)


