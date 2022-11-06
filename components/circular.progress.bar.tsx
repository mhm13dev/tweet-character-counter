import React from "react";
import clsx from "clsx";

interface Props {
  currentLength?: number;
  maxLength?: number;
  strokeWidth?: number;
  className?: string;
  counterClassName?: string;
}

export const CircularProgressBar: React.FC<Props> = ({
  currentLength = 0,
  maxLength = 100,
  strokeWidth = 10,
  className,
  counterClassName,
}) => {
  if (!currentLength) {
    return null;
  }

  const viewBoxSize = 100;
  const center = viewBoxSize / 2;
  const radius = center - strokeWidth;
  const arcLength = 2 * Math.PI * radius;

  const dashArray = arcLength;
  let dashOffset = dashArray * ((maxLength - currentLength) / maxLength);
  const thresholdReached = currentLength > maxLength;

  if (currentLength > maxLength) {
    // Set to 0 to stop the animation
    dashOffset = 0;
  }

  return (
    <div className={clsx("relative", className)}>
      <div
        className={clsx(
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
          {
            "text-red-500": thresholdReached,
            "text-blue-500": !thresholdReached,
          },
          counterClassName ? counterClassName : "text-[10px] font-semibold"
        )}
      >
        {!!currentLength && currentLength}
      </div>

      <svg
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className={clsx(`transform -rotate-90`)}
      >
        <circle
          r={radius}
          cx={center}
          cy={center}
          fill="none"
          stroke-width={strokeWidth}
          className={clsx("stroke-gray-200")}
        />
        <circle
          r={radius}
          cx={center}
          cy={center}
          fill="none"
          stroke-width={strokeWidth}
          strokeLinecap="round"
          stroke-dasharray={dashArray}
          stroke-dashoffset={dashOffset}
          className={clsx({
            "stroke-red-500": thresholdReached,
            "stroke-blue-500": !thresholdReached,
          })}
        />
      </svg>
    </div>
  );
};

/*
Calculations:

size = 100
strokeWidth = 10
center = size / 2
      = 100 / 2 = 50
radius = center - strokeWidth 
      = 50 - 10 = 40
progress = 0
arcLength = 2 * π * radius 
          = 2 * 3.14 * 45 = 282.6
arcOffset = arcLength * ((100 - progress)/100) 
          = 251.2 * ((100 - 0)/100) = 251.2
*/
