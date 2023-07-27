# Chess Game
![Alt text](<Screenshot 2023-07-27 at 5.40.23 PM.png>)
This is a simple implementation of a chess game using HTML, CSS, and JavaScript. The game features a chessboard where pieces can be moved by dragging and dropping them. The players take turns, and the game checks for valid moves and detects wins.

## How to Play

1. Open the `index.html` file in your web browser.
2. The chessboard will be displayed with the initial pieces set up.
3. The game starts with the black player's turn, and you can see it indicated on the top of the page.
4. To make a move, click on the piece you want to move and drag it to the desired destination square.
5. If the move is valid, the piece will be placed on the new square, and the turn will change to the other player.
6. If the move is invalid (e.g., trying to move a piece to an occupied square or moving out of its allowed range), an error message will be displayed, and the piece will remain in its original position.
7. The game will check for wins after each move. If the black or white king is captured, the game will end, and a winner will be declared.

## Rules

- Pawns can move one square forward, two squares forward on their first move, and capture diagonally one square forward.
- Knights move in an L-shape, two squares in one direction and one square perpendicular to it.
- Bishops move diagonally in any direction.
- Rooks move vertically or horizontally.
- Queens can move diagonally or vertically/horizontally.
- Kings can move one square in any direction.
