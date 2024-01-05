import React, { MouseEventHandler } from "react";
import { CrossIcon } from "../../../public/icon";
import Image from "next/image";

interface CrossButtonProps {
  onClick: MouseEventHandler<HTMLDivElement>;
}

const CrossButton: React.FC<CrossButtonProps> = ({ onClick }) => {
  if (!onClick) {
    return null;
  }

  return (
    <div onClick={onClick}>
      <Image
        src={CrossIcon}
        alt=""
        className="h-10 w-10 object-contain p-2 rounded-full hover:bg-white-2 hover:bg-opacity-25 cursor-pointer"
      />
    </div>
  );
};

export default CrossButton;
