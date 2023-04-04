let userScore = 0;
let compScore = 0;

const rockButton = document.querySelector("#piedra");
const paperButton = document.querySelector("#papel");
const scissorButton = document.querySelector("#tijera");

const compSelection = () => {
  const arrChoice = ["piedra", "papel", "tijera"];
  const choice = arrChoice[Math.floor(Math.random() * arrChoice.length)];

  return choice;
};

function playRound(userPlay, computerPlay) {
  console.log("1", userPlay, "2", computerPlay);
  if (userPlay === computerPlay) {
    return "Empate";
  } else if (userPlay === "piedra" && computerPlay === "tijera") {
    userScore++;
    return "ganaste";
  } else if (userPlay === "piedra" && computerPlay === "papel") {
    compScore++;
    return "Perdiste";
  } else if (userPlay === "papel" && computerPlay === "piedra") {
    userScore++;
    return "ganaste";
  } else if (userPlay === "papel" && computerPlay === "tijera") {
    compScore++;
    return "Perdiste";
  } else if (userPlay === "tijera" && computerPlay === "papel") {
    userScore++;
    return "ganaste";
  } else if (userPlay === "tijera" && computerPlay === "piedra") {
    compScore++;
    return "Perdiste";
  }
}

function game() {
  let plays = 0;
  paperButton.addEventListener("click", () => {
    if (plays < 5) {
      const computerPlay = compSelection();
      const userPlay = "Papel".toLowerCase();
      console.log(playRound(userPlay, computerPlay));
      print(userPlay, computerPlay);
      plays++;
    }
    if (plays === 5) {
      resultado();
    }
  });

  rockButton.addEventListener("click", () => {
    if (plays < 5) {
      const computerPlay = compSelection();
      const userPlay = "piedra";
      console.log(playRound(userPlay, computerPlay));
      print(userPlay, computerPlay);
      plays++;
    }
    if (plays === 5) {
      resultado();
    }
  });

  scissorButton.addEventListener("click", () => {
    if (plays < 5) {
      const computerPlay = compSelection();
      const userPlay = "Tijera".toLowerCase();
      console.log(playRound(userPlay, computerPlay));
      print(userPlay, computerPlay);
      plays++;
    }
    if (plays === 5) {
      resultado();
    }
  });
}

game();

function print(userPlay, computerPlay) {
  const userOutcome = document.querySelector("#userOutcome");
  const compOutcome = document.querySelector("#compOutcome");
  const p = document.createElement("p");
  const p2 = document.createElement("p");
  p.textContent = userPlay;
  p.classList.add("result");
  p2.textContent = computerPlay;
  p2.classList.add("result");
  userOutcome.append(p);
  compOutcome.append(p2);
}

function resultado() {
  const result = document.querySelector("#results");
  const foot = document.querySelector(".foot");

  if (userScore < compScore) {
    const finalResult = document.createElement("p");
    finalResult.innerHTML = "Perdiste!!! <span> 😭 </span>";
    finalResult.classList.add("response");
    result.append(finalResult);
    foot.style.display = "block";
  } else if (userScore > compScore) {
    const finalResult = document.createElement("p");
    finalResult.innerHTML = "Ganaste!!! <span> 🤩 </span>";
    finalResult.classList.add("response");
    result.append(finalResult);
    foot.style.display = "block";
  } else if (userScore === compScore) {
    const finalResult = document.createElement("p");
    finalResult.innerHTML = "Empataste!!! <span> 🥸 </span>";
    finalResult.classList.add("response");
    result.append(finalResult);
    foot.style.display = "block";
  }
}
