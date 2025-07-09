import React from "react";
import Notification from "./component/tost-notification/Notification";
import "./App.css";
import useNotification from "./hooks/useNotification";
import {
  ERROR,
  INFO,
  SUCCESS,
  WARNING,
} from "./component/tost-notification/constants";
function App() {
  const { Tost, triggerTost, cancelTost } = useNotification();

  const showTost = () => {
    triggerTost({ delay: 3000, type: ERROR, msg: "submitted successfully" });
  };
  const showTost2 = () => {
    triggerTost({ delay: 3000, type: WARNING, msg: "submitted successfully" });
  };
  const showTost3 = () => {
    triggerTost({ delay: 3000, type: SUCCESS, msg: "submitted successfully" });
  };
  const showTost4 = () => {
    triggerTost({ delay: 3000, type: INFO, msg: "submitted successfully" });
  };
  return (
    <section className="h-screen w-screen m-0 flex  flex-col gap-4">
      <Tost position={"top-left"} cancelTost={cancelTost} />
      <button onClick={showTost}>click 1</button>
      <button onClick={showTost2}>click 2</button>
      <button onClick={showTost3}>click 3</button>

      <button onClick={showTost4}>click 4</button>
    </section>
  );
}

export default App;
