let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
  const arrChoices = ["piedra", "papel", "tijera"];
  const randomNum = Math.floor(Math.random() * arrChoices.length);
  return arrChoices[randomNum];
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return "Empetaste, vuelve a intentarlo";
  } else if (playerSelection === "piedra" && computerSelection === "papel") {
    computerScore++;
    return "Perdiste!! Papel cubre a piedra";
  } else if (playerSelection === "piedra" && computerSelection === "tijera") {
    playerScore++;
    return "Ganaste!! Piedra rompe la tijera";
  } else if (playerSelection === "papel" && computerSelection === "tijera") {
    computerScore++;
    return "Perdiste!! Tijera corta el papel";
  } else if (playerSelection === "papel" && computerSelection === "piedra") {
    playerScore++;
    return "Ganaste!! Papel cubre la piedra";
  } else if (playerSelection === "tijera" && computerSelection === "papel") {
    playerScore++;
    return "Ganaste!! Tijera corta papel";
  } else if (playerSelection === "tijera" && computerSelection === "piedra") {
    computerScore++;
    return "Perdiste!! Piedra rompe la tijera";
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Elija:",
      "Piedra, Papel o Tijera"
    ).toLowerCase();
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  }

  if (computerScore > playerScore) {
    return "Perdiste perro!! Vuelve a jugar";
  } else if (playerScore > computerScore) {
    return "Ganaste perro!!! Vamos por unas chelas";
  } else {
    return "Empateeee!! Ajustaste bien perrito";
  }
};

console.log(game());
