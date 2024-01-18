import { getOverlayStyle, getPopupStyle } from "@/assets/constant";
import PrimaryButton from "@/common/Button";
import CloseButton from "@/common/Button/CloseButton.Component";
import InputBox from "@/common/Input/InputBox.Component";
import { EmailOptions, sendQuickMail } from "@/lib/mail_sender";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CoinIcon } from "../../../public/icon";
import Image from "next/image";

interface PopupProps {
  isOpen: boolean;
  onClose: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

type FormData = {
  name: string;
  phoneNumber: string;
};

const PopupComponent: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "+91",
  });
  const [countdown, setCountdown] = useState<number>(3.5 * 60 * 60);
  const [currentDay, setCurrentDay] = useState<number>(0);
  const [currentHours, setCurrentHours] = useState<number>(0);
  const [currentMinutes, setCurrentMinutes] = useState<number>(0);
  const [currentSeconds, setCurrentSeconds] = useState<number>(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
        updateCurrentTime(countdown - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isOpen, countdown]);

  const handlePopupQuerySubmit = async () => {
    try {
      if (formData.name && formData.phoneNumber) {
        const mailOption: EmailOptions = {
          name: formData.name,
          phoneNumber: formData.phoneNumber,
        };
        const { data } = await sendQuickMail(mailOption);

        if (data?.success) {
          toast.success(data?.message);
          onClose();
        }
      }
    } catch (error: any) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  const updateCurrentTime = (remainingTime: number) => {
    const days = Math.floor(remainingTime / (60 * 60 * 24));
    const hours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((remainingTime % (60 * 60)) / 60);
    const seconds = remainingTime % 60;

    setCurrentDay(days);
    setCurrentHours(hours);
    setCurrentMinutes(minutes);
    setCurrentSeconds(seconds);
  };

  return (
    <div className={cn(getOverlayStyle(isOpen))}>
      <div
        style={{
          backgroundImage: `url()`,
        }}
        className={cn(
          getPopupStyle(isOpen),
          "bg-blue-1 text-white rounded w-[90%] h-[75%] lg:w-[450px] flex flex-col justify-center items-center"
        )}
      >
        <CloseButton onClose={onClose} />
        <div className="mt-6 md:mt-0">
          {/* Message */}
          <h3 className="text-lg lg:text-2xl text-center font-bold uppercase text-yellow-300 w-full">
            Don&apos;t Miss Out
          </h3>

          <div className="flex justify-center items-center">
            <Image
              src={CoinIcon}
              alt=""
              className="w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]"
            />
          </div>

          <div className="text-2xl lg:text-3xl text-center font-[600]">
            Enquire Now and Get 🪙
            <div className="inline-block px-2 ">
              <div>5GMs</div>
              <div className="h-1 w-full bg-white rounded-full" />
            </div>
            🪙 Gold Free!!
          </div>

          {/* Timer Section */}
          <div className="text-center text-sm w-full text-black">
            {countdown > 0 ? (
              <div className="flex justify-center items-center gap-3 mt-6 w-full">
                {currentDay > 0 && (
                  <>
                    <div className="flex flex-col gap-2 w-[55px] h-[65px] justify-center items-center bg-white rounded">
                      <span className="text-lg text-red-500 font-bold">
                        {currentDay}
                      </span>
                      <span className="uppercase">Days</span>
                    </div>
                  </>
                )}
                {currentHours > 0 && (
                  <>
                    <div className="flex flex-col gap-2 w-[55px] h-[65px] justify-center items-center bg-white rounded">
                      <span className="text-lg text-red-500 font-bold">
                        {currentHours}
                      </span>
                      <span className="uppercase">Hrs</span>
                    </div>
                  </>
                )}

                <div className="flex flex-col gap-2 w-[55px] h-[65px] justify-center items-center bg-white rounded">
                  <span className="text-lg text-red-500 font-bold">
                    {currentMinutes}
                  </span>
                  <span className="uppercase">Min</span>
                </div>

                <div className="flex flex-col gap-2 w-[55px] h-[65px] justify-center items-center bg-white rounded">
                  <span className="text-lg text-red-500 font-bold">
                    {currentSeconds}
                  </span>
                  <span className="uppercase">Sec</span>
                </div>
              </div>
            ) : (
              <div className="py-8 flex justify-center text-2xl text-orange-1">
                Time&apos;s up! Enquire now to get the offer.
              </div>
            )}
          </div>
        </div>

        <div className="my-6 flex flex-col gap-5">
          <div className="flex gap-2">
            {/* Name */}
            <div>
              <div>Name</div>
              <InputBox
                type="text"
                name="name"
                placeholder="Type Name"
                state={formData?.name}
                setState={setFormData}
              />
            </div>

            {/* Phone Number */}
            <div>
              <div>Phone Number</div>
              <InputBox
                type="text"
                name="phoneNumber"
                placeholder="Type Phone Number"
                state={formData?.phoneNumber}
                setState={setFormData}
              />
            </div>
          </div>
          {/* Button */}
          <PrimaryButton label="Query Now" onClick={handlePopupQuerySubmit} />
        </div>
      </div>
    </div>
  );
};

export default PopupComponent;
