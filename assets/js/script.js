var playerYellow = "Y";
var playerRed = "R";
var currentPlayer = playerYellow;

var gameOver = false;
var board;

var rows = 6;
var columns = 7;

window.onload = function () {
    setGame();
};


function setGame(rows, columns) {
    // Create an empty game board as a 2D array
    let board: [];


    // Loop to create rows
    for (let r = 0; r < rows; r++) {
        let row = [];

        // Loop to create columns
        for (let c = 0; c < columns; c++) {

            // Initialize each cell with an empty value
            row.push('');

            // Create an HTML element for the cell
            let title = document.createElement("div");
            title.id = r.toString() + "-" + c.toString();

        }
    }
}