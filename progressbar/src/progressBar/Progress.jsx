import { memo } from "react";
function Progress(props) {
  const { progressValue } = props;
  const currentProgress = progressValue - 100;

  console.log("progress", progressValue, currentProgress);

  return (
    <div
      className={`h-full w-full bg-yellow-200 origin-left ease-in duration-700`}
      style={{ transform: `translateX(${currentProgress}%)` }}
    ></div>
  );
}

export default memo(Progress);
