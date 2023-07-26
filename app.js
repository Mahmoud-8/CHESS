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


const allSquares = document.querySelectorAll("#gameboard .square")

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
  const taken = e.target.classList.contains('peice')



  //e.target.parentNode.append(draggedElement)
  //e.target.remove()
  //e.target.append(draggedElement)


}