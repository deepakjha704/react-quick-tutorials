import React from "react";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div className=" flex flex-col gap-4">
      <h1>Count: {count}</h1>
      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button
        className="p-2 border border-white"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="p-2 border border-white"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        className="p-2 border border-white"
        onClick={() => setCount(amount)}
      >
        Set
      </button>
    </div>
  );
}

export default Counter;
