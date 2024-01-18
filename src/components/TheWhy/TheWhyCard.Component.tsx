import { TheWhyReasons } from "@/assets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { IconBase, IconType } from "react-icons";
import { FaChartLine } from "react-icons/fa";

interface TheyWhyCardProps extends TheWhyReasons {
  className: string;
}

const TheWhyCard: React.FC<TheyWhyCardProps> = ({
  icon,
  title,
  subtitle,
  className,
}) => {
  const getIcon = (icon: IconType) => {
    const IconComponent = icon;
    return <IconComponent />;
  };
  return (
    <div
      className={cn(
        "bg-white flex flex-col justify-center items-center p-2 py-3 gap-1 lg:p-8 rounded-lg w-full shadow",
        className
      )}
    >
      {/* Icon */}
      <div className="sm:h-16 sm:w-16 md:h-20 md:w-20 bg-white-2 rounded-full flex justify-center items-center text-2xl lg:text-3xl text-blue-1">
        {getIcon(icon)}
      </div>

      {/* Title */}
      <div className="mt-1 text-center text-[0.9rem] lg:text-lg font-semibold">
        {title}
      </div>
      {/* Subtible */}
      <p className="text-center text-gray-1 text-[0.7rem] lg:text-base font-semibold">
        {subtitle}
      </p>
    </div>
  );
};

export default TheWhyCard;
