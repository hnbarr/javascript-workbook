Checkers Plan;

Tests;
-Create Board
-Have 24 Checkers
-Move a Checker
-Jump a Checker & Remove Piece

To start, I need to place the checkers onto the board. Things I know about placing pieces;
-12 of each color.
-One space between each piece.
-Starting point alternating between row 0 & row 1.

To move the pieces, I need to get user input, num1num2 , and convert input into arr[num1][num2].
Things I know about converting;
-The user input will be a combination of two numbers, ex 50 or 41
-The board is an array of rows and columns, ex board[row][column]
-The first number in user input = arr[row][], second number in user input = arr[][column].

To jump a piece, I need to be able to see if the space after piece is empty and in-line.
-The space between legal moves should be divisible from the same number or be the same amount apart. 

To remove a jumped piece, I need to change the value of that spot to none, to show an empty space.
-pop wouldn't work, but reassigning the value would probably be best for this.