"use client";
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
        className="relative text-2xl bg-black text-yellow-300 rounded-2xl p-4 cursor-pointer blink"
        onClick={openEmail}
      >
        <div className="wave" />
        <MdEmail />
      </div>

      {/* What's APP */}
      <div
        className="relative text-2xl bg-green-500 text-white rounded-2xl p-4 cursor-pointer blink"
        onClick={openWhatsApp}
      >
        <div className="wave" />
        <FaWhatsapp />
      </div>

      {/* Phone */}
      <div
        className="relative text-2xl bg-blue-1 text-white rounded-2xl p-4 cursor-pointer blink"
        onClick={openPhone}
      >
        <div className="wave" />
        <FaPhoneVolume />
      </div>
    </section>
  );
};

export default Floating;
