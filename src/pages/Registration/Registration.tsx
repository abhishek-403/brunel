import SecNavbar from "../../components/navbar/SecNavbar";
import { Button } from "../../shadcn/components/ui/button";
import { Input } from "../../shadcn/components/ui/input";

type Props = {};

export default function Registration({}: Props) {
  return (
    <div className="flex flex-col gap-10 ">
      <div>
        <SecNavbar />
      </div>
      <div className="w-full items-center flex flex-col gap-10">
        <div className="flex items-center justify-center flex-col  text-center">
          <div className="text-[#2DA950] text-[36px] font-normal font-grace ">
            Registration Form
          </div>
          <div className="text-[44px] font-semibold font-manrope w-[500px] leading-[3.5rem]">
            Start your success Journey here!
          </div>
        </div>
        <div className="flex flex-col w-[320px] font-manrope gap-14">
          <div className="flex flex-col gap-5">
            <Input placeholder="Enter the name" className=" h-[50px] p-5" />
            <Input type="email" placeholder="Enter the email" className="h-[50px] p-5" />
          </div>
          <Button className="h-[50px]">Submit</Button>
        </div>
      </div>
    </div>
  );
}
