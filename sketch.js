let gridSize = 16;
const gridBtn = document.querySelector(".grid-size-button");
const grid = document.querySelector("#grid");

function updateGrid() {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("grid-row");
    grid.appendChild(row);
  }

  const rows = document.querySelectorAll(".grid-row")
  let count = 1;

  rows.forEach((row) => {
    for (let i = 0; i < gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      square.id = count
      row.appendChild(square);
      count++;
    }
  })
}

function createGrid() {
  gridSize = parseInt(prompt("Enter a number to choose a new grid size", 16));

  while (gridSize > 100) gridSize = parseInt(prompt("Enter a number to choose a new grid size", 16));

  if (isNaN(gridSize)) {
    return;
  }

  document.querySelectorAll(".grid-square").forEach((e) => e.parentNode.removeChild(e));
  document.querySelectorAll(".grid-row").forEach((e) => e.parentNode.removeChild(e));

  updateGrid();
}

function randomInteger(max) {
  return (Math.random() * (max + 1));
}

function randomRgb() {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);

  return `rgb(${r}, ${g}, ${b})`;
}

gridBtn.onclick = createGrid;

updateGrid();

grid.onmouseover = () => {
  let gridSquares = document.querySelectorAll(".grid-square");

  gridSquares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      let color = randomRgb();
      const gridSquare = document.getElementById(square.id);

      gridSquare.style.backgroundColor = `${color}`;
    });
  });
}

