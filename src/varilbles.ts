//Declaracion de tipo implícito no hacer
let age;
age = 1;
age= "Cata";

console.log(age);


//Declaracion de tipo explícito 
//string number boolean 
let weight: number;
weight = 70;
weight = 71.3;
console.log(weight)

let identificador:string |number;
identificador=1;
identificador="fnc";
console.log(identificador);

//Creacion a partir de Union = alias
type StringOrNumber = string | number;
type Identifier =string | boolean | null;

let strOrNum : StringOrNumber;
strOrNum = 1;
strOrNum = "fnc";
console.log(strOrNum)

//Declaracion de arreglo
let arregloIds : Identifier[];

//Declaracion funcion
function miFuncion(id:Identifier){
    console.log(`Valor del id ${id}`);
}
miFuncion(false);
miFuncion("1");


// tipo any existe pero no se usa
let anyValue:any;

anyValue = 1;
anyValue ="a";
anyValue = null;
anyValue = true;
