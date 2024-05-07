import { useEffect, useState } from "react";
import SecNavbar from "../../components/navbar/SecNavbar";
import { useNavigate } from "react-router-dom";

type Props = {};

export default function Submission({}: Props) {
  const [time, setTime] = useState<number>(5);
  const navigate = useNavigate();
  useEffect(() => {
    if (time === 0) {
      navigate("/");
    }
    const timecount = setTimeout(() => {
      if (time) {
        setTime((t) => t - 1);
      }
    }, 1000);
    return () => {
      clearTimeout(timecount);
    };
  }, [time]);
  return (
    <div className="flex flex-col h-[100vh] w-full ">
      <div className="mb-16">
        <SecNavbar />
      </div>
      <div className="font-manrope items-center w-full justify-center flex flex-col gap-8 ">
        <div className="flex flex-col  items-center">
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40.5" cy="40.5" r="28" fill="white" />
              <path
                d="M40.0014 73.3219C21.5919 73.3219 6.66809 58.3979 6.66809 39.9886C6.66809 21.5791 21.5919 6.65527 40.0014 6.65527C58.4107 6.65527 73.3347 21.5791 73.3347 39.9886C73.3347 58.3979 58.4107 73.3219 40.0014 73.3219ZM36.6768 53.3219L60.2471 29.7517L55.5331 25.0377L36.6768 43.8939L27.2488 34.4656L22.5347 39.1799L36.6768 53.3219Z"
                fill="#28B246"
              />
            </svg>
          </div>
          <div className="flex flex-col  text-center">
            <div className="text-[#2DA950] text-[36px] font-normal font-grace ">
              Success Submitted
            </div>
            <div className="text-[44px] font-semibold font-manrope w-[500px] leading-[3.5rem]">
              Congratulations
            </div>
          </div>
        </div>
        <div className="w-[450px]">
          <p className="text-lg text-center opacity-80">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
      </div>
      <div className="text-center px-auto mt-auto p-10 font-manrope">
        <span>Redirecting you to Homepage in </span>
        <span className="font-bold">{time} second</span>
      </div>
    </div>
  );
}
