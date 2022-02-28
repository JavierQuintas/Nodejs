const fs = require("fs/promises");
const readline = require("readline");

let fichero = './persona.json';
let persona = { 
                name: "", 
                surname: "", 
                age: "" 
            };

datos('Escribe tu nombre: ')
.then((consola) => {
    persona.name = consola;
    return datos('Escribe tu apellido: ');
})
.then((consola) => {
    persona.surname = consola;
    return datos('Escibe tu edad: ');
})
.then((consola) => {
    persona.age = consola;
    return fs.writeFile(fichero, JSON.stringify(persona));
})
.then(() => {
    return fs.readFile(fichero);
})
.then((datos) => {
    persona = JSON.parse(datos);
    console.log('Nombre   :', persona.name);
    console.log('Apellido :', persona.surname);
    console.log('Edad     :', persona.age);
    return fs.unlink(fichero);
})
.then(() => {
    console.log('json borrado automaticamente');
})
.catch((error) => {
    console.log(error);
})

function datos(pregunta) {
    const promesa = new Promise((resolve, reject) => {
        const rl = readline.createInterface(process.stdin, process.stdout);
        rl.question(pregunta, (consola) => {
            resolve(consola);
            rl.close();
        });
    });
    return promesa;
}