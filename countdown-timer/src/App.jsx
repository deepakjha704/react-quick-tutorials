import { useState } from "react";
import "./App.css";
import Timer from "./components/timer/timer";

function App() {
  const [hours, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalTime, setTotalTime] = useState(0);

  const [toggle, setToggle] = useState(false);

  function setTime() {
    if (hours > 0 || minutes > 0 || seconds > 0) {
      const total = hours * 60 * 60 + minutes * 60 + seconds;
      setTotalTime(total);
      setToggle(!toggle);
    }
  }

  const onReset = () => {
    setHour(0);
    setMinutes(0);
    setSeconds(0);
    setTotalTime(0);
    setToggle(false);
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "hours":
        setHour(e.target.value);
        break;
      case "minutes":
        setMinutes(e.target.value);
        break;
      default:
        setSeconds(e.target.value);
    }
  };

  return (
    <div className=" flex gap-4 flex-col">
      <div className="flex gap-4">
        <input
          id="hours"
          className="p-2 border rounded-md w-10"
          onChange={handleChange}
          value={hours}
        />
        <input
          id="minutes"
          className="p-2 border rounded-md w-10"
          onChange={handleChange}
          value={minutes}
        />
        <input
          id="seconds"
          className="p-2 border rounded-md w-10"
          onChange={handleChange}
          value={seconds}
        />
      </div>
      {totalTime > 0 && <Timer totalTime={totalTime} toggle={toggle} />}
      <button onClick={setTime}>{!toggle ? "start" : "pause"}</button>
      <button onClick={onReset}>reset</button>
    </div>
  );
}

export default App;
