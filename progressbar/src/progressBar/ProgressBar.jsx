import { useEffect, useRef, useState } from "react";
import Progress from "./Progress";
function Progressbar() {
  const [progressValue, setProgressValue] = useState(0);
  let progress = useRef();

  useEffect(() => {
    progress.current = setInterval(() => {
      setProgressValue((prevVal) => {
        const nextVal = prevVal + 10;
        if (nextVal >= 100 && progress.current) {
          clearInterval(progress.current);
        }
        return nextVal;
      });
    }, 500);
    return () => clearInterval(progress.current);
  }, []);

  return (
    <div className="flex m-0 items-center justify-center w-screen h-screen">
      <div className="h-8 w-[50%] bg-grey-400 rounded-full border overflow-hidden">
        <Progress progressValue={progressValue} />
      </div>
    </div>
  );
}

export default Progressbar;
