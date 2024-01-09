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
  const activeMobile = "bg-blue-1 text-white md:bg-white-1 md:text-black";
  return (
    <div
      key={id}
      className={cn(
        "flex gap-5 items-center justify-between border p-3 px-5 rounded-2xl max-w-[300px] cursor-pointer select-none",
        id === state ? `shadow-xl ${activeMobile}` : ""
      )}
      onClick={onClick}
    >
      <div className={cn("flex gap-5 items-center")}>
        <Image
          src={icon}
          alt={label}
          className={cn(
            "w-10 h-10 lg:w-16 lg:h-16",
            id === state
              ? "bg-blue-2 rounded-full p-1 md:p-0 md:bg-white-1 md:rounded-none"
              : ""
          )}
        />
        <div className="text-base md:text-xl">{label}</div>
      </div>

      <div className="hidden md:flex border-2 rounded-full border-blue-1 w-2 h-2 sm:w-4 sm:h-4  justify-center items-center">
        <div className={cn(id === state ? active : "")} />
      </div>
    </div>
  );
};

export default AssetTypeCard;
