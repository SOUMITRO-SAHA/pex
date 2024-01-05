import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface CloseButtonProps {
  onClose: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClose, className }) => {
  const defaultPosition = className?.includes("relative")
    ? ""
    : "absolute top-2 right-2";

  return (
    <>
      <span
        className={cn(
          "cursor-pointer text-gray-500 h-10 w-10 flex justify-center items-center border rounded-full bg-white hover:bg-slate-200",
          defaultPosition,
          className
        )}
        onClick={onClose}
      >
        <span className="text-3xl">&times;</span>
      </span>
    </>
  );
};

export default CloseButton;
