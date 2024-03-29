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

  rows.forEach((row) => {
    for (let i = 0; i < gridSize; i++) {
      const square = document.createElement("div");
      square.classList.add("grid-square");
      row.appendChild(square);
    }
  })
}

function createGrid() {
  document.querySelectorAll(".grid-square").forEach((e) => e.parentNode.removeChild(e));
  document.querySelectorAll(".grid-row").forEach((e) => e.parentNode.removeChild(e));

  gridSize = parseInt(prompt("Enter a number to choose a new grid size", 16));

  return updateGrid();
}

gridBtn.onclick = createGrid;

updateGrid();

