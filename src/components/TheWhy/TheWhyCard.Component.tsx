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
        "bg-white flex flex-col justify-center items-center p-8 rounded-xl w-full sm:w-[250px] shadow",
        className
      )}
    >
      {/* Icon */}
      <div className="h-16 w-16 sm:h-20 sm:w-20 bg-white-2 rounded-full flex justify-center items-center text-3xl text-blue-1">
        {getIcon(icon)}
      </div>

      {/* Title */}
      <div className="mt-6 text-center text-lg sm:text-xl font-semibold">
        {title}
      </div>
      {/* Subtible */}
      <p className="mt-4 text-center text-gray-1 text-sm sm:text-lg font-semibold">
        {subtitle}
      </p>
    </div>
  );
};

export default TheWhyCard;
