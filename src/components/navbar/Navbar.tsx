import { Button } from "../../shadcn/components/ui/button";
import logo from "../../assets/logo.svg"
import { useNavigate } from "react-router-dom";
type Props = {};

export default function Navbar({}: Props) {
  
  const navigate = useNavigate();
  return (
    <div className="w-full  flex justify-between  items-center p-4 border border-[#e7ebee] rounded-full">
      <div className="text-2xl pl-2">
        <object data={logo}> </object>
      </div>
      <div className="flex gap-4">
        <Button
          onClick={() => navigate("/register")}
          variant={"outline"}
          className="rounded-full"
        >
          Get Project
        </Button>
        <Button onClick={() => navigate("/register")} className="rounded-full">
          Onboard Talent
        </Button>
      </div>
    </div>
  );
}
