import { useState } from 'react';
import GameBoard from './components/GameBoard';
import GameStatus from './components/GameStatus';
import './App.css';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // rows
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // columns
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonals
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (squares[index] || winner) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = currentPlayer;
    setSquares(newSquares);

    const newWinner = calculateWinner(newSquares);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const isDraw = !winner && squares.every(square => square !== null);

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <GameStatus 
        winner={winner} 
        currentPlayer={currentPlayer}
        isDraw={isDraw}
      />
      <GameBoard 
        squares={squares}
        onClick={handleClick}
      />
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}

export default App;