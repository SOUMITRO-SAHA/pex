import { QnaArray } from "@/assets";
import React from "react";
import Qna from "./Qna.Component";

const FAQ: React.FC = () => {
  return (
    <section className="bg-white-2 section">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col auto_gap justify-center items-center">
          <div className="title text-blue-1">Frequently Asked Question</div>
          <div className="line-b-bar" />
        </div>
        <div className="mt-12 flex flex-col gap-5">
          {QnaArray.map(({ id, question, answer }) => (
            <Qna
              key={id}
              id={id}
              question={question}
              answer={answer}
              isOpen={id === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
