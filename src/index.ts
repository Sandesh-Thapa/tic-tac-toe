const cells = document.querySelectorAll(".cell")!;
const resetBtn = document.getElementById("restart") as HTMLButtonElement;
const playerTurn = document.getElementById("player") as HTMLHeadingElement;
const win = document.querySelector(".win") as HTMLHeadingElement;

const PLAYER_X = "X";
const PLAYER_O = "O";
let gameOver = false;
let turn = PLAYER_X;

// set event listeners
resetBtn.addEventListener("click", resetGame);
cells.forEach((cell: Element): void =>
  cell.addEventListener("click", () => clickCell(cell))
);

// display current player turn
displayTurn();

function clickCell(cell: Element): void {
  if (cell.innerHTML === "") {
    if (gameOver) return;
    cell.innerHTML =
      turn === PLAYER_X
        ? `<span>${PLAYER_X}</span>`
        : `<span>${PLAYER_O}</span>`;
    checkWin();
    turn = turn === PLAYER_X ? PLAYER_O : PLAYER_X;
    displayTurn();
  } else {
    cell.classList.add("not-allowed");
  }
}

function checkWin() {
  const cell1 = document.querySelector("#cell-1")!.innerHTML;
  const cell2 = document.querySelector("#cell-2")!.innerHTML;
  const cell3 = document.querySelector("#cell-3")!.innerHTML;
  const cell4 = document.querySelector("#cell-4")!.innerHTML;
  const cell5 = document.querySelector("#cell-5")!.innerHTML;
  const cell6 = document.querySelector("#cell-6")!.innerHTML;
  const cell7 = document.querySelector("#cell-7")!.innerHTML;
  const cell8 = document.querySelector("#cell-8")!.innerHTML;
  const cell9 = document.querySelector("#cell-9")!.innerHTML;

  if (
    (cell1 === cell2 && cell2 === cell3 && cell1 !== "") ||
    (cell4 === cell5 && cell5 === cell6 && cell4 !== "") ||
    (cell7 === cell8 && cell8 === cell9 && cell7 !== "") ||
    (cell1 === cell4 && cell4 === cell7 && cell1 !== "") ||
    (cell2 === cell5 && cell5 === cell8 && cell2 !== "") ||
    (cell3 === cell6 && cell6 === cell9 && cell3 !== "") ||
    (cell1 === cell5 && cell5 === cell9 && cell1 !== "") ||
    (cell3 === cell5 && cell5 === cell7 && cell3 !== "")
  ) {
    displayWin();
  } else if (
    cell1 !== "" &&
    cell2 !== "" &&
    cell3 !== "" &&
    cell4 !== "" &&
    cell5 !== "" &&
    cell6 !== "" &&
    cell7 !== "" &&
    cell8 !== "" &&
    cell9 !== ""
  ) {
    win.innerText = "Game draw";
    win.classList.add("show");
    resetBtn.classList.add("show");
    gameOver = true;
  }
}

function displayTurn(): void {
  if (gameOver) {
    playerTurn.innerText = "";
  } else {
    playerTurn.innerText = `"${turn}'s turn"`;
  }
}

function displayWin(): void {
  win.innerText = `'${turn}' wins!`;
  win.classList.add("show");
  resetBtn.classList.add("show");
  gameOver = true;
}

function resetGame(): void {
  turn = PLAYER_X;
  gameOver = false;
  win.classList.remove("show");
  resetBtn.classList.remove("show");
  cells.forEach((cell) => {
    cell.innerHTML = "";
    cell.classList.remove("not-allowed");
  });
  playerTurn.innerText = `"${turn}'s turn"`;
}

export {};
