import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {  X } from "lucide-react";
type Props = {};

export default function SecNavbar({}: Props) {
   
  const navigate = useNavigate();
  return (
    <div className="w-full  flex justify-between  items-center py-4 rounded-full px-8">
      <div className="text-2xl pl-2">
        <object data={logo}> </object>
      </div>
      <div onClick={()=>navigate('/')} className="cursor-pointer flex gap-4 rounded-full border border-[#CACACA] p-3">
        <X className="" />
      </div>
    </div>
  );
}
