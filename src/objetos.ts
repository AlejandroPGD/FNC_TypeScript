class Training {
    // public type:string="";
    // readonly distance:number=0;
    // public date:string="";
    // private coments:string="";
    constructor(public type:string,readonly distance:number,public date:string, private coments:string=""){
        this.type = type;
        this.distance = distance;
        this.date = date;
        this.coments = "this is a comment "
    }
    format(){
        return `I ran ${this.distance}km on ${this.date} - comments ${this.coments}`;
    }
}

//instanciacion de una clase =>creacion de un objeto 
let training1 = new Training("INTERVASL", 10,"2023-08-09");
let training2 = new Training("LONGRUN", 42,"2023-08-08");
let training3 = new Training("MEDIUNRUN", 21,"2023-08-07");
let training4 = new Training("VA", 100,"2023-08-07");
console.log(training1);
console.log(training2);
console.log(training3);
console.log(training4);
console.log(training1.format());

//definicion de un arreglo de objetos
let trainings: Training[]=[];

trainings.push(training1);
trainings.push(training1);
trainings.push(training2);
trainings.push(training3);
trainings.push(training4);

console.log(trainings);

trainings.forEach(tr=> console.log(tr.format()));


//Encapsulamiento private, public, readonly

console.log(training1.distance)

// training1.distance = 1

