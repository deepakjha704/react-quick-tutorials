import { renderHook, act } from "@testing-library/react";
import useCounterHook from "./useCounterHook";
import user from "@testing-library/user-event";

describe("render custom hook", () => {
  test("render the counter hook", () => {
    const { result } = renderHook(() => useCounterHook({ initialValue: 0 }));

    expect(result.current.counter).toBe(0);
  });

  test("should increment the count", async () => {
    const { result } = renderHook(() => useCounterHook({ initialValue: 0 }));
    act(() => result.current.increment());
    expect(result.current.counter).toBe(1);
  });

  test("should decrement the count", async () => {
    const { result } = renderHook(() => useCounterHook({ initialValue: 0 }));
    act(() => result.current.decrement());
    expect(result.current.counter).toBe(-1);
  });
});
