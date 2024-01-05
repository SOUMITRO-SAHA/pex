import { FormDataType } from "@/components/AssetType";
import { cn } from "@/lib/utils";
import React, {
  ChangeEvent,
  Dispatch,
  ReactEventHandler,
  SetStateAction,
} from "react";

interface InputBoxProps {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
  state: string | number | readonly string[] | undefined;
  setState: Dispatch<SetStateAction<any>>;
}

const InputBox: React.FC<InputBoxProps> = ({
  type,
  name,
  placeholder,
  className,
  state,
  setState,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={cn(
        "h-10 bg-white outline-none border rounded px-2 w-full text-blue-1",
        className
      )}
      value={state}
      onChange={handleInputChange}
    />
  );
};

export default InputBox;
