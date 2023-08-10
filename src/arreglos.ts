let heroes = ["Batman","SuperMan","Acuaman"];
console.log(heroes);
//heroes[0] = 1;
// heroes.push(1);
heroes[0]="WonderWoman";
heroes.push("flas");
console.log(heroes);

let notasCurso =["Henry",5,"Raul",4.5,"Sandra",3,8];
console.log(notasCurso);


// declaracion de arreglos de forma implicita  inicializacion reservar espacio en memoria
let videoGames : string[] = [];

videoGames.push("SuperMario");
videoGames.push("Doom");
videoGames.push("D 4");
// videoGames.push(false);
// videoGames.push(1);

console.log(videoGames);


let notasCurso2 : (string | number)[]=[];

notasCurso2.push("Catalina")
notasCurso2.push(2)
notasCurso2.push(4)
// notasCurso2.push(false)

videoGames.forEach(videogame=>{
   
    console.log(videogame, videogame.length);
    console.log(`El videojuego es ${videogame} con longitud ${videogame.length}`);
})