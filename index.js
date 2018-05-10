//Coins in javascript

let board = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],

];
const edgeY = board[0].length - 3;
const edgeX = board.length - 3;

for (let x = 0; x < board.length; x++) {
    const gameBoard = document.getElementById("wrapper");
    let column = document.createElement("div");
    column.className = "column";
    column.dataset.columnIndex = x;
    gameBoard.appendChild(column);



}
let currentPlayer = "red";


const addCoin = function (event) {
    const coinDrop = event.currentTarget;

    const columnNumber = coinDrop.dataset.columnIndex;

    if (coinDrop.childElementCount < 6) {
        const coin = document.createElement("div");
        if (currentPlayer === "red") {
            coin.className = "redCoin";
            coinDrop.appendChild(coin);
            coin.dataset.redPlace = 1;
            board[columnNumber][coinDrop.childElementCount - 1] = Number(coin.dataset.redPlace);
            console.log(board)
            horizontalForTheWin();
            verticalForTheWin();
            diagonallyUpForTheWin();
            diagonallyDownForTheWin();

            currentPlayer = "black";
        } else if (currentPlayer === "black") {
            coin.className = "blackCoin";
            coinDrop.appendChild(coin);
            coin.dataset.blackPlace = 2;
            board[columnNumber][coinDrop.childElementCount - 1] = Number(coin.dataset.blackPlace);
            console.log(board)

            currentPlayer = "red";
            horizontalForTheWin();
            verticalForTheWin();
            diagonallyUpForTheWin();
            diagonallyDownForTheWin();

        }
    }

}

function verticalForTheWin() {

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < edgeY; x++) {
            let coinSpot = board[y][x];

            if (coinSpot === 1) {
                if (coinSpot === board[y][x + 1] && coinSpot === board[y][x + 2] && coinSpot === board[y][x + 3]) {
                   playerRedWin();
                }
            } else if (coinSpot === 2) {
                if (coinSpot === board[y][x + 1] && coinSpot === board[y][x + 2] && coinSpot === board[y][x + 3]) {
                    playerBlackWin();

                }
            }
        }

    }
}

function horizontalForTheWin() {
    for (let y = 0; y < edgeX; y++) {
        for (let x = 0; x < edgeY; x++) {
            let coinSpot = board[y][x];

            if (coinSpot === 1) {
                if (coinSpot === board[y + 1][x] && coinSpot === board[y + 2][x] && coinSpot === board[y + 3][x]) {
                  
                    playerRedWin();



                }
            } else if (coinSpot === 2) {
                if (coinSpot === board[y + 1][x] && coinSpot === board[y + 2][x] && coinSpot === board[y + 3][x]) {
                    playerBlackWin();

                }
            }


        }
    }
}

function diagonallyUpForTheWin() {
    for (let y = 0; y < edgeY; y++) {
        for (let x = 0; x < board.length - 2; x++) {
            let coinSpot = board[y][x];

            if (coinSpot === 1) {

                if (coinSpot === board[y + 1][x + 1] && coinSpot === board[y + 2][x + 2] && coinSpot === board[y + 3][x + 3]) {
                   playerRedWin();
                }
            } else if (coinSpot === 2) {
                if (coinSpot === board[y + 1][x + 1] && coinSpot === board[y + 2][x + 2] && coinSpot === board[y + 3][x + 3]) {
                    playerBlackWin();
                }
            }
        }
    }
}

function diagonallyDownForTheWin() {
    for (let y = 0; y < edgeY; y++) {
        for (let x = 0; x < edgeX; x++) {
            let coinSpot = board[y][x];

            if (coinSpot === 1) {

                if (coinSpot === board[y + 1][x - 1] && coinSpot === board[y + 2][x - 2] && coinSpot === board[y + 3][x - 3]) {
                    playerRedWin();
                }
            } else if (coinSpot === 2) {
                if (coinSpot === board[y + 1][x - 1] && coinSpot === board[y + 2][x - 2] && coinSpot === board[y + 3][x - 3]) {
                    playerBlackWin();
                }
            }
        }
    }
}


function playerRedWin(){
    const node = document.createElement("p");
    const textNode = document.createTextNode("Red Player Wins")
    node.appendChild(textNode);
    document.getElementById("win").appendChild(node)

}


function playerBlackWin(){
    const node = document.createElement("p");
    const textNode = document.createTextNode("Black Player Wins")
    node.appendChild(textNode);
    document.getElementById("win").appendChild(node)

}




function addCointoColumn() {
    for (let columnElement of document.querySelectorAll(".column")) {
        columnElement.addEventListener("click", addCoin)
    }
}
addCointoColumn();