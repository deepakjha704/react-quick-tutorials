import React from "react";

function useCheckWinner() {
  const winner = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const checkWinner = (game) => {
    for (let item of winner) {
      const [a, b, c] = item;

      if (
        game[a - 1] !== null &&
        game[a - 1] === game[b - 1] &&
        game[a - 1] === game[c - 1]
      ) {
        return game[a - 1];
      }
    }
  };
  return { winner, checkWinner };
}

export default useCheckWinner;
