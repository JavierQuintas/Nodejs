const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

// Función readConsole
function readConsole(callback) {
    let persona = {};
    rl.question('Escribe tu nombre: ', (name) => {
        persona.name = name;
        rl.question('Escribe tu apellido: ', (surname) => {
            persona.surname = surname;
            rl.question('Escirbe tu edad: ', (age) => {
                persona.age = parseInt(age);
                callback(persona);
                rl.close();
            });
        });
    });
}

exports.readConsole = readConsole;