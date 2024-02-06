const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Piedra, papel o tijera? ', function(respuesta) {
    console.log("Tu respuesta es: " + respuesta);
    rl.close();
});