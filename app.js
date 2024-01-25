
//Variables
let numeroSecreto = 5;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

//console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
//console.log(`Resultado de la comparación:`,numeroUsuario==numeroSecreto);

if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    
    alert('Lo siento, no acertaste el número');
}



