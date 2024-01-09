import Image, { StaticImageData } from "next/image";
import React from "react";

interface IconProps {
  title: string;
  icon: string | StaticImageData;
}

const Icon: React.FC<IconProps> = ({ title, icon }) => {
  return (
    <div className="w-10 h-10 md:w-40 md:h-40 rounded-full" title={title}>
      <Image src={icon} alt={title} className="object-cover" />
    </div>
  );
};

export default Icon;
