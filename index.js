

const boardSize = 3;
var gobalWinner = false;
let turn = 0;
var board = [[0,0,0],[0,0,0],[0,0,0]];
let boardMap = new Map();
boardMap.set("1", [0,0]);
boardMap.set("2", [0,1]);
boardMap.set("3", [0,2]);
boardMap.set("4", [1,0]);
boardMap.set("5", [1,1]);
boardMap.set("6", [1,2]);
boardMap.set("7", [2,0]);
boardMap.set("8", [2,1]);
boardMap.set("9", [2,2]);

let valueMap = new Map();
valueMap.set("X", 2);
valueMap.set("O", 1);
valueMap.set("_", 0);




function onClick(clickedId){
    // console.log(clickedId);
    //

    if(gobalWinner){
        alert("GAME ENDED");
        return;
    }

    if(full()){
        alert("GAME FINSHED");
        if(checkWinner()){
            return;
        }
        alert("DRAW");

    }

    let docEl = document.getElementById(clickedId);
    if(checkOccupied(docEl)){
        alert("OCCUPIED");
        return;
    }

    let value = newTurn();
    // console.log(docEl.innerText);
    let coords = boardMap.get(clickedId);


    // console.log(coords);
    board[coords[0]][coords[1]] = valueMap.get(value);
    // console.log(board);
    docEl.innerText=value;
    if(checkWinner()){
        alert("WINNER is " + value);
        return;
    }

}
function checkHorizontal(){
    // console.log("new check");


    for(let i = 0; i < boardSize; i++){
        let winner = true;
        let target;
        let count = 0;

        // console.log("NEW LINE")

        for(let j = 0; j < boardSize; j++){
            let value = board[j][i];
            // console.log("Value")
            // console.log("value: " + value);
            if(j === 0 && value !== 0){
                target = board[j][i];
                // console.log("target: " + target);

            }

            if(target !== value){
                // console.log("NOT A WIN")
                winner = false;
                break;
            }




        }
        if(winner){
            return true;
        }
    }






}
function checkVertical(){

    for(let i = 0; i < boardSize; i++){
        let winner = true;
        let target;
        let count = 0;

        // console.log("NEW LINE")

        for(let j = 0; j < boardSize; j++){
            let value = board[i][j];
            // console.log("Value")
            // console.log("value: " + value);
            if(j === 0 && value !== 0){
                target = board[i][j];
                // console.log("target: " + target);

            }

            if(target !== value){
                // console.log("NOT A WIN")
                winner = false;
                break;
            }




        }
        if(winner){
            return true;
        }
    }


}

function checkDiagonalRL(){

    return false;

}
function checkDiagonalLR(){

    return false;
}
function checkWinner(){
    if(checkVertical() || checkHorizontal() || checkDiagonalLR() || checkDiagonalRL()){
        gobalWinner = true;
        return true;
    }
    return false;


}

function newTurn(){
   if(turn % 2 === 0){
       turn++;
       return "X";
   }else{
       turn++;
       return "O";
   }

}

function checkOccupied(docEl){
    let value = docEl.innerText;
    if(value === "_"){
        return false;
    }
    return true;

}

function full(){
    if(turn === 8){
        // alert("isFull");
        return true;
    }
    return false;
}
