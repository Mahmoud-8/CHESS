const gameBoard = document.querySelector("#gameboard");
const playerDisplay = document.querySelector("#player");
const infoDisplay = document.querySelector("info-display");
const width = 8;
let playerGo = 'black'
playerDisplay.textContent = 'black'

const startPieces = [
    rook, knight, bishop,queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook
]
function createBoard() {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = startPiece
        square.setAttribute('draggable', true)
        square.setAttribute('square-id', i)
      const row = Math.floor((63 - i) / 8) + 1
      if (row % 2 === 0) {
        square.classList.add(i % 2 === 0 ? "beige" : "brown")
      } else { 
        square.classList.add(i % 2 === 0 ? "brown" : "beige")

      }
        if ( i <= 15) {
          square.classList.add('black')
        }
      
        if ( i >= 48) {
          square.classList.add('white')
        }
      gameBoard.append(square);
    })
}
createBoard()


const allSquares = document.querySelectorAll(".square")

allSquares.forEach(square => {
  square.addEventListener('dragstart', dragStart)
  square.addEventListener('dragover', dragOver)
  square.addEventListener('drop', dragDrop)

})
let startPostitionId;
let draggedElement;

function dragStart (e) {
  startPostitionId = e.target.parentNode.getAttribute('square-id')
  draggedElement = e.target
}

function dragOver(e) {
  e.preventDefault()
}
function dragDrop(e) { 
  e.stopPropagation()
  const correctGo = draggedElement.firstChild.classList.contains(playerGo)
  const taken = e.target.classList.contains('peice')
  const valid = checkIfValid(e.target)
  const opponentGo = playerGo === 'white' ? 'black' : 'white'
  const takenByOpponent = e.target.firstChild?.classList.contains(opponentGo)
  

  if (correctGo) {
    if (takenByOpponent && valid) {
      e.target.parentNode.append(draggedElement)
      e.target.remove()
      changePlayer()
      return 
    } 
    if(taken) {
      infoDisplay.textContent = "you cannot go here!"
      setTimeout(() =>  infoDisplay.textContent = "", 2000)
     
      return
    }
    if (valid) {
      e.target.append(draggedElement)
      changePlayer()
      return
    }
  }
  //e.target.parentNode.append(draggedElement)
  //e.target.remove()
  //e.target.append(draggedElement)

}

function changePlayer() {
  if(playerGo === "black") {
    reverseIds()
    playerGo = "white"
    playerDisplay.textContent = 'white'
  } else {
    
    playerGo = "black"
    playerDisplay.textContent = 'black'
  }
}

function reverseIds() {
 const allSquares = document.querySelectorAll(".square")
 allSquares.forEach((square, i) => square.setAttribute('square-id', (width * width -1) - i))
}

function revertIds() {
  const allSquares = document.querySelectorAll(".square")
  allSquares.forEach((square, i) => square.setAttribute('square-id', i))
}





function checkIfValid(target) {
  const targetId = parseInt(target.getAttribute('square-id')) || parseInt(target.parentNode.getAttribute('square-id'));
  const startId = parseInt(startPositionId);
  const piece = draggedElement;

  switch (piece) {
    case 'pawn':
      const starterRow = [8, 9, 10, 11, 12, 13, 14, 15];
      const width = 8; 

      if (
        starterRow.includes(startId) && startId + width * 2 === targetId ||
        startId + width === targetId ||
        startId + width - 1 === targetId && !document.querySelector(`[square-id="${startId + width - 1}"]`).firstChild ||
        startId + width + 1 === targetId && !document.querySelector(`[square-id="${startId + width + 1}"]`).firstChild
      ) {
        return true;
      }
      break;
  }
}
