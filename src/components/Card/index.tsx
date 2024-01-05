import { cardContant } from "@/assets";
import React from "react";
import Card from "./Card.Component";
import { cn } from "@/lib/utils";

const CardSection: React.FC = () => {
  return (
    <section
      className={cn(
        "container mx-auto max-w-7xl p-8 px-16 rounded-2xl bg-white md:-mt-36 shadow-xl"
      )}
    >
      <div className={cn("grid grid-cols-12 gap-5 w-full")}>
        {cardContant?.map(({ id, specialMessage, icon, message }) => (
          <Card
            key={id}
            id={id}
            specialMessage={specialMessage}
            icon={icon}
            message={message}
            className={cn("col-span-full sm:col-span-6 md:col-span-3")}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
