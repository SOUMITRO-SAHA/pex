"use client";
import { QnaType } from "@/assets";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface QnaProps extends QnaType {
  className?: string;
  isOpen?: boolean;
}

const Qna: React.FC<QnaProps> = ({ question, answer, isOpen = false }) => {
  const [shoudShowAnswer, setShoudShowAnswer] = useState(isOpen);

  return (
    <div className="w-full bg-white rounded p-4 px-8 text-blue-1">
      <div className="w-full flex justify-between">
        <div className="text-xl ">{question}</div>

        <div
          className="text-2xl cursor-pointer"
          onClick={() => setShoudShowAnswer(!shoudShowAnswer)}
        >
          <IoIosArrowDown />
        </div>
      </div>
      {shoudShowAnswer && (
        <div className="my-8 text-lg text-gray-1 font-[500]">{answer}</div>
      )}
    </div>
  );
};

export default Qna;
