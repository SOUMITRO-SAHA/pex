"use client";
import React, { useEffect, useState } from "react";
import PopupComponent from "./Popup.Component";

const Popup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 1000);
  }, []);

  return (
    <>
      {/* Popup */}
      {showPopup && (
        <PopupComponent
          isOpen={showPopup}
          onClose={() => setShowPopup(!showPopup)}
        />
      )}
    </>
  );
};

export default Popup;
