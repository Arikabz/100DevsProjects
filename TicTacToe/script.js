


let currentPlayer = 'X';
let gameEnded = false;

const playerWon = () => `Player ${currentPlayer} won!`;
const playerDraw = () => `Draw!`;
const currentPlayerTurn = () => `${currentPlayer}'s turn.`;
// const currentPlayerTurn = () =>

const gameStatus = document.getElementById('winOrLose');

gameStatus.innerHTML = currentPlayerTurn();

let turn = 0;
let player1 = true;
let player2 = false;
let currentSymbol = 'X';

function nextTurn(){

  if(currentSymbol == 'X'){
    currentSymbol = 'O';
  }
  else if (currentSymbol == 'O'){
    currentSymbol = 'X'
  }
}

let boardArray = ['','','','','','','','',''];

class Button {
  constructor(idNumber){
    this.idIndex = idNumber;
    const idNum = `#b${idNumber}`;
    this.selector = document.querySelector(idNum);
    // this.selector.addEventListener('click',setBox(this.idIndex,this.selector));
  }
}

function setBox(idIndex,selector){
  
  console.log(idIndex);
  
  if(gameEnded==false){
    if(boardArray[idIndex]==''){
      
      boardArray[idIndex] = currentSymbol;
      selector.innerText = currentSymbol;
      nextTurn();
      document.getElementById('winOrLose').innerText = `${currentSymbol}'s turn`;
      
    } else {
      //alert('Already taken!')
    }
  
      didIWin();
  }    
}

let button0 = new Button(0)
button0.selector.addEventListener('click',function(){setBox(button0.idIndex,button0.selector)});
let button1 = new Button(1)
button1.selector.addEventListener('click',function(){setBox(button1.idIndex,button1.selector)});
let button2 = new Button(2)
button2.selector.addEventListener('click',function(){setBox(button2.idIndex,button2.selector)});
let button3 = new Button(3)
button3.selector.addEventListener('click',function(){setBox(button3.idIndex,button3.selector)});
let button4 = new Button(4)
button4.selector.addEventListener('click',function(){setBox(button4.idIndex,button4.selector)});
let button5 = new Button(5)
button5.selector.addEventListener('click',function(){setBox(button5.idIndex,button5.selector)});
let button6 = new Button(6)
button6.selector.addEventListener('click',function(){setBox(button6.idIndex,button6.selector)});
let button7 = new Button(7)
button7.selector.addEventListener('click',function(){setBox(button7.idIndex,button7.selector)});
let button8 = new Button(8)
button8.selector.addEventListener('click',function(){setBox(button8.idIndex,button8.selector)});
console.log(boardArray);


function reset() {
  button0.selector.innerHTML = '&nbsp;';
  button1.selector.innerHTML = '&nbsp;';
  button2.selector.innerHTML = '&nbsp;';
  button3.selector.innerHTML = '&nbsp;';
  button4.selector.innerHTML = '&nbsp;';
  button5.selector.innerHTML = '&nbsp;';
  button6.selector.innerHTML = '&nbsp;';
  button7.selector.innerHTML = '&nbsp;';
  button8.selector.innerHTML = '&nbsp;';
  
  gameEnded = false;
  
  document.getElementById('winOrLose').innerText = `${currentSymbol}'s turn.`;
  
  boardArray = ['','','','','','','','',''];
}


let winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function didIWin() {
  
  for (let i = 0; i < winCondition.length; i++) {
    
    const line = winCondition[i];
    let gameRow = [];
    
    gameRow.push(boardArray[line[0]])
    gameRow.push(boardArray[line[1]])
    gameRow.push(boardArray[line[2]])
    
    if(gameRow[0] != '' && gameRow[1] != '' && gameRow[2] != ''){
          if (gameRow[0] === gameRow[1] && gameRow[1] === gameRow[2]){
            
            if(currentSymbol=='X'){
              currentSymbol = 'O';
            } else if (currentSymbol == 'O'){
              currentSymbol = 'X'
            }
            
      gameStatus.innerHTML = `${currentSymbol} wins!`
      gameEnded = true;
      
      }
    }
  }
}