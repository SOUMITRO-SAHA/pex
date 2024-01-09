import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

interface AssetTypeCardProps {
  id: number;
  label: string;
  icon: string | StaticImageData;
  state: number;
  onClick: MouseEventHandler;
}

const AssetTypeCard: React.FC<AssetTypeCardProps> = ({
  id,
  label,
  icon,
  state,
  onClick,
}) => {
  const active = "w-2 h-2 bg-blue-1 rounded-full";
  return (
    <div
      key={id}
      className={cn(
        "flex gap-5 items-center justify-between border p-3 px-5 rounded-2xl w-[300px] cursor-pointer bg-white-1 select-none",
        id === state ? "shadow-xl" : ""
      )}
      onClick={onClick}
    >
      <div className="flex gap-5 items-center ">
        <Image src={icon} alt={label} className="w-8 h-8 md:w-16 md:h-16" />
        <div className="text-lg md:text-xl">{label}</div>
      </div>

      <div className="border-2 rounded-full border-blue-1 w-2 h-2 sm:w-4 sm:h-4 flex justify-center items-center">
        <div className={cn(id === state ? active : "")} />
      </div>
    </div>
  );
};

export default AssetTypeCard;
