
const cells = document.querySelectorAll('.cell')
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelector("#restartBtn")
const winCondition =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let options = ["", "","","","","","","",""];
let playerA= "X";
let playerB = "O";
let currentPlayer ="o";
let player ="O"
let running = false;

// function click(e){
//     cells.getAttribute("")
// }

function gameInit (){
    cells.forEach((cell)=>
        cell.addEventListener("click",cellClicked));
        restartBtn.addEventListener('click' , restartGame);
        currentPlayer = playerA;
        statusText.textContent=`${currentPlayer} 's turn`;
        running = true
    
}
function cellClicked (){
    // console.log(this);
    const cellIndex = this.getAttribute("cellIndex")
    console.log(cellIndex);

    if(options[cellIndex] != "" || !running){
        return
    }
    cellUpdate(this,cellIndex);
    /*changePlayer(); */
    checkWin();

}
const cellUpdate=(index,cell)=>{
    // console.log(index);
    // console.log(cell+ "hai");
    options[cell] = currentPlayer;
    index.textContent = currentPlayer;
}
 const changePlayer = () => {
     currentPlayer = (currentPlayer !== playerA ) ? playerA :playerB;
        // currentPlayer = (currentPlayer === "X") ? "O" : "X";
        statusText.textContent = `${currentPlayer}'s turn`;
        console.log(`${currentPlayer} is the current player`);
      }

// const changePlayer =()=>{
// //   currentPlayer=  currentPlayer == "X" ? "O": "X"
// currentPlayer = (currentPlayer == "X") ? "O" : "X";
// statusText.textContent= `${currentPlayer}'s turn`
// console.log(currentPlayer+ "is player")
// }
const checkWin =()=>{
    let roundWon = false;
    for(let i =0 ; i< winCondition.length; i++){
        const condition = winCondition[i];
       const cellA = options[condition[0]];
       const cellB = options[condition[1]];
       const cellC = options[condition[2]];
    if( cellA =="" || cellB =="" || cellC ==""){
    continue;
    }
    if(cellA ==cellB && cellB == cellC){
        roundWon = true;
        break;
    }

}
if(roundWon){
    statusText.textContent =`${currentPlayer} won !..`
    running = false
}
else if ( !options.includes("")){
    statusText.textContent=" draw.."
    running = false
}
else{
    changePlayer();
}
}
const restartGame =()=>{
    currentPlayer = "X";
    options=["", "","","","","","","",""];
    statusText.textContent=`${currentPlayer}'s turn`;
    cells.forEach((cell)=>cell.textContent ="");
    running = true

}
gameInit();
