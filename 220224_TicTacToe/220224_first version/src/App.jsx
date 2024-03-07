import React, { useState } from 'react';
import confetti from 'canvas-confetti';

const Turns = {
  X: 'x',
  O: 'o',
};

const Combos = [
  [0, 1, 2],
  [1, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [0, 3, 6],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const Square = function ({ children, updateBoard, idx }) {
  const handleClick = function () {
    updateBoard(idx);
  };

  return (
    <div
      className="w-24 h-24 m-2 bg-gray-300 text-5xl font-bold grid place-items-center cursor-pointer"
      onClick={handleClick}
    >
      {children}
    </div>
  );
};
function App() {
  /* const board = Array(9).fill("x"); */
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(Turns.X);
  const [winner, setWinner] = useState(null);
  const checkWinner = (boardToCheck) => {
    for (const combo of Combos) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    return null;
  };

  const updateBoard = function (index) {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === 'x' ? Turns.O : Turns.X;
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(() => {
        return newWinner;
      });
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(Turns.O);
    setWinner(null);
  };
  return (
    <main>
      <div className="h-screen bg-black grid place-items-center">
        <section>
          <h1 className="text-white text-5xl text-center my-8">Tic Tac Toe</h1>
          <div className="grid grid-cols-3">
            {board.map((square, idx) => (
              <Square key={idx} idx={idx} updateBoard={updateBoard}>
                {board[idx]}
              </Square>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <span
              className={`w-16 h-16 grid place-items-center text-white text-4xl mx-2 ${
                turn === 'x' ? 'bg-blue-400' : 'bg-transparent'
              }`}
            >
              {Turns.X}
            </span>
            <span
              className={`w-16 h-16 grid place-items-center text-white text-4xl mx-2 ${
                turn === 'o' ? 'bg-blue-400' : 'bg-transparent'
              }`}
            >
              {Turns.O}
            </span>
            {winner !== null && (
              <div className="absolute inset-0 bg-[rgba(255,255,255,0.2)] grid place-items-center">
                <h1 className="text-white text-3xl aspect-square bg-black w-80 flex flex-col justify-around items-center">
                  El ganador ha sido <br />
                  <p className="bg-blue-400 aspect-square p-6 text-center text-4xl">
                    {winner}
                  </p>
                  <button
                    className="bg-white text-black rounded-xl p-2"
                    onClick={resetGame}
                  >
                    Resetear Juego
                  </button>
                </h1>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
