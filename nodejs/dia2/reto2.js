const fs = require('fs/promises');

let fichero = './persona.json';
let persona = { 
                name: 'Javier',
                surname: 'Fernandez Quintas',
                age: 19 
            };

fs.writeFile(fichero, JSON.stringify(persona))
.then(() => {
    return fs.readFile(fichero);
})

fs.writeFile("persona.json", JSON.stringify(persona))
.then(()=>{
    return fs.readFile("persona.json");
})
.then(personaRaw =>{
    console.log(JSON.parse(personaRaw));
})
.catch(error =>{
    console.log(error);
})