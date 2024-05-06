type Props = {};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import img1 from "../../assets/hero-img1-cropped.png";
import { Button } from "../../shadcn/components/ui/button";

export default function Hero({}: Props) {
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
        <div className="flex-1 flex item-center justify-center">
          <div className="w-[350px]   aspect-square">
            <img
              src={img1}
              className="rounded-3xl aspect-square object-cover"
            />
          </div>
        </div>
        <div className="flex-1 gap-8 flex flex-col">
          <div className=" font-manrope text-[40px] font-semibold leading-[3.5rem]">
            Enhance fortune 50 company’s insights teams research capabilities
          </div>
          <div className="">
            <Button className="rounded-full h-[60px]">
              <div className="flex gap-2 items-center justify-center p-5">
                <p className="text-2xl ">Explore More</p>
                <FontAwesomeIcon icon={faArrowRight} size={"lg"} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
