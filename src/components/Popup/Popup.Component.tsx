import { getOverlayStyle, getPopupStyle } from "@/assets/constant";
import PrimaryButton from "@/common/Button";
import CloseButton from "@/common/Button/CloseButton.Component";
import InputBox from "@/common/Input/InputBox.Component";
import { EmailOptions, sendQuickMail } from "@/lib/mail_sender";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

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
  const [countdown, setCountdown] = useState<number>(30 * 60);
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
        className={cn(
          getPopupStyle(isOpen),
          "bg-blue-1 text-white rounded w-[450px]"
        )}
      >
        <CloseButton onClose={onClose} />
        <div className="">
          {/* Message */}
          <h3 className="text-2xl text-orange-1 font-semibold w-full">
            Enquire Now and Get 5GMs Gold Free!!
          </h3>

          {/* Timer Section */}
          <div className="text-center text-lg w-full">
            {countdown > 0 ? (
              <div className="flex justify-center items-center gap-10 mt-6 w-full">
                {currentDay > 0 && (
                  <>
                    <div className="flex flex-col gap-2">
                      <div>Days</div>
                      <div className="p-3 rounded bg-white text-orange-1 font-bold text-xl">
                        {currentDay}
                      </div>
                    </div>
                    <span className="text-orange-1 font-bold text-3xl text-center items-center align-middle mt-7">
                      :
                    </span>
                  </>
                )}
                {currentHours > 0 && (
                  <>
                    <div className="flex flex-col gap-2">
                      <div>Hours</div>
                      <div className="p-3 rounded bg-white text-orange-1 font-bold text-xl">
                        {currentHours}
                      </div>
                    </div>
                    <span className="text-orange-1 font-bold text-3xl text-center items-center align-middle mt-7">
                      :
                    </span>
                  </>
                )}
                <>
                  <div className="flex flex-col gap-2">
                    <div>Minutes</div>
                    <div className="p-3 rounded bg-white text-orange-1 font-bold text-xl">
                      {currentMinutes}
                    </div>
                  </div>
                  <span className="text-orange-1 font-bold text-3xl text-center items-center align-middle mt-7">
                    :
                  </span>
                </>

                <div className="flex flex-col gap-2">
                  <div>Seconds</div>
                  <div className="p-3 rounded bg-white text-orange-1 font-bold text-xl">
                    {currentSeconds}
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-8 flex justify-center text-2xl text-orange-1">
                Time&apos;s up! Enquire now to get the offer.
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 my-6 flex flex-col gap-10">
          <div className="flex flex-col gap-5">
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
