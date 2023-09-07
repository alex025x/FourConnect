var playerYellow = "Y";
var playerRed = "R";
var currentPlayer = playerYellow;

var gameOver = false;
var board;
var currColumns;

var rows = 6;
var columns = 7;

window.onload = function () {
    setGame();
};

function setGame() {
    // Create an empty game board as a 2D array
    board = [];
    currColumns = [5, 5, 5, 5, 5, 5, 5, ]

    // Loop to create rows
    for (let r = 0; r < rows; r++) {
        let row = [];

        // Loop to create columns
        for (let c = 0; c < columns; c++) {
            // Initialize each cell with an empty value
            row.push('');

            // Create an HTML element for the cell
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            tile.addEventListener("click", setPiece);
            document.getElementById("board").appendChild(tile);
        }
        board.push(row);
    }
}

function setPiece() {
    if (gameOver) {
        return;
    }

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);


    r= currColumns[c];
    if (r < 0) {
        return;
    }

    // Check if the cell is already occupied
    if (board[r][c] === '') {
        board[r][c] = currentPlayer;
        let tile = document.getElementById(r.toString() + "-" + c.toString());
        // If the cell is empty, set the player's piece and style it.

        if (currentPlayer === playerRed) {
            tile.classList.add("red-piece");
            currentPlayer = playerYellow;
        } else {
            tile.classList.add("yellow-piece");
            currentPlayer = playerRed;
        }

        
    }

    r -= 1; //Update the row height for the column
    currColumns[c] = r; 

    checkWinner();

}

function checkWinner() {
    // Check for a horizontal win
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== '' && board[r][c] === board[r][c + 1] && board[r][c + 1] === board[r][c + 2] && board[r][c + 2] === board[r][c + 3]) {
                setWinner(r, c);
                return;
            }
        }
    }

    // Check for a vertical win
    for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows - 3; r++) {
            if (board[r][c] !== '' && board[r][c] === board[r + 1][c] && board[r + 1][c] === board[r + 2][c] && board[r + 2][c] === board[r + 3][c]) {
                setWinner(r, c);
                return;
            }
        }
    }

    // Check for diagonal (top-right to bottom-left) win
    for (let r = 3; r < rows; r++) {
        for (let c = 0; c < columns - 3; c++) {
            if (board[r][c] !== '' && board[r][c] === board[r - 1][c + 1] && board[r - 1][c + 1] === board[r - 2][c + 2] && board[r - 2][c + 2] === board[r - 3][c + 3]) {
                setWinner(r, c);
                return;
            }
        }
    }




}


function setWinner(r, c) {
    let winner = document.getElementById("winner");
    if (board[r][c] == playerRed) {
        winner.innerText = "Red Wins";
    } else {
        winner.innerText = "Yellow Wins";
    }
    gameOver = true;
}

