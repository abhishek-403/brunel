type Props = {};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/hero-img1-cropped.png";
import { Button } from "../../shadcn/components/ui/button";
import sparkle from "../../assets/sparkle.svg";
import rocketIcon from "../../assets/icon-rocket.svg";
import { useNavigate } from "react-router-dom";

export default function Hero({}: Props) {
  const navigate= useNavigate()
  return (
    <div className="w-full flex flex-col items-center gap-14">
      <div className="flex items-center justify-center flex-col  text-center">
        <div className="text-[#2DA950] text-[36px] font-normal font-grace ">
          Success Stories
        </div>
        <div className="text-[44px] font-semibold font-manrope w-[500px] leading-[3.5rem]">
          Every success journey we’ve encountered.
        </div>
      </div>
      <div className="flex items-center w-[1200px]  ">
        <div className="flex-1 flex relative item-center justify-center">
          <div className="w-[400px]   aspect-square">
            <img
              src={img1}
              className="rounded-3xl aspect-square object-cover"
            />
          </div>
          <div className="w-[200px] rounded-3xl flex flex-col bg-white font-manrope absolute p-4 pt-0 left-4 top-16 gap-6 drop-shadow-xl">
            <div className="relative  ">
              <object className=" top-0 w-14 h-14" data={sparkle}></object>
              <p className="font-bold  absolute top-8 left-6 text-4xl">40 %</p>
            </div>
            <div className="px-2 text-sm">
              Achieved reduction in project execution time by optimising team
              availability
            </div>
          </div>
          <div className="w-[190px]  rounded-3xl flex flex-col bg-[#002E18] text-white font-manrope absolute p-6 right-16 bottom-[-30px] gap-4 drop-shadow-xl">
            <div className="relative flex gap-2 items-baseline">
              <span className=" font-bold text-4xl">$0.5</span>
              <span className="  text-md text-[#CCCCCC]">MILLION</span>
            </div>
            <div className=" text-[12px] text-[#CCCCCC]">
              Reduced client expenses by saving on hiring and employee costs.
            </div>
          </div>
          <div className="w-[190px]  rounded-full flex bg-[white] text-black font-manrope absolute  p-2 left-12 bottom-10 gap-2 drop-shadow-xl items-center justify-center">
            <span className=" text-[12px] text-[#CCCCCC]">
              <object data={rocketIcon} type=""></object>
            </span>
            <div className="flex  flex-col ">
              <span className=" font-bold text-xl">10 days</span>
              <span className="  text-xs text-[#828282]">Staff Deployment</span>
            </div>
          </div>
        </div>
        <div className="flex-1 gap-8 flex flex-col">
          <div className="w-[400px] font-manrope text-[30px] font-semibold leading-[3rem]">
            Enhance fortune 50 company’s insights teams research capabilities
          </div>
          <div onClick={()=>navigate('/register')} className="">
            <Button className="rounded-full h-[60px] ">
              <div className="flex gap-5 items-center justify-center p-5">
                <p className="text-xl ">Explore More</p>
                <FontAwesomeIcon icon={faArrowRight} size={"lg"} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
