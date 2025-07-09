import React, { useCallback } from "react";
import { dynamicColor, dynamicPosition, renderIcon } from "./constants";
import { cn } from "../../../utils";

function Notification({
  type = "SUCCESS",
  msg = "my notification",
  position = "top-left",
  cancelTost,
}) {
  const renderSvg = renderIcon(type);

  return (
    <div
      className={cn(
        `flex justify-between px-4 py-2 text-white rounded-md w-1/2`,
        dynamicColor[type],
        dynamicPosition[position]
      )}
    >
      {renderSvg}

      <label>{msg}</label>
      <a onClick={cancelTost}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </a>
    </div>
  );
}

export default Notification;
