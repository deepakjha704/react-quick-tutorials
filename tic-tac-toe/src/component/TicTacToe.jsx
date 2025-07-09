import React, { useState } from "react";
import TicTacSquare from "./TicTacSquere";
import useCheckWinner from "../hooks/useCheckWinner";

function TicTacToe() {
  const squares = Array(9).fill(null);
  const [game, setGame] = useState(squares);
  const [xTurn, setXTurn] = useState(true);
  const [winner, setWinner] = useState("");

  const { checkWinner } = useCheckWinner();

  const onClick = (key) => {
    if (game[key] !== null) return;
    const copyGame = [...game];
    copyGame[key] = xTurn ? "x" : "o";
    setGame(copyGame);
    setXTurn(!xTurn);
    const currentWinner = checkWinner(copyGame);
    setWinner(currentWinner);
  };

  const resetGame = () => {
    setGame(squares.fill(null));
    setWinner("");
  };

  return (
    <div className="flex flex-col gap-4">
      <section className="grid grid-cols-3 gap-4">
        {game.map((item, index) => (
          <TicTacSquare
            key={index}
            onClick={() => onClick(index)}
            value={item}
          />
        ))}
      </section>
      {winner && <div>Congratulation {winner} you are the winner!!</div>}

      <button onClick={resetGame}>Reset the Game!</button>
    </div>
  );
}

export default TicTacToe;
