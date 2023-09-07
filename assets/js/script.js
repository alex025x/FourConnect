var playerYellow = "Y";
var playerRed = "R";
var currentPlayer = playerYellow;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;

window.onload = function() {
    setGame();
}


function setGame() {
    // Create an empty game board as a 2D array
    board = [];


    // Loop to create rows
    for (let r = 0; r < rows; r++) {
        let row = [];

        // Loop to create columns
        for (let c = 0; c < columns; c++) {

            // Initialize each cell with an empty value
            row.push('  ');

            // Create an HTML element for the cell
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();



            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").append(tile);

        }
        board.push(row)
    }
}