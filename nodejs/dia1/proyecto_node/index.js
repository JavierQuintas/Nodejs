const rc = require('./readConsole');
const wr = require('./writeAndReadObject');

rc.readConsole((persona) => {
    wr.writeAndReadObject('./persona.json', persona, (persona) => {
        console.log('Nombre   :', persona.name);
        console.log('Apellido :', persona.surname);
        console.log('Edad     :', persona.age);
    });
});