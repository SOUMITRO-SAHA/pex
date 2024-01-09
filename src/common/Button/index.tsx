import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  onClick?: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  loading?: boolean;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  label,
  className,
  onClick,
  loading,
}) => {
  return (
    <Button
      variant={"default"}
      className={cn(
        "bg-primary-1 text-white rounded hover:bg-primary-1 hover:text-secondary-1 w-full text-center",
        className
      )}
      // @ts-expect-error
      onClick={onClick}
    >
      {loading ? "Loading...." : label}
    </Button>
  );
};

export default PrimaryButton;
