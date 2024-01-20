//let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroSecreto = 5;
let numUser = 0;
let intentos = 0;
let palabraVeces = "vez";

while (numUser != numeroSecreto) {
    numUser = prompt("Me indicas un numero entre el 1 y 10:");

    console.log(numUser);

    if (numUser == numeroSecreto) {
        alert(`acertaste, el numero es: ${numeroSecreto}, Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numUser > numeroSecreto) {
            alert("El numero secreto es menor");
        } else {
            alert("el numero secreto es mayor");
        }
        alert("numero incorrecto");
        //Incrementar contador cuando no acierta
        intentos++;
        palabraVeces = "veces";
    }
}
