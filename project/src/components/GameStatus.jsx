import React from 'react';

function GameStatus({ winner, currentPlayer, isDraw }) {
  if (winner) {
    return <div className="status">Player {winner} wins!</div>;
  } else if (isDraw) {
    return <div className="status">Game is a draw!</div>;
  } else {
    return <div className="status">Player {currentPlayer}'s turn</div>;
  }
}

export default GameStatus;