const board = ['', '', '', '', '', '', '', '', ''];
const humanPlayer = 'O';
const aiPlayer = 'X';
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const restartBtn = document.getElementById('restart');

startGame();

function startGame() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
        cells[i].addEventListener('click', onCellClick, false);
    }
    restartBtn.addEventListener('click', startGame, false);
}

function onCellClick(event) {
    const cellIndex = event.target.getAttribute('data-index');

    if (board[cellIndex] === '') {
        makeMove(cellIndex, humanPlayer);
        if (!checkWinner(board, humanPlayer) && !checkTie()) {
            const aiMove = getBestMove();
            makeMove(aiMove, aiPlayer);
        }
    }
}

function makeMove(index, player) {
    board[index] = player;
    cells[index].innerText = player;

    if (checkWinner(board, player)) {
        setTimeout(() => alert(`${player} wins!`), 100);
    } else if (checkTie()) {
        setTimeout(() => alert('It\'s a tie!'), 100);
    }
}

function checkWinner(board, player) {
    for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (board[a] === player && board[b] === player && board[c] === player) {
            return true;
        }
    }
    return false;
}

function checkTie() {
    return board.every(cell => cell !== '');
}

function getBestMove() {
    return minimax(board, aiPlayer).index;
}

function minimax(newBoard, player) {
    const availableSpots = newBoard.filter(s => s === '');

    if (checkWinner(newBoard, humanPlayer)) {
        return { score: -10 };
    } else if (checkWinner(newBoard, aiPlayer)) {
        return { score: 10 };
    } else if (availableSpots.length === 0) {
        return { score: 0 };
    }

    const moves = [];

    for (let i = 0; i < availableSpots.length; i++) {
        const move = {};
        move.index = newBoard.indexOf(availableSpots[i]);
        newBoard[move.index] = player;

        if (player === aiPlayer) {
            const result = minimax(newBoard, humanPlayer);
            move.score = result.score;
        } else {
            const result = minimax(newBoard, aiPlayer);
            move.score = result.score;
        }

        newBoard[move.index] = '';
        moves.push(move);
    }

    let bestMove;
    if (player === aiPlayer) {
        let bestScore = -Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove];
}
