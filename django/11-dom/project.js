// Restart button
let restart = document.querySelector("#b");

// Grabs all squares
let squares = document.querySelectorAll("td");

// Clear all squares
function clearBoard(params) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

restart.addEventListener("click", clearBoard);

// Check square marker

function changeMarker() {
  if (this.textContent === "") {
    this.textContent = "X";
  } else if (this.textContent === "X") {
    this.textContent = "O";
  } else {
    this.textContent = "";
  }
}

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker);
}

// For loop to add event listeners
