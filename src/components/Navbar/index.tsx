"use client";
import PrimaryButton from "@/common/Button";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { BurgerIcon } from "../../../public/icon";
import Image from "next/image";
import MobileMenu from "../Modals/MobileMenu.Component";
import QuickQueryModals from "../Modals/QuickQueryModals.Component";

const Navbar: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openQuickEnquiry, setOpenQuickEnquiry] = useState(false);

  return (
    <>
      {openQuickEnquiry && (
        <QuickQueryModals
          isOpen={openQuickEnquiry}
          onClose={() => setOpenQuickEnquiry(!openQuickEnquiry)}
        />
      )}
      <nav className="w-full h-16 bg-white shadow">
        <section className={cn("container mx-auto max-w-7xl h-full")}>
          <div className="flex items-center justify-between h-full">
            {/* Brand Logo */}
            <div className="text-2xl font-bold">PEX</div>

            {/* Button
            <div className="w-[120px] sm:w-[150px] md:w-[180px]">
              <PrimaryButton
                label="Query Now"
                onClick={() => setOpenQuickEnquiry(!openQuickEnquiry)}
              />
            </div> */}

            {/* Menu Icon */}
            <div
              className="md:hidden h-10 w-10 overflow-hidden p-1 hover:bg-orange-1 hover:bg-opacity-20 rounded-full cursor-pointer"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <Image src={BurgerIcon} alt="" className="object-contain" />
            </div>

            {/* Modal */}
            {showMobileMenu && (
              <MobileMenu state={showMobileMenu} setState={setShowMobileMenu} />
            )}
          </div>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
