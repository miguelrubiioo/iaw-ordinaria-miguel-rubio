const prompt = require("prompt-sync")();

const nombres = [];
let nombre = "";

while (nombre !== "salir") {
    nombre = prompt("Di un nombre o escribe 'salir' para terminar: ");
    if (nombre !== "salir") {
        nombres.push(name);
    }
}

console.log("Los nombres que has introducido son:");
nombres.forEach((n) => console.log(n));