import { CardItem } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface CardProps extends CardItem {
  className: string;
}

const Card: React.FC<CardProps> = ({
  id,
  specialMessage,
  icon,
  message,
  className,
}) => {
  return (
    <div
      key={id}
      className={cn(
        "flex flex-col gap-5 justify-center items-center bg-white-2 p-8 rounded-2xl text-center",
        className
      )}
    >
      {specialMessage && <div>{specialMessage}</div>}
      <div>
        <Image
          src={icon}
          alt={specialMessage + "__icon"}
          className={cn("w-12 h-12 md:w-20 md:h-20")}
        />
      </div>

      <div className="text-2xl font-bold">{message}</div>
    </div>
  );
};

export default Card;
