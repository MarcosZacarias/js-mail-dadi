// Add Player 1
const playerUtent = prompt("Inserisci il tuo nome da giocatore");
console.log("Giocatore 1: " + playerUtent);

// Add Player 2
const playerPC = "Computer";
console.log("Giocatore 2: " + playerPC);

// Generate number random Player 1
const numberUtent = Math.floor(Math.random() * 6) + 1;
console.log(playerUtent + " ha fatto: " + numberUtent);

// Generate number random Player 2
const numberPC = Math.floor(Math.random() * 6) + 1;
console.log(playerPC + " ha fatto: " + numberPC);

// Select winner
if (numberUtent > numberPC) {
  console.log("Vincitore " + playerUtent);
} else if (numberUtent == numberPC) {
  console.log("Pareggio");
} else {
  console.log("Vincitore " + playerPC);
}
