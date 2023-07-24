// Add Player 1
const playerUtentInput = document.getElementById("player-1");
console.log("Giocatore 1: " + playerUtentInput.value);

let playerUtent;

// Add Player 2
const playerPC = "Computer";
console.log("Giocatore 2: " + playerPC);

// Button send
const btnSend = document.getElementById("btn-send");

// Result
let content;

const resultPrint = document.getElementById("result");

btnSend.addEventListener("click", function () {
  // Player 1
  playerUtent = playerUtentInput.value;

  // Generate number random Player 1
  const numberUtent = Math.floor(Math.random() * 6) + 1;
  console.log(playerUtent + " ha fatto: " + numberUtent);

  // Generate number random Player 2
  const numberPC = Math.floor(Math.random() * 6) + 1;
  console.log(playerPC + " ha fatto: " + numberPC);

  // Select winner
  if (numberUtent > numberPC) {
    console.log("Vincitore " + playerUtent);
    content = "Vincitore " + playerUtent;
  } else if (numberUtent == numberPC) {
    console.log("Pareggio");
    content = "Pareggio";
  } else {
    console.log("Vincitore " + playerPC);
    content = "Vincitore " + playerPC;
  }

  // Result
  let result = `
<div class="box">
  <div class="dice fs-3"> 
  <p> ${playerUtent} </p>
  <p>${numberUtent}</p>
  </div>

  <div class="dice fs-3">
    <p> ${playerPC} </p>
    <p>${numberPC}</p>
  </div>
</div>
<div class="text-center fs-2"> ${content} </div>


  `;

  // Result printer
  resultPrint.innerHTML = result;
});
