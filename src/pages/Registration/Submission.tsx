import { useEffect, useState } from "react";
import SecNavbar from "../../components/navbar/SecNavbar";
import { useNavigate } from "react-router-dom";
import greenOk from '../../assets/green-ok.svg'
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
          <object data={greenOk} type=""></object>
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
