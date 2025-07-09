import React from "react";

function TicTacSquare({ value, key, onClick }) {
  return (
    <button
      key={key}
      className="h-[100px] w-[100px] border rounded-sm bg-slate-200"
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default TicTacSquare;
