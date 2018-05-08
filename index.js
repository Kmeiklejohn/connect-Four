//Coins in javascript
let numColumns = 7;
let numRows = 6;
let board = [
    [],
    [],
    [],
    [],
    [],
    []
];


for (let x = 0; x < numColumns; x++) {
    const gameBoard = document.getElementById("wrapper");
    let column = document.createElement("div");
        column.className = "column";
        column.id = "column" +x.toString();
    gameBoard.appendChild(column);

      for (let y = 0; y < numRows; y++) {
        let row = document.createElement("div");
       // row.className = "row";
    //  row.id = "row" + y.toString();
  //  column.appendChild(row);

    
    }
}
let currentPlayer = "red";


addCoin = function (event) {
    const coinDrop = event.currentTarget;
    console.log(coinDrop);
    if (coinDrop.childElementCount < numRows)
        if (currentPlayer === "red") {
            const redCoin = document.createElement("div");
            redCoin.className = "redCoin";
            coinDrop.appendChild(redCoin);
            const redPlace = 1;
            
          



            currentPlayer = "black";
        } else if (currentPlayer === "black") {
        const blackCoin = document.createElement("div")
        blackCoin.className = "blackCoin";
        coinDrop.appendChild(blackCoin);
        const blackPlace = 2; 

        currentPlayer = "red";
    }
    //forTheWin();
}

//const forTheWin = () =>{
//  if 


function addCointoColumn() {
    for (let columnElement of document.querySelectorAll(".column")) {
        columnElement.addEventListener("click", addCoin)
    }
}
addCointoColumn();