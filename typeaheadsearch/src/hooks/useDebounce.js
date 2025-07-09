import React, { useEffect, useRef, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const handler = useRef();

  useEffect(() => {
    handler.current = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler.current);
  }, [value, delay]);
  return { debouncedValue };
}

export default useDebounce;
