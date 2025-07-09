import React, { useState } from "react";

function useCounterHook({ initialValue = 0 }: { initialValue?: number }) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return { increment, decrement, counter };
}

export default useCounterHook;
