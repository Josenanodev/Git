const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Piedra, papel o tijera? ", function (respuesta) {
  console.log("Tu respuesta es: " + respuesta);
  rl.close();
});

const jugadasPosibles = ["piedra", "papel", "tijera"];

function jugadaMaquina() {
  const numeroAleatorio = Math.floor(Math.random() * 3);
  const jugada = jugadasPosibles[numeroAleatorio];
  return jugada;
}

function compararJugadas(jugadaUsuario, jugadaMaquina) {
  if (jugadaUsuario === jugadaMaquina) {
    console.log("Empate");
  } else if (jugadaUsuario === "papel") {
    if (jugadaMaquina === "piedra") {
      console.log("Ganaste");
    } else if (jugadaMaquina === "tijera") {
      console.log("Perdiste");
    }
  }
}
