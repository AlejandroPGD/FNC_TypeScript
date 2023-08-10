//code tells you how, code tells you why

/**
 * funcion que retorna el area del circulo dado  su radio s
 * @param radio Radio del circulo
 * @returns retorna el area del circulo 
 */
const areaCircle = (radio:number):number=>{
    return  Math.PI * Math.pow(radio,2);
};
console.log(areaCircle(3))
// fun fuente aligaters 


//decalracion de la variable  con tipo explicito y valor de la inicializacion  basado en  una funcion
let area:number = areaCircle(2);


const showMessagge1 =(message:string) : void =>{
    console.log(message);
}

showMessagge1("hola")

const showMessagge2 =(message:string="mundo") : void =>{
    console.log(message);
}

showMessagge2()