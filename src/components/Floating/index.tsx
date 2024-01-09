"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Floating: React.FC = () => {
  const openPhone = () => {
    window.open("tel:+1234567890", "_blank");
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  const openEmail = () => {
    window.open("mailto:info@example.com", "_blank");
  };

  return (
    <section className="fixed left-3 bottom-10 flex flex-col gap-5 select-none">
      {/* Email */}
      <div
        className="relative bg-black text-yellow-300 rounded-xl lg:rounded-2xl p-4 cursor-pointer blink"
        onClick={openEmail}
      >
        <div className="wave" />
        <MdEmail className={cn("text-sm md:text-xl xl:text-2xl")} />
      </div>

      {/* What's APP */}
      <div
        className="relative bg-green-500 text-white rounded-xl lg:rounded-2xl p-4 cursor-pointer blink"
        onClick={openWhatsApp}
      >
        <div className="wave" />
        <FaWhatsapp className={cn("text-sm md:text-xl xl:text-2xl")} />
      </div>

      {/* Phone */}
      <div
        className="relative bg-blue-1 text-white rounded-xl lg:rounded-2xl p-4 cursor-pointer blink"
        onClick={openPhone}
      >
        <div className="wave" />
        <FaPhoneVolume className={cn("text-sm md:text-xl xl:text-2xl")} />
      </div>
    </section>
  );
};

export default Floating;
