import React from "react";
import { cn } from "@/lib/utils";

interface DottedSeparatorProps {
  clasName?: string;
  color?: string;
  height?: string;
  dotSize?: string;
  gapSize?: string;
  direction?: "horizantal" | "vertical";
}
function DottedSeparator({
  clasName,
  color = "#d4d4d8",
  height = "2px",
  dotSize = "2px",
  gapSize = "6px",
  direction = "horizantal",
}: DottedSeparatorProps) {
  const isHorizantal = direction === "horizantal";
  return (
    <div
      className={cn(
        isHorizantal
          ? "w-full flex items-center"
          : "h-ful flex flex-col items-center",
        clasName,
      )}
    >
      <div
        className={isHorizantal ? "flex-grow" : "flex-grow-0"}
        style={{
          width: isHorizantal ? "100%" : height,
          height: isHorizantal ? height : "100%",
          backgroundImage: `radial-gradient(circle,${color} 25%, transparent 25%)`,
          backgroundSize: isHorizantal
            ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
            : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
          backgroundRepeat: isHorizantal ? "repeat-x" : "repeat-y",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}

export default DottedSeparator;
