import { brandName, email, phoneNumber } from "@/assets";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="w-full bg-blue-1 text-white">
        <div className="container mx-auto max-w-7xl py-5">
          {/* Brand Info */}
          <div className="flex flex-col gap-3">
            <div className="text-2xl">{brandName}</div>

            {/* About */}
            <div>
              <h6>More About {brandName}</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt autem facilis quia veniam nesciunt consequuntur soluta
                ad tempora non minima
              </p>
            </div>
            {/* Phone */}
            <div>
              <span>Phone :</span>
              <span>{phoneNumber}</span>
            </div>
            {/* Emain */}
            <div>
              <span>Email :</span>
              <span>{email}</span>
            </div>
          </div>

          {/* Userful Link */}
        </div>

        {/* Copywrite Info */}
        <div className="w-full p-5 bg-blue-1 bg-opacity-95 text-white">
          <div>Copywrite ©️ {brandName}. All rights reserved</div>
          <p>"Property Exchange" is owned and operated by {brandName}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
