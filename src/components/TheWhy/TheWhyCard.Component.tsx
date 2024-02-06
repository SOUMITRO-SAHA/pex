import { TheWhyReasons } from "@/assets";
import { cn } from "@/lib/utils";
import React from "react";
import { IconType } from "react-icons";

export interface TheWhyCardProps extends TheWhyReasons {
  className: string;
}

const TheWhyCard: React.FC<TheWhyCardProps> = ({
  icon,
  title,
  subtitle,
  className,
}) => {
  const getIcon = (icon: IconType) => {
    const IconComponent = icon;
    return <IconComponent className={cn("text-blue-1")} />;
  };

  return (
    <div
      className={cn(
        "bg-white flex flex-col items-center p-2 py-3 gap-1 lg:p-5 rounded w-full shadow",
        className
      )}
    >
      {/* Icon */}
      <div className="h-12 w-12 md:h-20 md:w-20 bg-[#ffc7a6] rounded-full flex justify-center items-center text-2xl lg:text-3xl">
        {getIcon(icon)}
      </div>

      {/* Title */}
      <div className="flex flex-col gap-2 my-3">
        <div className="mt-1 text-center text-[0.9rem] lg:text-lg font-semibold">
          {title}
        </div>
        {/* Subtible */}
        <p className="text-center text-gray-1 text-[0.7rem] lg:text-sm font-semibold">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default TheWhyCard;
