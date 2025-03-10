import React from 'react';
import Square from './Square';

function GameBoard({ squares, onClick }) {
  return (
    <div className="board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
}

export default GameBoard;