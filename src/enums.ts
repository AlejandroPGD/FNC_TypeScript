enum TrainingType {
    TRAINING_RUN,
    INTERVALS,
    LONG_RUN,
}

let tipoEntrenamiento : TrainingType;

//Declaracion de variable enum
tipoEntrenamiento = TrainingType.INTERVALS;


if (tipoEntrenamiento === TrainingType.INTERVALS) {
    console.log("El tipo de entrenamiento es  TRAINING RUN")
}

console.log(tipoEntrenamiento);
