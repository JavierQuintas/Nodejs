const fs = require("fs");

let persona = { 
                name: 'Javier', 
                surname: 'Fernandez Quintas', 
                age: 19 
        };

fs.writeFile('./persona.json', JSON.stringify(persona), () => {
    fs.readFile('./persona.json',(err, datos) => {
        persona = JSON.parse(datos);
        console.log('Nombre   :', persona.name);
        console.log('Apellido :', persona.surname);
        console.log('Edad     :', persona.age);
    });
})