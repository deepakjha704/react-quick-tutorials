import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const Timer = ({ totalTime, toggle }) => {
  const [currentTime, setCurrentTime] = useState(totalTime);
  //   const timer = useRef<NodeJS.Timeout | null>(
  // );
  // const

  useEffect(() => {
    if (!toggle) return;

    setTimeout(() => {
      setCurrentTime(currentTime - 1);
    }, 1000);
  }, [currentTime, toggle]);

  const formateTime = () => {
    const temp_minute = currentTime / 60;
    const temp_hour = temp_minute / 60;

    const second = Math.floor(currentTime % 60);
    const minute = Math.floor(temp_minute % 60);
    const hour = Math.floor(temp_hour % 60);
    return `${hour} : ${minute} : ${second}`;
  };

  return (
    <>
      <div className=" flex items-center gap-2">
        <div className="p-2 ">{formateTime()}</div>
      </div>
    </>
  );
};

export default Timer;
