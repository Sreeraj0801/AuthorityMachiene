var board = ["", "", "", "", "", "", "", "", ""], currentPlayer = "X", gameOver = !1; function makeMove(e) { gameOver || "" !== board[e] || (board[e] = currentPlayer, document.getElementsByClassName("cell")[e].innerText = currentPlayer, checkWin(currentPlayer) ? (alert("Player " + currentPlayer + " wins!"), gameOver = !0) : -1 === board.indexOf("") ? (alert("It's a draw!"), gameOver = !0) : currentPlayer = "X" === currentPlayer ? "O" : "X") } function checkWin(e) { for (var r = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]], a = 0; a < r.length; a++) { var n = r[a]; if (board[n[0]] === e && board[n[1]] === e && board[n[2]] === e) return !0 } return !1 } function resetGame() { board = ["", "", "", "", "", "", "", "", ""], currentPlayer = "X", gameOver = !1; for (var e = document.getElementsByClassName("cell"), r = 0; r < e.length; r++)e[r].innerText = "" }